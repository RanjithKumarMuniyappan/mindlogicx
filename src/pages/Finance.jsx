import { financePage as fin } from '../content/pages/finance';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';

/**
 * `/finance` — built 2026-10-16 from the client's Finance deck
 * (`MindlogicxWebsiteFinanceVertical.html`). Copy is **verbatim**.
 *
 * Reached from Technology → Finance, which already pointed at `/finance`. The
 * deck suggests `/finance`; the existing route is kept so the menu keeps
 * working, and `site.js` already redirects `/finance/` here.
 *
 * ## ⚠️ 16 of the deck's 21 images are not used, and that was deliberate
 *
 * **Every one of the 21 alt texts is a source-page title rather than a
 * description** — PAYSTRAX, Cardstream, Citcon, Bemobi, QorePay, SWIFT,
 * Worldline, Visa, Fidoo, Clearview Federal Credit Union, Grappler, buva.ai,
 * WKO, IBN360 and more. Seven of those are payment companies: **direct
 * competitors in the exact vertical this page sells into.**
 *
 * Six of them carry another company's branding **inside the frame**, and are
 * withheld on those grounds:
 *
 * | file | what is visible |
 * |---|---|
 * | `image21` | a complete **GRAPPLER.IO advertisement** — their logo, brand colours, marketing copy and their "90.5%" statistic |
 * | `image12` | **Clearview Federal Credit Union**, **Mastercard** and **Verifone** marks, all legible |
 * | `image18` | **BEMOBI** logo on a Portuguese analytics dashboard |
 * | `image9`  | what appears to be a real **Worldline** product screenshot, with real figures |
 * | `image5`  | the **IMPS** mark |
 * | `image3`  | a Czech **Fidoo** finance dashboard |
 *
 * Shipping those would present another company's advertising as Mindlogicx's
 * own product, and a card-network logo on a payments page implies a
 * relationship that does not exist. That is a trademark and reputational
 * exposure, not a styling preference, so they are left out rather than
 * flagged-and-shipped.
 *
 * **The five that are used carry no identifiable branding** and were checked
 * by eye, not taken on trust. Their licensing is still unconfirmed — the deck
 * records no source, licence or photographer for any file — so they should be
 * treated as placeholders until that is settled. All five are decorative
 * here; the deck's alt text describes somebody else's product and is never
 * reused.
 *
 * The capability cards in section 3 are **text only**. Two of their five
 * images are in the withheld list, a third has an unidentified logo and a
 * fourth has visible lorem ipsum — a grid where some cards have pictures and
 * others do not reads as broken, so none do.
 *
 * ## ⚠️ The hedging is load-bearing — do not tighten it
 *
 * Section 5 is titled **"How the Platform Is Envisioned to Work"**. The deck
 * runs about eighteen qualifiers of that kind: "is developing", "proposed",
 * "envisioned to support", "intended to support", "designed to". The page
 * also carries two explicit disclaimers — that settlement happens "through
 * appropriately licensed or authorized financial partners", and that the
 * platform is "under development".
 *
 * On a payments page those qualifiers are the difference between describing
 * an unbuilt product and claiming to already move other people's money.
 * **Nothing here paraphrases them**, and the verification sweep asserts
 * several so a later edit that flattens them shows up.
 *
 * There is no PCI DSS, ISO, RBI or PSD2 claim anywhere in the deck, which is
 * correct for a platform in development. **Do not add a compliance badge row.**
 *
 * ## Other decisions
 *
 * - **The deck's trailing blocks are not on the page.** Its preamble (which
 *   says outright it "is designed for direct use by the UI/UX designer and
 *   website development team"), "8. SEO & Website Metadata" and
 *   "Recommendations for Website Implementation" are instructions to the
 *   builder, not words for the reader — the same call made for the HealthTech
 *   and Knowledge Engineering decks. They are in `authorGuidance`.
 * - **Section numbers are dropped** per the site-wide no-numbering rule;
 *   `number` is kept in the content module.
 * - **Both CTAs were labels only** ("Proposed CTA: …"), with no destinations —
 *   the deck contains no hyperlinks at all. "Explore Our Vision" scrolls to
 *   section 2; "Contact Us" goes to `/contact-us`. Both are this project's
 *   choices.
 * - **Section 5 captions a diagram that does not exist** in the deck. The
 *   caption is rendered as the statement it is; nothing was drawn to fill the
 *   gap.
 * - The deck names **Flywire** as the model being followed. That is a listed
 *   US competitor; it appears only in the preamble, so it is in
 *   `authorGuidance` and never reaches the page.
 */
const ART = '/assets/images/pages/finance';

const INDUSTRY_ART = {
  Education: 'industry-education.webp',
  Healthcare: 'industry-healthcare.webp',
  'Enterprises & B2B': 'industry-enterprise.webp',
  'Travel & Hospitality': 'industry-travel.webp',
};

