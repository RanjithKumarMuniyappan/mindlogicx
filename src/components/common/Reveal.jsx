import { useEffect, useRef, useState } from 'react';

/**
 * Reproduces the template's WOW.js entrance animations without WOW.js itself.
 *
 * The template marks a block `wow fadeInLeft` and lets WOW.js add `animated`
 * once it scrolls into view. WOW.js also sets `visibility: hidden` inline until
 * then — nothing in any stylesheet does that — so an element that never gets
 * observed simply stays visible. This component keeps that property: it only
 * ever *adds* the `animated` class, so if IntersectionObserver is unavailable
 * or the callback never fires, the content is still on screen. Animation is a
 * progressive enhancement here, never a precondition for being readable.
 */
export default function Reveal({
  as: Tag = 'div',
  effect = 'fadeInUp',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  // Decided at mount, not in an effect: if the user prefers reduced motion, or
  // the browser cannot observe intersection, the element starts in its settled
  // state and never animates at all.
  const [shown, setShown] = useState(
    () =>
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={[className, 'wow', effect, shown ? 'animated' : ''].filter(Boolean).join(' ')}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
