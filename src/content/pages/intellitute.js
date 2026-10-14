/*
 * ============================================================================
 * CONTENT EXTRACTION — IntelliTUTE product page
 * ============================================================================
 *
 * Extracted: 2026-10-13
 *
 * SOURCE (live page, read-only — nothing on the remote host was modified):
 *   https://mindlogicx.ae/intellitute/          (Mindlogicx UAE site)
 *
 * HOW IT WAS EXTRACTED — AND WHY THAT MATTERS
 * -------------------------------------------
 * mindlogicx.ae is a client-rendered Vite/React SPA. The HTML document served
 * at /intellitute/ contains only <div id="root"></div> — ZERO body copy. Plain
 * page-fetch/markdown extraction returns nothing but the <title>, so the copy
 * below was read out of the page's own compiled route chunk, which is the
 * authoritative source of the rendered strings:
 *   https://mindlogicx.ae/assets/index-BQ647Fr8.js    (route map)
 *     → "/src/app/intellitute/page.tsx" resolves to
 *   https://mindlogicx.ae/assets/page-D9LbZy-R.js     (the whole page, 15.7 KB)
 *   https://mindlogicx.ae/assets/PageBanner-HTxsPQSz.js  (banner = <h2> + bg img)
 * Every string in this file was copied out of those files. Nothing is inferred,
 * nothing is reconstructed from memory, nothing is invented.
 *
 * VERBATIM
 * --------
 * All copy is VERBATIM. Nothing reworded, shortened, re-capitalised or
 * re-punctuated. Preserved exactly as published:
 *   - the curly apostrophe in "Mindlogicx’s" (U+2019)
 *   - the em dashes in "one continuous platform—powered by", "solves only one
 *     part—learning, exams, or hiring", "outcomes—at scale."
 *   - the arrows in "Onboard → Academy → Assessment → Career" (U+2192)
 *   - "Browser Lockdown" capitalisation, "AI-First Design", "3x" lowercase x
 *   - sentence-case vs Title Case inconsistency across headings (see concern 6)
 *
 * SECTION ORDER is the page's real render order, taken from the component's
 * returned fragment: PageBanner, hero, pillars, why, how-it-works,
 * stakeholders, ai (IntelliGENIE), capabilities, closing CTA. Navbar and Footer
 * are shared site chrome and are deliberately NOT included.
 *
 * IMAGES
 * ------
 * 5 images, all on the mindlogicx.ae host, recorded as absolute URLs. None were
 * downloaded. All five were confirmed to return HTTP 200 with an image
 * content-type on 2026-10-13. Alt text is recorded where the markup sets it.
 *
 * ============================================================================
 * FOR THE CLIENT TO DECIDE / FIX BEFORE THIS SHIPS ON THE INDIA SITE
 * ============================================================================
 * 1. THE H1 IS JUST "One Ecosystem". The hero's only <h1> contains the two
 *    words "One Ecosystem" and nothing else; "Academy . Assessment . Career"
 *    sits below it in separate <span>s. That is a weak, non-descriptive H1 for
 *    SEO on a product page (the word "IntelliTUTE" is not in the H1 at all).
 *    Recorded verbatim as `title` — recommend the client supplies a real H1.
 * 2. THE CLOSING CTA HAS NO BUTTON. The final section renders a heading and one
 *    paragraph ("Talk to Mindlogicx to explore IntelliTUTE...") and NO link,
 *    button or form — it is a dead end. `ctas: []` with `missing: true` below.
 *    THE WHOLE PAGE CONTAINS NOT ONE CTA BUTTON OR OUTBOUND LINK of any kind.
 *    No contact path, no demo request, no "Contact Us". The client must supply
 *    the intended CTA label and destination; none has been invented.
 * 3. GRAMMAR ERROR IN THE SOURCE, PRESERVED: "Candidates set goals, chooses a
 *    role pathway, and establishes a baseline." — plural subject, singular
 *    verbs. Kept verbatim in `how-it-works`. Recommend fixing before reuse.
 * 4. STAT NUMBERS ARE UNSOURCED CLAIMS. The "why" section publishes "3x Hiring
 *    Confidence" and "50% Faster Onboarding", plus two comparison bars
 *    hard-coded at 40% ("Traditional Platforms / Completion-based") and 95%
 *    ("IntelliTUTE Ecosystem / Job-Ready Certified"). No source, footnote or
 *    methodology appears anywhere on the page. The 40%/95% bars are a direct
 *    unsubstantiated comparison against unnamed competitors. These need
 *    substantiation or removal before publication in India.
 * 5. "92%" EMPLOYABILITY SCORE AND "IntelliGENIE recommendation: Complete the
 *    advanced project." are decorative mock-UI text inside the hero artwork,
 *    not real data. They are recorded under `hero.visual.mockCards` and flagged
 *    `decorative: true`. Decide whether they are rendered as live text (they
 *    currently are — they are real DOM text, readable by screen readers and
 *    indexable) or baked into an image.
 * 6. HEADING CASE IS INCONSISTENT across the page: "Why IntelliTUTE?" and
 *    "How It Works" are Title Case, while "Built for multiple stakeholders",
 *    "Key capabilities at a glance" and "AI at the core of your journey" are
 *    sentence case. Preserved as-is. Pick one convention.
 * 7. BLOCKCHAIN CLAIMS appear twice — "Verifiable certificates with audit
 *    trails", "blockchain-verifiable certifications", "Blockchain-verifiable
 *    digital credentials". Confirm this is accurate for the India offering and
 *    legally defensible before repeating it.
 * 8. CROSS-PRODUCT DEPENDENCIES NAMED IN COPY: IntelliEXAMS ("powered by
 *    IntelliEXAMS") and IntelliGENIE (hero + a whole section). Neither is
 *    linked. Confirm both products exist and are named identically on the India
 *    site, and add links if those pages exist there.
 *    NOTE: IntelliGENIE is the AI brand used on this page. The Mindlogicx
 *    Knowledge Engineering content in this same folder calls the Agentic AI
 *    layer MindGENIE®. These may be two different products or the same product
 *    under two names — the client must resolve which name the India site uses.
 * 9. CARD TITLE / IMAGE FILENAME MISMATCH in `stakeholders`. The visible titles
 *    are "Candidates & Freshers" and "Institutions & Academies", but the image
 *    filenames are Candidates_Final-yearStudents_Freshers.jpg and
 *    InstitutionsAcademiesTrainingProviders.jpg — i.e. the artwork was made for
 *    longer titles that also covered "Final-year Students" and "Training
 *    Providers". Confirm whether those audiences were dropped on purpose.
 * 10. NO TRADEMARK MARKS ANYWHERE. "IntelliTUTE", "IntelliEXAMS" and
 *    "IntelliGENIE" are written with no ® or ™ on this page, whereas
 *    IntelliWORK® and MindGENIE® carry ® in the Knowledge Engineering content.
 *    Confirm the correct mark for each name.
 * 11. THE PAGE'S <title> AND META DESCRIPTION ARE NOT PAGE-SPECIFIC. The SPA
 *    serves one static <head> for every route, so /intellitute/ inherits the
 *    site-wide home-page title "Global Knowledge Engineering Experts &
 *    AI-Powered Assessment Platform | Mindlogicx", a description about CBT /
 *    proctoring, og:url pointing at the HOME page (https://www.mindlogicx.ae/)
 *    and the UAE logo as og:image. There is NO IntelliTUTE-specific SEO on the
 *    live page. Captured in `seo` as-is with `pageSpecific: false` — the India
 *    build needs its own title/description/og for this route.
 * 12. NO SECTION ANCHORS FOR THREE SECTIONS. The markup gives DOM ids to only
 *    #pillars, #how-it-works and #stakeholders; the why / ai / capabilities /
 *    cta sections have none, so they cannot be deep-linked. The `id` values in
 *    this file are stable kebab-case keys for the content layer; `domId` records
 *    the live page's actual id where one exists.
 * 13. NO PRICING, NO CLIENT NAMES, NO LOGOS, NO TESTIMONIALS, NO AWARDS, NO
 *    CASE STUDIES and NO contact details appear anywhere on this page. Nothing
 *    of the sort has been added. If the India page needs them, they must be
 *    supplied by the client.
 * ============================================================================
 */

