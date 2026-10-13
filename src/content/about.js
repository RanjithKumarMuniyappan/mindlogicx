/**
 * About page content, transcribed verbatim from the previous Mindlogicx site
 * (http://localhost:3000/about/). Section order matches that page:
 *   intro → ethics & values → leadership → advisory board → what we stand for
 *   → philosophy → why choose us → diversity, equity & inclusion → CTA
 *
 * Copy is reproduced exactly, including the original curly quotes and em
 * dashes. Sections commented out on the old page (What We Do, FunFacts,
 * Feedback, Partner) are intentionally absent, matching what actually shipped.
 */

export const banner = {
  title: 'About Us',
  bgImg: '/assets/images/mlx/about/banner.webp',
};

export const intro = {
  mainImg: '/assets/images/mlx/about/building.webp',
  /**
   * ⚠️ **No longer rendered** (2026-10-12). This was the eyebrow above the
   * page's `<h1>`; the hero was reduced to the title alone on an accent band
   * by request. Kept because it is the section's own label and a future
   * layout may want it back.
   */
  subTitle: 'ABOUT MINDLOGICX',
  lead: 'Mindlogicx is a global technology company in the “Knowledge Engineering” domain. The technology products and solutions offered by Mindlogicx maximize clients’ potential by delivering sustainable value and diligently meeting their requirements.',
  whoWeAreTitle: 'Who We Are?',
  whoWeAreLead:
    'We are a global knowledge engineering company with focus on Edtech, Healthtech, Fintech, LegalTech and MediaTech. Our products and solutions are developed and deployed with the three guiding principles:',
  /*
   * The three pills beside "Who We Are". `icon` keys into `ContentIcon`.
   * Added 2026-10-12 with the redesign — the labels themselves are unchanged.
   */
  principles: [
    { label: 'Highly scalable', icon: 'Scalable' },
    { label: 'For Global customers', icon: 'Globe' },
    { label: 'With least human intervention', icon: 'People' },
  ],

  /** The section's backdrop, supplied by the client with the comp. */
  bgImage: '/assets/images/aboutus/aboutus_intro_bg.png',

  /*
   * The three cards along the bottom of the comp.
   *
   * ⚠️ **This copy is condensed, and the long form is still below.** Each
   * card is the client's own shortened wording, transcribed from the supplied
   * image; `paragraphs` and `knowledgeEngineering` hold the full originals
   * they were cut down from, and are no longer rendered on the page.
   *
   * Card 1 condenses `paragraphs[0]`, card 2 `paragraphs[1]`, card 3
   * `knowledgeEngineering`. If the full text is wanted back, those three are
   * the source — do not re-expand these by hand.
   *
   * `<strong>` marks the runs the comp sets in bold.
   */
  cards: [
    {
      id: 'trusted',
      icon: 'People',
      body: '<strong>Trusted by millions</strong> of users across the world, we maximize clients’ potential by delivering sustainable value and diligently meeting their requirements.',
    },
    {
      id: 'value-innovation',
      icon: 'Innovation',
      body: 'We blend innovative technology with human aspirations, creating <strong>value innovation</strong> through a fusion of technology and market innovation.',
    },
    {
      id: 'knowledge-engineering',
      icon: 'Cog',
      body: '<strong>Knowledge Engineering</strong> transforms complex domain expertise into structured, machine-interpretable knowledge systems, enabling <strong>intelligent decision-making</strong>.',
    },
  ],
  /*
   * ⚠️ **No longer rendered** (2026-10-12). The redesigned section replaced
   * these two paragraphs with `cards[0]` and `cards[1]`, which are the
   * client's own condensed versions of them. Kept as the unabridged source.
   */
  paragraphs: [
    'Over the years, we have become a trusted name in the technology domain powering the aspirations of millions of users across the world. The technology products and solutions offered by Mindlogicx maximize clients’ potential by delivering sustainable value and diligently meeting their requirements.',
    'We are a disruptive technology company known for blending innovative technology with human aspirations, what is known as Value Innovation for the global community. We have created a wonderful fusion of technology innovation coupled with market innovation with wonderful user experience, leading to value innovation to the customers',
  ],
  /**
   * ⚠️ **No longer rendered** (2026-10-12) — condensed into `cards[2]`.
   * Kept as the unabridged source; the <strong> runs are from the original.
   */
  knowledgeEngineering:
    '<strong>Knowledge Engineering</strong> is the art and science of transforming complex domain expertise into structured, machine-interpretable knowledge systems. We enable organizations to build products that not only process data, but <strong>understand context, reason logically, and support intelligent decision-making.</strong>',
};

