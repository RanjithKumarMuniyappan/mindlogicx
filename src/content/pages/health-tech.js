/*
 * ============================================================================
 * CONTENT EXTRACTION — HealthTech sector page
 * ============================================================================
 *
 * Extracted: 2026-10-15
 *
 * SOURCES (both read-only; nothing in the reference project was modified)
 * ---------------------------------------------------------------------------
 * 1. LOCAL SOURCE, AUTHORITATIVE — the unminified Next.js checkout at
 *      /home/ranjith/Documents/AntigravityProjects/mlx-website-2025-frontend
 *    Files read, in the order the page composes them:
 *      src/app/health-tech/page.tsx            (route + getMetadata("/health-tech"))
 *      src/app/health-tech/HealthTechComp.tsx  (THE render order — see below)
 *      src/components/Common/PageBanner.tsx    (banner = one <h2> over a CSS bg)
 *      src/components/HealthTech/HealthTechServices/page.tsx  (the 4 product cards)
 *      src/components/HealthTech/HealthContent/page.tsx       (IMPORTED BUT
 *                                                              COMMENTED OUT)
 *      src/components/Common/CtaAreaTwo.tsx    (closing CTA band)
 *      src/seoConfig.ts                        (the route's <title> + description)
 *      src/seoHelper.ts, src/app/layout.tsx, src/app/sitemap.ts
 *    Note: HealthTechComp.tsx ALSO imports AboutContent, FunFactsTwo,
 *    TeamStyleThree, Feedback and Partner — none of them is rendered. They are
 *    dead imports, not content, and are not recorded as sections.
 *
 * 2. RUNNING DEV SERVER, CROSS-CHECK — http://localhost:3000/health-tech/
 *    (HTTP 200, 16,844-byte server-rendered document, fetched 2026-10-15).
 *    Unlike the deployed SPA builds of other Mindlogicx properties, this Next
 *    app server-renders the page, so the served HTML contains the real copy and
 *    could be diffed against the source character for character.
 *
 * RESULT OF THE CROSS-CHECK: the two sources AGREE COMPLETELY. Every string in
 * this file is present in BOTH the local source and the rendered document, with
 * one unavoidable exception — the rendered HTML collapses the source's internal
 * double spaces and trailing spaces (HTML whitespace collapsing), so those are
 * byte-verified against the LOCAL SOURCE ONLY. See the VERBATIM note. Nothing
 * is injected at runtime that is not in the source; the rendered page adds no
 * copy of its own.
 *
 * ---------------------------------------------------------------------------
 * VERBATIM
 * ---------------------------------------------------------------------------
 * All copy is VERBATIM. Nothing reworded, shortened, re-capitalised,
 * re-punctuated or spell-corrected. Specifically preserved:
 *   - "Mhpro Medics (MOA)", "Mhpro Academy", "Mhpro Clinic" — the client's own
 *     lower-case "hpro" spelling in the data, which CONTRADICTS the body copy
 *     on the very same cards ("MHPro Academy", "MasterHealthPro (MHP)") and the
 *     product logos. See concern 4.
 *   - The DOUBLE SPACE in "Our ForHim.ForHer clinic  is a digital-first" (card 3).
 *   - THREE separate double spaces in card 4: after the closing curly quote
 *     ("“For Him. For Her”  to buy"), inside "The entire suite of products  are",
 *     and a TRAILING two spaces at the very end of the string
 *     ("...deliver to you on demand.  "). All four of these whitespace quirks
 *     are kept byte-exact below. They render as single/no space in the browser.
 *   - Curly apostrophe (U+2019) in "the world’s first" (card 4) versus the
 *     STRAIGHT apostrophe in "India's premier online learning platform"
 *     (card 2). The source is inconsistent; both forms are kept as found.
 *   - Curly double quotes (U+201C/U+201D) around “For Him. For Her”.
 *   - "&" as a literal ampersand in "carefully designed & manufactured".
 *   - "anti ageing" (unhyphenated, British spelling) alongside US spellings in
 *     the same file ("personalized", "specialize", "specialty").
 *   - "e-shop", "digital-first", "AI-assisted", "AI-powered", "e-pharmacy" as
 *     hyphenated and lower-cased exactly as written.
 *   - The product name written four different ways across the page:
 *     "ForHim.ForHer" (card 3 body and card 4 title) and "For Him For Her" /
 *     “For Him. For Her” (card 4 body).
 *   - The CTA heading "Innovation in Healthcare with Precision and Compassion"
 *     and the button label "Request a Demo" (lower-case "a" here, unlike the
 *     "Request To Demo" on the IntelliEXAMS page).
 *
 * ---------------------------------------------------------------------------
 * INVENTED: NOTHING
 * ---------------------------------------------------------------------------
 * This page is SHORT. It is a banner, four product cards and a CTA band — that
 * is the entire page. No statistics, client names, testimonials, awards,
 * certifications, accreditations, prices, phone numbers, email addresses or
 * feature lists have been added to pad it out. The page carries NO hero
 * paragraph, NO section heading over the card grid, NO intro copy, NO stats
 * band, NO team, NO testimonials, NO partner logos and NO form. Where the
 * design clearly wants copy that does not exist in the source, the field is
 * recorded as null with a `missing: true` / `note:` rather than filled in.
 *
 * ---------------------------------------------------------------------------
 * RENDERED: false — COMMENTED OUT IN THE SOURCE
 * ---------------------------------------------------------------------------
 * Three blocks exist in the source but do NOT render. They are recorded under
 * `notRendered` at the bottom of this file, NOT mixed into `sections`:
 *   a. <HealthContent/> — a whole two-column section ("Services Description" +
 *      "Our Working Process", ~450 words, 3 bullets + 6 process steps). It is
 *      imported on line 12 of HealthTechComp.tsx and commented out on line 33.
 *      Its full verbatim text IS preserved below because it is substantial,
 *      page-specific copy the client may want back — but it is the single
 *      biggest decision on this page, and it carries the page's only
 *      clinical/regulatory claims. See concern 1 and concern 9.
 *   b. The product-name <h3> inside each service card (lines 90-92 of
 *      HealthTechServices/page.tsx). Because it is commented out, the four
 *      product NAMES ARE NEVER SHOWN AS TEXT ANYWHERE ON THE PAGE — only as
 *      pixels inside the logo images, which all have alt="". See concern 3.
 *   c. A duplicate CtaAreaTwo with url="/partner/" instead of "/appointment/"
 *      (line 36 of HealthTechComp.tsx), same heading, btn_name "Request a Demo".
 * Also dead-but-not-commented: the `iconName` Pe-icon-7-stroke classes on all
 * four cards (the <i> that used them is commented out on line 78), and a
 * `value.title == "Consultancy"` branch for a card that does not exist in the
 * data. Both recorded under `notRendered`.
 *
 * ---------------------------------------------------------------------------
 * EXCLUDED — SITE CHROME, NOT PAGE CONTENT
 * ---------------------------------------------------------------------------
 * <NavbarTwo /> and <Footer /> render on this page but belong to the layout.
 * Their copy (menu labels, "Dare to Disrupt", footer link lists, the
 * country-flags strip, the copyright line) is NOT recorded here, nor are their
 * three images (logo.webp, logo-white.webp/png, country_flags.webp). The one
 * href="#" in the served document is in that chrome, not in this page.
 * This page has NO floating "Visit Website" button (unlike /intelliexam).
 *
 * ============================================================================
 * FLAGGED FOR THE CLIENT — DECISIONS AND DEFECTS
 * ============================================================================
 * 1. THE PAGE IS A STUB AND READS AS ONE. Four paragraphs of product blurb
 *    between a bare banner and a CTA. There is no sentence anywhere on the page
 *    that says what Mindlogicx HealthTech IS, no heading over the card grid,
 *    and no copy linking the four products together. The commented-out
 *    <HealthContent/> block was presumably meant to supply exactly that and was
 *    switched off. THE CLIENT MUST DECIDE whether to restore it (after the
 *    claim review in concern 9), rewrite it, or commission new copy. Nothing
 *    has been invented to fill the gap.
 *
 * 2. THERE IS NO <h1> ON THE PAGE AT ALL. The served document contains exactly
 *    ONE <h2> ("HealthTech", the banner) and ONE <h3> (the CTA heading) and
 *    zero <h1>, <h4>, <h5>, <h6>. Verified by counting tags in the fetched
 *    HTML. "HealthTech" should be the page's single <h1> on the new site.
 *
 * 3. THE FOUR PRODUCT CARDS HAVE NO ACCESSIBLE NAME AND NO VISIBLE NAME.
 *    Each card is:
 *      <a style="cursor:pointer" onClick={...}>   <-- NO href attribute
 *        <div class="product_logo"><img src=... alt="" /></div>
 *        <p>{shortText}</p>
 *      </a>
 *    Consequences, all confirmed in the served HTML:
 *      - NO href means the anchor is NOT keyboard-focusable and NOT activatable
 *        by Enter. The entire card grid is mouse-only. Navigation happens in a
 *        React onClick that dispatches showLoader() then router.push().
 *      - alt="" on every logo means the product name is invisible to screen
 *        readers and to anyone with images off. The only text in the link is
 *        the 50-word blurb, so the link's accessible name is a paragraph.
 *      - the <h3> that would have printed the name is commented out, so the
 *        names "Mhpro Medics (MOA)", "Mhpro Academy", "Mhpro Clinic" and
 *        "ForHim.ForHer" DO NOT APPEAR AS TEXT on the rendered page.
 *    On the new site these must become real <a href> elements (or buttons) with
 *    a visible heading and descriptive alt text.
 *
 * 4. PRODUCT NAMING IS INCONSISTENT FOUR WAYS AND NEEDS A BRAND RULING.
 *    On this one page: "Mhpro Medics (MOA)" / "Mhpro Academy" / "Mhpro Clinic"
 *    in the card titles, but "MHPro Academy" in card 2's own body text and
 *    "MasterHealthPro (MHP)" in card 1's. The product routes are singular
 *    "/mhpro_medic/" but the title is plural "Medics". "MOA" is never expanded
 *    on this page (the footer elsewhere calls it "Medics Online Academy").
 *    And the fourth product is "ForHim.ForHer", "For Him For Her" and
 *    “For Him. For Her” within two sentences. Nothing corrected here.
 *
 * 5. CARD 3 DESCRIBES THE WRONG PRODUCT. The card titled "Mhpro Clinic" opens
 *    "Our ForHim.ForHer clinic  is a digital-first..." — i.e. the Mhpro Clinic
 *    card is copy about the ForHim.ForHer clinic, and the card immediately
 *    after it is titled "ForHim.ForHer". Either the copy is on the wrong card or
 *    the two products genuinely overlap and the page should say so. CLIENT MUST
 *    RESOLVE; this is a content error, not a formatting one.
 *
 * 6. ALL FOUR CARD DESTINATIONS ARE ROUTES THAT DO NOT EXIST ON THE NEW SITE.
 *    /mhpro_medic/, /mhpro_academy/, /mhpro_clinic/ and /forhimforher/ all
 *    exist in the old Next app (src/app/) but NONE is in the new site's route
 *    table (src/App.jsx) — every one currently falls through to <Placeholder>.
 *    The same is true of /health-tech itself. Six pages to build or redirect.
 *
 * 7. THE CTA IS NOT A BUTTON AND ITS FLOW DOES NOT EXIST ON THE NEW SITE.
 *    "Request a Demo" is a <div class="custom-btn"> with an onClick — not a
 *    <button>, not an <a> — so it cannot be tabbed to or activated by keyboard
 *    (same defect as the IntelliEXAMS CTA). Its onClick writes the Calendly
 *    title/url into a redux store and client-routes to /appointment/. The new
 *    site has no redux and no /appointment/ route. The Calendly URL
 *    (https://calendly.com/mindlogicx-sales/enquiry) is a THIRD-PARTY endpoint
 *    shared across pages — confirm the booking link is still live and that
 *    Calendly embedding is still the intended flow.
 *
 * 8. THE CTA RENDERS AN EMPTY <p>. CtaAreaTwo always renders <p>{desc}</p>, and
 *    this page does not pass `desc`, so an empty paragraph ships in the markup.
 *    Recorded as body: null, missing: true. Supply copy or remove the element.
 *
 * 9. MEDICAL / CLINICAL CLAIMS — THE HIGHEST-RISK ITEM ON THIS PAGE.
 *    (a) LIVE, on the rendered page:
 *        - "AI-powered technology platform ... evidence-based knowledge
 *          resources" and "aims to prepare clinicians to master Basic
 *          Sciences" (card 1). "Evidence-based" is a regulated-sounding term;
 *          confirm there is substantiation.
 *        - "India's premier online learning platform" (card 2) — an
 *          unsubstantiated superlative. No ranking, award or source is cited
 *          anywhere on the page.
 *        - "accredited courses across various medical disciplines" (card 2) —
 *          ACCREDITED BY WHOM? No accrediting body is named on this page.
 *          Medical-education accreditation claims are legally sensitive and
 *          must be backed by a named accreditor (CPD points? a council?).
 *        - "the world’s first exclusive e-shop" (card 4) — an absolute
 *          world-first claim with no evidence.
 *        - "formulated by renowned scientists and industry professionals with
 *          decades of experience" and "scientifically formulated" (card 4) —
 *          nutraceutical/supplement claims. In most jurisdictions these attract
 *          food-supplement advertising rules; "scientifically formulated" and
 *          implied wellness benefits ("physical and sexual wellness",
 *          "anti ageing") need regulatory sign-off and a disclaimer.
 *        - "AI-assisted healthcare platform ... proactive, preventive, and
 *          specialty care" plus "telemedicine, e-pharmacy, lab integrations"
 *          (card 3) — telemedicine and e-pharmacy are licensed activities in
 *          India; confirm the licences before publishing the claim.
 *    (b) IN THE COMMENTED-OUT BLOCK, and therefore to be reviewed BEFORE anyone
 *        restores it: "elevate preventive care, chronic-disease management",
 *        "AI-driven triage", "ensure clinical efficacy", "move care from
 *        reactive to predictive", "Blockchain-secured claims processing",
 *        "automated NDHM / HIPAA workflows", "zero-trust security",
 *        "FHIR-based APIs", "Sandbox rollouts in partner hospitals". AI-driven
 *        triage and clinical-efficacy claims are the most exposed; the
 *        NDHM/HIPAA/GDPR compliance claims are assertions of regulatory
 *        conformance and must be verifiable. "partner hospitals and wellness
 *        centers" implies named third-party relationships — permission needed
 *        if any are ever identified.
 *    (c) TRADEMARK MARKS: the commented-out block writes "MasterHealthPro<sup>TM</sup>"
 *        and "ForHimForHer<sup>TM</sup>" with a LITERAL "TM" in a <sup>, not the
 *        ™ character, while the LIVE copy on the same page uses no mark at all.
 *        Legal must rule on which products carry ™ / ® and apply it uniformly.
 *
 * 10. THIRD-PARTY NAMES REQUIRING PERMISSION OR VERIFICATION. Live copy names
 *    no third party except the medical disciplines "Dentistry, Aesthetic
 *    Medicine". The commented-out block names NDHM, HIPAA, GDPR and FHIR
 *    (standards/regulations — fine to reference, but only if the conformance
 *    claim is true) and the live CTA links out to Calendly.
 *
 * 11. SEO IS TITLE + DESCRIPTION ONLY. seoConfig.ts supplies both for
 *    "/health-tech"; src/app/layout.tsx has its global `metadata` export
 *    COMMENTED OUT, so there are NO Open Graph tags, NO Twitter card, NO
 *    canonical link and NO structured data on this route — confirmed absent in
 *    the fetched document. Also: the meta description ENDS WITHOUT A FULL STOP
 *    ("...one smart digital ecosystem") — verbatim below. The <title> is 83
 *    characters, which will be truncated in Google results. The route IS in
 *    sitemap.ts at priority 0.8, changeFrequency "monthly".
 *
 * 12. THE BANNER IS A CSS background-image, so it has NO alt attribute and NO
 *    text alternative at all, and at 2050x330 (6.21:1) it is the same
 *    extreme-letterbox strip used across the old site. The logo images are an
 *    inconsistent set: two are 527x123, one is 865x256, and FHS.webp is
 *    5636x2034 — a 5.6k-pixel-wide file being displayed as a small card logo.
 *    Re-export at a consistent size for the new site. (Nothing was copied,
 *    converted or modified — dimensions reported only.)
 *
 * ---------------------------------------------------------------------------
 * MISSING / NOT RECOVERABLE
 * ---------------------------------------------------------------------------
 * Nothing on this page is unreadable — the whole component tree was read from
 * source AND confirmed against the rendered HTML. The `missing: true` markers
 * below denote content the design implies but that DOES NOT EXIST in the
 * source: the card-grid section has no heading and no intro, and the CTA band
 * has no body paragraph. Those are gaps in the page, not gaps in the extraction.
 *
 * ---------------------------------------------------------------------------
 * IMAGE INVENTORY — 5 images, all local, all present, none touched
 * ---------------------------------------------------------------------------
 * Paths are exactly as referenced in the source and resolve under the reference
 * project's public/ folder. Dimensions and byte sizes read with python3 + PIL on
 * 2026-10-15. NO image was copied, moved, converted or modified.
 *   /imagess/mindlogicx/header_banner/Health_Tech.webp  2050x330   16,478 B  exists
 *   /imagess/mindlogicx/mhpro/logo/MhproMedics.webp      527x123      856 B  exists
 *   /imagess/mindlogicx/mhpro/logo/MhproAcademy.webp     865x256   11,268 B  exists
 *   /imagess/mindlogicx/mhpro/logo/MhproClinic.webp      527x123      842 B  exists
 *   /imagess/mindlogicx/mhpro/logo/FHS.webp            5636x2034   62,214 B  exists
 * NONE is a remote URL; there are no hotlinked or third-party-hosted images on
 * this page. NONE is missing from public/. Note the asset folder is spelled
 * "imagess" (double s) — a legacy typo in the old site's public/ tree, kept
 * verbatim in the paths below because that is how they are referenced.
 * Three further images render on the page but are site chrome (navbar logo,
 * footer logo, footer country-flags strip) and are not this page's content.
 * ============================================================================
 */

