/*
 * ============================================================================
 * CONTENT EXTRACTION — Careers ("Work With Us")
 * ============================================================================
 *
 * Extracted: 2026-10-13
 * All copy below is VERBATIM from the source files. Nothing has been reworded,
 * shortened, re-capitalised or re-punctuated. Curly apostrophes (’), en/em
 * dashes (– —) and the source's own typos ("Massage is required",
 * "charectors", "alteast") are preserved exactly as written.
 *
 * SOURCE ROOT (read-only, not modified):
 *   /home/ranjith/Documents/ClaudeProjects/OfficeProjects/Mindlogicx_India/mlx-website-2025-frontend
 *
 * SOURCE FILES READ
 * -----------------
 * Routing / metadata:
 *   src/app/careers/page.tsx
 *   src/seoConfig.ts                                  (/careers title + description)
 *
 * Careers page tree (in render order):
 *   src/app/careers/CareersComp.tsx
 *   src/components/Common/PageBanner.tsx
 *   src/components/Career/PeopleOurAssets/page.tsx
 *   src/components/Career/WorkAndGrowWithUs/page.tsx
 *   src/components/Career/ALTWorkWithUs/page.tsx      (CTA + application form)
 *   src/components/Career/ClubCTA/page.tsx
 *   src/components/Career/ClubCTA/ClubCTA.css         (markup only, no copy)
 *
 * Form field components (for labels / placeholders / option lists):
 *   src/components/Contact/CustomTextField.tsx
 *   src/components/Contact/CustomSelectField/page.tsx
 *   src/components/Contact/CustomFileUploadField/page.tsx
 *
 * Submit endpoint:
 *   src/services/ContactUs/ContactUsService.js
 *   src/utils/http/axios.js
 *   .env, .env.example                                (API base URL, captcha key)
 *
 * NOT RENDERED (read but deliberately excluded):
 *   src/components/Career/CareersBanner/page.tsx
 *     — exists in the Career folder but is NOT imported by CareersComp.tsx, so
 *       it never appears on the live page. Its dead copy is recorded at the
 *       bottom of this file under `unusedCareersBanner` for reference only.
 *       It also references stock-ish template art (/images/hero-banner4.jpg,
 *       /images/animate-banner-img1.jpg) and a hardcoded YouTube lightbox
 *       (https://www.youtube.com/embed/bk7McNUjWgw) — all template leftovers.
 *
 * JOB LISTINGS — IMPORTANT
 * ------------------------
 * There are NO job listings on this page. Not static, not fetched. The page has
 * no roles, no titles, no locations, no departments-with-descriptions and no
 * jobs API call anywhere in its component tree. The only "apply" path is a
 * single generic application form with a free-text Message field and a resume
 * upload. The only enumerated department list in the whole page is the form's
 * four-option dropdown (Admin / HR / Finance / Marketing). No job entries have
 * been fabricated here.
 *
 * IMAGES
 * ------
 * All four images used by the live page are LOCAL and were verified to exist
 * under the source project's public/ directory. No remote/stock (unsplash etc.)
 * image is used by any rendered Careers component, so nothing was dropped.
 *   public/imagess/mindlogicx/header_banner/newbanner/Carrer.webp      — verified
 *   public/imagess/mindlogicx/carrer/Career.webp                       — verified
 *   public/imagess/mindlogicx/carrer/CareerOne.webp                    — verified
 *   public/imagess/mindlogicx/mindlogicxian_club/mlx_club_wwr.webp     — verified
 * (Note the source's own folder/file spellings: "imagess", "carrer", "Carrer".)
 *
 * CLIENT MUST CHECK BEFORE PUBLISHING
 * -----------------------------------
 * 1. NO CAREERS EMAIL ANYWHERE. The page says "contact us and let us know how
 *    you can make a difference" but gives no email address, phone number or
 *    link. If a real careers inbox (e.g. an hr@/careers@ address) should be
 *    shown, the client must supply it — none has been invented here.
 * 2. SUBMIT ENDPOINT IS RELATIVE AND UNRESOLVED. The form POSTs multipart to
 *    "api/career_form_submit/" against VITE_API_BASE_URL, which in the repo's
 *    checked-in .env is http://localhost:4000 — a dev placeholder. The real
 *    production API base must be confirmed before this form goes live, or the
 *    form will silently fail. Do not assume the localhost value is correct.
 * 3. reCAPTCHA site key 6LdYfMwtAAAAAD5j0blHXKY_-dQg4WGKqE8zkeIA is committed
 *    in .env under the NEXT_PUBLIC_ prefix while the rest of the app has moved
 *    to VITE_ — confirm the key is still valid, registered for the production
 *    domain, and read under the correct env prefix.
 * 4. DEPARTMENT DROPDOWN LOOKS UNFINISHED. Only Admin, HR, Finance, Marketing.
 *    For a technology company advertising EdTech/AI roles, Engineering, Product,
 *    Sales, Delivery etc. are conspicuously absent. Confirm the intended list.
 * 5. PHONE VALIDATION IS BROKEN FOR NON-INDIAN APPLICANTS. The form offers a
 *    worldwide Country/State/City picker but forces the phone number to be
 *    exactly 10 characters. International applicants cannot submit. Flagging as
 *    a content/UX contradiction for the client to resolve.
 * 6. THE FORM IS HIDDEN UNTIL "Apply Now" IS CLICKED. Nothing above renders the
 *    form on load; a visitor who never clicks the CTA never sees it.
 * 7. NO LOCATIONS are stated anywhere on this page — no office, city or
 *    country. If the careers page should state where the jobs are, the client
 *    must supply it.
 * 8. REVIEW THE COMPANY CLAIMS. "We’re the makers of cloud-based real-time
 *    assessment solutions", "We’re defining the future of assessment", "We have
 *    a diverse global team", "Join Us. Your Future is secured" and the
 *    "Mindlogicxians – the unstoppable warriors of the world" passage are all
 *    strong/absolute statements. "Your Future is secured" in particular reads
 *    as an employment guarantee and should be legally reviewed.
 * 9. SOURCE TYPO IN THE PEOPLE/WORK COPY: the WorkAndGrowWithUs paragraph is a
 *    single <p> containing two paragraphs mashed together by a blank line in
 *    JSX, which collapses to one run-on line in the browser. It is recorded
 *    here as the two intended paragraphs (body array) — confirm that split is
 *    what the client wants.
 * 10. The Mindlogicxian Club CTA links to /mindlogicxian_club/ — confirm that
 *    route exists on the new site before shipping the button.
 * ============================================================================
 */

