/*
 * ============================================================================
 * CONTENT EXTRACTION — Partner With Us
 * ============================================================================
 *
 * Extracted: 2026-10-17
 *
 * SOURCE (read-only; the file was not modified)
 * ---------------------------------------------------------------------------
 *   /home/ranjith/Downloads/Mindlogicx_Partner_Webpage_Content_v2.1.docx
 *   "Mindlogicx Corporate Website — Partner With Us
 *    Updated Webpage Content | Version 2.1 | October 2026"
 *
 * Unzipped and `word/document.xml` parsed directly — paragraphs, heading
 * styles and all six tables. The document embeds **no images at all**; see
 * `imagery` at the foot of this file.
 *
 * Every string in `sections` is VERBATIM. Note that this deck is written in
 * **American spelling** ("capitalize", "organizations", "Emphasize") while
 * the IntelliOSM deck next to it is British ("organisations", "Analyse").
 * Both are preserved as written rather than harmonised — see `concerns`.
 *
 * ---------------------------------------------------------------------------
 * WHAT IS HERE BUT NOT ON THE PAGE
 * ---------------------------------------------------------------------------
 * `authorGuidance` holds the deck's page objective, target audience, visual
 * directions, the "Section 7. SEO and Metadata" table and the whole
 * "UI/UX and Development Guidelines" table. Same separation as the IntelliOSM,
 * HealthTech, Legal and Finance decks: instructions to the builder are not
 * words for the reader.
 *
 * ---------------------------------------------------------------------------
 * ⚠️ THE COMMERCIAL HEDGING IS LOAD-BEARING
 * ---------------------------------------------------------------------------
 * This page sells a business relationship, and the deck is careful never to
 * promise a commercial result. It says **"opportunities"** throughout —
 * "revenue opportunities", "opportunities for recurring revenue", "Partner
 * Opportunity" — and qualifies capability claims with "applicable", "where
 * applicable", "subject to product availability" and "under development".
 *
 * Its own guideline table demands language "free from unsupported claims", and
 * it closes by excluding "Internal business structures, partner designations,
 * commission percentages, transfer pricing, and operational arrangements" from
 * the public page.
 *
 * **There is no margin, no commission rate, no partner tier, no revenue
 * figure and no customer count anywhere in this file**, and none may be added
 * without the client supplying it. "Partnership scope, commercial terms, and
 * enablement arrangements are established through mutual agreement" is the
 * sentence carrying that load on the page; it is rendered as a disclaimer and
 * must not be deleted as boilerplate.
 *
 * ---------------------------------------------------------------------------
 * ⚠️ THREE THINGS FOR THE CLIENT TO SETTLE
 * ---------------------------------------------------------------------------
 * 1. **The deck asks for the slug `/partners`.** The route is `/partner`,
 *    because the header's Partner menu item already points there (`navigation`
 *    in `site.js`) and had been landing on `Placeholder`. Changing the slug
 *    means changing the nav. `seo.url` records what was asked for.
 *
 * 2. **IntelliTUTE is missing from the portfolio table.** The deck lists
 *    IntelliEXAMS, IntelliOSM, IntelliWORK and IntelliTHESIS — but not
 *    IntelliTUTE, which has a live page on this site (`/intellitute`) and
 *    appears in the Education line-up. Nothing was invented to fill the gap;
 *    the table renders the four the deck gives.
 *
 * 3. **"Partner With Us" CTAs were removed site-wide on 2026-10-12**, at which
 *    point `/partner` did not exist. It does now. `cta.btnText` /
 *    `cta.btnLink` in `site.js` still hold that call to action, unrendered —
 *    restoring it is a one-line change if the client wants the page reachable
 *    from somewhere other than the header.
 */

