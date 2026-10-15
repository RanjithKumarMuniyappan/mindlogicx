import { standFor } from '../../content/about';
import SectionIntro from '../common/SectionIntro';
import Reveal from '../common/Reveal';

/**
 * The nine principles.
 *
 * ## Redesigned 2026-10-14
 *
 * This was a 3×3 grid of tinted cards. It is now an editorial list: each
 * principle is a row with the heading in the left column and its paragraph in
 * the right, rows divided by hairlines, no card chrome and no tint washes.
 *
 * Why the change reads better for this content:
 *
 * - **The paragraphs are long and uneven** — from 23 words to 48. In a card
 *   grid every tile stretches to the tallest in its row, so a third of the
 *   grid was whitespace. A row only takes the height it needs.
 * - **Nine tints on nine cards was decoration doing no work.** The washes
 *   rotated through six colours and then repeated, which implied a grouping
 *   that does not exist — the nine principles are a flat list.
 * - A hairline-ruled list is the quietest thing in the pattern, and this
 *   section is the one place on the page that is purely a statement of
 *   values. It should read like a document, not like a product grid.
 *
 * Still no glyphs, for the same reason as before: there is no honest icon for
 * "Integrity Without Exception" or "Evidence-Led Excellence", and nine
 * invented marks would say less than nine headings do.
 */
export default function StandFor() {
  return (
    <section className="ls-section ls-section--white">
      <div className="ls-container">
        <SectionIntro eyebrow={standFor.subTitle} title={standFor.title} />

        <ul className="ls-tenets ls-mt-md">
          {standFor.items.map((item, i) => (
            <li key={item.title}>
              <Reveal className="ls-tenets__row" effect="fadeInUp" delay={(i % 2) * 70}>
                <h3 className="ls-tenets__title">{item.title}</h3>
                <p className="ls-tenets__body">{item.content}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
