import { useCallback, useEffect, useRef, useState } from 'react';
import { heroSlides, heroCtaText } from '../../content/site';
import Html from '../common/Html';
import { ArrowRight, ArrowLeft } from '../common/icons';

/** How long each slide holds before the carousel advances, in ms. */
const INTERVAL = 6000;

/** The visible slide's headline is the page's h1; the rest are paragraphs. */
function Heading({ active, ...rest }) {
  const Tag = active ? 'h1' : 'p';
  return <Tag {...rest} />;
}

/**
 * The home page hero: five capability slides, one screen tall.
 *
 * Each slide is a full-bleed photograph whose artwork sits on the right and
 * whose left third is deliberately empty, with the copy overlaid into that
 * space. The counter, the display heading, the flat pill and the type scale
 * are the site's existing pattern; the per-slide accent colour is why
 * `--slide-accent` and `--slide-tint` are set as inline custom properties and
 * everything else comes from `ls.css`.
 *
 * **These were product slides and are not any more.** The copy is now about
 * capabilities — knowledge engineering, security, trust — so the product
 * lockup that sat above each headline is gone (slides a–d carry an eyebrow
 * there, slide e nothing), the per-slide product link is gone, and only slide
 * e has a supporting paragraph. See `heroSlides` in `site.js`.
 *
 * Headings stay at weight 400. The comp sets them bold; the pattern this site
 * is built on does not, and oversized 400 is the single thing that makes it
 * read as that pattern rather than as a generic hero.
 *
 * The copy runs to the full width of the viewport rather than the site's
 * 1152px measure — `ls-container--fluid` — because the artwork behind it is
 * full-bleed and a centred 1152px column left the text floating in the middle
 * of a photograph that reaches the screen edges.
 *
 * ## Autoplay
 *
 * Always on, and it stays on. The arrows and dots jump between slides without
 * switching it off, so someone who wants to sit on a particular slide can,
 * and the carousel picks up again afterwards.
 *
 * It holds while the pointer or the keyboard is inside the hero, so it will
 * not move a slide out from under someone who is reading it or tabbing
 * through it. That check is made against the DOM at each tick rather than
 * kept in state — see the effect below for why.
 *
 * There is no live region. With autoplay that never stops, one would announce
 * a slide change every six seconds and talk over whatever a screen reader
 * user is actually reading, anywhere on the page. State is carried instead by
 * each slide's `aria-label` ("3 of 5: Security by Design") and `aria-current`
 * on the dots, which are read on demand rather than pushed. The name those
 * labels use is `slide.name`, which exists only for this.
 *
 * ## Why all five slides stay mounted
 *
 * Only one is visible, but all five are in the DOM so the crossfade has
 * something to fade between and so the four idle backgrounds are already
 * decoded when their turn comes. The hidden ones are `inert`, which takes
 * their "Learn More" button out of the tab order and hides them from
 * assistive technology — without it, tabbing out of the hero walks through
 * five invisible controls.
 */
export default function Hero() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;
  const rootRef = useRef(null);

  // Autoplay is permanent, except where the reader has asked the whole system
  // for less movement. Decided once at mount.
  const [autoplay] = useState(
    () => !(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)
  );

  // Advancing by index rather than by delta keeps the wrap in one place, and
  // the double modulo makes `index - 1` from slide 0 land on the last slide
  // instead of -1. It does not touch autoplay: manual control is a jump, not
  // a takeover.
  const go = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count]
  );

  /*
   * "Is the pointer or the keyboard inside the hero" is asked at each tick
   * rather than tracked in state.
   *
   * The first version of this kept a `paused` flag written by onMouseEnter /
   * onMouseLeave / onFocus / onBlur, and it could desync: focus a slide's
   * "Learn More", let the carousel advance, and that control becomes `inert`
   * under the focused element. The blur that should have cleared the flag
   * never arrives, so the carousel stops for good with nothing on screen
   * explaining why — and with the pause button gone there is now no way back.
   *
   * Reading `:hover` and `:focus-within` off the DOM at the moment the
   * decision is made has no flag to leave stale.
   */
  useEffect(() => {
    if (!autoplay) return undefined;
    const id = setInterval(() => {
      if (rootRef.current?.matches(':hover, :focus-within')) return;
      setIndex((i) => (i + 1) % count);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [autoplay, count]);

  return (
    <section
      className="ls-heroslider"
      ref={rootRef}
      aria-roledescription="carousel"
      aria-label="Mindlogicx capabilities"
    >
      {heroSlides.map((slide, i) => {
        const active = i === index;
        return (
          <div
            className="ls-heroslide"
            key={slide.id}
            data-active={active}
            // `--slide-on-accent` travels with `--slide-accent` because the
            // two brand colours take opposite label colours — see `BRAND` in
            // site.js.
            style={{
              '--slide-accent': slide.accent,
              '--slide-on-accent': slide.onAccent,
              '--slide-tint': slide.accent,
            }}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${slide.name}`}
            // `true`, not `""` — React 19 reads an empty string as false, which
            // would leave four invisible "Learn More" links in the tab order.
            inert={!active || undefined}
          >
            <img
              className="ls-heroslide__bg"
              src={slide.bg}
              alt=""
              aria-hidden="true"
              // The first slide is the largest thing above the fold; the rest
              // can wait until the browser is otherwise idle.
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              width="1672"
              height="941"
            />

            <div className="ls-container ls-container--fluid ls-heroslide__inner">
              <p className="ls-heroslide__count">
                <span className="ls-index">
                  {String(i + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                </span>
                <span className="ls-heroslide__rule" aria-hidden="true" />
              </p>

              {/*
                Where the product lockup used to be. These slides are
                capabilities, not products, so there is no mark to place —
                slides a–d carry an eyebrow here and slide e carries nothing,
                as supplied.
              */}
              {slide.eyebrow && (
                <span className="ls-eyebrow ls-heroslide__eyebrow">{slide.eyebrow}</span>
              )}

              {/*
                Only the slide on screen is the page's `<h1>`; the other four
                are paragraphs wearing the same type. Five `<h1>`s would put
                five competing top-level headings into the document outline —
                `inert` hides the idle ones from assistive technology but does
                nothing for a crawler reading the markup.
              */}
              <Heading active={active} className="ls-h1 ls-heroslide__heading">
                <Html value={slide.heading} />
              </Heading>

              {slide.content && (
                <p className="ls-lead ls-heroslide__text">{slide.content}</p>
              )}

              {/*
                A real `<button>`, not an `<a>` without an href. These slides
                have no destination yet (see `heroCtaText` in site.js), and an
                hrefless anchor is invisible to the keyboard and announced as
                nothing — the one piece of the reference design not worth
                copying. Pressing this currently does nothing; give a slide a
                `link` and swap this for a router `Link`.
              */}
              <button type="button" className="ls-pill ls-heroslide__cta">
                {heroCtaText}
                <ArrowRight />
              </button>
            </div>
          </div>
        );
      })}

      <div
        className="ls-container ls-container--fluid ls-heroslider__controls"
        style={{ '--slide-tint': heroSlides[index].accent }}
      >
        <div className="ls-heroslider__dots" role="group" aria-label="Choose slide">
          {heroSlides.map((slide, i) => (
            <button
              type="button"
              key={slide.id}
              className="ls-heroslider__dot"
              data-active={i === index}
              aria-label={`Go to slide ${i + 1}: ${slide.name}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>

        <div className="ls-heroslider__arrows">
          <button
            type="button"
            className="ls-heroslider__arrow"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            className="ls-heroslider__arrow"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