export const ethics = {
  subTitle: 'HOW WE OPERATE',
  title: 'Ethics &amp; Values',
  items: [
    {
      title: 'Integrity and Transparency',
      points: [
        'Be honest and clear in all business practices, especially in data usage, pricing, and product capabilities.',
        'Disclose conflicts of interest and limitations clearly to stakeholders.',
      ],
    },
    {
      title: 'User-Centric Design and Privacy',
      points: [
        'Prioritize the safety, privacy, and autonomy of users.',
        'Design with accessibility, inclusivity, and empathy in mind.',
      ],
    },
    {
      title: 'Responsible Innovation',
      points: [
        'Innovate with a focus on long-term societal impact.',
        'Avoid developing or deploying technologies that can harm public interest, exacerbate bias, or exploit vulnerabilities.',
      ],
    },
    {
      title: 'Data Ethics and Security',
      points: [
        'Collect only the data that is necessary.',
        'Implement robust data protection and cybersecurity practices.',
        'Respect consent and user ownership of data.',
      ],
    },
    {
      title: 'Diversity, Equity & Inclusion',
      points: [
        'Build inclusive teams and platforms that reflect and support diverse communities.',
        'Ensure hiring, leadership, and decision-making processes are equitable.',
      ],
    },
    {
      title: 'Environmental Responsibility',
      points: [
        'Optimize resource use and reduce environmental footprint across operations and product lifecycles.',
        'Support green computing and sustainable supply chains.',
      ],
    },
    {
      title: 'Accountability',
      points: [
        'Take responsibility for unintended consequences of technology.',
        'Establish internal governance and auditing mechanisms to monitor ethical compliance.',
      ],
    },
    {
      title: 'Fair Competition and Anti-Corruption',
      points: [
        'Compete fairly and avoid monopolistic or manipulative practices.',
        'Reject bribery, favoritism, and unethical lobbying.',
      ],
    },
    {
      title: 'Community Engagement',
      points: [
        'Contribute positively to communities through open-source contributions, digital literacy programs, or social impact projects.',
      ],
    },
    {
      title: 'Lifelong Learning and Adaptability',
      points: [
        'Promote continuous learning and ethical reflection across the company.',
        'Stay current with evolving ethical standards, especially in AI, data science, and automation.',
      ],
    },
  ],
};

