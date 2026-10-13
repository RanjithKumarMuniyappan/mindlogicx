/*
 * ---------------------------------------------------------------------------
 * LEGAL PAGE COPY — Privacy Policy and Terms & Conditions
 * ---------------------------------------------------------------------------
 *
 * EXTRACTED: 2026-10-13
 *
 * SOURCES (old Next.js site, read-only — nothing in it was modified):
 *   Privacy Policy
 *     .../Mindlogicx_India/mlx-website-2025-frontend/src/components/PrivacyPolicy/PrivacyPolicyContent.tsx
 *     .../Mindlogicx_India/mlx-website-2025-frontend/src/app/privacy-policy/PrivacyPolicyComp.tsx   (banner title only)
 *     .../Mindlogicx_India/mlx-website-2025-frontend/src/app/privacy-policy/page.tsx                (no copy; metadata helper only)
 *   Terms & Conditions
 *     .../Mindlogicx_India/mlx-website-2025-frontend/src/components/TermsAndConditions/TermsAndConditionsContent.tsx
 *     .../Mindlogicx_India/mlx-website-2025-frontend/src/app/terms-conditions/TermsAndConditions.tsx (banner title only)
 *     .../Mindlogicx_India/mlx-website-2025-frontend/src/app/terms-conditions/page.tsx               (no copy; metadata helper only)
 *
 * The prose below is VERBATIM. Nothing has been reworded, shortened, corrected
 * or modernised. Original capitalisation (including the ALL-CAPS headings in the
 * Privacy Policy), original punctuation, and the original curly quotes and
 * apostrophes (’ ‘ “ ”) are preserved exactly as authored. Only markup, class
 * names and React mechanics were dropped.
 *
 * ---------------------------------------------------------------------------
 * THINGS THE CLIENT SHOULD CHECK
 * ---------------------------------------------------------------------------
 * 1. EMPTY SECTION. In the Privacy Policy the h3 "THE PRIVACY POLICY STATEMENT
 *    IS EFFECTIVE FROM AUG 2020" has no body text at all in the source — it is
 *    a bare heading sitting above "PLEDGE ON PRIVACY". It is represented here
 *    faithfully with `blocks: []`. Decide whether it should become a dateline /
 *    eyebrow rather than a heading.
 * 2. STALE DATE. That same heading hard-codes "AUG 2020". The Privacy Policy
 *    text itself says Mindlogicx "may revise, add or remove its Privacy Policy
 *    from time to time", so this effective date is now several years old and
 *    will keep going stale. Confirm the current effective date before launch.
 * 3. PLACEHOLDER LINK. In Terms & Conditions, "Please check our Privacy Policy."
 *    linked to href="#" in the source — a dead placeholder. The link target is
 *    captured as `link: { text: 'Privacy Policy', href: '#' }` and MUST be
 *    repointed at the real privacy policy route.
 * 4. CONTACT DETAIL. The Intellectual Property section exposes the address
 *    info@mindlogicx.com (mailto link). Verify this mailbox is still monitored
 *    for IP-infringement notices.
 * 5. TRADEMARK LIST. The registered-trademark list (IntelliEXAMS®, VEDAS®,
 *    VedasLIVE®, GradFirst®, JobReady4U®) used <sup> tags for the ® symbol;
 *    the symbol is inlined into the string here. Confirm the list is complete
 *    and current — the new site's product naming may have moved on.
 * 6. BANNER TITLES DIFFER FROM PAGE NAMES. The old banners read "Privacy Policy"
 *    and "Terms Conditions" (no ampersand, no "and"). `bannerTitle` keeps the
 *    source value; `title` uses the conventional name. Pick one convention.
 * 7. SOURCE MARKUP ODDITIES, recorded rather than silently fixed:
 *      - "COLLECTION OF PERSONAL DATA" used a SINGLE <br /> between its two
 *        sentences (every other break in the file is a double <br />). It is
 *        split into two paragraphs here; a designer may prefer one paragraph
 *        with a soft break.
 *      - The "please send an email to -" paragraph and the trademark <ul> sit
 *        OUTSIDE the <section> wrapper in the source, though they clearly
 *        belong to Intellectual Property. They are grouped under it here.
 *      - A commented-out "<h4>What is Lorem Ipsum?</h4>" placeholder is present
 *        in the Privacy Policy source. It is dead code and was NOT carried over.
 * 8. The Privacy Policy ends abruptly after "INFORMATION SECURITY & ACCURACY" —
 *    there is no data-retention, user-rights, grievance-officer or contact
 *    section, which Indian DPDP-style expectations usually call for. Flagging
 *    as a possible gap, not a transcription error: nothing is missing from this
 *    extraction, it was never in the source.
 *
 * Block vocabulary used below:
 *   { type: 'p',  text }                  — a paragraph
 *   { type: 'p',  text, strong: true }    — paragraph the source wrapped in <strong>
 *   { type: 'p',  text, link }            — paragraph containing an inline link
 *   { type: 'ul', items: [] }             — an unordered list
 * `level` mirrors the source tag: 3 for <h3>, 4 for <h4>.
 * ---------------------------------------------------------------------------
 */

