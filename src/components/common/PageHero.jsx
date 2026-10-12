import Reveal from './Reveal';
import Html from './Html';

/**
 * The top of an inner page: `<h1>`, with an optional eyebrow, lead and wide
 * picture beneath it.
 *
 * The previous build opened its About page with the template's `page-header` —
 * the title reversed out of a darkened photograph. This pattern does not have
 * that shape anywhere; the reference opens every page the same way the home
 * page opens, with type on a flat band, and treats photographs as content
 * below the fold rather than as a backdrop to read text against.
 *
 * ## `tone`
 *
 * `white` is the original. `accent` puts the band on the brand's **fill**
 * colour (cyan) and is what About uses from 2026-10-12 — a compact band with
 * the title and nothing else.
 *
 * Ink type on cyan, never white: `--on-accent-fill` exists because white on
 * `#00aeef` is **2.53:1** and fails, while ink is 7.38:1. The band class
 * carries that pairing, so a title here cannot accidentally be set in white.
 *
 * The eyebrow, lead and image are all still supported and simply go unpassed
 * by About now — nothing was deleted, so another page can still open the
 * full way.
 */
export default function PageHero({ eyebrow, title, lead, image, tone = 'white' }) {
  return (
    <section className={`ls-section ls-section--${tone} ls-hero ls-hero--${tone}`}>
      <div className="ls-container">
        <Reveal className="ls-hero__inner" effect="fadeInUp">
          {eyebrow && <span className="ls-eyebrow">{eyebrow}</span>}
          <h1 className="ls-h1">
            <Html value={title} />
          </h1>
          {lead && (
            <p className="ls-lead ls-hero__lead">
              <Html value={lead} />
            </p>
          )}
        </Reveal>

        {image && (
          <Reveal className="ls-hero__media" effect="fadeInUp" delay={120}>
            <img src={image} alt="" aria-hidden="true" />
          </Reveal>
        )}
      </div>
    </section>
  );
}
