/**
 * Single source of truth for all Mindlogicx copy and imagery on the site.
 *
 * Components never hard-code content — they read it from here, so this module
 * is the contract a CMS would eventually fill. Content is lifted from the
 * previous Mindlogicx site; the layout it renders into comes from the Solutek
 * "home2" design pattern.
 */

export const company = {
  name: 'Mindlogicx',
  legalName: 'Mindlogicx Infratec Limited',
  tagline: 'Global Knowledge Engineering Company',
  /*
   * The brand strapline, shown under the logo in the footer (2026-10-13).
   *
   * Deliberately a separate field from `tagline`. They do different jobs:
   * `tagline` is the descriptor that says what the company *is* and still
   * carries the document `<title>` and the logo's alt text; this is the
   * campaign line. Overwriting `tagline` with it would have left the browser
   * tab reading "Mindlogicx — Dare to Disrupt" with nothing anywhere saying
   * what Mindlogicx does.
   */
  strapline: 'Dare to Disrupt',
  // The all-black lockup, by request (2026-10-12) — it replaced the
  // full-colour mark that had the cyan/purple X. Both carry the
  // "ARCHITECTING THE FUTURE" tagline. The colour file is still in
  // `public/assets/images/logo-dark.png` if it is ever wanted back.
  //
  // Used on every light surface. The artwork's ink is #606060 rather than
  // pure black — that is how the brand file is drawn — which measures 6.29:1
  // on white. Comfortable, and logotypes are exempt from 1.4.3 anyway, but
  // worth knowing before anyone places it on a tinted band.
  //
  // Replaced 2026-10-12 with the client's `logos/logo.png`: a true-black
  // wordmark with the cyan→purple gradient X, on transparency.
  //
  // ⚠️ **It is a different shape — 2410x591, ratio 4.078**, against 3.020 for
  // the flat-black file it replaced. Anywhere this is rendered at a fixed
  // height needs its `width` attribute recomputed (54px tall ⇒ 220 wide), or
  // the reserved box is wrong and the page shifts as it loads.
  //
  // The two files it supersedes are still in `assets/images/`:
  // `logo-black.png` (flat black) and `logo-dark.png` (the original colour).
  logoColor: '/logos/logo.png',
  // All-white knockout, for the dark footer band. Unchanged — the new mark
  // has black type and would disappear there.
  logoWhite: '/assets/images/logo-white.png',
  phone: '+91-9071177765',
  phoneHref: 'tel:+919071177765',
  whatsapp: 'https://wa.me/919071177765',
  email: 'info@mindlogicx.com',
  salesEmail: 'sales@mindlogicx.com',
  address:
    '10/1B, Graphite India Main Rd, KEB Colony, Industrial Area, Whitefield, Bengaluru, Karnataka 560048',
  /*
   * All five now have URLs — the missing three (Facebook, X, YouTube) came
   * from the 2025 frontend's `components/Layouts/Footer.tsx` on 2026-10-15.
   * LinkedIn and Instagram were already here and **match that source
   * exactly**, which is a useful cross-check that the right accounts are
   * being pointed at.
   *
   * Reachability checked, not assumed:
   *
   *   facebook   200
   *   linkedin   200
   *   instagram  200
   *   youtube    200
   *   x          ⚠️ could not be verified — see below
   *
   * ⚠️ **The X account is the one to confirm by hand.** The source writes it
   * as `twitter.com/MindlogicxLtd`, which now redirects to
   * `x.com/MindlogicxLtd`; the redirect target is used here so the link does
   * not take an extra hop. x.com blocks automated requests, so whether that
   * handle is still live and still the company's could not be established
   * from here — the other four were.
   *
   * A `null` href still renders a mark dimmed and non-interactive, so
   * emptying one degrades visibly rather than silently.
   *
   * Order is the comp's, which is also the source's.
   */
  social: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/Mindlogicxlimited/' },
    { id: 'x', label: 'X', href: 'https://x.com/MindlogicxLtd' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://in.linkedin.com/company/mindlogicx' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mindlogicx/' },
    {
      id: 'youtube',
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCYeydK2EBcEFEDK0x8ueLaA',
    },
  ],

  /*
   * The countries strip, supplied 2026-10-12 as **one pre-composed image**
   * (`logos/flags_logo/MLX_Branch_Flag_White-A.png`) rather than as separate
   * flag files — the flags *and* the country names are baked into the
   * artwork. It is re-encoded to a 1600px WebP for the site.
   *
   * ⚠️ **The artwork supersedes the list that was here**, which came from an
   * earlier comp. It adds **Singapore** (seven countries, not six) and puts
   * them in a different order. `countries` below exists only to caption the
   * image — it is the `alt` text, and must be kept in step with the artwork.
   * Changing it changes nothing visible.
   *
   * Because the names are pixels rather than text they cannot be selected,
   * translated or resized by the reader. That is a property of the supplied
   * asset, not a choice; if it matters, ask for the flags as separate files
   * and the previous per-country markup can come back.
   *
   * The white variant is used: the footer band is ink and the dark-text
   * version is unreadable there.
   */
  presenceImage: '/assets/images/flags/presence-strip-white.webp',
  countries: ['India', 'UK', 'USA', 'Ireland', 'UAE', 'Malaysia', 'Singapore'],
};

/**
 * The company-level hero that opened the page before the product carousel
 * replaced it. **Nothing renders this any more** — see `heroSlides` below.
 *
 * Kept rather than deleted: the message itself is not lost from the page
 * (the "Value Innovation for a Future-Ready World" band directly under the
 * hero carries it), and restoring a corporate slide at the front of the
 * carousel is a content decision someone may want back. Along with
 * `footer.callout.title`, these are the only strings in this module that do
 * not appear on the rendered site.
 */
export const hero = {
  // The template's own circuit-pattern backdrop — an abstract design asset, not
  // demo photography, so it ships with the theme and needs no replacement.
  bgImg: '/assets/images/home-3/hero2-bg.jpg',
  mainImage: '/assets/images/home-two/hero2-thu.webp',
  subTitle: 'GLOBAL KNOWLEDGE ENGINEERING',
  title: 'Engineering Knowledge<br> Into Outcomes',
  content:
    'Mindlogicx builds AI-first, secure and scalable platforms across EdTech, FinTech, HealthTech and LegalTech — turning how institutions teach, assess, transact and comply into measurable outcomes.',
  btnText: 'EXPLORE MORE',
  btnLink: '/about',
};

