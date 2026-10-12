import { Link } from 'react-router-dom';
import { projects } from '../../content/site';
import SectionIntro from '../common/SectionIntro';
import Reveal from '../common/Reveal';

/**
 * The five Intelli platforms, as media cards straight on the band.
 *
 * No tint and no card background: each card has a photograph, and the picture
 * does the work a wash would otherwise do. The reference's case-study cards
 * are built the same way.
 *
 * The mono index is the platform's own tagline rather than an invented `P/1`.
 * `projects.items[].desc` is already the tagline in caps ("ASSESSMENT
 * INTELLIGENCE"), which lands in the index slot as-is and says something,
 * where a sequence number would only say "fifth of five".
 */
export default function Platforms() {
  return (
    <section className="ls-section ls-section--white">
      <div className="ls-container">
        <SectionIntro eyebrow={projects.subTitle} title={projects.title} />

        <div className="ls-grid ls-grid--3">
          {projects.items.map((item, i) => (
            <Reveal key={item.title} effect="fadeInUp" delay={(i % 3) * 80}>
              <Link className="ls-mediacard" to={item.link}>
                <div className="ls-media ls-media--3x2">
                  {/* The card's heading names the platform, so the artwork is
                      decorative rather than doubling the name up. */}
                  <img src={item.img} alt="" aria-hidden="true" />
                </div>
                <span className="ls-index">{item.desc}</span>
                <h3 className="ls-mediacard__title">{item.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
