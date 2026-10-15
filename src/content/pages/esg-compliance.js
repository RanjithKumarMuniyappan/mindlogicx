/*
 * Content extraction: ESG & Sustainability + Global Compliance & Trust
 * ---------------------------------------------------------------------------
 * Extracted: 2026-10-13
 *
 * SOURCE FILES (read-only, unmodified):
 *   /home/ranjith/Documents/ClaudeProjects/OfficeProjects/Mindlogicx_India/
 *     mlx-website-2025-frontend/src/app/esg_sustainability/page.tsx
 *   /home/ranjith/Documents/ClaudeProjects/OfficeProjects/Mindlogicx_India/
 *     mlx-website-2025-frontend/src/app/global_compliance/page.tsx
 *
 * All copy below is VERBATIM from the source. Nothing has been reworded,
 * summarised, expanded or re-punctuated. Note in particular:
 *   - The Governance description uses an en dash (–, U+2013), preserved as-is.
 *   - "world's" in globalCompliancePage uses a straight ASCII apostrophe (')
 *     in the source, not a curly one. Preserved as-is. These were the only
 *     non-ASCII / quote-sensitive characters in either file.
 *
 * ---------------------------------------------------------------------------
 * REMOTE STOCK IMAGES DROPPED (set to null; new site uses no stock photography)
 * ---------------------------------------------------------------------------
 * Each ESG pillar in the source carried TWO image fields: a legacy `image`
 * pointing at images.unsplash.com, and a `new_img` pointing at a real local
 * asset. Only `new_img` was actually rendered by the source component
 * (<img src={pillar.new_img} />); the unsplash `image` field was dead data.
 * The three dropped URLs were:
 *   1. Environmental -> https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200
 *   2. Social        -> https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200
 *   3. Governance    -> https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200
 * They are represented here as `stockImage: null`.
 * No remote images existed on the Global Compliance page.
 *
 * All 8 local asset paths recorded below were verified to exist under the
 * source project's /public directory.
 *
 * ---------------------------------------------------------------------------
 * FOR THE CLIENT TO CHECK
 * ---------------------------------------------------------------------------
 * 1. BROKEN SENTENCE (ESG, Ecosystem Impact): the source JSX reads
 *      "...spanning EdTech{/* , HealthTech, FinTech, LegalTech *\/}, and CommerceTech."
 *    i.e. "HealthTech, FinTech, LegalTech" is commented out, so the sentence
 *    renders live as "...spanning EdTech, and CommerceTech." — grammatically
 *    broken. Kept verbatim as rendered; the suppressed verticals are recorded
 *    in `_commentedOut.ecosystemVerticals`. Client must decide whether to
 *    restore the verticals or fix the comma.
 * 2. The page banner title for the second page is "Global Compliance & Trust",
 *    not "Global Compliance" — the brief shortened it. Verbatim title kept.
 * 3. Both pages have their original <h1> hero headings commented out in the
 *    source, because PageBanner now supplies the page title. The dead headings
 *    are preserved under `_commentedOut` for reference — do NOT render them
 *    without client sign-off.
 * 4. ESG "View Reports" CTA button is commented out in the source and has no
 *    destination (its onClick only scrolls to top). Recorded under
 *    `_commentedOut.ctaButton`. Client must supply a real reports URL before
 *    this button can be reinstated.
 * 5. The ESG pillar "Pillar 01 / 02 / 03" eyebrow badge is also commented out
 *    in the source. Recorded under `_commentedOut.pillarBadgePattern`.
 * 6. The Global Compliance page has NO closing call to action — it ends on the
 *    quote section. Flagging in case one is expected.
 * ---------------------------------------------------------------------------
 */