/**
 * Product wordmarks in the strip directly below the hero. The strip sits on a
 * solid accent band, so the white logo variants are used.
 *
 * Defined via a getter below the `products` array so both stay in sync — see
 * `brands` at the end of this module.
 */

/** "Our Focus" — the three strategic pillars, rendered in the services grid. */
export const services = {
  subTitle: 'OUR FOCUS',
  title: 'Strategic Pillars That<br> Drive Our Mission',
  items: [
    {
      img: '/assets/images/home-two/service-icon.png',
      title: 'AI First',
      desc: 'We prioritize artificial intelligence to drive innovation, automate complex tasks, and deliver hyper-personalized learning experiences.',
    },
    {
      img: '/assets/images/home-two/service-icon2.png',
      title: 'ESG & Sustainability',
      desc: 'Our commitment to Environmental, Social and Governance excellence ensures we grow responsibly while empowering local communities.',
    },
    {
      img: '/assets/images/home-two/ser-icon3.png',
      title: 'Global Compliance',
      desc: 'We adhere to the highest international standards of data privacy and educational quality across every country we operate in.',
    },
  ],
};

export const about = {
  bgImg: '/assets/images/home-two/about-bg.png',
  mainImg: '/assets/images/home-two/about-thu2.webp',
  subTitle: 'ABOUT MINDLOGICX',
  title: 'Value Innovation for a<br> Future-Ready World',
  content:
    'The future does not belong to companies that iterate — it belongs to those who innovate with purpose. We are strategists, creatives and technologists building differentiated, future-proof platforms.',
  listTitle1: 'Rethinking value delivery across every domain we operate in',
  listTitle2: 'Designing emotionally resonant, outcome-driven experiences',
  contactText: 'Talk To Us',
  number: company.phone,
};

/** Leadership, shown in the team grid. Photos are MLX's own. */
export const team = {
  subTitle: 'OUR LEADERSHIP',
  title: 'The Minds Behind Mindlogicx',
  members: [
    {
      img: '/assets/images/home-two/team-thu1.webp',
      title: 'Suresh Elangovan',
      desc: 'FOUNDER, CHAIRMAN & CEO',
    },
    {
      img: '/assets/images/home-two/team-thu2.webp',
      title: 'Kunal Mondal',
      desc: 'EXECUTIVE DIRECTOR & COO',
    },
    {
      img: '/assets/images/home-two/team-thu3.webp',
      title: 'Srijith P S',
      desc: 'DIRECTOR – INSTITUTIONAL SALES',
    },
    {
      img: '/assets/images/home-two/team-thu4.webp',
      title: 'Pradeep Kumar Kabade',
      desc: 'DIRECTOR & CTO',
    },
  ],
};

/**
 * The Intelli product family, shown in the platform carousel.
 *
 * Taglines are taken verbatim from the official product logos in
 * `public/logos/products` — they are not marketing copy written for this site.
 * Card artwork composites a thematically-matched photo with the product's white
 * wordmark, so each card identifies itself without relying on hover.
 */
export const products = [
  {
    slug: 'intelliexams',
    title: 'IntelliEXAMS®',
    tagline: 'Assessment Intelligence',
    img: '/assets/images/products/intelliexams.webp',
    logo: '/logos/products/intelliexams-colour.webp',
    logoWhite: '/logos/products/intelliexams-white.webp',
    link: '/intelliexams',
  },
  {
    slug: 'intelliwork',
    title: 'IntelliWORK™',
    tagline: 'Workforce Intelligence',
    img: '/assets/images/products/intelliwork.webp',
    logo: '/logos/products/intelliwork-colour.webp',
    logoWhite: '/logos/products/intelliwork-white.webp',
    link: '/intelliwork',
  },
  {
    slug: 'intelliosm',
    title: 'IntelliOSM™',
    tagline: 'Marking Intelligence',
    img: '/assets/images/products/intelliosm.webp',
    logo: '/logos/products/intelliosm-colour.webp',
    logoWhite: '/logos/products/intelliosm-white.webp',
    link: '/products/intelliosm',
  },
  {
    slug: 'intellitute',
    title: 'IntelliTUTE™',
    tagline: 'Learning Intelligence',
    img: '/assets/images/products/intellitute.webp',
    logo: '/logos/products/intellitute-colour.webp',
    logoWhite: '/logos/products/intellitute-white.webp',
    link: '/intellitute',
  },
  {
    slug: 'intellithesis',
    title: 'IntelliTHESIS™',
    tagline: 'Research Intelligence',
    img: '/assets/images/products/intellithesis.webp',
    logo: '/logos/products/intellithesis-colour.webp',
    logoWhite: '/logos/products/intellithesis-white.webp',
    link: '/products/intellithesis',
  },
];

/** White product wordmarks for the accent-coloured strip below the hero. */
export const brands = products.map((p) => p.logoWhite);

/**
 * The home page hero carousel.
 *
 * **These are capability slides, not product slides.** They replaced a
 * product-per-slide carousel, and that change took three things with it:
 *
 *   - **No product lockups.** The logo that used to sit above each headline
 *     was the product's own mark; none of these slides is a product.
 *     Slides a–d carry an eyebrow in that position instead, and slide e
 *     carries nothing there.
 *   - **No per-slide link.** Each slide used to open its product's page.
 *     There is no equivalent destination for "Security by Design", so the
 *     button has none — see `heroCtaText` below.
 *   - **No `products` lookup.** Nothing here is keyed to a slug any more.
 *
 * Copy is transcribed exactly as supplied. Four of the five repeat their
 * eyebrow in the opening words of the headline ("SECURITY BY DESIGN" above
 * "Security by Design. Built from…"); that is how the copy was written and
 * is not trimmed here.
 *
 * `id` is the React list key — named `id` rather than `key` because `key` is
 * a reserved prop, and a data field called `key` becomes a real bug the day
 * someone spreads the slide object onto an element.
 *
 * `name` exists only for assistive technology — the slide labels and the
 * pagination dots announce it. For a–d it is the eyebrow; slide e has no
 * eyebrow, so it takes the first sentence of its heading.
 *
 * Slide e is the only one with a supporting paragraph.
 */
