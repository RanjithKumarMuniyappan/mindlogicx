/*
 * ============================================================================
 * CONTENT — HealthTech Solutions
 * ============================================================================
 *
 * Extracted 2026-10-15 from the client's own deck:
 *   /home/ranjith/Downloads/HealthTech Solutions/HealthTechSolutions.html
 *
 * This **replaces** the previous `/health-tech` content entirely. The page
 * that was here was ported from the 2025 frontend and was a stub: four
 * MasterHealthPro / ForHim.ForHer product cards and a CTA. None of that copy
 * survives. `health-tech.js` still holds it, unrendered, if any of it is
 * wanted back.
 *
 * All copy below is VERBATIM. British spellings ("Specialised",
 * "Personalised", "Centre", "organisations"), the curly apostrophes in
 * "Men's"/"Women's", and the en dash in "Anti-Ageing & Preventive Wellness"
 * are the deck's own.
 *
 * ----------------------------------------------------------------------------
 * WHAT WAS DELIBERATELY NOT TAKEN
 * ----------------------------------------------------------------------------
 * The deck's last two headed blocks are **author guidance, not page copy**,
 * and are not rendered:
 *
 *   - "Recommended webpage presentation" — layout advice (hero, three cards,
 *     six icon cards, five-step journey). It was followed where it agreed
 *     with this site's existing pattern; it is not printed on the page.
 *   - "SEO recommendations" — a table of title/description/keywords. The
 *     title and description are carried into `seo` below as metadata. The
 *     keyword lists are not page content and are recorded for reference only.
 *
 * This mirrors the Knowledge Engineering deck, whose "Visual Design
 * Direction" blocks were likewise instructions to the builder rather than
 * words for the page.
 *
 * ----------------------------------------------------------------------------
 * ⚠️ THE HEDGING IS LOAD-BEARING — DO NOT TIGHTEN IT
 * ----------------------------------------------------------------------------
 * The deck closes with an explicit instruction from its author:
 *
 *   "AI capabilities, regulatory certifications, prescription automation and
 *    platform availability should not be advertised as established facts
 *    until validated."
 *
 * and asks that the page position Mindlogicx "as a HealthTech SaaS innovator,
 * not as a hospital, clinic or direct medical-treatment provider."
 *
 * The copy is written to match: "is developing", "aims to", "is being
 * designed", "envisioned", "proposed", "intended to", "subject to medical
 * validation and professional judgement", and plainly "Our healthcare SaaS
 * platform is currently under development."
 *
 * **Every one of those qualifiers is doing legal work on a page about
 * medical care.** Copy-editing them into the present tense would turn a
 * description of an unbuilt platform into a claim about a live medical
 * service. They are preserved exactly.
 *
 * ----------------------------------------------------------------------------
 * ⚠️ FLAGGED FOR THE CLIENT
 * ----------------------------------------------------------------------------
 * 1. **The images may not be Mindlogicx's to use.** Their alt text in the
 *    deck names other companies' products — "Helios Med | AI Health
 *    Assistant" and "Tjänster – VIV-IQ" (Swedish) — which suggests they were
 *    taken from third-party marketing sites. The pictures themselves are
 *    generic clinical stock and nothing in them is Mindlogicx-specific.
 *    **Licensing needs confirming before this is public.** Original alt text
 *    is recorded per image below; none of it is used on the page, because
 *    none of it describes the picture.
 * 2. **"Partner With Us" appears as a hero CTA.** That call to action was
 *    removed site-wide on 2026-10-12 at the client's request. It is recorded
 *    here but not rendered; see the page component.
 * 3. The deck's suggested URL is **`/healthcare-solutions/`**, but the
 *    Technology → Healthcare menu points at `/health-tech`. The existing
 *    route is kept so the menu keeps working. Changing it means changing the
 *    navigation too.
 * 4. The deck's page title is **83 characters** — longer than most search
 *    results will show.
 * ============================================================================
 */

