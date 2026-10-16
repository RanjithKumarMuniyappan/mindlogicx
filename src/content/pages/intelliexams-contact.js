/*
 * ============================================================================
 * CONTENT EXTRACTION — IntelliEXAMS + Contact Us
 * ============================================================================
 *
 * Extracted: 2026-10-13
 * All copy below is VERBATIM from the source files. Nothing has been reworded,
 * shortened, re-capitalised or re-punctuated. Curly apostrophes (’), ampersands,
 * the ® mark and the source's own typos are preserved exactly as written.
 *
 * SOURCE ROOT (read-only, not modified):
 *   /home/ranjith/Documents/ClaudeProjects/OfficeProjects/Mindlogicx_India/mlx-website-2025-frontend
 *
 * SOURCE FILES READ
 * -----------------
 * Routing / resolution:
 *   src/routes.tsx
 *   src/app/intelliexam/page.tsx
 *   src/app/new_intelliexams/page.tsx
 *   src/seoConfig.ts
 *   src/constant.tsx                      (FloatingBtn target URL)
 *   vite.config.ts                        (process.env -> define mapping)
 *   .env, .env.example                    (API base URL / captcha key)
 *
 * IntelliEXAMS page tree (the LIVE one):
 *   src/app/intelliexam/IntelliExams.tsx
 *   src/components/IntelliExam/IntelliexamIntroduction/page.tsx
 *   src/components/IntelliExam/IntelliexamFeatur/page.tsx
 *   src/components/IntelliExam/OnScreenMarking/page.tsx
 *   src/components/IntelliExam/IntelliexamFunFact/page.tsx
 *   src/components/IntelliExam/QpDeliverySystem/page.tsx
 *   src/components/IntelliExam/OnlineExamOnlineAssessment/page.tsx
 *   src/components/IntelliExam/OurEsteemedClient/page.tsx
 *   src/components/Common/CtaAreaTwo.tsx
 *   src/components/Common/PageBanner.tsx
 *
 * Contact page tree:
 *   src/app/contact-us/page.tsx
 *   src/app/contact-us/ContactUsComp.tsx
 *   src/components/Contact/ContactInfo.tsx
 *   src/components/Contact/ContactForm.tsx
 *   src/components/Contact/CustomTextField.tsx
 *   src/components/Contact/CustomSelectField/page.tsx
 *   src/components/Contact/GoogleMapsMap.tsx
 *   src/services/ContactUs/ContactUsService.js
 *   src/utils/http/axios.js
 *
 * WHICH IntelliEXAMS IMPLEMENTATION IS LIVE
 * -----------------------------------------
 * The "/intelliexam" route renders src/app/intelliexam/IntelliExams.tsx.
 *   src/routes.tsx:46   lazy(() => import("@/app/intelliexam/page"))
 *   src/routes.tsx:124  { path: "/intelliexam", ... }
 *   src/app/intelliexam/page.tsx imports { IntelliExams } from "./IntelliExams"
 * EVERYTHING BELOW IS EXTRACTED FROM IntelliExams.tsx AND ITS CHILDREN.
 *
 * src/app/new_intelliexams/NewIntelliExams.tsx is NOT dead — it is a second,
 * separately-routed page at "/new_intelliexams" (src/routes.tsx:63, :141) and is
 * linked from src/components/EdTech/EdTechServices.tsx:15 (viewDetails:
 * "/new_intelliexams/"). Confusingly its page.tsx also calls
 * getMetadata("/intelliexam"), so both routes emit the same SEO title. It was
 * NOT extracted here. If the new site only wants one IntelliEXAMS page, the
 * client must decide which of the two is the canonical one — the newer
 * "/new_intelliexams" build is much larger (34 KB vs 2 KB) and may well be the
 * intended replacement.
 *
 * Genuinely dead files found while mapping the tree (nothing imports them):
 *   src/components/IntelliExam/IntelliexamBanners/page.tsx
 *   src/components/IntelliExam/IntelliexamFeatur/page1.tsx
 *
 * CONTACT FORM — REAL ENDPOINT
 * ----------------------------
 * src/services/ContactUs/ContactUsService.js:
 *     httpService.post("api/contact_us_form_submit/", data)
 * httpService is an axios instance (src/utils/http/axios.js) whose baseURL is
 * process.env.NEXT_PUBLIC_API_BASE_URL, Content-Type: application/json,
 * timeout 10000ms, withCredentials: false.
 * NEXT_PUBLIC_API_BASE_URL is NOT defined in .env or .env.example, so in this
 * checkout the base URL resolves to "" and the POST goes to the relative path.
 * The only base URL present in .env is VITE_API_BASE_URL=http://localhost:4000,
 * which axios.js does NOT read. The full absolute production endpoint is
 * therefore NOT recoverable from this source tree — I have recorded only the
 * literal path string and have invented nothing.
 * Expected response shape (ContactForm.tsx onSubmit): response.data.status
 * (truthy/falsy) and response.data.message (string shown in a toast). So the
 * success and error text was supplied by the BACKEND, not the frontend — there
 * are no hardcoded success/error strings to port. They are null below.
 *
 * STOCK / REMOTE IMAGES DROPPED
 * -----------------------------
 * None. Both pages are 100% local assets — there are no unsplash or other
 * remote image URLs anywhere in the IntelliEXAMS or Contact component trees
 * (verified by grep). Every path recorded below was confirmed to exist on disk
 * under <source>/public/. They are recorded as public-relative paths and the
 * files still need to be copied into the new site's public folder.
 *
 * THINGS THE CLIENT MUST CHECK BEFORE PUBLISHING
 * ----------------------------------------------
 * 1. PHONE NUMBER. The only number on the Contact page is +91-9071177765, and it
 *    is a WhatsApp link (https://wa.me/919071177765) with no label — there is no
 *    plain telephone number on the page at all. A second number, +241 452 4526,
 *    is present but COMMENTED OUT in ContactInfo.tsx. Confirm the live number(s)
 *    and whether a tel: link is wanted.
 * 2. ADDRESS. Only ONE address exists in the page copy (Bengaluru head office).
 *    Confirm it is current, including the postcode.
 * 3. PARTNER EMAIL IS INCONSISTENT IN THE SOURCE. ContactInfo.tsx:39 renders the
 *    text "partners@mindlogix.com" (note: mindlogix, missing the "c") but its
 *    mailto: href points at info@mindlogicx.com. One of the two is wrong. Both
 *    are recorded verbatim below. Must be resolved before publishing.
 * 4. OFFICE COUNT MISMATCH. The Google map (GoogleMapsMap.tsx) drops FOUR pins —
 *    roughly New Jersey US, London UK, Bengaluru IN and Kuala Lumpur MY — plus
 *    two more commented out (Ireland, Netherlands). Their addresses were never
 *    in the source; they were reverse-geocoded at runtime by the Google Maps API.
 *    So three of the four implied offices have NO address copy to port. The
 *    client must supply real addresses if those offices should appear.
 * 5. FUN FACT NUMBERS RENDER ODDLY. The source prints {number} then a literal
 *    <span>m</span>, giving "95+ m Answer Scripts Evaluated", "55+ m Question
 *    Paper Delivered", "10+ m Users". Confirm these are millions and confirm the
 *    figures — note the CTA on the same page says "over 10 million users", which
 *    agrees with the 10+ m but makes "95+ m answer scripts" worth sanity-checking.
 * 6. FORM FIELDS HAVE NO LABELS. Every field is placeholder-only (no <label>),
 *    which is an accessibility problem. labels are null below; the new site
 *    should add real labels — those will be NEW copy, not ported copy.
 * 7. VALIDATION MESSAGES CONTAIN TYPOS, preserved verbatim: "charactors"
 *    (should be characters, x12), "atleast" (x7), "alteast" (x1), and
 *    "Massage is required" for the Message field. Recommend fixing, but that is
 *    a copy change the client should approve.
 * 8. PHONE VALIDATION IS BROKEN-ISH: min 10 AND max 10 characters with an
 *    alphanumeric-only regex, so it accepts letters but rejects "+" and spaces.
 *    Flagging as a behaviour decision for the new form.
 * 9. reCAPTCHA. The old form required Google reCAPTCHA (react-google-recaptcha)
 *    with the site key from env var NEXT_PUBLIC_CAPTCHA_KEY. The new site has no
 *    backend, so decide what replaces the captcha + POST.
 * 10. The feature cards and client logos all link to "#" (placeholder hrefs) in
 *    the source — PLACEHOLDER, flagged, not invented away.
 * 11. The "Feature" section heading is singular ("Feature") in the source.
 *    Likely meant to be "Features". Verbatim as-is below.
 * 12. Contact page has NO intro paragraph — the heading "Get In Touch" sits
 *    directly above the fields, and a lorem-ipsum paragraph under it is
 *    commented out. intro is null below rather than invented.
 * 13. The Contact page banner uses the generic template image
 *    /images/page-banner1.webp, not a Mindlogicx-specific banner.
 * 14. Several sections had lorem-ipsum subheadings commented out in the source
 *    (Online Exam, Our Clients, Get In Touch). Deliberately NOT ported.
 * ============================================================================
 */

