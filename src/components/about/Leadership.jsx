import { leadership } from '../../content/about';
import SectionIntro from '../common/SectionIntro';
import FeatureLayout from '../common/FeatureLayout';
import Person from '../common/Person';
import Pill from '../common/Pill';

/**
 * The founder, then the rest of the leadership team.
 *
 * The founder gets the two-up feature band because the content layer gives
 * him something the other ten do not: a 120-word biography. Dropping that into
 * a square portrait card would either truncate it or make one cell of a grid
 * four times the height of its neighbours. The others have a photograph, a
 * name and a title, which is exactly what a portrait card holds.
 *
 * `leadership.founderBio` opens by naming him, so the name and title sit under
 * the bio as attribution rather than above it as a heading.
 *
 * ## The roster is tiered, three-up
 *
 * Each tier renders as its own grid, so a tier always starts a new row and a
 * short tier centres rather than being back-filled by the next one. That is
 * what gives the reference its 3+2 / 3 / 3 shape; an eleven-item flat grid
 * wraps 3/3/3/2 and splits the directors across the vice presidents.
 *
 * **The tiers are deliberately unlabelled.** The grouping reads from the row
 * breaks alone, as in the reference — the `id` on each tier exists to key the
 * list and to describe the group to assistive tech, not to print a heading.
 */
export default function Leadership() {
  const { founder, tiers, founderBio, subTitle, title } = leadership;

  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <SectionIntro eyebrow={subTitle} title={title} />

        {/*
          `--founder` makes the portrait take its height from the bio beside
          it instead of imposing its own. Left to the generic portrait frame
          it rendered 791px tall against 508px of copy, and upscaled a 300×380
          source to roughly twice its size to do it.
        */}
        <FeatureLayout
          className="ls-feature--founder"
          media={
            <div className="ls-media ls-media--portrait">
              <img src={founder.img} alt="" aria-hidden="true" />
            </div>
          }
        >
          <p className="ls-body">{founderBio}</p>

          <div>
            <h3 className="ls-person__name">{founder.name}</h3>
            <p className="ls-person__role">{founder.designation}</p>
          </div>

          <Pill variant="tint" href={founder.linkedin}>
            {founder.name} on LinkedIn
          </Pill>
        </FeatureLayout>

        {tiers.map((tier, ti) => (
          /* Only the first tier takes the large top margin — it is what
             separates the roster from the founder panel. The tiers are
             spaced from each other by the roster's own row gap. */
          <ul
            className={`ls-roster${ti === 0 ? ' ls-mt-lg' : ''}`}
            key={tier.id}
            aria-label={tier.id.replace(/-/g, ' ')}
          >
            {tier.members.map((member, i) => (
              <li key={member.name}>
                <Person
                  img={member.img}
                  name={member.name}
                  role={member.designation}
                  delay={(i % 3) * 70}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
