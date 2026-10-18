/*
 * ============================================================================
 * CONTENT EXTRACTION — IntelliEXAMS product page
 * ============================================================================
 *
 * Extracted: 2026-10-13
 *
 * PAGE:  https://www.mindlogicx.com/intelliexam/
 *        (note the route is SINGULAR "intelliexam" even though the product and
 *        the page heading are plural "IntelliEXAMS" — see concern 12)
 *
 * ---------------------------------------------------------------------------
 * HOW THIS WAS EXTRACTED — AND WHY PLAIN WebFetch WAS NOT ENOUGH
 * ---------------------------------------------------------------------------
 * www.mindlogicx.com is a client-rendered Vite/React SPA. A raw GET of
 * https://www.mindlogicx.com/intelliexam/ returns a 2,506-byte shell whose only
 * text content is the <title>. Every word of page copy is injected at runtime by
 * /assets/index-DTiusDjM.js. WebFetch does not execute JavaScript, so the first
 * WebFetch pass came back with ONLY the <title> and no body text, and a second
 * pass timed out at DNS. Those passes were discarded as unusable rather than
 * guessed at.
 *
 * The content below was therefore taken from the LIVE PRODUCTION JAVASCRIPT
 * BUNDLES — i.e. the actual deployed strings, not a local developer checkout:
 *   1. https://www.mindlogicx.com/intelliexam/            (shell: <title>, <meta
 *      name="description">, confirmed empty <body>)
 *   2. https://www.mindlogicx.com/assets/index-DTiusDjM.js (entry bundle — used
 *      to resolve the route table: { path: "/intelliexam" } -> lazy chunk
 *      ./page-dkpbl4F7.js, and to read the seoConfig map)
 *   3. https://www.mindlogicx.com/assets/page-dkpbl4F7.js  (THE page chunk —
 *      banner, introduction, Feature cards, OSM, fun facts, QP authoring,
 *      Online Exam, CTA, and the page's component order)
 *   4. https://www.mindlogicx.com/assets/page-BnnkWFOG.js  (Our Clients carousel)
 *   5. https://www.mindlogicx.com/assets/PageBanner-DK4Fqzlc.js
 *   6. https://www.mindlogicx.com/assets/CtaAreaTwo-DdsUMYo-.js
 *   7. https://www.mindlogicx.com/assets/page-B0xylA8L.js  (floating button)
 *   8. https://www.mindlogicx.com/assets/constant-DEcMMcOu.js (floating-button
 *      target URL)
 *
 * CROSS-CHECKED, STRING FOR STRING, against the unminified reference source at
 *   /home/ranjith/Documents/ClaudeProjects/OfficeProjects/Mindlogicx_India/mlx-website-2025-frontend
 * specifically:
 *   src/routes.tsx                                            (route -> page)
 *   src/seoConfig.ts                                          (title/description)
 *   src/constant.tsx                                          (floating-btn URL)
 *   src/app/intelliexam/page.tsx
 *   src/app/intelliexam/IntelliExams.tsx                      (section order)
 *   src/components/IntelliExam/IntelliexamIntroduction/page.tsx
 *   src/components/IntelliExam/IntelliexamFeatur/page.tsx
 *   src/components/IntelliExam/OnScreenMarking/page.tsx
 *   src/components/IntelliExam/IntelliexamFunFact/page.tsx
 *   src/components/IntelliExam/QpDeliverySystem/page.tsx
 *   src/components/IntelliExam/OnlineExamOnlineAssessment/page.tsx
 *   src/components/IntelliExam/OurEsteemedClient/page.tsx
 *   src/components/Common/PageBanner.tsx
 *   src/components/Common/CtaAreaTwo.tsx
 *   src/commonComponents/FloatingBtn/page.tsx
 *
 * RESULT OF THE CROSS-CHECK: the deployed bundle and the local checkout are
 * IDENTICAL in copy. Every heading, paragraph, card, bullet, statistic, client
 * name, button label and image path below is present in BOTH. There is no copy
 * in this file that came from only one of the two sources. The local checkout
 * additionally reveals the commented-out copy noted in concerns 6, 7 and 8,
 * which the minified bundle necessarily strips.
 *
 * This file SUPERSEDES the partial earlier extraction in
 * ./intelliexams-contact.js (export `intelliExamsPage`). That file is left
 * untouched because another page imports `contactPage` from it. The two agree;
 * this one adds the live-bundle provenance, the banner/heading-level audit, the
 * icon inventory, the live image HTTP verification and concerns 9-14.
 *
 * ---------------------------------------------------------------------------
 * VERBATIM
 * ---------------------------------------------------------------------------
 * All copy is VERBATIM. Nothing reworded, shortened, re-capitalised or
 * re-punctuated. Specifically preserved:
 *   - "IntelliEXAMS®" WITH the registered mark, twice, in the introduction
 *     paragraph — and "IntelliEXAMS" WITHOUT it in the banner heading and the
 *     page title (see concern 1).
 *   - The REGISTERED TYPO / GRAMMAR FAULTS in the Feature section intro:
 *       * the heading is singular "Feature", almost certainly meant to be
 *         "Features" (concern 2);
 *       * a DOUBLE SPACE in "examination management  platform";
 *       * the ungrammatical "poised to transform how create, deliver and
 *         evaluate the assessments" (a word is missing — probably "we" or "you"
 *         after "how"). NOT corrected (concern 3).
 *   - The straight apostrophe in "today's dynamic world" (Feature intro) versus
 *     the CURLY apostrophe in "the student’s identity" (OSM bullet 6) and in
 *     "Mindlogicx’s" (meta description). The source is inconsistent; both forms
 *     are kept exactly as found.
 *   - "&" as a literal ampersand everywhere: "Question Paper Authoring &
 *     Delivery", "identity & areas", "analytics & dashboards", "annotations &
 *     feedback", "multimedia & subjective", "Alerts & Notifications",
 *     "QP delivery & Printing".
 *   - "Analytics and dashboards" — sentence case, unlike every sibling card
 *     title which is Title Case (concern 4).
 *   - US spellings as written ("centralized", "randomization", "authorized",
 *     "personalized", "digitization", "analyze", "Templatized").
 *   - The statistic strings as strings ("95+", "55+", "10+"), not integers, with
 *     the unit rendered as a separate <span>m</span> (concern 5).
 *
 * BULLET LEADING-SPACE NOTE: in the source JSX, the bullets in
 * `qp-authoring-and-delivery` and `online-exam-online-assignment` each begin
 * with a LEADING SPACE (e.g. " Unified authoring tool to author question paper
 * for any assessment types"), because the text node follows the check-mark <i>
 * on the same line. The `on-screen-marking` bullets do NOT have it. That space
 * is presentational icon separation, not copy, so bullets are stored TRIMMED
 * here. This is the only whitespace normalisation applied anywhere in this file,
 * and it is applied to leading/trailing space only — the internal double space
 * in the Feature intro is preserved.
 *
 * ---------------------------------------------------------------------------
 * INVENTED: NOTHING
 * ---------------------------------------------------------------------------
 * No statistics, client names, testimonials, awards, certifications, prices,
 * phone numbers or email addresses have been added. The page carries NO
 * testimonials, NO pricing, NO awards, NO phone number, NO email address and NO
 * form. The only numbers on the page are the three fun-fact figures and the
 * "10 million users" claim in the CTA. The nine client names in `our-clients`
 * are the nine that are actually in the deployed bundle — no more, no fewer.
 *
 * ---------------------------------------------------------------------------
 * EXCLUDED — SITE CHROME, NOT PAGE CONTENT
 * ---------------------------------------------------------------------------
 * The shared <NavbarTwo /> header and <Footer /> are rendered by this page but
 * belong to the site layout, not to this page's content, and are NOT recorded in
 * `sections`. The floating "Visit Website" button IS recorded, because its
 * target URL is page-specific (concern 10).
 *
 * ---------------------------------------------------------------------------
 * FLAGGED FOR THE CLIENT TO DECIDE
 * ---------------------------------------------------------------------------
 * 1. ® IS USED INCONSISTENTLY. The introduction paragraph writes "IntelliEXAMS®"
 *    twice, but the banner heading, the <title>, the meta description and the
 *    CTA all write the product with NO mark at all. Legal/brand must rule on
 *    which is correct and apply it consistently. Nothing silently corrected.
 *
 * 2. SECTION HEADING IS SINGULAR: "Feature". It introduces SIX feature cards.
 *    Almost certainly should be "Features". Verbatim as-is.
 *
 * 3. THE FEATURE INTRO SENTENCE IS BROKEN ENGLISH AND HAS A DOUBLE SPACE:
 *      "Our examination management  platform is poised to transform how create,
 *       deliver and evaluate the assessments."
 *    A word is missing after "how". Needs a copy rewrite the client must approve.
 *
 * 4. CARD TITLE CASING IS INCONSISTENT. Five of the six Feature cards are Title
 *    Case ("QP Authoring and Delivery", "Hybrid Online Examination", "On-Screen
 *    Marking", "Cloud Enabled Solution", "Question Paper Delivery System
 *    (QPDS)") but one is sentence case ("Analytics and dashboards"). Also note
 *    "On-Screen Marking" (hyphenated, card 4) vs the section heading "On Screen
 *    Marking (OSM)" (unhyphenated) — two spellings of the same feature name on
 *    the same page.
 *
 * 5. THE THREE HEADLINE STATISTICS ARE UNSUBSTANTIATED AND AMBIGUOUS, AND THEY
 *    ARE THE BIGGEST CLAIM-RISK ON THE PAGE. The markup is
 *      <h3>{number} <span>m</span></h3>
 *    so they render as "95+ m Answer Scripts Evaluated", "55+ m Question Paper
 *    Delivered", "10+ m Users". The bare lowercase "m" is never expanded to
 *    "million" anywhere on the page. The CTA on the SAME page says "over 10
 *    million users", which corroborates "10+ m" but makes "95+ m answer scripts"
 *    worth an independent sanity-check. There is no source, date, footnote or
 *    "as of" qualifier anywhere. The client must (a) confirm the figures,
 *    (b) decide whether to spell out "million", (c) fix the grammar of
 *    "Question Paper Delivered" (should be plural "Question Papers Delivered"),
 *    and (d) supply an as-of date or a citation.
 *
 * 6. ALL SIX FEATURE CARD TITLES ARE WRAPPED IN DEAD LINKS. Each <h3> contains a
 *    <Link href="#"> — so the titles look clickable, are keyboard-focusable, and
 *    go nowhere. Recorded as link: "#" with placeholder: true. Either give them
 *    real detail pages or unwrap them.
 *
 * 7. ALL NINE CLIENT LOGO TITLES ARE ALSO DEAD LINKS (href="#"), same problem.
 *    Additionally each client record carries category: "Development" and a
 *    "View Details" button, both commented out in the source and NOT rendered.
 *    "Development" is meaningless as a category for a university client and
 *    should not be revived as-is.
 *
 * 8. THIRD-PARTY CLIENT NAMES AND LOGOS — PERMISSION REQUIRED. The page displays
 *    nine named institutions (VIT, AKTU, Amity, CSVTU, GIIS, GTU, Maulana Abul
 *    Kalam Azad University of Technology, Mata Gujri, RGUHS) under the heading
 *    "Our Clients". These are other organisations' trademarks. Written
 *    permission to use each name and logo must be on file before publishing,
 *    and each engagement should be confirmed as still current and as still
 *    being an IntelliEXAMS customer specifically. NOTE ALSO: a tenth logo file,
 *    .../OurEsteemedClient/AKU.webp, exists in the asset folder but is NOT
 *    referenced by the page — client may have intended to include it. Several
 *    names are abbreviations only (CSVTU, GTU, GIIS, RGUHS); consider whether
 *    full institution names are wanted. "Mata Gujri" is given without the
 *    "College"/"University" suffix that the institution itself uses.
 *
 * 9. HEADING LEVELS ARE BROKEN — SEO AND ACCESSIBILITY DEFECT. This page has NO
 *    <h1> that describes it, and THREE <h1> elements that describe nothing:
 *      - the page banner title "IntelliEXAMS" is an <h2>, not an <h1>;
 *      - every section heading is also an <h2>, so the banner does not outrank
 *        them;
 *      - the fun-fact component renders <h1><p>{label}</p></h1>, i.e. THREE
 *        <h1>s whose entire content is "Answer Scripts Evaluated", "Question
 *        Paper Delivered" and "Users" — and a <p> nested inside an <h1>, which
 *        is invalid HTML.
 *    On the new site, "IntelliEXAMS" should be the single <h1> and the fun-fact
 *    labels should not be headings at all.
 *
 * 10. THE FLOATING BUTTON LEAVES THE SITE WITH NO WARNING. It links to
 *    https://intelliexams.com/intelliexam/home (a separate product domain) with
 *    target="_blank", and its only label is a title="Visit Website" tooltip on a
 *    <div> plus an <img alt=""> — so it is effectively invisible to screen
 *    readers and to keyboard users. Confirm the destination is still correct and
 *    give the control a real accessible name.
 *
 * 11. IMAGE ALT TEXT IS USELESS OR ABSENT. Five of the six content images use
 *    the literal alt text "Mindlogicx", which describes nothing. The product
 *    logo and the floating-button GIF have alt="" (empty). The page banner is a
 *    CSS background-image and so has no alt attribute at all. Every one of the
 *    nine client logos also uses alt="Mindlogicx" rather than the institution's
 *    name. All recorded verbatim below; all need rewriting for the new site —
 *    that will be NEW copy, not ported copy.
 *
 * 12. ROUTE / NAME MISMATCH AND A DUPLICATE PAGE. The live route is SINGULAR
 *    "/intelliexam" while the product is plural "IntelliEXAMS". Worse, the
 *    deployed route table ALSO contains "/new_intelliexams", a second, much
 *    larger and much newer IntelliEXAMS page (its own route in routes.tsx,
 *    linked from src/components/EdTech/EdTechServices.tsx as
 *    "/new_intelliexams/"). It introduces a completely different product
 *    structure — two named editions ("IntelliEXAMS Prime", "IntelliEXAMS NG"),
 *    a "Powered by MindGENIE" section, an OBE/CLO/PLO mapping section and a
 *    comparison table — NONE of which appears on /intelliexam. Confusingly its
 *    page.tsx also calls getMetadata("/intelliexam"), so BOTH routes emit the
 *    SAME <title> and meta description, which is a duplicate-content problem.
 *    THE CLIENT MUST DECIDE WHICH PAGE IS CANONICAL. This file deliberately
 *    extracts ONLY the page served at /intelliexam, as instructed. The
 *    /new_intelliexams copy has NOT been merged in and NOT been invented into
 *    this file; if it is the real future page it needs its own extraction.
 *
 * 13. THE CTA DOES NOT GO WHERE A BUTTON SHOULD GO, AND IT IS NOT A BUTTON. The
 *    "Request To Demo" control is a <div class="custom-btn"> with an onClick —
 *    not a <button> and not an <a> — so it cannot be tabbed to or activated by
 *    keyboard. On click it pushes the Calendly title/url into a redux store and
 *    client-routes to /appointment/. The new site has no redux and no
 *    /appointment/ page, so this flow must be redesigned. Label grammar is also
 *    off: "Request To Demo" (probably "Request A Demo"). Both the /appointment/
 *    path and the Calendly URL are recorded below.
 *
 * 14. THE CTA CARRIES AN UNSUBSTANTIATED SUPERLATIVE: "globally acclaimed" and
 *    "trusted by over 10 million users". "Globally acclaimed" has no supporting
 *    award, review or citation anywhere on the page or the site. Marketing/legal
 *    should confirm both the superlative and the 10-million figure are
 *    defensible, or soften them.
 *
 * 15. SEO IS THIN. The shell serves only <title> and <meta name="description">
 *    for this route. There are NO Open Graph tags, NO Twitter card tags, NO
 *    canonical link and NO structured data on this page. The <title> is 71
 *    characters (acceptable) but the product name in it is unmarked (concern 1).
 *    Because the whole site is a client-rendered SPA with an empty <body>,
 *    crawlers that do not execute JavaScript see NO page content whatsoever —
 *    this is worth fixing with SSR/prerendering on the new site.
 *
 * ---------------------------------------------------------------------------
 * MISSING / NOT RECOVERABLE
 * ---------------------------------------------------------------------------
 * Nothing on the rendered page is unreadable — the full component tree was read
 * from the deployed bundle, so there is no `missing: true` anywhere in this
 * file. Three sections DO have copy that exists in the source but is COMMENTED
 * OUT and therefore does NOT render; it is recorded as
 * `commentedOutInSource` with `rendered: false`, NOT promoted into the page:
 *   - introduction: an <h2>About Us</h2>
 *   - online-exam-online-assignment: a lorem-ipsum paragraph
 *   - our-clients: a lorem-ipsum paragraph, a category chip and a
 *     "View Details" button
 * Lorem ipsum is placeholder, not copy, so its text is not reproduced.
 *
 * ---------------------------------------------------------------------------
 * IMAGES — ALL VERIFIED LIVE, NONE DOWNLOADED
 * ---------------------------------------------------------------------------
 * All 16 images referenced by this page were HTTP-checked against
 * www.mindlogicx.com on 2026-10-13: all 16 returned 200 with a non-zero body.
 * No file was downloaded. Every path is SITE-RELATIVE (served from the
 * mindlogicx.com origin) and every one also exists on disk in the local
 * reference project's /public folder — so there are NO remote/third-party-hosted
 * images on this page and no hotlinked stock photography. Note the asset folder
 * is spelled "imagess" (double s) for .webp and "images" for the legacy .png /
 * .gif set; the QP image filename contains a literal "&" character
 * ("Question-paper-authoring-&-delivery.webp") which should be renamed on
 * re-host. Sizes range 56 KB - 579 KB; the banner alone is 579 KB and should be
 * re-compressed.
 * ============================================================================
 */