export const intelliExamsPage = {
  title: "IntelliEXAMS",
  // src/seoConfig.ts:66-69 — metadata for the "/intelliexam" route
  seo: {
    title:
      "IntelliEXAMS | End-to-End Digital Exam Management System | Mindlogicx",
    description:
      "IntelliEXAMS is Mindlogicx’s flagship AI-powered platform for secure, end-to-end exam lifecycle management — from question paper generation to evaluation and certification. Trusted by universities, government bodies, and corporates for scalable assessment solutions.",
  },
  bannerImage: "/imagess/mindlogicx/header_banner/newbanner/Intelliexams.webp",

  sections: [
    // 1 — IntelliexamIntroduction
    {
      id: "introduction",
      source: "src/components/IntelliExam/IntelliexamIntroduction/page.tsx",
      type: "textWithImage",
      heading: null, // an "About Us" <h2> exists but is commented out in the source
      logoImage: "/imagess/mindlogicx/product_logo/intelli_logo.webp",
      body: [
        "The flagship product from Mindlogicx, IntelliEXAMS®, is an AI-powered assessment engine that can seamlessly manage the entire assessment lifecycle. The solution is flexible, modular, rule-based, and user friendly. It is innovative in terms of technology offering and delivery, as it is available on the cloud, mobile app, and BYOD with cross platform capability. This innovative technology suite provides more accurate, efficient, and personalized approach to the assessment process, making it an indispensable tool for educators and learners alike. Say goodbye to outdated testing methods and hello to a more advanced and effective assessment approach with IntelliEXAMS® for a distributed assessment environment.",
      ],
      image: "/imagess/mindlogicx/intelliexam/Intelliexams_content_img.webp",
      imageAlt: "Mindlogicx",
    },

    // 2 — IntelliExamFeature
    {
      id: "features",
      source: "src/components/IntelliExam/IntelliexamFeatur/page.tsx",
      type: "cardGrid",
      heading: "Feature", // verbatim — singular in the source
      intro:
        "Your ultimate destination for acquiring the abilities you need to thrive in today's dynamic world. Our examination management  platform is poised to transform how create, deliver and evaluate the assessments.",
      // NOTE: the double space in "management  platform" and the ungrammatical
      // "transform how create, deliver and evaluate" are both in the source.
      cards: [
        {
          title: "QP Authoring and Delivery",
          text: "Author questions, create multiple tests to enable Just In Time QP delivery from the cloud to the test center or to the candidates device securely",
          link: "#", // PLACEHOLDER in source
        },
        {
          title: "Hybrid Online Examination",
          text: "Conduct hybrid online examinations using Safe Exam Browser, with both MCQ and subjective questions",
          link: "#", // PLACEHOLDER in source
        },
        {
          title: "Analytics and dashboards",
          text: "Utilize intuitive dashboards to analyze and present information, enabling well-informed decision-making.",
          link: "#", // PLACEHOLDER in source
        },
        {
          title: "On-Screen Marking",
          text: "OSM solution to mark Answer Scripts and assignments with rubrics. Manage the grading of formative and summative assessments efficiently.",
          link: "#", // PLACEHOLDER in source
        },
        {
          title: "Cloud Enabled Solution",
          text: "A Cloud-Enabled Solution enhances traditional systems with the power of cloud computing. It offers scalability, security, and seamless integration with modern cloud services for improved efficiency and flexibility",
          link: "#", // PLACEHOLDER in source
        },
        {
          title: "Question Paper Delivery System (QPDS)",
          text: "Time-bound authentication and OTP-based access for printing, ensuring encrypted and secure question paper delivery, along with geofencing.",
          link: "#", // PLACEHOLDER in source
        },
      ],
      // The source data objects also carry unused image_url values pointing at
      // /images/mindlogicx/gradfirst/welcome_icon/{goal,global_leader,edtech_industry}.png
      // — they are commented out in the JSX and never rendered.
    },

    // 3 — OnScreenMarking
    {
      id: "on-screen-marking",
      source: "src/components/IntelliExam/OnScreenMarking/page.tsx",
      type: "imageWithBullets",
      heading: "On Screen Marking (OSM)",
      image: "/imagess/mindlogicx/intelliexam/onscreenmarking.webp",
      imageAlt: "Mindlogicx",
      bullets: [
        "Self-allocation of answer scripts by faculties",
        "Rules-based centralized answer script allocation",
        "Multiple levels of simultaneous evaluations while hiding previous evaluations",
        "Intuitive annotation feature by using predefined symbols and free hand annotation",
        "Revaluation of answer script at question level",
        "Answer script anonymity configuration to mask the student’s identity & areas of specific answer script pages",
        "Automatic publishing of answer script next level based on configurable business rules",
        "Device-agnostic and platform agnostic",
        "Options to provide marks and feedback to individual questions",
        "Rubrics enabled On-Screen Marking for qualitative grading",
        "Cross Platform On-Screen Marking",
        "Time window enforcement for Evaluations",
        "Real-time evaluation analytics & dashboards",
        "Online view of evaluated answer script with annotations & feedback for students",
        "Integrated with license management",
      ],
    },

    // 4 — IntelliexamFunFact
    {
      id: "fun-facts",
      source: "src/components/IntelliExam/IntelliexamFunFact/page.tsx",
      type: "stats",
      heading: null,
      // Rendered as: {number} <span>m</span> then the label. See client note 5.
      stats: [
        { number: "95+", unit: "m", label: "Answer Scripts Evaluated" },
        { number: "55+", unit: "m", label: "Question Paper Delivered" },
        { number: "10+", unit: "m", label: "Users" },
      ],
    },

    // 5 — QpDeliverySystem
    {
      id: "qp-authoring-delivery",
      source: "src/components/IntelliExam/QpDeliverySystem/page.tsx",
      type: "bulletsWithImage",
      heading: "Question Paper Authoring & Delivery",
      image:
        "/imagess/mindlogicx/intelliexam/Question-paper-authoring-&-delivery.webp",
      imageAlt: "Mindlogicx",
      bullets: [
        "Unified authoring tool to author question paper for any assessment types",
        "Supports multiple options of QP authoring (automatic, manual and file upload)",
        "Supports more than 10 question types including multimedia question types",
        "Editor with inbuilt features supporting tables, image, mathematical and chemical equations",
        "Supports authoring questions in multiple languages",
        "Template driven QP authoring by randomization",
        "Configurable parameter to define the degree of difficulty/severity of QP",
        "Encryption of QP at storage and transmission",
        "Question paper upload in bulk and single",
        "Secret key split across multiple authorized users for secured QP printing",
        "Time based Authentication",
        "The question paper will be printed at the authorized geo-location with a watermark",
        "OTP Authentication for Printing",
        "SoS option for Question paper printing",
        "Interactive dashboard to track real-time status of QP",
        "Live tracking of QP delivery & Printing",
      ],
    },

    // 6 — OnlineExamOnlineAssessment
    {
      id: "online-exam-online-assignment",
      source:
        "src/components/IntelliExam/OnlineExamOnlineAssessment/page.tsx",
      type: "imageWithTwoBulletColumns",
      heading: "Online Exam / Online Assignment",
      image: "/imagess/mindlogicx/intelliexam/Online-Assignment.webp",
      imageAlt: "Mindlogicx",
      bulletColumns: [
        [
          "Option for Scheduled and ad hoc assessment",
          "Unified QP authoring tool for any assessment types in multiple languages",
          "Supports more than 10 question types including multimedia & subjective",
          "Item Banking System (IBS)",
          "Templatized automatic question paper (QP) generation from IBS",
          "BYOD enabled delivery of assignments",
          "Secured Exam Browser based assessment",
        ],
        [
          "QR code based questions for instant digitization of handwritten response at source",
          "Instant results along with analytics for MCQ based assessment",
          "Integrated with license management",
          "Alerts & Notifications",
          "Cross Platform On-Screen Marking for subjective questions",
        ],
      ],
    },

    // 7 — OurEsteemedClient
    {
      id: "our-clients",
      source: "src/components/IntelliExam/OurEsteemedClient/page.tsx",
      type: "logoCarousel",
      heading: "Our Clients",
      // Every item also carries category: "Development" and viewDetails: "#",
      // both of which are commented out in the JSX and never rendered.
      // All logo files confirmed present on disk.
      items: [
        {
          title: "VIT",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/VIT.webp",
        },
        {
          title: "AKTU",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/AKTU.webp",
        },
        {
          title: "Amity",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/Amity.webp",
        },
        {
          title: "CSVTU",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/CSVTU.webp",
        },
        {
          title: "GIIS",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/GIIS.webp",
        },
        {
          title: "GTU",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/GTU.webp",
        },
        {
          title: "Maulana Abul Kalam Azad University of Technology",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/Maulana-Abul-Kalam-Azad-University-of-Technology.webp",
        },
        {
          title: "Mata Gujri",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/Mata-Gujri.webp",
        },
        {
          title: "RGUHS",
          image:
            "/imagess/mindlogicx/intelliexam/OurEsteemedClient/RGUHS.webp",
        },
      ],
      // NOTE: an AKU.webp logo also sits in that folder but is NOT referenced by
      // the page. Client may want it added.
    },

    // 8 — CtaAreaTwo
    {
      id: "cta",
      source: "src/app/intelliexam/IntelliExams.tsx + src/components/Common/CtaAreaTwo.tsx",
      type: "cta",
      heading:
        "Deploy our globally acclaimed assessment engine trusted by over 10 million users",
      description: null, // the `desc` prop is not passed on this page
      buttonLabel: "Request To Demo",
      buttonUrl: "/appointment/",
      calendlyUrl: "https://calendly.com/mindlogicx-sales/enquiry",
      // The button dispatches the Calendly title/url into redux then routes to
      // /appointment/ — the new site has no such flow; decide what it should do.
    },

    // 9 — FloatingBtn (src/constant.tsx:786)
    {
      id: "floating-button",
      source: "src/app/intelliexam/IntelliExams.tsx + src/constant.tsx",
      type: "floatingButton",
      label: null, // no text in source; the component is icon-only
      url: "https://intelliexams.com/intelliexam/home",
      note: "External link to the IntelliEXAMS product login/home. Client should confirm this is still the right destination.",
    },
  ],
};

