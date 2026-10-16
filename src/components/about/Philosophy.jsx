import { philosophy } from '../../content/about';
import FeatureLayout from '../common/FeatureLayout';
import Card from '../common/Card';

/**
 * The philosophy band: two paragraphs beside a picture, then the three things
 * the second paragraph promises to deliver.
 *
 * The second paragraph ends "...we deliver:" — a colon pointing straight at
 * the three pillar cards below it. That is why the paragraphs sit above the
 * grid rather than beside it: separating a sentence from the list it
 * introduces would leave the colon hanging.
 */
export default function Philosophy() {
  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <FeatureLayout
          media={
            <div className="ls-media ls-media--4x3">
              <img src={philosophy.mainImg} alt="" aria-hidden="true" />
            </div>
          }
        >
          <span className="ls-eyebrow">{philosophy.subTitle}</span>
          <h2 className="ls-h2 ls-h2--sm">{philosophy.title}</h2>
          {philosophy.paragraphs.map((paragraph) => (
            <p className="ls-body" key={paragraph.slice(0, 40)}>
              {paragraph}
            </p>
          ))}
        </FeatureLayout>

        <div className="ls-grid ls-grid--3 ls-mt-lg">
          {philosophy.pillars.map((pillar, i) => (
            <Card
              key={pillar.title}
              title={pillar.title}
              desc={pillar.content}
              className="ls-card--outline"
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
