/*
 * ============================================================================
 * CONTENT EXTRACTION — Mindlogicxian Club
 * ============================================================================
 *
 * Extracted: 2026-10-13
 * Live page: https://www.mindlogicx.com/mindlogicxian_club/
 *
 * All copy below is VERBATIM from the source files. Nothing has been reworded,
 * shortened, summarised, re-capitalised or re-punctuated. Curly apostrophes
 * (’), en/em dashes (– —), emoji, decorative Unicode ("★彡 𝓝𝓮𝔀 𝓨𝓮𝓪𝓻 彡★") and
 * the source's own typos ("trofy", "kabbadi", "Independance", "Shrijith",
 * the double space in "Mindlogicx 🏡 Family  🐄") are preserved exactly.
 *
 * SOURCE ROOT (read-only, NOT modified):
 *   /home/ranjith/Documents/ClaudeProjects/OfficeProjects/Mindlogicx_India/mlx-website-2025-frontend
 *
 * SOURCE FILES READ
 * -----------------
 * Route / metadata:
 *   src/app/mindlogicxian_club/page.tsx
 *   src/seoConfig.ts                                      ("/mindlogicxian_club" entry)
 *
 * Page tree (in render order):
 *   src/app/mindlogicxian_club/MindlogicxianClubComp.tsx   (entry point)
 *   src/components/Common/PageBanner.tsx                   (renders pageTitle in an h2)
 *   src/components/MindlogicxianClub/WelcomeContent/page.tsx
 *   src/components/MindlogicxianClub/MlxClubWhoWeAre/page.tsx
 *   src/components/MindlogicxianClub/MlxClubObjects/page.tsx
 *   src/components/MindlogicxianClub/MlxClubGovernBoard/page.tsx
 *   src/components/MindlogicxianClub/MlxClubActivity/page.tsx
 *   src/commonComponents/MlxNewGallery/page.tsx            (MOCK_GALLERY_DATA + "Memories")
 *
 * Gallery sub-views (read for UI labels only — they hold no page content):
 *   src/commonComponents/MlxNewGallery/YearStackGallery.tsx
 *   src/commonComponents/MlxNewGallery/YearSection.tsx
 *   src/commonComponents/MlxNewGallery/SubStackSelectionView.tsx
 *   src/commonComponents/MlxNewGallery/SubStackCard.tsx
 *   src/commonComponents/MlxNewGallery/YearDetailView.tsx
 *   src/commonComponents/MlxNewGallery/ImageCard.tsx
 *   src/commonComponents/MlxNewGallery/MlxGalleryModal.tsx
 *   src/types/types.ts                                     (Image / SubStack / YearGroup shapes)
 *
 * NOT RENDERED — deliberately excluded:
 *   src/components/MindlogicxianClub/MlxClubGallery/page.tsx
 *       exists in the folder but is never imported by the page.
 *   src/commonComponents/MlxPhotoStack/page.tsx
 *       MlxPhotoStack is COMMENTED OUT in MindlogicxianClubComp.tsx line 40.
 *
 * ============================================================================
 * THE pageTitle="." ODDITY  —  ACTION REQUIRED
 * ============================================================================
 * MindlogicxianClubComp.tsx lines 32-33 are, in effect:
 *
 *   [commented out] PageBanner pageTitle="Mindlogicxians Club"
 *                   BGImage="/images/mindlogicx/mindlogicxian_club/Mindlogicxians_Club_Header.png"
 *   [live]          PageBanner pageTitle="."
 *                   BGImage="/assets/images/pages/club/mlx_club.webp"
 *
 * So the LIVE banner renders a single literal full stop (".") as its h2. That is
 * clearly a placeholder left in to suppress the heading over the artwork — it is
 * NOT a title. It has NOT been carried over as the page title. The "title" field
 * below is set to "Mindlogicxian Club"; the raw value is kept only in
 * "bannerTitleInSource" for the record and must never be rendered.
 *
 * The commented-out line shows the intended title was "Mindlogicxians Club"
 * (plural). The site is inconsistent about this and the CLIENT MUST PICK ONE:
 *   route / this file        : "Mindlogicxian Club"  (singular)
 *   commented-out banner     : "Mindlogicxians Club" (plural)
 *   WelcomeContent h3        : "Welcome to Mindlogicxians Club" (plural)
 *   body copy throughout     : "The Mindlogicxian Club" (singular)
 *   seoConfig.ts title       : "Mindlogicxian Club | Exclusive Community of Innovators & Technologists"
 *
 * ============================================================================
 * COMMENTED OUT IN THE SOURCE (recorded, not rendered)
 * ============================================================================
 * Entry file (MindlogicxianClubComp.tsx):
 *   - the first PageBanner (pageTitle "Mindlogicxians Club", BGImage
 *     /images/mindlogicx/mindlogicxian_club/Mindlogicxians_Club_Header.png)
 *   - MlxPhotoStack
 *
 * WelcomeContent/page.tsx line 20:   "About Us" (a strong paragraph)
 * MlxClubWhoWeAre/page.tsx line 14:  "Who We Are" h3 — that section now has NO heading
 * MlxClubActivity/page.tsx:          the "View Case Study" button (Link to
 *                                    /portfolio/portfolio-details/) and the decorative
 *                                    shape Image. The viewDetails and shapeImage data
 *                                    fields are therefore dead; recorded for completeness.
 *
 * MlxClubGovernBoard/page.tsx — 4 board members are COMMENTED OUT and do NOT appear
 * on the live page. Recorded below under each group's commentedOutMembers:
 *   Anjali        — Member - Cultural
 *   Riya Rai      — Member - Cultural
 *   Zabiulla A    — Member - Sports Committee
 *   Pranay Kumar  — Member - Sports Committee
 *
 * MlxNewGallery/page.tsx — commented-out gallery entries NOT included below:
 *   2008: "Employee Birthday Celebrations" (caption "June Birthdays");
 *         "Festivals & Cultural Events" (caption "Diwali 2024" — dated 2024 inside
 *         the 2008 stack)
 *   2014: "Workplace Fun & Engagement" ("Crazy Hat Day", "Holiday Decor");
 *         "Special Achievements & Recognition" ("Q3 Awards");
 *         "Monthly Carnival / Flash Events" ("Food Truck Friday")
 *   2017: "Employee Birthday Celebrations" ("Celebrating Q1 Birthdays");
 *         "Club Announcements & Highlights" ("Shutterbugs Exhibit")
 *   Every one of those points at https://picsum.photos/... PLACEHOLDER stock images.
 *   Also commented out: the 2025 "31st October" img_6.jpg, and the 2026 Kunal Mondal
 *   img_20.webp / img_21.webp.
 *
 * ============================================================================
 * IMAGES
 * ============================================================================
 * LOCAL images — every path was checked against the source project's public/
 * directory on 2026-10-13. RESULT: every local image referenced by a RENDERED
 * element EXISTS. Nothing is broken on the live page.
 *
 *   EXISTS  public/imagess/mindlogicx/header_banner/mlx_club.webp                        (live banner)
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/Mindlogicxians_Club_Logo.webp   (welcome logo)
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/mlx_club_wwr.webp               (who-we-are)
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/mlxclub_obj.webp                (objectives)
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/FoodFunDay.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/FlashMobs.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/KnowledgeBursts.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/MovieSaturdays.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/SportsActivities.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/WellnessEvents.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/CreativeContest.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/CulturalNights.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_activities/MonthlyCarnivals.webp
 *   EXISTS  public/imagess/mindlogicx/mindlogicxian_club/club_members/graphic_version/
 *             Sanjay.webp, Poovendhan.webp, Prasad.webp, praveen.webp (lower-case p),
 *             Priyanka.webp, Kritika.webp, Vini.webp, Arvind.webp, Srinivas.webp,
 *             KarthiM.webp, Akshay.webp, Himanshu.webp, Bose.webp, NageshK.webp,
 *             SiriKesari.webp                                      — all 15 live portraits EXIST
 *   EXISTS  .../graphic_version/Anjali.webp, Riya.webp, ZabiullaA.webp, PranayKumar.webp
 *             — files exist, but their board entries are commented out
 *   EXISTS  public/imagess/mindlogicx/leaders/key_leaders/empty_user.webp
 *             — imported as EmptyUser in MlxClubGovernBoard but NEVER USED. Dead import.
 *   EXISTS  public/images/mindlogicx/mindlogicxian_club/Mindlogicxians_Club_Header.png
 *             — the commented-out banner. Note it sits under "images/" (one s) while
 *             everything live sits under "imagess/" (two s). public/ also holds two
 *             unreferenced files: .../mindlogicxian_club/Mindlogicxians_Club_Header.webp
 *             and .../mindlogicxian_club/Mindlogicxians_Club_Logo_old.webp
 *
 *   MISSING FILES (dead data only — nothing visibly broken):
 *     public/imagess/case-studies/studie-shape7.webp   MISSING
 *     public/imagess/case-studies/studie-shape8.webp   MISSING
 *     public/imagess/case-studies/studie-shape9.webp   MISSING
 *   These are the shapeImage values on the last three Club Activities entries
 *   (Creative Contest, Cultural Nights, Carnivals). The element that would render
 *   them is commented out, so the broken references never surface. shape1 to shape6
 *   do exist. Do not reuse shapeImage without re-sourcing the artwork.
 *
 * REMOTE images — the whole "Memories" gallery (628 images) is served from
 * Mindlogicx's OWN Amazon S3 bucket:
 *     https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/<year>/...
 * These are NOT third-party stock, so they are recorded verbatim rather than nulled.
 * They are hard-coded static URLs in a client-side array named MOCK_GALLERY_DATA.
 * There is NO API and NO CMS behind the gallery and nothing is fetched — the
 * component's useEffect merely does setGalleryData(MOCK_GALLERY_DATA). Note the
 * array is literally named "MOCK". Remote URLs were NOT reachability-tested (no
 * network access during extraction); verify them before launch and ideally re-host.
 *
 * ============================================================================
 * THINGS THE CLIENT MUST CHECK
 * ============================================================================
 *  1. REAL PEOPLE'S NAMES AND ROLES. The 16 live Governing Board entries are real
 *     employees — verify every spelling and designation before publishing. Specific
 *     doubts visible in the source:
 *       - "Priyanka" (Secretary) and "CJ Priyanka" (Member - Food Committee) are
 *         listed as two separate people but SHARE THE SAME PORTRAIT FILE
 *         (Priyanka.webp). Either one person holds both roles, or a portrait is wrong.
 *       - Import aliases disagree with the displayed names: APoovendhan displays
 *         "A Poovendhan"; KrithikaTrivedi displays "Kritika Trivedi" (file
 *         Kritika.webp); Aravind displays "Arvind" (file Arvind.webp); ShrinivasGRugi
 *         displays "Shrinivas G Rugi" (file Srinivas.webp). Confirm transliterations.
 *       - Several members are single-name only (Prasad, Praveen, Priyanka, Akshay,
 *         Bose) — confirm whether surnames should be shown.
 *       - Confirm whether the 4 commented-out members (Anjali, Riya Rai, Zabiulla A,
 *         Pranay Kumar) should be restored or have left the committees.
 *  2. The banner "." placeholder and the Mindlogicxian / Mindlogicxians split (above).
 *  3. Who We Are renders with NO heading (its h3 is commented out), and its first
 *     line, "Building Unity Through Joy, One Moment at a Time", is a plain paragraph
 *     that reads like a strapline. Confirm the intended hierarchy.
 *  4. Club Activities: the "Team Outing" card uses the file FlashMobs.webp and the
 *     "Movies Mela" card uses MovieSaturdays.webp — filenames do not match the
 *     category names, suggesting cards were relabelled but the art was not swapped.
 *     "Food Fun Day" also has no description beyond its one-line title.
 *  5. Gallery captions are extremely repetitive: all 64 of the 2018 images share the
 *     caption "Christmas celebration", and all 24 of the 2019 images plus all 15 of
 *     the 2025 Yoga images are captioned "Sports Activities & Competitions" — wrong
 *     for the Yoga stack. Several 2026 stacks reuse whole paragraphs of marketing copy
 *     as alt text on dozens of images. Bad for accessibility and SEO; real per-image
 *     captions are recommended. 2018 also contains a duplicate: IMG-20181224-WA0017.jpg
 *     appears twice (ids "3" and "5").
 *  6. Named individuals appear inside gallery captions (for example "Kunal Mondal",
 *     Executive Director & COO, and "Shrijith In Josh"). Confirm consent and accuracy.
 *  7. Gallery years present are 2008, 2014, 2017, 2018, 2019, 2025, 2026. 2009-2013,
 *     2015, 2016 and 2020-2024 are absent. Confirm the gap is intentional.
 *  8. Club Activities viewDetails all point at "/portfolio/portfolio-details/", a
 *     leftover template route that is not part of this site. Dead data.
 * ============================================================================
 */

