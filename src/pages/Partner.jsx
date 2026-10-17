import { Link } from 'react-router-dom';
import { partnerPage as ptr } from '../content/pages/partner';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';
import { ContentIcon, ArrowUpRight } from '../components/common/icons';

/**
 * `/partner` — built 2026-10-17 from the client's deck
 * (`Mindlogicx_Partner_Webpage_Content_v2.1.docx`). Copy is **verbatim**; the
 * provenance and everything held back live in `content/pages/partner.js`,
 * which should be read alongside this file.
 *
 * The header's Partner menu item has pointed at `/partner` since the
 * navigation was built, and had been landing on `Placeholder` ever since.
 *
 * ## ⚠️ Do not sharpen the commercial language
 *
 * This page sells a business relationship and the deck never promises a
 * result. It says **"opportunities"**, not returns: "revenue opportunities",
 * "opportunities for recurring revenue", "Partner Opportunity". Capabilities
 * are qualified — "applicable", "where applicable", "subject to product
 * availability", "under development". The deck's own guideline table requires
 * language "free from unsupported claims".
 *
 * Turning any of that into a number, a percentage or a promise would be
 * inventing a commercial claim on the client's behalf. **There is no margin,
 * commission rate, partner tier, revenue figure or customer count on this
 * page**, and the deck explicitly excludes all of them.
 *
 * The sentence doing the most work is the one under the partnership journey:
 * *"Partnership scope, commercial terms, and enablement arrangements are
 * established through mutual agreement."* It reads like boilerplate. It is
 * the only thing on the page stating that nothing here is an offer.
 *
 * ## Three things the client should settle
 *
 * - **The deck asks for `/partners`.** The route is `/partner` because the
 *   header already points there. `seo.url` records the request.
 * - **IntelliTUTE is absent from the portfolio table** — the deck lists four
 *   products and IntelliTUTE, which has a live page here, is not one of them.
 *   Nothing was invented to fill the gap.
 * - **"Partner With Us" CTAs were removed site-wide on 2026-10-12**, when
 *   `/partner` did not exist. It does now, so the page is reachable only from
 *   the header. `cta.btnText` / `cta.btnLink` in `site.js` still hold that
 *   call to action, unrendered.
 *
 * ## Other decisions
 *
 * - **"Section N." prefixes are dropped** and so are the journey's `01`–`04`,
 *   per the site-wide no-numbering rule. Both are kept in the content module.
 * - **Every CTA in the deck is a label with no destination** — the document
 *   contains no hyperlink at all. "Become a Partner" goes to `/contact-us`
 *   (the deck's guideline allows "a dedicated partnership enquiry page or
 *   contact mechanism", and no partnership form exists yet); the two
 *   portfolio CTAs go to `/ed-tech`. This project's choices.
 * - **The portfolio cards link to the real product pages.** Those routes are
 *   this site's, not the deck's. IntelliTHESIS has no page — it is "Planned
 *   for 2027" — so its card carries the status instead of a link.
 * - **The hero is a client photograph** (2026-10-17). The deck itself
 *   supplied none — this arrived separately, and no licence came with it.
 *   See `hero.image` and `imagery` in the content module. It replaced a
 *   `PartnerArt` drawing, kept unimported in `MarkingArt.jsx`.
 */

/* A benefit card with its glyph. Shared by "Why Partner" and "Built for
   Partner Success"; the revenue channels use the same shape without one. */
function BenefitCard({ title, description, glyph, delay = 0 }) {
  return (
    <Reveal className="ls-prod__cap" effect="fadeInUp" delay={delay}>
      {glyph && (
        <span className="ls-osm__capicon" aria-hidden="true">
          <ContentIcon name={glyph} />
        </span>
      )}
      <h3 className="ls-prod__captitle">{title}</h3>
      <p className="ls-prod__capdesc">{description}</p>
    </Reveal>
  );
}

/* The closing block each of the first three sections ends on: a short heading
   over one or two sentences, set apart from the cards above it. */
function SectionClose({ closing }) {
  return (
    <Reveal className="ls-ptr__close" effect="fadeInUp">
      <h3 className="ls-ptr__closetitle">{closing.heading}</h3>
      {closing.body.map((p) => (
        <p className="ls-ptr__closebody" key={p.slice(0, 40)}>
          {p}
        </p>
      ))}
    </Reveal>
  );
}