export const intellitutePage = {
  // The hero <h1>. See concern 1 — this really is the entire H1 on the page.
  title: "One Ecosystem",

  banner: {
    // PageBanner renders the title as an <h2> over a background image.
    pageTitle: "IntelliTUTE",
    image: "https://mindlogicx.ae/latest_images/intellitute/IntelliTUTEbanner.jpg",
    imageAlt: null, // CSS background-image — no alt attribute exists
    note: "Banner is a CSS background-image on .page-title-area; the only text is the <h2> 'IntelliTUTE'. No breadcrumb trail is rendered.",
  },

  // NOT page-specific — inherited site-wide from the SPA's static index.html.
  // See concern 11. Recorded for audit, not for reuse as-is.
  seo: {
    pageSpecific: false,
    title:
      "Global Knowledge Engineering Experts & AI-Powered Assessment Platform | Mindlogicx",
    metaDescription:
      "Cloud-based exam and assessment solutions for universities, recruiters & corporates. AI-powered tools for CBT, mock tests, proctoring & evaluation.",
    openGraph: {
      type: "website",
      siteName: "Mindlogicx",
      url: "https://www.mindlogicx.ae/", // points at the HOME page, not this page
      title:
        "Global Knowledge Engineering Experts & AI-Powered Assessment Platform | Mindlogicx",
      description:
        "Cloud-based exam and assessment solutions for universities, recruiters & corporates. AI-powered tools for CBT, mock tests, proctoring & evaluation.",
      image:
        "https://www.mindlogicx.ae/latest_images/mindlogicx_dubai_logo/MLX_UAE_LOGO.png",
      imageWidth: "8917",
      imageHeight: "2459",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Global Knowledge Engineering Experts & AI-Powered Assessment Platform | Mindlogicx",
      description:
        "Cloud-based exam and assessment solutions for universities, recruiters & corporates. AI-powered tools for CBT, mock tests, proctoring & evaluation.",
      image:
        "https://www.mindlogicx.ae/latest_images/mindlogicx_dubai_logo/MLX_UAE_LOGO.png",
    },
  },

  sections: [
    {
      id: "hero",
      domId: null,
      component: "it-hero-wrapper",
      badge: "Empowering the Future Workforce",
      heading: "One Ecosystem", // the <h1>; styled with a brush highlight
      // Three separate spans under the H1. The trailing full stops are in the
      // source strings themselves, not CSS — preserved verbatim.
      breadcrumbs: ["Academy .", "Assessment .", "Career"],
      body: [
        "IntelliTUTE is Mindlogicx’s end-to-end employability ecosystem. We unify learning, secure assessment, and career outcomes into one continuous platform—powered by IntelliGENIE AI.",
      ],
      // "IntelliGENIE" inside the paragraph above is wrapped in a bold,
      // purple-coloured <span>. Recorded so the emphasis is not lost.
      bodyEmphasis: ["IntelliGENIE"],
      ctas: [], // none — see concern 2
      visual: {
        image:
          "/assets/images/intelliTute/IntelliTUTE-One-Ecosystem.webp",
        imageAlt: "",
        // Decorative mock-UI overlay cards. Real DOM text, but illustrative
        // only — not live data. See concern 5.
        decorative: true,
        mockCards: [
          {
            position: "top",
            eyebrow: "Skill Verified",
            label: "Secure Assessment",
          },
          {
            position: "bottom",
            label: "Employability Score",
            value: "92%",
            progressBar: "animated fill, no numeric value in markup",
            caption: "IntelliGENIE recommendation: Complete the advanced project.",
          },
        ],
      },
    },

    {
      id: "three-pillars",
      domId: "pillars",
      component: "it-pillars-section",
      heading: null, // this section has NO heading of its own — 3 cards only
      note: "Section renders as three cards with no section-level title or intro. Each card shows subtitle above title in the DOM order recorded here.",
      items: [
        {
          key: "academy",
          subtitle: "Academy",
          title: "LMS — Learn & Build Skills",
          // NOTE ON FIELD NAMING: in the source data the object is
          // { title: "Academy", subtitle: "LMS — Learn & Build Skills" }, but
          // the markup renders `subtitle` FIRST (as the <h3>) and `title`
          // second (as the <h4>). The fields here follow VISUAL order, so
          // `subtitle` = the small line, `title` = the large line, matching
          // what a visitor actually reads top-to-bottom.
          visualOrder: ["Academy", "LMS — Learn & Build Skills"],
          description:
            "Role-based learning paths that help candidates gain real skills through high-quality structured content.",
          features: [
            "Structured courses & guided learning journeys",
            "AI-guided paths, pacing, and remediation",
            "Practice tests, assignments, and projects",
            "Mentoring cohorts and progress tracking",
            "Performance analytics and learning insights",
          ],
          icon: "lucide: book-open (clipboard-check chunk, export B)",
        },
        {
          key: "assessment",
          subtitle: "Assessment",
          title: "EMS — Assess + Certify",
          visualOrder: ["Assessment", "EMS — Assess + Certify"],
          description:
            "A unified, secure workflow powered by IntelliEXAMS to validate skills and issue blockchain-verifiable certifications.",
          features: [
            "Diagnostic, mock, and final assessments",
            "Secure exam delivery (Browser Lockdown)",
            "AI-supported evaluation assistance",
            "Result processing and decisioning",
            "Verifiable certificates with audit trails",
          ],
          icon: "lucide: clipboard-check",
        },
        {
          key: "career",
          subtitle: "Career",
          title: "JRP — Job Ready Portal",
          visualOrder: ["Career", "JRP — Job Ready Portal"],
          description:
            "A hiring layer that converts verified skills into real-world outcomes by connecting candidates with global employers.",
          features: [
            "Employability profiles with verified transcripts",
            "AI-supported resume & portfolio packaging",
            "Employer search and candidate discovery",
            "Shortlisting and interview workflows",
            "Placement tracking and outcomes reporting",
          ],
          icon: "lucide: briefcase",
        },
      ],
    },

    {
      id: "why-intellitute",
      domId: null,
      component: "it-why-section",
      heading: "Why IntelliTUTE?",
      body: [
        "Most platforms solve only one part—learning, exams, or hiring. IntelliTUTE solves the full employability loop with AI embedded across the journey.",
      ],
      items: [
        {
          title: "One Journey",
          description: "No more disconnected tools, just one unified flow.",
        },
        {
          title: "Verified Skills",
          description: "Built in Academy, verified in Assessment.",
        },
        {
          title: "AI-First Design",
          description:
            "Personalized readiness and improvement throughout.",
        },
        {
          title: "Employer Trust",
          description:
            "Verifiable certifications and evidence-based profiles.",
        },
      ],
      // Side panel. All figures below are published on the page with no source
      // or methodology anywhere — see concern 4.
      statsCard: {
        heading: "Measured Readiness",
        unsourced: true,
        comparisonBars: [
          {
            label: "Traditional Platforms",
            value: "Completion-based",
            barWidth: "40%", // hard-coded in markup, no number shown to user
          },
          {
            label: "IntelliTUTE Ecosystem",
            value: "Job-Ready Certified",
            barWidth: "95%", // hard-coded in markup, no number shown to user
          },
        ],
        metrics: [
          { value: "3x", label: "Hiring Confidence" },
          { value: "50%", label: "Faster Onboarding" },
        ],
      },
    },

    {
      id: "how-it-works",
      domId: "how-it-works",
      component: "it-how-works-section",
      heading: "How It Works",
      subheading: "Onboard → Academy → Assessment → Career",
      items: [
        {
          title: "Onboard & Profile",
          // SOURCE GRAMMAR ERROR, PRESERVED VERBATIM — see concern 3.
          description:
            "Candidates set goals, chooses a role pathway, and establishes a baseline.",
          icon: "lucide: users",
        },
        {
          title: "Academy (Learn)",
          description:
            "Complete learning paths with AI-guided practice, assignments, and projects.",
          icon: "lucide: book-open",
        },
        {
          title: "Assessment (Certify)",
          description:
            "Take mock/final exams securely; evaluations lead to verified transcripts.",
          icon: "lucide: clipboard-check",
        },
        {
          title: "Career (Hired)",
          description:
            "Verified profiles are published for discovery; hiring workflows progress to offers.",
          icon: "lucide: briefcase",
        },
      ],
    },

    {
      id: "stakeholders",
      domId: "stakeholders",
      component: "it-sh-section",
      heading: "Built for multiple stakeholders",
      items: [
        {
          title: "Candidates & Freshers",
          benefit:
            "Clear AI-guided path to become employable with certifications and transcripts that prove capability.",
          image:
            "/assets/images/intelliTute/IntelliTUTE-Candidates-Freshers.webp",
          imageAlt: "Candidates & Freshers", // alt is bound to the card title
          // Filename covers "Final-year Students" too — see concern 9.
        },
        {
          title: "Institutions & Academies",
          benefit:
            "End-to-end ecosystem for skilling and standardized governance for certifications and outcomes.",
          image:
            "/assets/images/intelliTute/IntelliTUTE-Institutions-Academies.webp",
          imageAlt: "Institutions & Academies",
          // Filename covers "Training Providers" too — see concern 9.
        },
        {
          title: "Employers",
          benefit:
            "Access to verified, job-ready talent with transparent evidence including scorecards and portfolios.",
          image:
            "/assets/images/intelliTute/IntelliTUTE-Employers.webp",
          imageAlt: "Employers",
        },
      ],
    },

    {
      id: "powered-by-intelligenie",
      domId: null,
      component: "it-ai-section",
      eyebrow: "Powered by IntelliGENIE", // rendered as an <h2>
      heading: "AI at the core of your journey", // rendered as an <h3>
      items: [
        "Personalized learning paths & remediation",
        "Adaptive practice & mock readiness guidance",
        "Evidence-based portfolio & resume building",
        "Explainable skill-to-job matching",
        "Insights and analytics for readiness & conversion",
      ],
      itemsShape: "flat list of strings — no per-item title/description",
      note: "Heading levels are inverted here: the eyebrow 'Powered by IntelliGENIE' is the <h2> and the real heading is an <h3>.",
    },

    {
      id: "key-capabilities",
      domId: null,
      component: "it-cap-section",
      heading: "Key capabilities at a glance",
      subheading:
        "Explore the powerful features integrated across the ecosystem.",
      items: [
        {
          pillar: "Academy", // rendered as a label chip above the title
          title: "Role-based pathways",
          description: "Tailored skilling with AI guidance.",
        },
        {
          pillar: "Academy",
          title: "Evidence-backed Projects",
          description: "Practical assignments with tracked progress.",
        },
        {
          pillar: "Assessment",
          title: "Secure Assessments",
          description: "Enterprise-grade exam workflow.",
        },
        {
          pillar: "Assessment",
          title: "Unified Transcripts",
          description: "Blockchain-verifiable digital credentials.",
        },
        {
          pillar: "Career",
          title: "Hiring Pipeline",
          description:
            "Employer search, shortlist, and interview workflows.",
        },
        {
          pillar: "Ecosystem",
          title: "Outcome Analytics",
          description: "Ready insights for institutions and employers.",
        },
      ],
    },

    {
      id: "closing-cta",
      domId: null,
      component: "it-cta-section",
      heading:
        "Build an employability pipeline that delivers outcomes—at scale.",
      // "delivers outcomes" is wrapped in a highlight <span> inside the <h2>.
      headingEmphasis: ["delivers outcomes"],
      body: [
        "Talk to Mindlogicx to explore IntelliTUTE for your academy, institution, or talent program.",
      ],
      // THE LIVE SECTION HAS NO BUTTON AND NO LINK — see concern 2.
      ctas: [],
      missing: true,
      note: "The closing CTA is text-only on the live page: an <h2> and one <p>, with no button, link, phone number, email address or form. The section tells the visitor to 'Talk to Mindlogicx' but provides no way to do so. The client must supply the CTA label and destination; nothing has been invented here.",
    },
  ],

  // Shared site chrome rendered above and below the sections above. Listed for
  // completeness; their copy belongs to the global header/footer content, not
  // to this page, so it is not duplicated here.
  chrome: {
    before: ["Navbar (shared)"],
    after: ["Footer (shared)"],
  },
};

export default intellitutePage;
