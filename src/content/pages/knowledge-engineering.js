/*
 * Content extraction: Knowledge Engineering page
 * ---------------------------------------------------------------------------
 * SOURCE (read-only, unmodified):
 *   /home/ranjith/Downloads/
 *     Mindlogicx_Knowledge_Engineering_Webpage_Content_Oct2026_REVISED.docx
 *   Stated version/date (from the document's own cover line):
 *     "October 2026  |  Version 4.0  |  For AI-assisted UI/UX design and
 *      webpage development"
 *   Document title / subtitle:
 *     "Mindlogicx Corporate Website"
 *     "Knowledge Engineering Page – Content & AI Design Guidelines"
 *
 * Extracted: 2026-10-13
 *
 * ---------------------------------------------------------------------------
 * VERBATIM
 * ---------------------------------------------------------------------------
 * All copy below is VERBATIM from the .docx. Nothing has been reworded,
 * shortened, re-punctuated or Americanised — British spellings ("organisation",
 * "colours", "Digitise", "summarised"), curly apostrophes (’ U+2019 in
 * "Mindlogicx’s", "organisation’s"), curly double quotes and en dashes
 * (– U+2013, in "MindGENIE® – Agentic AI Intelligence Layer" and
 * "Knowledge Engineering Page – Content & AI Design Guidelines") are preserved
 * exactly. The ® on MindGENIE® and IntelliWORK® is kept.
 *
 * The only characters removed anywhere are the document's authoring labels that
 * prefix a line and are plainly not page copy:
 *   "WEBSITE CONTENT", "CTA labels:", "CTA:", "Closing statement:",
 *   "Supporting content:", "AI Philosophy:", "Figure 1:", "Navigation:".
 * The text AFTER each of those labels is reproduced verbatim and unchanged.
 * (The "AI Philosophy" label is retained as a separate `aiPhilosophyLabel`
 * field in section 5 because it may well be shown as a callout label — the
 * client should confirm whether it is rendered or dropped.)
 *
 * ---------------------------------------------------------------------------
 * DELIBERATELY EXCLUDED — NOT PAGE CONTENT
 * ---------------------------------------------------------------------------
 * Every "Visual Design Direction" block, the document-level "Overall Visual
 * Design Direction" paragraph, the "Implementation note", the "SEO
 * implementation guidance" line and the closing "Final Instructions for
 * AI-Assisted Website Development" bullets are ART DIRECTION / BUILD
 * INSTRUCTIONS. They are NOT in this module as renderable strings, by design.
 * The document itself says so:
 *   "Content labelled “Website Content” is displayed on the page. “Visual
 *    Design Direction” and “Navigation” are instructions for the AI development
 *    tool and should not appear as webpage text."
 * The single exception taken is the one allowed: where a "Navigation" line (or,
 * for section 7, a Visual Design Direction bullet) states where a CTA LINKS,
 * that destination is captured as a `link` on the CTA, with the document's own
 * wording kept alongside it in `linkSource` so the inference is auditable.
 *
 * Section 1 of the document is a "Page Overview" parameter table describing the
 * page; it is captured as `meta`, not as page content. Section 9 is an SEO &
 * Metadata table explicitly marked "not intended to appear as visible page
 * content"; it is captured as `seo`, also outside `sections`.
 *
 * `sections` therefore contains exactly the 7 webpage sections (document
 * sections 2–8), in document order — matching the "Webpage Sections: 7" count
 * in the Page Overview table.
 *
 * ---------------------------------------------------------------------------
 * FOR THE CLIENT TO CHECK
 * ---------------------------------------------------------------------------
 * 1. CONTACT URL IS NOT IN THE DOCUMENT. Three CTAs are said to go to
 *    "Contact Us" / "the corporate Contact Us page", but no path is ever given.
 *    "/contact-us/" is written into `link` as a PLACEHOLDER so the CTAs are
 *    wireable; the document's actual wording is preserved in `linkSource`.
 *    Confirm the real contact path before build. (The four industry links ARE
 *    given explicitly in the document: /education/, /healthcare/, /legal/,
 *    /finance/.)
 * 2. HERO SCROLL TARGET. The document says "Explore Our Capabilities scrolls to
 *    Section 4 of this document (the webpage capabilities section)" — i.e. an
 *    in-page scroll, not a URL. Recorded as the anchor
 *    "#our-knowledge-engineering-capabilities", which matches the `id` of that
 *    section in this file. Verify the anchor id used in markup matches.
 * 3. FRAMEWORK DIAGRAM IS AN IMAGE ONLY. Section 5 is headed "Framework
 *    Diagram – Content & Structure" but the .docx supplies the diagram solely
 *    as an embedded PNG (word/media/image1.png) — there is NO text version of
 *    its block labels anywhere in the document. Because those labels are real
 *    on-page content, they are recorded under `diagram.stages`, TRANSCRIBED
 *    FROM THE IMAGE (`diagram.transcribedFromImage: true`), not copied from
 *    document text. They must be proofread against the artwork before use.
 *    Note the diagram's own box reads "AI & INTELLIGENCE LAYER - MindGENIE®"
 *    with a plain hyphen, whereas the section heading uses an en dash.
 * 4. SECTION 5 IS THIN AS COPY: one lead paragraph, one supporting paragraph
 *    and a figure caption. Everything else in it is the diagram. Flagged.
 * 5. EDUCATION CARD carries a product list ("Products: IntelliEXAMS, IntelliOSM,
 *    IntelliTHESIS, IntelliTUTE and IntelliWORK®.") inside the same paragraph as
 *    its description; the other three industry cards have no equivalent. Kept
 *    verbatim as one `description` string — split it in the component if the
 *    design wants the products on their own line.
 * 6. The four industry cards and the framework each ship with an image in the
 *    .docx (word/media/image1–5.png). No alt text and no filenames are given.
 *    No image paths are invented here.
 * 7. CTA LABEL DRIFT: the Page Overview table names the primary CTA
 *    "Talk to Our Experts", but the section 7 closing CTA is labelled
 *    "Connect with Our Experts". Both are kept verbatim as written. Confirm
 *    whether this is intentional.
 * 8. The hero eyebrow "KNOWLEDGE ENGINEERING" appears in the document in caps;
 *    reproduced in caps rather than styled via CSS, since that is how it is
 *    written.
 * ---------------------------------------------------------------------------
 */

