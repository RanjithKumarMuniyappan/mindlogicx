import { useEffect, useRef, useState } from 'react';

/**
 * Counts up once, the first time it is scrolled into view.
 *
 * Ported from the Mindlogicx 2025 frontend (`components/primitives/Counter.tsx`),
 * with framer-motion's `animate` replaced by a `requestAnimationFrame` loop —
 * this build has no animation library.
 *
 * **The true value is in the DOM from the first paint**, as the `aria-label`,
 * so assistive technology and crawlers never read a mid-animation "3" where
 * the page claims twenty years. The counting digits are `aria-hidden`; only
 * the label is announced. That is the source's arrangement and the reason the
 * component exists at all rather than being a number in the markup.
 *
 * Honours `prefers-reduced-motion`: the value is simply printed.
 */

/** Expo-out — the source's `EASE_OUT_EXPO`, as a plain easing function. */
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

export default function Counter({ value, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null);
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /*
   * Decided at mount, not in an effect — the same arrangement as `Reveal`.
   * If the user prefers reduced motion, or the browser cannot observe
   * intersection, the figure starts settled and never animates; it must never
   * be possible for an unobserved counter to sit on screen reading zero.
   */
  const settled = reduced || typeof IntersectionObserver === 'undefined';
  const [display, setDisplay] = useState(settled ? value : 0);

  useEffect(() => {
    if (settled) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    let frame = 0;
    let start = 0;

    const run = (now) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(easeOutExpo(t) * value));
      if (t < 1) frame = requestAnimationFrame(run);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect(); // once only
        frame = requestAnimationFrame(run);
      },
      { rootMargin: '0px 0px -15% 0px' },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration, settled]);

  const full = `${prefix}${value}${suffix}`;

  return (
    <span ref={ref} className="ls-counter" aria-label={full} title={full}>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  );
}
