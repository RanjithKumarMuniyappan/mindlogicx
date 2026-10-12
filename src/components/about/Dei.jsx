import { dei } from '../../content/about';
import FeatureLayout from '../common/FeatureLayout';
import Html from '../common/Html';

/**
 * The closing band: diversity, equity and inclusion.
 *
 * `dei.lead` ends "...such as:" and six items follow, so this is an ordered
 * list by the content's own construction and gets the numbered variant rather
 * than bullets. The numbers reuse the same mono index that marks every card
 * and accordion row on the site, which is what ties the list to the rest of
 * the pattern instead of looking like a stray `<ol>`.
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

          <ol className="ls-numlist">
            {dei.points.map((point) => (
              <li key={point.slice(0, 40)}>
                <span className="ls-body">{point}</span>
              </li>
            ))}
          </ol>
        </FeatureLayout>
      </div>
    </section>
  );
}