/**
 * Slide colour.
 *
 * The palette is two brand colours, so the five slides **alternate** purple,
 * cyan, purple, cyan, purple rather than each holding a hue of its own.
 *
 * Each carries the pair `accent` + `onAccent`, because the two are
 * near-opposites in contrast and a fixed label colour would fail on one of
 * them:
 *
 *     purple fill + white label   8.89:1
 *     cyan   fill + ink label     7.38:1
 *     cyan   fill + white label   2.53:1   <- what a fixed white would give
 *
 * Exported, because the platforms row alternates from the same pair. The two
 * sections alternate by **their own position**, not by any shared key.
 *
 * `accent` paints the slide's button and the rule under the counter. It does
 * **not** paint the active pagination dot, nor any coloured run in the
 * heading: both are things that must be read, and cyan is 2.53:1 on the
 * scrimmed artwork. `ls.css` holds those at purple.
 */
export const BRAND = [
  { accent: '#712d7b', onAccent: '#ffffff' }, // purple
  { accent: '#00aeef', onAccent: '#121217' }, // cyan
];

/*
 * Hero backdrops, replaced 2026-10-12 with photography shot for these five
 * capability slides. They supersede the five product backdrops that were here
 * — those were artwork for IntelliEXAMS, IntelliTUTE and so on, left over
 * from when the hero was a product carousel, and had nothing to do with the
 * slides they were sitting behind.
 *
 * **Keyed by slide id, not by index.** The previous array was positional, so
 * the backdrops and the slides were two lists that had to be kept in the same
 * order by hand — reordering one silently mismatched every slide. Looking up
 * by id makes that impossible.
 *
 * **Replaced 2026-10-14** with a second set of client artwork, same five
 * subjects and the same five filenames. Supplied as 1672×941 PNGs at ~1.9MB
 * each (9.5MB for the set); re-encoded to WebP at 0.46MB total. The PNG
 * originals were deleted at the client's request, as were the previous
 * backdrops and their `new_bg/` originals.
 *
 * Every frame puts its subject on the **right** and leaves the left open.
 * That is what the hero's left-to-right scrim and left-aligned copy depend
 * on; a frame with its subject on the left would put the copy on top of it.
 * Check that before swapping any one of these.
 *
 * ⚠️ These five are also the artwork on `/knowledge-engineering` and
 * `/ai-first` (see the `ART` map at the top of each page component). Swapping
 * a backdrop changes both places.
 */
const BACKDROPS = {
  'knowledge-engineering': '/assets/images/hero_background/knowledge-engineering.webp',
  'ai-native': '/assets/images/hero_background/ai-native.webp',
  'security-by-design': '/assets/images/hero_background/security-by-design.webp',
  'built-for-trust': '/assets/images/hero_background/built-for-trust.webp',
  'one-world': '/assets/images/hero_background/one-world.webp',
};

export const heroSlides = [
  {
    id: 'knowledge-engineering',
    name: 'Knowledge Engineering',
    eyebrow: 'Knowledge Engineering',
    heading: 'Engineering That Transforms Knowledge into Intelligence.',
  },
  {
    id: 'ai-native',
    name: 'AI-Native',
    eyebrow: 'AI-Native',
    heading: 'AI-Native Products. Human-Led Intelligence.',
  },
  {
    id: 'security-by-design',
    name: 'Security by Design',
    eyebrow: 'Security by Design',
    heading: 'Security by Design. Built from the Ground Up. Never Retrofitted.',
  },
  {
    id: 'built-for-trust',
    name: 'Built for Trust',
    eyebrow: 'Built for Trust',
    heading: 'Built for Trust. Globally Compliant Products &amp; Solutions.',
  },
  {
    id: 'one-world',
    name: 'One World. One Digital Operating System.',
    // No eyebrow on this one, by request.
    heading: 'One World. One Digital Operating System.<br>Engineered for scale.',
    /*
     * Commented out 2026-10-12, by request — not deleted, so it can be put
     * back by uncommenting. This was the only hero slide with a supporting
     * paragraph; with it gone, all five slides are heading-only and
     * `.ls-heroslide__text` renders nowhere.
     *
     * content:
     *   'A unified digital foundation engineered to support global audiences, consistent operations and scalable institutional ecosystems.',
     */
  },
].map((slide, i) => ({
  ...slide,
  // Alternating, by position in the carousel.
  ...BRAND[i % BRAND.length],
  /*
   * Looked up by `slide.id`, so the backdrop cannot drift from the slide if
   * either list is reordered. A slide with no entry gets `undefined` and the
   * hero renders no image rather than someone else's — which is the right
   * failure, and loud enough to notice.
   */
  bg: BACKDROPS[slide.id],
}));

/**
 * The label on every hero slide's call to action.
 *
 * **The button has no destination.** These slides are capabilities rather
 * than products, and only three of the five have a route that would make
 * sense ("Knowledge Engineering", "AI-Native", "Built for Trust"); inventing
 * one for the other two is not an option. It is kept on every slide by
 * request and rendered as a real `<button>` — focusable and announced, so it
 * is not the hrefless `<a>` the reference ships — but pressing it currently
 * does nothing. Give each slide a `link` and `Hero.jsx` will render a router
 * `Link` instead.
 */
export const heroCtaText = 'Learn More';

/**
 * "What We Do" — the knowledge-engineering section, second on the home page.
 *
 * Copy is transcribed verbatim from the supplied comp and is not edited here,
 * including its em dashes.
 *
 * `quote` is the pull-out with the purple rule beside it. It deliberately
 * restates `lead` in tighter language — that repetition is in the comp and is
 * how the section was written, not an oversight to tidy up.
 *
 * `image` is a **placeholder**. The real one is coming; this is an existing
 * Mindlogicx photograph of roughly the right subject and crop, so the layout
 * can be judged now. Swap the path and nothing else changes.
 */