export const partnerPage = {
  slug: 'partner',
  title: 'Partner With Us',
  documentVersion: 'Version 2.1 | October 2026',

  hero: {
    number: 1,
    label: 'Hero Banner',
    heading: 'Partner With Mindlogicx. Unlock New Business Opportunities.',
    strapline: 'You Build the Market. We Build the Technology.',
    body: [
      'Expand your business with proprietary technology products, enterprise solutions, and SaaS platforms designed for growing global markets.',
      'As a technology OEM, Mindlogicx empowers partners to capitalize on emerging digital opportunities, diversify their portfolios, and create sustainable revenue streams without the complexities of developing and maintaining their own software products.',
      'Together, we transform technology innovation into business growth.',
    ],

    /*
     * Supplied by the client 2026-10-17, replacing the `PartnerArt` drawing.
     *
     * It matches the deck's own direction — "Premium, globally relevant image
     * of technology business collaboration and commercial growth" — as a
     * boardroom handshake over a city skyline.
     *
     * Decorative (`alt=""`): the copy beside it carries the meaning, and the
     * people in it are not identified anywhere, so naming them in alt text
     * would invent a caption.
     *
     * ⚠️ This supersedes the note in `imagery` below, which recorded that the
     * deck supplied no image. The licensing caveat there still stands: no
     * source, licence or photographer accompanied this file either.
     */
    image: '/assets/images/partner/intro.webp',

    /*
     * Labels only — the deck contains no hyperlink anywhere. "Become a
     * Partner" goes to `/contact-us`, which is the "contact mechanism" the
     * deck's own guideline table allows for ("a dedicated partnership enquiry
     * page or contact mechanism"); there is no partnership enquiry form on
     * this site yet. "Explore Our Products" goes to `/ed-tech`, the only
     * page that lists the portfolio. Both are this project's choices.
     */
    ctas: [
      { label: 'Become a Partner', target: '/contact-us', kind: 'primary' },
      { label: 'Explore Our Products', target: '/ed-tech', kind: 'secondary' },
    ],
  },

  sections: [
    {
      id: 'why-partner',
      number: 2,
      label: 'Why Partner With Mindlogicx?',
      heading: 'The Advantage of Partnering Directly With a Technology OEM',
      body: [
        'Developing enterprise-grade software requires significant investment in product engineering, research, security, infrastructure, and continuous innovation.',
        'Mindlogicx enables partners to leverage these technology investments while concentrating on their core strengths: customer acquisition, market development, solution delivery, and business expansion.',
      ],

      /* The deck's "Partner Benefit | Value Proposition" table. */
      items: [
        {
          title: 'Own the Customer Relationship',
          description:
            'Develop and strengthen customer relationships while building your business around Mindlogicx technology solutions.',
          glyph: 'People',
        },
        {
          title: 'Reduce Technology Investment',
          description:
            'Access proprietary products without the cost and complexity of establishing your own software R&D capabilities.',
          glyph: 'Cog',
        },
        {
          title: 'Accelerate Market Entry',
          description:
            'Shorten go-to-market cycles by leveraging existing products and established OEM capabilities.',
          glyph: 'Scalable',
        },
        {
          title: 'Expand Your Offerings',
          description:
            'Address a wider range of customer requirements through a growing portfolio of complementary technology products.',
          glyph: 'AgentStructured',
        },
        {
          title: 'Create Sustainable Revenue',
          description:
            'Develop repeat business opportunities through applicable subscription, usage-based, and services-led offerings.',
          glyph: 'Monetizable',
        },
        {
          title: 'Benefit From Continuous Innovation',
          description:
            'Leverage ongoing product engineering, platform enhancements, and emerging technology capabilities.',
          glyph: 'Innovation',
        },
      ],

      closing: {
        heading: 'The OEM Advantage',
        body: [
          'You focus on building your business. Mindlogicx focuses on building and advancing the technology.',
          'Our complementary strengths create a foundation for long-term commercial collaboration, helping partners pursue new opportunities while maintaining their focus on customer success.',
        ],
      },
    },

    {
      id: 'revenue-opportunities',
      number: 3,
      label: 'One OEM Partnership. Multiple Revenue Opportunities.',
      heading: 'Turn Technology Capabilities Into Commercial Opportunities',
      body: [
        'A partnership with Mindlogicx provides opportunities to develop multiple revenue channels across products, customer segments, and markets.',
      ],

      items: [
        {
          title: 'Product Sales and Licensing',
          description:
            'Generate revenue by offering Mindlogicx technology products to educational institutions, enterprises, and organizations seeking reliable digital solutions.',
          glyph: 'Monetizable',
        },
        {
          title: 'Subscription and Usage-Based Business',
          description:
            'Build opportunities for recurring revenue through applicable SaaS subscriptions, platform consumption, and usage-driven commercial models.',
          glyph: 'Scalable',
        },
        {
          title: 'Implementation and Professional Services',
          description:
            'Create additional business through product deployment, configuration, integrations, onboarding, training, and customer support services, where applicable.',
          glyph: 'Cog',
        },
        {
          title: 'Cross-Selling and Account Expansion',
          description:
            'Increase customer engagement and business value by introducing complementary Mindlogicx solutions as customer needs evolve.',
          glyph: 'AgentWorkflow',
        },
      ],

      closing: {
        heading: 'One Technology Relationship. Multiple Ways to Grow.',
        body: [
          'Our growing product ecosystem helps partners pursue opportunities beyond individual product transactions and develop deeper, longer-term customer relationships.',
        ],
      },
    },

    {
      id: 'technology-portfolio',
      number: 4,
      label: 'Technology Portfolio. Expanding Market Opportunities.',
      heading: 'Innovative Products That Open Doors to New Markets',
      body: [
        'Mindlogicx develops proprietary digital platforms designed to address challenges in assessment, education, workforce development, and knowledge-driven industries.',
        'Through our expanding technology portfolio, partners can identify opportunities across multiple customer segments without depending on a single product or industry.',
      ],

      /*
       * The deck's "Product | Business Positioning and Partner Opportunity"
       * table. `name` / `descriptor` / `status` are the three lines of the
       * first cell; `positioning` and `opportunity` split the second on its
       * "Partner Opportunity:" label.
       *
       * `link` is NOT from the deck — it is this site's own route for each
       * product, added so the table is navigable. IntelliTHESIS has no page,
       * so it has no link; see the note at the top about IntelliTUTE being
       * absent from this table altogether.
       */
      products: [
        {
          name: 'IntelliEXAMS',
          descriptor: 'Assessment Intelligence',
          positioning:
            'Deliver digital examination and assessment solutions to universities, colleges, examination boards, and educational institutions.',
          opportunity:
            'Institutional technology sales, assessment deployment projects, and related services.',
          link: '/intelliexams',
        },
        {
          name: 'IntelliOSM',
          descriptor: 'AI-Native Digital Marking',
          positioning:
            'Enable educational institutions and assessment service providers to streamline digital marking through AI-assisted evaluation with human oversight.',
          opportunity:
            'SaaS subscription opportunities, digital marking adoption, and assessment service expansion.',
          link: '/intelliosm',
        },
        {
          name: 'IntelliWORK',
          descriptor: 'Workforce Intelligence',
          positioning:
            'Address workforce assessment, skills intelligence, and professional development requirements.',
          /* ⚠️ "subject to product availability" is the deck's own hedge. */
          opportunity:
            'Enterprise learning, workforce development, and organizational capability solutions, subject to product availability.',
          link: '/intelliwork',
        },
        {
          name: 'IntelliTHESIS',
          descriptor: 'Research Intelligence',
          status: 'Planned for 2027',
          positioning:
            'A forthcoming technology platform intended to support academic research workflows.',
          opportunity: 'Future expansion into academic research technology markets.',
          link: null,
        },
      ],

      closing: {
        heading: 'Beyond Education',
        body: [
          'Mindlogicx is extending its Knowledge Engineering capabilities into emerging industry opportunities, including healthcare, legal services, and financial services.',
          /* ⚠️ "under development" and "potential future avenues" — the same
             qualification the HealthTech, Legal and Finance pages carry. */
          'These platforms are under development and represent potential future avenues for partners to diversify their technology businesses.',
        ],
      },

      /* Label only in the deck. `/ed-tech` is this project's destination. */
      cta: { label: 'Discover Our Technology Portfolio', target: '/ed-tech' },
    },

    {
      id: 'partner-success',
      number: 5,
      label: 'Built for Partner Success',
      heading: 'Your Market Expertise. Our Engineering Strength.',
      body: [
        'Successful technology partnerships require more than access to software products. They depend on product expertise, business alignment, reliable technology, and continued innovation.',
        'Mindlogicx works with partners to build the capabilities needed to introduce, position, and deliver its solutions effectively.',
      ],

      /* The deck's "Partner Enablement | Description" table. */
      items: [
        {
          title: 'Product Training and Enablement',
          description:
            'Build the knowledge needed to confidently position, demonstrate, and deliver Mindlogicx products.',
          glyph: 'AgentKnowledge',
        },
        {
          title: 'Sales and Go-to-Market Support',
          description:
            'Access relevant product collateral, solution information, and commercial engagement guidance.',
          glyph: 'AgentAdvisory',
        },
        {
          title: 'Technical Expertise',
          description:
            'Leverage OEM expertise for product-related technical guidance, implementation, and integration requirements.',
          glyph: 'Cog',
        },
        {
          title: 'Continuous Product Development',
          description:
            'Benefit from product improvements, evolving capabilities, and technology innovation driven by Mindlogicx.',
          glyph: 'Innovation',
        },
      ],

      /*
       * "A Simple Path to Partnership". The deck numbers these 01–04 in its
       * own column; the numerals are dropped per the site-wide no-numbering
       * rule (2026-10-12) and the steps read in order regardless. `step` is
       * kept here so nothing is lost.
       */
      journey: {
        heading: 'A Simple Path to Partnership',
        steps: [
          { step: '01', title: 'Connect', description: 'Tell us about your business and markets.' },
          {
            step: '02',
            title: 'Explore',
            description: 'Identify suitable products and commercial opportunities.',
          },
          {
            step: '03',
            title: 'Align',
            description: 'Agree on the partnership scope and engagement model.',
          },
          {
            step: '04',
            title: 'Grow',
            description: 'Pursue customer opportunities and build your business.',
          },
        ],
      },

      /* ⚠️ Load-bearing. See the note at the top of this file. */
      disclaimer:
        'Partnership scope, commercial terms, and enablement arrangements are established through mutual agreement.',
    },
  ],

  closing: {
    id: 'lets-grow-together',
    number: 6,
    label: "Let's Grow Together",
    heading: "Let's Build the Future of Technology Business. Together.",
    body: [
      'Partner with Mindlogicx to unlock new business opportunities, expand your technology portfolio, and bring innovative digital solutions to customers across global markets.',
      'Whether you are an established technology company, system integrator, consulting organization, or a business seeking new revenue opportunities, Mindlogicx offers a foundation for long-term commercial growth.',
    ],
    statement: 'Expand Your Portfolio. Unlock New Revenue Opportunities. Grow Globally.',
    subheading: 'Ready to Grow With Mindlogicx?',
    subbody: 'Explore how a technology partnership with Mindlogicx can accelerate your business growth.',
    /* The deck is explicit: "Single Become a Partner button". */
    cta: { label: 'Become a Partner', target: '/contact-us' },
  },

  /* Not rendered. "For the website development team only". */
  seo: {
    rendered: false,
    title: 'Partner With Mindlogicx – Global Technology OEM Partnerships',
    metaDescription:
      'Become a Mindlogicx technology partner. Expand your software portfolio, access innovative SaaS products, and create new business opportunities.',
    url: '/partners',
    h1: 'Partner With Mindlogicx. Unlock New Business Opportunities.',
    primaryKeywords:
      'Technology OEM partnership, Mindlogicx partners, SaaS partner opportunities',
    secondaryKeywords:
      'Software reseller partnership, EdTech business opportunities, enterprise technology partnerships, digital assessment solutions',
    ctaConversionGoal: 'Qualified partnership enquiries',
  },

  authorGuidance: {
    rendered: false,
    pageObjective:
      'Position Mindlogicx as a global technology Original Equipment Manufacturer (OEM) that enables business partners to generate new revenue opportunities, expand into new markets, and build sustainable technology businesses through its proprietary products and SaaS platforms.',
    targetAudience:
      'Technology resellers, system integrators, IT service providers, EdTech companies, consulting firms, and businesses seeking technology-led growth opportunities.',
    heroVisualDirection:
      'Premium, globally relevant image of technology business collaboration and commercial growth.',
    guidelines: [
      ['Visual Style', 'Premium, modern, enterprise-grade, and globally relevant'],
      ['Hero Imagery', 'Global business collaboration and commercial growth'],
      ['Primary Focus', 'Revenue opportunities and OEM partnership advantages'],
      [
        'Product Presentation',
        'Emphasize business opportunities rather than technical feature descriptions',
      ],
      [
        'Content Density',
        'Concise paragraphs, benefit cards, simple diagrams, and adequate whitespace',
      ],
      ['CTA Placement', 'Hero, product portfolio, and closing section'],
      ['Mobile Design', 'Responsive cards, simplified partnership journey, and prominent CTA'],
      [
        'Section 6 CTA',
        'Single Become a Partner button linking to a dedicated partnership enquiry page or contact mechanism',
      ],
      ['Language', 'Commercially compelling, professional, and free from unsupported claims'],
    ],
    finalStructure:
      'Six public-facing webpage sections, followed by SEO metadata and UI/UX implementation guidance for the development team.',
    exclusions:
      'Internal business structures, partner designations, commission percentages, transfer pricing, and operational arrangements remain excluded from the public webpage.',
  },

  /*
   * ⚠️ THE DECK SUPPLIES NO IMAGES.
   *
   * It asks for "a premium, globally relevant image of technology business
   * collaboration and commercial growth" and provides none — the Word file
   * has an empty `word/media/` directory.
   *
   * Nothing from the legacy asset library fits: those banners are licensed
   * stock whose provenance this project cannot confirm, and a stock
   * handshake photograph would say nothing a visitor has not already seen.
   * The page uses `PartnerArt` instead — a drawing of the structure the deck
   * is actually describing (one OEM core, several routes to market), which
   * asserts no result and needs no licence.
   *
   * If the client wants photography here, it needs to arrive with a licence.
   */
  imagery: {
    /* ⚠️ Superseded 2026-10-17 — the client supplied `hero.image` directly.
       The rest of this block is kept as the record of why a drawing stood
       here first, and because its licensing caveat still applies. */
    suppliedInDeck: false,
    suppliedSeparately: '/assets/images/partner/intro.webp (2026-10-17)',
    requested:
      'Premium, globally relevant image of technology business collaboration and commercial growth.',
    previouslyRendered: 'PartnerArt — an inline SVG drawn for this page.',
    licensing:
      'No source, licence or photographer was recorded for the supplied file. Confirm before this is public.',
  },

  concerns: [
    'The deck is in American spelling ("capitalize", "organizations", "Emphasize"); the IntelliOSM deck beside it is British. Preserved as written in both.',
    'IntelliTUTE has a live page on this site but is absent from the deck\'s portfolio table. Nothing was invented to fill the gap.',
    'The deck asks for the slug /partners; the route is /partner, because the header already points there.',
    'No ® or ™ appears on any product name in this deck, while site.js writes IntelliOSM™, IntelliEXAMS™ and so on. The deck is followed verbatim here, so the same products are marked differently on different pages.',
  ],
};

export default partnerPage;
