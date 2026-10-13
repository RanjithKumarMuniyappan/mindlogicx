import { intelliexamsPage as ie } from '../content/pages/intelliexams';
import PageHero from '../components/common/PageHero';
import SectionIntro from '../components/common/SectionIntro';
import FeatureLayout from '../components/common/FeatureLayout';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';

/**
 * `/intelliexams` — built 2026-10-13 from
 * https://www.mindlogicx.com/intelliexam/. Copy is **verbatim**, including the
 * source's own faults, which are listed below rather than quietly repaired.
 *
 * The live site is a client-rendered SPA serving an empty root div, so the
 * copy was read out of the deployed page chunk and cross-checked string for
 * string against the reference project's components. Both agree throughout.
 *
 * ## ⚠️ There are two IntelliEXAMS pages on the live site
 *
 * The deployed route table also carries **`/new_intelliexams`** — a newer,
 * structurally different page (IntelliEXAMS **Prime** / **NG**, "Powered by
 * MindGENIE", OBE/CLO/PLO mapping, a comparison table). It calls
 * `getMetadata("/intelliexam")`, so **both routes emit the same title and
 * meta description** — duplicate content against itself.
 *
 * This page is `/intelliexam` only, as asked. Nothing was merged from the
 * other. **Which of the two is canonical is a decision for the client**, and
 * it should be made before either ships.
 *
 * ## ⚠️ The numbers are unsubstantiated
 *
 * "95+ m", "55+ m", "10+ m" carry no source, date or footnote, and the bare
 * **"m" is never expanded** anywhere on the source — so the statistics row
 * literally reads "95+ m Answer Scripts Evaluated". Rendered as found;
 * guessing at "million" would be inventing precision. The CTA's "globally
 * acclaimed" and "over 10 million users" are uncited in the same way.
 *
 * ## ⚠️ Nine named institutions under "Our Clients"
 *
 * VIT, AKTU, Amity, CSVTU, GIIS, GTU, Maulana Abul Kalam Azad University of
 * Technology, Mata Gujri and RGUHS — real third-party marks. They are on the
 * client's own live page, so they are carried, but each needs **written
 * consent**, and confirmation that the engagement is current and actually
 * IntelliEXAMS. A tenth logo (AKU) sits in the asset folder unused.
 *
 * Rendered as a **static grid, not the source's autoplaying carousel**: nine
 * logos fit on one screen here, and an auto-advancing strip that cannot be
 * paused is a WCAG 2.2.2 problem for no gain.
 *
 * ## What was changed, and why
 *
 * - **Every link on the source is `href="#"`** — all six feature cards and all
 *   nine client logos. They are rendered as plain cards, not as links that go
 *   nowhere.
 * - **"Request To Demo" pointed at `/appointment/`**, which does not exist
 *   here, via a redux dispatch this project has no store for. It now points at
 *   `/contact-us`, matching IntelliTUTE and IntelliWORK. The source's Calendly
 *   URL is still in the content module if a booking flow is preferred.
 * - **The floating "Visit Website" button is not reproduced as an overlay.**
 *   On the source it is a fixed GIF with no accessible name and no
 *   new-window warning. Its destination (`intelliexams.com`) is kept as a
 *   properly labelled secondary button in the closing band.
 * - **Alt text was rewritten.** Five content images and all nine client logos
 *   use `alt="Mindlogicx"` on the source, which describes none of them. The
 *   decorative ones are now `alt=""`; the logos name their institution.
 * - The source's banner is an `h2` and the page has **no `h1` at all**, while
 *   the statistics row emits **three `h1`s containing `<p>`** (invalid HTML).
 *   This page has one `h1` — the page title — and a normal outline.
 *
 * ## Verbatim faults, preserved
 *
 * The heading is singular **"Feature"**; "examination management  platform"
 * has a double space; "transform how create, deliver and evaluate" is missing
 * a word; **"Request To Demo"**; "Question Paper Delivered" is ungrammatical;
 * `®` appears on IntelliEXAMS® in the body but not in the title or CTA; and
 * "On Screen Marking" and "On-Screen Marking" both appear.
 */