export default function Finance() {
  const s = Object.fromEntries(fin.sections.map((x) => [x.id, x]));
  const transforming = s['transforming-financial-transactions'];
  const solutions = s['financial-technology-solutions'];
  const industries = s['industry-focused-solutions'];
  const how = s['how-the-platform-is-envisioned-to-work'];
  const trust = s['technology-security-trust'];
  const vision = s['vision-for-the-future-of-finance'];

  return (
    <>
      <PageHero title={fin.title} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          {/*
            The heading spans the full container, above the image, rather than
            sitting in the left half of the two-up.

            It is 68 characters: in a half-width column it ran to three lines
            even at a reduced size. Across the whole measure it holds two.
            The "FINANCE | FINANCIAL TECHNOLOGY" eyebrow was removed
            2026-10-16; `fin.hero.eyebrow` is still in the content module.
          */}
          <Reveal effect="fadeInUp">
            <h2 className="ls-h2 ls-fin__heroheading">{fin.hero.heading}</h2>
          </Reveal>

          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--16x9">
                <img
                  src={`${ART}/network-map.webp`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </span>
            }
          >
            <p className="ls-lead">{fin.hero.strapline}</p>
            {fin.hero.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}

            {/*
              ⚠️ Removed 2026-10-16 at the client's request: the "Platform
              Under Development" badge and the "Explore Our Vision" CTA.

              The badge was a **regulatory statement**, not decoration. The
              licensed-partner disclaimer in Technology, Security & Trust
              still carries that work — and with the closing band also
              removed (see below) it is now the **only** qualification on the
              page. Both the badge and the CTA remain in `fin.hero`.
            */}
          </FeatureLayout>
        </div>
      </section>

      {/* The hero CTA scrolls here. */}
      <section className="ls-section ls-section--smoke" id={transforming.id}>
        <div className="ls-container">
          <SectionIntro
            eyebrow={transforming.subheading}
            title={transforming.heading}
          />
          <div className="ls-ke__prose">
            {transforming.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Text cards, no pictures — see the note at the top. */}
      <section className="ls-section ls-section--white" id={solutions.id}>
        <div className="ls-container">
          <SectionIntro title={solutions.heading} lead={solutions.lead} />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {solutions.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 3) * 70}>
                  <h3 className="ls-prod__captitle">{item.title}</h3>
                  <p className="ls-prod__capdesc">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--smoke" id={industries.id}>
        <div className="ls-container">
          <SectionIntro title={industries.heading} lead={industries.body?.[0]} />
          <ul className="ls-grid ls-grid--4 ls-mt-md">
            {industries.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-mediacard" effect="fadeInUp" delay={(i % 4) * 70}>
                  <span className="ls-media ls-media--4x3">
                    <img
                      src={`${ART}/${INDUSTRY_ART[item.title]}`}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </span>
                  <span className="ls-prod__shbody">
                    <h3 className="ls-prod__shtitle">{item.title}</h3>
                    <span className="ls-prod__shdesc">{item.description}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white" id={how.id}>
        <div className="ls-container">
          <SectionIntro eyebrow={how.subheading} title={how.heading} />
          <div className="ls-ke__prose">
            {how.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>

          {/* The deck's "Illustrative conceptual workflow…" caption was
              removed 2026-10-16 — it captioned a diagram the deck never
              included, so on the page it read as a stray note. It is still
              `how.diagram.caption` in the content module. */}
        </div>
      </section>

      <section className="ls-section ls-section--smoke" id={trust.id}>
        <div className="ls-container">
          <SectionIntro eyebrow={trust.subheading} title={trust.heading} />
          {trust.body?.map((p) => (
            <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
              {p}
            </p>
          ))}
          {trust.listLeadIn && <p className="ls-body ls-mt-sm">{trust.listLeadIn}</p>}

          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {trust.priorities.map((p, i) => (
              <li key={p.label}>
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 3) * 70}>
                  <h3 className="ls-prod__captitle">{p.label}</h3>
                  <p className="ls-prod__capdesc">{p.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* ⚠️ Regulatory disclaimer. See the note at the top of this file. */}
          <Reveal className="ls-fin__disclaimer ls-mt-md" effect="fadeInUp">
            {trust.disclaimer}
          </Reveal>
        </div>
      </section>

      <section className="ls-section ls-section--white" id={vision.id}>
        <div className="ls-container">
          <SectionIntro eyebrow={vision.subheading} title={vision.heading} />
          <div className="ls-ke__prose">
            {vision.body.map((p) => (
              <p className="ls-body ls-ke__para" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/*
        "Discover What's Next in Financial Technology" was removed 2026-10-16
        at the client's request. It held the page's only "Contact Us" route
        and the **"Platform under development."** disclaimer.

        ⚠️ With the hero badge gone too, the Technology, Security & Trust
        band's licensed-partner disclaimer is now the **only** qualification
        left on the page. Do not remove that one as well without replacing it.

        The section is intact in the content module as `discover-whats-next`.
      */}
    </>
  );
}
