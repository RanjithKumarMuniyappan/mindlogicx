import { testimonials } from '../../content/site';
import SectionIntro from '../common/SectionIntro';
import Reveal from '../common/Reveal';

/**
 * "What Sets Mindlogicx Apart" — three capability statements.
 *
 * ## Redesigned 2026-10-15
 *
 * This was a 3-up grid of tinted `Card`s. It is now three columns divided by
 * vertical hairlines, with no plates and no tints: the mono label, the title,
 * a short accent rule, then the paragraph.
 *
 * Why, given the home page already had enough card grids:
 *
 * - **Three tinted plates sat directly above "Why Mindlogicx", which is four
 *   more plates.** Two plate grids back to back read as one long grid rather
 *   than as two arguments.
 * - **The tints implied a grouping that is not there.** Strategy, Brand and
 *   Technology are three facets of one claim, not three categories.
 * - Columns divided by rules say "three parts of one statement" in a way that
 *   three separated cards do not.
 *
 * It is deliberately **not** the hairline-row treatment used by "Our
 * Principles" on `/about`: that one is rows because it has nine items and
 * long paragraphs; this has three and short ones, so it goes across.
 *
 * Still no icons. `testimonials.items[].image` points at Zefxa template raster
 * art that was never carried over, and the three labels do the same job.
 *
 * The content module calls these `testimonials` because that is the slot they
 * filled on an older template. Nobody is quoted here — there is no speaker, no
 * attribution and no company behind any of them, so they are statements, not
 * quotes.
 */
export default function Strengths() {
  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <SectionIntro eyebrow={testimonials.subTitle} title={testimonials.title} />

        <ul className="ls-strength ls-mt-md">
          {testimonials.items.map((item, i) => (
            <li key={item.title}>
              <Reveal className="ls-strength__col" effect="fadeInUp" delay={i * 80}>
                <span className="ls-strength__label">{item.subTitle}</span>
                <h3 className="ls-strength__title">{item.title}</h3>
                <span className="ls-strength__rule" aria-hidden="true" />
                <p className="ls-strength__desc">{item.desc}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