export const leadership = {
  subTitle: 'OUR LEADERSHIP',
  title: 'Leadership',
  /** Shown alongside the founder, as on the original page. */
  founderBio:
    'Founded by Suresh Elangovan—an engineer by qualification, a software architect by profession, and a perfectionist by practice—Mindlogicx is built on an uncompromising commitment to excellence. He is a seasoned technologist with decades of industry experience in product design, development and global technology delivery. He is credited with many innovative technology products and solutions that have pioneered the market segment. Elangovan’s vision is amplified by a veteran leadership team whose combined decades of domain expertise span product engineering, scalable cloud architectures, and innovation management. Together, they have repeatedly transformed bold ideas into category-defining technologies, establishing a culture where precision, creativity, and user-centric design drive every milestone.',
  founder: {
    name: 'Suresh Elangovan',
    designation: 'Founder, Chairman & CEO',
    img: '/assets/images/mlx/leaders/suresh-elangovan.webp',
    linkedin: 'https://in.linkedin.com/in/suresh-elangovan',
  },
  /*
   * The roster, **in tiers** (updated 2026-10-12 from a supplied screenshot
   * of the intended page).
   *
   * This used to be one flat `members` array rendered four-up. The tiers are
   * what produce the row breaks in the reference — directors 3+2, then the
   * VPs and the assistant VPs on a row each — and a flat eleven-up grid
   * cannot reproduce that: it would wrap 3/3/3/2 and split the directors
   * across the VPs. The 2025 frontend groups them the same way
   * (`content/leadership.ts`), so this is the shape the content actually has.
   *
   * Tiers are **not labelled on the page**. The grouping is conveyed by the
   * row breaks alone, exactly as in the reference — adding "Directors" and
   * "Vice Presidents" headings would be a different design.
   *
   * Order within each tier is from the screenshot and must be preserved.
   */
  tiers: [
    {
      id: 'directors',
      members: [
        {
          // Added 2026-10-12. Portrait converted from the 2025 frontend's
          // `photography/DatukArif.jpg` (1080² JPEG) to this build's 300×380
          // portrait crop, so the roster cards stay uniform.
          //
          // NOTE: that project lists the designation as "Managing Director".
          // The supplied screenshot says "Director – ASEAN Region", which is
          // what is used here — the screenshot is the newer source.
          name: 'Datuk Ariff Farhan Doss',
          designation: 'Director – ASEAN Region',
          img: '/assets/images/mlx/leaders/datuk-ariff-farhan-doss.webp',
        },
        {
          name: 'Kunal Mondal',
          designation: 'Executive Director & COO',
          img: '/assets/images/mlx/leaders/kunal-mondal.webp',
        },
        {
          name: 'Srijith P S',
          designation: 'Director – Institutional Sales',
          img: '/assets/images/mlx/leaders/srijith-ps.webp',
        },
        {
          name: 'Pradeep Kumar Kabade',
          designation: 'Director & CTO',
          img: '/assets/images/mlx/leaders/pradeep-kumar-kabade.webp',
        },
        {
          // Relabelled by the client on 2026-10-12, from
          // "Director & COO (MasterHealthPro)".
          name: 'Sharmila Sathi Rao',
          designation: 'Director & COO (MHP with Healthcare)',
          img: '/assets/images/mlx/leaders/sharmila-sathi-rao.webp',
        },
      ],
    },
    {
      /*
       * Added 2026-10-12, as a row of their own directly below the directors
       * — which is where the client asked for them.
       *
       * ⚠️ **They are grouped by position on the page, not by rank.** Vinod M
       * is a VP and Rakesh Katagihallimath a Head, so on seniority they would
       * sit in `vice-presidents` below (which would make that tier five and
       * re-wrap it 3+2). Moving them there is a two-line change if the
       * grouping matters more than the placement.
       *
       * Portraits were supplied as 308² images and converted to this build's
       * 300×380 crop, biased upward 6% to match the headroom of the rest.
       */
      id: 'global-delivery-and-growth',
      members: [
        {
          name: 'Vinod M',
          designation: 'VP - Global delivery and cyber security',
          img: '/assets/images/mlx/leaders/vinod-m.webp',
        },
        {
          name: 'Rakesh Katagihallimath',
          designation: 'Head – Marketing & Sales',
          img: '/assets/images/mlx/leaders/rakesh-katagihallimath.webp',
        },
      ],
    },
    {
      id: 'vice-presidents',
      members: [
        {
          name: 'Prasad GVAS',
          designation: 'VP- Group Finance & Compliance',
          img: '/assets/images/mlx/leaders/prasad-gvas.webp',
        },
        {
          name: 'Srilatha',
          designation: 'VP global sales',
          img: '/assets/images/mlx/leaders/srilatha.webp',
        },
        {
          name: 'Vinod Kumar',
          designation: 'VP & Head – MediaX',
          img: '/assets/images/mlx/leaders/vinod-kumar.webp',
        },
      ],
    },
    {
      id: 'assistant-vice-presidents',
      members: [
        {
          name: 'Bose C',
          designation: 'Asst VP – Product Engineering',
          img: '/assets/images/mlx/leaders/bose-c.webp',
        },
        {
          name: 'Sanjay Kumar',
          designation: 'Asst VP- IT infrastructure',
          img: '/assets/images/mlx/leaders/sanjay-kumar.webp',
        },
        {
          name: 'Himanshu Shekhar B',
          designation: 'Asst VP & Head – Global Tech Support',
          img: '/assets/images/mlx/leaders/himanshu-shekhar-b.webp',
        },
      ],
    },
  ],
};

