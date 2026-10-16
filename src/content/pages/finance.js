/*
 * ============================================================================
 * CONTENT — Finance / Financial Technology
 * ============================================================================
 *
 * Extracted 2026-10-16 from the client's own deck:
 *   /home/ranjith/Downloads/Mindlogicx Website – Finance Vertical/
 *     MindlogicxWebsiteFinanceVertical.html
 *   Images referenced by that deck live in its sibling `images/` folder.
 *   Both are READ-ONLY. Nothing was copied, moved or converted.
 *
 * The deck's own cover line is "Proposed Corporate Website Content |
 * October 2026". It is a Google-Docs export: 22 `<img>` tags, one bulleted
 * list, one table, no hyperlinks at all.
 *
 * ----------------------------------------------------------------------------
 * ⚠️⚠️ BIGGEST CONCERN — THE IMAGERY IS ALMOST CERTAINLY OTHER COMPANIES'
 * ----------------------------------------------------------------------------
 * **This is the single most serious problem with the deck and it should be
 * resolved before anyone designs a pixel.**
 *
 * Twenty-one of the deck's images carry alt text that names a third-party
 * company, product or publication rather than describing the picture:
 *
 *   PAYSTRAX, Cardstream, Citcon, Bemobi, QorePay, SWIFT, Worldline, Visa,
 *   UPU, Fidoo (Hrot24.cz), Clearview Federal Credit Union, Grappler
 *   (grappler.io), buva.ai, WKO, IBN360, Dofmar ClearPathAbroad,
 *   Topdevelopers.co, FinTech Weekly, All Top Everything.
 *
 * That is the signature of images saved out of a web image search: the alt
 * attribute is the source page's title. Several of those names — PAYSTRAX,
 * Cardstream, Citcon, Bemobi, QorePay, Worldline, Grappler — are **payment
 * companies, i.e. direct competitors in the exact market this page is
 * selling into.**
 *
 * It is not only the alt text. Competitor and third-party branding is
 * *visible inside the pictures themselves*:
 *   - image18.jpg — a laptop screen carrying the **BEMOBI** logo and a
 *     Portuguese "Payments analytics" dashboard with R$ figures.
 *   - image21.jpg — a finished **GRAPPLER.IO** marketing banner, complete
 *     with their logo, their wordmark, their taglines and their claimed
 *     "90.5% AUTOMATCHED TRANSACTIONS" statistic.
 *   - image12.jpg — a wallet card bearing the **Clearview** logo and a
 *     **Mastercard** "debit" mark, tapped on a **Verifone** terminal.
 *   - image9.jpg — what looks like a real product screenshot (green
 *     "Performance Overview" payment funnel, "Paid Amount €6,023,907.95"),
 *     alt-labelled "Home | Worldline Global".
 *   - image5.jpg — carries the **IMPS** logo and an unidentified "a" brand
 *     mark.
 *   - image16.jpg and image19.jpg carry unidentified logo marks of their own.
 *
 * Consequences, in order of severity:
 *   1. **Copyright.** Licensing is unconfirmed for every one of these files.
 *      Nothing in the deck records a stock licence, a photographer, or a
 *      source URL.
 *   2. **Trade mark.** Publishing Grappler's advertisement, Bemobi's product
 *      UI or a Mastercard/Verifone/IMPS mark on a Mindlogicx payments page
 *      implies a relationship that the deck elsewhere is careful never to
 *      claim (see the hedging note below).
 *   3. **Reputation.** Putting a direct competitor's marketing material on
 *      your own fintech landing page is the kind of thing competitors,
 *      journalists and prospective banking partners notice.
 *
 * **Recommendation: treat all 21 as unusable placeholders.** They are
 * recorded below only so the page builder can see what each deck slot was
 * meant to convey. `sourceAlt` is the deck's verbatim alt text and MUST NOT
 * be reused as alt text on the page — it describes someone else's product,
 * not the picture, and would be both wrong and an accessibility failure.
 * `shows` is an honest description written after opening each file.
 *
 * A second, smaller image problem: several of the "dashboard" pictures are
 * AI-generated and their on-screen text is gibberish at full size —
 * image20 ("Cashboard", "Salin Payment Dashboagd"), image10, image1
 * ("TOP 5 MERCANTS", "Dolth Card"), image2 ("CRAPNENTH"). They will not
 * survive being shown large on a desktop hero.
 *
 * ----------------------------------------------------------------------------
 * ⚠️ THE HEDGING IS LOAD-BEARING — DO NOT TIGHTEN IT
 * ----------------------------------------------------------------------------
 * This is a payments page for a platform that does not exist yet. The deck's
 * author hedges deliberately and *says so* in the implementation notes:
 *
 *   "Avoid claiming live transactions, supported country or currency counts,
 *    licensed operations, confirmed partnerships, or guaranteed settlement
 *    capabilities until verified."
 *
 * and asks that Mindlogicx be presented "as a financial technology platform
 * developer and payment orchestration provider, rather than as a bank,
 * payment gateway operator, foreign exchange provider, or licensed money
 * transmitter."
 *
 * Section 5 is literally titled **"How the Platform Is Envisioned to Work"**.
 * Every one of these qualifiers is reproduced verbatim and must stay:
 *
 *   "is developing", "is extending ... by developing", "is designing",
 *   "is envisioned to support", "Is Envisioned to Work", "envisions",
 *   "proposed", "Proposed platform capabilities", "The proposed platform
 *   will", "The proposed process will", "planned design priorities",
 *   "Architecture intended to support", "designed to support", "aims to",
 *   "Our ambition is", "We envision", "Illustrative conceptual workflow",
 *   "Platform Under Development", "will be facilitated through appropriately
 *   licensed or authorized financial partners".
 *
 * **Copy-editing any of these into the present tense would convert a
 * description of an unbuilt product into a claim that Mindlogicx is already
 * moving money.** On a payments page that is a regulatory statement, not a
 * style choice. Do not let a proofreader "fix" them.
 *
 * ----------------------------------------------------------------------------
 * VERBATIM
 * ----------------------------------------------------------------------------
 * All page copy below is character-for-character from the deck. Notable:
 *   - Spelling is American throughout ("organizations", "centralized",
 *     "authorized", "Automated Reconciliation"). Not changed.
 *   - **Apostrophes in the body text are straight ASCII `'`** (the export
 *     encodes them `&#39;`): "The platform's planned design priorities",
 *     "Discover What's Next", "Mindlogicx's vision". The deck's *image alt
 *     text*, by contrast, uses curly ’ ("SWIFT’s", "What’s"). Both are
 *     preserved exactly as found — the mixture is the deck's, not ours.
 *   - The only non-ASCII characters anywhere in the body copy are:
 *     en dash – (document title only), em dash — ("Illustrative conceptual
 *     workflow — subject to..."), curly quotes “ ” (implementation notes
 *     only), and the arrow → ("Industries → Finance", metadata only).
 *
 * TYPOS AND ODDITIES IN THE SOURCE — all left exactly as written:
 *   1. **Two `<h1>` elements.** The first, "Mindlogicx Website – Finance
 *      Vertical", is the *document's* title, not the page's. The page
 *      heading is the second h1, "Simplifying Global Payments Through
 *      Intelligent Financial Technology". Only the second is used.
 *   2. **Case inconsistency on the same phrase.** The hero badge reads
 *      "Platform Under Development" (title case); the closing disclaimer
 *      reads "Platform under development." (sentence case). Both verbatim.
 *   3. **"I recommend retaining these eight sections"** — but the deck then
 *      says section 8 is metadata only, so there are seven visible sections.
 *      The deck contradicts itself in one sentence. Not corrected.
 *   4. **Heading hierarchy is inconsistent.** Sections 2, 5 and 6 put their
 *      subheading in an `<h3>`; section 7 puts "Engineering a Connected
 *      Global Financial Ecosystem" in an `<h2>`, the same level as the
 *      numbered section headings. Sections 3 and 4 have no subheading at
 *      all. See accessibility flags.
 *   5. **The 19 card titles in sections 3 and 4 are not headings.** They are
 *      plain `<p>` at normal weight, visually indistinguishable in the
 *      export from the body text beneath them. The grouping below is read
 *      from the image/title/description ordering, which is unambiguous.
 *   6. Alt text is in four languages — Spanish (Bemobi), Czech (Fidoo),
 *      German (WKO), English. None of it is usable.
 *   7. Dates inside alt text are inconsistent and meaningless to the page:
 *      "(June 2026)", "(2025)", "September 2026 Reviews", "for 2026".
 *
 * ----------------------------------------------------------------------------
 * WHAT IS AUTHOR GUIDANCE, NOT PAGE COPY  (`authorGuidance`, rendered: false)
 * ----------------------------------------------------------------------------
 * Three blocks are instructions to whoever builds this page. None of them is
 * words for the reader, and none is rendered:
 *
 *   a. **The entire pre-section preamble** — the document h1, the
 *      "Proposed Corporate Website Content | October 2026" cover line, the
 *      two positioning paragraphs (including the one naming **Flywire**),
 *      the orphan "Flywire" / "+2" lines left behind by a Google-Docs
 *      citation chip, and the sentence that says outright: "The content
 *      below is designed for direct use by the UI/UX designer and website
 *      development team."
 *   b. **"8. SEO & Website Metadata"** — a six-row table. Its page title,
 *      meta description and the two keyword lists are lifted into `seo`
 *      below as metadata. The suggested URL and navigation row are recorded
 *      there too, as notes. The table is never printed.
 *   c. **"Recommendations for Website Implementation"** — five paragraphs of
 *      positioning and publishing advice to the builder.
 *
 * This mirrors how health-tech-solutions.js and knowledge-engineering.js
 * handled the same kind of trailing blocks in their decks.
 *
 * ----------------------------------------------------------------------------
 * ⚠️ FLAGGED FOR THE CLIENT
 * ----------------------------------------------------------------------------
 * 1. **Third-party imagery.** See the block at the top. This is the one that
 *    matters.
 * 2. **Flywire is named as the model being copied.** "The proposed
 *    positioning draws on the institutional payment model of Flywire" and
 *    "the Flywire-inspired model". Flywire is a listed US payments company
 *    and a competitor. This sits in the builder-facing preamble and is NOT
 *    rendered — but it must never leak onto the page, and it is worth the
 *    client knowing their deck says it.
 * 3. **Regulatory language.** The deck is careful, and the care must be
 *    preserved. It never claims PCI DSS, ISO, RBI, PSD2, SOC 2 or any
 *    specific certification — good. What it does say is "Regulatory
 *    Readiness: Architecture intended to support applicable financial
 *    regulations..." and "will be facilitated through appropriately licensed
 *    or authorized financial partners, subject to applicable regulatory
 *    requirements and market availability." Both are hedged and both are
 *    reproduced verbatim. **Do not add a compliance badge row, a "PCI DSS
 *    Level 1" strip or a certification logo wall to this page.** Mindlogicx
 *    holds no stated financial authorization and the deck says so.
 * 4. **No partner, customer or statistic is named — keep it that way.** The
 *    deck contains zero numbers: no currency count, no country count, no
 *    transaction volume, no uptime figure, no client logo. Nothing has been
 *    invented here. Any figure that appears on the built page will have come
 *    from somewhere other than this deck.
 *    Note the trap: image21 and image9 *do* display numbers ("90.5%",
 *    "€6,023,907.95", "205,072"). Those are other companies' numbers inside
 *    other companies' graphics. They are not Mindlogicx data.
 * 5. **A broken image in the source.** The preamble contains a bare `<img>`
 *    with no `src` and no `alt`, flanked by the orphan text "Flywire" and
 *    "+2" — the debris of a Google-Docs smart chip. It is recorded as
 *    `images.brokenPlaceholder` and has no file behind it.
 * 6. **No links anywhere.** The deck has not a single `<a href>`. Both CTAs
 *    are given as labels only ("Proposed CTA: Explore Our Vision",
 *    "Proposed CTA: Contact Us") with no destination. The targets written
 *    below are THIS PROJECT'S choices, recorded in `ctaNote`, not the
 *    deck's.
 * 7. **Section 5 has no diagram, but is written as though it does.** It
 *    carries the caption "Illustrative conceptual workflow — subject to
 *    platform design and payment partner integrations." with nothing above
 *    it. The workflow it captions does not exist in the deck in any form.
 *    Recorded as `diagram: { missing: true }` — someone has to draw it, and
 *    its four actors are only described in prose.
 * 8. **The route does not match the deck.** The deck's suggested URL is
 *    `/finance` and its navigation row says "Industries → Finance". This
 *    site already routes Finance at **`/finance`** (src/content/site.js lines
 *    549, 909, 1023, 1156) and KnowledgeEngineering.jsx already redirects
 *    `/finance/` → `/finance`. `/finance` is kept so the existing menu and
 *    redirect keep working. Changing it means changing both.
 * 9. **Twelve unassigned hero images.** The deck drops twelve pictures in a
 *    single run at the end of section 1 with no captions and no ordering
 *    hint. Which is the hero and which are decoration is undecided. (Moot
 *    if flag 1 is acted on.)
 * 10. **Duplicated copy.** The deck repeats itself across sections — the
 *    hero, section 2 and section 7 all say "payments are complex, we will
 *    simplify them" in different words, and "Platform Under Development"
 *    appears twice. Sections 2 and 7 in particular carry no new information.
 *    Worth a trim pass **by the client**, not by us — nothing has been cut
 *    here.
 * 11. **Accessibility.** (a) alt text, as discussed, is unusable and must be
 *    rewritten from `shows`; (b) the heading hierarchy skips and repeats
 *    levels (typo note 4) and must be regularised in the component, not in
 *    the copy; (c) the 19 card titles are not marked up as headings
 *    (typo note 5); (d) "FINANCE | FINANCIAL TECHNOLOGY" is an all-caps
 *    eyebrow — render it with `text-transform`, not as literal capitals, so
 *    screen readers do not spell it out; (e) several images are pure
 *    decoration and should get `alt=""` rather than invented descriptions.
 * 12. **The meta description is 191 characters** — search results will cut
 *    it at roughly 155. The page title is 60, which is fine.
 * ============================================================================
 */

