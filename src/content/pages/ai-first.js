/*
 * AI First page content — transcribed VERBATIM from the previous Mindlogicx
 * site on 2026-10-13. No rewording, no summarising, no invented copy.
 * Curly apostrophes (’), em dashes (—) and the source's mix of straight and
 * curly quote characters are reproduced exactly as they appear in the source.
 *
 * SOURCE FILES READ (all under
 * /home/ranjith/Documents/ClaudeProjects/OfficeProjects/Mindlogicx_India/mlx-website-2025-frontend):
 *   src/app/ai_first/page.tsx                            — page shell, section order
 *   src/components/Common/PageBanner.tsx                 — banner markup (title + bg image only)
 *   src/components/AIFirst/NewAIFHero.tsx                 — LIVE hero
 *   src/components/AIFirst/AIFMeaningSection.tsx
 *   src/components/AIFirst/AIFIntelligeniSection.tsx      — exported as AIFMindGenie
 *   src/components/AIFirst/AIFAILabs.tsx
 *   src/components/AIFirst/AIFAILabsMandate.tsx
 *   src/components/AIFirst/AIFArchitecturePrinciples.tsx
 *   src/components/AIFirst/AIFAIInAction.tsx
 *   src/components/AIFirst/AIFWhyAIFirst.tsx
 *   src/components/AIFirst/AIFPromise.tsx
 *   src/components/AIFirst/AIFBrandEssence.tsx
 *   src/components/AIFirst/AIFHeroSection.tsx             — read only to confirm it is dead
 *
 * WHICH HERO IS LIVE
 *   NewAIFHero.tsx (default export `NewAIFirstSection`) is the live hero.
 *   page.tsx imports both heroes but renders `<NewAIFirstSection/>`;
 *   `<AIFHeroSection/>` on the line above it is commented out.
 *
 * DEAD COMPONENTS SKIPPED
 *   - AIFHeroSection.tsx — superseded by NewAIFHero; its render call is
 *     commented out in page.tsx. Its copy is a near-duplicate of the live
 *     hero's ("Intelligence by Design. Outcomes by Default." + the same
 *     MindGENIE / AI Labs note), so nothing unique is lost.
 *   That is the only unused file in src/components/AIFirst/ — the other ten
 *     components are all rendered by the page.
 *
 * STOCK IMAGES DROPPED
 *   None. This page references exactly one image — the local page banner
 *   `/imagess/mindlogicx/header_banner/new_banners/AI_First_Hero_banner.webp`
 *   (verified present in the old site's public/ folder). Every other visual on
 *   the page is inline SVG, CSS gradient or glyph, so there is no remote stock
 *   photography to drop.
 *
 * COPY COMMENTED OUT IN THE SOURCE (recorded here only where it is unique,
 * and NOT included in the exported object, because it does not ship):
 *   - Hero: badge "The Mindlogicx Manifesto"; heading "AI-First at Mindlogicx".
 *   - Section eyebrow badges, all commented out: "The Control Plane"
 *     (MindGENIE), "Engineering Excellence" (AI Labs), "Engineering Guidelines"
 *     (Architecture Principles), "Real World Impact" (AI in Action),
 *     "Enterprise Value" (Why AI-First), "The Mindlogicx Manifesto" +
 *     "Active Deployment" (Promise).
 *   - Buttons, all commented out: "Request Outcome Audit" (AI in Action),
 *     "Partner with AI-First" / "View Roadmap" (Why AI-First),
 *     "Initiate Discovery Turn" (Promise), "Join the Ecosystem" (Brand
 *     Essence), "Explore Our Platforms" / "Watch Innovation" (dead hero).
 *   - Brand Essence: the big "MINDLOGICX" ghost wordmark and "Mindlogicx"
 *     title block are commented out, so that section ships as four
 *     descriptors plus the tagline only.
 *
 * FOR THE CLIENT TO CHECK
 *   1. There are NO call-to-action buttons anywhere on this page — every one
 *      was commented out. If the new page needs a CTA, the copy must be
 *      supplied (or revived from the list above).
 *   2. "Case Study available" appears on all four AI in Action cards but links
 *      nowhere in the source — it is a label, not a link. Confirm whether real
 *      case studies exist and where they should point.
 *   3. The AI in Action cards carry no body copy, only a title and three
 *      outcome bullets each. Confirm that is intentional.
 *   4. "Ready to scale?" (Why AI-First) and "Future-Proof Core" (Architecture
 *      Principles) are promo tiles sitting inside otherwise uniform card
 *      grids; neither has a destination. Confirm they should survive.
 *   5. Quote punctuation is inconsistent in the source: the Meaning and
 *      Promise pull-quotes use curly apostrophes but straight double quotes,
 *      and the Why AI-First quote uses straight double quotes. Reproduced
 *      as-is; flag if the new site should normalise to curly quotes.
 *   6. The Brand Essence descriptors use emoji/glyph icons (✦ ◈ 🛡 🎯) as
 *      literal text in the source. Recorded under `icon`, but they are
 *      decoration — the new site will likely want real icons.
 *   7. Section 3's source file is named AIFIntelligeniSection.tsx ("Intelligeni"
 *      looks like a leftover working name) while the component and all its copy
 *      say MindGENIE. Nothing to fix in the copy; noted for traceability.
 */