export const advisoryBoard = {
  subTitle: 'ADVISORY BOARD',
  title: 'Advisory Board',
  description: 'Guided by distinguished leaders with decades of public service experience.',
  members: [
    {
      name: 'B.P. Acharya',
      role: 'Retd. IAS',
      img: '/assets/images/mlx/advisors/bp-acharya.webp',
      bio: 'Retd. IAS Former Special Chief Secretary, Telangana & DG, MCR HRD Institute. Architect of Genome Valley and 20+ industrial clusters generating 4M+ jobs. Advisor, academic mentor, and thought leader in policy, governance & industry.',
    },
    {
      name: 'Shri Shankar Bidari',
      role: 'Retd. IPS',
      img: '/assets/images/mlx/advisors/shankar-bidari.webp',
      bio: 'Retd. IPS Former Director General of Police, Karnataka State. Led the STF against Veerappan and introduced key policing reforms in Karnataka. One of India’s most decorated police officers, honoured with multiple Gallantry and Distinguished Service medals.',
    },
    {
      name: 'Shri Srikant Walgad',
      role: 'Retd. IAS',
      img: '/assets/images/mlx/advisors/srikant-walgad.webp',
      bio: 'Retd. IAS Former Additional Chief Secretary, Haryana. Served as CVO of BEL & HAL, strengthening vigilance in defence PSUs. Held key roles as District Collector, Registrar of MDU Rohtak, and ACS Haryana, known for integrity and effective governance.',
    },
  ],
};

export const standFor = {
  subTitle: 'OUR PRINCIPLES',
  title: 'What we stand for',
  items: [
    {
      title: 'Learner-First Innovation',
      content:
        'We design every feature around individual growth— anticipating needs, removing friction, and providing real-time guidance so learners move from curiosity to mastery with confidence.',
    },
    {
      title: 'Integrity Without Exception',
      content:
        'From tamper-proof exam delivery to uncompromising data privacy, our platforms are built on transparency, accountability, and the highest ethical benchmarks— because trust is non-negotiable.',
    },
    {
      title: 'Universal Access',
      content:
        'Education thrives when everyone can participate. We engineer for every geography, bandwidth, and ability, ensuring equal opportunity regardless of device, location, or circumstance.',
    },
    {
      title: 'Evidence-Led Excellence',
      content:
        'AI and analytics drive our decisions, not hype. We turn data into actionable insights that boost retention, cut time-to-competency, and prove measurable impact.',
    },
    {
      title: 'Co-Creation Partnership',
      content:
        'We don’t just ship software; we build success together. By embedding within your team, we listen, iterate, and tailor solutions until your KPIs read like our own scorecard.',
    },
    {
      title: 'Future-Ready Agility',
      content:
        'Regulations shift, tech evolves, ambitions grow—we pivot faster. Our modular architecture and innovation culture keep you ahead of the curve instead of chasing it.',
    },
    {
      title: 'Sustainable Impact',
      content:
        'Technology should lift communities and the planet—not strain them. Our cloud-native architecture cuts energy use, our CleanTech initiatives offset emissions, and every roadmap milestone is tied to measurable ESG goals so your growth is always responsible.',
    },
    {
      title: 'People-Powered Culture',
      content:
        'Behind every breakthrough is a diverse, empowered team. We foster inclusion, continuous upskilling, and open collaboration—so the best ideas rise quickly and translate into solutions that serve learners, educators, and society at large.',
    },
    {
      title: 'Seamless Scalability',
      content:
        'Success shouldn’t create bottlenecks. Our modular, micro-services stack auto-scales across geographies and traffic spikes, keeping performance, security, and user experience rock-solid whether you serve a single classroom or an entire country.',
    },
  ],
};

