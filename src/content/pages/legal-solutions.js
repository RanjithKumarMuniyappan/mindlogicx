/*
 * ============================================================================
 * CONTENT — Legal / Legal Technology vertical
 * ============================================================================
 *
 * Extracted 2026-10-16 from the client's own deck:
 *   /home/ranjith/Downloads/Mindlogicx Website – Legal/MindlogicxWebsiteLegal.html
 *   READ-ONLY. Nothing in that folder was opened for writing, copied or moved.
 *
 * The deck is a Google-Docs export. It contains, in total: 2 `<h1>`, 10 `<h2>`,
 * 6 `<h3>`, one bulleted list, one numbered list, one 8-row table —
 * **ZERO `<img>` tags and ZERO `<a href>` anywhere.** Its cover line is
 * "Corporate Website Content | October 2026 | Proposed Version 1.0".
 *
 * This **replaces** the `/voice-of-law` page wholesale. That page was ported
 * from the 2025 Next.js frontend and its content module, `voice-of-law.js`,
 * is left untouched and unmodified — see "WHAT THE NEW DECK FIXES" below for
 * a point-by-point reconciliation against the 17 problems recorded there.
 *
 * ----------------------------------------------------------------------------
 * ⚠️ THE HEDGING IS LOAD-BEARING — DO NOT TIGHTEN IT
 * ----------------------------------------------------------------------------
 * **This is the most important instruction in this file.** This is a page
 * about legal services for a platform that does not exist yet, and legal
 * advertising is a regulated area in India: the Bar Council of India Rules,
 * Rule 36, restrict advertising and solicitation by or on behalf of
 * advocates. Every qualifier below is doing legal work, not stylistic work.
 *
 * The deck's author says so in the preamble, in plain words:
 *
 *   "Since the platform is under development, the website should communicate
 *    the planned capabilities and value proposition without implying that the
 *    services are already commercially available."
 *
 * and again in the implementation notes:
 *
 *   "Platform positioning: Describe the platform as being developed by
 *    Mindlogicx. Do not use wording such as “trusted by law firms worldwide,”
 *    “available globally,” or “24/7 legal assistance” until substantiated."
 *
 * Every one of these qualifiers is reproduced verbatim and must stay:
 *
 *   "is developing" (×4), "we are developing", "is being designed around",
 *   "The proposed platform will", "The proposed platform architecture will be
 *   designed around", "proposed Legal SaaS platform", "envisions",
 *   "Our vision is to", "Our goal is to", "Our objective:", "Our approach:",
 *   "is working towards", "is intended to support", "Planned pathways",
 *   "subject to regional availability", "will be introduced subject to local
 *   laws, regulatory requirements, and service availability",
 *   "Platform Under Development", "Legal Technology Platform – Under
 *   Development", "Conceptual architecture".
 *
 * **Copy-editing any of these into the present tense would turn a
 * description of an unbuilt platform into an advertisement for a live legal
 * service.** Do not let a proofreader "fix" them. Three in particular:
 *
 *   1. FREE LEGAL ADVICE — the deck makes **no free-of-charge promise at
 *      all.** There is no price, no "FREE", no "no hidden fees" anywhere in
 *      it. The only pricing word in the whole document is the opposite:
 *      "Subscription-based services designed for professional and citizen
 *      user segments." Nothing may be added here. (The old page's
 *      "FREE Legal advise from the licensed lawyers" is gone — see fix 4.)
 *   2. LAWYER NETWORK / CREDENTIALS — the deck's only such line is
 *      "Access to Legal Professionals / Planned pathways to connect citizens
 *      with suitable qualified legal professionals or authorised legal
 *      assistance services." **"Planned pathways" is the whole safeguard.**
 *      The deck does NOT claim a network exists, does NOT claim it is
 *      vetted, does NOT claim pan-India coverage, and names no count of
 *      lawyers. The old page claimed "a carefully vetted network of licensed
 *      legal professionals"; that claim is not in this deck and must not be
 *      reintroduced.
 *   3. SOS / EMERGENCY RESPONSE — the deck's only SOS copy is
 *      "SOS and Emergency Legal Assistance / Location-aware guidance to
 *      relevant emergency contacts, legal aid resources, and designated
 *      assistance channels, subject to regional availability." That is a
 *      promise to *point at* resources, not to respond. The implementation
 *      notes are explicit: "A future SOS feature should not imply emergency
 *      response, lawyer availability, or guaranteed intervention without
 *      operational arrangements in each country." **Do not add a response
 *      time, a hotline number, a "24/7" badge, or a panic-button UI.**
 *      "SOS" is used five times and is never expanded in the deck.
 *
 * ----------------------------------------------------------------------------
 * ⚠️ "HARVEY" IS NAMED IN THE DECK AND MUST NEVER REACH THE PAGE
 * ----------------------------------------------------------------------------
 * The implementation notes name **Harvey** — a US legal-AI company — as the
 * functional benchmark for the professional offering, and then say so
 * themselves: "It should not be mentioned on the public webpage." It is
 * recorded under `authorGuidance.implementationNotes` for audit, is
 * `rendered: false`, and appears in no page string in this file. Mirrors the
 * Flywire problem in finance.js. No other third party is named anywhere in
 * the deck — no client, no partner, no vendor, no standards body.
 *
 * ----------------------------------------------------------------------------
 * VERBATIM
 * ----------------------------------------------------------------------------
 * All page copy below is character-for-character from the deck. Notable:
 *   - **Spelling is British throughout**: "Analyse", "Organise", "recognise",
 *     "authorised", "organisations", "finalised", "towards". Not changed. (The
 *     Finance deck was American throughout — the two decks disagree with each
 *     other. House style is the client's call, not ours.)
 *   - **Apostrophes in body copy are straight ASCII `'`** (the export encodes
 *     them `&#39;`): "Mindlogicx's Knowledge Engineering approach",
 *     "Explore Mindlogicx's vision". All 6 occurrences are straight.
 *   - The only curly quotes in the document (“ ” ×3 pairs) are inside the
 *     implementation notes, around the three forbidden phrases. Preserved
 *     there; they appear in no page copy.
 *   - En dash – appears 4 times: the document title, "Legal Technology
 *     Platform – Under Development", "Sections 1–7", and the SEO page title
 *     "… Legal Intelligence – Mindlogicx". There are NO em dashes anywhere.
 *   - Middle dot · appears 13 times, exclusively as the node separator in the
 *     section 5 architecture diagram.
 *   - No double spaces, no trailing spaces, no tabs, no non-breaking spaces,
 *     no `&nbsp;` anywhere in the body copy.
 *
 * TYPOS: **none found.** Every word in this deck is spelled correctly and
 * every sentence parses. This is worth stating plainly because the page it
 * replaces carried six errors in its first two sections (see fix 4). The
 * oddities that do exist are structural, not orthographic, and are listed
 * next. Nothing has been corrected, because there was nothing to correct.
 *
 * STRUCTURAL ODDITIES IN THE SOURCE — all left exactly as written:
 *   1. **Two `<h1>` elements, and an `<h2>` sits between them.** The first
 *      h1, "Mindlogicx Website – Legal", is the *document's* title — it is
 *      not page copy and is not used. **The real page heading is the second
 *      h1: "Transforming Legal Services Through AI and Knowledge
 *      Engineering"** (64 characters), which sits under the h2 "Section 1.
 *      Hero Banner". So the document's heading order is h1 → h2 → h1. Only
 *      the second h1 is used, as `hero.heading`.
 *   2. **"Section N." is editorial scaffolding, not page copy.** Every
 *      section heading in the deck is prefixed "Section 1." … "Section 8.".
 *      The reader should see "Our Vision for Legal Technology", not
 *      "Section 2. Our Vision for Legal Technology". `heading` holds the
 *      heading without the prefix; `number` holds the deck's own numbering
 *      for audit. Same treatment as finance.js and health-tech-solutions.js.
 *   3. **The closing CTA block is unnumbered.** "Be Part of Our Legal
 *      Technology Journey" is a plain `<h2>` with no "Section N." prefix and
 *      no `<h3>` subheading, sitting between section 7 and section 8. It is
 *      page copy; it is recorded with `number: null`.
 *   4. **The deck miscounts its own visible sections.** It says "I recommend
 *      retaining these eight sections, with Sections 1–7 forming the visible
 *      webpage and Section 8 serving as developer metadata" — but the
 *      unnumbered closing CTA block (oddity 3) is also visible, so there are
 *      **eight** visible blocks, not seven, and nine blocks in total. Not
 *      corrected.
 *   5. **Author guidance is interleaved with page copy inside section 1.**
 *      Two of section 1's seven paragraphs are addressed to the builder, not
 *      the reader: "Suggested CTA: …" and "UI/UX guidance: …". Both are
 *      lifted out into `authorGuidance`.
 *   6. **The card titles in sections 3, 4 and 5 are not headings.** All 15
 *      of them are plain `<p>` at normal weight, visually indistinguishable
 *      in the export from the body text beneath them. The title/description
 *      pairing below is read from the strict alternating order, which is
 *      unambiguous. They need real heading or `<dt>` markup in the component.
 *   7. **Section 5 captions a diagram that does not exist.** The line
 *      "Conceptual architecture for the proposed Legal SaaS platform." is a
 *      caption with nothing above it. Unlike finance.js, where the captioned
 *      workflow was absent entirely, here the diagram's *content* is present
 *      as four title + node-list paragraph pairs — only the graphic is
 *      missing. Recorded as `architecture.diagramGraphic.missing = true`.
 *   8. **Heading levels are consistent for sections 2–7** (h2 + h3) but the
 *      three non-content blocks — the closing CTA, "Section 8. SEO and
 *      Metadata" and "Website Implementation Recommendations" — are all `h2`
 *      too, i.e. the builder-facing blocks sit at the same level as the page
 *      sections. Fine in a Google Doc, wrong in HTML.
 *
 * ----------------------------------------------------------------------------
 * WHAT IS AUTHOR GUIDANCE, NOT PAGE COPY  (`authorGuidance`, rendered: false)
 * ----------------------------------------------------------------------------
 * Four blocks are instructions to whoever builds this page. None of them is
 * words for the reader and none is rendered:
 *
 *   a. **The entire pre-section preamble** — the document h1, the cover line
 *      "Corporate Website Content | October 2026 | Proposed Version 1.0", the
 *      "Positioning:" line, the "Tagline:" line, and the two paragraphs that
 *      describe the document's own purpose ("The Legal vertical will be
 *      positioned as…", "Since the platform is under development, the website
 *      should…").
 *      ⚠️ **Judgement call worth the client's attention:** the tagline
 *      "Advancing Legal Intelligence. Empowering Citizen Rights." is good
 *      page copy and is labelled "Tagline:", but the deck never places it in
 *      any section. It is recorded verbatim in `authorGuidance.preamble.
 *      tagline` and NOT rendered. If the client wants it in the hero, that is
 *      a one-line decision — but it is their decision, not ours.
 *   b. **The two builder-facing lines inside section 1** — "Suggested CTA:
 *      Explore Our Legal Vision / Contact Us" and the "UI/UX guidance:"
 *      sentence. The CTA *labels* are page copy and are carried into
 *      `hero.ctas`; the "Suggested CTA:" prefix and the UI/UX sentence are
 *      not.
 *   c. **"Section 8. SEO and Metadata"** — an 8-row table. Page title, meta
 *      description and the two keyword lists are lifted into `seo` below as
 *      metadata. URL slug, target audience and indexing rows are recorded
 *      there as notes. The table is never printed.
 *   d. **"Website Implementation Recommendations"** — two lead paragraphs, a
 *      five-item numbered list and an "Overall recommendation:" paragraph.
 *      This is where Harvey is named. Recorded in full, rendered never.
 *
 * This mirrors how finance.js, health-tech-solutions.js and
 * knowledge-engineering.js handled the same trailing blocks in their decks.
 *
 * ----------------------------------------------------------------------------
 * IMAGES
 * ----------------------------------------------------------------------------
 * **The deck references no images at all.** `grep -c '<img'` returns 0.
 * There is no sibling `images/` folder — the deck directory contains exactly
 * one file, the HTML. So there is no alt text to audit, no third-party
 * licensing problem (contrast finance.js, where 21 of 22 images carried
 * competitors' names in their alt text), and nothing was copied, moved or
 * converted. See `images` below and client flag 6: every visual on this page
 * has to be commissioned or generated, and the five legacy /voice-of-law
 * photographs are NOT re-authorised by this deck.
 *
 * ============================================================================
 * ⚠️ FLAGGED FOR THE CLIENT
 * ============================================================================
 *  1. **HARVEY IS NAMED IN THE DECK.** See the block above. Builder-facing
 *     only, never rendered, but the client should know their own document
 *     names a US legal-AI competitor as the model being benchmarked — and
 *     that the document itself says not to publish the name.
 *  2. **REGULATORY REVIEW IS STILL REQUIRED, AND THE DECK DOES NOT MENTION
 *     INDIA.** The deck is written for a global audience; the nearest it
 *     comes to the issue is "will be introduced subject to local laws,
 *     regulatory requirements, and service availability" and the author's
 *     private note that "Privacy, legal privilege, jurisdiction-specific
 *     regulation, and human oversight need to be considered during product
 *     development." Mindlogicx is an Indian company publishing an Indian
 *     corporate site, so **Bar Council of India Rule 36 applies to this page
 *     and is nowhere addressed in the deck.** The copy is far more careful
 *     than the page it replaces, but it still needs legal sign-off before
 *     publication — particularly sections 4 (citizen services) and 6.
 *  3. **NO DISCLAIMER SENTENCE EXISTS ANYWHERE IN THE DECK.** The author's
 *     own notes ask that "Citizen-facing services should distinguish general
 *     legal information from professional legal advice" — but no such
 *     sentence was written for the page. The closest the page copy comes is
 *     "AI assists legal professionals in research, analysis, and preparation,
 *     while legal interpretation, advice, and decisions remain under
 *     qualified human oversight", which is about the *professional* product,
 *     not about citizens. A citizen-facing "this is information, not legal
 *     advice" disclaimer is **missing and must be written by the client** —
 *     it has NOT been invented here. Recorded as
 *     `requiredDisclaimer.missing = true`.
 *  4. **NO LINKS, SO EVERY CTA DESTINATION BELOW IS THIS PROJECT'S CHOICE.**
 *     The deck has no `<a href>` at all. It supplies three CTA labels as
 *     plain text ("Explore Our Legal Vision", "Contact Us", "Connect With
 *     Us") with no targets. The `link`/`target` values written below are this
 *     project's, recorded in each `ctaNote`. No placeholder `href="#"` and no
 *     broken link exists in the deck — there is nothing to be broken.
 *  5. **THE ROUTE DOES NOT MATCH THE DECK, AND THE PRODUCT NAME IS GONE.**
 *     The deck asks for slug `/legal`. This site routes Legal at
 *     **`/voice-of-law`** (src/App.jsx:84; menu entries at src/content/
 *     site.js:541, 921, 1022, 1158) and src/pages/KnowledgeEngineering.jsx:74
 *     already redirects `/legal/` → `/voice-of-law`. `/voice-of-law` is kept
 *     so the existing menu and redirect keep working.
 *     ⚠️ But note the consequence: **"Voice of Law" appears nowhere in this
 *     deck.** The deck says the platform name "has not been finalised" and
 *     asks to "retain Mindlogicx Legal Technology as the corporate vertical
 *     name". So the route, and the site.js label "LegalTech", now name a
 *     product that the page no longer mentions. Client must decide: rename
 *     the route to `/legal` (and update five references), or revive "Voice of
 *     Law" in the copy. This is a real inconsistency, not a cosmetic one.
 *  6. **NO IMAGERY EXISTS.** Zero images in the deck, and the only art
 *     direction is one sentence of builder guidance: "Use a modern legal
 *     technology visual combining AI, digital knowledge, and justice. Avoid
 *     conventional courtroom-only imagery." The five legacy photographs
 *     currently on /voice-of-law belong to the superseded page and this deck
 *     does not re-authorise them; their licensing was never recorded either.
 *     Budget for commissioned or generated art.
 *  7. **SECTION 5 NEEDS A DIAGRAM DRAWN.** Four labelled layers and a caption
 *     exist as text; the graphic does not. See oddity 7.
 *  8. **DUPLICATED COPY — WORTH A TRIM PASS BY THE CLIENT, NOT BY US.**
 *     Nothing has been cut. But: section 7 ("brings together professional
 *     productivity, citizen empowerment, and responsible AI innovation") and
 *     the closing CTA block restate section 2 and the hero without adding
 *     information; the two-pillar split is stated four times (hero strapline,
 *     section 2's two service areas, section 5's two output layers, section 7
 *     subheading); and the under-development status is stated three times in
 *     two different forms — "Platform Under Development" (hero badge, title
 *     case) and "Legal Technology Platform – Under Development" (closing
 *     badge). Also note "Global SaaS Vision" (hero badge) and "A Global SaaS
 *     Platform for Legal Services" (section 6 heading) are the same idea in
 *     two places.
 *  9. **META DESCRIPTION IS 201 CHARACTERS** — search results cut at roughly
 *     155. The page title is 61, which is borderline (~60 is the usual
 *     limit). Both verbatim; neither shortened here.
 * 10. **ACCESSIBILITY.** (a) Two `<h1>`s with an `<h2>` between them —
 *     oddity 1; emit exactly one `<h1>` and start the section headings at
 *     `<h2>`. (b) The 15 card titles are not marked up as headings —
 *     oddity 6. (c) The "Section N." prefixes must not be rendered —
 *     oddity 2. (d) The section 5 diagram, once drawn, will carry the only
 *     information in that section; it needs a real text alternative, and the
 *     four layer labels below are it. (e) The middle-dot node lists
 *     ("Legislation · Case Law · …") read as one run-on sentence to a screen
 *     reader; render them as real `<ul>`s, which is why `parts` is provided
 *     alongside the verbatim string. (f) The hero's two status badges are
 *     text, not images — keep them text.
 * 11. **UNSUBSTANTIATED CLAIMS: effectively none, which is the point.** The
 *     deck contains **no statistic of any kind** — no number, no percentage,
 *     no client count, no uptime figure, no jurisdiction count, no price, no
 *     certification, no award, no testimonial, no logo. Nothing has been
 *     invented here. **Any figure, badge or logo that appears on the built
 *     page came from somewhere other than this deck.** The two claims that
 *     need watching are both hedged and both already called out above:
 *     "Planned pathways to connect citizens with suitable qualified legal
 *     professionals" (flag ⚠️2 in the hedging block) and "Security and
 *     privacy: Protection of sensitive legal information through appropriate
 *     security, access control, and data governance measures" — note that
 *     this names **no standard**: no ISO 27001, no SOC 2, no GDPR. Do not add
 *     one. (The superseded page's dead LegalTechContent block did claim all
 *     three — see fix 8.)
 *
 * ============================================================================
 * WHAT THE NEW DECK FIXES, AND WHAT IT DOESN'T
 * ============================================================================
 * Reconciled against the problems recorded in voice-of-law.js (unmodified):
 *
 *  RESOLVED BY THE NEW COPY
 *   1. No `<h1>` on the page (old concern 4) → the deck supplies a real page
 *      h1, "Transforming Legal Services Through AI and Knowledge
 *      Engineering". Caveat: it supplies *two* h1s; see oddity 1 and flag 10.
 *   2. "VOL" never expanded (old concern 15) → the abbreviation does not
 *      appear in this deck at all. The three-way name inconsistency
 *      ("Voice Of Law" / "Voice of Law" / "VOL") is gone. New problem in its
 *      place: the product has no name at all — see flag 5.
 *   3. Swapped images and declared-vs-actual dimension mismatches (old
 *      concerns 7 and 8) → moot; the deck has no images. See flag 6.
 *   4. "FREE Legal advise" typo + unqualified free-advice promise (old
 *      concerns 1 and 2) → both gone. No typos at all in the new deck, and no
 *      pricing claim except "Subscription-based services". The six grammar
 *      errors in the old opening ("Every needs to be heard", "deserves es
 *      justice", "ourr heart", "a qualified legal professionals", the bare
 *      fragment "Links to Resources") are all gone with the old copy.
 *   5. SOS emergency promises with no SLA (old concern 3) → substantially
 *      resolved. "Immediate attention to SOS call", "Realtime immediate
 *      resolution", "If required personal services will be provided on the
 *      spot" are all gone. The new SOS line promises only "Location-aware
 *      guidance … subject to regional availability". **This is the single
 *      biggest improvement in the deck and must not be undone** — see the
 *      hedging block, item 3.
 *   6. The vetted-network and pan-India-coverage claims (old concern 3) →
 *      gone, replaced by "Planned pathways".
 *   7. SEO description described a different product from the page (old
 *      concern 13) → resolved. The new meta description matches the new page:
 *      professionals + citizens, no case tracking, no e-learning, no
 *      judiciary. It is too long, though — flag 9.
 *   8. Orphan LegalTechContent block with SOC 2 / ISO 27001 / GDPR / "60
 *      percent" claims and five unnamed-elsewhere products (old concern 12) →
 *      not carried over. Nothing in the new deck names a standard, a
 *      certification or a product. See flag 11.
 *   9. WhatsApp deep link to a personal-style number as the only contact
 *      route (old concern 6) → the deck specifies no destination at all, so
 *      the WhatsApp link does not survive. Its replacement is this project's
 *      choice — flag 4.
 *
 *  NOT ADDRESSED BY THE DECK (still the builder's or client's problem)
 *  10. div-with-onClick CTA, not keyboard reachable (old concern 5) → a
 *      component defect, not a copy defect. The deck gives labels only. The
 *      new component must render real `<a>`/`<button>` elements.
 *  11. Heading hierarchy (old concern 4) → improved but not fixed; the deck
 *      hands over two h1s, an h2 before the first h1, and 15 card titles that
 *      are not headings. See flag 10.
 *  12. Alt text (old concerns 9, 10) → not addressed because there are no
 *      images. It becomes a live problem the moment art is commissioned.
 *  13. Empty `<p>` in the CTA band (old concern 11) → component-level, out of
 *      scope for the deck. The new closing block does have body copy, so the
 *      empty paragraph has no reason to recur.
 *  14. /vol_academy and /vol_connect not linked (old concern 14) → the deck
 *      mentions neither, and mentions no sub-pages at all. Still unresolved;
 *      the client must say whether those routes exist on the new site.
 *  15. Missing `key` prop in the USP map (old concern 17) → code, not copy.
 * ============================================================================
 */

