/*
 * ============================================================================
 * CONTENT EXTRACTION — IntelliOSM product page
 * ============================================================================
 *
 * Extracted: 2026-10-17
 *
 * SOURCE (read-only; the file was not modified)
 * ---------------------------------------------------------------------------
 *   /home/ranjith/Downloads/IntelliOSM_Webpage_Content_v1.2.docx
 *   "Mindlogicx Corporate Website • Content v1.2 • 17 October 2026"
 *
 * The document is a Word file. It was unzipped and `word/document.xml` parsed
 * directly — paragraphs, heading styles and all three tables — rather than
 * read through a converter, so nothing is lost to a lossy text dump. It
 * carries exactly one embedded image (`word/media/image1.png`, 186KB): the
 * evaluation-workflow flowchart. See `workflowDiagram` below.
 *
 * Every string in `sections` is VERBATIM from that document, including its
 * British spellings ("organisations", "Analyse", "personalised",
 * "programmes", "Finalisation") and its typographic apostrophe in "Bloom's".
 *
 * ---------------------------------------------------------------------------
 * WHAT IS HERE BUT NOT ON THE PAGE
 * ---------------------------------------------------------------------------
 * The deck interleaves instructions to whoever builds it with the words a
 * visitor reads. Those are captured under `authorGuidance`, each marked
 * `rendered: false` — the same separation made for the HealthTech, Legal and
 * Finance decks. They are the "UI/UX:" lines, the "Implementation note", the
 * "SEO and Website Metadata" table and "Implementation Recommendations".
 *
 * ---------------------------------------------------------------------------
 * ⚠️ FEATURE AVAILABILITY IS NOT SIGNED OFF
 * ---------------------------------------------------------------------------
 * The deck's own last line reads:
 *
 *   "Handoff status: Content v1.2 baseline for UI/UX implementation; MVP
 *    feature availability requires Product Engineering sign-off."
 *
 * and its recommendations ask to "Validate which features, supported device
 * experiences, analytics, and Workspace capabilities are included in
 * IntelliOSM MVP v26.2, targeted for 15 November 2026, before publication."
 *
 * **This page therefore describes a product whose feature list is still
 * provisional.** The copy is written to match — "designed for", "is designed
 * to", "supports", "can choose" — and the device list in the Global Scale
 * section is explicitly "Designed for supported ... environments" rather than
 * a compatibility promise. Do not tighten any of that into the present tense,
 * and do not publish before the sign-off the deck asks for.
 *
 * ---------------------------------------------------------------------------
 * ⚠️ PRICING IS DELIBERATELY ABSENT
 * ---------------------------------------------------------------------------
 * The subscription section describes a credit model but names no price, no
 * credit quantity and no entitlement, because the deck instructs: "Plan
 * pricing, credit quantities, and entitlements should only be published after
 * commercial finalisation." Nothing here invents a number to fill that gap.
 *
 * ---------------------------------------------------------------------------
 * ⚠️ THE DECK'S RECOMMENDED H1 IS NOT THIS PAGE'S H1
 * ---------------------------------------------------------------------------
 * The SEO table asks for `H1 = "Mark Smarter. Evaluate Faster. Decide with
 * Confidence."` and `URL slug = /intelliosm`. The slug is honoured. The H1 is
 * not: every other product page on this site opens with the product name as
 * its `h1` (IntelliEXAMS, IntelliTUTE, IntelliWORK all do), and the menu that
 * reaches this page says "IntelliOSM". The deck's sentence is the first `h2`
 * instead, immediately below. `seo.h1` records what was asked for so the
 * decision is visible rather than lost.
 *
 * ---------------------------------------------------------------------------
 * ⚠️ SECTION NUMBERING AND THE WORKFLOW DIAGRAM
 * ---------------------------------------------------------------------------
 * The deck heads its sections "SECTION 1 | HERO" … "SECTION 7 | CLOSING CALL
 * TO ACTION", and the embedded flowchart numbers its stages 1–6. Both sets of
 * numerals are dropped, per the site-wide rule that nothing is indexed
 * (2026-10-12). `number` is kept on each section here.
 *
 * The flowchart itself is NOT shipped as a picture. It is a 1512×1444 raster
 * of small text in blue and green — off-palette, unreadable on a phone, and
 * invisible to a screen reader. The deck asks for the opposite anyway:
 * "Implement as a responsive process diagram. Show three preparation
 * scenarios in parallel on desktop and stacked on mobile. Distinguish AI
 * marking visually from evaluator approval." So the diagram is rebuilt as
 * live markup from `workflow.stages` + `workflow.scenarios` below.
 *
 * The flowchart is the ONLY source for the three scenario names — the body
 * text never lists them — so they were read off the image and are recorded
 * here with that provenance.
 */

