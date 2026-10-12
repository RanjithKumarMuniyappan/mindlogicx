import { team } from '../../content/site';
import SectionIntro from '../common/SectionIntro';
import Person from '../common/Person';

/**
 * The four names at the top of the company.
 *
 * No social row under each portrait: the home page's content layer carries a
 * photograph, a name and a title for each person and nothing else. The About
 * page's leadership section has a LinkedIn URL for the founder and shows it
 * there.
 */
export default function Leadership() {
  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <SectionIntro eyebrow={team.subTitle} title={team.title} />

        <div className="ls-grid ls-grid--4 ls-grid--people">
          {team.members.map((member, i) => (
            <Person
              key={member.title}
              img={member.img}
              name={member.title}
              role={member.desc}
              delay={i * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
