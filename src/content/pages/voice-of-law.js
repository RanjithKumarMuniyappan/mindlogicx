/*
 * ============================================================================
 * CONTENT EXTRACTION — LegalTech / "Voice Of Law" page
 * ============================================================================
 *
 * Extracted: 2026-10-15
 *
 * SOURCES (both read-only — nothing in the reference project was modified)
 * -----------------------------------------------------------------------
 * 1. LOCAL SOURCE, AUTHORITATIVE:
 *      /home/ranjith/Documents/AntigravityProjects/mlx-website-2025-frontend
 *    Files read, in the order the page composes them:
 *      src/app/voice_of_law/page.tsx            (route; calls getMetadata("/voice_of_law"))
 *      src/app/voice_of_law/VoiceOfLawComp.tsx  (the page shell / render order)
 *      src/components/Common/PageBanner.tsx     (banner: one <h2> over a CSS bg image)
 *      src/components/LegalTech/VoiceOfLaw/VolIntroduction/page.tsx
 *      src/components/LegalTech/VoiceOfLaw/VolServices/page.tsx
 *      src/components/LegalTech/VoiceOfLaw/OurUsp/page.tsx
 *      src/components/Common/CtaAreaTwo.tsx     (closing CTA band)
 *      src/seoConfig.ts + src/seoHelper.ts      (this route's title + description)
 *      src/components/LegalTech/LegalTechContent/page.tsx  (NOT rendered — see below)
 * 2. RUNNING DEV SERVER, CROSS-CHECK:
 *      http://localhost:3000/voice_of_law/   → HTTP 200, 21,736 bytes of HTML
 *    The server-rendered HTML was parsed for text, headings, <meta>, <title>
 *    and every <img>. It matches the local source exactly; no copy, section,
 *    link or image is injected at runtime that is not in the source files.
 *
 * The page pulls from NO shared constant file. `src/constant.tsx` is used by
 * site chrome only. The two string arrays on this page (`serviceList` in
 * VolServices, `ourUspList` in OurUsp) are local `useState` literals inside
 * their own components — they are page content and are captured here.
 *
 * NavbarTwo and Footer are shared site chrome and are deliberately NOT
 * included in `sections`.
 *
 * ---------------------------------------------------------------------------
 * VERBATIM
 * ---------------------------------------------------------------------------
 * Every string is VERBATIM. Nothing reworded, shortened, re-capitalised,
 * re-punctuated or corrected. Preserved exactly as the source has it:
 *   - curly apostrophes (U+2019) in "We’ve built a platform"
 *   - curly double quotes (U+201C/U+201D) around “Proactive and Reactive”
 *   - straight apostrophes where the source uses them: "you're dealing",
 *     "We'll connect you"  (the page mixes ’ and ' — both kept as found)
 *   - em dashes (U+2014) in "legal support—no matter who they are",
 *     "stress-free", "consultations—get the help", "a right—not a privilege"
 *   - the source's DOUBLE SPACES, which are real characters in the strings:
 *     "available  for you", "with experienced  legal professionals  who are"
 *   - TRAILING SPACES at the end of several strings (intro paragraphs 1 and 3,
 *     "On-Demand Legal Advice on various areas ", "on the spot ") — kept
 *   - the title-case oddity "Voice Of Law" (capital O) in the banner, versus
 *     "Voice of Law" in the SEO title and in the USP closing line
 *
 * TYPOS AND GRAMMAR ERRORS IN THE SOURCE — PRESERVED, NOT FIXED:
 *   a) "Every needs to be heard"            — word missing ("Everyone")
 *   b) "everyone deserves es justice"       — stray "es"
 *   c) "we hold very close to ourr heart"   — "ourr"
 *   d) "FREE Legal advise from the licensed lawyers" — "advise" for "advice"
 *   e) "a qualified legal professionals"    — article/number disagreement
 *   f) "Links to Resources" is a bare fragment, not a service
 *   All six are flagged for the client in concerns 1 and 2 below.
 *
 * ---------------------------------------------------------------------------
 * NOT RENDERED (captured separately, `rendered: false`)
 * ---------------------------------------------------------------------------
 * - `notRendered.legalTechContent` — the whole of
 *   src/components/LegalTech/LegalTechContent/page.tsx. A grep of the entire
 *   src/ tree finds NO importer: the component is defined and exported and
 *   never used by any route. It contains a large "Services Description" /
 *   "Our Working Process" block naming five products (SmartContract Hub,
 *   e-Sign & Trust Vault, Compliance Copilot, e-Discovery & Insight Engine,
 *   CaseFlow BPM) that appear NOWHERE on the live page. Captured verbatim
 *   because it is plainly written LegalTech copy the client may want, but it
 *   does NOT render and must not be presented as current page content.
 * - `notRendered.commentedOut` — three commented-out fragments inside the live
 *   components: an "About Us" heading, a lorem ipsum paragraph in the SOS
 *   section, and the "So What is Next?" eyebrow + "Partner With Us" second
 *   button in the shared CTA band.
 *
 * ---------------------------------------------------------------------------
 * IMAGE INVENTORY (6 images render; all 6 LOCAL, all 6 PRESENT in public/)
 * ---------------------------------------------------------------------------
 * No image was copied, moved, converted or modified. Dimensions and byte
 * sizes were read with python3 + PIL from the reference project's public/.
 * Paths are exactly as referenced in source.
 *
 *  # path                                                             actual px   bytes    exists
 *  1 /imagess/mindlogicx/header_banner/VoiceOfLaw.webp                2050 x 330   28,576  yes
 *  2 /imagess/mindlogicx/legaltech/voice_of_law/voiceoflawcontent.webp 500 x 515  229,496  yes
 *  3 /imagess/mindlogicx/legaltech/logo/voice_of_law.webp              844 x 373   57,962  yes
 *  4 /imagess/mindlogicx/legaltech/voice_of_law/vol_how_it_works.webp  852 x 580  374,522  yes
 *  5 /imagess/mindlogicx/legaltech/voice_of_law/vol_our_service.webp   770 x 582  350,484  yes
 *  6 /imagess/mindlogicx/legaltech/voice_of_law/vol_sos_service.webp   894 x 582  506,558  yes
 *
 * There are NO remote/hosted images on this page. Nothing is missing from
 * public/. Two unreferenced neighbours sit in the same folders and are
 * recorded under `unreferencedAssets` so they are not lost.
 *
 * ============================================================================
 * FOR THE CLIENT TO DECIDE / FIX BEFORE THIS SHIPS ON THE NEW SITE
 * ============================================================================
 *  1. SIX TYPOS / GRAMMAR ERRORS IN THE FIRST TWO SECTIONS (listed a–f above).
 *     The opening paragraph alone carries three ("Every needs to be heard",
 *     "deserves es justice", "ourr heart"), and the first bullet of Our
 *     Services says "Legal advise" instead of "advice". This is the page's
 *     most visible copy. It needs a proofread pass before republication.
 *  2. "FREE Legal advise from the licensed lawyers" IS AN UNQUALIFIED FREE-OF-
 *     CHARGE PROMISE, in capitals, with no scope, limit, duration or terms
 *     anywhere on the page. Combined with "No more ... hidden fees" and
 *     "Affordable and on demand Service", this is a consumer-facing pricing
 *     claim about regulated legal services. Legal/compliance sign-off needed.
 *     Advertising by, or on behalf of, advocates is restricted in India (Bar
 *     Council of India Rules, Rule 36) — this whole page should be reviewed
 *     against that before it goes live.
 *  3. UNSUBSTANTIATED / UNVERIFIABLE CLAIMS, all with no evidence on the page:
 *     "a carefully vetted network of licensed legal professionals",
 *     "Location based search for Lawyers across pan India.",
 *     "Immediate attention to SOS call",
 *     "Realtime immediate resolution of the issue as per required protocol",
 *     "If required personal services will be provided on the spot",
 *     "Our AI tool will do the rest end to end",
 *     "Anonymity / Confidentiality".
 *     The SOS set is the serious one: it promises emergency response to
 *     "accidents, threat to life and property". Promising immediate
 *     real-world emergency intervention creates duty-of-care and liability
 *     exposure and should not be published without the operational capability
 *     and a disclaimer behind it. Nothing has been softened here — the strings
 *     are verbatim — but the client must confirm each one.
 *  4. NO <h1> ON THE PAGE AT ALL. Confirmed in the rendered HTML: the heading
 *     sequence is h2 ("Voice Of Law", the banner), h2, h2, h2, h3 ("Our USP"),
 *     h5, h3 ("Redefining Legal Access Through Technology"). The page title is
 *     an <h2>, "Our USP" is an <h3> at the same structural level as the <h2>
 *     sections, and the USP closing statement is an <h5> used purely for size
 *     (there is no h4). Accessibility + SEO defect: give the page one <h1> and
 *     a non-skipping hierarchy. `title` below records the banner string as-is.
 *  5. THE ONLY CTA IS A <div> WITH onClick — NOT KEYBOARD REACHABLE.
 *     CtaAreaTwo renders `<div className="custom-btn" onClick={...}>Talk To
 *     Us</div>`: no <a>, no <button>, no href, no role, no tabIndex, no key
 *     handler. It cannot be tabbed to, activated by keyboard, opened in a new
 *     tab by the user, or seen by a crawler. Rebuild it as a real link.
 *  6. THE CTA DESTINATION IS A WHATSAPP DEEP LINK TO A PERSONAL-STYLE NUMBER:
 *     https://wa.me/919071177765 , opened with window.open(url, '_blank')
 *     (no rel="noopener"). Recorded verbatim from source — not invented, not
 *     altered. Confirm this number is still correct and is the right channel
 *     for a legal-services enquiry, and note there is NO email, NO phone
 *     number, NO form and NO contact page link anywhere on this page.
 *  7. IMAGE IMPORTS LOOK SWAPPED BETWEEN THE FIRST TWO SECTIONS. In
 *     VolServices, `serviceImg1` = vol_how_it_works.webp is rendered in the
 *     "Our Services" section, and `serviceImg2` = vol_our_service.webp is
 *     rendered in the "How It Works?" section. The hard-coded width/height
 *     props confirm the mix-up: the "Our Services" <Image> declares 770x582,
 *     which is the real size of vol_our_service.webp, while the file it
 *     actually loads (vol_how_it_works.webp) is 852x580 — and vice versa.
 *     So both images are being upscaled/distorted AND are in the wrong
 *     section. Recorded honestly per section as `image` (what renders) plus
 *     `imageLikelyWrong: true`. Client should confirm the intended pairing.
 *  8. DECLARED DIMENSIONS DO NOT MATCH THE FILES (3 of 4 <Image> calls):
 *     voiceoflawcontent.webp is 500x515 but declared 500x550; the two above.
 *     Only vol_sos_service.webp (894x582) is declared correctly. Fix the
 *     width/height props or the page will ship stretched artwork and will
 *     report layout shift.
 *  9. THE VOICE OF LAW LOGO HAS EMPTY ALT: `<img src=".../logo/voice_of_law
 *     .webp" alt="" className="" />`. It is a brand logo and the ONLY thing
 *     identifying the product at the top of the intro block (the "About Us"
 *     heading above it is commented out), so alt="" is wrong — it is not
 *     decorative. Also note it is a raw <img>, not next/image, so it is not
 *     optimised or lazy-loaded.
 * 10. THREE IMAGES SHARE THE ALT TEXT "Service Image" AND ONE IS "Mindlogicx".
 *     Neither describes its image. The banner image is a CSS
 *     background-image, so it has no alt at all and its text is unreachable
 *     to assistive tech if any of it is baked in. All four need real alt text.
 * 11. THE CTA BAND RENDERS AN EMPTY <p>. CtaAreaTwo always outputs
 *     `<p>{desc}</p>` and this page passes no `desc`, so an empty paragraph
 *     ships. Harmless but worth cleaning up.
 * 12. DEAD / UNUSED LEGALTECH COPY EXISTS AND NAMES FIVE PRODUCTS THAT ARE NOT
 *     ON THIS PAGE (see `notRendered.legalTechContent`): SmartContract Hub,
 *     e-Sign & Trust Vault, Compliance Copilot, e-Discovery & Insight Engine,
 *     CaseFlow BPM. That block also carries hard claims — "cut contract
 *     cycle-times by up to 60 percent", "court-verifiable", "SOC 2-compliant",
 *     "ISO 27001", "blockchain time-stamps" — and names third-party
 *     regulations/standards (GDPR, HIPAA, RBI, UGC, ISO 27001, SOC 2).
 *     Decide whether this content is wanted; if so, every claim and
 *     certification needs substantiation before it is published.
 * 13. SEO DESCRIPTION DESCRIBES A DIFFERENT PRODUCT FROM THE PAGE. The route's
 *     meta description promises "AI-driven documentation, case tracking,
 *     e-learning for law students, and digital court ecosystems" and addresses
 *     "law firms, and judiciary". The actual page is a consumer/SME
 *     lawyer-matching and SOS service — no case tracking, no e-learning, no
 *     court ecosystem, no judiciary content. Rewrite the metadata to match.
 * 14. RELATED ROUTES EXIST BUT ARE NOT LINKED FROM THIS PAGE: /vol_academy/
 *     ("Voice Of Law Academy") and /vol_connect/ ("Voice Of Law Connect") are
 *     separate pages in the same source project. This page links to neither,
 *     and neither is represented in the content below (they are out of scope
 *     for this extraction). Confirm whether those routes exist on the new site
 *     and whether this page should link to them.
 * 15. "Voice Of Law" vs "Voice of Law" vs "VOL" — three forms of the product
 *     name on one page ("Voice Of Law" banner, "Voice of Law should be heard !"
 *     closing line, "SOS services through VOL platform"). "VOL" is never
 *     expanded on the page. Pick one house form and define the abbreviation.
 * 16. NO href="#" PLACEHOLDERS, NO LOREM IPSUM and NO BROKEN LINKS in the
 *     RENDERED page — the page contains exactly one outbound destination (the
 *     WhatsApp link in concern 6) and no anchors at all. The only lorem ipsum
 *     in the source is commented out and is recorded under
 *     `notRendered.commentedOut`. No third-party logos, client names,
 *     testimonials, awards, prices or statistics appear on the page, and none
 *     has been invented here.
 * 17. MINOR CODE DEFECT (not content): the Our USP `.map()` renders
 *     `<div className="col-lg-4 col-md-6">` with no React `key` prop.
 * ============================================================================
 */