export const healthTechPage = {
  // The banner heading — the page's own title. Rendered as an <h2>; the page has
  // no <h1> at all (concern 2).
  title: "HealthTech",

  route: "/health-tech",

  banner: {
    // src/components/Common/PageBanner.tsx — a single <h2> over a CSS
    // background-image. No eyebrow, no subtitle, no breadcrumb, no CTA.
    pageTitle: "HealthTech",
    image: "/imagess/mindlogicx/header_banner/Health_Tech.webp",
    imageAlt: null, // CSS background-image — no alt attribute exists (concern 12)
    imageSize: { width: 2050, height: 330 },
    imageBytes: 16478,
    headingLevel: "h2",
    note:
      "Only <h2> on the page. Should be the <h1> on the new site. 6.21:1 letterbox strip with no text alternative.",
  },

  // src/seoConfig.ts -> seoMap["/health-tech"], resolved by getMetadata() in
  // src/app/health-tech/page.tsx. Confirmed byte-identical in the document
  // served by the dev server. These are the ONLY meta tags for this route.
  seo: {
    pageSpecific: true,
    title:
      "HealthTech by Mindlogicx | Smart Medical Platform, e-Clinic & Wellness Academy",
    description:
      "Mindlogicx HealthTech unifies AI-driven medical platforms, virtual cloud clinics, certified health education, and personalized wellness under one smart digital ecosystem",
    descriptionNote:
      "Verbatim — the source sentence has no closing full stop. See concern 11.",
    openGraph: null, // none present
    twitter: null, // none present
    canonical: null, // none present
    structuredData: null, // none present
    sitemap: { included: true, priority: 0.8, changeFrequency: "monthly" },
  },

  sections: [
    // ------------------------------------------------------------------ 1
    // The ONLY content section on the page. A 4-card grid (col-lg-4 col-sm-6,
    // so 3-up on desktop and the fourth card wraps onto its own row).
    {
      id: "healthtech-products",
      component: "HealthTechServices",
      layout: "cardGrid-3col",
      heading: null,
      headingMissing: true,
      intro: null,
      introMissing: true,
      missingNote:
        "There is NO heading and NO intro copy over the card grid in the source — the four cards sit directly under the banner. Nothing invented. See concern 1.",
      // Each card: a logo image (alt="") + one paragraph, wrapped in an <a> with
      // NO href. The product name <h3> is commented out, so the names below are
      // DATA ONLY and are never displayed as text (concern 3).
      cards: [
        {
          // Not rendered as text anywhere on the page — see concern 3.
          title: "Mhpro Medics (MOA)",
          titleRendered: false,
          shortText:
            "MasterHealthPro (MHP) is an AI-powered technology platform for healthcare professionals and individuals to empower them with evidence-based knowledge resources that are delivered online with immersive learning experiences. The MasterHealthPro curriculum aims to prepare clinicians to master Basic Sciences, which then empowers them to deal with patients and their problems in a hospital or outpatient milieu.",
          logo: "/imagess/mindlogicx/mhpro/logo/MhproMedics.webp",
          logoAlt: "", // empty alt in source
          logoSize: { width: 527, height: 123 },
          link: "/mhpro_medic/",
          linkElement: "a-without-href", // onClick only — not keyboard-reachable
          keyboardAccessible: false,
          routeExistsOnNewSite: false,
          unsubstantiated: true, // "evidence-based", "master Basic Sciences"
          note:
            "Card title says 'Mhpro Medics (MOA)' but the body copy is about 'MasterHealthPro (MHP)'. MOA is never expanded on this page. See concerns 4 and 9.",
        },
        {
          title: "Mhpro Academy",
          titleRendered: false,
          shortText:
            "Welcome to MHPro Academy, India's premier online learning platform dedicated to advancing medical education for medical professionals and students. We specialize in providing high-quality, accredited courses across various medical disciplines, including Dentistry, Aesthetic Medicine, and more.",
          logo: "/imagess/mindlogicx/mhpro/logo/MhproAcademy.webp",
          logoAlt: "",
          logoSize: { width: 865, height: 256 },
          link: "/mhpro_academy/",
          linkElement: "a-without-href",
          keyboardAccessible: false,
          routeExistsOnNewSite: false,
          unsubstantiated: true,
          note:
            "'India's premier' is an uncited superlative and 'accredited courses' names no accrediting body. Straight apostrophe in \"India's\"; title spells the product 'Mhpro' while the body spells it 'MHPro'. See concerns 4 and 9.",
        },
        {
          title: "Mhpro Clinic",
          titleRendered: false,
          // VERBATIM, including the double space after "clinic".
          shortText:
            "Our ForHim.ForHer clinic  is a digital-first, AI-assisted healthcare platform designed to address gender-specific health needs through personalized, holistic, and accessible care. Built on a secure cloud infrastructure, the model integrates telemedicine, e-pharmacy, lab integrations, wearable data, and ongoing health coaching to support proactive, preventive, and specialty care.",
          logo: "/imagess/mindlogicx/mhpro/logo/MhproClinic.webp",
          logoAlt: "",
          logoSize: { width: 527, height: 123 },
          link: "/mhpro_clinic/",
          linkElement: "a-without-href",
          keyboardAccessible: false,
          routeExistsOnNewSite: false,
          unsubstantiated: true,
          note:
            "WRONG-PRODUCT COPY: the 'Mhpro Clinic' card describes the ForHim.ForHer clinic, and the next card is titled 'ForHim.ForHer'. Double space in 'clinic  is'. Telemedicine/e-pharmacy are licensed activities. See concerns 5 and 9.",
        },
        {
          title: "ForHim.ForHer",
          titleRendered: false,
          // VERBATIM, including the curly quotes, the double space after the
          // closing quote, the double space in "products  are", and the TWO
          // TRAILING SPACES at the end of the string.
          shortText:
            "For Him For Her is the world’s first exclusive e-shop “For Him. For Her”  to buy nutraceuticals, supplements for their physical and sexual wellness, curated products for anti ageing, grooming and lifestyle as well. The products are formulated by renowned scientists and industry professionals with decades of experience. The entire suite of products  are scientifically formulated, carefully designed & manufactured, and aesthetically packaged to deliver to you on demand.  ",
          logo: "/imagess/mindlogicx/mhpro/logo/FHS.webp",
          logoAlt: "",
          logoSize: { width: 5636, height: 2034 },
          link: "/forhimforher/",
          linkElement: "a-without-href",
          keyboardAccessible: false,
          routeExistsOnNewSite: false,
          unsubstantiated: true,
          note:
            "Highest claim-risk card: 'the world’s first exclusive e-shop', 'renowned scientists', 'scientifically formulated', supplement/anti-ageing wellness claims. Grammar fault: 'The entire suite of products  are' (should be 'is'). Product named three different ways in two sentences. Logo asset is 5636x2034 — far oversized. See concerns 4, 9 and 12.",
        },
      ],
      accessibility: {
        anchorsWithoutHref: 4,
        emptyAltCount: 4,
        visibleProductNames: 0,
        note:
          "All four cards are mouse-only and have no visible or accessible product name. See concern 3.",
      },
    },

    // ------------------------------------------------------------------ 2
    {
      id: "cta",
      component: "CtaAreaTwo",
      layout: "fullWidthBand",
      heading: "Innovation in Healthcare with Precision and Compassion",
      headingLevel: "h3",
      body: null,
      bodyMissing: true,
      missingNote:
        "CtaAreaTwo always renders <p>{desc}</p> but this page passes no `desc`, so an EMPTY <p> ships. Nothing invented. See concern 8.",
      ctas: [
        {
          label: "Request a Demo",
          link: "/appointment/",
          calendlyUrl: "https://calendly.com/mindlogicx-sales/enquiry",
          element: "div", // class="custom-btn" with onClick — not a button, not an <a>
          keyboardAccessible: false,
          routeExistsOnNewSite: false,
          note:
            "onClick dispatches setCalendly({ title: 'Request a Demo', url: <calendlyUrl> }) and showLoader(), then router.push('/appointment/'). The new site has neither redux nor /appointment/. See concern 7.",
        },
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // IN THE SOURCE BUT NOT ON THE PAGE. rendered: false throughout. Do not merge
  // any of this into `sections` without the decisions in concerns 1 and 9.
  // --------------------------------------------------------------------------
  notRendered: [
    {
      id: "services-description-and-working-process",
      rendered: false,
      component: "HealthContent",
      source:
        "src/components/HealthTech/HealthContent/page.tsx — imported on line 12 of HealthTechComp.tsx, commented out on line 33.",
      layout: "twoColumn",
      note:
        "The largest body of copy written for this page. Verbatim below. Reviewed-before-restoring: it contains the page's heaviest clinical, AI and regulatory-conformance claims (concern 9b) and uses a literal <sup>TM</sup> rather than ™ (concern 9c). The same component is also imported-and-unused by /gradfirst and /ignitedminds-academy, so it is not exclusively HealthTech copy.",
      columns: [
        {
          heading: "Services Description",
          // Inline <strong> emphasis in the source is noted, not encoded.
          body: [
            "At Mindlogicx HealthTech, we fuse deep clinical insight with advanced engineering to deliver platforms that elevate preventive care, chronic-disease management, and personalized wellness.",
          ],
          bodyEmphasis: ["Mindlogicx HealthTech"], // wrapped in <strong>
          items: [
            {
              // Source markup: <strong>MasterHealthPro<sup>TM</sup> Ecosystem</strong>
              term: "MasterHealthPro",
              termSuperscript: "TM",
              termSuffix: " Ecosystem",
              description:
                "A modular, cloud-native suite for hospitals, clinics, and diagnostics chains. It unifies EHR integration, remote-patient monitoring, AI-driven triage, and outcome analytics so providers can make faster, evidence-based decisions.",
              separatorInSource: "–", // en dash between term and description
            },
            {
              term: "ForHimForHer",
              termSuperscript: "TM",
              termSuffix: " Digital Wellness",
              description:
                "Consumer-first apps and wearables that turn daily vitals into precision coaching, guiding users toward healthier habits and proactive condition tracking.",
              separatorInSource: "–",
            },
            {
              term: "Smart-Claims & Compliance",
              termSuperscript: null,
              termSuffix: "",
              description:
                "Blockchain-secured claims processing, e-prescription validation, and automated NDHM / HIPAA workflows slash administrative overhead while safeguarding data integrity.",
              separatorInSource: "–",
            },
          ],
          closingBody: [
            "Our solutions are device-agnostic, multilingual, and fully interoperable, ensuring seamless collaboration across caregivers, payers, and life-science innovators. Whether you’re scaling tele-ICU services or launching population-health programs, Mindlogicx delivers the infrastructure to move care from reactive to predictive—globally and at scale.",
          ],
          closingBodyNote:
            "Verbatim: curly apostrophe in \"you’re\" and an em dash in \"reactive to predictive—globally\".",
        },
        {
          heading: "Our Working Process",
          // Source markup per item: <strong>{step}</strong><br />{detail}
          items: [
            {
              step: "Discovery & Compliance Audit",
              detail:
                "Identify clinical goals, user journeys, and regulatory requirements (NDHM, HIPAA, GDPR).",
            },
            {
              step: "Co-Design Workshops",
              detail:
                "Clinicians, patients, and engineers map out MVP features, data flows, and UX wireframes.",
            },
            {
              step: "Rapid Prototyping",
              detail:
                "We build clickable prototypes and AI model proofs-of-concept, validating with real-world datasets.",
            },
            {
              step: "Secure Build & Integration",
              detail:
                "Microservices architecture, FHIR-based APIs, and zero-trust security baked in from day one.",
            },
            {
              step: "User Acceptance & Clinical Validation",
              detail:
                "Sandbox rollouts in partner hospitals and wellness centers ensure clinical efficacy and frontline buy-in.",
            },
            {
              step: "Launch, Monitor, Optimize",
              detail:
                "Continuous DevSecOps, outcome analytics dashboards, and regulatory updates keep your solution future-proof.",
            },
          ],
        },
      ],
    },
    {
      id: "product-card-headings",
      rendered: false,
      source:
        "src/components/HealthTech/HealthTechServices/page.tsx lines 90-92 — <h3><Link href={value.viewDetails}>{value.title}</Link></h3>.",
      note:
        "This is the ONLY place the four product names would have been printed as text, and it is commented out. It also contained the only real <Link href> on the cards — commenting it out is what left the cards as href-less anchors. See concern 3.",
    },
    {
      id: "duplicate-cta-to-partner",
      rendered: false,
      source: "src/app/health-tech/HealthTechComp.tsx line 36.",
      heading: "Innovation in Healthcare with Precision and Compassion",
      ctaLabel: "Request a Demo",
      link: "/partner/",
      note:
        "An earlier version of the same CTA band pointing at /partner/ instead of /appointment/ (and with no Calendly URL). Duplicated copy — identical heading and button label to the live CTA. Client should confirm which destination is wanted.",
    },
    {
      id: "card-icons",
      rendered: false,
      source:
        "src/components/HealthTech/HealthTechServices/page.tsx line 78 — <i className={value.iconName}></i>.",
      iconClasses: [
        "pe-7s-comment bg-13c4a1",
        "pe-7s-display2 bg-6610f2",
        "pe-7s-light bg-ffb700",
        "pe-7s-light bg-ffb700",
      ],
      note:
        "Pe-icon-7-stroke classes still carried on every card object but the <i> that used them is commented out; the product logos render instead. Cards 3 and 4 share the same icon and colour. Not ported.",
    },
    {
      id: "consultancy-card-branch",
      rendered: false,
      source:
        "src/components/HealthTech/HealthTechServices/page.tsx line 80 — value.title == \"Consultancy\" ? <h3>{title}</h3> : <img .../>.",
      note:
        "A conditional that prints a text heading instead of a logo for a card titled 'Consultancy'. No such card exists in servicesData, so the branch is dead. Suggests a fifth 'Consultancy' product was planned. No content invented for it.",
    },
    {
      id: "dead-component-imports",
      rendered: false,
      source: "src/app/health-tech/HealthTechComp.tsx lines 5-9.",
      components: [
        "AboutContent",
        "FunFactsTwo",
        "TeamStyleThree",
        "Feedback",
        "Partner",
      ],
      note:
        "Imported and never used. They are the shared About/stats/team/testimonial/partner-logo bands from other pages. Their absence is why this page has no stats, team or testimonials. Nothing from them has been pulled in.",
    },
  ],

  // --------------------------------------------------------------------------
  // Flat image inventory for the asset migration. Paths exactly as referenced.
  // Dimensions/bytes measured with python3 + PIL on 2026-10-15 against the
  // reference project's public/ folder. NOTHING was copied or modified.
  // All local, same-origin; no remote URLs; none missing.
  // --------------------------------------------------------------------------
  images: [
    {
      path: "/imagess/mindlogicx/header_banner/Health_Tech.webp",
      usedBy: "banner (CSS background-image)",
      alt: null,
      width: 2050,
      height: 330,
      bytes: 16478,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "6.21:1 strip. No alt attribute possible — decorative background.",
    },
    {
      path: "/imagess/mindlogicx/mhpro/logo/MhproMedics.webp",
      usedBy: "healthtech-products card 1",
      alt: "",
      width: 527,
      height: 123,
      bytes: 856,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "Empty alt — carries the product name as pixels only. 856 B suggests heavy compression.",
    },
    {
      path: "/imagess/mindlogicx/mhpro/logo/MhproAcademy.webp",
      usedBy: "healthtech-products card 2",
      alt: "",
      width: 865,
      height: 256,
      bytes: 11268,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "Different aspect ratio (3.38:1) from its two siblings (4.28:1).",
    },
    {
      path: "/imagess/mindlogicx/mhpro/logo/MhproClinic.webp",
      usedBy: "healthtech-products card 3",
      alt: "",
      width: 527,
      height: 123,
      bytes: 842,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "Empty alt. 842 B.",
    },
    {
      path: "/imagess/mindlogicx/mhpro/logo/FHS.webp",
      usedBy: "healthtech-products card 4",
      alt: "",
      width: 5636,
      height: 2034,
      bytes: 62214,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "Grossly oversized for a card logo — 5636 px wide. Re-export before reuse.",
    },
  ],

  // Site chrome that renders on this page but is NOT page content. Listed so
  // the inventory above is auditable against the served HTML, which contains
  // exactly 8 <img> tags: these 4 plus the 4 card logos above. The banner is a
  // CSS background-image and so is not one of the 8.
  excludedChromeImages: [
    "/_next/static/media/logo.aad24224.webp (navbar, alt=\"logo\")",
    "/_next/static/media/logo-white.e0851ed5.webp (navbar, alt=\"logo\")",
    "/_next/static/media/logo-white.3fa0c04c.png (footer, alt=\"Logo\")",
    "/_next/static/media/country_flags.1ac38ccc.webp (footer, alt=\"country\")",
  ],
};

export default healthTechPage;
