import { Link } from 'react-router-dom';
import { educationPage } from '../content/site';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Reveal from '../components/common/Reveal';
import { ArrowUpRight } from '../components/common/icons';

/**
 * `/ed-tech` — the Education sector page.
 *
 * Built 2026-10-12. The six platforms used to be a third level in the
 * Technology menu; that nesting was dropped and this page is where they live
 * now, presented one after another rather than as a grid, as requested.
 *
 * ## Why one per row and not a card grid
 *
 * Each platform gets a full band: the lockup, the name, the one-line
 * proposition at display size, the longer description, and the link. A grid
 * would force the descriptions down to a couple of lines each and make six
 * products read as a list of features. The point of the page is that these
 * are six separate pieces of infrastructure.
 *
 * Bands alternate white and smoke, and the photograph alternates side so the
 * page has a rhythm rather than six identical rows. Each band carried an
 * `E/01`…`E/06` index until 2026-10-12, when numbered indices were taken off
 * the whole site.
 *
 * ## IntelliMINDS
 *
 * The sixth product **has no approved copy and no artwork**, which is the
 * state the source project records too. It renders as a deliberately plain
 * band: no photograph, no lockup, the placeholder wording shown as-is and
 * labelled "In development", and no link styled as a live destination. That
 * is honest rather than tidy — a sixth invented paragraph, or a reused
 * photograph standing in for a product that has none, would both be worse.
 *
 * ## Routes
 *
 * **IntelliTUTE and IntelliWORK now link to their real pages** (`/intellitute`,
 * `/intelliwork`, built 2026-10-13). The remaining four still point at
 * `/products/*`, which renders `Placeholder`. Those links are real and will
 * start working when those pages
 * are built; nothing here is a dead `href="#"`.
 */
/*
 * Bands alternate smoke / white starting on **smoke**, because the page hero
 * above the first one is white. The photograph flips side on the same
 * parity, so a white band always has its picture on the left. Six products
 * means the last band is white and the dark footer follows it cleanly — add
 * or remove a product and this needs re-checking.
 */
function ProductBand({ product, index }) {
  const flipped = index % 2 === 1;
  const band = flipped ? 'ls-section--white' : 'ls-section--smoke';

  if (product.placeholder) {
    return (
      <section className={`ls-section ${band} ls-edu__band ls-edu__band--tbc`}>
        <div className="ls-container">
          <Reveal className="ls-edu__tbc" effect="fadeInUp">
            <h2 className="ls-h3 ls-edu__name">{product.name}</h2>
            <p className="ls-edu__tagline">{product.tagline}</p>
            <p className="ls-edu__status">In development</p>
            <p className="ls-body ls-edu__desc">{product.description}</p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className={`ls-section ${band} ls-edu__band`}>
      <div className="ls-container">
        <div className={`ls-edu__grid${flipped ? ' ls-edu__grid--flip' : ''}`}>
          <Reveal className="ls-edu__copy" effect="fadeInUp">

            {/* The lockup carries the product name, so the heading beside it
                would be read twice. The `h2` stays for document structure and
                is hidden from sight, not from assistive tech. */}
            <img
              className="ls-edu__logo"
              src={product.logo}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <h2 className="ls-h3 ls-edu__name ls-visually-hidden">{product.name}</h2>

            <p className="ls-edu__tagline">{product.tagline}</p>
            <p className="ls-edu__prop">{product.proposition}</p>
            <p className="ls-body ls-edu__desc">{product.description}</p>

            {/* `ctaHidden` suppresses the link for a product whose route
                does not exist yet — see `site.js`. */}
            {!product.ctaHidden && (
              <Link className="ls-edu__link" to={product.link}>
                Explore {product.name}
                <ArrowUpRight size={14} />
              </Link>
            )}
          </Reveal>

          <Reveal
            className={`ls-edu__media${product.diagram ? ' ls-edu__media--diagram' : ''}`}
            effect={flipped ? 'fadeInLeft' : 'fadeInRight'}
          >
            {/*
              `<picture>` rather than a plain `<img>` for the animated
              diagrams. **Source order is the logic here** — the browser takes
              the first match, so these cannot be reordered:

                1. `prefers-reduced-motion` → the still frame. First, so it
                   wins over the animation for anyone who asked for less
                   motion. No JavaScript, and no flash of movement first.
                2. `image/webp` → the animated WebP. Across the three diagrams
                   that serves 3.9MB of GIF as 1.6MB.
                3. the `<img>` → the supplied GIF, for anything supporting
                   neither.

              The still matters because these loop forever. WCAG 2.2.2 wants a
              way to stop motion running past five seconds, and neither a GIF
              nor an animated WebP can be paused — so the people most affected
              get a still instead. A visible pause control would satisfy it
              more fully; this is the no-JavaScript half of it.
            */}
            {product.imageStill ? (
              <picture>
                <source srcSet={product.imageStill} media="(prefers-reduced-motion: reduce)" />
                {product.imageAnim && <source srcSet={product.imageAnim} type="image/webp" />}
                <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
              </picture>
            ) : (
              <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Education() {
  return (
    <>
      <section className="ls-section ls-section--white ls-edu__hero">
        <div className="ls-container">
          <Reveal effect="fadeInUp">
            <p className="ls-wwd__eyebrow">
              <span className="ls-wwd__rule" aria-hidden="true" />
              <span className="ls-eyebrow">{educationPage.eyebrow}</span>
            </p>
            <h1 className="ls-h1 ls-edu__title">{educationPage.title}</h1>
            <p className="ls-lead ls-edu__lead">{educationPage.lead}</p>
          </Reveal>
        </div>
      </section>

      {educationPage.products.map((product, i) => (
        <ErrorBoundary key={product.slug} name={`Education/${product.slug}`}>
          <ProductBand product={product} index={i} />
        </ErrorBoundary>
      ))}
    </>
  );
}
