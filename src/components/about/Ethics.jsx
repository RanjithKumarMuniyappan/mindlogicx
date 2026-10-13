import { ethics } from '../../content/about';
import SectionIntro from '../common/SectionIntro';
import Reveal from '../common/Reveal';

/**
 * "How We Operate" — ten sets of operating rules, all open.
 *
 * Redesigned 2026-10-12. This was a numbered accordion paired with a sticky
 * illustrated panel; it is now a two-column index with every rule on screen.
 *
 * ## Why the accordion went
 *
 * It looked like the reference's signature section, and the content mapped
 * onto it neatly — index, heading, expanding list. But it hid nine of the ten
 * sets behind a click, and these are the company's stated ethics: the one
 * thing on the page a reader might actually want to scan in full, or search
 * the page for, or print. An accordion is the right shape for optional
 * detail, and the wrong one for a statement of principles.
 *
 * The sticky panel went with it. Those were `TintPanel` drawings standing in
 * for photographs nobody has of "Fair Competition and Anti-Corruption" — an
 * honest placeholder, but a decorative half of a two-column layout that was
 * earning nothing.
 *
 * ## Why CSS columns rather than a grid
 *
 * The items run 2 and 3 rules deep, so they are uneven. A two-column *grid*
 * pads every row to its tallest cell and leaves ragged gaps down the page;
 * multi-column flows them tight and balances the two columns by height.
 * Reading order is preserved — DOM order is 1–10 and the column flow is
 * top-of-first then top-of-second, which is how the indices read.
 *
 * `break-inside: avoid` on each item is what stops a heading being orphaned
 * at the foot of the first column from its own rules.
 */
export default function Ethics() {
  return (
    <section className="ls-section ls-section--white ls-ops">
      <div className="ls-container">
        <SectionIntro eyebrow={ethics.subTitle} title={ethics.title} />

        {/* `<ul>`, not `<ol>`: it was ordered while each set carried an
            `01`–`10` index. With those gone nothing about these ten rule sets
            is sequential — they are a set, and the markup should say so. */}
        <ul className="ls-ops__list">
          {ethics.items.map((item, i) => (
            <li className="ls-ops__item" key={item.title}>
              <Reveal effect="fadeInUp" delay={Math.min(i, 5) * 60}>
                <h3 className="ls-ops__title">{item.title}</h3>
                <ul className="ls-ops__points">
                  {item.points.map((point) => (
                    <li key={point.slice(0, 40)}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
