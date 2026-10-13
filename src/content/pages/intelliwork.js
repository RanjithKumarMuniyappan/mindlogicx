/*
 * ============================================================================
 * CONTENT EXTRACTION — IntelliWORK product page
 * ============================================================================
 *
 * SOURCE (live page, read-only):
 *   https://mindlogicx.ae/intelliwork/
 *   (the Mindlogicx UAE site — a Vite/React single-page app)
 *
 * Extracted: 2026-10-13
 *
 * ---------------------------------------------------------------------------
 * HOW IT WAS EXTRACTED — AND WHY WebFetch WAS NOT ENOUGH
 * ---------------------------------------------------------------------------
 * mindlogicx.ae is a client-rendered SPA. `curl https://mindlogicx.ae/intelliwork/`
 * returns a 2,815-byte shell whose <body> is literally `<div id="root"></div>` —
 * every word of page copy is injected by /assets/index-BQ647Fr8.js at runtime.
 * Two WebFetch passes were run first and BOTH came back with only the index.html
 * <title> and <meta description> and no body text at all (WebFetch does not run
 * JavaScript), so they were discarded as unusable rather than guessed at.
 *
 * The content below was therefore taken from the page AFTER client-side render,
 * by loading https://mindlogicx.ae/intelliwork/ in a real browser and reading:
 *   1. the full rendered innerText of <body>, in document order;
 *   2. a DOM walk capturing every h1–h6 / p / li / span / a / img with its tag,
 *      class, text, href, src and alt;
 *   3. a second pass for text-bearing <div> leaves (the badge/chip/mosaic labels
 *      that pass 2 missed because they are divs, not spans);
 *   4. a pass for <meta> tags (the SPA swaps them per route) and for
 *      CSS `background-image` URLs (two images are not <img> tags);
 *   5. per-section outerHTML dumps (svg stripped) to confirm nesting and order.
 * All five passes were cross-checked against each other. Every string in this
 * file was confirmed present in the rendered page text.
 *
 * There are NO tabs, NO accordions, NO carousels and NO hidden/collapsed panels
 * on this page — all eight body sections are static and fully visible on load,
 * so nothing is hidden behind an interaction that could have been missed.
 *
 * ---------------------------------------------------------------------------
 * VERBATIM
 * ---------------------------------------------------------------------------
 * All copy is VERBATIM from the rendered page. Nothing reworded, shortened,
 * re-capitalised or re-punctuated. Specifically preserved:
 *   - The em dash (— U+2014) in "IntelliWORK — The Digital Workforce
 *     Intelligence" and in the meta description.
 *   - "&" as an ampersand everywhere it is used ("Train, Assess & Certify
 *     Workforce", "Learning, Assessment & Certification", "Compliance &
 *     Governance", "Knowledge & Content Structuring", "Reskilling & Upskilling",
 *     "SOP & Process Training", "Product & Service Training").
 *   - The source's MIXED en-GB / en-US spelling, which is inconsistent and is
 *     NOT normalised here (see concern 4): "Analyse", "analyse", "visualised",
 *     "cost centre" sit alongside "organizational", "organizations",
 *     "Personalized", "personalize".
 *   - The zero-padded use-case numbers "01"–"09" as strings, not integers.
 *   - "MindGENIE" and "IntelliWORK" capitalisation exactly as written. NOTE:
 *     this page writes them with NO ® symbol anywhere, unlike the Knowledge
 *     Engineering source which writes "MindGENIE®" and "IntelliWORK®"
 *     (see concern 1).
 *
 * `displayCase` fields record where CSS `text-transform` changes what the eye
 * sees versus what the DOM says — the DOM text is authoritative and is what is
 * stored in the main field.
 *
 * ---------------------------------------------------------------------------
 * INVENTED: NOTHING
 * ---------------------------------------------------------------------------
 * This page carries NO statistics, NO percentages, NO client or customer names,
 * NO testimonials, NO awards, NO certifications-held, NO pricing, NO phone
 * number, NO email address and NO form. None have been added. The only numbers
 * on the entire page are the ordinal labels 01–09 on the use-case list, and the
 * "© 2026 Mindlogicx" in the site footer.
 *
 * ---------------------------------------------------------------------------
 * EXCLUDED — SITE CHROME, NOT PAGE CONTENT
 * ---------------------------------------------------------------------------
 * The shared header nav and the shared footer are NOT in `sections`. They belong
 * to the layout, not to this page, and they are UAE-specific. They are recorded
 * at the bottom of this file as `uaeSiteChrome` for reference only, because they
 * contain India-relevant red flags (see concerns 6, 7, 8). `rendered: false`.
 *
 * ---------------------------------------------------------------------------
 * FLAGGED FOR THE CLIENT TO DECIDE
 * ---------------------------------------------------------------------------
 * 1. TRADEMARK SYMBOLS ARE MISSING ON THIS PAGE. "IntelliWORK" and "MindGENIE"
 *    appear ~20 times between them and NOT ONCE with a ® or ™. The sibling
 *    Knowledge Engineering content uses "IntelliWORK®" and "MindGENIE®"
 *    throughout. One of the two is wrong. Legal/brand must rule on which, and
 *    the decision must be applied consistently before the India page ships.
 *    Nothing has been silently "corrected" here.
 *
 * 2. EVERY PHOTOGRAPH IS BORROWED FROM AN UNRELATED PAGE. Only two images on
 *    this page actually live in an /intelliwork/ folder (the header strip and
 *    the hero product logo). The other six are pulled from other sections of
 *    the UAE site:
 *      /latest_images/ESG_sustainability/ESGsustainability3.png   (hero)
 *      /latest_images/ESG_sustainability/ESGsustainability2.png   (outcomes bg)
 *      /latest_images/Our%20Strength/Value%20Innovation.png       (journey)
 *      /latest_images/Our%20Strength/Futuristic.png               (MindGENIE)
 *      /latest_images/Our%20Strength/Creative%20marketing.png     (use cases)
 *      /latest_images/Global%20Compliance%20and%20Trust.png       (capabilities)
 *      /latest_images/AI_first/AI_first_Banner_image.png          (ecosystem)
 *    i.e. the ESG page's artwork, the "Our Strength" page's artwork, the Global
 *    Compliance page's artwork and the AI First page's BANNER are all being
 *    re-used as IntelliWORK product imagery. Treat these as PLACEHOLDERS. The
 *    India page needs its own IntelliWORK art direction, and whoever licensed
 *    these shots must confirm the licence covers product-page use. Note also
 *    the filenames contain literal spaces (URL-encoded as %20) — fix on re-host.
 *
 * 3. THE HERO ALT TEXT IS HARD-CODED TO THE UAE:
 *      "Workforce transformation in the UAE, powered by IntelliWORK"
 *    This MUST be rewritten for the India site. Recorded verbatim, not edited.
 *
 * 4. SPELLING CONVENTION IS INTERNALLY INCONSISTENT. Within single sentences the
 *    page mixes British and American forms — "analyse workforce readiness" next
 *    to "helping organizations ... personalize learning"; "Analyse Workforce
 *    Intelligence" as a step title next to "organizational knowledge" in its own
 *    body; "cost centre" next to "Personalized Learning Pathways". Preserved
 *    verbatim. The client should pick one convention and apply it in one pass.
 *
 * 5. "Transform HR Cost to HR Capital" IS USED TWICE, FOR TWO DIFFERENT THINGS:
 *    once as the 5th step of the journey pipeline (section `journey`) and again
 *    as the H2 of a whole later section (`outcomes`). The journey step's body
 *    ("Connect workforce development with measurable capability and business
 *    outcomes.") also overlaps the outcomes section's own intro. Likewise
 *    "Institutional Knowledge Processing" is a card title in BOTH `journey` and
 *    `capabilities` with two near-identical descriptions, and "Training
 *    Effectiveness" appears both as a MindGENIE tag and as an outcome card.
 *    This is genuine duplication in the source, not an extraction artefact.
 *    Flagged for an editorial pass — nothing was merged or deduplicated here.
 *
 * 6. NAVIGATION / LINK TARGETS MAY NOT EXIST ON THE INDIA SITE. Both CTAs on
 *    this page point at "/contact-us/". The UAE header also exposes
 *    /intelliexams/, /intellitute/, /intelliwork/, /ai_first/,
 *    /esg_sustainability/, /global_compliance/, /about/ and the footer adds
 *    /privacy-policy/, /terms-conditions/, /enquiry/, /careers/, /mlx_blog/.
 *    Note the inconsistent separators in the source's own routes (hyphens in
 *    /contact-us/ and /privacy-policy/, underscores in /ai_first/ and
 *    /esg_sustainability/). Confirm each route before wiring.
 *
 * 7. BROKEN / PLACEHOLDER LINKS IN THE UAE HEADER: the "Products & Services"
 *    top-level item has href="#" (a dead link, it is a dropdown trigger), and
 *    the WhatsApp icon link uses target="block" — not a valid target value; the
 *    author almost certainly meant "_blank". Both are in `uaeSiteChrome`.
 *
 * 8. UAE-ONLY ASSETS AND CONTACT DETAILS IN THE CHROME: the header/footer logos
 *    are "MLX_UAE_LOGO" files, the footer carries a UAE flag image, and the
 *    header links to the UAE WhatsApp number wa.me/971588857287. All must be
 *    swapped for India equivalents. The India number has NOT been guessed at.
 *
 * 9. THE PAGE HAS A DOUBLE TITLE. A banner strip (`page-title-banner`) renders
 *    an <h2> reading "IntelliWORK", and immediately below it the hero renders
 *    the IntelliWORK wordmark as an <img> followed by the <h1>. So the product
 *    name is stated three times in the first viewport. Confirm the India design
 *    keeps the banner strip at all.
 *
 * 10. HEADING SEMANTICS ARE OFF. The banner's product name is an <h2> while the
 *    page's only <h1> is "The Digital Workforce Intelligence", which sits BELOW
 *    it in the DOM. The "Powered by MindGENIE" section title is also an <h2>
 *    duplicating the hero chip's text. Worth fixing for SEO/a11y on rebuild.
 *
 * 11. THE OG URL IS WRONG FOR THE ROUTE SHAPE: og:url is
 *    "https://www.mindlogicx.ae/intelliwork" (no trailing slash) while the
 *    canonical route is "/intelliwork/" (with one). There is also NO
 *    <link rel="canonical"> on the page at all, and og:image is just the
 *    company logo at 8917×2459 px — far too large and not a social card.
 *
 * 12. NO SUBSTANTIATION ANYWHERE. Claims such as "unifies learning, assessment,
 *    certification, compliance, and workforce intelligence", "build job-ready,
 *    role-ready, and future-ready workforces" and "Compliance & Governance
 *    built in" are made with no named standard, framework, certification or
 *    customer evidence on the page. If India marketing needs proof points, the
 *    client must supply them; none are invented here.
 *
 * 13. THE IMAGES ARE ENORMOUS. All nine URLs return HTTP 200 (verified
 *    2026-10-13), but they are unoptimised PNGs totalling ~13.5 MB for one
 *    page: ESGsustainability2.png is 2,517 KB, ESGsustainability3.png 2,101 KB,
 *    AI_first_Banner_image.png 1,786 KB, Futuristic.png 1,778 KB, Creative
 *    marketing.png 1,758 KB, Value Innovation.png 1,546 KB, the header strip
 *    1,455 KB, Global Compliance and Trust.png 450 KB, IE_Work.png 223 KB.
 *    Per the brief these were NOT downloaded. When the India page is built they
 *    should be re-encoded (WebP/AVIF, responsive sizes) rather than linked as
 *    they are.
 * ============================================================================
 */

