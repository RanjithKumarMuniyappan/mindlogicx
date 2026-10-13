import { standFor } from '../../content/about';
import SectionIntro from '../common/SectionIntro';
import Card from '../common/Card';
import { wash } from '../common/washes';

/**
 * The nine principles, as a 3x3 card grid.
 *
 * No glyphs: there is no honest icon for "Integrity Without Exception" or
 * "Evidence-Led Excellence", and nine invented marks would say less than nine
 * headings do. The index and the heading carry each card, which is how the
 * reference builds its own six-up grids.
 *
 * `V/1`–`V/9` for values. Six washes across nine cards means the rotation
 * repeats on the last three; that is the reference's behaviour too, and it
 * reads as a pattern rather than as running out of colours.
 */
export default function StandFor() {
  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <SectionIntro eyebrow={standFor.subTitle} title={standFor.title} />

        <div className="ls-grid ls-grid--3">
          {standFor.items.map((item, i) => (
            <Card
              key={item.title}
              title={item.title}
              desc={item.content}
              tint={wash(i)}
              delay={(i % 3) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