export const privacyPolicy = {
  title: 'Privacy Policy',
  bannerTitle: 'Privacy Policy',
  intro: [
    'Thank you for visiting the corporate website of Mindlogicx. By accessing the website, you agree to the terms of the Privacy Policy outlined below. Mindlogicx may revise, add or remove its Privacy Policy from time to time to present its recent privacy practices.',
    'Based on ISO/IEC 29100 – Privacy Framework, Mindlogicx and its affiliates (collectively cited to ‘we’, ‘our’, ‘us’) promise to honor the privacy of every visitor. Mindlogicx wants you to become familiar with how the company collects, holds and uses information about each and every individual whoever visits our company website. This Privacy Policy also commits to not share, sell, or transfer any of your personal information to any extraneous third party.',
    'Mindlogicx ensures safeguarding its user’s privacy. We request all our users to read the following ‘privacy policy’ carefully and to understand how personal information is being collected, used and maintained, as you opt for our products and services.',
  ],
  sections: [
    {
      // Heading-only in the source: no paragraphs, no list. See note 1 and 2.
      heading: 'THE PRIVACY POLICY STATEMENT IS EFFECTIVE FROM AUG 2020',
      level: 3,
      blocks: [],
    },
    {
      heading: 'PLEDGE ON PRIVACY',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'The term “Personal Data” used in this Privacy Policy refers to information which includes your name, e-mail address, mailing address, and telephone number. We collect this information only as necessary to fulfill the purposes set forth in this privacy statement and use this information as described in this privacy statement. We may combine any or all of this data with other information we collect about you. However, we also have the right to conduct additional authorized processing in some cases.',
        },
      ],
    },
    {
      heading: 'COLLECTION OF PERSONAL DATA',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'Personal Data is information that verifies you as an individual such as name, email address, telephone number, and country of residence.',
        },
        {
          type: 'p',
          text: 'Generally, you can visit the Mindlogicx website without providing any Personal Data about yourself but as you spend more time and scroll in certain inner pages of our website, you may need to provide your Personal Data for some specific purpose. Unless you share your data, you may not be able to access and benefit from our products and services, such as enquires, marketing, communication, promotions, and recruitments.',
        },
      ],
    },
    {
      heading: 'Take a quick look at why we collect Personal Data.',
      level: 4,
      blocks: [
        {
          type: 'ul',
          items: [
            'Better communication with you – We will follow up on your comments and your other requests submitted on our website, such as online queries, business-related enquiries, or career-related. Using your Personal Data, we may call you back by telephone or communicate with you via e-mail.',
            'Direct marketing and promotion – Through direct marketing, Mindlogicx provides you the exact and specific information you have requested or searched for online. Besides, we also transfer more information about Mindlogicx offerings enabling you to participate in an online discussion or to register for any sponsored events.',
            'Recruitment – If you submit a resume or job application online, we will use your Personal Data for recruitment-related purposes, which may include contacting you via e-mail, telephone or post. Mindlogicx promises to preserve your Personal Data safe and keep on file for an appropriate time in order to consider you for specific employment opportunities in the future.',
            'Conducting customer satisfaction surveys – We will use your Personal Data to conduct customer satisfaction survey in order to maintain and improve our website.',
            'Compiling accumulated statistics regarding the use of the website.',
          ],
        },
      ],
    },
    {
      heading: 'SENSITIVE PERSONAL DATA',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'Mindlogicx does not collect Sensitive Personal Data through its website. Sensitive Personal Data explains the meaning of Personal Data regarding racial or ethnic origin, political opinions, religious or philosophical beliefs, trade-union membership, or concerning health or sex life. By enlisting unsolicited sensitive Personal Data to us (e.g., by submitting your resume or a job application online), you disclose your approval to your Personal Data being used as described in this Policy.',
        },
      ],
    },
    {
      heading: 'COOKIES',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'We may collect and process information about your visit to our websites, such as the pages you visit, the website you came from and some of the searches you perform. This information facilitates us to improve the contents of our site and to compile aggregated statistics about individuals using our site for internal market research purposes. To complete this activity, we may install cookies that collect the domain name of the user, your internet service provider, your operating system, and the date and time of access.',
        },
      ],
    },
    {
      heading: 'LINKS TO OTHER WEBSITES',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'Mindlogicx website may include links to third-party websites such as Facebook, Twitter, Instagram, YouTube, LinkedIn, and others. Third-party social media plugins and login features, including their loading, operation, and use, are governed by the privacy policy and terms of the respective third-party website. Mindlogicx does not control these third-party websites, and we encourage you to read the privacy policy of every site you visit.',
        },
        {
          type: 'p',
          text: 'We respect the importance of privacy, hence we do not sell your Personal Information, nor do we share it with unaffiliated third parties for their own marketing use, unless we have your consent, or we are required by law to do so.',
        },
      ],
    },
    {
      heading: 'INFORMATION SECURITY & ACCURACY',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'We intend to protect your personal information and to control its accuracy. Mindlogicx implements reasonable physical, administrative and technical safeguards to shield your personal information from unauthorized access, use, and disclosure.',
        },
      ],
    },
  ],
};