function Bullets({ items }) {
  return (
    <ul className="ls-bullets">
      {items.map((item) => (
        <li key={item.slice(0, 48)}>{item}</li>
      ))}
    </ul>
  );
}

export default function IntelliExams() {
  const s = Object.fromEntries(ie.sections.map((x) => [x.id, x]));
  const intro = s.introduction;
  const feature = s.feature;
  const osm = s['on-screen-marking'];
  const facts = s['fun-facts'];
  const qp = s['qp-authoring-and-delivery'];
  const online = s['online-exam-online-assignment'];
  const clients = s['our-clients'];
  const cta = s.cta;
  const visit = s['floating-visit-website-button'];

  return (
    <>
      <PageHero title={ie.title} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--4x3">
                <img src={intro.image} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            {/* The product lockup. The page title above already names it, so
                this is decorative rather than announced a second time. */}
            <img
              className="ls-iex__logo"
              src={intro.logo.image}
              alt=""
              aria-hidden="true"
              width="240"
            />
            {intro.body.map((p) => (
              <p className="ls-body" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
          </FeatureLayout>
        </div>
      </section>

      {/* "Feature", singular — the source's own heading. */}
      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <SectionIntro title={feature.heading} lead={feature.intro} />
          <ul className="ls-grid ls-grid--3 ls-mt-md">
            {feature.cards.map((card, i) => (
              <li key={card.title}>
                {/* Not a link: every `href` on the source is "#". */}
                <Reveal className="ls-prod__cap" effect="fadeInUp" delay={(i % 3) * 70}>
                  <h3 className="ls-prod__captitle">{card.title}</h3>
                  <p className="ls-prod__capdesc">{card.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            media={
              <span className="ls-media ls-media--3x2">
                <img src={osm.image} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <h2 className="ls-h2 ls-h2--sm">{osm.heading}</h2>
            <Bullets items={osm.bullets} />
          </FeatureLayout>
        </div>
      </section>

      {/* ⚠️ Unsourced, and the bare "m" is the source's. See the top note. */}
      <section className="ls-section ls-section--accent">
        <div className="ls-container">
          <ul className="ls-iex__facts">
            {facts.stats.map((stat, i) => (
              <li key={stat.label}>
                <Reveal effect="fadeInUp" delay={i * 70}>
                  <span className="ls-iex__factnum">
                    {stat.number} {stat.unit}
                  </span>
                  <p className="ls-iex__factlabel">{stat.label}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <FeatureLayout
            reverse
            media={
              <span className="ls-media ls-media--3x2">
                <img src={qp.image} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <h2 className="ls-h2 ls-h2--sm">{qp.heading}</h2>
            <Bullets items={qp.bullets} />
          </FeatureLayout>
        </div>
      </section>

      <section className="ls-section ls-section--smoke">
        <div className="ls-container">
          <FeatureLayout
            media={
              <span className="ls-media ls-media--3x2">
                <img src={online.image} alt="" aria-hidden="true" loading="lazy" />
              </span>
            }
          >
            <h2 className="ls-h2 ls-h2--sm">{online.heading}</h2>
            {/* Two columns on the source; one list here, since they are one
                list of capabilities and the split was purely visual. */}
            <Bullets items={online.bulletColumns.flat()} />
          </FeatureLayout>
        </div>
      </section>

      {/* ⚠️ Third-party marks — permission required. See the top note. */}
      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <SectionIntro title={clients.heading} center />
          <ul className="ls-aff__grid ls-mt-md">
            {clients.items.map((item, i) => (
              <li key={item.title}>
                <Reveal className="ls-aff__tile" effect="fadeInUp" delay={(i % 4) * 60}>
                  <img
                    className="ls-aff__logo"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <Reveal className="ls-ke__close" effect="fadeInUp">
            <h2 className="ls-h2 ls-ke__closeheading">{cta.heading}</h2>
            <div className="ls-ke__ctas">
              {/* Repointed from the source's `/appointment/`. */}
              <Pill variant="light" to="/contact-us" arrow>
                {cta.ctas[0].label}
              </Pill>

              {/* The floating overlay's destination, given a real label. */}
              <Pill
                variant="ghost"
                href={visit.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {visit.tooltip}
              </Pill>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