export const contactPage = {
  title: "Contact Us",
  // src/seoConfig.ts:42-45
  seo: {
    title:
      "Contact Us | Reach Out to Mindlogicx – Innovators in Knowledge Engineering",
    description:
      "Get in touch with Mindlogicx for business inquiries, partnership opportunities, or support across our verticals including EdTech, LegalTech, FinTech, HealthTech, and CleanTech. We're here to connect and collaborate.",
  },
  bannerImage: "/images/page-banner1.webp", // generic template banner — see client note 13

  // No intro copy exists on this page. A lorem-ipsum paragraph under the
  // "Get In Touch" heading is commented out in ContactForm.tsx. Not invented.
  intro: null,

  // src/components/Contact/ContactInfo.tsx — the page shows ONE address only.
  // The source does not attribute the emails or the WhatsApp number to this
  // office, so phone/email are null here and the raw boxes are kept verbatim
  // in `infoBoxes` below.
  offices: [
    {
      name: "Head Office",
      address:
        "10/1B, Graphite India Main Rd, KEB Colony, Industrial Area, Whitefield, Bengaluru, Karnataka 560048",
      phone: null,
      email: null,
    },
  ],

  // Verbatim mirror of the three contact-info boxes, in page order.
  infoBoxes: [
    /*
     * ⚠️ The client supplied this address again on 2026-10-15 as a "region
     * branch" to be added. It is **the same street address already here** as
     * Head Office — the only new information was the legal entity name, so
     * that was added to this entry rather than rendered as a second,
     * identical card. The line breaks are the client's own.
     */
    {
      id: "head-office",
      type: "address",
      label: "Head Office ", // trailing space is in the source <strong>
      name: "Mindlogicx Infratec Limited",
      lines: [
        "10/1B, Graphite India Main Rd,",
        "KEB Colony, Industrial Area,",
        "Whitefield, Bengaluru,",
        "Karnataka 560048.",
      ],
    },
    /*
     * Added 2026-10-15, verbatim — including the client's capitalisation
     * ("MINDLOGICX ASIA SDN. BHD", no full stop after BHD) and line breaks.
     */
    {
      id: "asia-office",
      type: "address",
      label: null,
      name: "MINDLOGICX ASIA SDN. BHD",
      lines: [
        "Block 3B-02-06, Plaza Sentral, Jalan Stesen Sentral 5,",
        "Kuala Lumpur Sentral, Kuala Lumpur,",
        "W.P. Kuala Lumpur, 50470",
      ],
    },
    {
      id: "email",
      type: "email",
      entries: [
        { label: "Sales :", value: "sales@mindlogicx.com", href: "mailto:sales@mindlogicx.com" },
        { label: "Enquiry :", value: "info@mindlogicx.com", href: "mailto:info@mindlogicx.com" },
        {
          label: "Partner:",
          value: "partners@mindlogix.com",
          href: "mailto:info@mindlogicx.com",
          note: "MISMATCH IN SOURCE — displayed text says partners@mindlogix.com (missing the 'c' in mindlogicx) but the mailto: href is info@mindlogicx.com. Must be resolved. See client note 3.",
        },
      ],
    },
    {
      id: "whatsapp",
      type: "whatsapp",
      label: null, // a "Call Here" heading exists but is commented out
      entries: [
        {
          value: "+91-9071177765",
          href: "https://wa.me/919071177765",
        },
      ],
      note: "A second number, +241 452 4526 (href tel:+2414524526), is COMMENTED OUT in the source. See client note 1.",
    },
  ],

  // src/components/Contact/GoogleMapsMap.tsx — four pins, no address copy.
  // Addresses were reverse-geocoded live by the Google Maps Geocoder, so there
  // is nothing to port. Fallback string when geocoding failed: "Address not found".
  // Loading string: "Loading map...". See client note 4.
  mapMarkers: [
    { lat: 40.56624, lng: -74.67024, address: null },
    { lat: 51.55828, lng: 0.06383, address: null },
    { lat: 12.99059, lng: 77.71264, address: null },
    { lat: 3.13469, lng: 101.68425, address: null },
  ],
  mapMarkersCommentedOut: [
    { lat: 53.36538, lng: -6.58622 },
    { lat: 52.29176, lng: 5.28475 },
  ],

  form: {
    heading: "Get In Touch",

    // The literal path passed to axios.post in
    // src/services/ContactUs/ContactUsService.js. Prefixed at runtime by
    // process.env.NEXT_PUBLIC_API_BASE_URL, which is NOT set anywhere in this
    // checkout — so the absolute URL is unknown and has NOT been invented.
    endpoint: "api/contact_us_form_submit/",
    endpointBaseUrlEnvVar: "NEXT_PUBLIC_API_BASE_URL",
    endpointBaseUrlValueInSource: null,
    method: "POST",
    contentType: "application/json",
    timeoutMs: 10000,
    withCredentials: false,

    // JSON body = exactly the Formik values object, i.e. these nine keys.
    requestBodyKeys: [
      "name",
      "email",
      "number",
      "designation",
      "organization",
      "country",
      "state",
      "city",
      "query",
    ],
    // Expected response: { status: <truthy|falsy>, message: "<string>" }
    responseShape: { status: "boolean-ish", message: "string" },

    // NOTE: every field is PLACEHOLDER-ONLY — there are no <label> elements in
    // the source, so `label` is null throughout. See client note 6.
    fields: [
      {
        name: "name",
        type: "text",
        label: null,
        placeholder: "Name",
        required: true,
        validation: ["Name is required"],
      },
      {
        name: "email",
        type: "email",
        label: null,
        placeholder: "Email",
        required: true,
        validation: ["Invalid email", "Email is required"],
      },
      {
        name: "number",
        type: "tel",
        label: null,
        placeholder: "Phone number",
        required: true,
        validation: [
          "Phone number is required",
          "Phone number must be atleast 10 charactors.",
          "Phone number must be maximum 10 charactors.",
          "Spaces are not allowed.",
        ],
        rules: { min: 10, max: 10, pattern: "^[a-zA-Z0-9]+$" },
      },
      {
        name: "designation",
        type: "text",
        label: null,
        placeholder: "Designation",
        required: true,
        validation: [
          "Designation is required",
          "Designation must be atleast 1 charactors.",
          "Designation must be maximum 250 charactors.",
        ],
        rules: { min: 1, max: 250 },
      },
      {
        name: "organization",
        type: "text",
        label: null,
        placeholder: "Organization",
        required: true,
        validation: [
          "Organization is required",
          "Organization must be atleast 1 charactors.",
          "Organization must be maximum 250 charactors.",
        ],
        rules: { min: 1, max: 250 },
      },
      {
        name: "country",
        type: "select",
        label: null,
        placeholder: "Select Country",
        required: true,
        validation: [
          "Country is required",
          "Country must be atleast 1 charactors.",
          "Country must be maximum 250 charactors.",
        ],
        optionsSource:
          "countrycitystatejson getCountries() — all countries, value and label both the country name",
      },
      {
        name: "state",
        type: "select",
        label: null,
        placeholder: "Select State",
        required: true,
        validation: [
          "State is required",
          "State must be atleast 1 charactors.",
          "State must be maximum 250 charactors.",
        ],
        optionsSource:
          "countrycitystatejson — states filtered by the selected country",
      },
      {
        name: "city",
        type: "select",
        label: null,
        placeholder: "Select City",
        required: true,
        validation: [
          "City is required",
          "City must be atleast 1 charactors.",
          "City must be maximum 250 charactors.",
        ],
        optionsSource:
          "countrycitystatejson getCities() — cities filtered by the selected state",
      },
      {
        name: "query",
        type: "textarea",
        label: null,
        placeholder: "Message...",
        required: true,
        rows: 6,
        cols: 30,
        validation: [
          "Massage is required", // verbatim typo in source
          "Message must be alteast 1 charactors.", // verbatim typo in source
          "Message must be maximum 250 charactors.",
        ],
        rules: { min: 1, max: 250 },
      },
    ],

    // Google reCAPTCHA (react-google-recaptcha), required before submit.
    // Site key read from env var NEXT_PUBLIC_CAPTCHA_KEY — not reproduced here.
    captcha: {
      required: true,
      provider: "google-recaptcha",
      siteKeyEnvVar: "NEXT_PUBLIC_CAPTCHA_KEY",
      errorMessage: "Please complete the CAPTCHA.",
    },

    submitLabel: "Submit",

    // There are NO hardcoded success/error strings in the old frontend — both
    // toasts render response.data.message from the backend. See header note.
    successMessage: null,
    errorMessage: null,
    // The only literal failure string in the source is this toast prefix, which
    // is passed to toast.error as a first arg with the error object second
    // (so the error itself was never actually displayed):
    networkErrorPrefix: "Error submitting form:",
  },
};