export const whatWeDo = {
  subTitle: 'WHAT WE DO',
  title: 'We Engineer<br>Knowledge.',
  lead: 'Institutions hold decades of knowledge — some written down, most of it not. Knowledge Engineering is the discipline of capturing both, and converting them into digital infrastructure the institution owns and governs.',
  quote:
    'Knowledge Engineering is the discipline of capturing implicit and explicit knowledge and converting it into digital infrastructure that is structured, governed and monetizable.',
  image: '/assets/images/home/we-engineer-knowledge.webp',
  linkText: 'Discover Knowledge Engineering',
  link: '/knowledge-engineering',
  /** `icon` keys into the glyph set in `common/icons.jsx`. */
  pillars: [
    {
      icon: 'Structured',
      title: 'Structured',
      desc: 'Knowledge is captured, classified and modelled so machines and people can both act on it. Unstructured expertise becomes an addressable asset.',
    },
    {
      icon: 'Governed',
      title: 'Governed',
      desc: 'Ownership, access, versioning, approval and audit are enforced by the platform. Knowledge stays accurate, attributable and defensible.',
    },
    {
      icon: 'Monetizable',
      title: 'Monetizable',
      desc: 'Governed knowledge becomes products, services, certification and intelligence the institution can operate — and derive value from — at scale.',
    },
  ],
};

/**
 * "Where We Apply It" — the sector rail, third on the home page.
 *
 * Built to a supplied comp. Two things in it were overridden by request:
 *
 *   - **The title.** The comp reads "Knowledge Engineering for complex
 *     industries."; the supplied one is used instead. Note it is word for word
 *     the first hero slide's headline, so the phrase now appears twice on the
 *     page — once at the top, once here.
 *   - **The cards.** The comp's three (Financial Services, Legal, Space &
 *     Emerging Technologies) were dropped for these five sectors, which are
 *     the same five the Technology menu lists, pointing at the same routes.
 *
 * `eyebrow` and `lead` are the comp's own, kept because only the title and
 * the cards were overridden.
 *
 * **No card descriptions.** The comp has a paragraph on each card; only the
 * five names were supplied, and writing the copy would be inventing it. The
 * component renders `desc` when it is there, so filling these in is the only
 * change needed.
 *
 * **`image` is a placeholder on every card** — existing Mindlogicx artwork,
 * one per sector, so the layout can be judged now.
 *
 * `cta` has no destination; see `Industries.jsx`.
 */
export const industries = {
  subTitle: 'WHERE WE APPLY IT',
  title: 'Engineering That Transforms Knowledge into Intelligence.',
  lead: 'Where knowledge is specialised, regulated and consequential, structure and governance are not optional.',
  /** ⚠️ No longer rendered — the "Explore Solutions" button was removed from
   *  this section on 2026-10-12. Kept in case it returns. */
  ctaText: 'Explore Solutions',
  /** `icon` keys into the glyph set in `common/icons.jsx`. */
  sectors: [
    {
      slug: 'education',
      title: 'Education',
      icon: 'EdTech',
      desc: '',
      image: '/assets/images/sectors/education.webp',
      link: '/ed-tech',
    },
    {
      slug: 'healthcare',
      title: 'HealthCare',
      icon: 'HealthTech',
      desc: '',
      image: '/assets/images/sectors/healthcare.webp',
      link: '/health-tech',
    },
    {
      slug: 'media',
      title: 'Media',
      icon: 'Media',
      desc: '',
      image: '/assets/images/sectors/media.webp',
      link: '/media-tech',
    },
    {
      slug: 'legal',
      title: 'Legal',
      icon: 'LegalTech',
      desc: '',
      image: '/assets/images/sectors/legal.webp',
      link: '/voice-of-law',
    },
    {
      slug: 'finance',
      title: 'Finance',
      icon: 'FinTech',
      desc: '',
      image: '/assets/images/sectors/finance.webp',
      link: '/mxpay',
    },
  ],
};

/**
 * "How We Make It Intelligent" — the MindGENIE section.
 *
 * Copy, agent list and the hexagon image are taken **verbatim** from the
 * Mindlogicx 2025 frontend (`mlx-website-2025-frontend`), where this section
 * is `components/sections/MindGenie.tsx` reading `content/mindgenie.ts`. The
 * design is reproduced as it is there, re-expressed in this site's pattern:
 * its Tailwind `tone="inverse"` section becomes `.ls-section--ink`, and its
 * accent colour becomes this build's cyan, which is the colour that reads on
 * a dark band.
 *
 * Note the source's typographic apostrophes are preserved.
 */
export const mindgenie = {
  eyebrow: 'HOW WE MAKE IT INTELLIGENT',
  headline: 'One Intelligence Layer. Across the Ecosystem.',
  body: 'MindGENIE is the agentic intelligence layer running across every Mindlogicx product and solution — reasoning over governed knowledge, executing workflows and evidencing every action.',
  definition:
    'MindGENIE is the agentic intelligence layer of Mindlogicx. It reasons over structured institutional knowledge, executes governed workflows, evaluates work products, produces analysis and enforces the controls that make automation accountable.',
  principle: 'MindGENIE Evaluates. Faculty Validates. Academic Expertise Decides.',
  humanInTheLoop:
    'Agents propose. People decide. Every consequential output passes through a named human authority, and both the proposal and the decision are recorded.',
  ctaText: 'Discover MindGENIE',
  ctaLink: '/mindgenie',
  /** The hexagonal core of the orchestration diagram. Copied from the source. */
  coreImage: '/assets/images/mindgenie.png',
};