export const legalSolutionsPage = {
  /* Nav label. The site's existing menu entries read "Legal" (site.js:1022)
     and "LegalTech" (site.js:1158) — inconsistent already; see flag 5. The
     deck's own document title, "Mindlogicx Website – Legal", is a document
     title and not a page name (oddity 1), so it is not used here. The deck
     asks that "Mindlogicx Legal Technology" be retained as the corporate
     vertical name until a product brand is chosen. */
  title: 'Legal',

  /* See flag 5 — the deck asks for /legal; this site is already on
     /voice-of-law and redirects /legal/ to it. */
  route: '/voice-of-law',

  seo: {
    /* From the deck's "Section 8. SEO and Metadata" table — metadata, never
       rendered as page copy. Values verbatim, including the en dash. */
    title: 'Legal Technology & AI-Powered Legal Intelligence – Mindlogicx',
    titleNote: '61 characters — right at the edge of what search results show.',
    description:
      "Explore Mindlogicx's vision for AI-powered legal technology, supporting legal professionals with intelligent workflows and empowering citizens through legal education, rights awareness, and assistance.",
    descriptionNote:
      '201 characters — search results will cut it at roughly 155. See flag 9.',
    primaryKeywords: [
      'AI Legal Technology',
      'Legal Intelligence',
      'Legal SaaS Platform',
      'Legal Knowledge Engineering',
    ],
    secondaryKeywords: [
      'AI Legal Research',
      'Legal Document Analysis',
      'Citizen Legal Rights',
      'Legal Education',
      'Legal Assistance',
      'Legal SOS',
    ],
    suggestedUrl: '/legal',
    suggestedUrlNote:
      'Not adopted — this site already routes Legal at /voice-of-law and redirects /legal/ to it. See flag 5.',
    targetAudience:
      'Legal Professionals, Law Firms, Corporate Legal Teams, Citizens, Legal Institutions',
    indexing: 'Indexable corporate vertical page',
    openGraph: {
      missing: true,
      note: 'The deck specifies no og:* or twitter:* values. Nothing invented.',
    },
  },

  /*
   * ==========================================================================
   * IMAGES — there are none. See flag 6.
   * ==========================================================================
   * The deck contains zero <img> tags and its folder contains only the HTML
   * file. Nothing was copied, moved or converted, because there was nothing
   * to copy. No alt text exists to audit and no third-party company or
   * product is named in any image (contrast finance.js, where 21 of 22
   * images carried competitors' names).
   */
  images: {
    none: true,
    deckImageCount: 0,
    sourceDir: '/home/ranjith/Downloads/Mindlogicx Website – Legal',
    sourceDirContents: ['MindlogicxWebsiteLegal.html'],
    note: 'No image is referenced, named or attached anywhere in the deck. Every visual on this page must be commissioned or generated. The five legacy photographs on the superseded /voice-of-law page are NOT re-authorised by this deck and their licensing was never recorded.',
    /* The deck's only art direction. It is builder guidance, not page copy —
       the same sentence is recorded in authorGuidance.heroUiUxGuidance. */
    artDirection:
      'UI/UX guidance: Use a modern legal technology visual combining AI, digital knowledge, and justice. Avoid conventional courtroom-only imagery.',
  },

  /* Deck "Section 1. Hero Banner". The page h1 is the deck's SECOND h1 —
     see oddity 1. */
  hero: {
    number: '1.',
    deckHeading: 'Hero Banner',
    heading: 'Transforming Legal Services Through AI and Knowledge Engineering',
    strapline:
      'Empowering legal professionals with intelligent technology while making legal knowledge, rights awareness, and assistance more accessible to citizens worldwide.',
    body: [
      'Mindlogicx is developing an AI-powered legal technology platform that brings together legal intelligence, knowledge accessibility, and digital assistance within a unified SaaS ecosystem.',
    ],
    /* Two short standalone lines the deck sets on their own, badge-style, with
       no surrounding sentence. Title case is the deck's. The first is the
       under-development disclaimer and must be rendered prominently; see the
       hedging block. */
    badges: ['Platform Under Development', 'Global SaaS Vision'],
    badgesNote:
      'Rendered as two plain <p> elements in the deck, the first with no paragraph padding. "Platform Under Development" is a regulatory statement, not decoration — do not drop it in a redesign. Note the closing block carries the same disclaimer in a different wording; see flag 8.',
    /* The deck writes one line: "Suggested CTA: Explore Our Legal Vision /
       Contact Us" — two labels separated by a slash, no destinations. */
    ctas: [
      {
        label: 'Explore Our Legal Vision',
        deckLine: 'Suggested CTA: Explore Our Legal Vision / Contact Us',
        target: '#legal-technology-vision',
      },
      {
        label: 'Contact Us',
        deckLine: 'Suggested CTA: Explore Our Legal Vision / Contact Us',
        link: '/contact-us',
      },
    ],
    ctaNote:
      'The deck gives labels only, on one line prefixed "Suggested CTA:" and separated by " / ". It contains no hyperlinks at all, so the anchor and the /contact-us path are THIS PROJECT\'S choices, not the deck\'s. See flag 4.',
  },

  sections: [
    {
      id: 'legal-technology-vision',
      number: '2.',
      heading: 'Our Vision for Legal Technology',
      subheading: 'Making Legal Intelligence Accessible to Everyone',
      body: [
        'At Mindlogicx, we believe technology can bridge the gap between complex legal systems and the people who depend on them.',
        'Building on our Knowledge Engineering expertise, we are developing a next-generation legal technology platform designed to simplify legal workflows, improve access to legal knowledge, and empower individuals to understand and exercise their rights.',
        'Our vision is to create a globally accessible SaaS ecosystem that combines Artificial Intelligence, legal knowledge engineering, and human expertise to serve both legal professionals and citizens.',
        'The platform is being designed around two complementary service areas:',
      ],
      /* Two title + description pairs, both plain <p> at body weight — the
         titles are not headings. These are the page's two pillars and they
         map onto sections 3 and 4. */
      serviceAreas: [
        {
          title: 'Legal Professional Intelligence',
          description:
            'Intelligent legal research, drafting, document analysis, and workflow assistance for lawyers and legal teams.',
          leadsTo: 'professional-intelligence',
        },
        {
          title: 'Citizen Legal Empowerment',
          description:
            'Legal education, rights awareness, guided assistance, and SOS support to help citizens navigate legal challenges.',
          leadsTo: 'citizen-empowerment',
        },
      ],
      serviceAreasNote:
        '`leadsTo` is this project\'s cross-reference for linking, not deck content. Note that "SOS support" is named here in a one-line summary with no qualifier; the qualifier ("subject to regional availability") lives on the full SOS item in the citizen-empowerment section. Keep the two near each other, or the summary reads as a firmer promise than the deck intends.',
    },

    {
      id: 'professional-intelligence',
      number: '3.',
      heading: 'Legal Intelligence for Professionals',
      subheading: 'Empowering Legal Professionals with AI',
      body: [
        'Mindlogicx is developing AI-assisted capabilities to help lawyers, law firms, and corporate legal teams manage legal information, streamline repetitive activities, and focus on high-value legal work.',
        'The proposed platform will combine intelligent research, legal document processing, and workflow automation with professional oversight.',
      ],
      /* Five title + description pairs. Every title is a plain <p> at body
         weight, not a heading — see oddity 6. British spellings "Analyse"
         and "Organise" are the deck's. */
      items: [
        {
          title: 'AI-Assisted Legal Research',
          description:
            'Navigate legal information, legislation, case law, and legal precedents using intelligent search, contextual analysis, and source-linked insights.',
        },
        {
          title: 'Intelligent Legal Drafting',
          description:
            'Assist in preparing agreements, contracts, legal notices, pleadings, and other legal documents using AI-supported drafting workflows.',
        },
        {
          title: 'Document Review and Analysis',
          description:
            'Analyse legal documents, identify key clauses, extract relevant information, and highlight potential inconsistencies or risks for professional review.',
        },
        {
          title: 'Case Preparation and Knowledge Management',
          description:
            'Organise case information, generate summaries, develop case chronologies, and support structured access to legal knowledge.',
        },
        {
          title: 'Legal Workflow Intelligence',
          description:
            'Support legal teams with task coordination, document collaboration, review workflows, and knowledge-driven process automation.',
        },
      ],
      /* ⚠️ The human-oversight statement. This is the deck's own professional-
         liability safeguard and the only sentence in the whole document that
         draws the line between assistance and advice. Render it; do not
         shorten it; do not move it into a footnote. */
      closingStatement:
        'Our approach: AI assists legal professionals in research, analysis, and preparation, while legal interpretation, advice, and decisions remain under qualified human oversight.',
      closingStatementNote:
        'Load-bearing. Note it covers the PROFESSIONAL product only — there is no equivalent sentence for citizens anywhere in the deck. See flag 3 and `requiredDisclaimer`.',
    },

    {
      id: 'citizen-empowerment',
      number: '4.',
      heading: 'Legal Education and Empowerment for Citizens',
      subheading: 'Know Your Rights. Understand Your Options. Access Assistance.',
      body: [
        'Access to legal knowledge should not be limited by technical complexity, language, or familiarity with legal procedures.',
        'Mindlogicx envisions a citizen-focused digital platform designed to make legal information easier to understand, help individuals recognise their rights, and guide them towards appropriate assistance.',
      ],
      /* Six title + description pairs, all plain <p> — see oddity 6.
         ⚠️ This is the regulated-exposure section of the page. Items 5 and 6
         are the two the hedging block singles out; their qualifiers
         ("Planned pathways", "subject to regional availability") are the
         entire safeguard and must survive any copy-edit. */
      items: [
        {
          title: 'Legal Education and Awareness',
          description:
            'Simplified legal learning resources covering fundamental rights, responsibilities, common legal situations, and everyday legal matters.',
        },
        {
          title: 'Citizen Rights Empowerment',
          description:
            'Contextual information to help individuals understand their rights, identify possible violations, and explore appropriate legal remedies.',
        },
        {
          title: 'AI-Guided Legal Information',
          description:
            'Conversational assistance to explain legal terminology, procedures, documentation requirements, and available channels for support.',
          note: 'A citizen-facing legal chatbot. The deck says "Legal Information", not advice, and that distinction is deliberate — see flag 3.',
        },
        {
          title: 'Legal Documentation Assistance',
          description:
            'Guided support for preparing basic applications, representations, complaints, and other commonly required legal documents.',
        },
        {
          title: 'Access to Legal Professionals',
          description:
            'Planned pathways to connect citizens with suitable qualified legal professionals or authorised legal assistance services.',
          hedged: true,
          note: '⚠️ LAWYER-NETWORK CLAIM. "Planned pathways" is the whole safeguard. The deck does not claim a network exists, is vetted, or covers any territory, and names no count of lawyers. Do not tighten. See the hedging block, item 2.',
        },
        {
          title: 'SOS and Emergency Legal Assistance',
          description:
            'Location-aware guidance to relevant emergency contacts, legal aid resources, and designated assistance channels, subject to regional availability.',
          hedged: true,
          note: '⚠️ EMERGENCY-RESPONSE CLAIM. This promises only to point at resources, never to respond, dispatch or intervene. "subject to regional availability" must stay. No response time, no hotline, no "24/7", no panic button — the deck\'s own notes forbid implying "emergency response, lawyer availability, or guaranteed intervention". See the hedging block, item 3. "SOS" is never expanded in the deck.',
        },
      ],
      closingStatement:
        'Our objective: Build legal awareness, improve citizen confidence, and make pathways to appropriate legal assistance more accessible.',
    },

    {
      id: 'knowledge-engineering-and-ai',
      number: '5.',
      heading: 'Powered by Knowledge Engineering and AI',
      subheading: 'Turning Legal Knowledge into Actionable Intelligence',
      body: [
        "The proposed platform will leverage Mindlogicx's Knowledge Engineering approach to transform complex legal information into structured, searchable, and context-aware digital knowledge.",
      ],
      /*
       * The deck captions a diagram it never draws (oddity 7). Its CONTENT is
       * here as four title + node-list pairs in source order — inputs, then
       * the Mindlogicx layer, then the two outputs. Only the graphic is
       * missing. `nodes` is the deck's verbatim middle-dot string; `parts` is
       * that same string split on " · " so the component can emit a real list
       * (see flag 10e). No node text was altered.
       */
      architecture: {
        diagramGraphic: {
          missing: true,
          note: 'The deck gives the caption and all four layers as text but contains no diagram, image or figure. Someone has to draw it. Once drawn, the four layer labels and their node lists below are its text alternative.',
        },
        caption: 'Conceptual architecture for the proposed Legal SaaS platform.',
        layers: [
          {
            title: 'Legal Knowledge Sources',
            nodes:
              'Legislation · Case Law · Regulations · Legal Documents · Verified Knowledge Resources',
            parts: [
              'Legislation',
              'Case Law',
              'Regulations',
              'Legal Documents',
              'Verified Knowledge Resources',
            ],
          },
          {
            title: 'Mindlogicx Knowledge Engineering and AI Layer',
            nodes:
              'Knowledge Structuring · Intelligent Retrieval · Contextual Analysis · AI-Assisted Workflows',
            parts: [
              'Knowledge Structuring',
              'Intelligent Retrieval',
              'Contextual Analysis',
              'AI-Assisted Workflows',
            ],
          },
          {
            title: 'Professional Intelligence',
            nodes: 'Research · Drafting · Analysis · Workflow',
            parts: ['Research', 'Drafting', 'Analysis', 'Workflow'],
          },
          {
            title: 'Citizen Empowerment',
            nodes: 'Education · Rights · Guidance · SOS',
            parts: ['Education', 'Rights', 'Guidance', 'SOS'],
          },
        ],
        layersNote:
          'Four of the deck\'s plain <p> pairs, in source order. The last two layers are the outputs and deliberately echo the section 3 and 4 headings. `parts` is a mechanical split of `nodes` on " · " — no character was changed. The 13 middle dots in the deck are all in these four strings.',
      },
      closingStatement:
        'This approach is intended to support jurisdiction-aware legal information, multilingual accessibility, secure information handling, and responsible AI-assisted services.',
      closingStatementNote:
        '"is intended to support" — a hedge, not a capability list. Note it claims no security standard by name; see flag 11.',
    },

    {
      id: 'global-saas-platform',
      number: '6.',
      heading: 'A Global SaaS Platform for Legal Services',
      subheading: 'One Vision. Multiple Jurisdictions. Accessible Legal Intelligence.',
      body: [
        'Mindlogicx is developing its legal technology initiative with a global SaaS vision, enabling legal knowledge and digital assistance services to be adapted for different jurisdictions, languages, and user requirements.',
        'The proposed platform architecture will be designed around:',
      ],
      /* The deck's only bulleted list: six <li>s, each a single text run of
         the form "Label: sentence." with NO bold on the label — so the label
         is not separately marked up and the items are stored verbatim as
         whole strings rather than split, to avoid inventing structure. */
      items: [
        'Global accessibility: Web-based services for legal professionals and citizens.',
        'Jurisdiction-aware intelligence: Legal information and workflows aligned with applicable national and regional legal frameworks.',
        'Multilingual engagement: Simplified legal communication for diverse user communities.',
        'Security and privacy: Protection of sensitive legal information through appropriate security, access control, and data governance measures.',
        'Scalable SaaS delivery: Subscription-based services designed for professional and citizen user segments.',
        'Responsible AI: Explainable, source-grounded outputs and human oversight for consequential legal activities.',
      ],
      itemsNote:
        'Six items, verbatim as single strings. The "Label:" prefix is part of the same unstyled text run in the deck — if the component bolds the label, that is a presentation choice, not deck content. Two to watch: item 4 claims "appropriate security, access control, and data governance measures" and names NO standard (no ISO, no SOC 2, no GDPR) — do not add one (flag 11); item 5 is the deck\'s only pricing statement and it is "Subscription-based", i.e. the opposite of the superseded page\'s free-advice promise.',
      /* ⚠️ The jurisdictional disclaimer. This is the sentence that keeps the
         "global" framing of this section from becoming a claim of global
         availability, and it specifically covers the SOS feature. */
      disclaimer:
        'Country-specific capabilities, professional services, and SOS integrations will be introduced subject to local laws, regulatory requirements, and service availability.',
      disclaimerNote:
        'Load-bearing and must render on the page, not in a tooltip. It is the only place the deck acknowledges jurisdictional regulation at all — and it still never names India or the Bar Council of India. See flag 2.',
    },

    {
      id: 'accessible-legal-intelligence',
      number: '7.',
      heading: 'Building the Future of Accessible Legal Intelligence',
      subheading: 'Technology for Professionals. Knowledge for Citizens. Access for All.',
      body: [
        'Mindlogicx is working towards a legal technology ecosystem that brings together professional productivity, citizen empowerment, and responsible AI innovation.',
        'Our goal is to make legal processes more efficient for professionals while helping citizens become better informed, more confident, and better equipped to seek appropriate assistance.',
      ],
      sectionNote:
        'Two paragraphs, no items, no image. This section restates the hero and section 2 without adding information — see flag 8. Nothing has been cut; the trim decision is the client\'s.',
    },

    {
      id: 'be-part-of-the-journey',
      /* Unnumbered in the deck — a closing CTA block sitting between section 7
         and the metadata table, marked up as a plain <h2> with no subheading.
         See oddity 3. */
      number: null,
      heading: 'Be Part of Our Legal Technology Journey',
      subheading: null,
      body: [
        'We welcome engagement from legal professionals, law firms, institutions, and organisations interested in exploring the future of AI-enabled legal services and citizen legal empowerment.',
      ],
      ctas: [
        {
          label: 'Connect With Us',
          deckLine: 'Suggested CTA: Connect With Us',
          link: '/contact-us',
        },
      ],
      ctaNote:
        'Label only in the deck, prefixed "Suggested CTA:", with no destination. "/contact-us" is this site\'s contact path and is this project\'s choice, not the deck\'s. See flag 4. Note the deck gives no email, no phone number and no form anywhere.',
      /* ⚠️ Second under-development disclaimer, closing the page. Different
         wording from the hero badge — see flag 8. Render verbatim, en dash
         included. */
      statusBadge: 'Legal Technology Platform – Under Development',
    },
  ],

  /*
   * ==========================================================================
   * A DISCLAIMER THE DECK ASKS FOR BUT NEVER WROTE. See flag 3.
   * ==========================================================================
   * Recorded as missing rather than drafted. Writing it would mean inventing
   * legal copy for a regulated service, which is the client's job and their
   * counsel's, not ours.
   */
  requiredDisclaimer: {
    missing: true,
    rendered: false,
    whyNeeded:
      'The deck\'s implementation notes ask that "Citizen-facing services should distinguish general legal information from professional legal advice." No sentence doing that was written for the page.',
    whatExistsInstead:
      'Only the professional-side statement in section 3: "Our approach: AI assists legal professionals in research, analysis, and preparation, while legal interpretation, advice, and decisions remain under qualified human oversight." It does not cover citizens.',
    note: 'NOT drafted here. The client must supply the wording, and it should be reviewed against Bar Council of India Rule 36 along with the rest of the page.',
  },

  /*
   * ==========================================================================
   * AUTHOR GUIDANCE — instructions to the page builder, NOT words for the
   * reader. Recorded for audit; never rendered. See the header.
   * ==========================================================================
   */
  authorGuidance: {
    rendered: false,

    /* (a) Everything before "Section 1. Hero Banner". */
    preamble: {
      documentTitle: 'Mindlogicx Website – Legal',
      documentTitleNote:
        'The deck\'s first <h1>. A document title, not the page heading — see oddity 1.',
      coverLine: 'Corporate Website Content | October 2026 | Proposed Version 1.0',
      positioning: 'Positioning: AI-Powered Legal Technology for Professionals and Citizens',
      /* ⚠️ Good page copy that the deck never places on the page. Recorded,
         not rendered — the client decides. See author-guidance note (a). */
      tagline: 'Tagline: Advancing Legal Intelligence. Empowering Citizen Rights.',
      taglineNote:
        'Verbatim including the "Tagline: " label. The phrase itself is "Advancing Legal Intelligence. Empowering Citizen Rights." The deck assigns it to no section, so it is treated as guidance and is NOT rendered. If the client wants it in the hero, that is their call to make.',
      paragraphs: [
        "The Legal vertical will be positioned as an emerging domain within Mindlogicx's Knowledge Engineering framework. The content will highlight the company's vision to develop a global SaaS platform serving two distinct audiences: legal professionals and citizens.",
        'Since the platform is under development, the website should communicate the planned capabilities and value proposition without implying that the services are already commercially available.',
      ],
      note: 'Both paragraphs describe the document rather than address the reader. The second is the deck\'s own statement of why the hedging exists — quoted in the header.',
    },

    /* (b) The two builder-facing lines interleaved with section 1's page copy.
       See oddity 5. The CTA labels themselves are carried into hero.ctas. */
    heroSuggestedCta: 'Suggested CTA: Explore Our Legal Vision / Contact Us',
    heroUiUxGuidance:
      'UI/UX guidance: Use a modern legal technology visual combining AI, digital knowledge, and justice. Avoid conventional courtroom-only imagery.',
    heroUiUxGuidanceNote:
      'The deck\'s only art direction, and the only thing it says about imagery at all. Also recorded at `images.artDirection`. See flag 6.',

    /* (c) "Section 8. SEO and Metadata" — an 8-row table. Values are carried
       into `seo` above. The deck's implementation note calls section 8
       "developer metadata". */
    seoTable: {
      rendered: false,
      deckHeading: 'Section 8. SEO and Metadata',
      headings: ['Element', 'Proposed Content'],
      rows: [
        ['Page title', 'Legal Technology & AI-Powered Legal Intelligence – Mindlogicx'],
        [
          'Meta description',
          "Explore Mindlogicx's vision for AI-powered legal technology, supporting legal professionals with intelligent workflows and empowering citizens through legal education, rights awareness, and assistance.",
        ],
        ['URL slug', '/legal'],
        [
          'Primary keywords',
          'AI Legal Technology, Legal Intelligence, Legal SaaS Platform, Legal Knowledge Engineering',
        ],
        [
          'Secondary keywords',
          'AI Legal Research, Legal Document Analysis, Citizen Legal Rights, Legal Education, Legal Assistance, Legal SOS',
        ],
        [
          'Target audience',
          'Legal Professionals, Law Firms, Corporate Legal Teams, Citizens, Legal Institutions',
        ],
        ['Indexing', 'Indexable corporate vertical page'],
      ],
      note: 'The "/legal" cell is the only monospaced run in the document (it is styled as code). There is no Navigation row, unlike the Finance deck.',
    },

    /* (d) "Website Implementation Recommendations" — two lead paragraphs, a
       five-item numbered list, and a closing "Overall recommendation:"
       paragraph. Verbatim, including the curly quotes in item 1 and the line
       break inside item 2. This is where Harvey is named. */
    implementationNotes: {
      rendered: false,
      deckHeading: 'Website Implementation Recommendations',
      lead: [
        'I recommend retaining these eight sections, with Sections 1–7 forming the visible webpage and Section 8 serving as developer metadata.',
        'A few considerations are important before publishing:',
      ],
      leadNote:
        'The first sentence undercounts the visible blocks: the unnumbered closing CTA block is also visible, so there are eight, not seven. Not corrected — see oddity 4.',
      considerations: [
        'Platform positioning: Describe the platform as being developed by Mindlogicx. Do not use wording such as “trusted by law firms worldwide,” “available globally,” or “24/7 legal assistance” until substantiated.',
        'Harvey reference: Harvey is a useful functional benchmark for the professional offering, particularly research, drafting, document analysis, and workflow intelligence.\n It should not be mentioned on the public webpage.',
        'Citizen SOS services: Position these as planned capabilities. A future SOS feature should not imply emergency response, lawyer availability, or guaranteed intervention without operational arrangements in each country.',
        'Legal and AI governance: Citizen-facing services should distinguish general legal information from professional legal advice. Privacy, legal privilege, jurisdiction-specific regulation, and human oversight need to be considered during product development.',
        'Product branding: Since the platform name has not been finalised, retain Mindlogicx Legal Technology as the corporate vertical name. A dedicated product brand can be introduced later without restructuring the webpage.',
      ],
      considerationsNote:
        'Verbatim. Item 1 carries the document\'s only curly quotes. Item 2 contains a <br> and a leading space on its second line, preserved as "\\n ". ⚠️ Item 2 names Harvey, a US legal-AI company, and says in the same breath that it must not appear on the public page — see the Harvey block in the header and client flag 1. Item 3 is the source of the SOS constraint; item 4 is the source of the missing citizen disclaimer (`requiredDisclaimer`); item 5 is why no product name appears in the copy (flag 5).',
      overallRecommendation:
        "Overall recommendation: Position this page around two equally important pillars: Legal Intelligence for Professionals and Legal Empowerment for Citizens. The combination will differentiate Mindlogicx's legal technology vision from platforms focused primarily on professional legal productivity, while retaining a clear connection to the company's Knowledge Engineering framework.",
    },
  },
};

export default legalSolutionsPage;