export const financePage = {
  /* Nav label. The deck's own document title is "Mindlogicx Website – Finance
     Vertical", which is a document title, not a page name — see typo note 1. */
  title: 'Finance',

  /* See flag 8 — the deck asks for /finance; this site is already on /finance. */
  route: '/finance',

  seo: {
    /* From the deck's "8. SEO & Website Metadata" table — metadata, never
       rendered as page copy. Values verbatim. */
    title: 'Financial Technology & Global Payment Solutions | Mindlogicx',
    description:
      "Discover Mindlogicx's vision for intelligent financial technology, global payments, payment orchestration, automated reconciliation, and enterprise financial workflows.",
    descriptionNote:
      '191 characters — longer than search results will show. See flag 12.',
    primaryKeywords: [
      'Financial Technology Platform',
      'Global Payment Solutions',
      'Cross-Border Payments',
      'Payment Orchestration',
    ],
    secondaryKeywords: [
      'FinTech SaaS',
      'Payment Automation',
      'Multi-Currency Payments',
      'Financial Reconciliation',
      'Enterprise Billing',
    ],
    suggestedUrl: '/finance',
    suggestedUrlNote:
      'Not adopted — this site already routes Finance at /finance and redirects /finance/ to it. See flag 8.',
    suggestedNavigation: 'Industries → Finance',
  },

  /*
   * ==========================================================================
   * IMAGE INVENTORY — deck references only. NOTHING HAS BEEN COPIED.
   * ==========================================================================
   * `file`       filename in the deck's images/ folder
   * `width`/`height`/`bytes`   the actual file on disk
   * `deckDisplay`             the size the deck's inline CSS renders it at
   * `sourceAlt`  the deck's alt attribute, VERBATIM. ⚠️ DO NOT USE AS ALT TEXT.
   * `shows`      honest description, written after opening the file
   * `deckSection` which deck section the image sits in
   * `pairedWith`  the card it is adjacent to, where the deck pairs them
   *
   * Every file is flagged `licensed: false` because licensing is unconfirmed
   * for all of them. See the ⚠️⚠️ block in the header.
   * ==========================================================================
   */
  images: {
    sourceDir:
      '/home/ranjith/Downloads/Mindlogicx Website – Finance Vertical/images',
    licensingConfirmed: false,

    /* Deck image #1, in the preamble: a bare <img> with no src and no alt.
       Google-Docs citation-chip debris. There is no file. See flag 5. */
    brokenPlaceholder: {
      missing: true,
      deckSection: 'Preamble (author guidance)',
      note: 'Bare <img> tag with no src and no alt attribute, sat between the Flywire positioning paragraph and the orphan text "Flywire" / "+2". No image file exists for it.',
    },

    /* Deck images #2–#13: twelve pictures dumped in one run at the end of
       section 1, uncaptioned and unassigned. See flag 9. */
    hero: [
      {
        file: 'image11.jpg',
        width: 1200,
        height: 677,
        bytes: 112750,
        deckDisplay: '624 × 352',
        sourceAlt: 'PAYSTRAX & Cardstream announce innovative payment partnership',
        shows:
          'Stock illustration: a navy world map drawn as a glowing cyan node-and-line network, with small laptop, card-reader and phone icons dotted across it. No branding visible in the picture itself.',
        deckSection: '1. Hero Section',
        licensed: false,
        altTextNamesThirdParty: ['PAYSTRAX', 'Cardstream'],
      },
      {
        file: 'image20.jpg',
        width: 1392,
        height: 752,
        bytes: 75024,
        deckDisplay: '624 × 337.33',
        sourceAlt: 'Citcon',
        shows:
          'Over-the-shoulder photo of two men at a desk; one works a laptop showing a generic payments dashboard with donut and bar charts, the other holds a phone. AI-generated — the on-screen labels are gibberish ("Cashboard", "Salin Payment Dashboagd").',
        deckSection: '1. Hero Section',
        licensed: false,
        altTextNamesThirdParty: ['Citcon'],
      },
      {
        file: 'image18.jpg',
        width: 1857,
        height: 860,
        bytes: 147636,
        deckDisplay: '624 × 289.33',
        sourceAlt: 'Gestión de Pagos: Conciliación Automatizada | Bemobi',
        shows:
          '⚠️ A man at a laptop in a bright home office. The laptop screen carries the BEMOBI logo and a Portuguese "Payments analytics" dashboard with R$ figures, a revenue chart and a transactions table. Competitor branding is legible in the picture.',
        deckSection: '1. Hero Section',
        licensed: false,
        altTextNamesThirdParty: ['Bemobi'],
        competitorBrandingVisibleInImage: true,
      },
      {
        file: 'image13.jpg',
        width: 1290,
        height: 860,
        bytes: 139571,
        deckDisplay: '624 × 416',
        sourceAlt:
          'What Are the Best Subscription Payment Retry Tools for Global Businesses? (June 2026)',
        shows:
          'Stock illustration: a dotted blue/purple world map with glowing arcs between continents, surrounded by floating icons — a bank card, two bank-building roundels, a phone wallet, a globe, a contactless phone and a coin purse.',
        deckSection: '1. Hero Section',
        licensed: false,
      },
      {
        file: 'image10.jpg',
        width: 1024,
        height: 768,
        bytes: 56615,
        deckDisplay: '624 × 468',
        sourceAlt: 'QorePay - Modern Payment Solutions for Nigerian Businesses',
        shows:
          'Over-the-shoulder photo of a person at a laptop showing a dark "Financial Settlement" dashboard with KPI tiles and an area chart. AI-generated — the labels and figures are illegible noise at full size.',
        deckSection: '1. Hero Section',
        licensed: false,
        altTextNamesThirdParty: ['QorePay'],
      },
      {
        file: 'image7.jpg',
        width: 1366,
        height: 768,
        bytes: 165190,
        deckDisplay: '624 × 350.67',
        sourceAlt:
          'SWIFT’s Blockchain Will Transform a 50-Year-Old Global Banking System: Understanding the New Tech Stack and Business Opportunities - FinTech Weekly',
        shows:
          'Stock illustration: a bright blue wireframe globe hovering over a night-time city skyline, ringed by circled icons for a euro symbol, a dollar symbol, an envelope, a shopping bag and an aeroplane.',
        deckSection: '1. Hero Section',
        licensed: false,
        altTextNamesThirdParty: ['SWIFT', 'FinTech Weekly'],
      },
      {
        file: 'image9.jpg',
        width: 1529,
        height: 860,
        bytes: 120694,
        deckDisplay: '624 × 350.67',
        sourceAlt: 'Home | Worldline Global',
        shows:
          '⚠️ Photo of a person in a yellow hoodie at a laptop. The screen shows what appears to be a real product UI — a green "Performance Overview" payments console with filter chips, a payment funnel (Checkout → Initiation → Authentication → Fraud Screening → Authorization → Capture → Settlement) and live-looking figures: "Conversion Rate 94.06%", "Paid Transactions 205,072", "Paid Amount € 6,023,907.95", "Paid ATV € 29.38". Those are not Mindlogicx numbers.',
        deckSection: '1. Hero Section',
        licensed: false,
        altTextNamesThirdParty: ['Worldline'],
        competitorBrandingVisibleInImage: true,
      },
      {
        file: 'image4.jpg',
        width: 1366,
        height: 768,
        bytes: 89556,
        deckDisplay: '624 × 350.67',
        sourceAlt:
          'Visa Partners with UPU to Boost Digital Financial Inclusion Globally - FinTech Weekly',
        shows:
          'Stock illustration: a glowing blue wireframe globe on a circuit-board background, flanked by line-art icons — a phone showing a dollar sign, a padlocked envelope and a classical bank building.',
        deckSection: '1. Hero Section',
        licensed: false,
        altTextNamesThirdParty: ['Visa', 'UPU', 'FinTech Weekly'],
      },
      {
        file: 'image1.jpg',
        width: 980,
        height: 551,
        bytes: 52690,
        deckDisplay: '624 × 350.67',
        sourceAlt:
          'Latest Web App Trends India: What’s Shaping Web Application Development in India Today',
        shows:
          'An angled laptop showing a dark dashboard captioned "PayFlow Dashboard" — "TOTAL REVENUE: $1,250,345", "TRANSACTIONS TODAY: 15,450", a transaction-type donut, a sales-trend line and a real-time activity list. AI-generated: the labels misspell themselves ("TOP 5 MERCANTS", "Dolth Card", "Digital Walelats") and the sidebar lists "Reports" twice.',
        deckSection: '1. Hero Section',
        licensed: false,
      },
      {
        file: 'image2.jpg',
        width: 1279,
        height: 720,
        bytes: 167619,
        deckDisplay: '624 × 350.67',
        sourceAlt: 'Fintech Infrastructure Explained: Digital Systems',
        shows:
          'Stock illustration: Earth seen from space, criss-crossed with glowing payment routes and annotated with floating labels — "BANKS", "PAYMENT GATEWAYS", "API", "OPEN API NETWORK", "CLOUD SERVERS", "DISTRIBUTED SERVERS", "GLOBAL LEDGER", "SECURE PROTOCOLS". AI-generated; some labels are garbled ("CRAPNENTH", "CLOUD ZOATA HUB").',
        deckSection: '1. Hero Section',
        licensed: false,
      },
      {
        file: 'image5.jpg',
        width: 900,
        height: 706,
        bytes: 77163,
        deckDisplay: '624 × 489.33',
        sourceAlt: 'Global Collections',
        shows:
          '⚠️ White-background vector illustration of a blue globe centred on India and South-East Asia, wrapped in a thin network mesh. Circled icons around it include the IMPS logo, three ₹ rupee marks (a note, a coin, a card), a bank building, a QR code, a wallet and an ID card. A repeated lowercase "a" roundel is used as the node marker — an unidentified brand mark.',
        deckSection: '1. Hero Section',
        licensed: false,
        competitorBrandingVisibleInImage: true,
      },
      {
        file: 'image3.jpg',
        width: 1048,
        height: 590,
        bytes: 58510,
        deckDisplay: '624 × 350.67',
        sourceAlt:
          'Konec chaosu ve firemních financích. Direct Fidoo spouští vlastní multibanking | Hrot24.cz',
        shows:
          'A businessman in a suit at a laptop in a glass-walled office. The screen shows a Czech-language finance dashboard — "Přehled financí", a balance of "8 645 321,59 Kč", a cash-flow line chart, per-currency balances (CZK / EUR / USD / GBP) and a recent-transactions list.',
        deckSection: '1. Hero Section',
        licensed: false,
        altTextNamesThirdParty: ['Fidoo', 'Hrot24.cz'],
      },
    ],

    /* Deck images #14–#18: one per capability card in section 3, each sitting
       immediately above the card it belongs to. */
    solutions: [
      {
        file: 'image15.jpg',
        width: 1290,
        height: 860,
        bytes: 116503,
        deckDisplay: '624 × 416',
        sourceAlt:
          'The 10 Largest Payment Networks In The World (2025) - All Top Everything',
        shows:
          'Stock illustration: a dark world map with gold arcs linking continents, flanked by neon outline icons — a chip bank card, a dollar coin, a phone with a tick, a shopping trolley and a card reader.',
        deckSection: '3. Our Financial Technology Solutions',
        pairedWith: 'Global Payment Solutions',
        licensed: false,
        altTextNamesThirdParty: ['All Top Everything'],
      },
      {
        file: 'image12.jpg',
        width: 1024,
        height: 1024,
        bytes: 73259,
        deckDisplay: '624 × 624',
        sourceAlt: 'Mobile Wallet | Clearview Federal Credit Union',
        shows:
          '⚠️ Close-up photo of a hand holding a phone with a digital wallet card open, tapping it against a card terminal that reads "PURCHASE / Present Card". The wallet card carries the Clearview logo and a Mastercard "debit" mark; the terminal is a Verifone unit. Three separate third-party brands are legible.',
        deckSection: '3. Our Financial Technology Solutions',
        pairedWith: 'Payment Orchestration',
        licensed: false,
        altTextNamesThirdParty: ['Clearview Federal Credit Union'],
        competitorBrandingVisibleInImage: true,
      },
      {
        file: 'image21.jpg',
        width: 1642,
        height: 860,
        bytes: 82226,
        deckDisplay: '624 × 326.67',
        sourceAlt: 'The only platform built for insurance accounting | Grappler',
        shows:
          '⚠️ This is not a photo — it is another company\'s finished advertisement. A purple-to-teal banner carrying the GRAPPLER.IO logo and wordmark, a laptop showing a "RECONCILIATION DASHBOARD" for September 2025, and three promotional callouts: "Free up working capital.", "Bigger business. Same finance team.", and "Reconcile in days, not weeks. 90.5% AUTOMATCHED TRANSACTIONS". Entirely unusable.',
        deckSection: '3. Our Financial Technology Solutions',
        pairedWith: 'Automated Reconciliation & Reporting',
        licensed: false,
        altTextNamesThirdParty: ['Grappler'],
        competitorBrandingVisibleInImage: true,
      },
      {
        file: 'image16.jpg',
        width: 1024,
        height: 1024,
        bytes: 114251,
        deckDisplay: '624 × 624',
        sourceAlt: 'buva.ai - Intelligent Business Solutions',
        shows:
          'A flat UI mock-up of a green SaaS billing console: "Total Revenue (USD) $5,400.00", "Recurring Revenue (EUR) €3,200.00", "Active Subscriptions 37", "Outstanding Invoices $375", a multi-currency revenue chart (USD/EUR/GBP/JPY), MRR and churn panels, and an invoice table with Paid / Sent / Overdue / Pending statuses. Carries an unidentified green logo mark in the sidebar.',
        deckSection: '3. Our Financial Technology Solutions',
        pairedWith: 'Enterprise Billing & Collections',
        licensed: false,
        altTextNamesThirdParty: ['buva.ai'],
      },
      {
        file: 'image19.jpg',
        width: 500,
        height: 511,
        bytes: 30186,
        deckDisplay: '500 × 511',
        sourceAlt:
          'Top AI Development Companies - September 2026 Reviews | Topdevelopers.co',
        shows:
          'A monitor-and-laptop device mock-up of an "AI-powered Fraud Detection" product — a "Fraudulent Activity" area chart, a "Risk Score 82" panel, "User Analysis" and "Transaction Volumes" rows, and a "Case #2494: Suspected Fraud" card whose body is lorem ipsum placeholder. Carries an unidentified blue logo mark.',
        deckSection: '3. Our Financial Technology Solutions',
        pairedWith: 'Intelligent Financial Automation',
        licensed: false,
        altTextNamesThirdParty: ['Topdevelopers.co'],
      },
    ],

    /* Deck images #19–#22: one per industry card in section 4. */
    industries: [
      {
        file: 'image8.jpg',
        width: 1344,
        height: 768,
        bytes: 126155,
        deckDisplay: '624 × 356',
        sourceAlt:
          'I Want to Study Abroad But I Have No Money: Proven Paths for 2026 - Dofmar ClearPathAbroad',
        shows:
          'A group of eight smiling university students with backpacks and folders walking across a sunlit campus lawn, a red-brick faculty building and a row of international flags behind them. AI-generated stock photography.',
        deckSection: '4. Industry-Focused Financial Solutions',
        pairedWith: 'Education',
        licensed: false,
        altTextNamesThirdParty: ['Dofmar ClearPathAbroad'],
      },
      {
        file: 'image14.jpg',
        width: 1200,
        height: 675,
        bytes: 92984,
        deckDisplay: '624 × 350.67',
        sourceAlt:
          'Medical Debt Trap: How One Hospital Bill Changes Everything | IBN360',
        shows:
          'A man tapping a bank card on a terminal at a hospital counter beneath a large "BILLING" sign, with a "PLEASE PAY HERE" placard, a queue-number display reading 3, a receptionist behind glass and a "HOSPITAL SERVICES" leaflet stand.',
        deckSection: '4. Industry-Focused Financial Solutions',
        pairedWith: 'Healthcare',
        licensed: false,
        altTextNamesThirdParty: ['IBN360'],
        note: 'The alt text frames this as a story about medical debt. The picture is being reused to sell healthcare payment collection — worth a second look on tone even if the licensing is cleared.',
      },
      {
        file: 'image17.jpg',
        width: 1631,
        height: 860,
        bytes: 129859,
        deckDisplay: '624 × 329.33',
        sourceAlt: 'Woman At Office Desk Studies Electronic Expense Report',
        shows:
          'A woman at an open-plan office desk with an ultrawide monitor showing an "Invoice" (#430534, issued July 21 2026, total $1,438.00) alongside an "Expenses" dashboard of vendor tiles, plus an open laptop with a colour-coded spreadsheet.',
        deckSection: '4. Industry-Focused Financial Solutions',
        pairedWith: 'Enterprises & B2B',
        licensed: false,
        note: 'The only alt text in the deck that actually describes its own picture.',
      },
      {
        file: 'image6.jpg',
        width: 1290,
        height: 860,
        bytes: 107334,
        deckDisplay: '624 × 416',
        sourceAlt: 'Betriebsarten in der Hotellerie - WKO',
        shows:
          'A hotel receptionist handing a key card across a front desk to a woman, a man with a yellow suitcase beside her, a card terminal and a service bell on the counter, and three wall clocks labelled DUBAI, NEW YORK and LONDON.',
        deckSection: '4. Industry-Focused Financial Solutions',
        pairedWith: 'Travel & Hospitality',
        licensed: false,
        altTextNamesThirdParty: ['WKO'],
      },
    ],
  },

  /* Deck section "1. Hero Section". The page h1 is the deck's SECOND h1 —
     see typo note 1. */
  hero: {
    eyebrow: 'FINANCE | FINANCIAL TECHNOLOGY',
    heading: 'Simplifying Global Payments Through Intelligent Financial Technology',
    strapline:
      'Connecting businesses, institutions, and customers through seamless, secure, and technology-driven financial experiences.',
    body: [
      'Mindlogicx is extending its Knowledge Engineering expertise into financial technology by developing a cloud-based SaaS platform designed to simplify domestic and international payments, streamline financial transactions, and enable intelligent payment management.',
      'Our vision is to help organizations manage complex payment processes through a unified digital ecosystem that connects payment service providers, financial institutions, enterprises, and customers.',
    ],
    /* The deck sets this on its own line and the implementation notes ask for
       it "prominently in the hero section". Title case is the deck's. */
    statusBadge: 'Platform Under Development',
    ctas: [
      {
        label: 'Explore Our Vision',
        deckLine: 'Proposed CTA: Explore Our Vision',
        link: '#transforming-financial-transactions',
      },
    ],
    ctaNote:
      'The deck gives the label only, prefixed "Proposed CTA:", with no destination — it contains no hyperlinks at all. The anchor is this project\'s choice. See flag 6.',
  },

  sections: [
    {
      id: 'transforming-financial-transactions',
      number: '2.',
      heading: 'Transforming Financial Transactions',
      subheading: 'Making Global Payments Simpler, Smarter, and More Accessible',
      body: [
        'As businesses and institutions expand across borders, financial transactions increasingly involve multiple currencies, banking networks, payment providers, regulatory requirements, and reconciliation processes.',
        'Mindlogicx is developing a technology platform to address these complexities through integrated payment workflows, intelligent automation, and centralized transaction visibility.',
        'The platform is envisioned to support efficient payment collection, processing coordination, transaction tracking, and financial reporting while providing a convenient experience for both organizations and their customers.',
      ],
    },

    {
      id: 'financial-technology-solutions',
      number: '3.',
      heading: 'Our Financial Technology Solutions',
      /* Standalone line under the heading. The deck gives it no subheading
         markup — it is a plain paragraph, and it is a hedge. */
      lead: 'Proposed platform capabilities',
      /* The deck renders each `title` as a plain paragraph at body weight,
         not a heading — see typo note 5. Image pairing is recorded in
         `images.solutions`. */
      items: [
        {
          title: 'Global Payment Solutions',
          description:
            'Enabling organizations to manage domestic and cross-border payment collections through an integrated digital platform supporting multiple currencies, payment channels, and financial service providers.',
          image: 'image15.jpg',
        },
        {
          title: 'Payment Orchestration',
          description:
            'Connecting multiple payment gateways, banking partners, and payment methods through a unified technology layer designed to simplify integration, transaction routing, and payment management.',
          image: 'image12.jpg',
        },
        {
          title: 'Automated Reconciliation & Reporting',
          description:
            'Supporting transaction identification, payment matching, settlement visibility, and financial reporting to help organizations reduce manual effort and improve operational efficiency.',
          image: 'image21.jpg',
        },
        {
          title: 'Enterprise Billing & Collections',
          description:
            'Streamlining invoice generation, payment requests, collection tracking, and financial workflows for institutions and businesses managing recurring or high-volume transactions.',
          image: 'image16.jpg',
        },
        {
          title: 'Intelligent Financial Automation',
          description:
            'Applying AI-driven technologies to support transaction analytics, payment exception management, risk indicators, and operational insights while maintaining appropriate human oversight.',
          image: 'image19.jpg',
        },
      ],
    },

    {
      id: 'industry-focused-solutions',
      number: '4.',
      heading: 'Industry-Focused Financial Solutions',
      body: [
        'Mindlogicx envisions a flexible financial technology ecosystem capable of supporting payment requirements across multiple industries.',
      ],
      items: [
        {
          title: 'Education',
          description:
            'Digital fee collection, tuition payments, international student transactions, and institutional reconciliation.',
          image: 'image8.jpg',
        },
        {
          title: 'Healthcare',
          description:
            'Patient payments, consultation billing, international healthcare transactions, and financial workflow integration.',
          image: 'image14.jpg',
        },
        {
          title: 'Enterprises & B2B',
          description:
            'Cross-border collections, invoice payments, vendor transactions, and financial process automation.',
          image: 'image17.jpg',
        },
        {
          title: 'Travel & Hospitality',
          description:
            'International booking payments, customer collections, and multi-currency payment experiences.',
          image: 'image6.jpg',
        },
      ],
    },

    {
      id: 'how-the-platform-is-envisioned-to-work',
      number: '5.',
      /* ⚠️ The heading itself is a hedge. Do not shorten it to "How the
         Platform Works". See the hedging block in the header. */
      heading: 'How the Platform Is Envisioned to Work',
      subheading: 'A Unified Payment Experience',
      body: [
        'The proposed platform will provide a connected workflow between customers, businesses, payment providers, and financial institutions.',
        'The proposed process will allow a payer to initiate a transaction, select an available payment method, complete payment through an authorized financial service provider, and track transaction status. Organizations will receive transaction information to support reconciliation, reporting, and financial administration.',
      ],
      /* The deck prints this caption between the two paragraphs above, with
         nothing above it to caption. See flag 7. */
      diagram: {
        missing: true,
        caption:
          'Illustrative conceptual workflow — subject to platform design and payment partner integrations.',
        note: 'The deck captions a workflow diagram it never supplies — there is no image, figure or step list in this section. The four actors ("customers, businesses, payment providers, and financial institutions") and the payer journey are described in the prose only. Someone has to draw this; nothing has been invented here.',
      },
    },

    {
      id: 'technology-security-trust',
      number: '6.',
      heading: 'Technology, Security & Trust',
      subheading: 'Building Confidence into Every Transaction',
      body: [
        'Mindlogicx is designing its financial technology ecosystem with security, scalability, integration flexibility, and operational transparency as foundational principles.',
      ],
      /* Straight ASCII apostrophe in "platform's" is the deck's own. */
      listLeadIn: "The platform's planned design priorities include:",
      /*
       * The deck writes each bullet as ONE string, "Label: text". `text` is
       * that verbatim string. `label` and `description` are the same string
       * split at the first colon, offered for card layouts — if the builder
       * renders them separately the result must reassemble to `text`.
       */
      priorities: [
        {
          text: 'Security by Design: Encryption, secure authentication, role-based access, and controlled data handling.',
          label: 'Security by Design',
          description:
            'Encryption, secure authentication, role-based access, and controlled data handling.',
        },
        {
          text: 'Regulatory Readiness: Architecture intended to support applicable financial regulations, privacy requirements, and payment industry standards.',
          label: 'Regulatory Readiness',
          description:
            'Architecture intended to support applicable financial regulations, privacy requirements, and payment industry standards.',
          note: '⚠️ "intended to support" — this is NOT a compliance claim. The deck names no standard, no certification and no regulator. Do not pair this bullet with PCI DSS / ISO / RBI / PSD2 logos. See flag 3.',
        },
        {
          text: 'Financial Partner Integration: Connectivity with authorized payment service providers, banks, and financial infrastructure partners.',
          label: 'Financial Partner Integration',
          description:
            'Connectivity with authorized payment service providers, banks, and financial infrastructure partners.',
          note: 'No partner is named anywhere in the deck. Do not add a partner logo wall. See flag 4.',
        },
        {
          text: 'Scalable SaaS Architecture: Cloud-based deployment designed to support multiple organizations, transaction volumes, and markets.',
          label: 'Scalable SaaS Architecture',
          description:
            'Cloud-based deployment designed to support multiple organizations, transaction volumes, and markets.',
        },
        {
          text: 'Intelligent Monitoring: Transaction tracking, exception handling, auditability, and operational analytics.',
          label: 'Intelligent Monitoring',
          description:
            'Transaction tracking, exception handling, auditability, and operational analytics.',
        },
      ],
      /* ⚠️ Closing paragraph of section 6. This is the deck's central legal
         disclaimer: it is what keeps Mindlogicx from reading as a licensed
         money transmitter. It must be rendered, and rendered verbatim. */
      disclaimer:
        'Financial transactions, foreign exchange, and fund settlement will be facilitated through appropriately licensed or authorized financial partners, subject to applicable regulatory requirements and market availability.',
    },

    {
      id: 'vision-for-the-future-of-finance',
      number: '7.',
      heading: 'Our Vision for the Future of Finance',
      /* The deck marks this as an <h2>, the same level as the section
         headings, where sections 2/5/6 use <h3>. See typo note 4. */
      subheading: 'Engineering a Connected Global Financial Ecosystem',
      body: [
        'Mindlogicx aims to simplify the movement and management of payments by combining financial workflow automation, intelligent technologies, and interoperable digital infrastructure.',
        'Our ambition is to build a globally accessible financial technology platform that helps institutions and businesses deliver convenient payment experiences while improving financial visibility and operational efficiency.',
        'We envision a future where financial transactions are simpler to initiate, easier to track, and more efficient to manage.',
      ],
    },

    {
      id: 'discover-whats-next',
      /* Unnumbered in the deck — a closing CTA block sitting between section 7
         and the metadata table, marked up as a plain <h2>. */
      number: null,
      heading: "Discover What's Next in Financial Technology",
      body: [
        'Mindlogicx is developing its next-generation financial services platform as part of its expanding Knowledge Engineering ecosystem.',
        'Connect with us to learn about our vision, explore potential technology partnerships, and discuss future opportunities.',
      ],
      ctas: [
        {
          label: 'Contact Us',
          deckLine: 'Proposed CTA: Contact Us',
          link: '/contact-us',
        },
      ],
      ctaNote:
        'Label only in the deck, prefixed "Proposed CTA:". "/contact-us" is this site\'s contact path and is this project\'s choice, not the deck\'s. See flag 6.',
      /* ⚠️ Second legal disclaimer, closing the page. Sentence case here,
         title case in the hero badge — see typo note 2. Render verbatim. */
      disclaimer:
        'Platform under development. Products, services, availability, and supported markets will be announced following the applicable development, partnership, and regulatory readiness milestones.',
    },
  ],

  /*
   * ==========================================================================
   * AUTHOR GUIDANCE — instructions to the page builder, NOT words for the
   * reader. Recorded for audit; never rendered. See the header.
   * ==========================================================================
   */
  authorGuidance: {
    rendered: false,

    /* (a) Everything before "1. Hero Section". */
    preamble: {
      documentTitle: 'Mindlogicx Website – Finance Vertical',
      coverLine: 'Proposed Corporate Website Content | October 2026',
      paragraphs: [
        'The Finance webpage will position Mindlogicx as an emerging technology provider developing a global SaaS-based financial technology platform for domestic and cross-border payments, payment orchestration, transaction management, and financial workflow automation.',
        'The proposed positioning draws on the institutional payment model of Flywire, particularly its approach to connecting payers, institutions, financial partners, and reconciliation systems.',
        'The content below is designed for direct use by the UI/UX designer and website development team. It communicates the intended platform capabilities without presenting the solution as commercially launched.',
      ],
      /* Orphan text left behind by a Google-Docs citation chip, alongside the
         broken <img>. Not sentences, not copy. See flag 5. */
      citationArtifacts: ['Flywire', '+2'],
      note: 'Names Flywire, a listed US payments company and a competitor, as the model being drawn on. Builder-facing only — this must never reach the page. See flag 2.',
    },

    /* (b) "8. SEO & Website Metadata" — a six-row table. Values are carried
       into `seo` above. The deck's own implementation note says it is
       "serving only as implementation metadata rather than visible website
       content". */
    seoTable: {
      rendered: false,
      headings: ['Element', 'Recommended Content'],
      rows: [
        ['Page Title', 'Financial Technology & Global Payment Solutions | Mindlogicx'],
        [
          'Meta Description',
          "Discover Mindlogicx's vision for intelligent financial technology, global payments, payment orchestration, automated reconciliation, and enterprise financial workflows.",
        ],
        ['Suggested URL', '/finance'],
        [
          'Primary Keywords',
          'Financial Technology Platform, Global Payment Solutions, Cross-Border Payments, Payment Orchestration',
        ],
        [
          'Secondary Keywords',
          'FinTech SaaS, Payment Automation, Multi-Currency Payments, Financial Reconciliation, Enterprise Billing',
        ],
        ['Navigation', 'Industries → Finance'],
      ],
    },

    /* (c) "Recommendations for Website Implementation" — five paragraphs.
       Verbatim, including the curly quotes in the last one. */
    implementationRecommendations: [
      'I recommend retaining these eight sections for the Finance page, with Section 8 serving only as implementation metadata rather than visible website content.',
      'The most important positioning decision is to present Mindlogicx as a financial technology platform developer and payment orchestration provider, rather than as a bank, payment gateway operator, foreign exchange provider, or licensed money transmitter.',
      'This distinction allows Mindlogicx to pursue the Flywire-inspired model through licensed banking and payment partners without prematurely implying that Mindlogicx itself holds financial regulatory authorizations.',
      "It also leaves room for the Finance vertical to expand beyond Education into Healthcare, B2B, Travel, and other industries without restricting the platform's future market opportunity.",
      'Website publishing recommendation: Retain the “Platform Under Development” status prominently in the hero section. Avoid claiming live transactions, supported country or currency counts, licensed operations, confirmed partnerships, or guaranteed settlement capabilities until verified.',
    ],
  },
};

export default financePage;