/** The six agent classes, in the source's order. `glyph` keys into `icons.jsx`. */
export const agents = [
  {
    id: 'knowledge',
    name: 'Knowledge Agents',
    role: 'Capture & Structure',
    body: 'Capture implicit and explicit knowledge, classify it against institutional taxonomy, and maintain it as a governed, versioned asset.',
    glyph: 'AgentKnowledge',
  },
  {
    id: 'workflow',
    name: 'Workflow Agents',
    role: 'Execute & Orchestrate',
    body: 'Execute multi-step institutional workflows, route work to the correct authority and handle exceptions within defined control boundaries.',
    glyph: 'AgentWorkflow',
  },
  {
    id: 'assessment',
    name: 'Assessment Agents',
    role: 'Evaluate & Propose',
    body: 'Evaluate responses, scripts and submissions against encoded rubrics, and propose outcomes with supporting rationale for human validation.',
    glyph: 'AgentAssessment',
  },
  {
    id: 'advisory',
    name: 'Advisory Agents',
    role: 'Guide & Recommend',
    body: 'Provide contextual guidance to learners, practitioners and administrators, grounded in the institution\u2019s own governed knowledge base.',
    glyph: 'AgentAdvisory',
  },
  {
    id: 'analytics',
    name: 'Analytics Agents',
    role: 'Analyse & Report',
    body: 'Analyse operational, academic and capability data, detect deviation, and report findings to institutional dashboards.',
    glyph: 'AgentAnalytics',
  },
  {
    id: 'governance',
    name: 'Governance Agents',
    role: 'Control & Evidence',
    body: 'Enforce policy, access and approval rules, and record an immutable evidence trail across every agent action.',
    glyph: 'AgentGovernance',
  },
];

/*
 * WHY MINDLOGICX
 *
 * Verbatim from the Mindlogicx 2025 frontend: the section head is
 * `homeSections.credibility` and the figures and pillars are `metrics` and
 * `trustPillars` from `content/operations.ts`. The glyph names are this
 * build's; the source picks the same four marks by index.
 *
 * The figures are claims about the company — twenty years, ten million users,
 * six centres, five products. They are carried across unchanged and should be
 * re-confirmed with the client before this goes live, not edited to taste.
 */
export const whyMindlogicx = {
  eyebrow: 'Why Mindlogicx',
  headline: 'Built to scale. Engineered for trust.',
  body: 'Two decades of building systems that institutions depend on, under governance that holds up to audit.',
  ctaText: 'Why Mindlogicx',
  ctaLink: '/why-mindlogicx',
  image: '/assets/images/why-mindlogicx.jpg',
};

export const metrics = [
  { value: 20, suffix: '+', label: 'Years', glyph: 'AgentKnowledge' },
  { value: 10, suffix: 'M+', label: 'Users', glyph: 'AgentAnalytics' },
  // Relabelled by the client on 2026-10-12. These two no longer match the
  // source project's wording ("Regional Operating Centres", "Proprietary
  // Products") — this file is the authority now, not the port.
  { value: 6, label: 'Regional Operations', glyph: 'AgentGovernance' },
  { value: 5, label: 'Service verticals', glyph: 'AgentStructured' },
];

export const trustPillars = [
  {
    title: 'AI-First',
    body: 'MindGENIE is engineered into the product architecture, not attached to it.',
  },
  {
    title: 'Secure by Design',
    body: 'Access, data and workflow controls are designed in from the first release.',
  },
  {
    title: 'Compliance-Aligned',
    body: 'Built to evidence the controls institutional and regulated buyers require.',
  },
  {
    title: 'Cloud-Agnostic',
    body: 'Deploys across public cloud, private cloud and institutional infrastructure.',
  },
];

/*
 * THE EDUCATION PAGE  (/ed-tech)
 *
 * Created 2026-10-12, when the six platforms were taken out of the Technology
 * menu and given a page of their own.
 *
 * `proposition` and `description` are **verbatim** from the Mindlogicx 2025
 * frontend's `content/products.ts`. Nothing here was written for this build —
 * these are positioning statements about real products.
 *
 * ⚠️ **IntelliMINDS is an approved placeholder, not an oversight.** The
 * source project marks it `status: 'placeholder'` and says in its own copy
 * that the positioning has not been signed off. It is carried across with
 * that wording intact, has no logo and no photograph, and the page renders it
 * visibly differently so nobody mistakes it for finished copy. Do not invent
 * text for it.
 */
