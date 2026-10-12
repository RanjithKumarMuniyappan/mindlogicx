import { about, company } from '../../content/site';
import FeatureLayout from '../common/FeatureLayout';
import Html from '../common/Html';
import Pill from '../common/Pill';

/**
 * The "who we are" band.
 *
 * The reference puts its equivalent ("WHY LEMON SQUEEZY?") as a centred block
 * of type with no picture. That shape was the first choice here too, but this
 * content has a photograph *and* two one-line claims that want to sit as a
 * list, and neither has anywhere to go in a centred paragraph. The two-up
 * feature band — also the reference's own vocabulary — carries all four pieces
 * without dropping any.
 *
 * `about.bgImg` goes unused for the same reason as the hero's: this band is
 * plain white, and a decorative backdrop behind it is the Zefxa build's idea
 * of visual interest, not this one's.
 */
export default function About() {
  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <FeatureLayout
          media={
            <div className="ls-media ls-media--4x3">
              <img src={about.mainImg} alt="" aria-hidden="true" />
            </div>
          }
        >
          <span className="ls-eyebrow">{about.subTitle}</span>
          <h2 className="ls-h2">
            <Html value={about.title} />
          </h2>
          <p className="ls-body">{about.content}</p>

          <ul className="ls-bullets">
            <li>{about.listTitle1}</li>
            <li>{about.listTitle2}</li>
          </ul>

          {/* The number is the claim here, not decoration, so it is the label
              and the pill's href dials it. */}
          <Pill variant="tint" href={company.phoneHref}>
            {about.contactText} — {about.number}
          </Pill>
        </FeatureLayout>
      </div>
    </section>
  );
}
