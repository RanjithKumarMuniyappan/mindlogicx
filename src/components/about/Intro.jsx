import { intro } from '../../content/about';
import { company } from '../../content/site';
import Reveal from '../common/Reveal';
import Html from '../common/Html';
import { ContentIcon } from '../common/icons';

/**
 * "Who We Are" — rebuilt 2026-10-12 to a supplied comp.
 *
 * Two columns over three cards, on the client's own backdrop
 * (`aboutus_intro_bg.png`): the lockup and the company statement on the left,
 * the "Who We Are" heading with its three principle pills on the right, then
 * the cards along the bottom.
 *
 * This replaced a photo-and-bullets feature band plus two long paragraphs and
 * a statement block.
 *
 * ## Two deviations from the comp, both deliberate
 *
 * 1. **The accents are this build's two brand colours, not the comp's three.**
 *    The comp tints in blue, purple and pink; the project is restricted to
 *    `#712d7b` and `#00aeef`, set on an earlier turn and applied everywhere
 *    else. Adding pink here would make this the only section with a third
 *    hue. The comp's rhythm is kept by alternating the two.
 * 2. **The lead keeps its full list of sectors.** The comp's artwork reads
 *    "Edtech and MediaTech"; `whoWeAreLead` says "Edtech, Healthtech,
 *    Fintech, LegalTech and MediaTech", which is what the live copy says.
 *    Using the comp's wording would have dropped three sectors, so the
 *    fuller line stays.
 *
 * ## The heading's two-tone treatment
 *
 * The comp sets "Who" in ink and "We Are" in colour. `whoWeAreTitle` is one
 * string, so it is split on the first space rather than being stored
 * pre-broken — the content layer should hold a title, not markup. A
 * single-word title degrades to all-ink, which is correct.
 */
export default function Intro() {
  const [firstWord, ...restWords] = intro.whoWeAreTitle.split(' ');
  const rest = restWords.join(' ');

  return (
    <section className="ls-section ls-intro2">
      {/* Decorative: the backdrop carries no information. */}
      <img
        className="ls-intro2__bg"
        src={intro.bgImage}
        alt=""
        aria-hidden="true"
        fetchPriority="low"
      />

      <div className="ls-container">
        <div className="ls-intro2__top">
          <Reveal className="ls-intro2__brand" effect="fadeInUp">
            {/* The lockup, not a heading: the page's h1 is above in
                `PageHero`, and the comp opens this band with the mark. */}
            <img
              className="ls-intro2__logo"
              src={company.logoColor}
              alt={company.name}
              width="220"
              height="54"
            />
            <p className="ls-intro2__statement">{intro.lead}</p>
          </Reveal>

          <Reveal className="ls-intro2__who" effect="fadeInUp" delay={100}>
            <h2 className="ls-intro2__title">
              {firstWord}
              {rest && <span className="ls-intro2__title-accent"> {rest}</span>}
            </h2>
            <p className="ls-intro2__lead">{intro.whoWeAreLead}</p>

            <ul className="ls-intro2__pills">
              {intro.principles.map((principle, i) => (
                <li className="ls-intro2__pill" key={principle.label}>
                  {/* Alternates cyan/cyan/purple, mirroring the comp's
                      two-then-one grouping within the allowed palette. */}
                  <span
                    className={`ls-intro2__pillicon ls-intro2__pillicon--${
                      i === intro.principles.length - 1 ? 'purple' : 'cyan'
                    }`}
                  >
                    <ContentIcon name={principle.icon} />
                  </span>
                  {principle.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="ls-intro2__cards">
          {intro.cards.map((card, i) => (
            <li key={card.id}>
              <Reveal
                className={`ls-intro2__card ls-intro2__card--${
                  i % 2 === 1 ? 'purple' : 'cyan'
                }`}
                effect="fadeInUp"
                delay={i * 90}
              >
                <span className="ls-intro2__cardicon">
                  <ContentIcon name={card.icon} />
                </span>
                <p className="ls-intro2__cardbody">
                  <Html value={card.body} />
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