export const educationPage = {
  eyebrow: 'Technology / Education',
  /* Numerals, not words — house rule from 2026-10-13: quantities are written
     as digits. Was "Six platforms. One governed learner journey." */
  title: '6 platforms. 1 governed learner journey.',
  lead: 'The Mindlogicx education portfolio covers assessment, marking, learning, workforce capability and research — each a proprietary platform, each running on the same governed knowledge layer.',
  products: [
    {
      slug: 'intelliexams',
      name: 'IntelliEXAMS®',
      tagline: 'Assessment Intelligence',
      proposition:
        'Digital assessment infrastructure supporting high-stakes examinations and continuous assessment.',
      description:
        'Unified digital assessment infrastructure covering high-stakes event-based examinations and continuous student lifecycle assessment.',
      logo: '/logos/products/intelliexams-colour.webp',
      /*
       * Reverted to the photograph 2026-10-13 at the client's request. The
       * animated capability diagram that was here (GIF + WebP + still frame)
       * is kept in `public/assets/images/aboutus/` — restoring it means
       * putting `image`/`imageAnim`/`imageStill`/`diagram` back; `Education`
       * switches to `<picture>` whenever `imageStill` is present.
       *
       * The alt text was rewritten with it: the old one described the
       * diagram's labelled stages, which this photograph does not show.
       */
      image: '/assets/images/products/intelliexams.webp',
      alt: 'A technician reviewing analytics on a tablet beside a screen showing an AI dashboard.',
      link: '/intelliexams',
    },
    {
      slug: 'intellitute',
      name: 'IntelliTUTE™',
      tagline: 'Learning Intelligence',
      proposition: 'A unified ecosystem connecting Academy, Assessment, Certification and Career.',
      description:
        'A unified ecosystem connecting Academy, Assessment, Certification and Career into a single governed learner journey.',
      logo: '/logos/products/intellitute-colour.webp',
      /*
       * Reverted to the photograph 2026-10-13 at the client's request. The
       * animated capability diagram that was here (GIF + WebP + still frame)
       * is kept in `public/assets/images/aboutus/` — restoring it means
       * putting `image`/`imageAnim`/`imageStill`/`diagram` back; `Education`
       * switches to `<picture>` whenever `imageStill` is present.
       *
       * The alt text was rewritten with it: the old one described the
       * diagram's labelled stages, which this photograph does not show.
       */
      image: '/assets/images/products/intellitute.webp',
      alt: 'Two interviewers taking notes as a candidate answers across the desk.',
      link: '/intellitute',
    },
    {
      slug: 'intelliosm',
      name: 'IntelliOSM™',
      tagline: 'Marking Intelligence',
      proposition:
        'AI-assisted On-Screen Marking combining MindGENIE intelligence with Human-in-the-Loop governance.',
      description:
        'AI-assisted On-Screen Marking combining MindGENIE intelligence with Human-in-the-Loop academic governance.',
      logo: '/logos/products/intelliosm-colour.webp',
      image: '/assets/images/products/intelliosm.webp',
      alt: 'A marker reviewing a scanned script on screen.',
      link: '/products/intelliosm',
    },
    {
      slug: 'intelliwork',
      name: 'IntelliWORK™',
      tagline: 'Workforce Intelligence',
      proposition:
        'Transform organisational knowledge into structured learning, assessment, certification and workforce intelligence.',
      description:
        'Converts organisational knowledge into structured learning, assessment, certification and workforce capability intelligence.',
      logo: '/logos/products/intelliwork-colour.webp',
      /*
       * Reverted to the photograph 2026-10-13 at the client's request. The
       * animated capability diagram that was here (GIF + WebP + still frame)
       * is kept in `public/assets/images/aboutus/` — restoring it means
       * putting `image`/`imageAnim`/`imageStill`/`diagram` back; `Education`
       * switches to `<picture>` whenever `imageStill` is present.
       *
       * The alt text was rewritten with it: the old one described the
       * diagram's labelled stages, which this photograph does not show.
       */
      image: '/assets/images/products/intelliwork.webp',
      alt: 'Two colleagues reviewing printed reports with an employee across the table.',
      link: '/intelliwork',
    },
    {
      slug: 'intellithesis',
      name: 'IntelliTHESIS™',
      tagline: 'Research Intelligence',
      proposition:
        'AI-assisted research and thesis evaluation supporting institutional research workflows.',
      description:
        'AI-assisted research and thesis evaluation that supports submission, similarity analysis, reviewer workflow and academic governance.',
      logo: '/logos/products/intellithesis-colour.webp',
      image: '/assets/images/products/intellithesis.webp',
      alt: 'A researcher annotating a thesis draft.',
      link: '/products/intellithesis',
    },
    {
      slug: 'intelliminds',
      name: 'IntelliMINDS',
      tagline: 'Cognitive Intelligence',
      placeholder: true,
      proposition: 'Placeholder — positioning copy for IntelliMINDS has not been approved yet.',
      description:
        'Placeholder. IntelliMINDS is part of the Mindlogicx education portfolio; its approved positioning, capabilities and outcomes are still being finalised and will replace this text.',
      logo: null,
      image: null,
      alt: '',
      link: '/products/intelliminds',
    },
  ],
};

/*
 * MEMBERSHIPS & AFFILIATIONS
 *
 * ⚠️ **Every logo here is a placeholder.** The organisations below are real
 * third parties and their marks were not supplied, so each tile renders the
 * organisation's name set in type instead. Nothing here is a reproduction of
 * anyone's logo and nothing should be invented — drop the real file in
 * `public/assets/images/affiliations/` and set `logo` on the entry; the tile
 * swaps from the name to the image with no other change.
 *
 * `note` is the qualifier the client gave for that entry (Don Bosco's
 * "Strategic Technology Partner"). It renders under the name when present.
 *
 * The trade-body entries are deliberately one tile per country rather than a
 * single "Trade bodies" tile, because each will be a different organisation
 * with its own mark. The names are the countries as given; **the actual body
 * for each still needs naming** (e.g. which UK chamber), which is why `name`
 * is phrased as a country and not as an organisation.
 */
export const affiliations = {
  subTitle: 'Memberships & Affiliations',
  title: 'Recognised across the networks we operate in.',
  /*
   * `mark` names a placeholder drawing in `icons.jsx` — an abstract geometric
   * lockup that resembles no real organisation's logo. It is used only while
   * `logo` is null; set `logo` to a real file and the tile shows that instead
   * and the mark is ignored.
   *
   * `name` and `note` are no longer printed on the tile (2026-10-12, by
   * request: logos only). They are still the tile's accessible name, so the
   * section does not become eight unlabelled shapes to a screen reader.
   */
  items: [
    { id: 'eaa', name: 'eAA', note: 'e-Assessment Association member', mark: 'MarkRing', logo: null },
    { id: 'don-bosco', name: 'Don Bosco Group', note: 'Strategic Technology Partner', mark: 'MarkHex', logo: null },
    { id: 'iiba', name: 'IIBA', note: 'Indo Irish Business Association', mark: 'MarkArc', logo: null },
    { id: 'trade-my', name: 'Malaysia', note: 'Trade body', mark: 'MarkBars', logo: null },
    { id: 'trade-sg', name: 'Singapore', note: 'Trade body', mark: 'MarkSquare', logo: null },
    { id: 'trade-ae', name: 'UAE', note: 'Trade body', mark: 'MarkChevron', logo: null },
    { id: 'trade-uk', name: 'United Kingdom', note: 'Trade body', mark: 'MarkTriangle', logo: null },
    { id: 'trade-us', name: 'United States', note: 'Trade body', mark: 'MarkGrid', logo: null },
  ],
};

export const projects = {
  subTitle: 'OUR PLATFORMS',
  title: 'Intelligence, Engineered<br> Into Every Product',
  items: products.map((p) => ({
    img: p.img,
    title: p.title,
    desc: p.tagline.toUpperCase(),
    link: p.link,
  })),
};