export const healthTechSolutionsPage = {
  /* Changed from "HealthTech Solutions" 2026-10-17 at the client's request.
     This is the page `h1` only — `seo.title` below still carries the deck's
     "HealthTech Solutions & Healthcare SaaS Platform | Mindlogicx", and the
     Technology menu reaches this page under the label "Healthcare". */
  title: 'Healthcare Solutions',
  route: '/health-tech',

  seo: {
    /* From the deck's "SEO recommendations" table — metadata, not page copy. */
    title: 'HealthTech Solutions & Healthcare SaaS Platform | Mindlogicx',
    description:
      "Explore Mindlogicx's healthcare SaaS initiative for men's health, women's wellness and anti-ageing, including teleconsultations, EMR and clinical support.",
    primaryKeyword: 'Healthcare SaaS Platform',
    secondaryKeywords: [
      'Digital Healthcare Solutions',
      'Telehealth Platform',
      'Electronic Medical Records',
      "Men's Health Technology",
      "Women's Wellness Platform",
      'Clinical Decision Support',
    ],
    suggestedUrl: '/healthcare-solutions/',
    suggestedUrlNote:
      'Not adopted — the Technology menu points at /health-tech. See flag 3 in the header.',
  },

  /*
   * Image paths are this project's, after conversion. `sourceAlt` is what the
   * deck carried and is NOT used — see flag 1.
   */
  images: {
    hero: {
      src: '/assets/images/pages/health-tech/clinician-dashboard.webp',
      sourceFile: 'image2.jpg',
      sourceAlt: 'Helios Med | AI Health Assistant',
      shows: 'A clinician at a laptop showing a clinical dashboard.',
    },
    capabilities: {
      src: '/assets/images/pages/health-tech/emr-records.webp',
      sourceFile: 'image1.jpg',
      sourceAlt: 'Electronic Medical Record Systems List For Faster Workflow',
      shows: 'Electronic medical records on screen.',
    },
    journey: {
      src: '/assets/images/pages/health-tech/consultation.webp',
      sourceFile: 'image4.jpg',
      sourceAlt: 'Tjänster – VIV-IQ',
      shows: 'A consultation in progress.',
    },
    professionals: {
      src: '/assets/images/pages/health-tech/care-team.webp',
      sourceFile: 'image3.jpg',
      sourceAlt:
        'doctor hospital team medical document health medicine healthcare meeting teamwork tablet computer technology clinic office hallway',
      shows: 'A medical team reviewing documents together.',
    },
  },

  hero: {
    heading: 'Transforming Healthcare Through Intelligent Digital Platforms',
    strapline:
      'Connected Care. Smarter Clinical Workflows. Better Patient Experiences.',
    body: [
      'Mindlogicx is developing a next-generation, Software-as-a-Service (SaaS) healthcare platform designed to connect patients, medical professionals and healthcare service providers through a unified digital ecosystem.',
      "Focused on Men's Health, Women's Wellness and Anti-Ageing Care, the platform aims to simplify patient engagement, enable online consultations, support clinical decision-making and facilitate continuous care through integrated digital workflows.",
    ],
    /* The deck writes: "CTA: Explore Our Healthcare Vision | Partner With Us" */
    ctas: [
      { label: 'Explore Our Healthcare Vision', target: '#healthcare-vision' },
      {
        label: 'Partner With Us',
        rendered: false,
        note: 'Removed site-wide 2026-10-12 at the client\'s request. See flag 2.',
      },
    ],
  },

  sections: [
    {
      id: 'healthcare-vision',
      number: '1.',
      heading: 'Our Healthcare Technology Vision',
      subheading:
        'Making Specialised Healthcare More Accessible, Connected and Personalised',
      body: [
        'Healthcare is evolving beyond traditional, appointment-based interactions towards continuous, personalised and technology-enabled care.',
        'Mindlogicx aims to support this transformation by developing a scalable digital healthcare ecosystem that brings together patient information, clinical consultations, treatment planning and follow-up management.',
        'The platform is being designed to help healthcare professionals manage patient journeys efficiently while improving access to specialised healthcare services.',
        'Our objective is to bridge technology and healthcare expertise through connected workflows, structured medical information and intelligent clinical support tools.',
      ],
    },

    {
      id: 'specialised-domains',
      number: '2.',
      heading: 'Specialised Healthcare Domains',
      subheading: 'Purpose-Built Digital Solutions for Personalised Wellness',
      body: [
        'The proposed platform focuses on three key healthcare segments, supporting personalised care and long-term wellness management.',
      ],
      items: [
        {
          title: "Men's Health",
          strapline:
            "Supporting Confidential, Accessible and Continuous Men's Healthcare",
          description:
            "Digital healthcare services designed to support men's reproductive, sexual and general wellness needs through structured patient profiling, specialist consultations, treatment follow-ups and personalised medical guidance.",
        },
        {
          title: "Women's Wellness",
          strapline: "Enabling Personalised Care Across Women's Health Journeys",
          description:
            "Technology-enabled healthcare workflows designed to support women's reproductive health, hormonal wellness, preventive care and ongoing health management through coordinated consultations and follow-up services.",
        },
        {
          title: 'Anti-Ageing & Preventive Wellness',
          strapline: 'Supporting Proactive Healthcare and Healthy Ageing',
          description:
            'A digital approach to preventive wellness, age-related health assessment and long-term health management, enabling medical professionals to deliver personalised guidance and monitor patient progress.',
        },
      ],
    },

    {
      id: 'integrated-capabilities',
      number: '3.',
      heading: 'Integrated Digital Healthcare Capabilities',
      subheading: 'One Platform. Connected Healthcare Experiences.',
      body: [
        'Mindlogicx is building an integrated suite of healthcare technology capabilities to simplify clinical operations and support continuity of patient care.',
      ],
      items: [
        {
          title: 'Digital Patient Profiling',
          description:
            'Structured collection and management of patient demographics, medical history, lifestyle information, health concerns and relevant clinical details to support informed consultations.',
        },
        {
          title: 'Online Consultations',
          description:
            'Digital consultation workflows designed to connect patients with qualified healthcare professionals, enabling remote clinical interactions and convenient access to specialist advice.',
        },
        {
          title: 'Follow-Up Calendar & Care Management',
          description:
            'Integrated appointment scheduling, follow-up tracking and reminder workflows to help healthcare professionals and patients maintain continuity throughout the care journey.',
        },
        {
          title: 'Electronic Medical Records (EMR)',
          description:
            'Centralised digital patient records designed to organise consultation history, clinical observations, medical documentation and treatment information for authorised healthcare professionals.',
        },
        {
          title: 'Prescription & Clinical Decision Support',
          description:
            'Rule-based prescription support and clinical advisory workflows designed to assist doctors with structured treatment recommendations, subject to medical validation and professional judgement.',
        },
        {
          title: 'Doctor Advisory Services',
          description:
            'A professional support interface envisioned to provide clinicians with relevant clinical information, structured patient insights and advisory resources to support medical decision-making.',
        },
      ],
    },

    {
      id: 'care-journey',
      number: '4.',
      heading: 'How the Platform Connects the Care Journey',
      subheading: 'From Patient Registration to Continuous Care',
      body: [
        'The proposed healthcare platform brings key stages of the patient journey into a connected digital workflow.',
      ],
      /*
       * The deck labels these "Step 1" … "Step 5". The labels are dropped on
       * the page: this site removed index numbering site-wide on 2026-10-12,
       * and the stages are already read in order. The `step` field keeps the
       * deck's own numbering for audit.
       */
      steps: [
        {
          step: 'Step 1',
          title: 'Patient Registration & Profiling',
          description:
            'Patients create their digital health profiles and provide relevant medical and wellness information.',
        },
        {
          step: 'Step 2',
          title: 'Consultation & Clinical Assessment',
          description:
            'Healthcare professionals review patient information, conduct consultations and document clinical findings.',
        },
        {
          step: 'Step 3',
          title: 'Treatment Planning & Prescription Support',
          description:
            'Doctors develop appropriate treatment plans, supported by structured clinical information and prescription advisory tools.',
        },
        {
          step: 'Step 4',
          title: 'Follow-Up & Progress Monitoring',
          description:
            'Patients and healthcare professionals manage scheduled follow-ups, review treatment progress and maintain continuity of care.',
        },
        {
          step: 'Step 5',
          title: 'Long-Term Wellness Management',
          description:
            'Consolidated patient records and historical health information support ongoing medical review and personalised wellness planning.',
        },
      ],
    },

    {
      id: 'for-professionals',
      number: '5.',
      heading: 'Technology Designed for Healthcare Professionals',
      subheading: 'Empowering Doctors with Connected Digital Tools',
      body: [
        'The platform is envisioned to support individual practitioners, specialist clinics and healthcare organisations through integrated digital capabilities.',
        'By connecting patient records, consultation workflows, follow-up management and clinical advisory services, Mindlogicx aims to reduce administrative complexity and improve access to relevant patient information.',
        'The technology is being designed around four core principles:',
      ],
      principles: [
        {
          title: 'Patient-Centric Experience',
          description:
            'Simple and accessible digital interactions supporting personalised patient journeys.',
        },
        {
          title: 'Clinical Oversight',
          description:
            'Technology-assisted recommendations that retain professional medical judgement and decision-making authority.',
        },
        {
          title: 'Secure Information Management',
          description:
            'Privacy-conscious design, appropriate access controls and responsible handling of sensitive health information.',
        },
        {
          title: 'Scalable SaaS Architecture',
          description:
            'Flexible, cloud-based technology intended to support future expansion across healthcare domains, providers and service models.',
        },
      ],
    },

    {
      id: 'future-of-care',
      number: '6.',
      heading: 'Building the Future of Connected Healthcare',
      subheading: 'Technology Innovation with Human Care at Its Centre',
      body: [
        'At Mindlogicx, our healthcare technology initiative reflects our commitment to developing intelligent, scalable and user-centric digital platforms.',
        'By combining SaaS technology, structured patient information and clinician-support workflows, we aim to create a connected healthcare environment that strengthens medical practice efficiency, improves patient engagement and supports continuity of care.',
        'Our long-term vision is to enable healthcare professionals and service providers to deliver more accessible, coordinated and personalised healthcare experiences.',
      ],
    },

    {
      id: 'collaborate',
      number: '7.',
      heading: 'Collaborate With Mindlogicx',
      subheading: 'Partner With Us in Digital Healthcare Innovation',
      body: [
        'We welcome opportunities to engage with healthcare institutions, specialist practitioners, clinical advisors and technology partners interested in collaborating on emerging digital healthcare solutions.',
        'Our healthcare SaaS platform is currently under development.',
        'Connect with Mindlogicx to explore technology partnerships, clinical collaborations and future platform opportunities.',
      ],
      ctas: [
        { label: 'Connect With Our HealthTech Team', link: '/contact-us' },
        { label: 'Explore Mindlogicx Solutions', link: '/knowledge-engineering' },
      ],
      ctaNote:
        'The deck gives labels only, no destinations. "Connect With Our HealthTech Team" goes to this site\'s contact page; "Explore Mindlogicx Solutions" to Knowledge Engineering, which is the closest thing to a solutions overview here. Both are this project\'s choices, not the deck\'s.',
    },
  ],

  /* Author guidance from the deck. Recorded, never rendered — see the header. */
  authorGuidance: {
    rendered: false,
    presentation: [
      'For the corporate website, I recommend using a clean, professional layout with seven sections and selective visuals rather than lengthy text blocks.',
      'Hero section — Main headline, short introduction, healthcare-themed visual and two CTAs.',
      'Three healthcare domains — Three equal-width cards for Men’s Health, Women’s Wellness and Anti-Ageing.',
      'Platform capabilities — Six icon-based cards with brief descriptions, followed by the five-step patient journey.',
      'Technology vision and partnerships — Clinical oversight, security-oriented design, SaaS scalability and final contact CTA.',
    ],
    positioning:
      "Important positioning recommendation: Keep the emphasis approximately 70% on Mindlogicx's technology, platform capabilities and clinical workflows, and 30% on the three healthcare domains. This will position Mindlogicx as a HealthTech SaaS innovator, not as a hospital, clinic or direct medical-treatment provider. AI capabilities, regulatory certifications, prescription automation and platform availability should not be advertised as established facts until validated.",
  },
};

export default healthTechSolutionsPage;
