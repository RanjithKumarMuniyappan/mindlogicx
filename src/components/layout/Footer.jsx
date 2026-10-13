import { Link } from 'react-router-dom';
import { company, footer } from '../../content/site';
import { Facebook, X, LinkedIn, Instagram, YouTube, ArrowUpRight } from '../common/icons';

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
            {/* The brand strapline (2026-10-13), not `company.tagline`.
                `tagline` is still the descriptor behind the document title
                and the logo's alt text — see the note on both in site.js. */}
            <p className="ls-footer__tagline">{company.strapline}</p>
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

          {/*
            Newsroom is a single link in this list (2026-10-12). It was its
            own column, then a sub-group here with the four categories under
            it; now it is one entry among the others.

            `footer.newsroom` — the Awards / MOUs / Events / In the News
            breakdown, with its TBC markers — is no longer rendered anywhere.
            It is still in `site.js`, and the `/news-room` page is where those
            categories belong once it exists.
          */}
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

          {/* The "Domains" column was removed on 2026-10-13. Its five links
              (EdTech, FinTech, HealthTech, LegalTech, AI First) are all still
              reachable from the Technology menu in the header, and
              `footer.domains` is still in site.js. */}

          {/* External sites, so anchors rather than router `Link`s. */}
          <div>
            <h2 className="ls-footer__coltitle">Products</h2>
            <nav className="ls-footer__links" aria-label="Product sites">
              {footer.external.map((link) => (
                <a
                  href={link.link}
                  key={link.title}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.title}
                  <ArrowUpRight size={12} />
                </a>
              ))}
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
          {/* The postal address went on 2026-10-12 and `company.legalName`
              on 2026-10-13. Both are still in `site.js`. */}
        </div>
      </div>
    </footer>
  );
}
