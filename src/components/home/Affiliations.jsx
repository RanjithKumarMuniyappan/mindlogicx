import { affiliations } from '../../content/site';
import Reveal from '../common/Reveal';
import { ContentIcon } from '../common/icons';

/**
 * "Memberships & Affiliations" — the closing logo strip.
 *
 * A quiet band: the heading, then one tile per organisation. Deliberately the
 * plainest section on the page, because it is the last thing before the
 * footer and its job is recognition, not persuasion.
 *
 * ## Every tile is a placeholder
 *
 * The eight organisations are real third parties whose marks were not
 * supplied. **Nothing here draws or approximates anyone's logo** — each tile
 * sets the organisation's name in type, with the client's qualifier beneath
 * it. That is honest about what is missing and still shows the layout.
 *
 * When a real file arrives, put it in `public/assets/images/affiliations/`
 * and set `logo` on that entry in `site.js`. The tile renders the image
 * instead of the name and nothing else changes — the grid, sizing and
 * greyscale treatment are already in place for it.
 *
 * Logos are shown greyscale at rest and come to full colour on hover, which
 * is the convention for a membership strip and stops eight different brand
 * palettes fighting the page. The named tiles ignore it, having no colour.
 *
 * ## Still to confirm
 *
 * The five trade bodies are listed by **country**, not by organisation,
 * because only the countries were given. Each needs its actual body named
 * before this can ship.
 */
export default function Affiliations() {
  return (
    <section className="ls-section ls-section--white ls-aff">
      <div className="ls-container">
        <Reveal className="ls-aff__head" effect="fadeInUp">
          <p className="ls-wwd__eyebrow">
            <span className="ls-wwd__rule" aria-hidden="true" />
            <span className="ls-eyebrow">{affiliations.subTitle}</span>
          </p>
          <h2 className="ls-h2 ls-aff__title">{affiliations.title}</h2>
        </Reveal>

        <ul className="ls-aff__grid">
          {affiliations.items.map((item, i) => (
            <li key={item.id}>
              <Reveal className="ls-aff__tile" effect="fadeInUp" delay={i * 50}>
                {item.logo ? (
                  <img
                    className="ls-aff__logo"
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                  />
                ) : (
                  <span className="ls-aff__logo ls-aff__logo--todo">
                    <ContentIcon name={item.mark} />
                  </span>
                )}

                {/*
                  Logos only on screen, by request — but the tile still needs
                  an accessible name, or the section is eight unlabelled
                  shapes. `note` carries the qualifier that was printed under
                  the name before.
                */}
                <span className="ls-visually-hidden">
                  {item.name}
                  {item.note ? ` — ${item.note}` : ''}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
