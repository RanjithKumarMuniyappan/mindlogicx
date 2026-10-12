import { testimonials } from '../../content/site';
import SectionIntro from '../common/SectionIntro';
import Card from '../common/Card';
import { wash } from '../common/washes';

/**
 * "What Sets Mindlogicx Apart" — three capability statements.
 *
 * Rendered as plain cards, *not* as the reference's testimonial cards. Nobody
 * is quoted here: the content module calls these `testimonials` because that
 * is the slot they filled on an older template, but there is no speaker, no
 * attribution and no company behind any of them. Putting them in quote marks
 * with a name underneath would mean inventing three customers.
 *
 * The mono index is each item's own label — STRATEGY, BRAND, TECHNOLOGY —
 * rather than a sequence number. `testimonials.items[].image` is skipped for
 * the same reason as the focus icons: those files are Zefxa template raster
 * art that was not carried over.
 */
export default function Strengths() {
  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <SectionIntro eyebrow={testimonials.subTitle} title={testimonials.title} />

        <div className="ls-grid ls-grid--3">
          {testimonials.items.map((item, i) => (
            <Card
              key={item.title}
              index={item.subTitle}
              icon={item.title}
              title={item.title}
              desc={item.desc}
              tint={wash(i)}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
