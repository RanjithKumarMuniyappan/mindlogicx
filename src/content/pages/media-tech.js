/*
 * ============================================================================
 * CONTENT EXTRACTION — MediaTech / "MediaX" sector page
 * ============================================================================
 *
 * Extracted: 2026-10-15
 *
 * SOURCES (both read-only; NOTHING in the reference project was modified,
 * and no image was copied, moved, converted or re-compressed)
 * ---------------------------------------------------------------------------
 * 1. LOCAL SOURCE, AUTHORITATIVE — the unminified Next.js checkout at
 *      /home/ranjith/Documents/AntigravityProjects/mlx-website-2025-frontend
 *    Files read, in the order the page composes them:
 *      src/app/media_tech/page.tsx              (route; getMetadata("/media_tech"))
 *      src/app/media_tech/MediaTechComp.tsx     (THE render order — 7 children)
 *      src/components/Layouts/NavbarTwo         (site chrome — excluded)
 *      src/components/Common/PageBanner.tsx     (banner = one <h2> over a CSS bg)
 *      src/components/MediaTech/MTIntro/page.tsx
 *      src/components/MediaTech/Details/MTTabContent/page.tsx
 *      src/components/MediaTech/Details/MTTransformingIdle/page.tsx
 *      src/components/MediaTech/Details/MTOurWork/page.tsx
 *      src/components/Common/CtaAreaTwo.tsx     (closing CTA band)
 *      src/components/Layouts/Footer            (site chrome — excluded)
 *      src/commonComponents/FloatingBtn/page.tsx (the floating microsite link)
 *      src/constant.tsx line 792                (TheMediaX = "https://Themediax.ai")
 *      src/seoConfig.ts + src/seoHelper.ts      (this route's title + description)
 *      src/app/sitemap.ts                       (the /media_tech sitemap entry)
 *    ALSO read, and NOT part of the live page (captured under `notRendered`):
 *      src/components/MediaTech/Details/MTCraftExperience/page.tsx
 *      src/components/MediaTech/MTService/page.tsx
 *
 * 2. RUNNING DEV SERVER, CROSS-CHECK — http://localhost:3000/media_tech/
 *    HTTP 200, 23,736-byte server-rendered document, fetched 2026-10-15.
 *    The WebFetch tool could NOT be used for this URL (it force-upgrades http
 *    to https, which the dev server does not serve, and returned "Invalid
 *    URL"), so the document was retrieved with curl and parsed directly for
 *    <title>, <meta name="description">, every h1-h6, every <p>, every <img>,
 *    every background-image url() and every <a href>. That parse is the
 *    cross-check referred to below.
 *
 * RESULT OF THE CROSS-CHECK: the two sources AGREE. Every heading, paragraph,
 * card label, button label, image and link in this file is present in BOTH.
 * Nothing is injected at runtime that is not in the source, and the source
 * contains no live copy that fails to reach the page. Two source-vs-rendered
 * differences exist and are recorded honestly rather than smoothed over:
 *   (a) The slider section's paragraph renders with TWO BROKEN HYPHENATIONS —
 *       "AI- driven" and "rollout— delivering" — because the JSX source breaks
 *       those words across lines and JSX joins lines with a single space. The
 *       RENDERED text is what is stored in `body` (that is what a visitor
 *       reads); `bodyIntendedText` records the obviously-intended wording.
 *       This is a real, visible defect on the live page. See concern 4.
 *   (b) The `title` field on all six "MediaX Impact Stories" cards exists only
 *       in the data array and is NEVER rendered (the <h4> prints `category`).
 *       Those six strings are therefore marked `titleRendered: false` and do
 *       not appear in the served HTML. See concern 3.
 *
 * NavbarTwo and Footer are shared site chrome and are deliberately NOT in
 * `sections`. FloatingBtn IS included, because the page mounts it itself and
 * passes it a page-specific URL.
 *
 * ---------------------------------------------------------------------------
 * VERBATIM
 * ---------------------------------------------------------------------------
 * All copy is VERBATIM. Nothing reworded, shortened, re-capitalised,
 * re-punctuated, re-spaced or spell-corrected. Specifically preserved:
 *   - EM DASHES (U+2014): "of MindlogicX—an 8K-enabled", "business wins—from
 *     first sketch", "every step—ideation", "rollout— delivering" and (in the
 *     not-rendered MTService copy) "content delivery—leveraging".
 *   - EN DASH (U+2013), not an em dash, in the CTA heading
 *     "Create. Manage. Distribute – Seamlessly." — with a space on each side.
 *     The page mixes – and — ; both are kept exactly as found.
 *   - "MindlogicX" with a CAPITAL X in the intro paragraph, which contradicts
 *     "Mindlogicx" in the logo, the footer copyright and the SEO title.
 *   - "Xperience-as-a-Service" (intro) versus "Experience-as-a-Service"
 *     (impact-story card 5). Both kept.
 *   - "2D/3D Explainer Animation" (no spaces round the slash) next to
 *     "AR / VR / MR Content" (spaces round both slashes), as in the source.
 *   - Literal "&" ampersands throughout the service-module and category
 *     labels ("Localization & Accessibility", "Cinematic VFX & CGI",
 *     "Motion Graphics & Data Viz", "VFX & Motion Graphics",
 *     "Live-Action & Virtual Production").
 *   - "https://Themediax.ai" — the constant's own capital T / lower-case m.
 *   - The lorem-ipsum string in the slider data is reproduced exactly, under
 *     `rendered: false`, because it IS lorem ipsum and must be seen as such.
 *
 * TYPOS AND ERRORS IN THE SOURCE — PRESERVED, NOT FIXED:
 *   a) "Ent-to-End Creative & Production Powerhouse" — the section <h2>.
 *      "Ent-to-End" should be "End-to-End". This is a misspelled headline in
 *      30px type in the middle of the page. See concern 4.
 *   b) "AI- driven" — rendered with a space inside the word. Concern 4.
 *   c) "rollout— delivering" — em dash followed by a stray space. Concern 4.
 *   d) "MindlogicX" (capital X) against "Mindlogicx" everywhere else in the
 *      site chrome. Concern 6.
 *   e) The not-rendered MTService paragraph has NO terminal full stop
 *      ("...across every device") and begins a sentence with a participle
 *      ("Driving deeper engagement..."). Preserved under `notRendered`.
 *   f) The not-rendered MTCraftExperience list is in a NON-SEQUENTIAL process
 *      order: Discovery, Blueprint, Visuals, Launch + Optimize, Flow, Define —
 *      i.e. "Launch + Optimize" sits fourth of six, before "Flow" and
 *      "Define". Preserved as ordered in the source. Concern 11.
 *
 * ---------------------------------------------------------------------------
 * NOT RENDERED (all captured separately, `rendered: false`)
 * ---------------------------------------------------------------------------
 * - `notRendered[0]` MTService — src/components/MediaTech/MTService/page.tsx.
 *   A grep of the whole src/ tree finds ZERO importers. The component is
 *   defined and default-exported and used by nothing. It holds the ONLY prose
 *   on this subject that explains what "MediaTech" means in an education
 *   context, so it is captured verbatim; it must not be presented as current
 *   page content.
 * - `notRendered[1]` MTCraftExperience — a "How We Craft Every Experience"
 *   6-step process block. `<MTCraftExperience />` appears on line 40 of
 *   MediaTechComp.tsx INSIDE A JSX COMMENT, and there is NO import statement
 *   for it anywhere, so un-commenting that one line would not even compile.
 *   Its own data object also carries `shortText`, `image` and `circleImage`
 *   fields that the component itself never reads — recorded, marked unused.
 * - `notRendered[2]` a second CtaAreaTwo, commented out in MediaTechComp.tsx
 *   lines 43-48. Same heading and button label as the live one but pointing at
 *   "/appointment/" with calendly_url
 *   "https://calendly.com/mindlogicx-sales/enquiry". A third-party scheduling
 *   URL — see concern 10.
 * - `notRendered[3]` the per-component commented-out fragments: the
 *   "Elevator Pitch" <h2>, a second MediaX logo <img>, the lorem-ipsum slider
 *   paragraphs and their "Read More" href="#" links, the "View Case Study"
 *   button and decorative `shapeImage` on every impact-story card, a "Spatial
 *   & Adaptive Audio" service tile, the <h3> product title in MTService, and
 *   (from the shared CTA band) the "So What is Next?" eyebrow, an alternate
 *   heading "Are You Ready? Let&apos;s get to work!" and a second button
 *   "Partner With Us" -> /partner/.
 *
 * IMPORTED BUT NEVER USED (assets, not copy):
 * - MTOurWork imports `LiveEventPackaging` (our_work/LiveEventPackaging.webp)
 *   on line 10 and never renders it. There is no "Live Event Packaging" tile.
 * - MTOurWork imports `SpatialAdaptiveAudio` and its only use is inside the
 *   commented-out tile.
 * - MTIntro imports `FsLightbox` from "fslightbox-react" and `useState`, and
 *   uses neither.
 * - Every impact-story card carries a `shapeImage` (studie-shape1..6.webp) and
 *   a `viewDetails` route; both are only referenced by commented-out markup.
 * MediaTechComp.tsx itself has no dead imports — all 12 are used.
 *
 * ---------------------------------------------------------------------------
 * IMAGE INVENTORY (25 images render; ALL 25 LOCAL, ALL 25 PRESENT in public/)
 * ---------------------------------------------------------------------------
 * Dimensions and byte sizes read with python3 + PIL from the reference
 * project's public/ folder on 2026-10-15. Paths are exactly as referenced in
 * source. NO image was copied, moved, converted or modified. There are NO
 * remote/hosted images on this page and NOTHING is missing from public/.
 * Full records with alt text are in `images` at the bottom of this file.
 *
 *  #  path                                                                   px        bytes   exists
 *   1 /imagess/mindlogicx/header_banner/Mediatech.webp                    2050x330    25,926  yes
 *   2 /imagess/mindlogicx/mediatech/mediax_intro.webp                      500x515   202,528  yes
 *   3 /imagess/mindlogicx/mediatech/new_logo/MediaXLogoHibrid.png          678x227    17,514  yes
 *   4 .../mediatech/impact_stories/AICreativeAutomation.webp               360x460   172,568  yes  (used TWICE)
 *   5 .../mediatech/impact_stories/LiveActionVirtualProduction.webp        360x460   133,332  yes
 *   6 .../mediatech/impact_stories/VFXMotionGraphics.webp                  360x460   146,930  yes
 *   7 .../mediatech/impact_stories/ExperienceAsAService.webp               360x460   138,372  yes
 *   8 .../mediatech/impact_stories/LocalizationAccessibility.webp          360x460    29,122  yes  (suspiciously small)
 *   9 .../mediatech/transforming_idle/Imagine.webp                         331x450   125,870  yes
 *  10 .../mediatech/transforming_idle/Ideate.webp                          331x450   148,104  yes
 *  11 .../mediatech/transforming_idle/Prototype.webp                       331x450   146,294  yes
 *  12 .../mediatech/transforming_idle/Produce.webp                         331x450   131,150  yes
 *  13 .../mediatech/transforming_idle/logo/Imagine.webp                    300x300     7,992  yes
 *  14 .../mediatech/transforming_idle/logo/Ideate.webp                     300x300     6,604  yes
 *  15 .../mediatech/transforming_idle/logo/PrototypeICON.webp              300x300     8,938  yes
 *  16 .../mediatech/transforming_idle/logo/Produce.webp                    300x300     8,134  yes
 *  17 .../mediatech/our_work/LocalizationAccessibility.webp                480x350   159,714  yes
 *  18 .../mediatech/our_work/CinematicVFXCGI.webp                          480x350   145,776  yes
 *  19 .../mediatech/our_work/MotionGraphicsDataViz.webp                    480x700   293,538  yes
 *  20 .../mediatech/our_work/twoD_3DExplainerAnimation.webp                480x350   137,886  yes
 *  21 .../mediatech/our_work/AR_VR_MRContent.webp                          480x350   109,048  yes
 *  22 .../mediatech/our_work/GenerativeAIImagery.webp                      480x350   172,498  yes
 *  23 .../mediatech/our_work/GreenScreenStudio.webp                        480x350     8,498  yes  (suspiciously small)
 *  24 /images/mindlogicx/link.gif                                          200x200     2,147  yes  (floating button)
 *
 * (That is 24 distinct FILES in 25 render slots — #4 is used by two cards.)
 *
 * Referenced only by not-rendered / commented-out code, all PRESENT in
 * public/, recorded under `unreferencedAssets` so they are not lost:
 *   our_work/LiveEventPackaging.webp 480x350 186,700 | our_work/SpatialAdaptiveAudio.webp 480x350 151,712
 *   case-studies/studie-shape1..6.webp 253x253-327x290, 1,748-5,642 B
 *   images/mindlogicx/mediatech/new_logo/MediaXLogo.png 1000x500 24,224
 *   images/mindlogicx/mediatech/craft_experience/Craft_Every_Experience.png 492x941 301,365
 *   images/circle.png 905x908 32,548
 *   craft_experience/{Discovery,blueprint,Visuals,Launch,flow,define}.png 300x300, 24,756-33,574 B
 *
 * ============================================================================
 * FOR THE CLIENT TO DECIDE / FIX BEFORE THIS SHIPS ON THE NEW SITE
 * ============================================================================
 *  1. THE BANNER SAYS "BSIM". The page banner heading — the single largest
 *     piece of text on the page, and the only heading above the fold — reads
 *     "BSIM". The word appears NOWHERE else: not in the body copy, not in the
 *     SEO title, not in the nav label, not in the footer, not anywhere in the
 *     reference project's MediaTech folder. Every sibling page passes its own
 *     sector name here ("HealthTech", "Voice Of Law"). This looks like
 *     leftover text from another project, and it is almost certainly wrong.
 *     THE CLIENT MUST SUPPLY THE INTENDED BANNER TITLE. It has NOT been
 *     guessed or replaced here — `title` and `banner.pageTitle` both say
 *     "BSIM", flagged, because that is what the page says.
 *  2. THE SIX "IMPACT STORIES" ARE NOT STORIES. The section is headed "MediaX
 *     Impact Stories" and promises "measurable business wins", but each card
 *     renders ONLY a service-category label ("Creative Story Telling",
 *     "VFX & Motion Graphics", ...). There is no narrative, no client, no
 *     metric, no outcome and no link — the "View Case Study" button is
 *     commented out. The heading and its intro paragraph therefore make a
 *     promise the section does not keep. Either real case studies are needed,
 *     or the heading must change.
 *  3. THE CARD TITLES IN THAT SECTION ARE TEMPLATE FILLER AND DO NOT MATCH
 *     THEIR OWN CATEGORIES. The data holds "Elevating the Modern Cinema
 *     Experience", "Embedding Design Ops Across Teams", "Infusing Play into
 *     the Messaging Journey", "Accelerating FinTech Onboarding Journeys",
 *     "Reinventing the E-Commerce Checkout Flow" and "Scaling a Unified
 *     Design System for SaaS Growth". These read as generic design-agency
 *     boilerplate, they do not correspond to the categories they are paired
 *     with (e.g. "Embedding Design Ops Across Teams" is filed under
 *     "Live-Action & Virtual Production"), and none of them is displayed. If
 *     the cards are ever given titles, these strings should NOT be used as-is.
 *  4. FOUR VISIBLE COPY DEFECTS, all in the slider section:
 *       - the <h2> reads "Ent-to-End" instead of "End-to-End";
 *       - the paragraph renders "AI- driven" with a space in the middle;
 *       - the paragraph renders "rollout— delivering" with a stray space;
 *       - the component/export is named "TransformingIdle" while its heading
 *         is about an end-to-end powerhouse — the file name suggests the copy
 *         was swapped out and the wrapper never renamed.
 *     Items 2 and 3 are caused by hard line-breaks in the JSX; they must be
 *     fixed in the new build by storing the paragraph as one string.
 *  5. LOREM IPSUM IS STILL IN THE SOURCE. All four slider entries (Imagine,
 *     Ideate, Prototype, Produce) carry the identical placeholder "Quis ipsum
 *     suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
 *     lacus vel facilisis." and a `detailsLink: "#"`. They are commented out,
 *     so the four steps currently render as a BARE WORD with an icon and no
 *     explanation at all. Real one-line descriptions are needed, or the client
 *     should confirm the labels are meant to stand alone.
 *  6. BRAND-NAME INCONSISTENCY: "MindlogicX" (capital X) in the intro
 *     paragraph vs "Mindlogicx" in the logo/footer/SEO; and
 *     "Xperience-as-a-Service" in the intro vs "Experience-as-a-Service" as a
 *     card label. Pick one of each.
 *  7. DUPLICATED COPY: "Localization & Accessibility" is both an impact-story
 *     category (<h4>) and a specialist service module (<h3>) on the same page,
 *     with two DIFFERENT images. "VFX & Motion Graphics" (category) also
 *     overlaps "Cinematic VFX & CGI" and "Motion Graphics & Data Viz"
 *     (modules). The two sections largely restate the same service list.
 *  8. THE "SPECIALIST SERVICE MODULES" INTRO DESCRIBES THE WRONG THING. It
 *     says "Explore a curated selection of MediaX projects where bold ideas
 *     meet flawless execution. Each piece demonstrates..." — but the tiles
 *     below are service categories, not projects, and nothing is linked or
 *     demonstrated. Same promise/payload mismatch as concern 2.
 *  9. THE CLOSING CTA IS BROKEN. `<CtaAreaTwo url="https://wa.me/919071177765"
 *     isNewTab={false} />`: because isNewTab is false, CtaAreaTwo's
 *     handleRedirect falls through to `router.push(url)` — a Next App Router
 *     client navigation to an EXTERNAL absolute URL. "Talk to our creative
 *     director" will not reliably open WhatsApp. It also dispatches
 *     setCalendly with an empty url, since no calendly_url is passed. The
 *     control is a `<div onClick>` with no role, no tabIndex and no href, so
 *     it is NOT keyboard reachable and NOT announced as a button. And the
 *     `desc` prop is never passed, so an EMPTY <p></p> is rendered inside the
 *     CTA. Four separate defects in one 1-line component call.
 * 10. THIRD-PARTY / CONTACT DETAILS NEEDING SIGN-OFF. Taken verbatim from
 *     source, not invented, but all need confirmation before republication:
 *     the WhatsApp number +91 9071177765 (also used twice in the navbar), the
 *     external microsite https://Themediax.ai behind the floating button, and
 *     — in commented-out code only — https://calendly.com/mindlogicx-sales/
 *     enquiry. Calendly and WhatsApp are third-party services; embedding them
 *     has privacy-notice implications. No other phone, email, price,
 *     statistic, client name, logo, testimonial or award appears anywhere in
 *     this page's main content, and none has been added.
 * 11. UNSUBSTANTIATED CLAIMS, every one with zero evidence on the page:
 *     "the AI-powered creative powerhouse of MindlogicX", "an 8K-enabled
 *     studio", "turning imagination into measurable impact and ROI",
 *     "measurable business wins", "delivering jaw-dropping content faster,
 *     smarter, and at scale", "flawless execution", "experiences that
 *     captivate, convert, and endure", and (not rendered) "cutting-edge
 *     digital content delivery", "Pixel-perfect interface styling". "8K-
 *     enabled" and "measurable ... ROI" are specific, checkable claims and
 *     should be substantiated or softened.
 * 12. ACCESSIBILITY:
 *     a) NO <h1> ON THE PAGE. The banner is an <h2>; there are four more
 *        <h2>s. Promote the banner to <h1> on the new site.
 *     b) HEADING-LEVEL JUMP: the impact-story cards use <h4> directly under
 *        the section's <h2>, skipping <h3> — while the next two sections use
 *        <h3> for the same kind of card label. Inconsistent and invalid.
 *     c) DUPLICATE HEADING TEXT: "Localization & Accessibility" appears as
 *        both an <h4> and an <h3> (concern 7).
 *     d) ALT TEXT THAT DOES NOT DESCRIBE THE IMAGE: twelve images carry
 *        alt="Mindlogicx" — the intro photo, the 4 slider photos and the 7
 *        service-module photos. That is the company name, not a description.
 *     e) EMPTY ALT ON MEANINGFUL IMAGES: the MediaX wordmark
 *        (MediaXLogoHibrid.png) has alt="" and is the ONLY place the product
 *        name "MediaX" appears as a heading-equivalent — a screen reader gets
 *        nothing. The 4 step icons and the floating-button GIF are also alt="".
 *     f) SIX IMPACT-STORY IMAGES ARE CSS background-images, so they have no
 *        alt attribute at all and cannot get one.
 *     g) THE FLOATING BUTTON has only a `title="Visit Website"` attribute and
 *        an alt="" image — no accessible name in text, and it links off-site
 *        in a new tab with no warning.
 *     h) The impact-story cards contain an EMPTY <div className=
 *        "content_container"> with nothing in it.
 * 13. LINKS / ROUTES THAT MAY NOT EXIST ON THE NEW SITE.
 *     a) `/media_tech/details/` — the viewDetails target in the never-rendered
 *        MTService. THERE IS NO SUCH ROUTE in the reference project
 *        (src/app/media_tech/ contains only page.tsx and MediaTechComp.tsx).
 *        Dead link if that component is ever restored.
 *     b) `/portfolio/portfolio-details/` — the viewDetails on all six
 *        impact-story cards. The route DOES exist in the reference project but
 *        is unmigrated template demo content; all six cards point at the SAME
 *        page. Only referenced by commented-out markup today.
 *     c) `href="#"` placeholders on all four slider entries (commented out).
 *     d) `/partner/` and `/appointment/` in commented-out CTA markup.
 *     e) In MTService, an `<a>` with NO href and an onClick — not keyboard
 *        reachable (same pattern as concern 9).
 * 14. IMAGE-QUALITY / SIZING ISSUES.
 *     a) mediax_intro.webp is 500x515 but is rendered at width={500}
 *        height={550} — a forced 7% vertical stretch. Fix one or the other.
 *     b) our_work/GreenScreenStudio.webp is 8,498 bytes at 480x350 while its
 *        six siblings are 109-293 KB; impact_stories/LocalizationAccessibility
 *        .webp is 29,122 bytes against siblings at 133-173 KB. Both are very
 *        likely blank, near-blank or placeholder art. VERIFY VISUALLY.
 *     c) The six impact-story images are only 360x460 but fill a col-lg-4 card
 *        as a background — they will upscale and soften on wide screens.
 *     d) The banner is a 2050x330 strip (6.21:1) with no text alternative.
 *     e) transforming_idle photos are 331x450 but declared 330x450 (1 px off).
 * 15. The live page has NO form, NO contact details in its own content, and NO
 *     consent/cookie interaction. Nothing on it collects data.
 *
 * MISSING CONTENT — recorded, NOT invented:
 *  - `banner.subtitle`, `banner.breadcrumb`: do not exist (`missing: true`).
 *  - The four slider steps have NO description (concern 5) — each is marked
 *    `description: null, missing: true`.
 *  - The six impact-story cards have NO body, NO metric and NO link
 *    (`missing: true` on each).
 *  - The seven service modules have NO description (`missing: true`).
 *  - The CTA band has NO sub-description (`desc` never passed).
 *  Nothing was filled in for any of these.
 * ============================================================================
 */