export const termsAndConditions = {
  title: 'Terms & Conditions',
  // Source banner read "Terms Conditions" — no ampersand. See note 6.
  bannerTitle: 'Terms Conditions',
  intro: [],
  sections: [
    {
      heading: 'Acceptance',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'By accessing and browsing the Mindlogicx (the “Company”) website or by using and downloading any content from same, you agree and accept the terms and conditions as set forth below.',
        },
      ],
    },
    {
      heading: 'Purpose of the Website',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'All the materials contained in the company’s website are provided for informational purposes only and shall not be construed as a commercial offer, a license, an advisory, fiduciary or professional relationship between you and the company. No information provided on this site shall be considered a substitute for your independent investigation.',
        },
      ],
    },
    {
      heading: 'Availability of the Website',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'The Company is not bound by any obligation of result regarding the availability of the website. The Company reserves the right (i) to modify, without any prior notice, the features of the website and (ii) to suspend, interrupt or limit the access to all or part of the website, without any prior notice, particularly for maintenance purposes.',
        },
      ],
    },
    {
      heading: 'Links to Third-Party Websites',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'Links to third-party websites are provided for convenience only and do not imply any approval or endorsement by the company of the linked sites, even if they may contain the company’s logo, as such sites are beyond the company’s control. Thus, the company cannot be held responsible for the content of any linked site or any link contained therein.',
        },
        {
          type: 'p',
          text: 'Therefore, you should protect yourself against viruses, trojan horses, malware and other potentially destructive programs that may be present on third-party websites. And you are responsible for checking and complying with terms of use applicable to these third-party websites.',
        },
      ],
    },
    {
      heading: 'Intellectual Property',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'This website is protected by intellectual property rights including but not limited to trademarks, copyright, designs, patents, etc. and is the exclusive property of the company.',
        },
        {
          type: 'p',
          text: 'You may copy, download and print off this material for personal and non-commercial purposes in accordance with the principles governing intellectual property laws. Any other use of the content of the company’s website without the company’s prior written authorization is prohibited.',
        },
        {
          type: 'p',
          text: 'Therefore, you must not modify any material from the company’s website in any way. Non-compliance with the above-mentioned prohibitions may constitute an act of counterfeiting and unfair competition engaging your civil or criminal liability.',
        },
        {
          type: 'p',
          strong: true,
          text: 'The Company’s Registered Trademarks include but are not limited to the following:',
        },
        {
          type: 'ul',
          items: [
            'IntelliEXAMS®',
            'VEDAS®',
            'VedasLIVE®',
            'GradFirst®',
            'JobReady4U®',
          ],
        },
        {
          type: 'p',
          text: 'If you become aware of any violation of the Company’s intellectual property rights, or you believe that your intellectual property rights have been infringed by any material from the company’s website, please send an email to - info@mindlogicx.com.',
          link: { text: 'info@mindlogicx.com', href: 'mailto:info@mindlogicx.com' },
        },
      ],
    },
    {
      heading: 'Online Privacy Policy – Use of Cookies',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'Please check our Privacy Policy.',
          // Source href was "#" — a dead placeholder. Repointed 2026-10-13 at
          // the real route, which now exists. The sentence is unchanged.
          link: { text: 'Privacy Policy', to: '/privacy-policy' },
        },
      ],
    },
    {
      heading: 'Applicable Law – Severability',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'Any controversy or claim arising out of or related to the terms and conditions shall be governed by Indian law. The Commercial Court of Bangalore will have exclusive jurisdiction.',
        },
        {
          type: 'p',
          text: 'If any provision of these terms and conditions is held by a court to be illegal, invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
        },
      ],
    },
    {
      heading: 'Modifications of the Terms and Conditions',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'The company reserves the right to change the terms and conditions under which this website is offered at any time and without notice. You will be automatically bound by these modifications when you use this site and should periodically read the terms and conditions.',
        },
      ],
    },
    {
      heading: 'Nullity of a Provision',
      level: 4,
      blocks: [
        {
          type: 'p',
          text: 'If any term in these terms and conditions is, for any reason whatsoever, held invalid, illegal or unenforceable in any respect, such invalidity, illegality or unenforceability shall not affect any other provision of these terms and conditions.',
        },
      ],
    },
  ],
};