export const testimonials = {
  subTitle: 'OUR STRENGTH',
  title: 'What Sets Mindlogicx Apart',
  items: [
    {
      image: '/assets/images/testi4.png',
      title: 'Value Innovation',
      subTitle: 'STRATEGY',
      desc: 'We go beyond incremental change — helping clients leap ahead by rethinking value delivery and aligning with where the future is headed.',
    },
    {
      image: '/assets/images/testi5.png',
      title: 'Creative Marketing',
      subTitle: 'BRAND',
      desc: 'Designing emotionally resonant brand experiences that connect institutions with the learners, patients and citizens they serve.',
    },
    {
      image: '/assets/images/testi6.png',
      title: 'Futuristic',
      subTitle: 'TECHNOLOGY',
      desc: 'AI-first platforms engineered for scale, security and compliance — built for where education and enterprise are going, not where they have been.',
    },
  ],
};

/** "Domains We Operate" — rendered in the four-step process band. */
export const process = {
  subTitle: 'DOMAINS WE OPERATE',
  title: 'Innovation Across<br> Four Frontiers',
  description:
    'Mindlogicx operates where technology meets human potential — reimagining how institutions educate, how finance reaches people, how clinicians train, and how justice is understood.',
  steps: [
    {
      img: '/assets/images/home-two/project-icon.png',
      title: 'EdTech',
      content: 'Cloud-native assessment and employability platforms for institutions worldwide.',
      link: '/ed-tech',
    },
    {
      img: '/assets/images/home-two/project-icon2.png',
      title: 'FinTech',
      content: 'KYC-secure onboarding, risk simulation and embedded payments in one stack.',
      link: '/mxpay',
    },
    {
      img: '/assets/images/home-two/project-icon3.png',
      title: 'HealthTech',
      content: 'HIPAA-ready upskilling for medical professionals through MasterHealthPro.',
      link: '/health-tech',
    },
    {
      img: '/assets/images/home-two/project-icon4.png',
      title: 'LegalTech',
      content: 'Making law accessible and understandable through Voice of Law.',
      link: '/voice-of-law',
    },
  ],
};

export const blog = {
  subTitle: 'NEWSROOM',
  title: 'Insights & Latest News',
  posts: [
    {
      img: '/assets/images/inner/blog-grid1.webp',
      category: 'HEALTHTECH',
      title: 'How Online CME Is Reinventing Physician Upskilling',
      link: '/news-room',
    },
    {
      img: '/assets/images/inner/blog-grid2.webp',
      category: 'EDTECH',
      title: 'How AI and JIT Delivery Are Making Testing Leak-Proof',
      link: '/news-room',
    },
    {
      img: '/assets/images/inner/blog-grid3.webp',
      category: 'WELLNESS',
      title: 'The Rise of Personalised Nutrition and Gender-Smart Supplements',
      link: '/news-room',
    },
  ],
};

/**
 * Primary navigation.
 *
 * Three levels deep: Technology → Education → the platform list. `Header`
 * renders that as one flat panel with a column per level rather than as
 * nested hover flyouts, which are unusable on a touchscreen and hard to drive
 * from a keyboard.
 *
 * Four things worth knowing about what is and is not here:
 *
 * 1. **No "Home".** The logo is the home link, which is the convention and
 *    saves a slot in a row that now carries six labels.
 *
 * 2. **"Global Compliance" is gone** from the menu. Nothing links to
 *    `/global-compliance` any more; the route still resolves to the
 *    placeholder if anyone has the URL.
 *
 * 3. **Sector links reuse the routes the footer already points at** —
 *    `/ed-tech`, `/health-tech`, `/voice-of-law`, `/mxpay` — so the two
 *    menus cannot drift apart. Media is the exception: there has never been
 *    a MediaTech route, so `/media-tech` is new here.
 *
 * 4. **IntelliMINDS has no product record.** It is not in `products`, so it
 *    has no tagline, no artwork, and no logo file in
 *    `public/logos/products/` — unlike the other five. It appears here as a
 *    label and a placeholder route only. That is also why this menu shows no
 *    product logos at all: five marks and one gap reads as a broken image,
 *    and inventing a sixth mark is not an option. Restoring logos to the menu
 *    means sourcing an IntelliMINDS one first.
 *
 * Every route below except `/about` currently renders `Placeholder`.
 */
const byProductSlug = Object.fromEntries(products.map((p) => [p.slug, p]));

/**
 * The platform list, in the order the menu was specified — which is not the
 * order `products` is in. Names come from the catalogue so the trademark
 * symbols stay correct; IntelliMINDS carries none, because its status is not
 * recorded anywhere.
 *
 * **No longer in the navigation.** The six platforms were a third level under
 * Technology › Education until 2026-10-12, when that nesting was dropped by
 * request. Education is now a plain link to `/ed-tech`, which is the page
 * that lists them — so this array is what `educationPage` below is built
 * from, and it is exported for that.
 */
export const educationPlatforms = [
  'intelliexams',
  'intellitute',
  'intelliosm',
  'intelliwork',
  'intellithesis',
]
  .map((slug) => ({ label: byProductSlug[slug].title, link: byProductSlug[slug].link }))
  .concat({ label: 'IntelliMINDS', link: '/products/intelliminds' });

/**
 * The Technology dropdown is one flat row of five sectors — no third level.
 * `icon` keys into `ContentIcon`; they are the same marks the "Where We Apply
 * It" cards use, so a sector looks the same wherever it appears.
 */
export const navigation = [
  { label: 'About Us', link: '/about' },
  { label: 'Knowledge Engineering', link: '/knowledge-engineering' },
  {
    label: 'Technology',
    link: '#',
    submenu: [
      { label: 'Education', link: '/ed-tech', icon: 'EdTech' },
      { label: 'Healthcare', link: '/health-tech', icon: 'HealthTech' },
      { label: 'Media', link: '/media-tech', icon: 'Media' },
      { label: 'Legal', link: '/voice-of-law', icon: 'LegalTech' },
      { label: 'Finance', link: '/mxpay', icon: 'FinTech' },
    ],
  },
  { label: 'AI First', link: '/ai-first' },
  { label: 'ESG', link: '/esg-sustainability' },
  { label: 'Partner', link: '/partner' },
];

