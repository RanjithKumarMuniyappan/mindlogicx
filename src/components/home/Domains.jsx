import { process } from '../../content/site';
import SectionIntro from '../common/SectionIntro';
import Card from '../common/Card';
import { wash } from '../common/washes';

/**
 * The four domains, as a four-up card grid.
 *
 * Indices are `D/1`–`D/4`. The reference prefixes a section's cards with its
 * own letter (`E/1` for ecommerce, `M/1` for marketing) rather than numbering
 * the whole page, and these cards earn a numbering of their own because the
 * content has no short label to use instead — unlike the platforms and
 * strengths sections below, which do.
 *
 * Each card links to its domain page. Those routes are stubbed for now, so
 * the links land on `Placeholder` rather than dead-ending.
 */
export default function Domains() {
  return (
    <section className="ls-section ls-section--white">
      <div className="ls-container">
        <SectionIntro
          eyebrow={process.subTitle}
          title={process.title}
          lead={process.description}
        />

        <div className="ls-grid ls-grid--4">
          {process.steps.map((step, i) => (
            <Card
              key={step.title}
              icon={step.title}
              title={step.title}
              desc={step.content}
              tint={wash(i)}
              to={step.link}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
