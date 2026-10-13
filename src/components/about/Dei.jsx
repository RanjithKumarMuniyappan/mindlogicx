import { dei } from '../../content/about';
import FeatureLayout from '../common/FeatureLayout';
import Html from '../common/Html';

/**
 * The closing band: diversity, equity and inclusion.
 *
 * `dei.lead` ends "...such as:" and six items follow.
 *
 * **Bulleted, not numbered** (2026-10-12). It was an `<ol>` whose markers came
 * from a CSS `counter(ls-num, decimal-leading-zero)` — the last `01, 02, 03`
 * on the site, and the one the earlier sweep missed because the numbers were
 * generated in CSS rather than written in JSX. Grep for `counter(`, not just
 * for the index class.
 *
 * It is a `<ul>` now because nothing about these six commitments is ordered —
 * they are a set, and the lead introduces them as one.
 *
 * `dei.title` carries an `&amp;`, so it goes through `Html`.
 *
 * This is the last section on the page. The About page's closing "What Are You
 * Looking For?" CTA was dropped on the previous build by request and stays
 * dropped — `about.js` still exports it as `cta`, so restoring it is one
 * component and one line in `pages/About.jsx`.
 */
export default function Dei() {
  return (
    <section className="ls-section ls-section--white">
      <div className="ls-container">
        <FeatureLayout
          media={
            <div className="ls-media ls-media--4x3">
              <img src={dei.mainImg} alt="" aria-hidden="true" />
            </div>
          }
        >
          <span className="ls-eyebrow">{dei.subTitle}</span>
          <h2 className="ls-h2">
            <Html value={dei.title} />
          </h2>
          <p className="ls-body">{dei.lead}</p>

          <ul className="ls-bullets ls-dei__list">
            {dei.points.map((point) => (
              <li key={point.slice(0, 40)}>{point}</li>
            ))}
          </ul>
        </FeatureLayout>
      </div>
    </section>
  );
}