export const intelliosmPage = {
  slug: 'intelliosm',
  title: 'IntelliOSM',

  /* The document's own cover block. */
  productLine: 'AI-Native Digital Marking',
  productDescriptor: 'Global SaaS Marking Intelligence Platform',
  documentVersion: 'Content v1.2 • 17 October 2026',

  hero: {
    number: 1,
    label: 'HERO',
    heading: 'Mark Smarter. Evaluate Faster. Decide with Confidence.',
    strapline: 'Intelligence Behind Every Mark.',
    body: [
      'IntelliOSM is a global, SaaS-based Marking Intelligence Platform that transforms the evaluation of subjective and descriptive assessments through artificial intelligence and human expertise.',
      'Combining AI-assisted marking, intelligent rubrics, and digital evaluation workflows, IntelliOSM enables faster, more consistent, and transparent assessment evaluation while keeping final marking decisions under human control.',
      'From individual evaluators to large assessment organisations, IntelliOSM delivers an intelligent, scalable, and cloud-accessible marking experience.',
    ],
    statement: 'AI-Assisted Intelligence. Human-Controlled Decisions.',

    /*
     * Supplied by the client 2026-10-17, replacing the `MarkingArt` drawing.
     *
     * It answers the deck's hero direction closely — "a product interface
     * with answer script, recommended marks, evaluator comments and approval
     * controls" — showing an evaluator with a handwritten script beside a
     * screen holding an annotated response and a scored rubric panel.
     *
     * ⚠️ **The interface on that screen is not IntelliOSM.** It is set
     * dressing in a stock photograph, and it carries legible rubric scores
     * ("4/5", "3/5", "Overall 4/5"). On a page about a product whose MVP is
     * not signed off, a screen that reads as a real marking view is a claim
     * the rest of this page is careful not to make. At render width the
     * labels are small enough to read as an office rather than a screenshot —
     * but it was supplied deliberately, so it is used as given and flagged
     * here. Same call as the Dubai skyline on `/intelliwork`.
     *
     * Decorative (`alt=""`): the copy beside it carries the meaning.
     */
    image: '/assets/images/intelliosm/intro.webp',

    /*
     * ⚠️ NOT RENDERED since 2026-10-17 — both hero CTAs were removed at the
     * client's request.
     *
     * "Explore IntelliOSM" was the only thing scrolling to
     * `#platform-capabilities`; that band is still the next section down, so
     * nothing is unreachable. The page's remaining outbound routes are the
     * two in `closing.ctas`.
     *
     * The deck gives labels only — it contains no hyperlink anywhere. The
     * destinations below were this project's choices.
     */
    ctas: [
      { label: 'Explore IntelliOSM', target: '#platform-capabilities', kind: 'primary' },
      { label: 'Request a Demo', target: '/contact-us', kind: 'secondary' },
    ],
  },

  sections: [
    {
      id: 'platform-capabilities',
      number: 2,
      label: 'PLATFORM CAPABILITIES',
      heading: 'Beyond Digital Marking — Discover Marking Intelligence',
      subheading: 'Why IntelliOSM?',
      body: [
        'Traditional assessment evaluation can involve repetitive marking activities, fragmented workflows, inconsistent application of evaluation criteria, and limited operational visibility. IntelliOSM introduces intelligent assistance across the evaluation lifecycle, bringing assessment preparation, marking criteria, AI-assisted evaluation, human validation, and evaluation intelligence into one platform.',
      ],
      itemsHeading: 'One Intelligent Platform. Every Marking Decision Supported.',

      /* The deck's two-column "Capability | Description" table. */
      items: [
        {
          title: 'Intelligent Rubric Generation',
          description:
            'Prepare model answers, marking schemes, and rubrics using assessment inputs and defined evaluation parameters.',
          glyph: 'AgentStructured',
        },
        {
          title: 'AI-Assisted Evaluation',
          description:
            'Analyse responses against approved marking criteria and recommend marks, annotations, and comments.',
          glyph: 'AgentAssessment',
        },
        {
          title: 'Human-in-the-Loop Validation',
          description:
            'Allow evaluators to review, modify, and approve recommendations before finalisation.',
          glyph: 'People',
        },
        {
          title: 'Digital On-Screen Marking',
          description:
            'Review answer scripts, assign marks, and record annotations and evaluation comments digitally.',
          glyph: 'AgentWorkflow',
        },
        {
          title: 'Evaluation Analytics',
          description:
            'Gain visibility into marking activities, evaluation progress, and operational performance.',
          glyph: 'AgentAnalytics',
        },
        {
          title: 'Auditability and Traceability',
          description:
            'Maintain records of AI recommendations, human interventions, and final approved outcomes.',
          glyph: 'AgentGovernance',
        },
      ],
      coreMessage: 'From Digital Marking to Intelligent Evaluation.',
    },

    {
      id: 'evaluation-workflow',
      number: 3,
      label: 'EVALUATION WORKFLOW',
      heading: 'How IntelliOSM Works — From Assessment Inputs to Trusted Outcomes',
      body: [
        'IntelliOSM follows a connected marking workflow that combines assessment preparation, AI-assisted evaluation, evaluator judgement, and final approval. The platform supports multiple evaluation-readiness scenarios, allowing institutions and evaluators to work with existing marking criteria or prepare them using AI assistance.',
      ],
      diagramHeading: 'Understanding the Evaluation Journey',

      /*
       * The six stages. `title` and `description` are the deck's prose list,
       * verbatim. `tone` drives the colour and exists to satisfy the deck's
       * "Distinguish AI marking visually from evaluator approval":
       *
       *   'plain'  — a neutral step
       *   'ai'     — carried out by MindGENIE (cyan)
       *   'human'  — the evaluator decides (purple)
       *
       * `branchAfter` marks the stage the three scenarios hang beneath.
       */
      stages: [
        {
          title: 'Assessment Preparation',
          description:
            'Upload the question paper, blueprint, and relevant evaluation parameters, including Bloom’s level, difficulty level, and cognitive level.',
          tone: 'plain',
        },
        {
          title: 'Evaluation Criteria Preparation',
          description:
            'AI assists in preparing model answers and rubrics where required. Existing criteria can be used directly, subject to approval.',
          tone: 'ai',
          branchAfter: true,
        },
        {
          title: 'Answer Script Import',
          description: 'Candidate responses are imported into the digital marking environment.',
          tone: 'plain',
        },
        {
          title: 'AI-Assisted Marking',
          description:
            'MindGENIE analyses responses against approved model answers and rubrics to recommend marks, annotations, and evaluation comments.',
          tone: 'ai',
        },
        {
          title: 'Human Review and Approval',
          description:
            'Evaluators examine recommendations, make necessary adjustments, and approve final marks.',
          tone: 'human',
        },
        {
          title: 'Finalisation and Auditability',
          description:
            'Approved evaluation outcomes are finalised, with marking activity and decisions retained for traceability.',
          tone: 'human',
        },
      ],

      /*
       * ⚠️ PROVENANCE: these three are NOT in the deck's prose. They exist
       * only inside the embedded flowchart (`word/media/image1.png`), read off
       * the image. The body text says the platform "supports multiple
       * evaluation-readiness scenarios" without naming them.
       */
      scenarios: {
        lead: 'Select approach based on available model answers and rubrics',
        source: 'word/media/image1.png',
        items: [
          { title: 'Scenario A', state: 'Neither available', action: 'Generate both' },
          { title: 'Scenario B', state: 'Model answer available', action: 'Generate rubrics' },
          { title: 'Scenario C', state: 'Both available', action: 'Use approved criteria' },
        ],
        converge: {
          title: 'Approved Evaluation Criteria',
          description: 'Human-reviewed model answers and marking rubrics',
        },
      },
    },

    {
      id: 'saas-workspaces',
      number: 4,
      label: 'SAAS WORKSPACES',
      heading: 'IntelliOSM SaaS — One Platform. Flexible Workspaces.',
      subheading: 'Marking Intelligence, Delivered Through the Cloud.',
      body: [
        'IntelliOSM brings advanced marking intelligence to users worldwide through a flexible subscription-based SaaS environment. Whether working independently or as part of an institutional evaluation team, customers can choose a workspace aligned with their marking requirements.',
      ],

      workspaces: [
        {
          title: 'Individual Workspace',
          description:
            'A personalised environment for independent evaluators, featuring single-evaluator access, personal marking, AI-assisted rubric preparation and evaluation, individual credit visibility, and personal subscription management.',
          tone: 'cyan',
        },
        {
          title: 'Business Workspace',
          description:
            'A centrally managed environment for institutions and assessment organisations, featuring multiple evaluator seats, shared organisational workspace, team administration, consolidated AI credit visibility, and centralised subscription management.',
          tone: 'purple',
        },
      ],

      /* The deck's three-column comparison table, as rows. */
      comparison: {
        heading: 'Workspace Comparison',
        columns: ['Capability', 'Individual', 'Business'],
        rows: [
          ['Evaluator Access', 'Single user', 'Multiple users'],
          ['AI-Assisted Marking', 'Supported', 'Supported'],
          ['Rubric Preparation', 'Supported', 'Supported'],
          ['Workspace Administration', 'Personal', 'Centralised'],
          ['AI Credit Monitoring', 'Individual', 'Consolidated'],
          ['Subscription Management', 'Personal', 'Organisation-level'],
          /*
           * The deck prints an em dash here for "not applicable". A bare "—"
           * in a cell is announced as nothing at all by most screen readers,
           * so the page renders the word and keeps the dash out of the text
           * layer. See `Comparison` in `IntelliOsm.jsx`.
           */
          ['Team Collaboration', '—', 'Supported'],
        ],
      },

      credits: {
        heading: 'Flexible Subscription and AI Credit Model',
        body: 'IntelliOSM combines subscription access with AI credits. Eligible AI activities include model answer preparation, rubric generation, and AI-assisted evaluation. Unused credits roll over to the next billing cycle, while top-ups can be purchased without changing the subscription renewal date. Usage visibility and low-credit alerts support credit management.',
      },

      coreMessage: 'Flexible Subscriptions. Intelligent Usage. Scalable Evaluation.',
    },

    {
      id: 'human-centred-intelligence',
      number: 5,
      label: 'HUMAN-CENTRED INTELLIGENCE',
      heading: 'Human-Centred Intelligence — Built on Trust and Accountability',
      subheading: 'AI Intelligence with Human Responsibility.',
      body: [
        'Assessment outcomes demand consistency, transparency, traceability, and responsible decision-making. IntelliOSM uses human-in-the-loop evaluation, where AI assists marking while evaluators retain control over final decisions.',
      ],

      /* The four-step accountability chain. Same `tone` split as the workflow. */
      loop: [
        {
          title: 'AI Recommendations',
          description:
            'MindGENIE recommends marks, annotations, and comments against approved marking criteria.',
          tone: 'ai',
        },
        {
          title: 'Evaluator Modifications',
          description:
            'Evaluators may accept, revise, or override recommendations using their academic judgement.',
          tone: 'human',
        },
        {
          title: 'Final Approved Marks',
          description:
            'Authorised evaluators approve final decisions before an evaluation is completed.',
          tone: 'human',
        },
        {
          title: 'Complete Evaluation Traceability',
          description:
            'Recommendations, modifications, approvals, and marking history are recorded for accountability.',
          tone: 'plain',
        },
      ],

      principlesHeading: 'Built Around Responsible Evaluation',
      /*
       * The glyphs are decorative (`aria-hidden`) and reinforce the card
       * title rather than carry it. They exist so this grid reads as part of
       * the same page as the capability grid above — a page where one card
       * grid has marks and the next does not looks unfinished rather than
       * deliberate.
       */
      principles: [
        {
          title: 'Human Authority',
          description: 'Final marks remain under evaluator control.',
          glyph: 'People',
        },
        {
          title: 'Rubric-Based Consistency',
          description: 'Approved criteria guide marking recommendations.',
          glyph: 'Structured',
        },
        {
          title: 'Transparent Decisions',
          description: 'AI recommendations and human adjustments remain distinguishable.',
          glyph: 'AgentAnalytics',
        },
        {
          title: 'Controlled Access',
          description: 'Role-based permissions support secure marking operations.',
          glyph: 'Governed',
        },
      ],

      coreMessage: 'Technology Accelerates Evaluation. Human Expertise Protects Its Integrity.',
    },

    {
      id: 'global-scale',
      number: 6,
      label: 'GLOBAL SCALE',
      heading: 'Global Marking Intelligence — Designed to Scale',
      subheading: 'Intelligent Evaluation Across Borders.',
      body: [
        'IntelliOSM is designed for a connected assessment world where evaluators, institutions, and assessment organisations operate across geographies. Its cloud-based SaaS architecture supports distributed marking operations, consistent evaluation practices, and flexible access across supported devices.',
      ],

      items: [
        {
          title: 'Cloud-Native Access',
          description:
            'Use intelligent marking services without dedicated on-premises marking infrastructure.',
          glyph: 'Cog',
        },
        {
          title: 'Multi-Device Accessibility',
          /* ⚠️ "Designed for supported …" — a design intent, not a
             compatibility promise. See the note at the top of this file. */
          description:
            'Designed for supported Windows, macOS, Linux, iOS, Android tablet, and iPad environments.',
          glyph: 'Structured',
        },
        {
          title: 'Distributed Evaluation',
          description: 'Coordinate marking activities across geographically distributed teams.',
          glyph: 'Globe',
        },
        {
          title: 'Scalable Operations',
          description:
            'Support workloads from individual evaluations to larger institutional assessment programmes.',
          glyph: 'Scalable',
        },
      ],

      environments: {
        heading: 'Designed for Diverse Assessment Environments',
        body: 'IntelliOSM is designed for academic assessments, institutional examinations, professional certification, and other descriptive evaluation activities. Intelligent preparation, AI-assisted marking, and human-controlled approval provide a flexible foundation for modern assessment operations.',
      },

      coreMessage: 'One Intelligent Platform. A World of Evaluation Possibilities.',
    },
  ],

  closing: {
    id: 'experience-intelligent-marking',
    number: 7,
    label: 'CLOSING CALL TO ACTION',
    heading: 'Experience Intelligent Marking — Discover IntelliOSM',
    subheading: 'The Future of Marking Is Intelligent.',
    body: [
      'Move beyond conventional digital marking. Discover a new approach that combines the efficiency of artificial intelligence, the confidence of human judgement, and the flexibility of the cloud.',
    ],
    statement: 'Make Every Mark More Intelligent.',
    ctas: [
      { label: 'Experience Intelligent Marking', target: '/contact-us', kind: 'primary' },
      { label: 'Request a Demo', target: '/contact-us', kind: 'secondary' },
    ],
    signoff: 'IntelliOSM — AI-Native Digital Marking.',
  },

  /* Not rendered. The deck's own "Developer reference — not visible webpage copy." */
  seo: {
    rendered: false,
    pageTitle: 'IntelliOSM — AI-Native Digital Marking Platform',
    metaDescription:
      'Discover IntelliOSM, a global SaaS-based Marking Intelligence Platform combining AI-assisted marking, intelligent rubrics, and human-controlled evaluation.',
    urlSlug: '/intelliosm',
    h1: 'Mark Smarter. Evaluate Faster. Decide with Confidence.',
    primaryKeywords:
      'IntelliOSM, AI-assisted marking, digital marking platform, marking intelligence',
    secondaryKeywords:
      'intelligent on-screen marking, rubric generation, subjective answer evaluation, assessment marking SaaS, human-in-the-loop marking',
    openGraphTitle: 'IntelliOSM — Smarter Marking. Trusted Outcomes.',
    openGraphDescription:
      'Transform assessment evaluation with AI-assisted marking intelligence, human-controlled decisions, and flexible cloud-based workspaces.',
  },

  /* Instructions to the builder. None of this is page copy. */
  authorGuidance: {
    rendered: false,
    uiUx: [
      {
        section: 'Hero',
        note: 'Feature a product interface with answer script, recommended marks, evaluator comments and approval controls.',
      },
      {
        section: 'Evaluation Workflow',
        note: 'Implement as a responsive process diagram. Show three preparation scenarios in parallel on desktop and stacked on mobile. Distinguish AI marking visually from evaluator approval.',
      },
    ],
    implementationNote:
      'Plan pricing, credit quantities, and entitlements should only be published after commercial finalisation.',
    recommendations: [
      'Use product-centric interface visuals rather than generic AI illustrations.',
      'Implement the workflow as a responsive diagram with three evaluation-criteria scenarios.',
      'Connect CTAs to functional product-exploration and demo-enquiry journeys.',
      'Validate which features, supported device experiences, analytics, and Workspace capabilities are included in IntelliOSM MVP v26.2, targeted for 15 November 2026, before publication.',
    ],
    handoffStatus:
      'Content v1.2 baseline for UI/UX implementation; MVP feature availability requires Product Engineering sign-off.',
  },

  /* The single embedded image, recorded and deliberately not shipped. */
  workflowDiagram: {
    rendered: false,
    source: 'IntelliOSM_Webpage_Content_v1.2.docx → word/media/image1.png',
    pixels: '1512 × 1444',
    reason:
      'A raster of small text in off-palette blue and green: unreadable at phone width, invisible to assistive technology, and asked by the deck itself to be built as a responsive diagram instead. Rebuilt from `stages` + `scenarios`.',
  },
};

export default intelliosmPage;
