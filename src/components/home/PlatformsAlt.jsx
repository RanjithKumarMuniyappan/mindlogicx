import { Link } from 'react-router-dom';
import { products, projects, BRAND } from '../../content/site';
import Reveal from '../common/Reveal';
import SectionIntro from '../common/SectionIntro';
import ProductMockup from '../common/ProductMockup';
import { ArrowRight } from '../common/icons';

/**
 * The alternative design for the platforms section, shown beside
 * `Platforms.jsx` so the two can be compared and one deleted.
 *
 * Named for its *role*, not its layout: this slot has already held a
 * full-bleed dark ledger and a tinted bento, and a name tied to one of them
 * stops being true the moment the design changes again.
 *
 * ## This version: the comp's product row, under a standard section heading
 *
 * Built to the supplied comp (option 04), with one change made by request:
 * the heading does **not** sit in a left-hand column the way the comp draws
 * it. It uses `SectionIntro` at the top of the band, exactly like every other
 * section on the site, and the five products run full-bleed beneath it.
 *
 * That is worth knowing because it is most of what made this section
 * structurally different from `Platforms.jsx`. What still separates them: the
 * products here are five narrow columns running the full width of the screen,
 * each a screenshot over an index, a name, a tagline and a round accent
 * button — against three wide media cards inside the 1152px measure. The
 * heading treatment is now identical in both.
 *
 * ## Two departures from the comp, both forced by content
 *
 * 1. **Five columns, not four.** The comp draws IntelliEXAMS, IntelliTUTE,
 *    IntelliWORK and IntelliOSM. IntelliTHESIS exists too, so the row carries
 *    five. Moving the heading out of the left column gave each one about 70px
 *    back (172px → 246px at 1440), which is what lets the name sit at 19px.
 *    The breakpoints below 992px wrap them rather than squeezing further.
 *
 * 2. **No paragraph under the heading.** The comp has one ("A powerful product
 *    suite designed for smarter education and digital transformation"), but
 *    there is no such string in `site.js` and writing one here would be
 *    inventing marketing copy. `SectionIntro` already takes a `lead` prop —
 *    add `description` to the `projects` export and pass it through.
 *
 * ## The screenshots are placeholders
 *
 * `ProductMockup` draws a stylised app window. It takes no colour: the line
 * art is always purple, because cyan art on the cyan tint measured 2.34:1.
 * The column's own colour shows in the backdrop tint behind the drawing and
 * in the round button below it. See that file for why it is an SVG rather
 * than a generated bitmap, and how to swap the real images in.
 */

/*
 * Colour alternates by **position in this row**, not by product.
 *
 * The first version looked each product's colour up from the hero carousel by
 * slug, so the two sections would agree. They cannot: the carousel runs in
 * the comp's order and `products` runs in catalogue order, and mapping one
 * onto the other left this row reading purple, purple, cyan, cyan, purple —
 * not an alternation. With a two-colour palette the colour is rhythm rather
 * than product identity, so each section alternates on its own index.
 *
 * `accent` and `onAccent` travel as a pair because the two take opposite
 * labels: white on purple is 8.89:1, ink on cyan is 7.38:1, and white on cyan
 * would be 2.53:1.
 */

export default function PlatformsAlt() {
  return (
    <section className="ls-section ls-section--smoke ls-palt">
      <div className="ls-container ls-palt__inner">
        {/* The same intro block every other section uses. `lead` is the slot
            for `projects.description` — see the note above. */}
        <SectionIntro eyebrow={projects.subTitle} title={projects.title} />

        <ul className="ls-palt__items">
          {products.map((product, i) => (
            <li key={product.slug}>
              <Reveal effect="fadeInUp" delay={i * 70}>
                <Link
                  className="ls-palt__item"
                  to={product.link}
                  style={{
                    '--p-accent': BRAND[i % BRAND.length].accent,
                    '--p-on-accent': BRAND[i % BRAND.length].onAccent,
                  }}
                >
                  <span className="ls-palt__art">
                    <ProductMockup variant={i} />
                  </span>

                  <span className="ls-index ls-palt__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="ls-palt__name">{product.title}</span>
                  <span className="ls-palt__tag">{product.tagline}</span>

                  <span className="ls-palt__go" aria-hidden="true">
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