export const aiFirstPage = {
  title: "AI First",
  bannerImage:
    "/imagess/mindlogicx/header_banner/new_banners/AI_First_Hero_banner.webp",

  sections: [
    /* 1. NewAIFHero.tsx — the live hero */
    {
      id: "ai-first-manifesto",
      source: "NewAIFHero",
      heading: "Intelligence by Design. Outcomes by Default.",
      description:
        "At Mindlogicx, AI-First is not a feature strategy — it is our foundational product philosophy.",
      /*
       * One paragraph in the source, broken by a <br /> after
       * "Single Source of Trust". Kept as two lines so the break survives.
       * "MindGENIE" is bold and "AI Labs" is emphasised in the original.
       */
      cardText: [
        "This intelligence is powered by MindGENIE — Single Source of Trust",
        "Our unified agentic AI engine, and engineered through AI Labs, Mindlogicx’s AI-First Product Innovation function.",
      ],
    },

    /* 2. AIFMeaningSection.tsx */
    {
      id: "ai-first-imperative",
      source: "AIFMeaningSection",
      heading: "The AI-First Imperative",
      subtitle:
        "Our architectural philosophy redefines the relationship between software and intelligence.",
      items: [
        {
          title: "AI by default, manual by exception",
          description:
            "Shifting the burden of execution from human operators to intelligent systems for unprecedented efficiency.",
        },
        {
          title: "Outcome-driven workflows",
          description:
            "Focusing on the final goal while the AI dynamically charts the most efficient path in real-time.",
        },
        {
          title: "Agent-led automation",
          description:
            "Moving beyond rigid scripts toward autonomous agents that reason and adapt to changing conditions.",
        },
        {
          title: "Continuous learning systems",
          description:
            "Software that grows smarter with every interaction, evolving alongside your business needs.",
        },
        {
          title: "Human-in-the-loop intelligence",
          description:
            "Transparent collaboration where AI augments human potential while maintaining strict oversight.",
        },
        {
          title: "Architectural Integrity",
          description:
            "AI is the engine of the platform, not an add-on. We build for intelligence from the ground up.",
        },
      ],
      /* Dark pull-quote banner below the grid. */
      ctaBanner: {
        title:
          "We don’t add AI to products. We build products that cannot function without intelligence.",
        quote: "— The Mindlogicx Product Manifesto",
      },
    },

    /* 3. AIFIntelligeniSection.tsx (component AIFMindGenie) */
    {
      id: "mindgenie",
      source: "AIFIntelligeniSection",
      heading: "MindGENIE — The Single Source of Trust",
      paragraphs: [
        "MindGENIE is the Single Source of Trust across the Mindlogicx ecosystem. It acts as the central intelligence control plane, ensuring that every decision, recommendation, and automated action is consistent, explainable, and auditable.",
        "Operating as a multi-agent AI layer, it orchestrates intelligence across platforms, users, and workflows — while enforcing trust by design.",
      ],
      trustCard: {
        text: "Policy-aligned and governance-first architecture across every integration.",
      },
      featuresTitle: "What MindGENIE Does",
      features: [
        {
          title: "Agent Orchestration",
          description:
            "Orchestrates specialized AI agents across domains to solve complex, cross-functional challenges.",
        },
        {
          title: "Decision Intelligence",
          description:
            "Delivers sophisticated decision intelligence, going far beyond simple statistical predictions.",
        },
        {
          title: "Cross-Platform Memory",
          description:
            "Maintains a unified memory bank and continuous learning state across all connected platforms.",
        },
        {
          title: "Trust by Default",
          description:
            "Enforces strict policy, security, governance, and compliance requirements from the very core.",
        },
        {
          title: "Operational AI",
          description:
            "Powers both conversational interactions and mission-critical operations from a single trusted source.",
        },
      ],
    },

    /* 4. AIFAILabs.tsx */
    {
      id: "ai-labs",
      source: "AIFAILabs",
      heading: "AI Labs — Where AI Becomes Product Reality",
      intro:
        "AI Labs is Mindlogicx’s AI-First Product Innovation function. We bridge the gap between theoretical intelligence and operational impact.",
      callout: {
        title: "Not just research.",
        description:
          "AI Labs is not an experimental research unit. It is a production-grade engineering and governance capability responsible for building, validating, and scaling AI-native platforms.",
        /* "production-grade engineering and governance capability" is highlighted inline. */
        highlight: "production-grade engineering and governance capability",
      },
      capabilities: [
        {
          title: "Production Engineering",
          description:
            "Architecting scalable, enterprise-ready AI systems that move beyond prototypes to mission-critical reality.",
        },
        {
          title: "Governance & Validation",
          description:
            "Rigorous testing and ethical alignment to ensure every AI platform is auditable, safe, and trustworthy.",
        },
        {
          title: "Product Scaling",
          description:
            "Transforming agentic intelligence into user-centric platforms that scale with global demand.",
        },
      ],
    },

    /* 5. AIFAILabsMandate.tsx */
    {
      id: "ai-labs-mandate",
      source: "AIFAILabsMandate",
      heading: "AI Labs Mandate",
      subtitle:
        "AI Labs ensures that every AI capability is deployable, auditable, enterprise-ready, and trusted. Our mandate covers the entire lifecycle of AI product innovation.",
      items: [
        {
          title: "AI-Native Architectures",
          description:
            "Designing architectures where agentic loops are the core logic, not an optional extension.",
        },
        {
          title: "Reusable Accelerators",
          description:
            "Building a library of hardened AI agents and core frameworks to accelerate enterprise deployment.",
        },
        {
          title: "Ethical Governance",
          description:
            "Enforcing rigorous standards for AI ethics, security, trust, and machine explainability.",
        },
        {
          title: "Global Compliance",
          description:
            "Ensuring every platform meets region-specific regulations and strict data sovereignty requirements.",
        },
        {
          title: "Commercial Scalability",
          description:
            "Driving measurable business outcomes through high-performance, commercially viable AI models.",
        },
      ],
      /* Sixth tile in the same grid, rendered with a different treatment. */
      summaryCard: {
        title: "Enterprise-Ready by Default",
        description:
          "Every Mindlogicx AI output is engineered for deployment, auditability, and absolute trust.",
      },
    },

    /* 6. AIFArchitecturePrinciples.tsx */
    {
      id: "architecture-principles",
      source: "AIFArchitecturePrinciples",
      heading: "AI-First Architecture Principles",
      subtitle:
        "Every Mindlogicx platform follows strict AI-First engineering principles to ensure reliability and performance.",
      items: [
        {
          title: "AI-Native, Cloud-Agnostic",
          description:
            "Built for intelligence first, designed to run seamlessly across any cloud infrastructure without dependency.",
        },
        {
          title: "Agent-Based Modular Design",
          description:
            "Decoupled agentic units that can be independently deployed, scaled, and specialized for specific domains.",
        },
        {
          title: "Trust & Security by Default",
          description:
            "Zero-trust principles embedded at the data layer, ensuring absolute privacy and governance compliance.",
        },
        {
          title: "Explainable & Auditable",
          description:
            "Every decision path is logged and explainable, removing the 'black box' risk from enterprise AI.",
        },
        {
          title: "Globally Scalable",
          description:
            "Engineered to meet cross-regional regulatory demands and high-throughput enterprise scale.",
        },
      ],
      /* Sixth tile in the principles grid — promo card, no destination. */
      futureCard: {
        title: "Future-Proof Core",
        description:
          "Our principles ensure that as AI evolves, your platform stays at the cutting edge without technical debt.",
      },
      /* Dark three-up "no ..." banner below the grid. */
      darkBanner: [
        {
          title: "No vendor lock-in",
          description: "Total architectural freedom across any tech stack.",
        },
        {
          title: "No opaque models",
          description: "Transparency and auditability at every AI node.",
        },
        {
          title: "No brittle automation",
          description: "Dynamic agents that adapt, not rigid scripts.",
        },
      ],
    },

    /* 7. AIFAIInAction.tsx */
    {
      id: "ai-in-action",
      source: "AIFAIInAction",
      heading: "AI in Action — Proof Without Product Noise",
      subtitle:
        "Rather than listing features, we focus on intelligence outcomes enabled through a trusted AI core.",
      /* Each card: title + three outcomes + the same static link label. */
      linkLabel: "Case Study available",
      items: [
        {
          title: "Assessment & Education Platforms",
          outcomes: [
            "Autonomous orchestration",
            "Integrity intelligence",
            "Decision-ready analytics",
          ],
        },
        {
          title: "Learning & Skilling Platforms",
          outcomes: [
            "Adaptive journeys",
            "Skill-gap intelligence",
            "Employability insights",
          ],
        },
        {
          title: "Legal & Citizen Platforms",
          outcomes: [
            "AI-assisted triaging",
            "Explainable guidance",
            "Policy-aware intelligence",
          ],
        },
        {
          title: "Aggregation & Enterprise Platforms",
          outcomes: [
            "Demand-supply intelligence",
            "Workflow optimization",
            "Predictive orchestration",
          ],
        },
      ],
      ctaBanner: {
        title: "Across all platforms",
        text: "MindGENIE acts as the Single Source of Trust. Humans amplify decisions.",
      },
    },

    /* 8. AIFWhyAIFirst.tsx */
    {
      id: "why-ai-first",
      source: "AIFWhyAIFirst",
      heading: "Why AI-First Matters to Enterprises & Partners",
      subtitle:
        "An AI-First foundation — anchored by MindGENIE as the Single Source of Trust — delivers a new paradigm of business efficiency.",
      items: [
        {
          title: "Accelerated Implementation",
          description:
            "Faster implementation cycles through pre-architected agentic frameworks and reusable AI accelerators.",
        },
        {
          title: "Optimized OPEX",
          description:
            "Significantly lower long-term operating costs by shifting manual execution to autonomous intelligent loops.",
        },
        {
          title: "Zero-Friction Upgrades",
          description:
            "Continuous intelligence upgrades delivered at the core without requiring expensive platform re-engineering.",
        },
        {
          title: "Compliance-Ready AI",
          description:
            "Sovereign intelligence that respects cross-geography regulations and data residency requirements by design.",
        },
        {
          title: "Usage-Based Evolution",
          description:
            "Platforms that grow more valuable with usage, learning from every interaction to improve outcomes over time.",
        },
      ],
      /* Sixth, dashed tile in the same grid — no destination in the source. */
      partnerCard: {
        title: "Ready to scale?",
        description:
          "Join the ecosystem of partners building on our AI-First core.",
      },
      commitment: {
        label: "Our Commitment",
        heading: "We don’t sell AI features.",
        /* Straight double quotes in the source; reproduced as-is. */
        quote:
          "\"We engineer intelligent systems that scale with ambition — and trust.\"",
      },
    },

    /* 9. AIFPromise.tsx */
    {
      id: "ai-first-promise",
      source: "AIFPromise",
      heading: "The AI-First Promise",
      subtitle:
        "Our commitment to the future of enterprise intelligence is built on three unbreakable pillars.",
      items: [
        {
          label: "Smarter",
          text: "Every product will become smarter over time.",
          description:
            "Our platforms don't just process data; they evolve through continuous reinforcement and feedback loops.",
        },
        {
          label: "Autonomous",
          text: "Every workflow will become more autonomous.",
          description:
            "We are systematically removing the friction of manual operation, allowing systems to act with precision.",
        },
        {
          label: "Trusted",
          text: "Every decision will be more informed — and more trusted.",
          description:
            "By anchoring every node in our Single Source of Trust, we ensure that AI outputs are always auditable.",
        },
      ],
      footer: {
        /* Straight double quotes in the source; reproduced as-is. */
        quote: "\"This is not a future roadmap.\"",
        statement: "This is how Mindlogicx builds — today.",
      },
    },

    /* 10. AIFBrandEssence.tsx */
    {
      id: "brand-essence",
      source: "AIFBrandEssence",
      /*
       * No heading ships: the "MINDLOGICX" ghost wordmark and the "Mindlogicx"
       * title are both commented out in the source. The section renders as the
       * four descriptors plus the tagline.
       */
      descriptors: [
        { text: "AI-First", icon: "✦" },
        { text: "Agent-Driven", icon: "◈" },
        { text: "Trust-Anchored", icon: "🛡" },
        { text: "Outcome-Obsessed", icon: "🎯" },
      ],
      tagline: "The Future is Orchestrated",
    },
  ],
};