export const intelliworkPage = {
  // The page's own H1. (The banner strip above it reads just "IntelliWORK" —
  // see `sections[0]` and concern 9.)
  title: "The Digital Workforce Intelligence",
  productName: "IntelliWORK",
  sourceUrl: "https://mindlogicx.ae/intelliwork/",

  // Swapped in per-route by the SPA. Verified from the rendered <head>.
  seo: {
    documentTitle:
      "IntelliWORK | The Digital Workforce Intelligence Platform | Mindlogicx",
    metaDescription:
      "IntelliWORK transforms institutional knowledge into workforce capability — unifying learning, assessment, certification, compliance, and workforce intelligence, powered by MindGENIE.",
    canonical: null, // No <link rel="canonical"> exists on the page. See concern 11.
    openGraph: {
      type: "website",
      siteName: "Mindlogicx",
      url: "https://www.mindlogicx.ae/intelliwork", // no trailing slash — see concern 11
      title:
        "IntelliWORK | The Digital Workforce Intelligence Platform | Mindlogicx",
      description:
        "IntelliWORK transforms institutional knowledge into workforce capability — unifying learning, assessment, certification, compliance, and workforce intelligence, powered by MindGENIE.",
      image:
        "https://www.mindlogicx.ae/latest_images/mindlogicx_dubai_logo/MLX_UAE_LOGO.png",
      imageWidth: "8917",
      imageHeight: "2459",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "IntelliWORK | The Digital Workforce Intelligence Platform | Mindlogicx",
      description:
        "IntelliWORK transforms institutional knowledge into workforce capability — unifying learning, assessment, certification, compliance, and workforce intelligence, powered by MindGENIE.",
      image:
        "https://www.mindlogicx.ae/latest_images/mindlogicx_dubai_logo/MLX_UAE_LOGO.png",
    },
  },

  sections: [
    {
      id: "page-title-banner",
      sourceClass: "page-title-area",
      // A full-width image strip whose ONLY copy is the product name, marked up
      // as an <h2> above the page's <h1>. See concerns 9 and 10.
      heading: "IntelliWORK",
      headingLevel: "h2",
      backgroundImage:
        "https://mindlogicx.ae/latest_images/intelliwork/IntelliWORK_header_UAE-2050x330.png",
      backgroundImageAlt: null, // CSS background — no alt text possible
      // Filename says "UAE" and is sized 2050x330 — needs an India replacement.
      imageNote:
        "CSS background-image, not an <img>. Filename is UAE-specific (IntelliWORK_header_UAE-2050x330.png).",
      body: [],
    },

    {
      id: "hero",
      sourceClass: "iw-hero-wrapper",
      sourceAnchor: "#overview",
      heading: "The Digital Workforce Intelligence",
      headingLevel: "h1",
      subheading: "Transform Institutional Knowledge into Workforce Capability",
      body: [
        "IntelliWORK is a workforce transformation platform that converts institutional knowledge, business processes, operational expertise, and domain know-how into structured digital learning assets. Powered by MindGENIE, it unifies learning, assessment, certification, compliance, and workforce intelligence to build job-ready, role-ready, and future-ready workforces.",
      ],
      // The product wordmark is an image, NOT text, so it carries no heading.
      logoImage: "https://mindlogicx.ae/latest_images/intelliwork/IE_Work.png",
      logoImageAlt: "IntelliWORK",
      image:
        "https://mindlogicx.ae/latest_images/ESG_sustainability/ESGsustainability3.png",
      imageAlt: "Workforce transformation in the UAE, powered by IntelliWORK",
      imageNote:
        "Borrowed from the ESG & Sustainability image folder. Alt text names the UAE — see concerns 2 and 3.",
      // A small pill overlaid on the hero image.
      badge: "Powered by MindGENIE",
      badgeSourceClass: "iw-hero-genie-chip",
      ctas: [{ label: "Contact Us", link: "/contact-us/" }],
    },

    {
      id: "journey",
      sourceClass: "iw-journey-section",
      sourceAnchor: "#journey",
      heading: "From Institutional Knowledge to Workforce Readiness",
      headingLevel: "h2",
      body: [
        "IntelliWORK creates a continuous transformation journey that converts organizational knowledge into measurable workforce capability and business value.",
      ],
      image:
        "https://mindlogicx.ae/latest_images/Our%20Strength/Value%20Innovation.png",
      imageAlt: "Workforce leaders reviewing knowledge and readiness analytics",
      imageNote:
        'Borrowed from the "Our Strength" image folder; filename has literal spaces. See concern 2.',
      // Rendered as a left-to-right pipeline with arrow connectors between steps.
      // The steps are NOT numbered on screen. Titles are <h4>.
      layout: "pipeline",
      steps: [
        {
          title: "Institutional Knowledge Processing",
          description:
            "Convert organizational knowledge, SOPs, processes, policies, and expertise into structured digital learning assets.",
          icon: "file-text", // lucide icon name, from the rendered svg class
        },
        {
          title: "Analyse Workforce Intelligence",
          description:
            "Understand skills, competencies, gaps, learning needs, and workforce readiness.",
          icon: "search",
        },
        {
          title: "Train, Assess & Certify Workforce",
          description:
            "Build capability through structured learning, competency assessment, and certification.",
          icon: "graduation-cap",
        },
        {
          title: "Future-Ready Workforce",
          description:
            "Continuously reskill and upskill employees for evolving roles and business requirements.",
          icon: "trending-up",
        },
        {
          title: "Transform HR Cost to HR Capital",
          description:
            "Connect workforce development with measurable capability and business outcomes.",
          icon: "gem",
          // This title is reused as a whole section heading later. See concern 5.
          duplicateOf: "outcomes",
        },
      ],
    },

    {
      id: "capabilities",
      sourceClass: "iw-cap-section",
      sourceAnchor: "#capabilities",
      heading: "What IntelliWORK Delivers",
      headingLevel: "h2",
      // This section has NO intro paragraph in the source — heading straight to
      // the image + list. Not an omission.
      body: [],
      image:
        "https://mindlogicx.ae/latest_images/Global%20Compliance%20and%20Trust.png",
      imageAlt:
        "Enterprise professionals using IntelliWORK to track workforce capability",
      imageNote:
        "Borrowed from the Global Compliance page's artwork; filename has literal spaces. See concern 2.",
      // A badge sitting on top of the image.
      imageBadge: "Compliance & Governance built in",
      imageBadgeIcon: "shield-check",
      imageBadgeNote:
        'Unsubstantiated claim rendered as a trust badge ("built in"). See concern 12.',
      items: [
        {
          title: "Institutional Knowledge Processing",
          description:
            "Transform SOPs, manuals, policies, and organizational expertise into reusable digital learning assets.",
          icon: "file-text",
          // Same title as journey step 1, different wording. See concern 5.
          duplicateTitleOf: "journey",
        },
        {
          title: "Workforce Intelligence",
          description:
            "Identify workforce capabilities, skill gaps, training requirements, readiness levels, and learning effectiveness.",
          icon: "chart-column",
        },
        {
          title: "Learning, Assessment & Certification",
          description:
            "Train employees, measure competency, validate outcomes, and certify workforce readiness.",
          icon: "graduation-cap",
        },
        {
          title: "Compliance & Governance",
          description:
            "Track mandatory learning, assessments, certifications, and organizational compliance.",
          icon: "shield-check",
        },
        {
          title: "Future Workforce Readiness",
          description:
            "Enable continuous reskilling and upskilling aligned with changing roles, technologies, and business priorities.",
          icon: "trending-up",
        },
      ],
    },

    {
      id: "mindgenie",
      sourceClass: "iw-genie-section",
      sourceAnchor: "#mindgenie",
      heading: "Powered by MindGENIE",
      headingLevel: "h2",
      // Note: duplicates the hero badge text exactly. See concern 10.
      subheading: "Intelligence Across the Workforce Transformation Lifecycle",
      body: [
        "MindGENIE brings intelligence across IntelliWORK by helping organizations structure knowledge, identify capability gaps, personalize learning, analyse workforce readiness, and generate actionable insights for leadership.",
      ],
      // Icon + label pills. These are LABELS ONLY — the source gives each no
      // description. Nothing has been written to fill the gap.
      tags: [
        { label: "Knowledge & Content Structuring", icon: "file-text" },
        { label: "Personalized Learning Pathways", icon: "route" },
        { label: "Skill-Gap Identification", icon: "search" },
        { label: "Assessment Intelligence", icon: "clipboard-check" },
        { label: "Workforce Capability Analysis", icon: "chart-column" },
        { label: "Readiness Insights", icon: "gauge" },
        { label: "Training Effectiveness", icon: "target" },
        { label: "Leadership Recommendations", icon: "lightbulb" },
      ],
      // One sentence, with the second half wrapped in a <span> for emphasis.
      highlight: "From Workforce Data to Workforce Decisions.",
      highlightEmphasis: "Workforce Decisions.",
      image: "https://mindlogicx.ae/latest_images/Our%20Strength/Futuristic.png",
      imageAlt:
        "MindGENIE intelligence layer visualised through futuristic workforce analytics",
      imageNote:
        'Borrowed from the "Our Strength" image folder. See concern 2.',
    },

    {
      id: "ecosystem",
      sourceClass: "iw-eco-section",
      sourceAnchor: "#ecosystem",
      heading: "One Unified Workforce Ecosystem",
      headingLevel: "h2",
      body: [
        "IntelliWORK brings workforce development into one connected environment, reducing dependence on fragmented training systems and manual administration.",
      ],
      image:
        "https://mindlogicx.ae/latest_images/AI_first/AI_first_Banner_image.png",
      imageAlt:
        "Unified workforce ecosystem connecting learning, assessment and compliance",
      imageNote:
        "This is the AI First page's BANNER image re-used as a product graphic. See concern 2.",
      // Icon + one-word label tiles. No descriptions exist in the source.
      nodes: [
        { label: "Knowledge", icon: "file-text" },
        { label: "Learning", icon: "book-open" },
        { label: "Assessment", icon: "clipboard-check" },
        { label: "Certification", icon: "award" },
        { label: "Compliance", icon: "shield-check" },
        { label: "Workforce Intelligence", icon: "brain" },
      ],
    },

    {
      id: "usecases",
      sourceClass: "iw-usecase-section",
      sourceAnchor: "#usecases",
      heading: "Built for Enterprise Workforce Transformation",
      headingLevel: "h2",
      // No intro paragraph in the source.
      body: [],
      image:
        "https://mindlogicx.ae/latest_images/Our%20Strength/Creative%20marketing.png",
      imageAlt: "Enterprise team engaged in workforce transformation training",
      imageNote:
        'Borrowed from the "Our Strength" image folder; the filename ("Creative marketing.png") has nothing to do with workforce training. See concern 2.',
      // A numbered list. Each row is number + icon + label + a decorative
      // right-arrow. The rows are NOT links and have NO descriptions — label
      // only. Numbers are zero-padded strings exactly as rendered.
      items: [
        { number: "01", label: "Employee Onboarding", icon: "user-plus" },
        { number: "02", label: "Role-Based Training", icon: "user-cog" },
        { number: "03", label: "Reskilling & Upskilling", icon: "refresh-cw" },
        { number: "04", label: "Compliance Training", icon: "shield-check" },
        { number: "05", label: "SOP & Process Training", icon: "clipboard-list" },
        { number: "06", label: "Product & Service Training", icon: "package" },
        { number: "07", label: "Leadership Development", icon: "award" },
        { number: "08", label: "Workforce Certification", icon: "badge-check" },
        {
          number: "09",
          label: "Distributed Workforce Learning",
          icon: "earth",
        },
      ],
      itemsNote:
        "Each row ends in an arrow glyph that implies a link, but no row is clickable and no destination exists. Confirm whether these should link to anything.",
    },

    {
      id: "outcomes",
      sourceClass: "iw-outcome-section",
      sourceAnchor: "#outcomes",
      heading: "Transform HR Cost to HR Capital",
      headingLevel: "h2",
      // Same string as journey step 5's title. See concern 5.
      body: [
        "IntelliWORK helps organizations move beyond training attendance and course completion by providing leadership with measurable visibility into workforce capability, skill gaps, competency achievement, certification status, readiness, and training effectiveness.",
      ],
      // A before/after comparison with an arrow between the two panels.
      layout: "before-after",
      before: {
        // DOM text is "HR Cost"; CSS uppercases it so the eye reads "HR COST".
        label: "HR Cost",
        displayCase: "HR COST",
        text: "Training attendance and course completion",
      },
      after: {
        label: "HR Capital",
        displayCase: "HR CAPITAL",
        backgroundImage:
          "https://mindlogicx.ae/latest_images/ESG_sustainability/ESGsustainability2.png",
        backgroundImageAlt: null, // CSS background — no alt text possible
        imageNote:
          "CSS background-image borrowed from the ESG & Sustainability folder. See concern 2.",
        // Icon + label cards. No descriptions in the source.
        items: [
          { label: "Workforce Capability", icon: "chart-column" },
          { label: "Skill Gaps", icon: "search" },
          { label: "Competency Achievement", icon: "target" },
          { label: "Certification Status", icon: "badge-check" },
          { label: "Readiness Levels", icon: "gauge" },
          { label: "Training Effectiveness", icon: "trending-up" },
        ],
      },
      // Closing line; "cost centre" is wrapped in a <span> for emphasis.
      closingStatement:
        "Transform workforce learning from a cost centre into a measurable business outcome.",
      closingStatementEmphasis: "cost centre",
    },

    {
      id: "closing-cta",
      sourceClass: "iw-cta-section",
      heading: "Build a Future-Ready Workforce",
      headingLevel: "h2",
      body: [
        "Capture Knowledge. Build Skills. Measure Capability. Create Readiness.",
      ],
      // DOM text is title-case; CSS uppercases it on screen.
      brandLine: "IntelliWORK — The Digital Workforce Intelligence",
      brandLineDisplayCase: "INTELLIWORK — THE DIGITAL WORKFORCE INTELLIGENCE",
      ctas: [{ label: "Contact Us", link: "/contact-us/" }],
    },
  ],
};