export const philosophy = {
  /*
   * Replaced 2026-10-12 with the client's "Innovation Hub — Connecting Ideas
   * and Futures" artwork. The 1.9MB PNG they supplied is re-encoded to a
   * 1200px WebP (96KB); the original stays in `aboutus/` under its own name.
   *
   * It is 4:3, which is what `.ls-media--4x3` wanted all along — the picture
   * it replaced was 0.94 and was being cropped to fit that frame.
   */
  mainImg: '/assets/images/aboutus/innovation-hub.webp',
  subTitle: 'OUR PHILOSOPHY',
  title: 'Innovation at the intersection of everything we do',
  paragraphs: [
    'At Mindlogicx we don’t just build products — we engineer solutions that shape industries, enhance lives, and scale across the globe. As a future-focused product company, innovation is embedded in everything we do. From ideation to deployment, we craft cloud-enabled, user-centric products that are designed for impact. With deep expertise in AI/ML, knowledge engineering, and cloud computing, we develop solutions that are both technically robust and globally relevant',
    'We specialize in developing cutting-edge, scalable, and secure products powered by the cloud. Our teams combine technology, creativity, and deep market insight to deliver:',
  ],
  pillars: [
    {
      title: 'Innovative Products',
      content:
        'We leverage emerging technologies, design thinking, and agile methodologies to bring new ideas to life. From AI-powered platforms to IoT-integrated devices, we’re always ahead of the curve.',
    },
    {
      title: 'Global Solutions',
      content:
        'Built for worldwide adoption, our products are tailored to meet diverse market needs, regulatory environments, and user expectations. We create solutions that scale seamlessly across geographies.',
    },
    {
      title: 'Cloud-Enabled Platforms',
      content:
        'Harnessing the power of cloud infrastructure, we develop products that are always connected, easily accessible, and built for performance and reliability. Our platforms enable real-time collaboration, data analytics, and rapid updates.',
    },
  ],
};

export const whyChooseUs = {
  mainImg: '/assets/images/mlx/about/why-choose-us.webp',
  subTitle: 'WHY MINDLOGICX',
  title: 'Why Choose Us?',
  reasons: [
    {
      title: 'Innovation-Driven Culture',
      content: 'Creativity meets technical excellence in everything we build.',
    },
    {
      title: 'Global Mindset',
      content: 'We think globally and act locally, ensuring our products resonate worldwide.',
    },
    {
      title: 'Scalable & Secure',
      content:
        'Our cloud-first approach guarantees performance, reliability, and security at scale.',
    },
    {
      title: 'End-to-End Expertise',
      content: 'From concept to launch and beyond, we partner with you at every step.',
    },
    {
      title: 'User Experience',
      content:
        'Delivering technology with human touch aimed to fortify customer loyalty and advocacy',
    },
  ],
  industriesTitle: 'Industries We Serve',
  industries: ['EdTech', 'HealthTech', 'Fintech', 'LegalTech', 'MediaTech'],
  closing: 'Contact Us to learn how our global, cloud-enabled innovation can elevate your business.',
  closingLink: '/contact-us',
};

export const dei = {
  mainImg: '/assets/images/mlx/about/dei.webp',
  subTitle: 'OUR COMMITMENT',
  title: 'Diversity, Equity &amp; Inclusion',
  lead: 'As a global technology company we treat Diversity, Equity & Inclusion (DEI) not as a checklist, but as a strategic growth enabler such as:',
  points: [
    'Leadership Commitment in every thing we do',
    'Diverse Talent Acquisition globally',
    'Equity in Opportunities without any kind of bias in any form',
    'Inclusive Product Development by global user testing, accessibility compliance and adopting language and cultural localization',
    'Internal Culture as the fulcrum of being a global leader',
    'Legal & Ethical Considerations by adherence to labor, anti-discrimination, and accessibility laws in each country we operate and Respect Cultural Norms, without Compromise on Core Values: Align global DEI efforts while respecting national customs—without endorsing discrimination.',
  ],
};

export const cta = {
  content: 'What Are You Looking For?',
  btnText: 'Partner With Us',
  btnLink: '/partner',
};