export default function Partner() {
  const s = Object.fromEntries(ptr.sections.map((x) => [x.id, x]));
  const why = s['why-partner'];
  const revenue = s['revenue-opportunities'];
  const portfolio = s['technology-portfolio'];
  const success = s['partner-success'];
  const close = ptr.closing;

  return (
    <>
      {/* The deck's recommended `h1`, used as given. Unlike the product
          pages, there is no product name competing for this slot. */}
      <PageHero title={ptr.hero.heading} tone="plain" />

      {/* ── Hero ── */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--4x3">
                <img
                  src={ptr.hero.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </span>
            }
          >
            <p className="ls-lead">{ptr.hero.strapline}</p>
            {ptr.hero.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}

            <div className="ls-ke__ctas">
              {ptr.hero.ctas.map((cta) => (
                <Pill
                  key={cta.label}
                  variant={cta.kind === 'primary' ? 'solid' : 'tint'}
                  to={cta.target}
                  arrow={cta.kind === 'primary'}
                >
                  {cta.label}
                </Pill>
              ))}
            </div>
          </FeatureLayout>
        </div>
      </section>

      {/* ── Why partner with Mindlogicx? ── */}
      <section className="ls-section ls-section--smoke" id={why.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={why.label}
            title={why.heading}
          />
          <div className="ls-ke__prose">
            {why.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>

          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {why.items.map((item, i) => (
              <li key={item.title}>
                <BenefitCard {...item} delay={(i % 3) * 70} />
              </li>
            ))}
          </ul>

          <SectionClose closing={why.closing} />
        </div>
      </section>

      {/* ── Revenue opportunities ── */}
      <section className="ls-section ls-section--white" id={revenue.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={revenue.label}
            title={revenue.heading}
            lead={revenue.body[0]}
          />

          <ul className="ls-grid ls-grid--4 ls-mt-md">
            {revenue.items.map((item, i) => (
              <li key={item.title}>
                <BenefitCard {...item} delay={(i % 4) * 70} />
              </li>
            ))}
          </ul>

          <SectionClose closing={revenue.closing} />
        </div>
      </section>

      {/* ── Technology portfolio ──
          The four products the deck lists. See the file note on IntelliTUTE. */}
      <section className="ls-section ls-section--smoke" id={portfolio.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={portfolio.label}
            title={portfolio.heading}
          />
          <div className="ls-ke__prose">
            {portfolio.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>

          <ul className="ls-ptr__products ls-mt-md">
            {portfolio.products.map((product, i) => (
              <li key={product.name}>
                <Reveal className="ls-ptr__product" effect="fadeInUp" delay={(i % 2) * 90}>
                  <div className="ls-ptr__producthead">
                    <h3 className="ls-ptr__productname">{product.name}</h3>
                    <p className="ls-ptr__productdesc">{product.descriptor}</p>
                    {/* ⚠️ "Planned for 2027" — the deck's own status line, and
                        the reason this card has no link. */}
                    {product.status && (
                      <p className="ls-ptr__productstatus">{product.status}</p>
                    )}
                  </div>

                  <p className="ls-ptr__productbody">{product.positioning}</p>

                  <p className="ls-ptr__opportunity">
                    <span className="ls-ptr__opportunitylabel">Partner Opportunity</span>
                    {product.opportunity}
                  </p>

                  {product.link && (
                    <Link className="ls-edu__link ls-ptr__productlink" to={product.link}>
                      Explore {product.name}
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </Reveal>
              </li>
            ))}
          </ul>

          <SectionClose closing={portfolio.closing} />

          <Reveal className="ls-ptr__sectioncta" effect="fadeInUp">
            <Pill variant="solid" to={portfolio.cta.target} arrow>
              {portfolio.cta.label}
            </Pill>
          </Reveal>
        </div>
      </section>

      {/* ── Built for partner success ── */}
      <section className="ls-section ls-section--white" id={success.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={success.label}
            title={success.heading}
          />
          <div className="ls-ke__prose">
            {success.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>

          <ul className="ls-grid ls-grid--4 ls-mt-md">
            {success.items.map((item, i) => (
              <li key={item.title}>
                <BenefitCard {...item} delay={(i % 4) * 70} />
              </li>
            ))}
          </ul>

          {/* The partnership journey. `.ls-flow` renders no numerals — the
              deck's 01–04 are dropped, per the site-wide rule. */}
          <h3 className="ls-h3 ls-osm__subhead">{success.journey.heading}</h3>
          <ol className="ls-flow">
            {success.journey.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal className="ls-flow__stage" effect="fadeInUp" delay={i * 60}>
                  <h4 className="ls-flow__title">{step.title}</h4>
                  <p className="ls-prod__capdesc">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          {/*
            ⚠️ Load-bearing, despite reading like boilerplate: it is the only
            statement on the page saying that none of this is an offer. See
            the file note.
          */}
          <Reveal className="ls-fin__disclaimer ls-mt-md" effect="fadeInUp">
            {success.disclaimer}
          </Reveal>
        </div>
      </section>

      {/* ── Let's grow together ──
          The deck is explicit that this band carries a single button. */}
      <section className="ls-section ls-section--smoke" id={close.id}>
        <div className="ls-container">
          <Reveal className="ls-ptr__grow" effect="fadeInUp">
            <span className="ls-eyebrow">{close.label}</span>
            <h2 className="ls-h2 ls-ptr__growheading">{close.heading}</h2>
            {close.body.map((p) => (
              <p className="ls-body ls-ptr__growbody" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}

            <p className="ls-ptr__growstatement">{close.statement}</p>

            <h3 className="ls-ptr__growsub">{close.subheading}</h3>
            <p className="ls-ptr__growbody">{close.subbody}</p>

            <Pill className="ls-ptr__growcta" variant="solid" to={close.cta.target} arrow>
              {close.cta.label}
            </Pill>
          </Reveal>
        </div>
      </section>
    </>
  );
}
