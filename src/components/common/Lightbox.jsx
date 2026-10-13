import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Close, ZoomIn, ZoomOut } from './icons';

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const STEP = 0.5;

/**
 * A full-screen image viewer: switch photographs, zoom, pan, close.
 *
 * Built for the Mindlogicxian Club gallery, but it knows nothing about the
 * club — give it `images`, a starting index and an `onClose`.
 *
 * ## Conventions it follows
 *
 * Mounted only while open, the same as `MobileNav`: the body scroll lock and
 * the key handlers live in plain effects and unwind on unmount, so there is no
 * "is the hidden dialog still holding the lock?" state to track. The caller
 * mounts it.
 *
 * ## Keyboard
 *
 * `Esc` closes, `←`/`→` switch, `+`/`-` zoom, `0` resets. Arrow keys are the
 * reason this is a dialog and not a popover — once it is open it owns the
 * keyboard, so focus is trapped inside it and returned to the thumbnail that
 * opened it on close. Without that last part, closing the viewer drops a
 * keyboard user back at the top of the document.
 *
 * ## Zoom and pan
 *
 * One `transform` carries both: `translate()` then `scale()`, in that order,
 * so the pan offset stays in screen pixels and does not get multiplied by the
 * zoom factor — otherwise dragging accelerates as you zoom in.
 *
 * Panning is only possible while zoomed (at 1× there is nothing to pan to), so
 * the offset is reset whenever the zoom returns to 1× and whenever the image
 * changes. Dragging uses pointer events, which cover mouse, touch and pen in
 * one path, with `setPointerCapture` so a fast drag that leaves the image does
 * not get stuck mid-gesture.
 */
export default function Lightbox({ images, startIndex = 0, labels = {}, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const drag = useRef(null);

  const image = images[index];
  const many = images.length > 1;

  const go = useCallback(
    (delta) => {
      setIndex((i) => (i + delta + images.length) % images.length);
      setZoom(MIN_ZOOM);
      setOffset({ x: 0, y: 0 });
    },
    [images.length]
  );

  const changeZoom = useCallback((delta) => {
    setZoom((z) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(z + delta).toFixed(2)));
      // Nothing to pan to once we are back at 1×.
      if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  /* Lock the page, own the keyboard, and give focus back when we leave. */
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          if (many) go(1);
          break;
        case 'ArrowLeft':
          if (many) go(-1);
          break;
        case '+':
        case '=':
          changeZoom(STEP);
          break;
        case '-':
          changeZoom(-STEP);
          break;
        case '0':
          setZoom(MIN_ZOOM);
          setOffset({ x: 0, y: 0 });
          break;
        case 'Tab': {
          /*
           * Trap. Without this, Tab walks into the page behind the overlay —
           * which is still rendered, just visually covered.
           *
           * `:not(:disabled)` is load-bearing. The zoom buttons disable at the
           * ends of their range, and the first control in DOM order is "zoom
           * out" — disabled at the default 100%. Wrapping focus onto a
           * disabled button does nothing at all, so without this filter the
           * trap silently failed in exactly the state every viewer opens in.
           */
          const focusable = dialogRef.current?.querySelectorAll('button:not(:disabled)');
          if (!focusable?.length) break;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
          break;
        }
        default:
          return;
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      previouslyFocused?.focus?.();
    };
  }, [onClose, go, changeZoom, many]);

  /* ---- panning ---- */

  const onPointerDown = (e) => {
    if (zoom === MIN_ZOOM) return;
    drag.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current) return;
    setOffset({ x: e.clientX - drag.current.x, y: e.clientY - drag.current.y });
  };

  const endDrag = (e) => {
    if (!drag.current) return;
    drag.current = null;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      className="ls-lb"
      role="dialog"
      aria-modal="true"
      aria-label={labels.dialog ?? 'Image viewer'}
      ref={dialogRef}
    >
      {/* The backdrop closes on click. It is a plain div, not a button: the
          close button in the toolbar is the keyboard-reachable way out, and a
          full-screen button would be announced as one enormous control. */}
      <div className="ls-lb__backdrop" onClick={onClose} aria-hidden="true" />

      <div className="ls-lb__bar">
        <span className="ls-lb__count">
          {index + 1} / {images.length}
        </span>

        <div className="ls-lb__tools">
          <button
            type="button"
            className="ls-lb__btn"
            onClick={() => changeZoom(-STEP)}
            disabled={zoom <= MIN_ZOOM}
            aria-label={labels.zoomOut ?? 'Zoom out'}
          >
            <ZoomOut />
          </button>

          {/* Announced, not just drawn — a zoom control whose only feedback is
              the picture getting bigger tells a screen-reader user nothing. */}
          <span className="ls-lb__zoom" role="status" aria-live="polite">
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            className="ls-lb__btn"
            onClick={() => changeZoom(STEP)}
            disabled={zoom >= MAX_ZOOM}
            aria-label={labels.zoomIn ?? 'Zoom in'}
          >
            <ZoomIn />
          </button>

          <button
            type="button"
            className="ls-lb__btn ls-lb__btn--close"
            onClick={onClose}
            aria-label={labels.close ?? 'Close image view'}
            ref={closeRef}
          >
            <Close />
          </button>
        </div>
      </div>

      <div className="ls-lb__stage">
        {many && (
          <button
            type="button"
            className="ls-lb__nav ls-lb__nav--prev"
            onClick={() => go(-1)}
            aria-label={labels.prev ?? 'Previous image'}
          >
            <ArrowLeft />
          </button>
        )}

        <div
          className={`ls-lb__frame${zoom > MIN_ZOOM ? ' ls-lb__frame--zoomed' : ''}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <img
            // Keyed so a change of photograph remounts rather than showing the
            // previous one stretched into the new one's box while it loads.
            key={image.src}
            src={image.src}
            alt={image.alt ?? ''}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            }}
            draggable={false}
          />
        </div>

        {many && (
          <button
            type="button"
            className="ls-lb__nav ls-lb__nav--next"
            onClick={() => go(1)}
            aria-label={labels.next ?? 'Next image'}
          >
            <ArrowRight />
          </button>
        )}
      </div>

      {image.title && <p className="ls-lb__caption">{image.title}</p>}
    </div>
  );
}
