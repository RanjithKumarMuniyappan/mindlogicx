import { advisoryBoard } from '../../content/about';
import SectionIntro from '../common/SectionIntro';
import Reveal from '../common/Reveal';

/**
 * "Advisory Board" — directly below Our Leadership.
 *
 * Restored to the page on 2026-10-12. It was built on an earlier revision,
 * dropped by request, and has been carried in `content/about.js` ever since —
 * so the three members, their bios and their portraits were already here when
 * the section was asked for again. **Nothing on this page was invented**; it
 * is the Advisory Board from the previous Mindlogicx About page.
 *
 * The client expected to supply names and designations and should be asked to
 * confirm these three are current, but an empty placeholder would have been
 * worse than real content that may need updating.
 *
 * ## Why these are cards, not roster portraits
 *
 * Each advisor has a 40-word biography, which the leadership roster's cards
 * have nowhere to put — those are a portrait, a name and a line. So this is a
 * three-up card: portrait, name, the "Retd. IAS"/"Retd. IPS" line, then the
 * bio. Three members fill one row exactly, which is why there is no tiering
 * here the way there is above.
 *
 * `role` is a service designation rather than a job title, so it is set in
 * the same uppercase micro-type the roster uses for titles and kept above the
 * bio, where it qualifies the name.
 */
export default function AdvisoryBoard() {
  return (
    <section className="ls-section ls-section--white ls-adv">
      <div className="ls-container">
        <SectionIntro
          eyebrow={advisoryBoard.subTitle}
          title={advisoryBoard.title}
          lead={advisoryBoard.description}
        />

        <ul className="ls-adv__grid ls-mt-lg">
          {advisoryBoard.members.map((member, i) => (
            <li key={member.name}>
              <Reveal className="ls-adv__card" effect="fadeInUp" delay={i * 80}>
                <div className="ls-adv__photo">
                  {/* Decorative: the name is the heading immediately below. */}
                  <img src={member.img} alt="" aria-hidden="true" loading="lazy" />
                </div>

                <h3 className="ls-adv__name">{member.name}</h3>
                <p className="ls-adv__role">{member.role}</p>
                <p className="ls-adv__bio">{member.bio}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