export const voiceOfLawPage = {
  // The page's own banner heading. It is an <h2>, not an <h1> — see concern 4.
  // Note the capital "O" in "Of"; kept verbatim.
  title: "Voice Of Law",

  route: "/voice_of_law",

  banner: {
    pageTitle: "Voice Of Law",
    headingLevel: "h2",
    image: "/imagess/mindlogicx/header_banner/VoiceOfLaw.webp",
    imageAlt: null, // CSS background-image on .page-title-area — no alt exists
    note:
      "PageBanner renders only the <h2> over a background image. No subtitle, no breadcrumb, no CTA in the banner.",
  },

  // Page-specific, from src/seoConfig.ts key "/voice_of_law"; confirmed live in
  // the rendered <title> and <meta name=\"description\">. See concern 13.
  seo: {
    pageSpecific: true,
    source: "src/seoConfig.ts → seoMap[\"/voice_of_law\"] via getMetadata()",
    title:
      "Voice of Law | LegalTech Solutions for Judiciary, Law Firms & Legal Education | Mindlogicx",
    metaDescription:
      "Voice of Law by Mindlogicx is a smart LegalTech platform revolutionizing legal workflows with AI-driven documentation, case tracking, e-learning for law students, and digital court ecosystems. Empowering legal professionals, law firms, and judiciary with scalable, secure, and tech-enabled solutions.",
    openGraph: {
      missing: true,
      note:
        "No og:* or twitter:* tags are emitted for this route. seoConfig.ts supplies only title and description, and the rendered HTML confirms no Open Graph or Twitter meta tags exist. Nothing has been invented.",
    },
    canonical: {
      missing: true,
      note:
        "No <link rel=\"canonical\"> in the rendered head. The route is listed in src/app/sitemap.ts as `${baseUrl}/voice_of_law` (no trailing slash).",
    },
  },

  // Real visual order, taken from VoiceOfLawComp.tsx:
  // PageBanner → VolIntroduction → VolServices (3 bands) → OurUsp → CtaAreaTwo
  sections: [
    {
      id: "vol-introduction",
      component: "VolIntroduction",
      domClass: "about-area vol_intro_main_container",
      heading: null,
      headingNote:
        "No heading renders. The <h2>About Us</h2> that sat here is commented out (see notRendered.commentedOut), so the section is identified only by the logo image — which has empty alt. See concerns 4 and 9.",
      logo: {
        path: "/imagess/mindlogicx/legaltech/logo/voice_of_law.webp",
        alt: "",
        element: "raw <img> (not next/image)",
        altProblem: true,
      },
      body: [
        "Law is the greatest leveller for the mankind, creating a level playing field for everyone irrespective of caste, creed, religion and economic status. Every needs to be heard, everyone needs to be given a chance and everyone deserves es justice on time. The voice of law should be heard by everyone. How is it possible to make it happen? Obviously technology. ",
        "True to this ideology that we hold very close to ourr heart, we believe that everyone deserves access to reliable, affordable legal support—no matter who they are in a civil society.",
        "Aim is to make legal services more accessible, transparent, and stress-free. Whether you're dealing with a personal legal issue, managing a business, or simply need advice, we make it available  for you on demand with experienced  legal professionals  who are ready to help. ",
        "We’ve built a platform that breaks down traditional barriers to legal support. No more long wait times, confusing legal jargon, or hidden fees. Just real help through chat, phone, video, or in person.",
      ],
      bodyNote:
        "Four <p> elements separated by <br /> tags. Typos 'Every needs', 'deserves es justice' and 'ourr heart' are in the source and are preserved — see concern 1. Paragraphs 1 and 3 end with a trailing space, and paragraph 3 contains double spaces; both preserved.",
      image: {
        path: "/imagess/mindlogicx/legaltech/voice_of_law/voiceoflawcontent.webp",
        alt: "Mindlogicx",
        declaredWidth: 500,
        declaredHeight: 550,
        actualWidth: 500,
        actualHeight: 515,
        dimensionMismatch: true,
      },
      ctas: [],
    },

    {
      id: "our-services",
      component: "VolServices (band 1)",
      domClass: "service-style-two bg-fcfbfb vol_ourservice_main_container",
      heading: "Our Services",
      headingLevel: "h2",
      body: [],
      // From the `serviceList` useState array, rendered as four
      // .feature-list divs each preceded by a fa-circle-check icon.
      items: [
        "FREE Legal advise from the licensed lawyers",
        "Document Review & Drafting",
        "On-Demand Legal Advice on various areas ",
        "Links to Resources",
      ],
      itemsNote:
        "Verbatim, including 'advise' for 'advice' and the trailing space on 'various areas '. 'Links to Resources' is a bare fragment with no explanation. See concerns 1 and 2.",
      image: {
        path: "/imagess/mindlogicx/legaltech/voice_of_law/vol_how_it_works.webp",
        alt: "Service Image",
        declaredWidth: 770,
        declaredHeight: 582,
        actualWidth: 852,
        actualHeight: 580,
        dimensionMismatch: true,
        imageLikelyWrong: true,
        note:
          "The file named vol_how_it_works.webp is rendered in the Our Services band, while the declared 770x582 matches vol_our_service.webp. Imports appear swapped with the how-it-works section. See concern 7.",
      },
      ctas: [],
    },

    {
      id: "how-it-works",
      component: "VolServices (band 2)",
      domClass: "service-style-two vol_howitworks_main_container",
      heading: "How It Works?",
      headingLevel: "h2",
      body: [],
      // Three <li>s. Items 2 and 3 open with a bold label inside the same
      // list item; `label` records the bolded run exactly as written,
      // including its trailing " : " spacing.
      items: [
        {
          label: null,
          text:
            "Tell Us Your Legal Issue in a simple language. Our AI tool will do the rest end to end",
        },
        {
          label: "Match with the Right Lawyer : ",
          text:
            "Location based search for Lawyers. We'll connect you with a qualified legal professionals and experienced as well to address the issue",
        },
        {
          label: "Get Legal Support : ",
          text:
            "Chat, call, or schedule consultations—get the help you need when you need it.",
        },
      ],
      itemsNote:
        "Item 1 has no bold label while items 2 and 3 do — inconsistent. 'a qualified legal professionals' is the source's grammar, preserved. See concern 1.",
      image: {
        path: "/imagess/mindlogicx/legaltech/voice_of_law/vol_our_service.webp",
        alt: "Service Image",
        declaredWidth: 852,
        declaredHeight: 580,
        actualWidth: 770,
        actualHeight: 582,
        dimensionMismatch: true,
        imageLikelyWrong: true,
        note:
          "The file named vol_our_service.webp is rendered in the How It Works band. See concern 7.",
      },
      ctas: [],
    },

    {
      id: "sos-services",
      component: "VolServices (band 3)",
      domClass: "service-style-two bg-fcfbfb vol_sos_main_container",
      heading: "SOS services through VOL platform (Emergency Services)",
      headingLevel: "h2",
      body: [],
      bodyNote:
        "A lead paragraph was written here and then commented out as lorem ipsum — see notRendered.commentedOut. The section currently has no intro copy, and 'VOL' is never expanded anywhere on the page.",
      items: [
        "Immediate attention to SOS call",
        "Immediate resolution for any exigency like accidents, threat to life and property upon receipt of SOS call from mobile app.",
        "Realtime immediate resolution of the issue as per required protocol",
        "If required personal services will be provided on the spot ",
      ],
      itemsNote:
        "Verbatim, including the trailing space on 'on the spot '. These are emergency-response promises with no supporting detail or disclaimer and no stated coverage area, hours or SLA — see concern 3. The copy also references a 'mobile app' that is never named or linked on this page.",
      image: {
        path: "/imagess/mindlogicx/legaltech/voice_of_law/vol_sos_service.webp",
        alt: "Service Image",
        declaredWidth: 894,
        declaredHeight: 582,
        actualWidth: 894,
        actualHeight: 582,
        dimensionMismatch: false,
      },
      ctas: [],
    },

    {
      id: "our-usp",
      component: "OurUsp",
      domClass: "contact-info-area common_main_container",
      heading: "Our USP",
      headingLevel: "h3", // an h3 among h2 siblings — see concern 4
      body: [],
      // From the `ourUspList` useState array. Each card is an icon + the text
      // wrapped in <strong>. `icon` is the Font Awesome class in the source,
      // recorded so the intended glyph is not lost on re-skin.
      items: [
        {
          text:
            "New Age AI powered platform for “Proactive and Reactive” legal assistance",
          icon: "fa-solid fa-robot",
        },
        {
          text: "A carefully vetted network of licensed legal professionals",
          icon: "fa-solid fa-user-check",
        },
        {
          text: "Affordable and on demand Service",
          icon: "fa-solid fa-hand-holding-dollar",
        },
        {
          text: "Location based search for Lawyers across pan India.",
          icon: "fa-solid fa-location-dot",
        },
        {
          text: "Fast, confidential, and user-friendly access to legal advice",
          icon: "fa-solid fa-bolt",
          iconNote:
            "Source comment on this entry: 'You can combine with fa-lock and fa-thumbs-up if needed' — an unresolved authoring note, not content.",
        },
        {
          text:
            "Support for individuals, families, corporates and businesses alike",
          icon: "fa-solid fa-people-group",
        },
        {
          text: "Anonymity / Confidentiality",
          icon: "fa-solid fa-user-secret",
        },
      ],
      itemsNote:
        "7 cards. Curly quotes around “Proactive and Reactive” preserved. Only item 4 ends with a full stop; the other six do not — inconsistent punctuation, preserved. All icons are decorative <i> elements with no aria-hidden and no text alternative.",
      closingStatement: {
        element: "h5",
        text:
          "We are committed to making legal assistance a right—not a privilege.  Yes. You heard it right. Voice of Law should be heard !",
        parts: [
          "We are committed to making legal assistance a right—not a privilege. ",
          " Yes. You heard it right. Voice of Law should be heard !",
        ],
        note:
          "One <h5><strong> containing both sentences with a <br /> between them; `parts` preserves the two text nodes exactly (hence the trailing space on the first and the leading space on the second, which is why `text` shows a double space at the join). Space before '!' is in the source. Marked up as a heading purely for size — see concern 4.",
      },
      image: null,
      ctas: [],
    },

    {
      id: "closing-cta",
      component: "CtaAreaTwo (shared)",
      domClass: "cta-area-two common_main_container",
      heading: "Redefining Legal Access Through Technology",
      headingLevel: "h3",
      body: [],
      bodyNote:
        "No `desc` prop is passed, so the component still renders an empty <p>. See concern 11.",
      image: null,
      ctas: [
        {
          label: "Talk To Us",
          url: "https://wa.me/919071177765",
          opensInNewTab: true,
          element: "div.custom-btn with onClick — not a link, not a button",
          keyboardReachable: false,
          note:
            "window.open(url, '_blank') with no rel=\"noopener\". The only interactive control and the only outbound destination on the entire page. See concerns 5 and 6.",
        },
      ],
    },
  ],

  // ---------------------------------------------------------------------
  // Present in the source, NOT on the page. Do not mix into `sections`.
  // ---------------------------------------------------------------------
  notRendered: {
    legalTechContent: {
      rendered: false,
      source:
        "src/components/LegalTech/LegalTechContent/page.tsx — exported but imported by nothing (grep of src/ finds no importer).",
      note:
        "Verbatim LegalTech copy that no route renders. Names five products and several certifications that appear nowhere on the live page. See concern 12.",
      left: {
        heading: "Services Description",
        headingLevel: "h2",
        paragraphs: [
          {
            text:
              "Mindlogicx Legal-Tech Solutions streamline the entire legal-work lifecycle—making contracts faster to draft, safer to sign, and easier to govern.",
            bold: ["Legal-Tech Solutions"],
          },
          {
            boldLead: "SmartContract Hub",
            text:
              "AI-assisted clause library, drag-and-drop drafting, and instant risk scoring cut contract cycle-times by up to 60 percent.",
          },
          {
            boldLead: "e-Sign & Trust Vault",
            text:
              "PKI-based digital signatures anchored to blockchain time-stamps; every version and signature is tamper-evident and court-verifiable.",
          },
          {
            boldLead: "Compliance Copilot",
            text:
              "Continuously monitors regulatory updates (GDPR, HIPAA, RBI, UGC, etc.) and flags non-compliant language or data-flow risks in real time.",
          },
          {
            boldLead: "e-Discovery & Insight Engine",
            text:
              "Natural-language search, sentiment analysis, and auto-redaction turn terabytes of documents into a clickable evidence map—in minutes, not months.",
          },
          {
            boldLead: "CaseFlow BPM",
            text:
              "Low-code workflows integrate matter intake, task assignment, approvals, and billing so legal, finance, and business teams stay perfectly aligned.",
          },
          {
            text:
              "All modules are API-first, cloud-agnostic, and SOC 2-compliant, so you can plug them into existing DMS, CRM, or ERP stacks without disrupting business continuity.",
          },
        ],
      },
      right: {
        heading: "Our Working Process",
        headingLevel: "h2",
        items: [
          {
            label: "Needs & Risk Assessment",
            text:
              "Map existing legal processes, pain-points, and jurisdictional mandates to define the transformation blueprint.",
          },
          {
            label: "Co-Design Workshops",
            text:
              "Legal, IT, and business stakeholders shape user journeys, permission models, and success KPIs; rapid wireframes validate UX early.",
          },
          {
            label: "Prototype & AI Model Training",
            text:
              "Build a sandbox solution using anonymized contracts and case files to fine-tune clause-recommendation and risk-scoring engines.",
          },
          {
            label: "Secure Build & Integration",
            text:
              "Deploy microservices with zero-trust architecture; REST/GraphQL APIs connect to identity providers, DMS, and payment gateways.",
          },
          {
            label: "RegTech & Security Validation",
            text:
              "Conduct penetration tests, privacy-impact assessments, and mock audits to ensure conformance with ISO 27001, SOC 2, and local statutes.",
          },
          {
            label: "Pilot & User Acceptance",
            text:
              "Roll out to a select practice group or business unit; gather real-world feedback and iterate quickly.",
          },
        ],
      },
    },

    commentedOut: [
      {
        rendered: false,
        where: "vol-introduction (VolIntroduction/page.tsx)",
        markup: "{/* <h2>About Us</h2> */}",
        text: "About Us",
        note:
          "Commented out directly above the Voice Of Law logo. Its removal is why the intro section now has no heading. See concern 4.",
      },
      {
        rendered: false,
        where: "sos-services (VolServices/page.tsx)",
        type: "lorem ipsum placeholder",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        note:
          "Template filler commented out under the SOS heading. The section still has no intro paragraph — real copy was never written. NOT rendered; do not treat as content.",
      },
      {
        rendered: false,
        where: "closing-cta (Common/CtaAreaTwo.tsx — shared component)",
        items: [
          { type: "eyebrow span", text: "So What is Next?" },
          {
            type: "second CTA link",
            text: "Partner With Us",
            url: "/partner/",
            markup: "{/* <Link href=\"/partner/\" className=\"custom-btn\">Partner With Us</Link> */}",
          },
          {
            type: "fallback heading",
            text: "Are You Ready? Let&apos;s get to work!",
          },
        ],
        note:
          "Commented out inside the shared CTA component, so it is absent from every page that uses it, not just this one.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Flat image inventory. Nothing was copied, moved or modified; dimensions
  // and byte sizes read with python3 + PIL from the reference project's
  // public/. All local files, all present. No remote images on this page.
  // ---------------------------------------------------------------------
  images: [
    {
      path: "/imagess/mindlogicx/header_banner/VoiceOfLaw.webp",
      usedBy: "banner",
      alt: null,
      altNote: "CSS background-image — no alt attribute exists",
      width: 2050,
      height: 330,
      bytes: 28576,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/legaltech/voice_of_law/voiceoflawcontent.webp",
      usedBy: "vol-introduction",
      alt: "Mindlogicx",
      width: 500,
      height: 515,
      bytes: 229496,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      declared: "500x550 (mismatch)",
    },
    {
      path: "/imagess/mindlogicx/legaltech/logo/voice_of_law.webp",
      usedBy: "vol-introduction (product logo)",
      alt: "",
      altNote: "Empty alt on a brand logo that is not decorative — concern 9",
      width: 844,
      height: 373,
      bytes: 57962,
      format: "WEBP",
      local: true,
      existsInPublic: true,
    },
    {
      path: "/imagess/mindlogicx/legaltech/voice_of_law/vol_how_it_works.webp",
      usedBy: "our-services",
      alt: "Service Image",
      width: 852,
      height: 580,
      bytes: 374522,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      declared: "770x582 (mismatch)",
      note: "Filename does not match the section it renders in — concern 7",
    },
    {
      path: "/imagess/mindlogicx/legaltech/voice_of_law/vol_our_service.webp",
      usedBy: "how-it-works",
      alt: "Service Image",
      width: 770,
      height: 582,
      bytes: 350484,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      declared: "852x580 (mismatch)",
      note: "Filename does not match the section it renders in — concern 7",
    },
    {
      path: "/imagess/mindlogicx/legaltech/voice_of_law/vol_sos_service.webp",
      usedBy: "sos-services",
      alt: "Service Image",
      width: 894,
      height: 582,
      bytes: 506558,
      format: "WEBP",
      local: true,
      existsInPublic: true,
      declared: "894x582 (correct)",
    },
  ],

  // Sitting in the same folders, referenced by nothing on this page.
  // Recorded so they are not lost; neither was copied or modified.
  unreferencedAssets: [
    {
      path: "/imagess/mindlogicx/legaltech/logo/voice_of_law_old.webp",
      bytes: 98796,
      note:
        "Superseded logo kept beside the live one. Not rendered. Confirm the current logo is the right one before reuse.",
    },
    {
      path: "/imagess/mindlogicx/legaltech/voice_of_law/LegalTech header(subPage).webp",
      bytes: 427938,
      note:
        "An alternative LegalTech sub-page header that this page does not use (the banner comes from header_banner/VoiceOfLaw.webp). Filename contains a space and parentheses — rename before use on the new site.",
    },
  ],
};

export default voiceOfLawPage;