export const careersPage = {
  title: "Work With Us",
  bannerImage: "/assets/images/pages/Carrer.webp",

  seo: {
    title: "Careers at Mindlogicx | Build the Future with AI & Knowledge Engineering",
    description:
      "Explore exciting career opportunities at Mindlogicx across EdTech, LegalTech, HealthTech, and more. Join a purpose-driven team of innovators shaping the future with AI, cloud solutions, and knowledge engineering. Apply now and grow with us.",
  },

  sections: [
    {
      id: "people-are-our-assets",
      component: "PeopleOurAssets",
      heading: "People are our assets",
      body: [
        "We are ordinary people with extraordinary will power. We don’t just build technologies but a future. We build our arsenal with knowledge. Whenever we felt threatened we saw the opportunities to explore further. We stand and guard between you and your destiny. We are present. We are the future. We are the hope and we are Mindlogicxians – the unstoppable warriors of the world. We stand for what we believe is right, even it means standing alone. That differentiates us from ordinary to extraordinary. That makes us the legends.",
      ],
      image: "/assets/images/pages/Career.webp",
      imageAlt: "Mindlogicx",
      imageWidth: 720,
      imageHeight: 577,
      // Commented out in source and therefore NOT rendered:
      //   a "WHO WE ARE" sub-title, and a "Read More" link to /about.
    },

    {
      id: "work-and-grow-with-us",
      component: "WorkAndGrowWithUs",
      heading: "Work & Grow With Us",
      body: [
        "Mindlogicx – We’re the makers of cloud-based real-time assessment solutions. We’re defining the future of assessment, and we’re looking for great people to join us. We’re a team, obsessed with innovative and efficient technological solutions to bigger problems in the EdTech space. We have a diverse global team that’s working hard to bring Mindlogicx to the next level. We’re very ambitious and strongly believe – there isn’t any mountain high enough!",
        "We always need smart, knowledge and technology-driven people to join our global team. Check out our open jobs and apply today! If you can’t see the perfect fit for you, contact us and let us know how you can make a difference.",
      ],
      image: "/assets/images/pages/CareerOne.webp",
      imageAlt: "Mindlogicx",
      imageWidth: 720,
      imageHeight: 577,
      // NOTE: "Check out our open jobs" is a dangling promise — the page never
      // lists any open jobs and links to none. Flagged for the client.
    },

    {
      id: "join-us-cta",
      component: "ALTWorkWithUs (CTA half)",
      heading: "Join Us. Your Future is secured",
      body: [],
      buttonText: "Apply Now",
      buttonHref: "#contact-form",
      // The commented-out sub-line "Let's get to work" is NOT rendered.
    },

    {
      id: "application-form",
      component: "ALTWorkWithUs (form half)",
      heading: null, // The <h2>Get In Touch</h2> and its intro paragraph are
                     // commented out in source — the form renders with NO heading.
      body: [],
      // The form is hidden until the "Apply Now" button above is clicked.
      revealedBy: "apply-now-button",
      jobListings: {
        type: "none",
        // No static job array and no jobs API call exists in this page's
        // component tree. Nothing fabricated.
        note:
          "The Careers page contains no job listings of any kind — neither static content nor an API fetch. The only application path is the generic form below.",
      },
      form: {
        submitEndpoint: "api/career_form_submit/",
        submitMethod: "POST",
        submitContentType: "multipart/form-data",
        apiBaseUrlEnvVar: "VITE_API_BASE_URL",
        apiBaseUrlInRepoEnv: "http://localhost:4000", // dev placeholder — verify
        captcha: {
          provider: "Google reCAPTCHA",
          siteKeyEnvVar: "NEXT_PUBLIC_CAPTCHA_KEY",
          siteKeyInRepoEnv: "6LdYfMwtAAAAAD5j0blHXKY_-dQg4WGKqE8zkeIA",
          errorMessage: "Please complete the CAPTCHA.",
        },
        submitButtonText: "Submit",
        fields: [
          {
            name: "name",
            type: "text",
            label: null,
            placeholder: "Name",
            required: true,
            validationMessages: ["Name is required"],
          },
          {
            name: "email",
            type: "email",
            label: null,
            placeholder: "Email",
            required: true,
            validationMessages: ["Invalid email", "Email is required"],
          },
          {
            name: "number",
            type: "tel",
            label: null,
            placeholder: "Phone number",
            required: true,
            validationMessages: [
              "Phone number is required",
              "Phone number must be atleast 1 charectors.",
              "Phone number must be maximum 10 charactors.",
              "Spaces are not allowed.",
            ],
          },
          {
            name: "department",
            type: "select",
            label: null,
            placeholder: "Select Department",
            required: true,
            options: [
              { name: "Admin", value: "admin" },
              { name: "HR", value: "hr" },
              { name: "Finance", value: "finance" },
              { name: "Marketing", value: "marketing" },
            ],
            // Note: the component is passed valueKey="name" labelKey="name",
            // so the submitted value is the NAME ("Admin"), not the lowercase
            // value key. The lowercase values above are effectively unused.
            validationMessages: [
              "Department is required",
              "Department must be atleast 1 charectors.",
              "Department must be maximum 250 charactors.",
            ],
          },
          {
            name: "country",
            type: "select",
            label: null,
            placeholder: "Select Country",
            required: true,
            optionsSource:
              "countrycitystatejson — getCountries(); full world country list, not authored content",
            validationMessages: [
              "Country is required",
              "Country must be atleast 1 charectors.",
              "Country must be maximum 250 charactors.",
            ],
          },
          {
            name: "state",
            type: "select",
            label: null,
            placeholder: "Select State",
            required: true,
            optionsSource:
              "countrycitystatejson — states of the selected country, not authored content",
            validationMessages: [
              "State is required",
              "State must be atleast 1 charectors.",
              "State must be maximum 250 charactors.",
            ],
          },
          {
            name: "city",
            type: "select",
            label: null,
            placeholder: "Select City",
            required: true,
            optionsSource:
              "countrycitystatejson — getCities() for the selected state, not authored content",
            validationMessages: [
              "City is required",
              "City must be atleast 1 charectors.",
              "City must be maximum 250 charactors.",
            ],
          },
          {
            name: "resume",
            type: "file",
            label: "Upload Resume",
            placeholder: null,
            required: true,
            accept: ".pdf, .doc, .docx",
            maxSize: "2MB",
            validationMessages: [
              "Resume is required",
              "File too large. Max 2MB.",
              "Unsupported file format. Only PDF/DOC/DOCX allowed.",
            ],
          },
          {
            name: "query",
            type: "textarea",
            label: null,
            placeholder: "Message...",
            required: true,
            rows: 6,
            cols: 30,
            validationMessages: [
              "Massage is required", // source typo, preserved verbatim
              "Message must be alteast 1 charactor.", // source typo, preserved
              "Message must be maximum 250 charactors.", // source typo, preserved
            ],
          },
        ],
        // Success / failure toasts use messages returned by the API, except:
        errorToastPrefix: "Error submitting form:",
      },
    },

    {
      id: "mindlogicxian-club-cta",
      component: "ClubCTA",
      heading: "Discover the Mindlogicxian Club",
      body: [
        "Step into an exclusive community where passionate innovators and creative minds connect, collaborate, and thrive together. Explore life at Mindlogicx beyond work.",
      ],
      buttonText: "Explore the Club",
      buttonHref: "/mindlogicxian_club/",
      image: "/assets/images/pages/mlx_club_wwr.webp",
      imageAlt: "Mindlogicxian Club Community",
    },
  ],
};

/*
 * DEAD CODE — NOT part of the live Careers page.
 * src/components/Career/CareersBanner/page.tsx is never imported by
 * CareersComp.tsx. Recorded only so the client can decide whether this headline
 * was meant to be used. Note the double space in the source heading, preserved.
 * Its images are unbranded template art and are intentionally set to null.
 */
export const unusedCareersBanner = {
  rendered: false,
  heading: "Join us. We will  incubate your dreams",
  backgroundImage: null, // source: /images/hero-banner4.jpg (template stock art)
  sideImage: null, // source: /images/animate-banner-img1.jpg (template stock art)
  videoUrl: null, // source: https://www.youtube.com/embed/bk7McNUjWgw (template placeholder)
  // Commented out in source: a lorem-ipsum paragraph, a "Contact Us" button
  // and a "How it works" video button.
};

export default careersPage;
