import { products } from '../../content/site';

/**
 * The product wordmarks, scrolling right to left on the one solid-colour band
 * in the pattern.
 *
 * No heading. The reference's equivalent strip is headed "TRUSTED BY THOUSANDS
 * OF COMPANIES GLOBALLY" above a row of its customers' logos — wording that
 * was never available here, since these are Mindlogicx's *own* products and
 * reusing it would turn five internal platforms into a fabricated customer
 * list. The label that stood in its place was dropped by request.
 *
 * ## How the loop works
 *
 * The list is rendered **twice** and the track is animated from `0` to
 * `-50%`. At the instant it reaches -50% the second copy sits exactly where
 * the first started, so restarting the animation is invisible and the strip
 * reads as one continuous belt. This is why the duplicate must be an exact
 * copy in the same order — drop or reorder one item and the loop visibly
 * jumps once per cycle.
 *
 * Each item is `flex: 0 0 var(--logo-slot)`, a viewport fraction, so the five
 * wordmarks divide the screen evenly rather than being spaced by a gap that
 * drifts with logo width. `--logo-slot` is the only thing the breakpoints
 * change: five across on desktop, fewer and wider as the screen narrows.
 *
 * ## Accessibility
 *
 * The duplicate set is `aria-hidden`, so the five products are announced once
 * rather than ten times. The track stops on hover, and
 * `prefers-reduced-motion` stops it altogether — at which point the first
 * copy is simply a static, evenly-spaced row, which is what the strip looked
 * like before it moved. Nothing here is a control, so there is no keyboard
 * trap and nothing to pause for WCAG 2.2.2: the content is identical whether
 * it is moving or not.
 */
export default function Brands() {
  return (
    <section className="ls-section--accent ls-logostrip" aria-label="Mindlogicx platforms">
      {/* Full-bleed: no container, so the wordmarks run off both edges. */}
      <div className="ls-logostrip__viewport">
        <ul className="ls-logostrip__track">
          {products.map((product) => (
            <li className="ls-logostrip__item" key={product.slug}>
              <img src={product.logoWhite} alt={product.title} />
            </li>
          ))}
          {/* The seamless half. Hidden from assistive technology and from the
              accessibility tree entirely — it is the same five products. */}
          {products.map((product) => (
            <li className="ls-logostrip__item" key={`${product.slug}-loop`} aria-hidden="true">
              <img src={product.logoWhite} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
