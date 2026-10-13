import { whyChooseUs } from '../../content/about';
import FeatureLayout from '../common/FeatureLayout';
import { ArrowLink } from '../common/Pill';
import Card from '../common/Card';
import { wash } from '../common/washes';

/**
 * Five reasons, the industries list, and the closing line.
 *
 * `whyChooseUs.closing` is a full sentence that opens "Contact Us to learn
 * how..." — it names its own link in its first two words. It is printed in
 * full as body copy, with those two words repeated as the link beneath it, so
 * the sentence survives intact and the reader still gets something to click.
 * Putting the whole sentence inside a pill was the first attempt and a pill
 * eighty characters wide is not a button.
 *
 * The industries are static tags, not links. There are domain pages for four
 * of the five — MediaTech has none — and linking four of five would read as
 * the fifth being broken.
 */
export default function WhyChooseUs() {
  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <FeatureLayout
          media={
            <div className="ls-media ls-media--4x3">
              <img src={whyChooseUs.mainImg} alt="" aria-hidden="true" />
            </div>
          }
          reverse
        >
          <span className="ls-eyebrow">{whyChooseUs.subTitle}</span>
          <h2 className="ls-h2">{whyChooseUs.title}</h2>

          <div>
            <h3 className="ls-h4">{whyChooseUs.industriesTitle}</h3>
            <div className="ls-tags ls-mt-sm">
              {whyChooseUs.industries.map((industry) => (
                <span className="ls-tag" key={industry}>
                  {industry}
                </span>
              ))}
            </div>
          </div>

          <p className="ls-body">{whyChooseUs.closing}</p>
          <ArrowLink to={whyChooseUs.closingLink}>Contact Us</ArrowLink>
        </FeatureLayout>

        <div className="ls-grid ls-grid--3 ls-mt-lg">
          {whyChooseUs.reasons.map((reason, i) => (
            <Card
              key={reason.title}
              title={reason.title}
              desc={reason.content}
              tint={wash(i)}
              delay={(i % 3) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