/*
 * SHARED UAE SITE CHROME — NOT part of the IntelliWORK page.
 * Recorded for reference only so the India build can audit the link targets and
 * UAE-specific assets it will need to replace. See concerns 6, 7 and 8.
 */
export const uaeSiteChrome = {
  rendered: false,
  header: {
    logos: [
      {
        image:
          "https://mindlogicx.ae/latest_images/mindlogicx_dubai_logo/MLX_UAE_LOGO_White.png",
        alt: "Mindlogicx",
      },
      {
        image:
          "https://mindlogicx.ae/latest_images/mindlogicx_dubai_logo/MLX_UAE_LOGO.png",
        alt: "Mindlogicx",
      },
    ],
    logoLink: "/",
    nav: [
      { label: "About Us", link: "/about/" },
      {
        label: "Products & Services",
        link: "#", // dead href — dropdown trigger. See concern 7.
        children: [
          { label: "IntelliEXAMS", link: "/intelliexams/" },
          { label: "IntelliTUTE", link: "/intellitute/" },
          { label: "IntelliWORK", link: "/intelliwork/" },
        ],
      },
      { label: "AI First", link: "/ai_first/" },
      { label: "ESG & Sustainability", link: "/esg_sustainability/" },
      { label: "Global Compliance", link: "/global_compliance/" },
    ],
    whatsapp: {
      link: "https://wa.me/971588857287", // UAE number — India equivalent NOT invented
      target: "block", // invalid target value in the source; likely meant "_blank"
      label: null, // icon only, no accessible label
    },
  },
  footer: {
    logo: {
      image:
        "https://mindlogicx.ae/latest_images/mindlogicx_dubai_logo/MLX_UAE_LOGO_White.png",
      alt: "Logo",
    },
    links: [
      { label: "Privacy Policy", link: "/privacy-policy/" },
      { label: "Terms & Conditions", link: "/terms-conditions/" },
      { label: "Contact Us", link: "/contact-us/" },
      { label: "Enquiry", link: "/enquiry/" },
      { label: "Careers", link: "/careers/" },
      { label: "Blog", link: "/mlx_blog/" },
    ],
    flagImage:
      "https://mindlogicx.ae/assets/flag_logos_UAE_White-BXIE42jG.png",
    flagImageAlt: "country",
    copyright: "© 2026 Mindlogicx",
  },
};

export default intelliworkPage;