export const footer = {
  callout: {
    title: 'Empowering Innovation Across Industries.',
    number: company.phone,
  },
  blurb:
    'Mindlogicx is a global knowledge engineering company building AI-first platforms across EdTech, FinTech, HealthTech and LegalTech.',
  newsletter:
    'Subscribe for product releases, research and newsroom updates from Mindlogicx.',
  /*
   * The Company column. "Our Leadership" was removed 2026-10-12 — it pointed
   * at `/about`, the same page as "About Company" directly above it.
   */
  usefulLinks: [
    { title: 'Global Compliance', link: '/global-compliance' },
    { title: 'Newsroom', link: '/news-room' },
    { title: 'Careers', link: '/careers' },
    { title: 'Privacy Policy', link: '/privacy-policy' },
    { title: 'Terms & Conditions', link: '/terms-and-conditions' },
    { title: 'Contact Us', link: '/contact-us' },
  ],

  /*
   * The third column: the two products with live public sites of their own.
   *
   * These are **external**, unlike every other footer link, so they render
   * with `target="_blank"` and `rel="noreferrer noopener"`.
   *
   * ⚠️ `themediax.ai` was given as a bare name rather than a URL. It is taken
   * at face value as its own domain, which is the obvious reading — but it has
   * not been confirmed, and it is the one address here nobody supplied in
   * full. Worth checking before this ships.
   */
  external: [
    { title: 'IntelliEXAMS', link: 'https://intelliexams.com/' },
    { title: 'TheMediaX.ai', link: 'https://themediax.ai/' },
  ],
  /*
   * The Newsroom page's own content (2026-10-13).
   *
   * ⚠️ **Every entry here is a placeholder.** The client asked for the page
   * structure now and will supply the real awards, links, images and event
   * write-ups later. Nothing below is a claim about anything that happened:
   * the `items` arrays are empty on purpose, and each group renders an
   * explicit "to be supplied" state rather than invented entries.
   *
   * Awards, MOUs and press are real-world claims about the company; events
   * name real occasions. Inventing any of them would be inventing a record.
   *
   * To publish a group: push entries onto its `items` array. Each entry takes
   * `{ title, date, summary, image, link }` — all optional except `title`,
   * and the card adapts to whatever is present.
   */
  newsroomPage: {
    title: 'Newsroom',
    lead: 'Awards, partnerships, events and coverage from across the Mindlogicx group.',
    groups: [
      {
        id: 'awards',
        title: 'Awards & Recognition',
        blurb: 'Industry recognition for Mindlogicx platforms, people and partnerships.',
        items: [],
      },
      {
        id: 'mou',
        title: 'MOUs & Partnerships',
        blurb: 'Memoranda of understanding and strategic agreements, with signing coverage.',
        items: [],
      },
      {
        id: 'events',
        title: 'Events & Coverage',
        blurb: 'Conferences, launches and the coverage that followed them.',
        /*
         * The three the client named. They are `placeholder: true` — the card
         * shows the name as a heading with a "details to follow" state rather
         * than a fabricated write-up, because the names are real events and
         * anything written under them would be invented.
         */
        items: [
          { title: 'Indonesia event', placeholder: true },
          { title: 'SMC signup', placeholder: true },
          { title: 'Ten years of events and news', placeholder: true },
        ],
      },
      {
        id: 'press',
        title: 'In the News',
        blurb: 'Other coverage, mentions and announcements about Mindlogicx.',
        items: [],
      },
    ],
  },

  /*
   * NEWSROOM  (requested 2026-10-12)
   *
   * ⚠️ **Scaffold only. Not one item below is real.**
   *
   * The brief asked for awards, MOU signing links, the Indonesia event, the
   * SMC signup and ten years of news — none of which exists in this repo or
   * in the 2025 frontend, and all of which are factual claims about the
   * company. They are therefore listed as the categories that were asked
   * for, with `todo: true` on every entry that still needs its destination.
   *
   * ⚠️ **No longer rendered** (2026-10-12). The footer now carries a single
   * "Newsroom" link in the Company list instead of this breakdown. These four
   * categories belong on the `/news-room` page once it is built — that is
   * where the individual stories (the Indonesia event, the SMC signup, each
   * award) go too.
   *
   * The `todo` convention is kept for whatever renders them next: such an
   * entry shows a visible "TBC" and is **not a link**, so nothing can ship
   * looking finished while pointing nowhere. To publish one, give it a real
   * `link` and delete its `todo` flag.
   */
  newsroom: [
    { title: 'Awards & Recognition', link: '/news-room/awards', todo: true },
    { title: 'MOUs & Partnerships', link: '/news-room/mou', todo: true },
    { title: 'Events & Coverage', link: '/news-room/events', todo: true },
    { title: 'In the News', link: '/news-room/press', todo: true },
    { title: 'All Newsroom', link: '/news-room' },
  ],
  domains: [
    { title: 'EdTech', link: '/ed-tech' },
    { title: 'FinTech', link: '/mxpay' },
    { title: 'HealthTech', link: '/health-tech' },
    { title: 'LegalTech', link: '/voice-of-law' },
    { title: 'AI First', link: '/ai-first' },
  ],
  copyright: `© ${new Date().getFullYear()} Mindlogicx.`,
  /*
   * ⚠️ **Empty since 2026-10-13.** Privacy Policy and Terms & Conditions moved
   * up into the Company column; leaving them here too would have printed the
   * same two links twice within ~200px of each other, which reads as a
   * mistake. Put an entry back and the bottom bar renders it again.
   */
  legal: [],
};

/**
 * The closing CTA band — **no longer rendered anywhere** (2026-10-12).
 *
 * "Partner With Us" was removed throughout by request, and the band it sat in
 * was a headline plus that one button, so the whole section went with it on
 * both Home and About rather than being left as a dead headline. The header
 * pill read from here too.
 *
 * Kept so the band can be brought back behind a different call to action:
 * change `btnText`/`btnLink` and re-add `Cta` to `pages/Home.jsx`. Note
 * `content` here duplicates `footer.callout.title` apart from a full stop.
 */
export const cta = {
  content: 'Empowering Innovation Across Industries',
  btnText: 'Partner With Us',
  btnLink: '/partner',
};