export const esgPage = {
  title: 'ESG & Sustainability',
  bannerImage: '/assets/images/pages/ESG_Sustainablity_Hero_banner.webp',

  sections: [
    {
      id: 'hero',
      type: 'hero',
      tagline: 'Responsible by Design. Sustainable by Architecture.',
      desc: 'At Mindlogicx, ESG is integral to how we think, build, and operate. As a Knowledge Engineering company, we design responsible digital ecosystems that deliver long-term value.',
    },

    {
      id: 'pillars',
      type: 'pillars',
      pillars: [
        {
          title: 'Environmental',
          tagline: 'Resource Efficiency',
          desc: 'Digital-first, resource-efficient platforms enabling paperless delivery, cloud scalability, and reduced physical resource consumption.',
          points: [
            'Paperless Operations',
            'Cloud Scalability',
            'Low Resource Footprint',
          ],
          image: '/assets/images/pages/esg/environmental.webp',
          stockImage: null,
        },
        {
          title: 'Social',
          tagline: 'Inclusive Capability',
          desc: 'Inclusive, outcome-oriented capability building through employability-focused learning, faculty enablement, and career readiness.',
          points: [
            'Employability Focused',
            'Faculty Enablement',
            'Skill Gap Reduction',
          ],
          image: '/assets/images/pages/esg/social.webp',
          stockImage: null,
        },
        {
          title: 'Governance',
          tagline: 'Ethical Integrity',
          desc: 'Ethical use of AI, data privacy, and transparent partnerships – engineered to be auditable, accountable, and regulation-ready.',
          points: [
            'Ethical AI Design',
            'Data Sovereignty',
            'Transparent Audits',
          ],
          image: '/assets/images/pages/esg/governance.webp',
          stockImage: null,
        },
      ],
    },

    {
      id: 'ecosystem-impact',
      type: 'impact',
      title: 'Ecosystem Impact',
      desc: 'ESG principles are embedded across the Mindlogicx ecosystem spanning EdTech, and CommerceTech.',
      tags: ['Innovative', 'Responsible', 'Sustainable', 'Auditable'],
      callout: {
        title: 'Governed for Growth',
        desc: 'Balancing rapid innovation with long-term accountability.',
      },
    },
  ],

  // Present in the source but commented out — see header note. Not live copy.
  _commentedOut: {
    heroHeading: 'ESG & Sustainability at Mindlogicx',
    pillarBadgePattern: 'Pillar 01 / Pillar 02 / Pillar 03',
    ctaButton: 'View Reports',
    ecosystemVerticals: ['HealthTech', 'FinTech', 'LegalTech'],
  },
};

export const globalCompliancePage = {
  title: 'Global Compliance & Trust',
  bannerImage: '/assets/images/pages/GlobalCompliance_Trust.webp',

  sections: [
    {
      id: 'hero',
      type: 'hero',
      desc: 'Mindlogicx builds AI-first platforms with security, privacy, and compliance embedded by design.',
    },

    {
      id: 'trust-pillars',
      type: 'pillars',
      pillars: [
        {
          id: 'pillar-1',
          title: 'Data Protection',
          desc: 'Our solutions align with global regulations including GDPR, DPDP, PDPA, and FERPA.',
          features: ['Global Alignment', 'Privacy by Design', 'Secure SDLC'],
          image: '/assets/images/pages/DataProtection.webp',
        },
        {
          id: 'pillar-2',
          title: 'Ethical AI Governance',
          desc: 'MindGENIE ensures transparency, auditability, and human-in-the-loop oversight.',
          features: ['Transparent Logic', 'Full Audit Trails', 'Human Verification'],
          image: '/assets/images/pages/EthicalAIGovernance.webp',
        },
        {
          id: 'pillar-3',
          title: 'Infrastructure Security',
          desc: 'ISMS-aligned security controls and cloud-agnostic infrastructure governance.',
          features: ['ISMS-Aligned', 'Cloud-Agnostic', 'Access Controls'],
          image: '/assets/images/pages/InfrastructureSecurity.webp',
        },
      ],
    },

    {
      id: 'regulations-bento',
      type: 'bento',
      cards: [
        {
          id: 'bento-1',
          size: 'large',
          title: 'Global Data Protection',
          desc: "Full alignment with the world's most stringent data privacy regulations. Our architecture is designed to handle sensitive data across borders seamlessly.",
          tags: ['GDPR', 'DPDP', 'PDPA', 'FERPA'],
        },
        {
          id: 'bento-2',
          size: 'small',
          title: 'IP Protection',
          desc: 'Strong safeguard of customer and platform integrity.',
        },
        {
          id: 'bento-3',
          size: 'small',
          title: 'OEM Partners',
          desc: 'Partner governance ensures end-to-end security.',
        },
      ],
    },

    {
      id: 'security-quote',
      type: 'quote',
      quote: 'Engineered to be auditable, accountable, and regulation-ready',
    },
  ],

  // Present in the source but commented out — see header note. Not live copy.
  _commentedOut: {
    heroHeading: 'Global Compliance & Trust',
  },
};
