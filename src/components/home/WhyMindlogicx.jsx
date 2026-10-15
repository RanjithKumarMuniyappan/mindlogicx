import { Link } from 'react-router-dom';
import { whyMindlogicx, metrics, trustPillars } from '../../content/site';
import Reveal from '../common/Reveal';
import Counter from '../common/Counter';
import { ContentIcon, ArrowRight } from '../common/icons';

/**
 * "Why Mindlogicx" — the credibility band.
 *
 * Reproduced from the Mindlogicx 2025 frontend
 * (`components/sections/Metrics.tsx`, which renders
 * `homeSections.credibility`), structure for structure:
 *
 * - a two-up head — eyebrow and headline left, the body right-aligned beside it
 * - four counters, each riding a 335px vertical rule with a 60px circular
 *   glyph on it, alternate columns bottom-aligned for a zigzag rhythm
 * - a small ring-and-dot marker beside each figure
 * - four trust pillars in translucent cards
 * - the closing link
 *
 * ## The photograph was removed on 2026-10-14
 *
 * At the client's request this is now a plain `--smoke` band, like the rest of
 * the page. `why-mindlogicx.jpg` is no longer rendered; it is still in
 * `public/` and still `whyMindlogicx.image` in `site.js`.
 *
 * **It was not just a background.** The whole band was built as white-on-dark:
 * the picture is genuinely dark (its *brightest* pixel is 0.024 relative
 * luminance, so white type held 14.1:1 at the worst point in the frame) and
 * `--ink` sat behind it as the fallback. Taking the picture away means every
 * one of those colours had to inverted — headings and figures to ink, body to
 * `--grey-500`, the counters' rail to `--grey-200`, the glyph discs from a
 * dark plate with cyan on them to a purple tint with purple on it, and the
 * trust pillars from 5%-white-on-ink to real white cards with a hairline.
 *
 * The one survivor is the glyph's **hover** state, which is solid purple and
 * therefore still a dark surface — its icon stays white.
 *
 * The old note here warned that this band and MindGENIE above it were both
 * inverse and only the photograph separated them. That is resolved rather
 * than broken: MindGENIE is now `--white` and this is `--smoke`, so the two
 * alternate like every other pair on the page.
 *
 * ## The line-and-glyph rail is desktop only
 *
 * Below 1024px the rail and its 335px band are dropped rather than scaled:
 * reserving that height around a two-line figure leaves a block of dead space,
 * which is the source's reasoning too. The counters keep their natural height
 * and go two-up, then one-up.
 */

/** The fixed height of the rule each counter rides, from the source. */
const LINE_HEIGHT = 335;

export default function WhyMindlogicx() {
  return (
    <section className="ls-section ls-section--smoke ls-why">
      <div className="ls-container">
        <div className="ls-why__head">
          <Reveal effect="fadeInUp">
            <p className="ls-wwd__eyebrow">
              <span className="ls-wwd__rule ls-mg__rule" aria-hidden="true" />
              <span className="ls-eyebrow">{whyMindlogicx.eyebrow}</span>
            </p>
            <h2 className="ls-h2 ls-why__title">{whyMindlogicx.headline}</h2>
          </Reveal>

          <Reveal className="ls-why__bodywrap" effect="fadeInUp" delay={120}>
            <p className="ls-lead ls-why__body">{whyMindlogicx.body}</p>
          </Reveal>
        </div>

        {/*
          A description list: the caption is the term, the figure its
          description. `dt` precedes `dd` because the content model requires
          it; the grid rows below put the figure on top where the comp wants
          it. Each item is wrapped in the single `div` that `dl` permits, so
          the decorations live inside the `dd` rather than as extra children
          of the wrapper — which would not be conforming.
        */}
        <dl className="ls-why__metrics">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              as="div"
              className={`ls-why__metric${i % 2 === 1 ? ' ls-why__metric--low' : ''}`}
              effect="fadeInUp"
              delay={i * 90}
            >
              <dt className="ls-why__label">{m.label}</dt>
              <dd className="ls-why__value">
                {/* The rule, with the glyph riding it — centred on the line
                    for the first row, pinned near the top for the staggered
                    one. Both are positioned against the item, not the `dd`. */}
                <span
                  className="ls-why__rail"
                  aria-hidden="true"
                  style={{ height: LINE_HEIGHT }}
                >
                  <span className="ls-why__glyph">
                    <ContentIcon name={m.glyph} />
                  </span>
                </span>
                <span className="ls-why__marker" aria-hidden="true" />

                <Counter value={m.value} suffix={m.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>

        <ul className="ls-why__pillars">
          {trustPillars.map((p, i) => (
            <li key={p.title}>
              <Reveal className="ls-why__pillar" effect="fadeInUp" delay={i * 70}>
                <h3 className="ls-why__pillartitle">{p.title}</h3>
                <p className="ls-why__pillarbody">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="ls-why__cta" effect="fadeInUp">
          <Link className="ls-mg__cta" to={whyMindlogicx.ctaLink}>
            {whyMindlogicx.ctaText}
            <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