export const mediaTechPage = {
  // The banner heading — the page's own title, and the page's ONLY above-the-
  // fold text. Rendered as an <h2>. The page has no <h1> at all.
  // "BSIM" is almost certainly wrong — see concern 1. NOT corrected.
  title: "BSIM",
  titleIsSuspect: true,
  titleNote:
    "Verbatim from MediaTechComp.tsx line 33, pageTitle=\"BSIM\". The string occurs nowhere else on the page or in the MediaTech source tree. Confirmed as the rendered <h2> in the served HTML. Client must supply the intended title; nothing was substituted.",

  route: "/media_tech",
  productName: "MediaX", // the name the body copy uses; only ever shown as a logo image

  banner: {
    // src/components/Common/PageBanner.tsx — a single <h2> over a CSS
    // background-image. No eyebrow, no subtitle, no breadcrumb, no CTA.
    pageTitle: "BSIM",
    headingLevel: "h2",
    image: "/imagess/mindlogicx/header_banner/Mediatech.webp",
    imageAlt: null, // CSS background-image — no alt attribute exists
    imageSize: { width: 2050, height: 330 },
    imageBytes: 25926,
    subtitle: null,
    subtitleMissing: true,
    breadcrumb: null,
    breadcrumbMissing: true,
    note:
      "Only heading above the fold and the page's de-facto h1, but marked up as h2. 6.21:1 letterbox strip with no text alternative. See concerns 1 and 12a.",
  },

  // src/seoConfig.ts -> seoMap["/media_tech"], resolved by getMetadata() in
  // src/app/media_tech/page.tsx. Confirmed byte-identical in the served
  // document. These are the ONLY meta tags for this route.
  seo: {
    pageSpecific: true,
    title:
      "MediaTech Solutions | AI-Powered Content & Media Management by Mindlogicx",
    description:
      "Explore Mindlogicx MediaTech — your partner in cutting-edge AI-driven media solutions, VFX, creative automation, and digital storytelling. Empowering brands with next-gen content production tools and cloud-based creative ecosystems.",
    descriptionNote:
      "Verbatim, em dash (U+2014) after 'MediaTech'. Note the SEO title/description talk about 'MediaTech' while the page body is entirely branded 'MediaX', and neither mentions 'BSIM'. See concerns 1 and 6.",
    openGraph: null, // none present
    twitter: null, // none present
    canonical: null, // none present
    structuredData: null, // none present
    sitemap: {
      included: true,
      url: "https://www.mindlogicx.com/media_tech",
      priority: 0.8,
      changeFrequency: "monthly",
    },
  },

  // --------------------------------------------------------------------------
  // Real visual order, top to bottom, exactly as MediaTechComp.tsx composes
  // them (NavbarTwo and Footer excluded as site chrome).
  // --------------------------------------------------------------------------
  sections: [
    // ------------------------------------------------------------------ 1
    {
      id: "mediax-intro",
      component: "MTIntro",
      layout: "twoColumn-imageLeft",
      // There is NO text heading. The slot where a heading would go holds the
      // MediaX wordmark as an <img> with alt="" (concern 12e). The real
      // heading, <h2>Elevator Pitch</h2>, is commented out — see notRendered.
      heading: null,
      headingMissing: true,
      headingNote:
        "No text heading in this section. A logo image with empty alt stands in for one.",
      logoImage: "/imagess/mindlogicx/mediatech/new_logo/MediaXLogoHibrid.png",
      logoImageAlt: "",
      body: [
        "MediaX is the AI-powered creative powerhouse of MindlogicX—an 8K-enabled studio crafting and amplifying story-led content across EdTech, HealthTech, FinTech and LegalTech. We deliver Xperience-as-a-Service, turning imagination into measurable impact and ROI.",
      ],
      bodyNote:
        "One paragraph, the whole of the section's copy. 'MindlogicX' capital X and 'Xperience-as-a-Service' are verbatim (concern 6). '8K-enabled' and 'measurable impact and ROI' are unsubstantiated (concern 11).",
      image: "/imagess/mindlogicx/mediatech/mediax_intro.webp",
      imageAlt: "Mindlogicx",
      imageAltNote:
        "alt is the company name, not a description of the picture (concern 12d). Declared 500x550 but the file is 500x515 (concern 14a).",
      ctas: [],
      ctasMissing: true,
    },

    // ------------------------------------------------------------------ 2
    {
      id: "mediax-impact-stories",
      component: "MTTabContent",
      layout: "cardGrid-3col",
      heading: "MediaX Impact Stories",
      headingLevel: "h2",
      intro:
        "See how MediaX turns bold concepts into measurable business wins—from first sketch to full-scale rollout.",
      introNote:
        "Promises 'measurable business wins' that the cards below never deliver — see concern 2.",
      // Six cards. Each renders ONE <h4> (the `category`) over a CSS
      // background-image. No body, no metric, no client, no link.
      cardsNote:
        "`title` on every card is DATA ONLY and never reaches the DOM (titleRendered: false) — the <h4> prints `category`. The titles are template filler that does not match its category: see concern 3. `shapeImage` and `viewDetails` are referenced only by commented-out markup. Cards 1 and 4 share the same image file.",
      cards: [
        {
          category: "Creative Story Telling", // the rendered <h4>
          headingLevel: "h4",
          title: "Elevating the Modern Cinema Experience",
          titleRendered: false,
          body: null,
          missing: true,
          note: "No story, metric, client or link — only the category label renders.",
          image:
            "/imagess/mindlogicx/mediatech/impact_stories/AICreativeAutomation.webp",
          imageAlt: null, // CSS background-image
          imageSharedWithCard: 4,
          shapeImage: "/imagess/case-studies/studie-shape1.webp",
          shapeImageRendered: false,
          viewDetails: "/portfolio/portfolio-details/",
          viewDetailsRendered: false,
        },
        {
          category: "Live-Action & Virtual Production",
          headingLevel: "h4",
          title: "Embedding Design Ops Across Teams",
          titleRendered: false,
          body: null,
          missing: true,
          note: "Title/category mismatch is starkest here — 'Design Ops' under 'Live-Action & Virtual Production'. See concern 3.",
          image:
            "/imagess/mindlogicx/mediatech/impact_stories/LiveActionVirtualProduction.webp",
          imageAlt: null,
          shapeImage: "/imagess/case-studies/studie-shape2.webp",
          shapeImageRendered: false,
          viewDetails: "/portfolio/portfolio-details/",
          viewDetailsRendered: false,
        },
        {
          category: "VFX & Motion Graphics",
          headingLevel: "h4",
          title: "Infusing Play into the Messaging Journey",
          titleRendered: false,
          body: null,
          missing: true,
          note: "Overlaps the 'Cinematic VFX & CGI' and 'Motion Graphics & Data Viz' modules in section 4. See concern 7.",
          image:
            "/imagess/mindlogicx/mediatech/impact_stories/VFXMotionGraphics.webp",
          imageAlt: null,
          shapeImage: "/imagess/case-studies/studie-shape3.webp",
          shapeImageRendered: false,
          viewDetails: "/portfolio/portfolio-details/",
          viewDetailsRendered: false,
        },
        {
          category: "AI + Creative Automation",
          headingLevel: "h4",
          title: "Accelerating FinTech Onboarding Journeys",
          titleRendered: false,
          body: null,
          missing: true,
          note: "Reuses card 1's image file. '+' rather than '&' here, unlike every other label.",
          image:
            "/imagess/mindlogicx/mediatech/impact_stories/AICreativeAutomation.webp",
          imageAlt: null,
          imageSharedWithCard: 1,
          shapeImage: "/imagess/case-studies/studie-shape4.webp",
          shapeImageRendered: false,
          viewDetails: "/portfolio/portfolio-details/",
          viewDetailsRendered: false,
        },
        {
          category: "Experience-as-a-Service",
          headingLevel: "h4",
          title: "Reinventing the E-Commerce Checkout Flow",
          titleRendered: false,
          body: null,
          missing: true,
          note: "Spelled 'Experience-as-a-Service' here but 'Xperience-as-a-Service' in the intro section. See concern 6.",
          image:
            "/imagess/mindlogicx/mediatech/impact_stories/ExperienceAsAService.webp",
          imageAlt: null,
          shapeImage: "/imagess/case-studies/studie-shape5.webp",
          shapeImageRendered: false,
          viewDetails: "/portfolio/portfolio-details/",
          viewDetailsRendered: false,
        },
        {
          category: "Localization & Accessibility",
          headingLevel: "h4",
          title: "Scaling a Unified Design System for SaaS Growth",
          titleRendered: false,
          body: null,
          missing: true,
          note: "DUPLICATE heading text — the same label is an <h3> in section 4 with a different image. Image file is only 29 KB; verify it is not blank. See concerns 7, 12c and 14b.",
          image:
            "/imagess/mindlogicx/mediatech/impact_stories/LocalizationAccessibility.webp",
          imageAlt: null,
          shapeImage: "/imagess/case-studies/studie-shape6.webp",
          shapeImageRendered: false,
          viewDetails: "/portfolio/portfolio-details/",
          viewDetailsRendered: false,
        },
      ],
      ctas: [],
      ctasMissing: true,
    },

    // ------------------------------------------------------------------ 3
    {
      id: "ent-to-end-creative-production-powerhouse",
      component: "MTTransformingIdle",
      layout: "splitPanel-textLeft-sliderRight",
      // Heading is MISSPELLED in the source and is kept that way. See concern 4.
      heading: "Ent-to-End Creative & Production Powerhouse",
      headingLevel: "h2",
      headingTypo: true,
      headingIntendedText: "End-to-End Creative & Production Powerhouse",
      // The RENDERED string, including the two whitespace defects JSX creates.
      body: [
        "From first brainstorm to final launch, MediaX handles every step—ideation, cinematic VFX, AI- driven automation, and multi-platform rollout— delivering jaw-dropping content faster, smarter, and at scale.",
      ],
      bodyIntendedText:
        "From first brainstorm to final launch, MediaX handles every step—ideation, cinematic VFX, AI-driven automation, and multi-platform rollout—delivering jaw-dropping content faster, smarter, and at scale.",
      bodyNote:
        "`body` is what the browser actually shows: the JSX breaks 'AI-driven' and 'rollout—delivering' across lines, so a space is injected inside each. Store as one string in the new build. See concern 4.",
      // 4 slides in a Swiper (autoplay 5 s, arrows). Each renders an icon
      // image + a bare <h3>. Descriptions are commented-out lorem ipsum.
      stepsNote:
        "Each step renders a logo image (alt=\"\") and a single word. No description renders at all — see concern 5 and notRendered[3].",
      steps: [
        {
          title: "Imagine",
          headingLevel: "h3",
          description: null,
          missing: true,
          note: "Source `shortText` is lorem ipsum and is commented out; `detailsLink` is '#'. See notRendered[3].",
          image: "/imagess/mindlogicx/mediatech/transforming_idle/Imagine.webp",
          imageAlt: "Mindlogicx",
          icon: "/imagess/mindlogicx/mediatech/transforming_idle/logo/Imagine.webp",
          iconAlt: "",
        },
        {
          title: "Ideate",
          headingLevel: "h3",
          description: null,
          missing: true,
          note: "Same lorem-ipsum placeholder, commented out.",
          image: "/imagess/mindlogicx/mediatech/transforming_idle/Ideate.webp",
          imageAlt: "Mindlogicx",
          icon: "/imagess/mindlogicx/mediatech/transforming_idle/logo/Ideate.webp",
          iconAlt: "",
        },
        {
          title: "Prototype",
          headingLevel: "h3",
          description: null,
          missing: true,
          note: "Same lorem-ipsum placeholder, commented out. Icon file is named 'PrototypeICON.webp' while its three siblings are '<Step>.webp' — inconsistent naming.",
          image: "/imagess/mindlogicx/mediatech/transforming_idle/Prototype.webp",
          imageAlt: "Mindlogicx",
          icon: "/imagess/mindlogicx/mediatech/transforming_idle/logo/PrototypeICON.webp",
          iconAlt: "",
        },
        {
          title: "Produce",
          headingLevel: "h3",
          description: null,
          missing: true,
          note: "Same lorem-ipsum placeholder, commented out.",
          image: "/imagess/mindlogicx/mediatech/transforming_idle/Produce.webp",
          imageAlt: "Mindlogicx",
          icon: "/imagess/mindlogicx/mediatech/transforming_idle/logo/Produce.webp",
          iconAlt: "",
        },
      ],
      carousel: {
        library: "swiper/react",
        modules: ["Autoplay", "Navigation"],
        autoplayDelayMs: 5000,
        slidesPerView: { 0: 1, 600: 2, 1400: 4 },
        note:
          "With 4 slides and slidesPerView 4 at >=1400px, the autoplay carousel has nothing to rotate on desktop. Swiper is a dependency the new build may not want to carry.",
      },
      ctas: [],
      ctasMissing: true,
    },

    // ------------------------------------------------------------------ 4
    {
      id: "specialist-service-modules",
      component: "MTOurWork",
      layout: "masonry-4col",
      heading: "Specialist Service Modules",
      headingLevel: "h2",
      intro:
        "Explore a curated selection of MediaX projects where bold ideas meet flawless execution. Each piece demonstrates how we fuse design artistry with AI-driven workflows to craft experiences that captivate, convert, and endure.",
      introNote:
        "Describes PROJECTS, but the tiles are SERVICE CATEGORIES with no links and nothing demonstrated. 'flawless execution' and 'captivate, convert, and endure' are unsubstantiated. See concerns 8 and 11.",
      // Seven tiles, hard-coded one by one (not a loop), in four columns.
      // `column` records which of the four source columns each tile sits in,
      // because that — not array order — determines the on-screen layout.
      modulesNote:
        "Each tile renders a photo (alt=\"Mindlogicx\") and one <h3>. Every tile's link-out button is commented out, so NOTHING here is clickable. No tile has a description. An eighth tile, 'Spatial & Adaptive Audio', is commented out — see notRendered[3].",
      modules: [
        {
          title: "Localization & Accessibility",
          headingLevel: "h3",
          column: 1,
          description: null,
          missing: true,
          image: "/imagess/mindlogicx/mediatech/our_work/LocalizationAccessibility.webp",
          imageAlt: "Mindlogicx",
          note: "DUPLICATE of impact-story card 6's label, different image. See concerns 7 and 12c.",
        },
        {
          title: "Cinematic VFX & CGI",
          headingLevel: "h3",
          column: 1,
          description: null,
          missing: true,
          image: "/imagess/mindlogicx/mediatech/our_work/CinematicVFXCGI.webp",
          imageAlt: "Mindlogicx",
        },
        {
          title: "Motion Graphics & Data Viz",
          headingLevel: "h3",
          column: 2,
          description: null,
          missing: true,
          image: "/imagess/mindlogicx/mediatech/our_work/MotionGraphicsDataViz.webp",
          imageAlt: "Mindlogicx",
          note: "The only tall tile (480x700); it is column 2's sole occupant.",
        },
        {
          title: "2D/3D Explainer Animation",
          headingLevel: "h3",
          column: 3,
          description: null,
          missing: true,
          image: "/imagess/mindlogicx/mediatech/our_work/twoD_3DExplainerAnimation.webp",
          imageAlt: "Mindlogicx",
          note: "No spaces round the slash here, unlike 'AR / VR / MR Content'. Verbatim.",
        },
        {
          title: "AR / VR / MR Content",
          headingLevel: "h3",
          column: 3,
          description: null,
          missing: true,
          image: "/imagess/mindlogicx/mediatech/our_work/AR_VR_MRContent.webp",
          imageAlt: "Mindlogicx",
        },
        {
          title: "Generative AI Imagery",
          headingLevel: "h3",
          column: 4,
          description: null,
          missing: true,
          image: "/imagess/mindlogicx/mediatech/our_work/GenerativeAIImagery.webp",
          imageAlt: "Mindlogicx",
        },
        {
          title: "Green Screen Studio",
          headingLevel: "h3",
          column: 4,
          description: null,
          missing: true,
          image: "/imagess/mindlogicx/mediatech/our_work/GreenScreenStudio.webp",
          imageAlt: "Mindlogicx",
          note: "Image is only 8,498 bytes at 480x350 while its six siblings are 109-293 KB — very likely blank or placeholder. VERIFY VISUALLY. Its aos-delay is also '100', duplicating the first tile's, so the stagger animation breaks. See concern 14b.",
        },
      ],
      ctas: [],
      ctasMissing: true,
    },

    // ------------------------------------------------------------------ 5
    {
      id: "cta-talk-to-our-creative-director",
      component: "CtaAreaTwo",
      layout: "ctaBand",
      heading: "Create. Manage. Distribute – Seamlessly.",
      headingLevel: "h3",
      headingNote:
        "EN DASH (U+2013) with spaces either side — verbatim. The rest of the page uses em dashes. See the VERBATIM note.",
      body: [],
      bodyMissing: true,
      bodyNote:
        "CtaAreaTwo renders <p>{desc}</p> unconditionally and `desc` is never passed, so an EMPTY <p></p> ships to the browser. See concern 9.",
      eyebrow: null,
      eyebrowMissing: true,
      eyebrowNote:
        "The component's eyebrow <span> ('So What is Next?') is commented out — see notRendered[3].",
      ctas: [
        {
          label: "Talk to our creative director",
          url: "https://wa.me/919071177765",
          external: true,
          isNewTab: false,
          element: "div-with-onClick",
          keyboardAccessible: false,
          broken: true,
          note:
            "BROKEN AND INACCESSIBLE. isNewTab={false} sends this through router.push() — a Next App Router client navigation to an external absolute URL, which will not reliably open WhatsApp. The control is a <div onClick> with no href, role or tabIndex, so keyboard and screen-reader users cannot operate it. It also dispatches setCalendly with an empty url because no calendly_url is passed. See concerns 9 and 10.",
        },
      ],
    },

    // ------------------------------------------------------------------ 6
    {
      id: "floating-microsite-link",
      component: "FloatingBtn",
      layout: "fixedFloatingButton",
      heading: null,
      headingMissing: true,
      body: [],
      bodyMissing: true,
      ctas: [
        {
          label: null,
          labelMissing: true,
          accessibleName: "Visit Website", // only a title attribute
          accessibleNameSource: "title attribute on a <div>, not text",
          url: "https://Themediax.ai",
          urlSource: "src/constant.tsx line 792 — export const TheMediaX",
          external: true,
          isNewTab: true,
          image: "/images/mindlogicx/link.gif",
          imageAlt: "",
          note:
            "Off-site link in a new tab with no visible label and an empty-alt GIF. 'Themediax.ai' capitalisation is verbatim from the constant. Needs an accessible name and client confirmation that the microsite is live. See concerns 10 and 12g.",
        },
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // IN THE SOURCE BUT NOT ON THE PAGE. rendered: false throughout. Do NOT
  // merge any of this into `sections` without the decisions in the concerns.
  // --------------------------------------------------------------------------
  notRendered: [
    {
      id: "the-mediatech-service-card",
      rendered: false,
      component: "MTService",
      source:
        "src/components/MediaTech/MTService/page.tsx — defined and default-exported, with ZERO importers anywhere in src/. Never reached by any route.",
      layout: "singleCard",
      note:
        "Captured because it is the only written explanation of what 'MediaTech' means as an offering, and it is plainly MediaTech copy the client may want. It does NOT render today. The card is an <a> with NO href plus an onClick (not keyboard reachable) pointing at /media_tech/details/, a route that does not exist.",
      card: {
        title: "The MediaTech",
        titleRendered: false,
        titleNote: "The <h3> wrapping this is itself commented out inside the unused component.",
        shortText:
          "Our MediaTech initiatives empower educators and learners with cutting-edge digital content delivery—leveraging AI-driven adaptive videos, virtual classrooms, and interactive multimedia simulations. Driving deeper engagement and enhanced knowledge retention by seamlessly integrating rich media assets with real-time analytics, enabling institutions to deliver personalized, scalable learning experiences across every device",
        shortTextNote:
          "Verbatim. NO terminal full stop, and the second 'sentence' is a dangling participle ('Driving deeper engagement...'). Em dash after 'content delivery'. 'cutting-edge' is unsubstantiated. Note it frames MediaTech as an EdTech content-delivery play, which contradicts the live page's creative-studio framing.",
        logo: "/images/mindlogicx/mediatech/new_logo/MediaXLogo.png",
        logoAlt: "",
        logoNote:
          "Path is /images/... (singular) whereas the live page uses /imagess/... — a different folder. The file exists at /images/mindlogicx/mediatech/new_logo/MediaXLogo.png, 1000x500, 24,224 bytes.",
        viewDetails: "/media_tech/details/",
        routeExists: false,
        linkElement: "a-without-href",
        keyboardAccessible: false,
      },
    },
    {
      id: "how-we-craft-every-experience",
      rendered: false,
      component: "MTCraftExperience",
      source:
        "src/components/MediaTech/Details/MTCraftExperience/page.tsx. `<MTCraftExperience />` appears on line 40 of MediaTechComp.tsx INSIDE A JSX COMMENT, and there is no import statement for it — un-commenting that line alone would not compile.",
      layout: "cardGrid-4col",
      heading: "How We Craft Every Experience",
      headingLevel: "h2",
      intro: null,
      introNote:
        "The data object carries a `shortText` ('From first spark to post-launch polish, our streamlined workflow turns bold ideas into high-impact realities.') which the component never reads, so it would not render even if restored. Recorded under `unusedDataFields` below.",
      stepsNote:
        "SOURCE ORDER PRESERVED and it is NOT the logical process order: 'Launch + Optimize' sits fourth of six, ahead of 'Flow' and 'Define'. See concern 11/typo note (f). Each step renders an icon image with alt=\"\" plus an <h3> and a <p>.",
      steps: [
        {
          title: "Discovery",
          text: "Deep-dive user insights",
          icon: "/images/mindlogicx/mediatech/craft_experience/Discovery.png",
          iconAlt: "",
        },
        {
          title: "Blueprint",
          text: "Functional wireframes",
          icon: "/images/mindlogicx/mediatech/craft_experience/blueprint.png",
          iconAlt: "",
        },
        {
          title: "Visuals",
          text: "Pixel-perfect interface styling",
          icon: "/images/mindlogicx/mediatech/craft_experience/Visuals.png",
          iconAlt: "",
          note: "'Pixel-perfect' is an unsubstantiated claim.",
        },
        {
          title: "Launch + Optimize",
          text: "Deploy, measure, refine",
          icon: "/images/mindlogicx/mediatech/craft_experience/Launch.png",
          iconAlt: "",
          note: "Out of sequence — fourth of six, before Flow and Define.",
        },
        {
          title: "Flow",
          text: "Screen-by-screen architecture",
          icon: "/images/mindlogicx/mediatech/craft_experience/flow.png",
          iconAlt: "",
        },
        {
          title: "Define",
          text: "Requirements & scope",
          icon: "/images/mindlogicx/mediatech/craft_experience/define.png",
          iconAlt: "",
        },
      ],
      unusedDataFields: {
        shortText:
          "From first spark to post-launch polish, our streamlined workflow turns bold ideas into high-impact realities.",
        image:
          "/images/mindlogicx/mediatech/craft_experience/Craft_Every_Experience.png",
        circleImage: "/images/circle.png",
        note:
          "All three sit in the component's own data array and are never read by its JSX. Both image files exist (492x941 / 301,365 B and 905x908 / 32,548 B). The commented-out <p> in the same component is lorem-style filler, recorded in notRendered[3].",
      },
    },
    {
      id: "cta-appointment-calendly",
      rendered: false,
      component: "CtaAreaTwo (second instance)",
      source: "src/app/media_tech/MediaTechComp.tsx lines 43-48, commented out.",
      heading: "Create. Manage. Distribute – Seamlessly.",
      ctas: [
        {
          label: "Talk to our creative director",
          url: "/appointment/",
          calendlyUrl: "https://calendly.com/mindlogicx-sales/enquiry",
          external: false,
          note:
            "An alternate version of the live CTA that routes to the internal /appointment/ page and hands a Calendly booking URL to the appointment screen, instead of jumping to WhatsApp. This is the variant that would actually WORK (see concern 9) — the client should decide which one ships. Calendly is a third-party embed with privacy-notice implications. See concern 10.",
        },
      ],
    },
    {
      id: "commented-out-fragments",
      rendered: false,
      note:
        "Every commented-out fragment inside the components that DO render, kept separate from live copy.",
      fragments: [
        {
          source: "MTIntro/page.tsx line 39",
          markup: "<h2>Elevator Pitch</h2>",
          text: "Elevator Pitch",
          comment:
            "The intro section's real heading. With it commented out, the section has no text heading at all — see section 1 and concern 12.",
        },
        {
          source: "MTIntro/page.tsx line 45",
          markup:
            "<span><img src=\"/imagess/mindlogicx/mediatech/MediaXLogoCropped.webp\" alt=\"\" className=\"media_small_logo\" /></span>",
          text: null,
          comment:
            "An inline second MediaX logo at the head of the paragraph. NOTE: the file /imagess/mindlogicx/mediatech/MediaXLogoCropped.webp was NOT checked into the inventory because it is not rendered; it is referenced only here.",
        },
        {
          source: "MTTabContent/page.tsx lines 94-96",
          markup: "<p>{value.category}</p>",
          text: null,
          comment:
            "Would have printed the category a SECOND time on each card, directly under the <h4> that already prints it.",
        },
        {
          source: "MTTabContent/page.tsx lines 99-101",
          markup:
            "<Link href={value.viewDetails} className=\"btn btn-primary\">View Case Study</Link>",
          text: "View Case Study",
          comment:
            "The missing link on all six impact-story cards. All six point at the same /portfolio/portfolio-details/ page. See concerns 2 and 13b.",
        },
        {
          source: "MTTabContent/page.tsx lines 103-110",
          markup: "<div className=\"shape\"><Image src={value.shapeImage} alt=\"shape\" width={250} height={250} /></div>",
          text: null,
          comment:
            "Decorative shape overlay on each card, alt=\"shape\". Six studie-shape*.webp files are referenced by the data and rendered by nothing.",
        },
        {
          source: "MTTransformingIdle/page.tsx lines 66-71",
          markup: "<Image src={womenWithTable} alt=\"Women\" width={353} height={303} />",
          text: null,
          comment:
            "References an identifier `womenWithTable` that is NOT imported in the file — this would not compile if restored. The alt would have been \"Women\".",
        },
        {
          source: "MTTransformingIdle/page.tsx lines 120-127",
          markup: "<p>{value.shortText}</p> + <Link href={value.detailsLink} className=\"read-more-btn\">Read More</Link>",
          text: "Read More",
          comment:
            "The step descriptions and their links. The descriptions are LOREM IPSUM and the links are href=\"#\". See concern 5 and `loremIpsumInSource` below.",
        },
        {
          source: "MTOurWork/page.tsx lines 53-55, 77-79, 103-105, 129-131, 153-155, 179-181, 222-224",
          markup: "<Link href=\"#\" className=\"link-btn\"><i className=\"pe-7s-link\"></i></Link>",
          text: null,
          comment:
            "An icon-only href=\"#\" placeholder link on EVERY service-module tile — seven of them. This is why nothing in that section is clickable. All were href=\"#\" placeholders even before being commented out, and an icon-only link with no accessible name would have been an a11y failure. See concern 13c.",
        },
        {
          source: "MTOurWork/page.tsx lines 185-203",
          markup: "a complete <div className=\"single-portfolio\"> tile",
          text: "Spatial & Adaptive Audio",
          comment:
            "An EIGHTH service module, fully written, with its image (our_work/SpatialAdaptiveAudio.webp, 480x350, 151,712 B) sitting in public/ and its import still live at the top of the file. Client should say whether this service is offered.",
        },
        {
          source: "MTService/page.tsx lines 52, 56-58",
          markup: "<i className={value.iconName}></i> and <h3><Link href={value.viewDetails}>{value.title}</Link></h3>",
          text: "The MediaTech",
          comment:
            "The product title and its link, commented out inside a component that is itself never imported.",
        },
        {
          source: "MTCraftExperience/page.tsx lines 68-71",
          markup: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          comment:
            "LOREM IPSUM, verbatim, in the not-rendered MTCraftExperience component. Recorded so it is never mistaken for copy.",
        },
        {
          source: "Common/CtaAreaTwo.tsx lines 63-69",
          markup: "<span>So What is Next?</span>",
          text: "So What is Next?",
          comment: "The CTA band's eyebrow line, commented out in the shared component.",
        },
        {
          source: "Common/CtaAreaTwo.tsx line 75",
          markup: "{/* Are You Ready? Let&apos;s get to work! */}",
          text: "Are You Ready? Let&apos;s get to work!",
          comment:
            "A hard-coded alternate CTA heading, left in place above the {content} prop. Recorded with its source HTML entity (&apos;) as written.",
        },
        {
          source: "Common/CtaAreaTwo.tsx lines 94-96",
          markup: "<Link href=\"/partner/\" className=\"custom-btn\">Partner With Us</Link>",
          text: "Partner With Us",
          comment: "A second CTA button pointing at /partner/. See concern 13d.",
        },
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // PLACEHOLDER TEXT PRESENT IN THE SOURCE. Flagged on its own so it cannot be
  // mistaken for copy. None of it renders.
  // --------------------------------------------------------------------------
  loremIpsumInSource: [
    {
      text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      occurrences: 4,
      source:
        "MTTransformingIdle/page.tsx — the identical `shortText` on all four of Imagine, Ideate, Prototype and Produce.",
      rendered: false,
      note: "Its <p> is commented out, which is why the four steps render as bare words. See concern 5.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      occurrences: 1,
      source: "MTCraftExperience/page.tsx lines 68-71 (component never imported).",
      rendered: false,
    },
  ],

  // --------------------------------------------------------------------------
  // Components defined/imported but never rendered on this page.
  // --------------------------------------------------------------------------
  unusedComponents: [
    {
      name: "MTService",
      path: "src/components/MediaTech/MTService/page.tsx",
      reason: "No importer anywhere in src/. Content captured in notRendered[0].",
    },
    {
      name: "MTCraftExperience",
      path: "src/components/MediaTech/Details/MTCraftExperience/page.tsx",
      reason:
        "Referenced only inside a JSX comment in MediaTechComp.tsx line 40, with no import statement. Content captured in notRendered[1].",
    },
    {
      name: "FsLightbox",
      path: "fslightbox-react, imported by MTIntro/page.tsx line 4",
      reason: "Dead third-party import; MTIntro also imports useState and uses neither. No lightbox on the page.",
    },
  ],

  // --------------------------------------------------------------------------
  // Flat image inventory for the asset migration. Paths exactly as referenced
  // in source. Dimensions/bytes measured with python3 + PIL on 2026-10-15
  // against the reference project's public/. NOTHING was copied or modified.
  // All local and same-origin; NO remote URLs; NONE missing from public/.
  // 25 render slots over 24 distinct files (AICreativeAutomation is used twice).
  // --------------------------------------------------------------------------
  images: [
    {
      path: "/imagess/mindlogicx/header_banner/Mediatech.webp",
      usedBy: "banner (CSS background-image)",
      alt: null,
      width: 2050,
      height: 330,
      bytes: 25926,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "6.21:1 strip. No alt attribute possible — decorative background.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/mediax_intro.webp",
      usedBy: "mediax-intro main image",
      alt: "Mindlogicx",
      width: 500,
      height: 515,
      bytes: 202528,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "DECLARED 500x550 in the JSX but the file is 500x515 — a forced 7% vertical stretch. Alt is the company name, not a description. See concerns 12d and 14a.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/new_logo/MediaXLogoHibrid.png",
      usedBy: "mediax-intro heading slot (the MediaX wordmark)",
      alt: "",
      width: 678,
      height: 227,
      bytes: 17514,
      format: "PNG",
      local: true,
      existsInPublic: true,
      note: "EMPTY ALT on the only thing that names the product. Screen readers get nothing. Filename 'Hibrid' is itself a misspelling of 'Hybrid'. PNG where the rest of the page is WEBP. See concern 12e.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/impact_stories/AICreativeAutomation.webp",
      usedBy: "mediax-impact-stories cards 1 and 4 (CSS background-image)",
      alt: null,
      width: 360,
      height: 460,
      bytes: 172568,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "USED TWICE — 'Creative Story Telling' and 'AI + Creative Automation' show the same picture. 360 px wide for a col-lg-4 card; upscales. See concerns 12f and 14c.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/impact_stories/LiveActionVirtualProduction.webp",
      usedBy: "mediax-impact-stories card 2 (CSS background-image)",
      alt: null,
      width: 360,
      height: 460,
      bytes: 133332,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/impact_stories/VFXMotionGraphics.webp",
      usedBy: "mediax-impact-stories card 3 (CSS background-image)",
      alt: null,
      width: 360,
      height: 460,
      bytes: 146930,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/impact_stories/ExperienceAsAService.webp",
      usedBy: "mediax-impact-stories card 5 (CSS background-image)",
      alt: null,
      width: 360,
      height: 460,
      bytes: 138372,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/impact_stories/LocalizationAccessibility.webp",
      usedBy: "mediax-impact-stories card 6 (CSS background-image)",
      alt: null,
      width: 360,
      height: 460,
      bytes: 29122,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "29 KB against 133-173 KB for its five siblings at identical dimensions — likely blank, flat or placeholder art. VERIFY VISUALLY. See concern 14b.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/transforming_idle/Imagine.webp",
      usedBy: "slider step 1 photo",
      alt: "Mindlogicx",
      width: 331,
      height: 450,
      bytes: 125870,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "Declared 330x450; file is 331 wide. Alt does not describe the image.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/transforming_idle/Ideate.webp",
      usedBy: "slider step 2 photo",
      alt: "Mindlogicx",
      width: 331,
      height: 450,
      bytes: 148104,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/transforming_idle/Prototype.webp",
      usedBy: "slider step 3 photo",
      alt: "Mindlogicx",
      width: 331,
      height: 450,
      bytes: 146294,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/transforming_idle/Produce.webp",
      usedBy: "slider step 4 photo",
      alt: "Mindlogicx",
      width: 331,
      height: 450,
      bytes: 131150,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/transforming_idle/logo/Imagine.webp",
      usedBy: "slider step 1 icon",
      alt: "",
      width: 300,
      height: 300,
      bytes: 7992,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "Empty alt. 300x300 rendered into a small icon slot — oversized but cheap.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/transforming_idle/logo/Ideate.webp",
      usedBy: "slider step 2 icon",
      alt: "",
      width: 300,
      height: 300,
      bytes: 6604,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/transforming_idle/logo/PrototypeICON.webp",
      usedBy: "slider step 3 icon",
      alt: "",
      width: 300,
      height: 300,
      bytes: 8938,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "Filename breaks the sibling naming pattern ('PrototypeICON' vs 'Imagine'/'Ideate'/'Produce').",
    },
    {
      path: "/imagess/mindlogicx/mediatech/transforming_idle/logo/Produce.webp",
      usedBy: "slider step 4 icon",
      alt: "",
      width: 300,
      height: 300,
      bytes: 8134,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/our_work/LocalizationAccessibility.webp",
      usedBy: "specialist-service-modules tile 1 (column 1)",
      alt: "Mindlogicx",
      width: 480,
      height: 350,
      bytes: 159714,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "Same label as impact-story card 6 but a DIFFERENT file. See concern 7.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/our_work/CinematicVFXCGI.webp",
      usedBy: "specialist-service-modules tile 2 (column 1)",
      alt: "Mindlogicx",
      width: 480,
      height: 350,
      bytes: 145776,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/our_work/MotionGraphicsDataViz.webp",
      usedBy: "specialist-service-modules tile 3 (column 2)",
      alt: "Mindlogicx",
      width: 480,
      height: 700,
      bytes: 293538,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "The only portrait tile; heaviest file on the page at 293 KB.",
    },
    {
      path: "/imagess/mindlogicx/mediatech/our_work/twoD_3DExplainerAnimation.webp",
      usedBy: "specialist-service-modules tile 4 (column 3)",
      alt: "Mindlogicx",
      width: 480,
      height: 350,
      bytes: 137886,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/our_work/AR_VR_MRContent.webp",
      usedBy: "specialist-service-modules tile 5 (column 3)",
      alt: "Mindlogicx",
      width: 480,
      height: 350,
      bytes: 109048,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/our_work/GenerativeAIImagery.webp",
      usedBy: "specialist-service-modules tile 6 (column 4)",
      alt: "Mindlogicx",
      width: 480,
      height: 350,
      bytes: 172498,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/mediatech/our_work/GreenScreenStudio.webp",
      usedBy: "specialist-service-modules tile 7 (column 4)",
      alt: "Mindlogicx",
      width: 480,
      height: 350,
      bytes: 8498,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      note: "8,498 bytes at 480x350 while its six siblings are 109-293 KB — almost certainly blank or placeholder. VERIFY VISUALLY BEFORE MIGRATING. See concern 14b.",
    },
    {
      path: "/images/mindlogicx/link.gif",
      usedBy: "floating-microsite-link button",
      alt: "",
      width: 200,
      height: 200,
      bytes: 2147,
      format: "GIF",
      local: true,
      existsInPublic: true,
      note: "Animated GIF, empty alt, inside a <div> whose only accessible name is a title attribute. Lives under /images/ not /imagess/. See concern 12g.",
    },
  ],

  // --------------------------------------------------------------------------
  // Assets referenced ONLY by not-rendered or commented-out code. All present
  // in the reference project's public/. Listed so nothing is lost in the
  // migration; none of them should be treated as current page content.
  // --------------------------------------------------------------------------
  unreferencedAssets: [
    {
      path: "/imagess/mindlogicx/mediatech/our_work/LiveEventPackaging.webp",
      width: 480,
      height: 350,
      bytes: 186700,
      existsInPublic: true,
      why: "Imported on line 10 of MTOurWork and NEVER rendered — not even in a comment. There is no 'Live Event Packaging' tile. Is this a missing eighth/ninth service?",
    },
    {
      path: "/imagess/mindlogicx/mediatech/our_work/SpatialAdaptiveAudio.webp",
      width: 480,
      height: 350,
      bytes: 151712,
      existsInPublic: true,
      why: "Used only by the commented-out 'Spatial & Adaptive Audio' tile.",
    },
    { path: "/imagess/case-studies/studie-shape1.webp", width: 258, height: 264, bytes: 5642, existsInPublic: true, why: "Impact-story card 1 `shapeImage`; the markup that would render it is commented out." },
    { path: "/imagess/case-studies/studie-shape2.webp", width: 290, height: 290, bytes: 5240, existsInPublic: true, why: "Impact-story card 2 `shapeImage`; not rendered." },
    { path: "/imagess/case-studies/studie-shape3.webp", width: 253, height: 253, bytes: 3404, existsInPublic: true, why: "Impact-story card 3 `shapeImage`; not rendered." },
    { path: "/imagess/case-studies/studie-shape4.webp", width: 259, height: 269, bytes: 3974, existsInPublic: true, why: "Impact-story card 4 `shapeImage`; not rendered." },
    { path: "/imagess/case-studies/studie-shape5.webp", width: 327, height: 269, bytes: 3904, existsInPublic: true, why: "Impact-story card 5 `shapeImage`; not rendered." },
    { path: "/imagess/case-studies/studie-shape6.webp", width: 260, height: 248, bytes: 1748, existsInPublic: true, why: "Impact-story card 6 `shapeImage`; not rendered." },
    {
      path: "/images/mindlogicx/mediatech/new_logo/MediaXLogo.png",
      width: 1000,
      height: 500,
      bytes: 24224,
      existsInPublic: true,
      why: "Logo for the never-imported MTService card. Note the /images/ (singular) folder, a different asset root from the live page's /imagess/.",
    },
    {
      path: "/images/mindlogicx/mediatech/craft_experience/Craft_Every_Experience.png",
      width: 492,
      height: 941,
      bytes: 301365,
      existsInPublic: true,
      why: "Declared in MTCraftExperience's data and never read by its JSX. 301 KB PNG.",
    },
    { path: "/images/circle.png", width: 905, height: 908, bytes: 32548, existsInPublic: true, why: "MTCraftExperience `circleImage`; never read. A generic template asset." },
    { path: "/images/mindlogicx/mediatech/craft_experience/Discovery.png", width: 300, height: 300, bytes: 27383, existsInPublic: true, why: "MTCraftExperience step icon (component never imported)." },
    { path: "/images/mindlogicx/mediatech/craft_experience/blueprint.png", width: 300, height: 300, bytes: 30369, existsInPublic: true, why: "MTCraftExperience step icon. Lower-case filename breaks the sibling pattern." },
    { path: "/images/mindlogicx/mediatech/craft_experience/Visuals.png", width: 300, height: 300, bytes: 33228, existsInPublic: true, why: "MTCraftExperience step icon." },
    { path: "/images/mindlogicx/mediatech/craft_experience/Launch.png", width: 300, height: 300, bytes: 30863, existsInPublic: true, why: "MTCraftExperience step icon." },
    { path: "/images/mindlogicx/mediatech/craft_experience/flow.png", width: 300, height: 300, bytes: 24756, existsInPublic: true, why: "MTCraftExperience step icon. Lower-case filename." },
    { path: "/images/mindlogicx/mediatech/craft_experience/define.png", width: 300, height: 300, bytes: 33574, existsInPublic: true, why: "MTCraftExperience step icon. Lower-case filename." },
    {
      path: "/imagess/mindlogicx/mediatech/MediaXLogoCropped.webp",
      width: null,
      height: null,
      bytes: null,
      existsInPublic: null,
      why: "Referenced ONLY inside the commented-out inline logo in MTIntro line 45. NOT measured, because it is not a rendered asset — existence in public/ was not checked. Recorded for completeness only.",
    },
  ],

  // Site chrome that renders on this page but is NOT page content. Listed so
  // the inventory above can be audited against the served HTML, which contains
  // 23 <img> tags: 19 of the inventory's render slots (the banner and the six
  // impact-story images are CSS background-images, not <img>) plus these 4.
  excludedChromeImages: [
    "/_next/static/media/logo.aad24224.webp (navbar, alt=\"logo\")",
    "/_next/static/media/logo-white.e0851ed5.webp (navbar, alt=\"logo\")",
    "/_next/static/media/logo-white.3fa0c04c.png (footer, alt=\"Logo\")",
    "/_next/static/media/country_flags.1ac38ccc.webp (footer, alt=\"country\")",
  ],

  // Chrome text present in the served document but belonging to NavbarTwo /
  // Footer, not to this page. Recorded only so the cross-check is auditable
  // and so it is clear these were deliberately excluded from `sections`.
  excludedChromeText: [
    "Dare to Disrupt",
    "Empowering transformation across EdTech, HealthTech,  FinTech and LegalTech",
    "Copyright © 2026 Mindlogicx",
  ],
  excludedChromeNote:
    "Footer tagline/strapline/copyright. NOTE for the chrome extraction: the navbar contains FOUR <a class=\"nav-link\"> elements with href=\"\" (empty) and one with href=\"#\", and the footer tagline carries a double space in 'HealthTech,  FinTech'. Not this page's content, but worth fixing site-wide.",
};

export default mediaTechPage;
