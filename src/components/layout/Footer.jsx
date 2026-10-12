import { Link } from 'react-router-dom';
import { company, footer } from '../../content/site';
import { Facebook, X, LinkedIn, Instagram, YouTube } from '../common/icons';

/** Keyed by `company.social[].id`. */
const SOCIAL_MARKS = { facebook: Facebook, x: X, linkedin: LinkedIn, instagram: Instagram, youtube: YouTube };

/**
 * Four columns, hairline rules, grey links — the reference's footer shape.
 *
 * ## Removed 2026-10-12, all by request
 *
 * - **The newsletter field.** It had no backend and handed the typed address
 *   to the visitor's own mail client instead of transmitting anything. Gone
 *   along with `footer.newsletter`, which is still in `site.js`.
 * - **The phone number and both email addresses.**
 * - **The postal address** from the bottom bar. `company.legalName` stays in
 *   the copyright line.
 *
 * All four values remain in `company` — nothing was deleted from the content
 * layer, so a contact page can still use them.
 *
 * ## The social row and countries strip
 *
 * Five marks and six countries, from a supplied comp. **Three of the five
 * social marks have no URL and three-quarters of the flags do not exist yet**
 * — see the notes on `company.social` and `company.presence`. Both degrade
 * visibly rather than silently: a mark with no href is dimmed and
 * non-interactive, and a country with no flag shows its ISO code.
 *
 * `footer.callout.title` is deliberately not rendered. It is word for word the
 * CTA band that used to sit above this footer, and printing it twice in 200px
 * of page would read as an error.
 */
export default function Footer() {
  return (
    <footer className="ls-footer">
      <div className="ls-container">
        <div className="ls-footer__top">
          <div className="ls-footer__brand">
            <Link to="/" aria-label={`${company.name} home`}>
              {/* The white knockout, not `logoColor` — this band is dark now,
                  and the full-colour mark's grey wordmark disappears into it. */}
              <img src={company.logoWhite} alt={company.name} width="160" height="36" />
            </Link>
            {/* The tagline otherwise appears only in the document title,
                where it is not on the page for anyone reading it. */}
            <p className="ls-footer__tagline">{company.tagline}</p>
            <p className="ls-footer__blurb">{footer.blurb}</p>

            <ul className="ls-footer__social">
              {company.social.map((item) => {
                const Mark = SOCIAL_MARKS[item.id];
                if (!Mark) return null;
                return (
                  <li key={item.id}>
                    {item.href ? (
                      <a
                        className="ls-footer__socialbtn"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${company.name} on ${item.label}`}
                      >
                        <Mark />
                      </a>
                    ) : (
                      /*
                       * No URL supplied. Rendered as a dimmed, inert mark
                       * rather than an anchor — a social button that looks
                       * live and goes nowhere is worse than one that visibly
                       * is not ready. `aria-hidden` keeps it out of the
                       * reading order entirely; there is nothing to announce.
                       */
                      <span
                        className="ls-footer__socialbtn ls-footer__socialbtn--todo"
                        aria-hidden="true"
                        title={`${item.label} — link to be supplied`}
                      >
                        <Mark />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

          </div>

          <div>
            <h2 className="ls-footer__coltitle">Company</h2>
            <nav className="ls-footer__links" aria-label="Company">
              {footer.usefulLinks.map((link) => (
                <Link to={link.link} key={link.title}>
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="ls-footer__coltitle">Domains</h2>
            <nav className="ls-footer__links" aria-label="Domains">
              {footer.domains.map((link) => (
                <Link to={link.link} key={link.title}>
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="ls-footer__coltitle">Newsroom</h2>
            <nav className="ls-footer__links" aria-label="Newsroom">
              {footer.newsroom.map((link) =>
                /*
                 * A `todo` entry has no destination yet, so it renders as
                 * plain text with a visible "TBC" rather than as a link.
                 * Shipping it as an anchor would look finished and dead-end
                 * the reader; this way the gap is obvious to everyone,
                 * including whoever is filling it in. See `site.js`.
                 */
                link.todo ? (
                  <span className="ls-footer__todo" key={link.title}>
                    {link.title}
                    <span className="ls-footer__tbc">TBC</span>
                  </span>
                ) : (
                  <Link to={link.link} key={link.title}>
                    {link.title}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>

        {/*
          One supplied image, not a list — the flags *and* the country names
          are baked into the artwork, so the names are pixels rather than
          text. `alt` carries them so the information is still available to
          anyone not seeing the picture.

          It sits on its own row rather than in the brand column because it is
          a 6.88:1 strip: in that ~250px column the baked-in lettering came
          out about 7px tall. See `site.js`.
        */}
        <img
          className="ls-footer__presence"
          src={company.presenceImage}
          alt={`Mindlogicx operates in ${company.countries.join(', ')}`}
          loading="lazy"
          decoding="async"
        />

        <div className="ls-footer__bottom">
          <span>{footer.copyright}</span>
          <nav className="ls-footer__legal" aria-label="Legal">
            {footer.legal.map((link) => (
              <Link to={link.link} key={link.title}>
                {link.title}
              </Link>
            ))}
          </nav>
          {/* The postal address was removed from here on 2026-10-12.
              `company.address` is still in `site.js`. */}
          <span className="ls-footer__legalname">{company.legalName}</span>
        </div>
      </div>
    </footer>
  );
}