export const mindlogicxianClubPage = {
  title: 'Mindlogicxian Club',

  // Live banner background. The source passes pageTitle="." — see header note.
  bannerImage: '/assets/images/pages/club/mlx_club.webp',
  bannerTitleInSource: '.', // recorded verbatim — DO NOT RENDER
  commentedOutBanner: {
    pageTitle: 'Mindlogicxians Club',
    BGImage: '/images/mindlogicx/mindlogicxian_club/Mindlogicxians_Club_Header.png',
  },

  // src/seoConfig.ts — "/mindlogicxian_club"
  seo: {
    title: "Mindlogicxian Club | Exclusive Community of Innovators & Technologists",
    description:
      "Join the Mindlogicxian Club — an exclusive community for thinkers, creators, and change-makers driving innovation in AI, EdTech, HealthTech, LegalTech, and more. Access early insights, events, rewards, and networking opportunities.",
  },

  sections: [
    // ---------------------------------------------------------------------
    // 1. src/components/MindlogicxianClub/WelcomeContent/page.tsx
    // ---------------------------------------------------------------------
    {
      id: 'welcome',
      heading: "Welcome to Mindlogicxians Club",
      // Both lines render as bold paragraphs directly under the heading.
      strapline: [
        "Where Work Meets Celebration, and People Become a Community",
        "Connect. Collaborate. Celebrate.",
      ],
      logoImage: '/assets/images/pages/club/Mindlogicxians_Club_Logo.webp',
      logoAlt: '', // alt="" in source
      commentedOut: ["About Us"], // bold paragraph, line 20
      body: [
        "The Mindlogicxian Club is an employee-driven initiative launched by the leadership team of Mindlogicx to foster a vibrant, inclusive, and supportive workplace culture. It serves as a platform where every member of the Mindlogicx family can come together beyond work roles — to connect, celebrate, and collaborate.",
        "The club brings alive the spirit of togetherness by organizing festive celebrations, cross-functional bonding activities, and community-building events that inspire engagement, motivation, and unity across departments.",
        "By nurturing an environment where work feels like life and life blends beautifully into work, the Mindlogicxian Club ensures that our workplace is not just productive, but also joyful, meaningful, and deeply human.",
      ],
    },

    // ---------------------------------------------------------------------
    // 2. src/components/MindlogicxianClub/MlxClubWhoWeAre/page.tsx
    // ---------------------------------------------------------------------
    {
      id: 'who-we-are',
      heading: null, // the "Who We Are" h3 is COMMENTED OUT (line 14) — renders headingless
      headingInSource: "Who We Are",
      image: '/assets/images/pages/club/mlx_club_wwr.webp',
      imageAlt: '', // alt="" in source
      body: [
        "Building Unity Through Joy, One Moment at a Time",
        "The Mindlogicxian Club is a vibrant, employee-led initiative dedicated to fostering a culture of unity, inclusion, and shared purpose. We believe that happy employees are the most productive, and it is this belief that drives our efforts to create meaningful experiences that blend work with joy.",
        "Through regular activities, celebrations, and collaborative events, we aim to build a workplace where every individual feels valued, engaged, and inspired. The club empowers employees to become brand evangelists — aligning their energy and enthusiasm with the vision and goals of Mindlogicx.",
        "We don’t just work together — we grow, celebrate, and thrive together.",
      ],
    },

    // ---------------------------------------------------------------------
    // 3. src/components/MindlogicxianClub/MlxClubObjects/page.tsx
    //    Every bullet is bold in the source.
    // ---------------------------------------------------------------------
    {
      id: 'objectives',
      heading: "Objectives:", // verbatim, including the trailing colon
      image: '/assets/images/pages/club/mlxclub_obj.webp',
      imageAlt: '', // alt="" in source
      items: [
        "Foster unity and inclusion across all departments.",
        "Promote employee happiness and overall well-being.",
        "Celebrate festivals, milestones, and achievements.",
        "Encourage employees to become brand ambassadors.",
        "Build a culture of collaboration, creativity, and engagement.",
      ],
    },

    // ---------------------------------------------------------------------
    // 4. src/components/MindlogicxianClub/MlxClubGovernBoard/page.tsx
    //    The source renders four consecutive UNLABELLED rows — it has no
    //    sub-headings for the groups. The group ids below are ours, derived
    //    from the source's own state-variable names (kept in sourceKey) and
    //    from the designations. 16 members render live; 4 are commented out.
    //    Portraits are the illustrated "graphic_version" set.
    // ---------------------------------------------------------------------
    {
      id: 'governing-board',
      heading: "GOVERNING BOARD", // verbatim, all caps in source
      groups: [
        {
          id: 'office-bearers',
          sourceKey: 'clubLeaders',
          heading: null, // no group heading in source
          members: [
            { name: "Sanjay Kumar", designation: "President", image: '/assets/images/pages/club/Sanjay.webp' },
            { name: "A Poovendhan", designation: "Vice President", image: '/assets/images/pages/club/Poovendhan.webp' },
            { name: "Prasad", designation: "Treasurer", image: '/assets/images/pages/club/Prasad.webp' },
            { name: "Praveen", designation: "Coordinator", image: '/assets/images/pages/club/praveen.webp' },
            { name: "Priyanka", designation: "Secretary", image: '/assets/images/pages/club/Priyanka.webp' },
          ],
          commentedOutMembers: [],
        },
        {
          id: 'cultural',
          sourceKey: 'clubCulturalLeaders',
          heading: null,
          members: [
            { name: "Kritika Trivedi", designation: "Secretary - Cultural", image: '/assets/images/pages/club/Kritika.webp' },
            { name: "Vinod Kumar", designation: "Member - Cultural", image: '/assets/images/pages/club/Vini.webp' },
            { name: "Arvind", designation: "Member - Cultural", image: '/assets/images/pages/club/Arvind.webp' },
          ],
          commentedOutMembers: [ // in source but COMMENTED OUT — not live
            { name: "Anjali", designation: "Member - Cultural", image: '/imagess/mindlogicx/mindlogicxian_club/club_members/graphic_version/Anjali.webp' },
            { name: "Riya Rai", designation: "Member - Cultural", image: '/imagess/mindlogicx/mindlogicxian_club/club_members/graphic_version/Riya.webp' },
          ],
        },
        {
          id: 'food-committee',
          sourceKey: 'clubFoodCommitteeLeaders',
          heading: null,
          members: [
            { name: "Shrinivas G Rugi", designation: "Secretary - Food Committee", image: '/assets/images/pages/club/Srinivas.webp' },
            { name: "Karthi M", designation: "Member - Food Committee", image: '/assets/images/pages/club/KarthiM.webp' },
            { name: "Akshay", designation: "Member - Food Committee", image: '/assets/images/pages/club/Akshay.webp' },
            { name: "Himanshu SB", designation: "Member - Food Committee", image: '/assets/images/pages/club/Himanshu.webp' },
            // NOTE: same portrait file as "Priyanka" (Secretary) above — see header item 1.
            { name: "CJ Priyanka", designation: "Member - Food Committee", image: '/assets/images/pages/club/Priyanka.webp' },
          ],
          commentedOutMembers: [],
        },
        {
          id: 'sports-committee',
          sourceKey: 'clubSportsCommitteeLeaders',
          heading: null,
          members: [
            { name: "Bose", designation: "Secretary - Sports Committee", image: '/assets/images/pages/club/Bose.webp' },
            { name: "Nagesh K", designation: "Member - Sports Committee", image: '/assets/images/pages/club/NageshK.webp' },
            { name: "Siri Kesari", designation: "Member - Sports Committee", image: '/assets/images/pages/club/SiriKesari.webp' },
          ],
          commentedOutMembers: [ // in source but COMMENTED OUT — not live
            { name: "Zabiulla A", designation: "Member - Sports Committee", image: '/imagess/mindlogicx/mindlogicxian_club/club_members/graphic_version/ZabiullaA.webp' },
            { name: "Pranay Kumar", designation: "Member - Sports Committee", image: '/imagess/mindlogicx/mindlogicxian_club/club_members/graphic_version/PranayKumar.webp' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------------
    // 5. src/components/MindlogicxianClub/MlxClubActivity/page.tsx
    //    Source field names kept: "category" is the rendered h4, "title" is the
    //    rendered paragraph, "image" is a CSS background-image on the card.
    //    "shapeImage" and "viewDetails" are DEAD — the JSX using them is
    //    commented out. shape7/8/9 do not exist on disk (see header).
    // ---------------------------------------------------------------------
    {
      id: 'club-activities',
      heading: "Club Activities",
      subheading: "Where Every Day Brings a New Reason to Smile",
      items: [
        {
          category: "Food Fun Day",
          title: "A day to indulge, share, and bond over diverse flavors and team-cooked treats.",
          image: '/assets/images/pages/club/FoodFunDay.webp',
          shapeImage: '/imagess/case-studies/studie-shape1.webp', // DEAD
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
        {
          category: "Team Outing",
          title: "Team outing was fun-filled with games, laughter, bonding, delicious food, and memories that strengthened our connection outside the workplace.",
          image: '/assets/images/pages/club/FlashMobs.webp', // filename/category mismatch
          shapeImage: '/imagess/case-studies/studie-shape2.webp', // DEAD
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
        {
          category: "Knowledge Bursts",
          title: "Short, interactive micro-learning sessions sprinkled throughout the week that spark curiosity and nurture a culture of continuous learning.",
          image: '/assets/images/pages/club/KnowledgeBursts.webp',
          shapeImage: '/imagess/case-studies/studie-shape3.webp', // DEAD
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
        {
          category: "Movies Mela",
          title: "Relaxed weekend screenings that bring teams together over stories, popcorn, and laughter.",
          image: '/assets/images/pages/club/MovieSaturdays.webp', // filename/category mismatch
          shapeImage: '/imagess/case-studies/studie-shape4.webp', // DEAD
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
        {
          category: "Sports Activities",
          title: "Friendly competitions and games that build team spirit, fitness, and healthy rivalry.",
          image: '/assets/images/pages/club/SportsActivities.webp',
          shapeImage: '/imagess/case-studies/studie-shape5.webp', // DEAD
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
        {
          category: "Wellness Events",
          title: "Sessions focused on physical, mental, and emotional well-being to help employees recharge and thrive.",
          image: '/assets/images/pages/club/WellnessEvents.webp',
          shapeImage: '/imagess/case-studies/studie-shape6.webp', // DEAD
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
        {
          category: "Creative Contest",
          title: "Showcasing employee talents through art, writing, design, and other creative expressions.",
          image: '/assets/images/pages/club/CreativeContest.webp',
          shapeImage: '/imagess/case-studies/studie-shape7.webp', // DEAD — FILE MISSING on disk
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
        {
          category: "Cultural Nights",
          title: "Evenings dedicated to celebrating diverse traditions, music, dance, and attire from across the country.",
          image: '/assets/images/pages/club/CulturalNights.webp',
          shapeImage: '/imagess/case-studies/studie-shape8.webp', // DEAD — FILE MISSING on disk
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
        {
          category: "Carnivals",
          title: "Themed monthly gatherings filled with games, performances, stalls, and surprises for everyone.",
          image: '/assets/images/pages/club/MonthlyCarnivals.webp',
          shapeImage: '/imagess/case-studies/studie-shape9.webp', // DEAD — FILE MISSING on disk
          viewDetails: '/portfolio/portfolio-details/', // DEAD — template route
        },
      ],
      commentedOutButtonLabel: "View Case Study", // the only button label on the page
    },

    // ---------------------------------------------------------------------
    // 6. src/commonComponents/MlxNewGallery/page.tsx
    //    Static, hard-coded client-side data (source array: MOCK_GALLERY_DATA).
    //    NO API, NO CMS, NO fetch of any kind -- the component's useEffect only
    //    copies the constant into state. 628 images in total, every one on
    //    Mindlogicx's own S3 bucket (mlxwebsite.s3.ap-south-1.amazonaws.com);
    //    none local, none third-party stock, so none nulled.
    //    Shape mirrors src/types/types.ts exactly: YearGroup { year, subStacks },
    //    SubStack { title, images }, Image { id, src, alt, title }. Stack titles
    //    keep their emoji and decorative Unicode verbatim. imageCount fields are
    //    ours (derived counts), everything else is source data.
    // ---------------------------------------------------------------------
    {
      id: 'memories-gallery',
      heading: "Memories",
      sourceData: 'MOCK_GALLERY_DATA',
      dataSource: 'static-hardcoded', // not an API, not a CMS
      remoteBaseUrl: 'https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/',
      totalImages: 628,
      years: [
        {
          year: 2008,
          imageCount: 7,
          subStacks: [
            {
              title: "Sports Activities & Competitions",
              imageCount: 4,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2008/club0.jpg", alt: "Volleyball Teaming", title: "Volleyball Teaming" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2008/club2.jpg", alt: "Celebration with trofy", title: "Celebration with trofy" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2008/club3.jpg", alt: "While play kabbadi", title: "While play kabbadi" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2008/club5.jpg", alt: "While play carrom", title: "While play carrom" },
              ],
            },
            {
              title: "Workplace Fun & Engagement",
              imageCount: 3,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2008/club4.jpg", alt: "Rangoli champions", title: "Rangoli champions" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2008/club6.jpg", alt: "MLX Team", title: "MLX Team" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2008/club7.jpg", alt: "Traditional wear", title: "Traditional wear" },
              ],
            },
          ],
        },
        {
          year: 2014,
          imageCount: 3,
          subStacks: [
            {
              title: "Sports Activities & Competitions",
              imageCount: 2,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2014/IMG_1288.JPG", alt: "Team at a ground", title: "Team at a ground" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2014/IMG_1285.JPG", alt: "MLX Team", title: "MLX Team" },
              ],
            },
            {
              title: "Festivals & Cultural Events",
              imageCount: 1,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2014/cxdww.png", alt: "Independance Day Celebrations", title: "Independance Day Celebrations" },
              ],
            },
          ],
        },
        {
          year: 2017,
          imageCount: 4,
          subStacks: [
            {
              title: "Sports Activities & Competitions",
              imageCount: 1,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2017/dd.png", alt: "Volleyball Winners", title: "Volleyball Winners" },
              ],
            },
            {
              title: "Festivals & Cultural Events",
              imageCount: 1,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2017/vg.png", alt: "Women's day Celebrations", title: "Women's day Celebrations" },
              ],
            },
            {
              title: "Workplace Fun & Engagement",
              imageCount: 2,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2017/IMG-20161230-WA0027.jpg", alt: "Shrijith In Josh", title: "Shrijith In Josh" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2017/IMG-20161230-WA0046.jpg", alt: "Lunch with Team", title: "Lunch with Team" },
              ],
            },
          ],
        },
        {
          year: 2018,
          imageCount: 64,
          subStacks: [
            {
              title: "Workplace Fun & Engagement",
              imageCount: 64,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0029.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0015.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0017.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0016.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0017.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0018.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0019.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0022.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0023.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0024.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0025.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0026.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0027.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0028.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0030.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0031.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0032.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0033.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0034.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0035.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0036.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0037.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0038.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0039.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "25", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0040.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "26", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0041.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "27", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0042.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "28", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0043.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "29", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0044.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "30", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0045.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "31", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0046.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "32", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0047.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "33", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0048.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "34", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0049.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "35", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0050.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "36", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0051.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "37", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0052.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "38", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0053.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "39", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0054.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "40", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0055.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "41", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0056.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "42", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0057.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "43", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0058.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "44", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0059.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "45", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0060.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "46", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0061.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "47", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0062.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "48", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0063.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "49", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0064.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "50", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0065.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "51", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0066.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "52", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0067.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "53", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0068.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "54", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0069.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "55", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0070.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "56", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0071.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "57", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0072.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "58", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0073.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "59", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0074.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "60", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0075.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "61", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0076.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "62", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0077.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "63", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0078.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
                { id: "64", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2018/IMG-20181224-WA0079.jpg", alt: "Christmas celebration", title: "Christmas celebration" },
              ],
            },
          ],
        },
        {
          year: 2019,
          imageCount: 24,
          subStacks: [
            {
              title: "Sports Activities & Competitions",
              imageCount: 24,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_170108.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_122630.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_124908.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_130313.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_130459.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_134442.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_160406.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_170137.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_170213.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190105_174009.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190621_114155.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20190621_120233.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_185300.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_185305.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_185317.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_185319_1.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_185321.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_185607.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_195028.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_195119.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_195220.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_195221.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_195328.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2019/IMG_20191230_200103.jpg", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
              ],
            },
          ],
        },
        {
          year: 2025,
          imageCount: 169,
          subStacks: [
            {
              title: "🧘 🧘‍♂️ 🧘‍♀️ Yoga for Life 🌿 🌿 🌿",
              imageCount: 15,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07043.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07048.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07061.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07077.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07084.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07093.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07097.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07114.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07461.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07465.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07472.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07477.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07480.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07497.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/DSC07500.JPG", alt: "Sports Activities & Competitions", title: "Sports Activities & Competitions" },
              ],
            },
            {
              title: "🧡 🤍 💚 15 Aug 2025 🕊️🇮🇳 Independence day 🪖 🚁",
              imageCount: 16,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/1.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/2.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/3.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/4.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/5.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/6.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/7.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/8.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/9.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/10.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/11.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/12.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/13.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/14.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/15.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/15+Aug+2025+Independence+day/16.webp", alt: "15 Aug 2025 Independence day", title: "15 Aug 2025 Independence day" },
              ],
            },
            {
              title: "19th July saturday 🏏 activities ⚽ 🏀",
              imageCount: 13,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/1.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/2.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/3.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/4.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/5.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/6.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/7.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/8.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/9.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/10.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/11.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/12.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/19th+July+saturday+activities/13.webp", alt: "19th July saturday activities", title: "19th July saturday activities" },
              ],
            },
            {
              title: "🪔 26 Aug 2025 🛕 Ganesh Chaturthi 🐘",
              imageCount: 7,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/26+Aug+2025+Ganesh+Chaturthi/1.webp", alt: "26 Aug 2025 Ganesh Chaturthi", title: "26 Aug 2025 Ganesh Chaturthi" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/26+Aug+2025+Ganesh+Chaturthi/2.webp", alt: "26 Aug 2025 Ganesh Chaturthi", title: "26 Aug 2025 Ganesh Chaturthi" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/26+Aug+2025+Ganesh+Chaturthi/3.webp", alt: "26 Aug 2025 Ganesh Chaturthi", title: "26 Aug 2025 Ganesh Chaturthi" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/26+Aug+2025+Ganesh+Chaturthi/4.webp", alt: "26 Aug 2025 Ganesh Chaturthi", title: "26 Aug 2025 Ganesh Chaturthi" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/26+Aug+2025+Ganesh+Chaturthi/5.webp", alt: "26 Aug 2025 Ganesh Chaturthi", title: "26 Aug 2025 Ganesh Chaturthi" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/26+Aug+2025+Ganesh+Chaturthi/6.webp", alt: "26 Aug 2025 Ganesh Chaturthi", title: "26 Aug 2025 Ganesh Chaturthi" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/26+Aug+2025+Ganesh+Chaturthi/7.webp", alt: "26 Aug 2025 Ganesh Chaturthi", title: "26 Aug 2025 Ganesh Chaturthi" },
              ],
            },
            {
              title: "29 Aug 2025 🎂 Birthday Celebration 🎉",
              imageCount: 16,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/1.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/2.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/3.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/4.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/5.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/6.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/7.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/8.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/9.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/10.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/11.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/12.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/13.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/14.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/15.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/29+Aug+2025+Birthday+Celebration/16.webp", alt: "29 Aug 2025 Birthday Celebration", title: "29 Aug 2025 Birthday Celebration" },
              ],
            },
            {
              title: "30 June 2025 🎂 Birthday Celebration 🎂",
              imageCount: 20,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/1.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/2.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/3.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/4.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/5.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/6.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/7.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/8.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/9.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/10.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/11.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/12.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/13.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/14.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/15.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/16.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/17.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/18.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/19.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/30+June+2025+Birthday+Celebration/20.webp", alt: "30 June 2025 Birthday Celebration", title: "🎉 Happy Birthday 👑" },
              ],
            },
            {
              title: "31 July 2025 👑 Birthday Star 👑",
              imageCount: 20,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/1.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/2.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/3.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/4.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/5.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/6.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/7.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/8.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/9.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/10.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/11.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/12.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/13.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/14.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/15.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/16.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/17.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/18.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/19.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31+July+2025+Birthday+Celebration/20.webp", alt: "31 July 2025 Birthday Celebration", title: "🥳 Birthday Celebration Time 🎈" },
              ],
            },
            {
              title: "31st October 2025 🎂 Birthday Celebration 🎉",
              imageCount: 16,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_1.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_2.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_3.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_4.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_5.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_7.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_8.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_9.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_10.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_11.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_12.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_13.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_14.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_15.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_16.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/31st+Oct+2025+Birthday+Celebration/img_17.jpg", alt: "31 October 2025 Birthday Celebration", title: "✨ Wishing You a Sweet Birthday 🎂" },
              ],
            },
            {
              title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025 🎨🎥",
              imageCount: 23,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_1.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_2.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_3.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_4.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_5.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_6.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_7.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_8.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_9.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_10.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_11.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_12.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_13.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_14.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_15.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_16.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_17.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_18.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_19.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_20.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_21.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_22.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/Mediax_DBIMA_Collaboration_09-12-2025/img_23.webp", alt: "Mediax and DBIMA unite in 2025 to redefine the future of cinema, graphics, and 3D editing", title: "🎬✨ Mediax 🤝 DBIMA Collaboration 2025" },
              ],
            },
            {
              title: "🎄 Christmas ☃️ Vibes 🎁 🎅 🤶",
              imageCount: 23,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_1.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_2.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_3.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_4.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_5.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_6.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_7.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_8.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_9.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_10.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_11.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_12.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_13.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_14.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_15.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_16.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_17.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_18.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_19.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_20.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_21.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_22.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2025/christmas_2025/img_23.webp", alt: "🎄 Merry Christmas 🎄", title: "🎄 Merry Christmas 🎄" },
              ],
            },
          ],
        },
        {
          year: 2026,
          imageCount: 357,
          subStacks: [
            {
              title: "★彡 𝓝𝓮𝔀 𝓨𝓮𝓪𝓻 彡★ Grand Celebrations 🥳 With All Mindlogicxians",
              imageCount: 31,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_1.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_2.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_3.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_4.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_5.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_6.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_7.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_8.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_9.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_10.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_11.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_12.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_13.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_14.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_15.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_16.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_17.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_18.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_19.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_20.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_21.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_22.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_23.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_24.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "25", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_25.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "26", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_26.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "27", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_27.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "28", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_28.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "29", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_29.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "30", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_30.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
                { id: "31", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/new_year_2026/img_31.webp", alt: "New year 2026 grand celebration", title: "New year 2026 grand celebration" },
              ],
            },
            {
              title: "🌾 🌞 Celebrate Pongal Mindlogicx 🏡 Family  🐄 🌴",
              imageCount: 24,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_1.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_2.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_3.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_4.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_5.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_6.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_7.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_8.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_9.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_10.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_11.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_12.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_13.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_14.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_15.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_16.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_17.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_18.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_19.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_20.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_21.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_22.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_23.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/pongal_2026/img_24.webp", alt: "2026 Pongal celebration", title: "2026 Pongal celebration" },
              ],
            },
            {
              title: "🏆 MPL Season 1🥇 – 2026 🏏",
              imageCount: 59,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_1.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_2.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_3.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_4.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_5.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_6.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_7.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_8.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_9.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_10.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_11.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_12.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_13.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_14.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_15.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_16.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_17.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_18.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_19.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_20.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_21.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_22.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_23.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_24.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "25", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_25.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "26", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_26.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "27", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_27.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "28", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_28.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "29", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_29.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "30", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_30.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "31", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_31.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "32", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_32.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "33", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_33.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "34", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_34.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "35", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_35.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "36", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_36.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "37", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_37.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "38", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_38.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "39", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_39.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "40", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_40.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "41", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_41.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "42", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_42.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "43", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_43.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "44", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_44.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "45", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_45.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "46", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_46.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "47", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_47.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "48", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_48.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "49", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_49.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "50", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_50.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "51", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_51.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "52", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_52.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "53", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_53.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "54", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_54.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "55", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_55.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "56", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_56.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "57", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_57.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "58", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_58.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
                { id: "59", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mpl_season_1_2026/img_59.webp", alt: "Mindlogicx Premier League", title: "Mindlogicx Premier League" },
              ],
            },
            {
              title: "🌼 Holi 2026- A Celebration of 🎨Colors & 🕺Culture",
              imageCount: 42,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_1.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_2.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_3.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_4.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_5.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_6.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_7.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_8.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_10.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_11.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_12.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_13.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_14.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_15.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_16.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_17.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_18.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_19.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_20.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_21.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_22.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_23.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_24.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "25", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_25.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "26", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_26.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "28", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_28.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "29", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_29.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "30", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_30.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "31", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_31.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "32", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_32.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "33", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_33.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "34", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_34.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "35", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_35.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "36", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_36.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "37", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_37.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "38", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_38.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "39", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_39.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "40", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_40.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "41", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_41.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "42", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_42.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "43", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_43.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
                { id: "44", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/holi_04_03_2026/img_44.webp", alt: "A Celebration of Colors & Culture", title: "A Celebration of Colors & Culture" },
              ],
            },
            {
              title: "🌸 Women’s Day Celebration",
              imageCount: 63,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_1.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_2.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_3.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_4.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_5.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_6.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_7.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_8.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_9.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_10.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_11.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_12.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_13.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_14.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_15.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_16.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_17.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_18.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_19.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_20.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_21.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_22.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_23.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_24.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "25", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_25.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "26", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_26.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "27", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_27.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "28", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_28.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "29", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_29.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "30", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_30.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "31", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_31.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "32", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_32.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "33", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_33.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "34", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_34.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "35", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_35.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "38", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_38.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "39", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_39.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "40", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_40.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "41", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_41.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "42", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_42.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "43", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_43.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "44", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_44.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "45", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_45.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "46", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_46.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "47", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_47.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "48", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_48.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "49", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_49.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "50", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_50.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "51", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_51.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "52", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_52.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "53", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_53.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "54", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_54.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "55", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_55.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "56", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_56.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "57", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_57.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "58", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_58.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "59", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_59.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "60", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_60.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "61", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_61.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "62", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_62.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "63", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_63.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "64", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_64.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
                { id: "65", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/womens_day_march_2026/img_65.webp", alt: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day.", title: "💐 Celebrating the strength, dedication, and achievements of the incredible women in our workplace who inspire excellence every day." },
              ],
            },
            {
              title: "🎉 March Birthday Celebrations",
              imageCount: 29,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_0.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_1.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_2.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_3.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_4.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_5.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_6.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_7.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_8.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_9.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_10.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_11.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_12.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_13.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_14.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_15.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_16.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_17.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_18.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_19.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_20.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_21.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_22.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_23.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "25", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_24.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "26", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_25.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "27", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_26.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "28", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_27.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
                { id: "29", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_club_march_birthday_2026/img_28.webp", alt: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements.", title: "🎂 Celebrating the wonderful team members born in March and wishing them happiness, success, and a year filled with great achievements." },
              ],
            },
            {
              title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓",
              imageCount: 76,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_1.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_2.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_3.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_4.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_5.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_6.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_7.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_8.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_9.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_11.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_12.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_13.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_10.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_14.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_15.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_16.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_17.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_18.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_19.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "20", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_20.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "21", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_21.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_22.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_23.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_24.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "25", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_25.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "26", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_26.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "28", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_28.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "29", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_29.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "30", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_30.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "31", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_31.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "32", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_32.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "33", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_33.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "34", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_34.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "35", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_35.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "36", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_36.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "37", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_37.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "38", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_38.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "39", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_39.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "40", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_40.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "41", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_41.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "42", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_42.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "43", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_43.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "44", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_44.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "45", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_45.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "46", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_46.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "47", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_47.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "48", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_48.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "49", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_49.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "50", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_50.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "51", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_51.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "52", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_52.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "53", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_53.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "54", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_54.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "55", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_55.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "56", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_56.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "57", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_57.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "58", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_58.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "59", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_59.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "60", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_60.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "61", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_61.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "62", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_62.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "63", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_63.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "64", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_64.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "65", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_65.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "66", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_66.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "67", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_67.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "68", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_68.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "69", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_69.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "70", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_70.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "71", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_71.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "72", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_72.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "73", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_73.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "74", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_74.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "75", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_75.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "76", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_76.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
                { id: "77", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/ie_ng_launch/img_77.webp", alt: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓", title: "🎯 Celebrating the Launch🚀 of IntelliEXAMS NextGen 👨‍🎓" },
              ],
            },
            {
              title: "🎉 Celebrating the Birthday of Kunal Mondal 🌟 Executive Director & COO",
              imageCount: 24,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_1.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_2.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_3.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_4.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_5.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_6.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_7.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_8.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_9.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "10", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_10.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "11", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_11.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "12", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_12.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "13", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_13.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "14", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_14.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "15", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_15.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "16", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_16.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "17", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_17.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "18", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_18.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "19", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_19.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "22", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_22.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "23", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_23.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "24", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_24.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "25", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_25.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
                { id: "26", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/kunal_mondal_birthday_2026/img_26.webp", alt: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization", title: "we celebrate the birthday of Kunal Mondal, our respected Executive Director & COO. His visionary leadership, dedication, and commitment continue to inspire excellence and drive success across the organization" },
              ],
            },
            {
              title: "🎬 Team Outing to PVR Cinemas",
              imageCount: 9,
              images: [
                { id: "1", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_1.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
                { id: "2", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_2.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
                { id: "3", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_3.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
                { id: "4", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_4.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
                { id: "5", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_5.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
                { id: "6", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_6.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
                { id: "7", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_7.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
                { id: "8", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_8.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
                { id: "9", src: "https://mlxwebsite.s3.ap-south-1.amazonaws.com/MlxClub/Gallery/2026/mlx_pvr_visit_apr_2026/img_9.webp", alt: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas.", title: "🍿 A fun-filled team outing where everyone came together to enjoy a great movie experience, strengthen bonds, and create memorable moments at PVR Cinemas." },
              ],
            },
          ],
        },
      ],
      // UI copy from the gallery sub-view components (labels, states, aria-labels).
      ui: {
        loading: "Loading gallery...",
        empty: "No images found for this category.",
        autoplayLabel: "Autoplay",
        ariaViewYear: "View photos from {year}",      // YearSection.tsx template literal
        ariaViewSubStack: "View photos for {title}",  // SubStackCard.tsx template literal
        ariaBackToGallery: "Back to gallery view",
        ariaBackToCategories: "Back to categories view",
        ariaStartSlideshow: "Start slideshow for this category",
        ariaCloseImage: "Close image view",
        ariaPrevImage: "Previous image",
        ariaNextImage: "Next image",
        ariaZoomIn: "Zoom in",
        ariaZoomOut: "Zoom out",
        ariaEnterFullscreen: "Enter fullscreen",
        ariaExitFullscreen: "Exit fullscreen",
        ariaPlaySlideshow: "Play slideshow",
        ariaPauseSlideshow: "Pause slideshow",
      },
    },
  ],
};

export default mindlogicxianClubPage;