export const intelliexamsPage = {
  // The page banner heading. Rendered as an <h2>, not an <h1> — see concern 9.
  title: "IntelliEXAMS",

  banner: {
    // src/components/Common/PageBanner.tsx — renders <h2>{pageTitle}</h2> over a
    // CSS background-image. No breadcrumb trail, no subtitle, no CTA.
    pageTitle: "IntelliEXAMS",
    image: "/imagess/mindlogicx/header_banner/newbanner/Intelliexams.webp",
    imageAlt: null, // CSS background-image — no alt attribute exists
    imageBytes: 579282, // 579 KB — see images note, needs re-compression
    note:
      "Banner text is an <h2>. The page therefore has no descriptive <h1>. See concern 9.",
  },

  // From the served index.html for /intelliexam/, and confirmed identical in the
  // entry bundle's seoConfig map. These are the ONLY page-level meta tags.
  seo: {
    pageSpecific: true,
    title:
      "IntelliEXAMS | End-to-End Digital Exam Management System | Mindlogicx",
    description:
      "IntelliEXAMS is Mindlogicx’s flagship AI-powered platform for secure, end-to-end exam lifecycle management — from question paper generation to evaluation and certification. Trusted by universities, government bodies, and corporates for scalable assessment solutions.",
    openGraph: null, // none present — see concern 15
    twitter: null, // none present — see concern 15
    canonical: null, // none present — see concern 15
    structuredData: null, // none present — see concern 15
    note:
      "The same title/description are also emitted by the /new_intelliexams route. Duplicate content — see concern 12.",
  },

  sections: [
    // ------------------------------------------------------------------ 1
    {
      id: "introduction",
      component: "IntelliexamIntroduction",
      layout: "textLeft-imageRight",
      heading: null, // there is NO visible heading on this section
      commentedOutInSource: { heading: "About Us", rendered: false },
      // A product logo image sits where the heading would be.
      logo: {
        image: "/assets/images/pages/intelliexams/intelli_logo.webp",
        alt: "", // empty alt in source — see concern 11
      },
      body: [
        "The flagship product from Mindlogicx, IntelliEXAMS®, is an AI-powered assessment engine that can seamlessly manage the entire assessment lifecycle. The solution is flexible, modular, rule-based, and user friendly. It is innovative in terms of technology offering and delivery, as it is available on the cloud, mobile app, and BYOD with cross platform capability. This innovative technology suite provides more accurate, efficient, and personalized approach to the assessment process, making it an indispensable tool for educators and learners alike. Say goodbye to outdated testing methods and hello to a more advanced and effective assessment approach with IntelliEXAMS® for a distributed assessment environment.",
      ],
      image: "/assets/images/pages/intelliexams/Intelliexams_content_img.webp",
      imageAlt: "Mindlogicx", // useless alt — see concern 11
      imageSize: { width: 500, height: 550 },
    },

    // ------------------------------------------------------------------ 2
    {
      id: "feature",
      component: "IntelliExamFeature",
      layout: "cardGrid-3col",
      heading: "Feature", // VERBATIM — singular. See concern 2.
      intro:
        "Your ultimate destination for acquiring the abilities you need to thrive in today's dynamic world. Our examination management  platform is poised to transform how create, deliver and evaluate the assessments.",
      introNote:
        "Double space in 'management  platform' and a missing word after 'transform how' are both in the source. See concern 3.",
      // Each card is an icon + a linked <h3> + a paragraph. Six cards, all
      // rendered (the array is sliced to 6 and contains exactly 6).
      cards: [
        {
          title: "QP Authoring and Delivery",
          text: "Author questions, create multiple tests to enable Just In Time QP delivery from the cloud to the test center or to the candidates device securely",
          link: "#",
          placeholder: true, // dead link — see concern 6
          icon: "fas fa-file-signature bg-712d7b", // Font Awesome class
        },
        {
          title: "Hybrid Online Examination",
          text: "Conduct hybrid online examinations using Safe Exam Browser, with both MCQ and subjective questions",
          link: "#",
          placeholder: true,
          icon: "fas fa-laptop-code bg-712d7b",
        },
        {
          title: "Analytics and dashboards", // sentence case — see concern 4
          text: "Utilize intuitive dashboards to analyze and present information, enabling well-informed decision-making.",
          link: "#",
          placeholder: true,
          icon: "fas fa-chart-line bg-712d7b",
        },
        {
          title: "On-Screen Marking", // hyphenated here, not in section 3
          text: "OSM solution to mark Answer Scripts and assignments with rubrics. Manage the grading of formative and summative assessments efficiently.",
          link: "#",
          placeholder: true,
          icon: "fas fa-pen-to-square bg-712d7b",
        },
        {
          title: "Cloud Enabled Solution",
          text: "A Cloud-Enabled Solution enhances traditional systems with the power of cloud computing. It offers scalability, security, and seamless integration with modern cloud services for improved efficiency and flexibility",
          link: "#",
          placeholder: true,
          icon: "fas fa-cloud bg-712d7b",
        },
        {
          title: "Question Paper Delivery System (QPDS)",
          text: "Time-bound authentication and OTP-based access for printing, ensuring encrypted and secure question paper delivery, along with geofencing.",
          link: "#",
          placeholder: true,
          icon: "fas fa-paper-plane bg-712d7b",
        },
      ],
      unusedInSource: {
        rendered: false,
        note:
          "Every card object also carries an image_url pointing at /images/mindlogicx/gradfirst/welcome_icon/{goal,global_leader,edtech_industry}.png — borrowed from the GradFirst page and commented out in the JSX. Font Awesome icons are rendered instead. Not ported.",
      },
    },

    // ------------------------------------------------------------------ 3
    {
      id: "on-screen-marking",
      component: "OnScreenMarking",
      layout: "imageLeft-bulletsRight",
      heading: "On Screen Marking (OSM)", // unhyphenated — see concern 4
      image: "/assets/images/pages/intelliexams/onscreenmarking.webp",
      imageAlt: "Mindlogicx",
      imageSize: { width: 500, height: 750 },
      // 15 bullets, each prefixed by a fa-solid fa-circle-check icon.
      bullets: [
        "Self-allocation of answer scripts by faculties",
        "Rules-based centralized answer script allocation",
        "Multiple levels of simultaneous evaluations while hiding previous evaluations",
        "Intuitive annotation feature by using predefined symbols and free hand annotation",
        "Revaluation of answer script at question level",
        "Answer script anonymity configuration to mask the student’s identity & areas of specific answer script pages",
        "Automatic publishing of answer script next level based on configurable business rules",
        "Device-agnostic and platform agnostic",
        "Options to provide marks and feedback to individual questions",
        "Rubrics enabled On-Screen Marking for qualitative grading",
        "Cross Platform On-Screen Marking",
        "Time window enforcement for Evaluations",
        "Real-time evaluation analytics & dashboards",
        "Online view of evaluated answer script with annotations & feedback for students",
        "Integrated with license management",
      ],
      bulletIcon: "fa-solid fa-circle-check",
    },

    // ------------------------------------------------------------------ 4
    {
      id: "fun-facts",
      component: "IntelliexamFunFact",
      layout: "statRow-3col",
      heading: null, // no heading on this band
      // Markup: <h3>{number} <span>m</span></h3> then <h1><p>{label}</p></h1>.
      // The <h1><p> nesting is invalid HTML — see concern 9.
      // The figures are unsourced and the unit is never expanded — concern 5.
      stats: [
        {
          number: "95+",
          unit: "m",
          label: "Answer Scripts Evaluated",
          rendersAs: "95+ m",
          icon: "fas fa-file-circle-check",
        },
        {
          number: "55+",
          unit: "m",
          label: "Question Paper Delivered", // grammar: should be plural
          rendersAs: "55+ m",
          icon: "fas fa-file-export",
        },
        {
          number: "10+",
          unit: "m",
          label: "Users",
          rendersAs: "10+ m",
          icon: "fas fa-users",
        },
      ],
      unsubstantiated: true,
      note:
        "No source, date or footnote for any of the three figures. 'm' is never expanded to 'million'. See concern 5.",
    },

    /*
     * ------------------------------------------------------------------ 4b
     * THE TWO EDITIONS — added 2026-10-17 at the client's request.
     *
     * ⚠️ PROVENANCE IS DIFFERENT FROM THE REST OF THIS FILE. Everything else
     * here was extracted from https://www.mindlogicx.com/intelliexam/. This
     * section was transcribed from a **design screenshot supplied in chat**,
     * not from any page or deck. The wording is what was legible in that
     * image; there is no source document to check it against.
     *
     * It is, however, the same product split as **`/new_intelliexams`** on
     * the live site — the "IntelliEXAMS Prime / NG" page flagged at the top
     * of this file as duplicate content against `/intelliexam`. Putting the
     * two editions on this page makes that overlap larger, not smaller.
     * **Which of the two routes is canonical is still the client's call**,
     * and it matters more now.
     *
     * The screenshot showed four buttons — "Explore IntelliEXAMS Prime",
     * "Learn more", "Explore IntelliEXAMS NG", "Request Demo". **All four
     * were excluded on instruction** ("do not show Buttons in new sections"),
     * which is just as well: none of them has a destination on this site.
     *
     * The screenshot's dark panels and amber accent were also not followed,
     * on instruction — the section uses this site's light card pattern and
     * its two-colour palette.
     */
    {
      id: "two-editions",
      heading: "End-to-End Assessment Excellence",
      subheading: "TWO POWERFUL PLATFORMS. ONE MISSION.",
      lead: "Secure. Scalable. Built for Impact.",
      sourceNote:
        "Transcribed from a design screenshot supplied 2026-10-17, not from the live site or a content deck.",
      editions: [
        {
          name: "IntelliEXAMS",
          /* Rendered in the accent colour beside the product name, the way
             the screenshot sets it. */
          edition: "Prime",
          tone: "cyan",
          glyph: "Governed",
          strapline:
            "Secure & Controlled High-Stakes Examination Operations",
          points: [
            "Secure question paper authoring and delivery",
            "Controlled online examination workflows",
            "Digitized on-screen marking and evaluation governance",
            "End-to-end control for high-stakes assessment operations",
          ],
        },
        {
          name: "IntelliEXAMS",
          edition: "NG",
          tone: "purple",
          glyph: "AgentStructured",
          strapline:
            "Scalable Digital Assessment Infrastructure for the Future",
          points: [
            "Digital assessment infrastructure for institutions",
            "Outcome-based education enablement",
            "Academic outcomes and institutional analytics",
            "Regulatory and compliance-aligned configuration",
          ],
        },
      ],
      /* ⚠️ Not rendered — see the note above. Kept so the screenshot's full
         contents are on record. */
      ctasNotRendered: [
        "Explore IntelliEXAMS Prime",
        "Learn more",
        "Explore IntelliEXAMS NG",
        "Request Demo",
      ],
    },

    // ------------------------------------------------------------------ 5
    {
      id: "qp-authoring-and-delivery",
      component: "QpDeliverySystem",
      layout: "bulletsLeft-imageRight",
      heading: "Question Paper Authoring & Delivery",
      image:
        "/assets/images/pages/intelliexams/qp-authoring-and-delivery.webp",
      imageAlt: "Mindlogicx",
      imageSize: { width: 500, height: 750 },
      imageNote:
        "Filename contains a literal '&'. The asset descriptor declares height 650 but the <Image> is rendered at height 750 — a mismatch in the source. Rename and resolve on re-host.",
      // 16 bullets. Stored trimmed — see the BULLET LEADING-SPACE NOTE above.
      bullets: [
        "Unified authoring tool to author question paper for any assessment types",
        "Supports multiple options of QP authoring (automatic, manual and file upload)",
        "Supports more than 10 question types including multimedia question types",
        "Editor with inbuilt features supporting tables, image, mathematical and chemical equations",
        "Supports authoring questions in multiple languages",
        "Template driven QP authoring by randomization",
        "Configurable parameter to define the degree of difficulty/severity of QP",
        "Encryption of QP at storage and transmission",
        "Question paper upload in bulk and single",
        "Secret key split across multiple authorized users for secured QP printing",
        "Time based Authentication",
        "The question paper will be printed at the authorized geo-location with a watermark",
        "OTP Authentication for Printing",
        "SoS option for Question paper printing",
        "Interactive dashboard to track real-time status of QP",
        "Live tracking of QP delivery & Printing",
      ],
      bulletIcon: "fa-solid fa-circle-check",
    },

    // ------------------------------------------------------------------ 6
    {
      id: "online-exam-online-assignment",
      component: "OnlineExamOnlineAssessment",
      layout: "imageLeft-twoBulletColumnsRight",
      heading: "Online Exam / Online Assignment",
      commentedOutInSource: {
        body: "lorem ipsum placeholder paragraph",
        rendered: false,
        note: "Placeholder text, not copy — deliberately not reproduced.",
      },
      image: "/assets/images/pages/intelliexams/Online-Assignment.webp",
      imageAlt: "Mindlogicx",
      imageSize: { width: 500, height: 650 },
      // Two side-by-side <ul> columns: 7 bullets then 5 bullets. Stored trimmed.
      bulletColumns: [
        [
          "Option for Scheduled and ad hoc assessment",
          "Unified QP authoring tool for any assessment types in multiple languages",
          "Supports more than 10 question types including multimedia & subjective",
          "Item Banking System (IBS)",
          "Templatized automatic question paper (QP) generation from IBS",
          "BYOD enabled delivery of assignments",
          "Secured Exam Browser based assessment",
        ],
        [
          "QR code based questions for instant digitization of handwritten response at source",
          "Instant results along with analytics for MCQ based assessment",
          "Integrated with license management",
          "Alerts & Notifications",
          "Cross Platform On-Screen Marking for subjective questions",
        ],
      ],
      bulletIcon: "fa-solid fa-circle-check",
      note:
        "'Integrated with license management' and 'Cross Platform On-Screen Marking' also appear verbatim in the on-screen-marking section — duplicated copy across two sections. Client may want to de-duplicate.",
    },

    // ------------------------------------------------------------------ 7
    {
      id: "our-clients",
      component: "OurEsteemedClient",
      layout: "logoCarousel",
      heading: "Our Clients",
      commentedOutInSource: {
        body: "lorem ipsum placeholder paragraph",
        rendered: false,
      },
      carousel: {
        library: "swiper",
        autoplayDelayMs: 5000,
        pauseOnMouseEnter: true,
        navigation: true,
        pagination: true,
        slidesPerView: { 0: 1, 576: 2, 768: 3, 1200: 4, 1800: 5 },
      },
      permissionRequired: true, // third-party marks — see concern 8
      // Nine items, all rendered. Each is an <img alt="Mindlogicx"> plus a
      // linked <h3>{title}</h3> whose href is "#".
      items: [
        {
          title: "VIT",
          image: "/assets/images/pages/intelliexams/clients/VIT.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
        {
          title: "AKTU",
          image: "/assets/images/pages/intelliexams/clients/AKTU.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
        {
          title: "Amity",
          image: "/assets/images/pages/intelliexams/clients/Amity.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
        {
          title: "CSVTU",
          image: "/assets/images/pages/intelliexams/clients/CSVTU.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
        {
          title: "GIIS",
          image: "/assets/images/pages/intelliexams/clients/GIIS.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
        {
          title: "GTU",
          image: "/assets/images/pages/intelliexams/clients/GTU.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
        {
          title: "Maulana Abul Kalam Azad University of Technology",
          image:
            "/assets/images/pages/intelliexams/clients/Maulana-Abul-Kalam-Azad-University-of-Technology.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
        {
          title: "Mata Gujri",
          image:
            "/assets/images/pages/intelliexams/clients/Mata-Gujri.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
        {
          title: "RGUHS",
          image: "/assets/images/pages/intelliexams/clients/RGUHS.webp",
          imageAlt: "Mindlogicx",
          link: "#",
          placeholder: true,
        },
      ],
      unusedInSource: {
        rendered: false,
        note:
          "Every item also carries category: 'Development' (commented out) and a 'View Details' button (commented out). A tenth logo, AKU.webp, exists in the folder but is not referenced. See concern 7 and concern 8.",
      },
    },

    // ------------------------------------------------------------------ 8
    {
      id: "cta",
      component: "CtaAreaTwo",
      layout: "fullWidthBand",
      heading:
        "Deploy our globally acclaimed assessment engine trusted by over 10 million users",
      body: null, // the `desc` prop is not passed on this page; <p> renders empty
      unsubstantiated: true, // "globally acclaimed", "10 million" — see concern 14
      ctas: [
        {
          label: "Request To Demo", // verbatim; probably meant "Request A Demo"
          link: "/appointment/",
          calendlyUrl: "https://calendly.com/mindlogicx-sales/enquiry",
          element: "div", // NOT a button and NOT an anchor — see concern 13
          keyboardAccessible: false,
          note:
            "onClick dispatches the Calendly title/url into a redux store, then client-routes to /appointment/. The new site has neither redux nor an /appointment/ page — this flow must be redesigned.",
        },
      ],
    },

    // ------------------------------------------------------------------ 9
    {
      id: "floating-visit-website-button",
      component: "FloatingBtn",
      layout: "fixedOverlay",
      heading: null,
      label: null, // no visible text
      tooltip: "Visit Website", // title attribute on a <div>
      image: "/images/mindlogicx/link.gif",
      imageAlt: "", // empty alt — see concern 11
      link: "https://intelliexams.com/intelliexam/home",
      external: true,
      target: "_blank",
      keyboardAccessible: false,
      note:
        "Off-site link to a separate product domain, with no accessible name and no new-window warning. Confirm the destination is current. See concern 10.",
    },
  ],

  // --------------------------------------------------------------------------
  // Flat inventory of every image this page references, for the asset migration.
  // All 16 HTTP-checked 200 OK against www.mindlogicx.com on 2026-10-13.
  // All are site-relative (same origin). NONE are remote/third-party hosted.
  // --------------------------------------------------------------------------
  images: [
    {
      path: "/imagess/mindlogicx/header_banner/newbanner/Intelliexams.webp",
      usedBy: "banner",
      alt: null,
      bytes: 579282,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/intelli_logo.webp",
      usedBy: "introduction (product logo)",
      alt: "",
      bytes: 56144,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/Intelliexams_content_img.webp",
      usedBy: "introduction",
      alt: "Mindlogicx",
      bytes: 212142,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/onscreenmarking.webp",
      usedBy: "on-screen-marking",
      alt: "Mindlogicx",
      bytes: 367000,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/qp-authoring-and-delivery.webp",
      usedBy: "qp-authoring-and-delivery",
      alt: "Mindlogicx",
      bytes: 277836,
      local: true,
      note: "Filename contains a literal '&' — rename on re-host.",
    },
    {
      path: "/assets/images/pages/intelliexams/Online-Assignment.webp",
      usedBy: "online-exam-online-assignment",
      alt: "Mindlogicx",
      bytes: 290016,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/VIT.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 137652,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/AKTU.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 120976,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/Amity.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 147386,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/CSVTU.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 134514,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/GIIS.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 137516,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/GTU.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 125934,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/Maulana-Abul-Kalam-Azad-University-of-Technology.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 125258,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/Mata-Gujri.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 112012,
      local: true,
    },
    {
      path: "/assets/images/pages/intelliexams/clients/RGUHS.webp",
      usedBy: "our-clients",
      alt: "Mindlogicx",
      bytes: 145014,
      local: true,
    },
    {
      path: "/images/mindlogicx/link.gif",
      usedBy: "floating-visit-website-button",
      alt: "",
      bytes: 2147,
      local: true,
    },
  ],

  // Referenced but NOT used by this page — recorded so it is not lost.
  unreferencedAssets: [
    {
      path: "/imagess/mindlogicx/intelliexam/OurEsteemedClient/AKU.webp",
      note:
        "Sits in the client-logo folder but is not referenced by the page. Client may have intended to include it. See concern 8.",
    },
  ],
};

export default intelliexamsPage;