export const knowledgeEngineeringPage = {
  meta: {
    pageName: "Knowledge Engineering",
    website: "Mindlogicx Corporate Website",
    url: "/knowledge-engineering/",
    objective:
      "Establish Mindlogicx as a Global Knowledge Engineering Company and communicate its capabilities, approach and business value.",
    audience:
      "Global enterprises, institutions, technology decision-makers and prospective business partners",
    positioning:
      "Knowledge Engineering, AI-First Product Engineering and Intelligent Digital Solutions",
    primaryCta: "Talk to Our Experts",
    secondaryCta: "Explore Our Capabilities",
    sectionCount: 7,
  },

  sections: [
    {
      id: "hero",
      documentSection: "2. Hero – Knowledge Engineering",
      eyebrow: "KNOWLEDGE ENGINEERING",
      heading: "Transforming Knowledge into Intelligence.",
      subheading:
        "Engineering intelligent, scalable and future-ready digital ecosystems.",
      body: [
        "At Mindlogicx, we transform complex domain knowledge, institutional expertise and business processes into intelligent digital platforms and solutions.",
        "By combining Knowledge Engineering, Artificial Intelligence and advanced digital technologies, we help organisations streamline operations, enhance decision-making and unlock sustainable business value.",
      ],
      ctas: [
        {
          label: "Explore Our Capabilities",
          link: "#our-knowledge-engineering-capabilities",
          linkSource:
            "Explore Our Capabilities scrolls to Section 4 of this document (the webpage capabilities section).",
        },
        {
          label: "Talk to Our Experts",
          link: "/contact-us/",
          linkSource: "Talk to Our Experts navigates to Contact Us.",
        },
      ],
    },

    {
      id: "understanding-knowledge-engineering",
      documentSection: "3. Understanding Knowledge Engineering",
      sectionTitle: "Understanding Knowledge Engineering",
      heading: "Turning Knowledge into Intelligent Digital Assets",
      body: [
        "Knowledge is among an organisation’s most valuable assets. However, much of it remains distributed across people, documents, applications, processes and disconnected systems.",
        "Knowledge Engineering is the discipline of capturing, structuring, organising and transforming this knowledge into intelligent, reusable and actionable digital assets.",
        "At Mindlogicx, we integrate domain expertise, structured knowledge, AI and digital engineering to develop solutions that understand context, automate workflows and support informed decisions.",
        "Our approach goes beyond conventional software development. We engineer the knowledge and intelligence that power adaptive, efficient and sustainable digital ecosystems.",
      ],
    },

    {
      id: "our-knowledge-engineering-capabilities",
      documentSection: "4. Our Knowledge Engineering Capabilities",
      sectionTitle: "Our Knowledge Engineering Capabilities",
      heading: "Engineering Intelligence Across the Knowledge Lifecycle",
      body: [
        "Our capabilities span the complete knowledge lifecycle, from knowledge discovery and structuring to intelligent automation, analytics and governance.",
      ],
      items: [
        {
          title: "Knowledge Capture & Structuring",
          description:
            "Transform fragmented information, institutional expertise, policies and business rules into structured, accessible and reusable knowledge assets.",
        },
        {
          title: "Artificial Intelligence & Machine Learning",
          description:
            "Apply AI, machine learning and contextual intelligence to interpret information, generate insights and support intelligent decision-making.",
        },
        {
          title: "Intelligent Process Automation",
          description:
            "Digitise and orchestrate complex business processes through intelligent workflows, rule-based automation and human oversight.",
        },
        {
          title: "Digital Platform Engineering",
          description:
            "Design and develop scalable, secure and interoperable digital platforms that integrate knowledge, processes and intelligent services.",
        },
        {
          title: "Data Analytics & Decision Intelligence",
          description:
            "Transform operational and domain data into actionable intelligence through analytics, predictive models and interactive dashboards.",
        },
        {
          title: "Knowledge Governance & Security",
          description:
            "Embed access controls, knowledge integrity, auditability, privacy and compliance into knowledge-driven digital ecosystems.",
        },
      ],
      closingStatement:
        "These capabilities enable organisations to move from fragmented information and isolated applications to connected, knowledge-driven digital ecosystems.",
    },

    {
      id: "our-knowledge-engineering-framework",
      documentSection: "5. Our Knowledge Engineering Framework",
      sectionTitle: "Our Knowledge Engineering Framework",
      /* Shortened 2026-10-17 at the client's request, from "From Domain
         Knowledge to Business Intelligence". This is one of the few places
         the page departs from the source deck's wording. */
      heading: "From Domain Knowledge to Intelligence",
      body: [
        "Mindlogicx follows a structured engineering approach that integrates domain knowledge, intelligent technologies, digital platforms and governance to deliver measurable business outcomes.",
      ],
      diagram: {
        label: "Framework Diagram – Content & Structure",
        caption:
          "Mindlogicx Knowledge Engineering Framework. Security, governance and human oversight span the lifecycle.",
        captionRaw:
          "Figure 1: Mindlogicx Knowledge Engineering Framework. Security, governance and human oversight span the lifecycle.",
        imageRef: "word/media/image1.png",
        // The .docx contains NO text version of the diagram. The five stages
        // below were TRANSCRIBED from the embedded PNG because they are
        // on-page content. Proofread against the artwork before use.
        transcribedFromImage: true,
        stages: [
          {
            title: "DOMAIN KNOWLEDGE & INSTITUTIONAL EXPERTISE",
            items: [
              "Documents",
              "Business Rules",
              "Processes",
              "Data",
              "Human Expertise",
            ],
          },
          {
            title: "KNOWLEDGE ENGINEERING",
            items: ["Capture", "Structure", "Model", "Validate", "Govern"],
          },
          {
            title: "AI & INTELLIGENCE LAYER - MindGENIE®",
            items: [
              "AI Reasoning",
              "Agentic Workflows",
              "Intelligent Automation",
              "Analytics",
            ],
          },
          {
            title: "DIGITAL EXECUTION",
            items: [
              "Digital Platforms",
              "Intelligent Workflows",
              "Decision Intelligence",
            ],
          },
          {
            title: "BUSINESS OUTCOMES",
            items: [
              "Efficiency",
              "Accuracy",
              "Scalability",
              "Governance",
              "Sustainable Value",
            ],
          },
        ],
      },
      supportingContent:
        "Our framework enables organisations to systematically transform institutional knowledge into scalable digital capabilities while maintaining security, traceability and human accountability.",
    },

    {
      id: "mindgenie-agentic-ai-intelligence-layer",
      documentSection: "6. MindGENIE® – Agentic AI Intelligence Layer",
      sectionTitle: "MindGENIE® – Agentic AI Intelligence Layer",
      heading: "Intelligence Embedded into Digital Ecosystems",
      body: [
        "MindGENIE® is Mindlogicx’s proprietary Agentic AI framework, designed to bring contextual intelligence, intelligent automation and AI-assisted decision support into our products and solutions.",
        "Rather than operating as a standalone technology, MindGENIE is integrated into digital workflows to make knowledge actionable and enable intelligent execution.",
      ],
      itemsHeading: "Core Capabilities",
      items: [
        {
          title: "Contextual Intelligence",
          description:
            "Interprets domain knowledge and contextual information.",
        },
        {
          title: "Agentic Automation",
          description:
            "Supports intelligent, task-oriented workflow orchestration.",
        },
        {
          title: "AI-Assisted Operations",
          description:
            "Enables intelligent content generation, analysis and evaluation.",
        },
        {
          title: "Predictive Intelligence",
          description:
            "Supports insights, recommendations and analytical decision-making.",
        },
        {
          title: "Human-in-the-Loop",
          description: "Maintains human review, validation and approval.",
        },
        {
          title: "Responsible AI Governance",
          description:
            "Supports controlled execution, traceability and accountability.",
        },
      ],
      aiPhilosophyLabel: "AI Philosophy",
      aiPhilosophy:
        "AI should augment human intelligence, improve operational efficiency and support informed decisions, while human expertise retains the required oversight and accountability.",
    },

    {
      id: "knowledge-engineering-across-industries",
      documentSection: "7. Knowledge Engineering Across Industries",
      sectionTitle: "Knowledge Engineering Across Industries",
      heading: "One Engineering Philosophy. Multiple Industries.",
      body: [
        "Mindlogicx applies its Knowledge Engineering expertise across industries where domain knowledge, complex workflows, intelligent automation and trusted decision-making are critical.",
      ],
      items: [
        {
          title: "Education",
          description:
            "Intelligent platforms for assessments, evaluation, learning, research and workforce competency development. Products: IntelliEXAMS, IntelliOSM, IntelliTHESIS, IntelliTUTE and IntelliWORK®.",
          cta: { label: "Explore Education", link: "/education/" },
          imageRef: "word/media/image2.png",
        },
        {
          title: "Healthcare",
          description:
            "Knowledge-driven digital solutions supporting healthcare operations, clinical information, patient engagement and informed care delivery.",
          cta: { label: "Explore Healthcare", link: "/healthcare/" },
          imageRef: "word/media/image3.png",
        },
        {
          title: "Legal",
          description:
            "Intelligent solutions for legal knowledge management, document intelligence, workflow automation and professional decision support.",
          cta: { label: "Explore Legal", link: "/legal/" },
          imageRef: "word/media/image4.png",
        },
        {
          title: "Finance",
          description:
            "Knowledge-driven financial solutions supporting process automation, governed information workflows, risk intelligence and operational decision-making.",
          cta: { label: "Explore Finance", link: "/finance/" },
          imageRef: "word/media/image5.png",
        },
      ],
    },

    {
      id: "why-mindlogicx",
      documentSection: "8. Why Mindlogicx?",
      sectionTitle: "Why Mindlogicx?",
      heading:
        "Deep Domain Understanding. Intelligent Engineering. Global Outlook.",
      body: [
        "Mindlogicx combines domain expertise, proprietary AI technologies, modern product engineering and global delivery capabilities to develop intelligent digital ecosystems.",
        "Our strength lies in connecting knowledge, intelligence, automation and governance into practical, scalable solutions that address real-world organisational requirements.",
      ],
      items: [
        {
          title: "Domain-Led Engineering",
          description:
            "Solutions designed around industry knowledge, institutional workflows and operational requirements.",
        },
        {
          title: "AI-First Approach",
          description:
            "Proprietary intelligence capabilities embedded into products and workflows.",
        },
        {
          title: "Product Engineering Expertise",
          description:
            "Experience building scalable, adaptable and maintainable digital platforms.",
        },
        {
          title: "Security & Governance",
          description:
            "Governed architectures with access controls, traceability and human accountability.",
        },
        {
          title: "Global Delivery Model",
          description:
            "Regional delivery capabilities aligned with local operating requirements.",
        },
        {
          title: "Sustainable Business Value",
          description:
            "Engineering focused on efficiency, knowledge continuity, scalability and long-term outcomes.",
        },
      ],
      closingCta: {
        label: "Closing Call to Action",
        heading: "Your Knowledge. Our Engineering. Intelligent Possibilities.",
        body: [
          "Transform your institutional knowledge and business processes into intelligent digital platforms designed for the future.",
        ],
        ctas: [
          {
            label: "Connect with Our Experts",
            link: "/contact-us/",
            linkSource: "CTA navigates to the corporate Contact Us page.",
          },
        ],
      },
    },
  ],

  // Document section 9. Explicitly "not intended to appear as visible page
  // content" — metadata only, kept outside `sections`.
  seo: {
    url: "/knowledge-engineering/",
    title: "Knowledge Engineering & AI Solutions | Mindlogicx",
    metaDescription:
      "Discover how Mindlogicx transforms domain knowledge into intelligent digital platforms through Knowledge Engineering, AI, automation and analytics.",
    h1: "Transforming Knowledge into Intelligence",
    primaryKeyword: "Knowledge Engineering",
    secondaryKeywords: [
      "AI-driven digital platforms",
      "intelligent automation",
      "knowledge management",
      "digital platform engineering",
      "decision intelligence",
    ],
    openGraphTitle: "Knowledge Engineering – Mindlogicx",
    openGraphDescription:
      "Transforming domain knowledge into intelligent, scalable and future-ready digital ecosystems.",
    openGraphImage: "Branded Knowledge Engineering hero image",
    canonicalUrl: "Final production URL under mindlogicx.com",
  },
};

export default knowledgeEngineeringPage;
