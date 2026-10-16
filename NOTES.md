# MLX India (build 3) — notes

React + Vite rebuild of the Mindlogicx site on the **lemonsqueezy.com** design
pattern. Same content as `MLX_India_New_Soruce_2`; different pattern.

```bash
npm run dev     # http://localhost:5178
```

`_2` (Zefxa) is untouched and stays as the reference/fallback.

## How this is put together

| Layer | Where | Notes |
|---|---|---|
| Design pattern | `src/styles/ls.css`, `ls-responsive.css` | Tokens + primitives. **The pattern lives here; do not re-implement it in a section.** |
| Brand colour | `:root` in `ls.css` | Two values, `--brand-purple` and `--brand-cyan`. Everything else is derived from them. Rebrand = change those two. **See the palette section below first** — the roles are not interchangeable. |
| Content | `src/content/site.js`, `about.js` | Copied **byte-for-byte** from build 2. Components read from here; nothing is hard-coded in JSX. |
| Sections | `src/components/home/`, `about/` | One component per section. |
| Primitives | `src/components/common/` | `SectionIntro`, `Card`, `Pill`, `InfoTabs`, `FeatureLayout`, `TintPanel`, `Person`, `PageHero`, `Html`, `icons`. |

No vendor stylesheets and no cascade order to protect — `main.jsx` imports the
two sheets and that is the whole CSS pipeline. Build 2 needed Bootstrap,
animate.css, FontAwesome, an icon webfont and a display font `<link>`ed out of
`/public`; none of them survived.

## What the pattern is

Every number below was read off the live reference with `getComputedStyle`,
not estimated from a screenshot.

| | |
|---|---|
| Container | `1480px` (widened from the reference's 1152px — see below) |
| Bands | alternating `#ffffff` ↔ `#f7f7f8`, plus one solid-cyan strip and the ink footer |
| Display | **weight 400**: h1 `80/1.0`, h2 `56`, h2--sm `48`, h3 `38`, h4 `26` |
| Body | `18px/1.6`, `#6c6c89`; ink `#121217` |
| Eyebrow | `14px`, uppercase, `letter-spacing: 2px` |
| Index | mono, `14px` — `01`, `D/1`, `V/3`. The signature motif. |
| Cards | `8px` radius, `40px` padding, **no shadow, no border** |
| Pills | `40px` radius, `12px 24px`, weight 500, no shadow |

Three things are load-bearing and will break the resemblance if changed:

1. **Flatness.** No shadows, no card borders, no gradients, no decorative
   shapes. A card is told apart from the page by background tint alone. The one
   exception in the whole build is the header's 1px hairline once scrolled.
2. **Weight 400 headings at very large sizes.** Reaching for bold to add
   emphasis is the single change that would stop this reading as the reference.
3. **Alternating bands.** Two sections of the same background touching is what
   the rhythm is built to avoid. Reordering `SECTIONS` means re-checking it —
   adding or removing one section inverts every band below it. Removing the
   leadership grid from the home page is what moved `Newsroom` from white to
   smoke and `Cta` from smoke to white.

The footer is the one exception to all three: a dark `--ink` band, by request.
Its foreground colours are declared as local custom properties at the top of
the `FOOTER` block in `ls.css`, with the measured contrast of each against that
background. **`--grey-500` is not usable there** — it is the body colour
everywhere else on the site but measures 3.7:1 on ink, under AA. Reaching for
it out of habit is the easy mistake in that block.

Three things in the footer are not CSS and are easy to miss when changing it:
the brand mark must be `company.logoWhite` (the full-colour mark's grey
wordmark disappears into the band), the subscribe button must be the `light`
pill rather than `solid` (solid is ink on white, so it vanishes into its own
background), and `.ls-totop` — which floats over the footer — is
`--accent-text` (purple) rather than `--ink` for the same reason: it has to
clear 3:1 against the white sections, the smoke sections and the ink footer
alike.

## Substitutions from the reference

- **Circular Pro Book → Roboto** (requested). Commercial licence, so the
  display face had to change. Roboto is a grotesque where Circular is a
  geometric, so display tracking is relaxed from the reference's `-0.04em` to
  `-0.03em`; at `-0.04em` Roboto's narrower counters collide and the headings
  read cramped. `Roboto Mono` carries the indices.
- **The reference's whole palette → two brand colours**, by request:
  `#712d7b` (purple) and `#00aeef` (MLX cyan). Its nine-step accent ramp and
  six pastel washes are gone; every tint, wash and hover in `ls.css` is now
  derived from those two with `color-mix`, so the file contains no third hue.

## The two-colour palette — read this before colouring anything

The two are **near-opposites in contrast**, which is the single fact that
governs how they are used:

| | on white | on ink `#121217` |
|---|---|---|
| purple `#712d7b` | **8.89:1** | 2.10:1 |
| cyan `#00aeef` | **2.53:1** | **7.38:1** |

Cyan is not usable as a text colour on a light background — 2.53:1 is under
AA (4.5) and under even the 3:1 floor for UI shapes — and it cannot hold a
white label as a button. Purple is the reverse: it disappears on the dark
footer. So the roles split:

| Token | Is | Used for |
|---|---|---|
| `--accent-text` | purple | every coloured word, link, icon and primary button on a light band |
| `--accent-text-dark` | cyan | the same jobs on the ink footer |
| `--accent-fill` | cyan | solid bands and decoration |
| `--on-accent-fill` | ink | the only colour that reads on cyan (7.38:1) |

**Reaching for `--brand-cyan` to colour a word on a white band is the mistake
this block exists to prevent.**

Five consequences that are not obvious:

1. **The primary button is purple**, not the pattern's ink. Cyan buttons
   exist, but only with an ink label.
2. **The closing CTA band is cyan with ink type.** White on it would be
   2.53:1. Its pill is `solid` (purple) rather than `light` — a white pill on
   cyan is a 2.53:1 edge.
3. **The hero's coloured heading run is purple on every slide**, not the
   slide's own colour. At 55px it still needs 3:1 and cyan gives 2.53:1.
4. **The active pagination dot is purple on every slide**, for the same
   reason — it is the control that says which slide you are on.
5. **Per-product colour alternates by position, not by product.** The
   carousel runs in comp order and `products` in catalogue order, so keying
   the colour to the slug left the platforms row reading purple, purple,
   cyan, cyan, purple. Each section alternates on its own index instead; with
   two colours the colour is rhythm, not identity. `accent` and `onAccent`
   always travel together, because the two take opposite labels.

Audited in the browser: 35 brand-coloured elements on the home page and 45 on
About, every one at or above its threshold. The weakest are the cyan "Learn
More" buttons at 7.38:1 and the cyan round buttons, whose fill is 2.36:1
against the band and which therefore carry a 1px ring in a darkened cut of
their own colour to give the control a 4.32:1 edge.

## Section mapping

Chosen to fit the content, not to copy the reference's page order.

**Home** — `hero (full screen) → what we do → where we apply it → strengths → how we make it intelligent → why mindlogicx → memberships`

Seven sections, banding `white / smoke / white / smoke / ink / ink / white`.

**There is no closing call to action.** The band that used to end the page was
a headline plus a "Partner With Us" button; that call to action was removed
everywhere on 2026-10-12 and the band went with it rather than being left as a
headline with nothing to click. The memberships strip now closes the page, and
its being light is what stops `ink → ink → dark footer` running the last third
of the page together. `components/home/Cta.jsx` and the `cta` content both
survive — see the note on that export in `site.js`.
**Re-derive this whenever a section is added or removed** — it has flipped on
nearly every revision, and two same-coloured bands meeting normally stack
their padding into a dead gap.

The two ink bands at the end are the one deliberate exception. They are told
apart by the photograph: Why Mindlogicx is a full-bleed picture, MindGENIE is
flat ink. **That photograph is the only thing separating them** — drop it and
the two run together into one very long dark stretch.

**The hero is exactly one screen tall**:
`calc(100dvh - var(--header-h))`, so its bottom edge lands on the fold rather
than 88px past it. `dvh` not `vh` — on mobile browsers `vh` is measured with
the address bar hidden, so a `100vh` hero is taller than what you can see. A
`vh` line precedes it as a fallback, and `min-height: 560px` stops a short
desktop window crushing the heading into the button. `--header-h` is a token
so the bar and the hero cannot drift apart.

**Dropped from this page, all by request.** Each keeps its component file and
its content in `site.js`, so restoring one is an import plus a line in
`SECTIONS` — plus flipping the bands below it back.

| Section | Component | Content |
|---|---|---|
| Our Leadership | `home/Leadership.jsx` | `team` |
| About Mindlogicx | `home/About.jsx` | `about` |
| Domains We Operate | `home/Domains.jsx` | `process` |
| Newsroom | `home/Newsroom.jsx` | `blog` |
| Our Focus | `home/Focus.jsx` | `services` |
| Our Platforms (card grid) | `home/Platforms.jsx` | `projects` |
| Our Platforms (split layout) | `home/PlatformsAlt.jsx` | `products` |
| Product wordmark marquee | `home/Brands.jsx` | `products` |

**On the platforms sections — both are now off the page.** Two designs for the
same five products were built so they could be compared: `Platforms.jsx` (a
uniform 3-up card grid inside the measure) and `PlatformsAlt.jsx` (the
full-bleed split layout built to the supplied comp). The card grid was dropped
first, then the split layout, so **no section on Home names the five Intelli
products any more** — they survive on the page only as the Technology
submenu's leaves. The split layout is still documented below; its component
and its comp-faithful CSS are intact, so restoring it is one import and one
line in `SECTIONS`.

**Worth knowing before this ships:** a large share of `site.js` is now
unrendered — Home no longer describes the company in prose, nor lists the
domains, the newsroom, the leadership, the focus pillars, the wordmarks or the
platforms. All of it is still in `site.js`; only `/about` renders any. The
footer still links to domain and newsroom routes that render `Placeholder`.

| Content | Section | Why || Content | Section | Why |
|---|---|---|
| `heroSlides` | **hero carousel** (5 product slides) | See below. The old company-level `hero` export is retired and no longer rendered. |
| `brands` / `products` | solid-cyan wordmark **marquee** | Full-bleed, scrolling right to left. See below. |
| `about` | two-up feature band | The reference's equivalent band is centred type with no picture, but this content has a photograph *and* two one-line claims that want to be a list. Neither has anywhere to go in a centred paragraph. |
| `services` (Our Focus, 3) | **info-tabs** `01`–`03` | Panels are `mlx/about/stand-1..3.webp`, unused on both previous builds. |
| `process` (Domains, 4) | 4-card grid `D/1`–`D/4` | Numbered because this content has no short label to use instead. |
| `projects` (Platforms, 5) | 3-up media cards | Index is the platform's own tagline, already uppercased by the content module. `--3` not `--5`: five columns in 1152px give a 190px card, narrower than its own padding. |
| `products` (Platforms, 5) | **full-bleed split layout** — the alternative design, see below | |
| `testimonials` (Our Strength, 3) | 3-card grid | Index is each item's own label (STRATEGY / BRAND / TECHNOLOGY). |
| ~~`team` (4)~~ | ~~portrait grid~~ | **Removed by request.** `components/home/Leadership.jsx` is kept and `team` is still in `site.js`; restoring it is one import and one line in `pages/Home.jsx` — plus flipping the two bands after it back. Leadership is still published on the About page, in more depth. |
| `blog` (3) | 3-up media cards | Index is the category. |
| `cta` | inset accent card on a white band | |

**About** — `page hero → intro → ethics → leadership → stand for → philosophy → why choose us → DEI`

| Content | Section | Why |
|---|---|---|
| `banner` | **plain accent band, title only** | Reduced 2026-10-12 by request from eyebrow + h1 + lead + picture. See below. `banner.bgImg` and `intro.subTitle` are now unrendered. |
| `intro` | **two columns over three cards, on a supplied backdrop** | Rebuilt 2026-10-12 to a comp. Replaced a photo-and-bullets feature band plus two long paragraphs and a statement block. See below. |
| `ethics` (10 × bullet lists) | **two-column open index** `01`–`10` | Redesigned 2026-10-12. Was an info-tabs accordion with a sticky `TintPanel`; now everything is on screen. See below. |
| `leadership` | founder feature band + **tiered** 11-portrait roster | The founder has a 120-word bio the other eleven do not; a square portrait card would truncate it or make one cell four times its neighbours' height. See below for the tiers. |
| `advisoryBoard` | 3 cards: portrait, name, service designation, bio | Restored 2026-10-12. Cards not roster portraits, because each advisor has a 40-word biography the roster card has nowhere to put. |
| `standFor` (9) | 3×3 card grid `V/1`–`V/9` | No glyphs — there is no honest icon for "Integrity Without Exception". |
| `philosophy` | feature band + 3 pillar cards | The second paragraph ends "…we deliver:" — a colon pointing at the grid, so the prose sits above it, not beside it. |
| `whyChooseUs` | feature band + 5 cards | |
| `dei` | feature band + numbered list | `dei.lead` ends "…such as:", so this is an ordered list by the content's own construction. |

## Where the build refuses to say something

- **The wordmark marquee is not a "trusted by" strip.** The reference heads its
  equivalent "TRUSTED BY THOUSANDS OF COMPANIES GLOBALLY" above customer logos.
  These five are Mindlogicx's *own* products, so that heading would turn
  internal platforms into a fabricated customer list and a client count nobody
  has given us. The stand-in label "The Intelli platform family" was dropped by
  request — the belt runs headingless, directly under a carousel that has just
  finished naming all five products one at a time.
- **"Our Strength" is cards, not quote cards.** The content module calls these
  `testimonials` because that is the slot they filled on an older template, but
  there is no speaker, no attribution and no company behind any of them.
  Quote marks and a name would mean inventing three customers.
- **Newsroom cards show a category, not a date.** The content layer has no
  publish dates; printing one would fabricate a publishing record.
- **`TintPanel` draws, it does not mock up.** The ethics accordion has ten
  items no photograph covers. Rather than fake a product screenshot or reach
  for stock imagery of a handshake for "Fair Competition and Anti-Corruption",
  the slot gets a flat abstract mark on a pastel wash. Nothing in it is meant
  to be read as a depiction of a Mindlogicx product.
- **No contact form.** Nothing is standing behind this site to receive a
  submission. The footer's subscribe field hands what was typed to the
  visitor's own mail client as a message they can read before sending; the page
  transmits nothing itself.

## Deliberate departures from build 2

- **Vendor CSS and the icon webfonts are gone.** Every glyph is inline SVG in
  `common/icons.jsx` — eight pieces of chrome and ten content marks, drawn to
  one spec (24px box, 1.5px stroke, round caps). No webfont request, no FOIT,
  and each mark inherits `currentColor` so a card's tint carries its icon.
  `public/` is 1.5M instead of 9.8M.
- **Zefxa's raster icons and decoration were not copied.** `services[].img`,
  `process.steps[].img`, `testimonials[].image`, `hero.bgImg` and `about.bgImg`
  still exist in the content layer and are the only fields that go unused —
  they point at template artwork that would read as foreign in a flat layout.
- **No Swiper, no jQuery, no WOW.js.** Consistent with build 2. `common/
  Reveal.jsx` carries over unchanged and reproduces the entrance animations
  with IntersectionObserver; `ls.css` supplies the keyframes animate.css used
  to. `Reveal` only ever *adds* `animated`, so `.wow` on its own deliberately
  applies nothing — giving it `opacity: 0` would turn a missed observer
  callback into invisible content.
- **Buttons are real buttons.** The reference ships its "buttons" as styled
  `<div>`s and hrefless `<a>`s, which are keyboard-unreachable. `Pill` renders
  a router `Link`, a plain `<a>` or a `<button>` depending on the destination.
- **`setState` out of effects.** The header's dropdown closes from the click
  that navigates rather than from an effect watching the pathname — navigating
  to the route you are already on does not change the pathname, so an effect
  would leave the dropdown hanging open in exactly that case.

## The page measure

`--measure` is **1480px**, widened from the reference's 1152px by request: the
supplied comps run their content to roughly 87% of the viewport, which 1152px
could not reach on a 1440 screen. `.ls-container` pads with
`clamp(20px, 5.5vw, 88px)` so the side margin stays proportional as the
measure widens, and bottoms out at the mobile gutter.

**Every section sits on it except two.** The hero and the header are
`--fluid` and run edge to edge. Everything else — including the platforms
row, which was full-bleed under an earlier instruction — is on the shared
measure. Measured at 1440: content 1267px, 0.889 of the viewport. It caps at
1480, so a 1920 screen gets a centred column rather than a sprawl.

This also reaches `/about` and the footer, which use the same container.

## "Where We Apply It" — the sector carousel

A heading block with its call to action and prev/next buttons, then five
photographic cards. Three show at a time; the rest advance one at a time,
right to left.

### The heading is two rows, and the title is `nowrap`

The title spans the full measure on a row of its own, with the lead and the
controls sharing the row beneath. It used to sit beside the controls, which is
what forced it onto two lines.

Above 992px it is held to one line by `white-space: nowrap` and
`font-size: min(52px, 3.5vw)`. The headline is 56 characters and Roboto sets
it at ~0.427em each, so it needs ~24em; the container runs at about 0.89 of
the viewport below 1480px, which puts the largest size that still fits at
~3.7vw. Measured headroom is 4.4–4.7% from 992px to 1600px.

Two traps here, both of which bit:

1. **The rule has to live in `ls-responsive.css`, not `ls.css`.** The element
   carries both `ls-h2` and `ls-ind__title` — equal specificity, so source
   order decides — and `ls-responsive.css` overrides `.ls-h2` at every
   breakpoint. Declared in `ls.css`, the 48px `.ls-h2` at `max-width:
   1199.98px` silently won, pushing a 1147px line through an 868px column and
   scrolling the whole page sideways.
2. **`nowrap` overflows silently; it does not fall back to wrapping.**
   Re-measure if the headline text ever changes.

Below 992px it wraps as before — a single line would have to drop to ~14px to
fit a phone.

### This is the one place the build uses Swiper

Every earlier carousel here was hand-rolled, deliberately: Swiper releases
through **12.x** carried a critical prototype-pollution advisory
(GHSA-hmx5-qpq5-p643), which is why `package.json` once said "no Swiper" and
why the hero still slides itself. That advisory **does not affect 14.x** —
`npm audit` reports zero vulnerabilities with `swiper@14.3.0` installed — so
it is used here as requested.

**If Swiper is ever pinned back below 13, re-check that advisory.** That note
is repeated in `Industries.jsx` because that is where someone changing the
version will be looking.

The hero stays hand-written. It crossfades a full-screen backdrop rather than
sliding a track, so Swiper would not have made it simpler, and it carries
behaviour (permanent autoplay, `inert` on inactive slides, one `<h1>`) that
would have to be fought back in.

### `rewind`, not `loop`

Swiper's loop mode needs at least `slidesPerView × 2` slides — six at
three-up. There are **five** sectors, and loop degraded *silently*:
`loopedSlides` collapsed to 1, `activeIndex` and `realIndex` fell out of step,
"next" on the last card did nothing and autoplay stalled. No warning, no
error.

`rewind` is Swiper's documented answer for a track too short to loop: it
advances one at a time and returns to the first card after the last, with no
duplicated slides in the DOM. Verified sequentially: forward
`0 → 1 → 2 → 0 → 1`, backward `1 → 0 → 2`, autoplay advancing off the end.

**A sixth sector would make a true continuous loop possible** — if one is
added, `loop` can replace `rewind`.

### Controls and motion

- **Navigation is pointed at this component's own buttons** (`.ls-ind-prev` /
  `.ls-ind-next`) rather than Swiper's default arrows, so they carry the site's
  pill styling and sit in the heading row where the comp puts them. The class
  names are load-bearing: `navigation` matches on them.
- **`A11y` is on**, which labels the slides and the controls and keeps the
  whole thing operable from a keyboard.
- **Autoplay pauses on hover and on keyboard focus but never stops** —
  `disableOnInteraction: false`, because the buttons exist to override it at
  any point, not to end it.
- `slidesPerView` steps `1.15 → 2 → 3` at 640 and 1024. The fractional value
  at the smallest size is the peeking card that tells you the row scrolls.

### The card: a framed card (third design, 2026-10-12)

The shapes this card has had, in order:

1. A full-bleed photograph with the copy overlaid on a scrim.
2. A picture band flush to the card's top edge, a 52px chip straddling the
   seam, copy on a solid body.
3. **Current** — everything inset. An 18px frame on all four sides, a head
   row carrying the sector glyph left and a numbered index right, the picture
   below it at 16:10, then name and link.

Pulling the picture *inside* the card is the clearest silhouette change
available without altering what the card holds, and the numbered index is the
reference pattern's signature motif, which these cards had never used.

Two properties carried over from (2):

- **No scrim.** Every photograph shows unfiltered at full contrast. Design
  (1) had to darken its lower half to 88% black to carry white type.
- **Contrast does not depend on the artwork.** Copy sits on the card, not the
  image, so the name measures **18.67:1** and the link **8.89:1** whatever
  photograph is dropped in. Design (1)'s floor had to be proved against a
  hypothetical pure-white image.

The glyph's accent alternates cyan/purple by position; the cyan is
`--accent-strong-cyan`, since plain `--brand-cyan` is 2.27:1 on its pale wash.
Measured: 5.28:1 cyan, 8.02:1 purple.

The picture's radius (8px) is deliberately tighter than the card's
(`--radius-media`, 12px) — matching them made the frame read as two
concentric rounded rectangles rather than as a mount.

> **`.ls-ind__cardhead`, never `.ls-ind__head`.** `__head` is already the
> *section's* heading block — title, lead and the carousel controls. Naming
> the card's glyph row `__head` applied the card's `display: flex;
> justify-content: space-between` to the section heading, which put the
> nowrap title and the controls side by side and pushed the controls **450px
> off the right edge of the page**. The whole document scrolled sideways.

The section's heading, lead, Swiper, autoplay and prev/next were left alone
through all three designs; only the card changed.

### The previous card: bare photograph, scrim only on the copy

*(Superseded — kept because the contrast arithmetic below is still the
reference for any future overlay card on this site.)*

The scrim is on `.ls-ind__body`, **not on the card**, so the photograph above
the copy is completely unfiltered and each image shows at its own quality. The
gradient bleeds out to the card's edges and fades to nothing within the 90px
above the first line, reading as light falling off rather than as a panel. In
practice the top half of every card is untouched.

Its bleed is expressed in `--ind-pad-x` / `--ind-pad-b`, the same tokens the
card pads with, so the two cannot drift apart at a breakpoint — the card's
padding drops to 22px below 768px.

The solid stop is pinned with `calc(100% - 70px)` rather than a percentage on
purpose: the fade then always lives inside the 90px bleed, so a taller card —
one that gains a `desc` — cannot slide the heading up into it.

**The floor, corrected.** Behind the copy the scrim reaches 88% black, which
holds white type at **16.6:1 whatever image is dropped in**: a pure-white
photograph lands at sRGB 31, i.e. 0.013 *relative luminance* once gamma is
undone. Even the 55% stop is 4.76:1.

> Earlier revisions of this file claimed **6.18:1**, and the figure propagated
> into three comment blocks. It was wrong — it read the 0.12 channel *value*
> as if it were linear luminance (`1.05 / (0.12 + 0.05)` is exactly 6.18). The
> real floor is far more comfortable. It was wrong in the safe direction, so
> nothing ever shipped under threshold, but do not re-derive from the old
> number.

**One side effect of removing the card scrim:** the placeholder photographs
(`home-two/project-thu*.webp`) have product wordmarks baked into them —
"INTELLIOSM", "INTELLITUTE", "INTELLITHESIS". The scrim used to hide them.
They are in the image files, not the DOM, and will go when the real sector
photographs arrive.

### The sector mark

Top-right corner, **half the card wide**. `width: calc(50% + var(--ind-pad-x))`
rather than `50%`: percentages resolve against the padded box, so a plain 50%
came out at 43% of the card. Adding one gutter back gives `0.5·content + pad`,
which is exactly half the border box at any card width.

It sits on the bare photograph now, so it is treated as a watermark rather
than an icon — white held back to 85%, with a drop shadow so the strokes
survive a pale image. It is `aria-hidden` decoration; the card's heading names
the sector.

**Two content gaps, both deliberate:**

- **The cards have no description.** The comp has a paragraph on each; only
  the five names were supplied. `desc` renders when present, so filling it in
  `site.js` is the only step.
- **"Explore Solutions" has no destination.** No route exists for it. It is a
  real `<button>` — focusable and announced — but does nothing yet.

The title was overridden to "Engineering That Transforms Knowledge into
Intelligence.", which is word for word the first hero slide's headline, so
that phrase now appears twice on the page.

## "What We Do"

Second section, built to a supplied comp. Two columns: the
knowledge-engineering argument on the left, three pillar cards cascading on
the right.

**The cascade** steps each card further in from the left while holding the
right edges together, so the three read as one descending run rather than a
list. It is `margin-left` on the 2nd and 3rd cards, not a grid — they have to
keep their own heights. Measured at 1440: left edges 697 → 737 → 777, right
edges all 1265. It is switched off below 992px, where the columns stack and
an offset would just look like three cards that failed to line up.

**Three places this follows the site rather than the comp:**

1. **No drop shadow.** The comp's cards carry a soft one; this pattern has no
   elevation anywhere. They are white with a 1px hairline ring, the same
   treatment the nav panel uses.
2. **This forces the band to be smoke.** White cards on a white band would
   have nothing separating them from the page — which is in turn why
   `PlatformsAlt` is white, `Strengths` smoke and `Cta` white.
3. **Weight 400 heading**, at 58px — larger than a standard section heading,
   because here it is the whole left column rather than a label over a grid.

The comp's purple and cyan are already the palette, so nothing was
substituted. Purple carries the eyebrow rule, the quote bar and the link;
cyan appears only in the icon dots and the gradient under the photograph,
neither of which is read. All seven pieces of text measure 4.73:1 or better.

**The photograph is a placeholder** — `whatWeDo.image` points at an existing
Mindlogicx picture of roughly the right subject so the layout can be judged.
Swap the path; nothing else changes.

**The pull-out restates the lead** in tighter language. That repetition is in
the comp and is how the section was written, not an oversight.

## "How We Make It Intelligent" — the MindGENIE band

Ported from the **Mindlogicx 2025 frontend** at
`~/Videos/Mindlogicx_India_05-10-2026/Mindlogicx_India/mlx-website-2025-frontend`
(`components/sections/MindGenie.tsx` and `components/visuals/AgentOrchestration.tsx`),
structure for structure: a two-up head with the orchestration diagram beside
the argument, the six agent classes below it, and the human-in-the-loop
principle closing the section.

The copy in `site.js` (`mindgenie`, `agents`) is **verbatim from that
project** — it was not rewritten to fit. `mindgenie.jpeg` was copied from it
too; it is the only asset on this page not inherited from build 2.

**Three changes in the port, all forced:**

1. **Tailwind utilities → this site's pattern.** The source's
   `tone="inverse"` becomes `.ls-section--ink`; type scale, container and
   reveal come from here.
2. **Colour is cyan, not purple.** Purple carries everything on the light
   bands but is **2.10:1 on ink** — unusable. Cyan is 7.38:1. So the
   definition's rule, the CTA, the agent glyphs and the closing callout are
   all cyan. This is the palette's role split doing exactly what it is for;
   see the palette section above. All ten text elements on the band measure
   **7.17:1 or better**.
3. **No framer-motion.** The source animates the ring drawing itself and the
   nodes scaling in. This build has no animation library, so the diagram
   renders settled and the section's own `Reveal` handles the entrance.
   **None of the geometry changed** — `C`, `R_RING`, `R_CORE`, `R_NODE`,
   `hexPoints` and `nodeAt` are the source's values.

The core gradient is the one intentional visual difference: it runs
`--brand-purple → --brand-cyan` instead of the source's brand/accent pair.
Purple is legible there because it is a fill behind a clipped photograph, not
type.

**The diagram is hidden below 768px**, as in the source — six 40px nodes on a
188px ring do not survive a phone, and the agent cards below carry the same
information in a layout built for it. At 768–1023 the head is a single column,
so the diagram sits under the copy at full width; that is the source's
behaviour too, not a breakpoint bug.

## The About hero (`PageHero tone="accent"`)

Reduced 2026-10-12 to a compact band carrying only the `<h1>`. It previously
held the eyebrow, the lead and `banner.bgImg`.

### ⚠️ White on cyan: the site's one known contrast failure

The band is `--accent-fill` (true `#00aeef`) and the title is **white**. Both
were asked for explicitly on 2026-10-13, after two earlier rounds on the same
question.

**It measures 2.53:1 and fails WCAG AA.** Large text needs 3:1 and body text
4.5:1, so it misses even the large-text bar — raising the size cannot rescue
it. This is the only knowingly non-conformant colour pairing on the site, and
it is here by instruction rather than by oversight: **do not "fix" it
silently, and do not copy the pattern anywhere else.**

The two conformant arrangements, both previously built and both set aside:

| | contrast |
|---|---|
| ink on this cyan (`--on-accent-fill`) | 7.38:1 |
| white on `--accent-strong-cyan` (same hue, darkened) | 5.88:1 |

There is no third option — `#00aeef` is too light to carry white type.

`PageHero` kept its `eyebrow`, `lead` and `image` props — About simply stops
passing them, so another page can still open the full way. Two strings went
unrendered as a result: `banner.bgImg`, and `intro.subTitle` (the eyebrow),
both flagged in `about.js`. **`intro.lead` did not** — the redesigned `Intro`
renders it as its left-hand statement, so the sentence is still on the page
and is no longer printed twice 400px apart.

## The founder portrait is sized by the bio, and flush left

Two problems, fixed in two passes.

**Height.** `.ls-media--portrait` fixes `aspect-ratio: 3/4`, which on the
feature's 593px column computed to **791px** against roughly **508px** of copy
— a third taller than the thing it was paired with, reached by upscaling a
300×380 photograph to about twice its native size. `align-items: stretch` plus
a full-height media makes the row's height the bio's height.

**Width.** Even at the right height the picture sat in a 593px half-width
column at 381px wide, leaving ~106px of dead space either side and pushing the
bio an extra 80px away. The track is now sized to the picture — a fixed
**380px** rather than `1fr` — and the gap comes down from 80px to 52px.
Nothing is centred; the portrait is flush with the container's left edge, in
line with the roster cards below it. Measured at 1440: 380×481 media, 481 copy,
0px left inset, 52px gap.

> **`380px` is a deliberate literal, not `auto`.** `auto` would have to
> resolve a width from an aspect ratio applied to a percentage height whose
> own row has not been sized yet; browsers break that cycle by falling back to
> the image's intrinsic width (300px) and the frame shrinks. Pinning the track
> avoids the circularity. The media then takes `aspect-ratio: auto` — the
> track sets width, the row sets height, and a fixed ratio would fight both.

`min-height: 360px` is a floor for the case where the bio is ever shortened —
without it a two-line bio would squash the portrait into a letterbox. The
generic `.ls-feature` collapse at <992px overrides the two-column track, so
the portrait goes full width above the bio on phones.

## "Who We Are" (About intro)

Rebuilt 2026-10-12 to a supplied comp: the lockup and company statement left,
the heading with three principle pills right, three cards beneath, all on the
client's `aboutus_intro_bg.png`.

**Two deliberate deviations from the comp:**

1. **Two brand colours, not the comp's three.** The comp tints in blue,
   purple and pink. The project has been restricted to `#712d7b` and
   `#00aeef` since an earlier turn, and a pink here would make this the only
   section on the site with a third hue. The comp's rhythm is kept by
   alternating the two — pills cyan/cyan/purple, cards cyan/purple/cyan.
2. **The lead keeps its full sector list.** The comp's artwork reads "Edtech
   and MediaTech"; `whoWeAreLead` says "Edtech, Healthtech, Fintech, LegalTech
   and MediaTech", which is the live copy. Using the comp's wording would have
   silently dropped three sectors.

**`--accent-strong-cyan` was added for this.** The glyphs needed a cyan that
survives on a pale wash: `--brand-cyan` measures **2.27:1** there and reads as
a smudge at 17px, while the darkened token measures **5.28:1**. It is not a
third brand colour — it is `--brand-cyan` darkened, exactly as
`--accent-strong` is `--brand-purple` darkened. Purple glyphs are 8.02:1.

**The card copy is condensed and the long form is still in `about.js`.** Cards
1–3 are the client's own shortened wording, transcribed from the comp;
`intro.paragraphs` and `intro.knowledgeEngineering` are the unabridged
originals they were cut down from and are now unrendered. Both are flagged in
the content file. Do not re-expand the cards by hand — those two are the
source.

The backdrop is `object-fit: fill`, not `cover`. It is 2048×768 and the band
is taller than that ratio once the cards are in; `cover` would crop it to a
narrow strip and throw away the wash top and bottom. It is an abstract
gradient with no subject, so the stretch is invisible.

## "How We Operate" (About)

Redesigned 2026-10-12 from a numbered accordion with a sticky illustrated
panel to a **two-column index with all ten rule sets open**.

The accordion looked like the reference's signature section and the content
mapped onto it neatly — index, heading, expanding list. But it hid nine of
ten sets behind a click, and these are the company's stated ethics: the one
thing on the page a reader might want to scan in full, search for, or print.
An accordion is right for optional detail and wrong for a statement of
principles. The `TintPanel` drawings went with it — honest placeholders for
photographs nobody has of "Fair Competition and Anti-Corruption", but half a
layout earning nothing.

**CSS multi-column, not a two-column grid.** The items run 2–3 rules deep, so
they are uneven; a grid pads every row to its tallest cell and leaves ragged
gaps, while `columns: 2` flows them tight and balances by height. Reading
order still runs 01→10 because DOM order does. `break-inside: avoid` is what
stops a heading being orphaned from its own rules at a column break. One
column below 992px, where two would give ~45 characters a line.

`InfoTabs` and `TintPanel` are both still in the codebase — `Focus.jsx` (the
dropped "Our Focus" section) still uses them.

## The leadership roster is tiered (About)

Restructured 2026-10-12 from a supplied screenshot. `leadership.members` was
a flat array rendered four-up; it is now `leadership.tiers` — directors (5),
vice presidents (3), assistant vice presidents (3) — rendered three-up, one
grid per tier. The 2025 frontend groups them the same way.

**The tiers are what produce the reference's 3+2 / 3 / 3 shape.** A flat
eleven-item grid wraps 3/3/3/2 and splits the directors across the vice
presidents, which is a different (and wrong) page. The tiers are *not*
labelled on screen — the grouping reads from the row breaks alone, exactly as
in the reference; `tier.id` keys the list and labels the group for assistive
tech only.

> **`.ls-roster` is flex, not grid, and that is load-bearing.** The directors
> are five, so their second row holds two and the reference centres them.
> `grid-template-columns: repeat(3, 1fr)` cannot centre a short row — the two
> sit in columns 1 and 2 against the left edge, and `justify-content` is inert
> once the columns are `1fr`. Flex with a calculated basis gives three per row
> *and* centres the remainder. Verified: 215px inset on both sides.

Two content changes arrived with the restructure, and both now **differ from
the 2025 frontend** — `about.js` is the authority, do not "correct" them back
when diffing:

- **Datuk Ariff Farhan Doss was added** at the head of the directors. The
  source project lists the designation as "Managing Director"; the supplied
  screenshot says **"Director – ASEAN Region"**, which is newer and is what
  ships. The portrait was converted from that project's `DatukArif.jpg`
  (1080² JPEG) to this build's 300×380 crop, biased upward 6% so the
  headroom matches the other portraits.
- **Sharmila Sathi Rao** is now "Director & COO (MHP with Healthcare)", from
  "Director & COO (MasterHealthPro)".

Everyone else was already in the right order — the screenshot's only
sequence change was inserting Datuk at the front.

**A fourth tier was added 2026-10-12**, between the directors and the vice
presidents: Vinod M (VP — Global delivery and cyber security) and Rakesh
Katagihallimath (Head — Marketing & Sales). ⚠️ **They are grouped by their
position on the page, not by rank** — that is where the client asked for
them. On seniority Vinod M belongs in `vice-presidents`, which would make
that tier five and re-wrap it 3+2. Moving them is a two-line change if the
grouping ever matters more than the placement.

Both portraits arrived as 308² images and were converted to the roster's
300×380 crop, biased upward 6% so the headroom matches the rest.

**Adding the Advisory Board inverted every band below it** on About:
`StandFor` and `WhyChooseUs` went white → smoke, `Philosophy` and `Dei` smoke
→ white. Advisory Board itself has to stay **white**, because its cards are
filled `--grey-50` and would disappear into a smoke band.

## The numbered index motif is gone (2026-10-12)

The reference pattern's signature `01` / `E/01` / `V/1` motif was removed from
the whole site by request. Taken off: the hero's `01 / 05` counter, the sector
cards, the Education bands, How We Operate, Our Philosophy, What We Stand For,
Why Choose Us, and the two orphaned components that carried it
(`Domains`, `PlatformsAlt`, plus `Focus`'s `index` feed into `InfoTabs`).

**`.ls-index` itself stays, and four things still use it** — because they are
*labels*, not numbering, and the request was about the numbered identity:

| where | what it shows |
|---|---|
| `Strengths` (Home) | STRATEGY / BRAND / TECHNOLOGY |
| `Newsroom` | the post's category |
| `Platforms` | the product's tagline |
| `Placeholder` | the unbuilt route's path |

`Card` and `InfoTabs` still accept an `index` prop; only the callers that
passed a number stopped passing one.

> **One survived the first sweep: the DEI list.** Its `01, 02, 03` came from
> a CSS `counter(ls-num, decimal-leading-zero)` on `.ls-numlist li::before`,
> not from JSX, so grepping for `ls-index` could never find it. It is bullets
> now (`.ls-bullets`), `.ls-numlist` is gone, and there are **no `counter()`
> rules left in the stylesheet**.
>
> When auditing for generated content, walk every element's `::before` and
> `::after` computed `content` in the browser rather than grepping source.
> That check now reports zero number-bearing pseudo-elements on all three
> routes.

Two lists also changed element with their numbers: How We Operate and the DEI
commitments were `<ol>`s while they were numbered and are `<ul>`s now —
neither is a sequence, and the markup should not claim otherwise. **No `<ol>`
remains on any route.**

## Numbers are written as digits

House rule from 2026-10-13: quantities are set as numerals, not spelled out.
The Education page title went from "Six platforms. One governed learner
journey." to **"6 platforms. 1 governed learner journey."**

Two rendered strings still contain number *words*, both deliberately left:

- **"One World. One Digital Operating System."** — hero slide 5's name and
  heading. This is a slogan, where "One" means *unified*, not *a count of
  one*. "1 World. 1 Digital Operating System." would change what it says.
- **"Two decades of building systems…"** — the Why Mindlogicx body. Flowing
  prose rather than a figure being quoted.

Everything else the grep turns up is inside comments, not rendered copy. If
the rule is meant to cover slogans and prose too, those two are the only
remaining changes.

## Pages ported from the 2025 frontend (2026-10-13)

Source: `~/Documents/ClaudeProjects/OfficeProjects/Mindlogicx_India/mlx-website-2025-frontend`
— a *different* codebase from the one MindGENIE and the Education copy came
from. It is Next-style (`src/app/<route>/page.tsx`) and much older.

Copy is **verbatim** in every case. Each module in `src/content/pages/` opens
with a header comment recording its source paths and everything the client
needs to check. Live so far:

| route | source | state |
|---|---|---|
| `/privacy-policy` | `components/PrivacyPolicy/` | done |
| `/terms-and-conditions` | `components/TermsAndConditions/` | done |
| `/esg-sustainability` | `app/esg_sustainability/` | done |
| `/global-compliance` | `app/global_compliance/` | done |
| `/ai-first` | `app/ai_first/` + 10 components | content extracted |
| `/products/intelliexams` | `app/intelliexam/` | content extracted |
| `/contact-us` | `app/contact-us/` | content extracted |

### Two things the port must not "tidy"

- **The ESG ecosystem sentence is broken in the original**: "spanning EdTech,
  and CommerceTech." reads oddly because HealthTech, FinTech and LegalTech
  were commented out in the source JSX. Reproduced as-is — restoring three
  verticals to a public ESG claim is the client's decision.
- **Only one of three Global Compliance regulation cards has `tags`.** The
  other two are rendered without, rather than back-filled: inventing tags for
  a compliance card is inventing claims.

### A render error used to blank the entire site

The missing `tags` array threw a one-line TypeError, which escaped to the
React root and **unmounted everything** — header, footer, the lot — leaving a
white page with nothing in the console. `ErrorBoundary` wrapped the sections
*inside* Home/About/Education but nothing wrapped the routes.

`<Routes>` is now inside an `ErrorBoundary`. A bad page degrades to an error
panel with the rest of the chrome intact. This matters most for the ported
pages, whose content shapes come from another codebase and are not uniform —
assume optional arrays and guard with `?.`.

> **Debugging note.** The console tool showed *nothing* for this — no error,
> in a fresh tab. What found it was calling the page component as a plain
> function (`const el = Comp()`), which runs its body and throws synchronously
> with a usable stack. Worth reaching for whenever a route renders blank.

### Images

Local assets are copied to `public/assets/images/pages/` and the content
modules repointed. **Remote stock photography (Unsplash) is dropped, not
carried** — three ESG pillars had dead stock URLs alongside the real artwork.

## The Knowledge Engineering page came from a copy deck, not a codebase

`/knowledge-engineering` is built from
`Mindlogicx_Knowledge_Engineering_Webpage_Content_Oct2026_REVISED.docx`
(client's own, v4.0). Copy is verbatim.

**The deck's "Visual Design Direction" blocks were deliberately ignored** —
gradients, glows, isometric diagrams, animated transitions. Only "Website
Content" was taken, and none of the direction text is even in the content
module. The page is built from this site's existing pattern.

### Two things to check before it ships

- **The framework diagram exists in the deck only as an embedded PNG.** Its
  five stage labels were transcribed from that image (flagged
  `transcribedFromImage: true`) and are rendered as a typographic pipeline —
  which keeps them searchable and legible to a screen reader, but **they need
  proofreading against the original artwork**. The deck itself is inconsistent
  here: the diagram writes "AI & INTELLIGENCE LAYER - MindGENIE®" with a
  hyphen where the heading uses an en dash.
- **CTA label drift in the deck**: the Page Overview calls the primary CTA
  "Talk to Our Experts", the closing section says "Connect with Our Experts".
  Both are kept verbatim.

### Routes the deck names do not exist here

Mapped rather than shipped dead; the deck's own paths stay in the content
module so the difference is auditable.

| deck | this site |
|---|---|
| `/education/` | `/ed-tech` |
| `/healthcare/` | `/health-tech` |
| `/legal/` | `/voice-of-law` |
| `/finance/` | `/mxpay` |
| `/contact-us/` | `/contact-us` — **not built yet** |

## Page titles have no band (2026-10-13)

`PageHero tone="plain"`: no background, left-aligned, flush with the content
below. Every inner page uses it.

### The title gap is a pair of values, not one

`.ls-hero--plain`'s `padding-bottom` and `.ls-hero--plain + .ls-section`'s
`padding-top` **stack**. Each had been set assuming the other was not there,
which put **112px** of air between the page title and the first thing under it
on every inner page. Now 24 + 32 = **56px**.

Change one and you silently double or halve the gap — they move together.
`--tight` (Careers, Privacy, Terms) overrides both and is declared after, so
it wins on source order.

`.ls-hero--accent` is kept but **unused**. Its value is the colour pairing, not
the padding: cyan carries ink at 7.38:1 and white at 2.53:1. If a coloured
page band ever returns, start from that rule rather than re-deriving it.

> The prose pages (Privacy, Terms) also run at the **full page measure** by
> request — about 190 characters a line, against the 60–80 that reads
> comfortably. `max-width` on `.ls-prose` is the single line to restore if
> that ever reads as too long.

## Careers and Contact (2026-10-13)

Both ported from the 2025 frontend. Copy verbatim, including its typos.

### ⚠️ The Careers page has no jobs

The original has **zero job listings** — no titles, locations or role
descriptions, and no API fetching any. Its "Check out our open jobs" line
links nowhere. The only route in is one general application form. Nothing was
invented to fill the gap.

### Both forms post to the real endpoints

| page | endpoint | encoding |
|---|---|---|
| Contact | `api/contact_us_form_submit/` | JSON |
| Careers | `api/career_form_submit/` | **multipart** — it carries a CV |

Base URL is **`VITE_API_BASE_URL`**, which is what the reference's own `.env`
defines. Its *code* reads `NEXT_PUBLIC_API_BASE_URL` in places — a leftover
from the Next build that Vite never exposes, so the `.env` name is the one to
trust. Until it is set, both forms say so rather than posting to a relative
path that would 404 and read as a server fault.

**Neither has reCAPTCHA.** The reference commits a site key under
`NEXT_PUBLIC_CAPTCHA_KEY`, a prefix Vite does not expose, so it would not have
worked there either. Worth restoring before launch — an open endpoint that
accepts file uploads is worth spamming.

**Country/State/City are text inputs**, not the original's cascading selects:
`countrycitystatejson` is not a dependency here. Field names and values are
unchanged, so the payload the backend receives is identical. Careers'
Department remains a real `<select>`.

### Deliberate improvements on the originals

- **Every field has a real `<label>`**, visually hidden behind the same
  placeholder wording. The originals had placeholders only — the field's name
  vanishes the moment anyone types, and a screen reader announces an
  unlabelled box. Careers' file input keeps its label *visible*, since a file
  control shows only "No file chosen" until used.
- **The Careers form is always on the page.** The original hid it behind an
  "Apply Now" button; that button is now an anchor that scrolls to it. An
  application form one click from invisible costs applications for nothing.
- Submission results are announced via `role="status"`.

### For the client

- Contact's partner email **mismatches in the source**: visible text reads
  `partners@mindlogix.com` (no "c"), the link goes to `info@mindlogicx.com`.
  Both reproduced exactly — guessing which is right would be worse.
- Validation strings carry the originals' typos: "charactors", "atleast",
  "alteast", **"Massage is required"**. One-line fixes on request.
- **"Join Us. Your Future is secured"** is a strong promise to put to
  applicants in writing. Worth a legal read.
- Phone validates to exactly 10 characters on both forms, rejecting most
  non-Indian numbers. Inherited.
- Only **one** office has an address; Contact's map implied four, so the map
  is omitted rather than shown with three empty pins.
- The club CTA points at `/mindlogicxian_club/`, which does not exist here.

## Newsroom (/news-room) — scaffolding on purpose

Built 2026-10-13. Four groups: Awards & Recognition, MOUs & Partnerships,
Events & Coverage, In the News.

**None has real entries, and that is the point.** Awards and MOUs are claims
about things the company has won and signed; press coverage claims someone
published something. Writing any of it would be inventing a record. Each
empty group renders a visible "Content to be supplied" panel rather than
disappearing — an empty Awards section that says so is more honest than one
quietly missing, and it stays a reminder that something is owed.

The three events the client named — the Indonesia event, the SMC signup, and
ten years of back catalogue — are titled cards marked `placeholder: true`,
showing a dashed "Details to follow" badge instead of a fabricated write-up.

**To publish:** push entries onto a group's `items` array in
`footer.newsroomPage`. An entry is `{ title, date, summary, image, link }` —
only `title` is required and the card adapts to whatever is present. A card
becomes a link **only** once `link` is set; one that looks clickable and is
not is worse than one that plainly is not ready.

## Mindlogicxian Club (`/mindlogicxian-club`) — 2026-10-13

Ported from the live page and the 2025 frontend's
`src/components/MindlogicxianClub/`. Reached from **"Explore the Club"** on
`/careers`.

**The route is renamed.** The source's own path is `/mindlogicxian_club/`
(underscores); this site uses `/mindlogicxian-club`, matching every other
route here. The original path is still in the content layer as
`buttonHref` so the difference stays auditable — the Careers CTA hard-codes
the real one.

**The page had no title.** The live banner renders `pageTitle="."` — a single
literal full stop — with the real title commented out one line above it.
"Mindlogicxian Club" comes from that commented line.

⚠️ **Singular vs plural is inconsistent in the source and is left that way**:
body copy and headings say "Mindlogicx*ians* Club", the menu and route say
"Mindlogicx*ian* Club". Likewise "GOVERNING BOARD" is literally all-caps in
the source while "Club Activities" and "Memories" beside it are title case,
and the objectives heading carries a trailing colon ("Objectives:"). All
verbatim. One of each pair should win before launch.

### The board is one roster, not four groups

The source splits members into office-bearers / cultural / food / sports, but
**every group's `heading` is null** — the grouping survives only inside the
designations. Rendered as a single continuous roster; inventing group labels
would be publishing org structure the client never did.

The portraits are **stylised AI-generated superhero renders** — the source's
own art direction, carried as found. They are 2:3 full-body compositions, so
`.ls-club__board` overrides the roster's usual square crop; the shared
`.ls-person__media` still crops square for the real photographs on `/about`.

⚠️ **Sixteen real people with job titles, details unverified.** Priyanka and
"CJ Priyanka" share one portrait file, so one of them shows the wrong face.
Filenames disagree with displayed names for Poovendhan, Kritika, Arvind and
Shrinivas; five people are listed by a single name. Four further members
(Anjali, Riya Rai, Zabiulla A, Pranay Kumar) are commented out in the source
and are **not** rendered — their portraits were not copied either.

### The gallery

628 photographs, 7 years, 28 categories, served as hard-coded URLs from
Mindlogicx's own S3 bucket. There is no API and no CMS: the source array is
literally named `MOCK_GALLERY_DATA`.

**Only the 28 covers load with the page**; a category's photographs mount when
it is opened, one category at a time. Loading all 628 up front would be ~600
requests to a third-party host before anyone scrolled.

⚠️ **The captions are unreliable** and are reproduced as written: all 64 of the
2018 images say "Christmas celebration", and the 2025 yoga category is titled
"Sports Activities & Competitions". Several name individual employees. There
is a **2009–2024 gap** in the years. The source's own typos ("trofy",
"kabbadi", "Independance") and its decorative Unicode are preserved.

Not carried: the source's lightbox (zoom, fullscreen, slideshow autoplay). Its
labels are kept in the content module's `ui` block if it is ever wanted.

### Assets

The 39 local images copied in at **43.9 MB** — the member portraits were
1024×1536 at ~2 MB each, rendering into ~260 px cards. Resampled to their
rendered size at q82: **43.9 MB → 1.1 MB**. Eleven were then deleted outright
as unrendered: the commented-out banner PNG, the four commented-out members,
and six `studie-shape*` decorations whose renderer is also commented out.
(`studie-shape7/8/9` were referenced but never existed in the source.)

`.ls-media` gained `display: block` in the same change. It had only ever been
used on a `div`; the gallery needs it on a `span` inside a `button`, and an
inline box silently drops `aspect-ratio`.

## The gallery viewer (`Lightbox.jsx`) — 2026-10-13

Opening a category in the club gallery reveals its photographs in the page;
clicking one opens a full-screen viewer with prev/next, zoom and pan.

The component is **page-agnostic** — give it `images`, a start index and an
`onClose`. The club page passes the *category's* list, not one photograph, so
prev/next walk that event and stop at its edges; paging across a year boundary
into a different event would make the "3 / 24" counter meaningless.

The source's own `aria-*` strings are reused from the content module's `ui`
block rather than invented ("Close image view", "Previous image", …). Not
carried from the source's viewer: fullscreen and slideshow autoplay — those
labels are still in `ui` if either is wanted.

Keyboard: `Esc` closes, `←`/`→` switch, `+`/`-` zoom, `0` resets. Focus moves
to the close button on open and returns to the thumbnail on close.

### Two traps in it

**The focus trap must skip disabled buttons.** The zoom controls disable at
the ends of their range, and the *first* control in DOM order is "zoom out" —
disabled at the default 100%. Wrapping focus onto a disabled button does
nothing at all, so the first version's trap silently failed in exactly the
state every viewer opens in. The selector is `button:not(:disabled)`, and it
is load-bearing.

**Pan offset is applied before scale**: `translate(x, y) scale(z)`. In the
other order the offset is multiplied by the zoom factor and dragging
accelerates as you zoom in.

Testing note: calling `.click()` on a thumbnail does **not** move focus the
way a real activation does, so a focus-restore assertion will read `<body>`
and look like a bug. Focus the trigger first, then click.

## Product pages: IntelliTUTE and IntelliWORK — 2026-10-13

Built from the **UAE site** (`mindlogicx.ae/intellitute/`, `/intelliwork/`),
laid out in this site's pattern. Linked from `/ed-tech` and the home-page
platform cards, which previously pointed at `/products/*` placeholders. The
other four products still do.

Both source pages are client-rendered SPAs — the served HTML is an empty
`<div id="root">`, so the copy had to be read after render, not from the
markup.

**On both, the `h1` is not the product name.** IntelliTUTE's is "One
Ecosystem"; IntelliWORK's is "The Digital Workforce Intelligence". The product
name lives only in the banner. Here the banner title is the page title and the
source's `h1` opens the body, so each page is identifiable from a tab, a
search result or a link preview.

### Images: client-supplied, 2026-10-14 — nothing is hotlinked any more

The client supplied replacement artwork in `public/assets/images/intelliTute/`
(4 files) and `public/assets/images/intelliWork/` (2 files), which is exactly
what the two pages render — IntelliWORK's journey, ecosystem and use-case
bands are typographic, so it only ever showed a hero and a MindGENIE image.

Converted to WebP at 1120px (covers the 535px render at 2×):
**12.0 MB of PNG → 0.41 MB**, a 97% saving.

⚠️ **The supplied `.png` originals are still in those folders.** They are
untracked in git, so they were not deleted — but everything under `public/`
is copied into the build, so 12 MB of unused PNG ships until someone removes
them.

⚠️ **The new IntelliWORK hero is a Dubai skyline** — the Burj Khalifa is
plainly identifiable behind the group. UAE imagery on the India corporate
site. Supplied deliberately, so used as given, but worth a second look.

All six are **decorative** (`alt=""`): photographs that illustrate the copy
beside them rather than carrying information of their own, and each
stakeholder card already names its audience in its heading. IntelliTUTE's
hero alt was "IntelliTUTE Learning Ecosystem", which described the capability
diagram that used to be there.

This retires what was here before: the pages hotlinked ~16 MB from
`mindlogicx.ae`, and seven of IntelliWORK's nine source images were borrowed
from the ESG, "Our Strength", Global Compliance and AI First folders, one of
them carrying the alt text "Workforce transformation **in the UAE**".

### What was deliberately not rendered

- **IntelliTUTE's mock UI cards** — a "92% Employability Score" with a
  progress bar and an "IntelliGENIE recommendation". Decoration drawn to look
  like a product screenshot, but real indexable text on the live page. A
  fabricated score presented as a page statement is worse than missing
  decoration.
- **IntelliWORK's "Compliance & Governance built in" badge** — an
  unsubstantiated trust claim overlaid on a photograph, duplicating a
  capability card on the same screen.
- **The `01`–`09` on IntelliWORK's use cases**, per the site-wide no-numbering
  rule. They were ordinals on an unordered list of parallel scenarios.

### ⚠️ Content the client must settle

- **IntelliTUTE's comparison panel is unsourced**: "3x Hiring Confidence",
  "50% Faster Onboarding", and 40%-vs-95% bars against an unnamed "Traditional
  Platforms". The bar widths are styling, not data, so the bars are
  `aria-hidden` and the labels beside them carry the meaning.
- **IntelliTUTE's closing CTA had no button** — the source says "Talk to
  Mindlogicx" and offers no link, phone or form. A Contact Us button pointing
  at this site's `/contact-us` was **added**; remove it if the dead end was
  deliberate.
- **Trademark symbols are inconsistent across the estate.** Neither UAE page
  uses ® or ™ at all; this site writes IntelliWORK® / MindGENIE® /
  IntelliTUTE™. One is wrong.
- **IntelliGENIE vs MindGENIE®** — IntelliTUTE names the first, everything
  else the second. If they are one product, one name is wrong.
- Source grammar kept verbatim: "Candidates set goals, **chooses** a role
  pathway, and **establishes** a baseline." IntelliWORK mixes en-GB and en-US
  inside single sentences ("analyse", "cost centre" vs "organizations",
  "personalize").
- IntelliWORK repeats itself: "Transform HR Cost to HR Capital" is both a
  journey step and a section heading; "Institutional Knowledge Processing" is
  a card title twice. Not merged.

## IntelliEXAMS (`/intelliexams`) — 2026-10-13

Built from `https://www.mindlogicx.com/intelliexam/`. The live site is a
client-rendered SPA serving an empty root div, so the copy came out of the
deployed page chunk and was cross-checked string for string against the
reference project's components — both agree throughout.

Linked from `/ed-tech` and the home platform cards. With this, **three of six
products have real pages**; IntelliOSM, IntelliTHESIS and IntelliMINDS still
point at `/products/*` placeholders.

### ⚠️ There are two IntelliEXAMS pages on the live site

The deployed route table also carries **`/new_intelliexams`** — newer and
structurally different (IntelliEXAMS **Prime** / **NG**, "Powered by
MindGENIE", OBE/CLO/PLO mapping, a comparison table). It calls
`getMetadata("/intelliexam")`, so **both routes emit the same title and
description** — the live site is duplicate-content against itself.

Only `/intelliexam` was built, as asked. Nothing was merged from the other.
**Which is canonical is the client's call**, and it wants making before this
ships.

### The statistics band fails AA in white — so it is not white

White on the solid cyan `#00aeef` is **2.53:1**: short of AA for the 16px
labels (4.5:1) and short even for the 56px figures as large text (3:1). The
band now carries **ink** — `7.38:1` for the figures, `5.17:1` for the label at
78%. Same arithmetic as the "About Us" title exception recorded elsewhere in
this file; the difference is that one was client-directed and this one was
not.

⚠️ **The figures themselves are uncited**: "95+ m", "55+ m", "10+ m" with no
source or date, and **the bare "m" is never expanded anywhere on the source**
— so the row literally reads "95+ m Answer Scripts Evaluated". Rendered as
found; writing "million" would be inventing precision. The CTA's "globally
acclaimed" and "over 10 million users" are uncited the same way.

### ⚠️ Nine named institutions need written permission

VIT, AKTU, Amity, CSVTU, GIIS, GTU, Maulana Abul Kalam Azad University of
Technology, Mata Gujri and RGUHS. Real third-party marks, carried because they
are already on the client's own live page — but each needs consent and
confirmation the engagement is current and actually IntelliEXAMS. A tenth
logo (AKU) sits unused in the asset folder.

Rendered as a **static grid, not the source's autoplaying carousel**: nine
logos fit on one screen, and an auto-advancing strip with no pause control is
a WCAG 2.2.2 problem for no gain.

### Changed from the source

- **Every link on the source is `href="#"`** — six feature cards, nine client
  logos. Rendered as plain cards rather than links that go nowhere.
- **"Request To Demo" pointed at `/appointment/`** via a redux dispatch this
  project has no store for, and that page does not exist here. Now
  `/contact-us`, matching IntelliTUTE and IntelliWORK. The source's Calendly
  URL is still in the content module if a booking flow is wanted.
- **The floating "Visit Website" overlay is not reproduced** — a fixed GIF
  with no accessible name and no new-window warning. Its destination is now a
  labelled secondary button in the closing band.
- **Alt text rewritten.** Five content images and all nine logos use
  `alt="Mindlogicx"` on the source, which describes none of them. Decorative
  ones are `alt=""`; logos name their institution.
- **Heading outline fixed.** The source's banner is an `h2`, there is no `h1`
  at all, and the statistics component emits **three `h1`s containing `<p>`**
  (invalid HTML). This page has one `h1` and a normal outline.
- The asset with a literal `&` in its filename
  (`Question-paper-authoring-&-delivery.webp`) was renamed
  `qp-authoring-and-delivery.webp`.
- Images copied local and recompressed: **2.39 MB → 1.36 MB**.

### Verbatim faults, preserved

Singular heading **"Feature"**; double space in "examination management
 platform"; a missing word in "transform how create, deliver and evaluate";
**"Request To Demo"**; "Question Paper Delivered"; `®` on IntelliEXAMS® in the
body but not the title or CTA; "On Screen Marking" and "On-Screen Marking"
both used.

## The 2026-10-14 light-mode pass

The client asked for the two dark bands on the home page to go light, two
sections to be commented out, and the About intro's backdrop removed. None of
those is a background swap — each one moved type onto a surface it was not
coloured for, and each one disturbed the page's tone alternation.

### Flipping a band inverts its whole palette

`MindGENIE` (home) was the page's only ink band and **cyan was doing all its
accent work precisely because purple is unreadable on near-black** (2.10:1).
On white the two trade places: purple is 8.6:1, cyan would be 2.5:1. So the
flip meant every accent → `--accent-text` (purple), headings → `--ink`, body →
`--grey-500`, and the agent cards from 3.5%-white-on-ink to real white cards
with a hairline.

`Why Mindlogicx` was worse: it was a full-bleed photograph with **no scrim**,
which was safe only because the picture's brightest pixel is 0.024 relative
luminance. Removing it meant inverting the counters' rail, the glyph discs,
the ring markers and the trust-pillar cards as well as the type.

**One rule had to stay white**: `.ls-why__metric:hover .ls-why__glyph` is solid
purple on hover, so it is the only dark surface left in the band. A blanket
`--white` → `--ink` swap broke it and had to be put back.

All 17 text styles across the two bands were re-measured afterwards: lowest is
**4.59:1** (the MindGENIE principle body on its purple tint), everything else
≥ 4.73. None below AA.

> ⚠️ Measuring trap: `color-mix()` computes to `color(srgb 0.96 0.95 0.97)` —
> components are **0..1, not 0..255**. A contrast probe that assumes `rgb()`
> reads that near-white plate as near-black and reports a failure that is not
> there. It cost one false alarm at "4.12:1".

### Removing a section inverts every band below it

- **Home**: `Affiliations` was the last `--white` band. Commented out, the page
  now ends on `WhyMindlogicx`'s smoke — no other change needed.
- **About**: `AdvisoryBoard` was `--white` **between two `--smoke` bands**.
  Commenting it out left Leadership and StandFor both smoke, running together
  as one block. Four sections had to flip: StandFor → white, Philosophy →
  smoke, WhyChooseUs → white, Dei → smoke. **Put Advisory Board back and all
  four flip again.**
- **About intro**: its pale backdrop was the only thing separating it from the
  white page title above and the white Ethics band below. It is now `--smoke`,
  not white, or all three would have merged.

Both pages were re-measured for adjacent same-tone bands afterwards: none.

Nothing was deleted. `home/Affiliations.jsx`, `about/AdvisoryBoard.jsx`,
`common/AgentOrchestration.jsx`, `aboutus_intro_bg.png` and
`why-mindlogicx.jpg` all stand, with their content still in `site.js` /
`about.js`.

### "Our Principles" is a list now, not a card grid

Nine principles, 3×3 tinted cards → hairline-ruled rows, heading left and
paragraph right. The paragraphs run 23–48 words, and in a card grid every tile
stretches to the tallest in its row, so a third of the grid was whitespace.
The six-colour wash rotation also repeated after six, implying a grouping the
flat list does not have.

### ⚠️ The product pages' imagery is reused, not new

`/knowledge-engineering` and `/ai-first` each gained three photographic bands
to break up what was ten near-identical `SectionIntro` + `ItemGrid` + callout
sections.

**Every image is already in use elsewhere on the site.** There is no unused
relevant artwork in `public/assets/images` — everything there is a product
shot, a portrait, or already carrying another page. What was picked is the
only bespoke Mindlogicx artwork that is genuinely *about* each section:

| page | section | image | also used by |
|---|---|---|---|
| knowledge-engineering | lede | `knowledge-engineering.webp` | home hero |
| knowledge-engineering | MindGENIE | `ai-native.webp` | home hero |
| knowledge-engineering | Why Mindlogicx | `one-world.webp` | home hero |
| ai-first | MindGENIE | `mindgenie.webp` | home MindGENIE band |
| ai-first | AI Labs | `security-by-design.webp` | home hero |
| ai-first | Why AI-First | `built-for-trust.webp` | home hero |

`ai-native.webp` is deliberately **not** on `/ai-first` even though it suits a
MindGENIE band — `/knowledge-engineering` takes it, and using it on both would
put one photograph on two sibling pages.

**Dedicated artwork for these two pages would be better.** Swapping it in is
six paths, in the `ART` map at the top of each page component.

## The hero scrim is dark now, and it could not simply be deleted (2026-10-14)

The client asked for the white overlay on the hero to go, along with new
photography for all five slides.

**Deleting it was not an option.** The new frames are high-dynamic-range in
exactly the region the copy occupies — every one contains both near-black
pixels (dark boardroom, suits) and near-white ones (windows, sky) under the
text. Measured over the glyph area of each frame:

| copy colour | scrim | worst contrast |
|---|---|---|
| ink (as built) | none | **1.08 – 1.12 : 1** |
| white | none | **1.00 – 1.05 : 1** |

Neither colour works unaided. So the choice was a scrim or unreadable type,
and a **dark** one was chosen over the old white wash because it keeps the
photography looking like photography instead of bleaching it — which is what
the client was objecting to. The copy flipped to white with it.

The stops are derived. White over the **brightest pixel** under the glyphs
needs black at **45%** for the 55px heading (3:1) and **55%** for body copy
(4.5:1). Shipped at 62% → 58% across the copy side, back to zero by 80% where
every frame's subject sits.

Re-measured in the browser afterwards against **real glyph boxes** (Range
rectangles, sampling the composited photo+scrim pixel under each): worst case
across all five slides is **4.53:1**, best 7.08:1. Nothing below AA.

> ⚠️ **There are three scrim rules, not one.** `ls.css` has the desktop
> gradient and `ls-responsive.css` overrides it twice — a wider horizontal one
> below 992px and a fully-opaque *vertical* one on mobile, where the copy sits
> over the top of the frame and the artwork gets the bottom. Changing only the
> desktop rule looks correct on a desktop and leaves the other two inverted. A
> probe at 618px wide read the mobile rule and reported a white gradient after
> the desktop one had already been changed.

### The image swap

All three sets were supplied as PNGs and converted:

| set | where | PNG → WebP |
|---|---|---|
| 5 hero slides | `hero_background/*.webp` (same five names) | 9.5 MB → 0.46 MB |
| 5 sector cards | `sectors/*.webp` | 0.75 MB → 0.13 MB |
| 3 ESG pillars | `pages/esg/*.webp` | 6.4 MB → 0.22 MB |

Superseded files deleted at the client's request: the five old hero backdrops
(overwritten in place), their `new_bg/` PNG originals, `project-thu1–5.webp`,
and `Environmental.jpg` / `Social.jpg` / `Governance.jpg`. The supplied PNG
source folders were removed too.

**Two deletions had non-obvious dependants:**

- The five hero backdrops are **also** the artwork on `/knowledge-engineering`
  and `/ai-first` (the `ART` maps added on the same day). Overwriting in place
  rather than renaming kept both pages working and gave them the new art for
  free. Swapping a backdrop still changes both places.
- `project-thu1–5.webp` were used **twice** in `site.js`: by the sector cards
  *and* by the platform cards, which are not rendered on any page since
  `Platforms`/`PlatformsAlt` came off the home page. Deleting them would have
  left dangling references in live content. The platform cards now point at
  `products/<slug>.webp`, which already existed and actually match them.

## 2026-10-15 changes

### /about lost its title band — so its `h1` moved

The client asked for the "About Us" title to go: the page opened with those
words and then said "Who We Are?" immediately below, which was the same
statement twice.

**Deleting it alone would have left the page with no `h1` at all** — no
document outline for a screen reader, and nothing for a search result or link
preview to name the page with. `Intro`'s "Who We Are?" is the `h1` now. It was
already the page's first heading and already set at 44px, so nothing moved
visually. `banner.title` and `banner.bgImg` stay in `about.js`, unrendered.

"About Us" now appears only as the header nav link, which is correct.

### The closing CTA on /knowledge-engineering is one line each

`--single` is a **modifier**, not a change to `.ls-ke__closeheading` /
`.ls-ke__closebody` — those also dress the closing bands on `/intellitute`,
`/intelliwork` and `/intelliexams`, whose copy is longer and would overflow.

What forced the wrap was the measure, not the type size: `20ch` on the heading
and `60ch` on the body. Both lifted; the heading drops 56px → `clamp(22px,
3.1vw, 36px)` because the line is 58 characters, which needs ~28em, and 28em
of 56px is 1568px against a 1152px container.

⚠️ **The body had to become fluid too.** At a flat 17px the 131-character
sentence needs ~1050px, and the container is 875px at a 1000px viewport — so
with `nowrap` it overflowed and was **clipped**. The page did not scroll
sideways; the end of the sentence simply vanished, which is the kind of thing
a page-level overflow check does not catch. It is `clamp(13px, 1.35vw, 17px)`
now, measured clean from 765px of container upward.

`nowrap` applies only above 992px. Below that no type size puts 58 characters
on a phone without shrinking it to nothing, so it wraps normally.

### The framework section — three designs, and why

1. **`.ls-flow`** — a vertical pipeline. Dropped because it is the same
   primitive carrying IntelliTUTE's "How It Works" and IntelliWORK's journey,
   so the page's one genuinely structural diagram looked like two other
   pages' step lists.
2. **`.ls-kef` v1** (2026-10-15) — full-width stacked bands, stage title left
   and inputs right, with a left rail deepening down the stack. Read as a
   list of five rows rather than as a sequence.
3. **`.ls-kef` v2** (2026-10-16) — five columns left to right, the direction
   the framework is actually read in, on **one connecting rail** with a node
   per stage. The node fill deepens across the five, which is how progression
   is shown without numbering them (banned site-wide).

The rail is drawn on `.ls-kef__stage::before` rather than on a wrapper, so it
inherits the grid cell's width exactly; the first and last are trimmed to 50%
so the line starts and stops at the outer nodes instead of floating past them.

The deck's caption — security, governance and human oversight span the whole
lifecycle — is still one dashed band under all five columns rather than a
sixth stage, because that is what "span" means.

**Responsive, measured at three widths**: 5 columns at 1280px (210px each),
3 + 2 at 900px (250px each), one column at 375px. At the narrowest the rail
**turns vertical and moves to the left of each stage** — a horizontal rail
across a single column would be a stub beside every heading and read as a
rendering fault. Verified: no chip overflows its box and no page-level
horizontal scroll at any of the three.

`.ls-flow` is untouched; the other two pages still use it.

### A latent bug in `Reveal`, found by using it

`Reveal` set `style={delay ? {animationDelay} : undefined}` and then spread
`{...rest}` **after** it. Any caller passing its own `style` therefore
replaced the animation delay silently — no error, the stagger just vanished.
The framework stack is the first component to pass both (`--kef-depth` per
stage), which is how it surfaced.

`style` is now destructured out of `rest` and merged, so both survive and an
explicit `animationDelay` from a caller still wins. Verified: the five stages
stagger 0 / 0.06 / 0.12 / 0.18 / 0.24s with their rail depths applied.

### WHAT WE DO image

`whatWeDo.image` is the client's `We_Engineer_Knowledge.jpg`, 156KB → 26KB
WebP.

⚠️ **It is only 410×311**, and the slot is ~300px tall at the full width of
its column, so it is upscaled to fill — soft on a normal screen and softer on
a retina one. Nothing in the build can add detail the file does not have; a
larger original is the only fix.

⚠️ `public/assets/images/newImages/` holds **17MB** of PNG/JPG, including
duplicate copies of the hero and sector art already installed and converted on
2026-10-14. Everything under `public/` ships. It is dead weight until removed.

## Home page, 2026-10-15: Our Strength and the Why Mindlogicx wash

### "Our Strength" is three columns, not three cards

It was a 3-up grid of tinted `Card`s sitting **directly above "Why
Mindlogicx", which is four more plates** — two plate grids back to back read
as one long grid rather than as two separate arguments. The six-colour wash
rotation also implied a grouping that is not there: Strategy, Brand and
Technology are three facets of one claim, not three categories.

Now three columns divided by vertical hairlines, no plates and no tints: mono
label, title, short accent rule, paragraph.

Deliberately **not** the hairline-row treatment `/about` uses for "Our
Principles". That one is rows because it has nine items and long paragraphs;
this has three and short ones, so it goes across. Below 991px the columns
stack and the divider turns horizontal — at 2-up the odd one out sits alone on
a second row with a rule down its left and nothing beside it, which reads as a
mistake.

### Why Mindlogicx — redesigned, and the gradient is gone (2026-10-16)

This band has been reworked more than anything else on the site:

1. full-bleed photograph, white type
2. flat `--grey-50`
3. a pale two-brand wash
4. a tinted purple→cyan gradient
5. solid cyan
6. the brand gradient at full strength, white type — **four of six text
   styles below AA**, the heading worst at 2.89:1 because 320° put cyan
   behind it
7. **this**

The fix is structural, not another colour: **the type no longer sits on a
brand colour at all.** The band is `--smoke`; the four figures moved into
**one dark ink panel**, where cyan reads at 7.38:1 and white labels at
18.9:1; the trust pillars became white cards.

Measured after: all eight text styles pass, worst **4.73:1** (body copy on
smoke — `--grey-500`, the same as everywhere else on the site).

#### What was dropped with it

The counters used to ride a **335px vertical rule** with a 60px glyph disc,
alternate columns bottom-aligned for a zigzag, and a ring-and-dot marker per
figure. All retired — `.ls-why__rail`, `.ls-why__marker`,
`.ls-why__metric--low`, `.ls-why__bg` and `LINE_HEIGHT`.

That decoration was built for a full-bleed photograph, reserved a block of
dead height around two-line figures, and **was dropped entirely below 1024px
anyway** — so the desktop and mobile versions of this band were two different
designs. The figures now sit in a plain grid: 4-up, 2-up, 1-up, one design at
every width.

> ⚠️ **A clipped figure that no overflow check catches.** At 375px the
> metrics were 2-up in ~123px cells while a rule in the **767px** block keeps
> the figure at 44px (it wins over the 991px block's 38px — later wins at
> equal specificity). "10M+" measures **152px**. It was overflowing its cell
> and being silently clipped: the page does not scroll sideways when a grid
> cell overflows, so a page-level check reports clean and the figure just
> loses its last character. Caught by measuring `scrollWidth` on
> `.ls-why__value` itself — a leaf-element sweep misses it too, because that
> element has children.
>
> Fixed with a single column below 576px: 278px a figure instead of 123px.

Responsive verified at 1280 / 768 / 375 / 320px — no element in the band
overflows at any of them, and the home band rhythm still alternates with no
two adjacent sections sharing a tone.

### "Our Strength" is three columns, not three cards

It was a 3-up grid of tinted `Card`s sitting **directly above "Why
Mindlogicx", which is four more plates** — two plate grids back to back read
as one long grid rather than as two separate arguments. The six-colour wash
rotation also implied a grouping that is not there: Strategy, Brand and
Technology are three facets of one claim, not three categories.

Now three columns divided by vertical hairlines, no plates and no tints: mono
label, title, short accent rule, paragraph.

Deliberately **not** the hairline-row treatment `/about` uses for "Our
Principles". That one is rows because it has nine items and long paragraphs;
this has three and short ones, so it goes across. Below 991px the columns
stack and the divider turns horizontal — at 2-up the odd one out sits alone on
a second row with a rule down its left and nothing beside it, which reads as a
mistake.

### The Why Mindlogicx band is the client's gradient — and it fails AA

`linear-gradient(320deg, #712d7b, #00aeef)`, specified by the client verbatim,
with all band content in white (card content excluded, by request). It
replaced, in order: a photograph, flat `--grey-50`, a pale two-brand wash, a
tinted purple→cyan gradient, and solid cyan.

**This is a documented client-directed exception, like the white "About Us"
title. Do not silently "fix" it.**

#### Why it fails

White clears 4.5:1 across only the **purple ~59%** of the ramp — purple end
8.89:1, midpoint 5.19:1, cyan end **2.53:1**. And 320° points up-left, which
puts **cyan at the top left**, so the heading block sits at the worst end of
the band.

Measured in the browser against real glyph boxes, each at its actual position
along the painted ramp:

| element | size | contrast | at | needs | |
|---|---|---|---|---|---|
| eyebrow | 14px | **2.87:1** | 91% | 4.5 | ✗ |
| title | 56px | **2.89:1** | 90% | 3 | ✗ |
| metric label | 22px | **3.99:1** | 68% | 4.5 | ✗ |
| body | 20px | **4.49:1** | 60% | 4.5 | ✗ (by 0.01) |
| figures | 68px | 3.79:1 | 71% | 3 | ✓ |
| CTA | 15px | 5.19:1 | 50% | 4.5 | ✓ |

Card content is unaffected — the pillars are opaque white, their title ink at
18.67:1 and their body grey-500 at 5.07:1.

#### Remedies, if it is ever revisited

In increasing order of departure from what was asked:

1. **Flip the angle to 140deg.** Same two colours, same strength — it just
   puts purple at the top left, under the heading, instead of cyan. The
   headline would go from 2.89:1 to roughly 8:1. Cheapest fix by far.
2. **Stop the cyan short** — e.g. `#712d7b 0%, #00aeef 140%` — so the painted
   band never reaches full cyan.
3. **Put the copy on a panel**, as the trust cards already are.
4. Ink instead of white: the inverse problem — ink works on cyan (7.38:1) and
   fails on purple (2.10:1).

#### Two bugs introduced and caught while whitening the band

Both came from a blanket `--ink` → `--white` replace across the block:

- `.ls-why__pillartitle` went white **on an opaque white card** — invisible.
  Card content is explicitly excluded from "all white"; it is ink again.
- `.ls-why__glyph` ended up a **white icon on a white disc**, because the
  translucent-plate value landed on `.ls-mg__rule` instead (the first
  `background: var(--white)` in the block). The disc is now 20% white with a
  white icon; the rule is solid white.

Measured after the change — see the table above for Why Mindlogicx. Our Strength:
label 8.3:1, title 17.44:1, copy 4.73:1. Home band rhythm re-checked: no two
adjacent sections share a tone.

## 2026-10-15, second pass

### Leader designations are set in the body face

`.ls-person__role` was 12px mono, uppercase, +0.06em tracked — the same
treatment as the eyebrows and index labels. It is now 15px Roboto, normal
case.

Beyond the client's preference, it reads better here because these are job
titles carrying real punctuation — "Director & COO (Healthcare)", "Secretary -
Food Committee". Uppercasing them flattened the capitalisation that tells a
reader which words are proper nouns.

⚠️ **This also restyles the Mindlogicxian Club governing board**, which shares
the `Person` component — wanted, since those are job titles too, but a second
place to check after touching this rule.

Sharmila Sathi Rao's designation is now "Director & COO (Healthcare)". That is
the **second** relabel: it was "Director & COO (MasterHealthPro)" until
2026-10-12 and "Director & COO (MHP with Healthcare)" until today. Both
earlier forms are recorded in the comment above the entry in `about.js`.

### The KE hero lost its two CTAs

"Explore Our Capabilities" (an in-page anchor) and "Talk to Our Experts" are
no longer rendered. `hero.ctas` still holds both in the content module with
the deck's own link targets, so restoring them is putting the block back.

The closing band's "Connect with Our Experts" is untouched — the page still
has one route to contact.

### Three About images replaced

| section | file | note |
|---|---|---|
| Our Philosophy | `aboutus/philosophy-innovation.webp` | 1447×1087, **exactly 4:3** — fills its frame uncropped |
| Why Mindlogicx | `aboutus/why-choose-us.webp` | 542×575 |
| Our Commitment | `aboutus/dei.webp` | 542×575 |

2.70MB → 0.21MB.

⚠️ **The two 542×575 images are portrait going into a 4:3 frame**, so
`object-fit: cover` crops about 29% of their height, centred. Checked before
shipping: the faces sit in the upper-middle of both and survive the crop; what
is lost is ceiling at the top and floor at the bottom.

⚠️ They are also only **542px wide against a 522px slot** — fine at 1×, soft
on a retina screen. The philosophy image has the resolution to spare; these
two do not. A larger original is the only fix.

The files they replaced — `aboutus/innovation-hub.webp`,
`mlx/about/why-choose-us.webp`, `mlx/about/dei.webp` — were left in place;
nothing asked for their removal.

## Contact Us gained a second office (2026-10-15)

`MINDLOGICX ASIA SDN. BHD`, Kuala Lumpur — verbatim, including the client's
capitalisation (no full stop after BHD) and their own line breaks.

### ⚠️ The "second" new address was already on the page

The client supplied two addresses to add. The second —

> Mindlogicx Infratec Limited, 10/1B, Graphite India Main Rd, KEB Colony,
> Industrial Area, Whitefield, Bengaluru, Karnataka 560048.

— is **the same street address that was already there** as Head Office. The
only new information in it was the legal entity name. Rendering it as a second
card would have printed one address twice on a contact page, so the entity
name was added to the existing Head Office entry instead and the client was
told. Flipping it into a separate card is a few lines if that is what was
wanted.

### Two structural fixes this forced

- **The render keyed boxes on `box.type`.** That was unique while only one
  address existed; a second `type: "address"` would have collided. Every box
  now carries an `id` and the render keys on that.
- **`.ls-contact__line` is capped at 34ch**, tuned for the e-mail rows. The
  longest supplied address line is 53 characters, so address lines carrying
  the client's own breaks would have been re-wrapped on top of them. Lines
  that follow an entity name get 46ch. Checked at 1280px and at 375px: every
  supplied line renders as exactly one line, and nothing overflows its box.

## Legal and Healthcare pages (2026-10-15)

`/voice-of-law` and `/health-tech`, from Technology → Legal and Technology →
Healthcare. **Both menu items already pointed at these paths**; they were
falling through to `Placeholder`, so adding the pages made the links work
without touching the navigation.

Source: `~/Documents/AntigravityProjects/mlx-website-2025-frontend` — **a
different checkout** from the `OfficeProjects/Mindlogicx_India/...` one that
ESG, Careers and IntelliEXAMS came from. Both were read from local source and
cross-checked against that project's dev server on :3000; the two agreed, so
no drift between the checkouts showed up on these routes.

### Both source pages have no `h1` at all

Voice of Law runs h2, h2, h2, h2, h3, h5, h3 — the page title is an `h2`,
"Our USP" is an `h3` among `h2` siblings, and the `h5` is used purely for
font size with no `h4` above it. HealthTech's served document contains exactly
one `h2` (banner) and one `h3` (CTA). Both pages here are h1 → h2.

### Voice of Law

**Two images were swapped back.** In the source `vol_how_it_works.webp`
renders in *Our Services* and `vol_our_service.webp` in *How It Works?* — and
the hard-coded width/height on each `<Image>` matches the **other** file,
which is what gives it away (3 of 4 `<Image>` calls declare the wrong
dimensions). Each picture is with its own section here.

**The only interactive control on the whole source page was a `<div onClick>`**
calling `window.open(…, '_blank')` with no `rel="noopener"` — not keyboard
reachable, invisible to crawlers. Its destination was a WhatsApp handoff to
+91-9071177765, the same number already on `/contact-us`, so the CTA points
there and nothing is lost.

⚠️ **Worth a Bar Council of India Rule 36 review.** "FREE Legal advise from
the licensed lawyers" is an unqualified free-of-charge promise with no terms,
and the SOS section promises immediate response to "accidents, threat to life
and property" with no SLA, coverage area or hours. Carried verbatim.

Six source typos preserved: "Every needs to be heard", "deserves es justice",
"ourr heart", "FREE Legal **advise**", "a qualified legal professionals", and
the bare fragment "Links to Resources". "VOL" is never expanded; the SOS copy
cites a "mobile app" that is never named. The meta description describes a
different product (case tracking, judiciary, digital courts).

`components/LegalTech/LegalTechContent/` is **exported but imported by
nothing** — dead code naming five products absent from the page and claiming
SOC 2, ISO 27001, GDPR/HIPAA and "up to 60 percent" cycle-time cuts. Kept in
the content module under `notRendered`; **none of it ships**.

### HealthTech is a stub, and its product names were invisible

Banner, four product cards, one CTA. That is the whole page — no heading over
the cards, no intro, no stats, no team, no testimonials. Five components are
imported and never used, which is why.

**Each card's `<h3>` is commented out**, so "Mhpro Medics (MOA)", "Mhpro
Academy", "Mhpro Clinic" and "ForHim.ForHer" never appeared as text — only as
pixels inside logos that all carry `alt=""`. The live page is four unlabelled
pictures and four paragraphs, with nothing for a screen reader, a crawler or a
link preview. They are headings here; the strings are the source's own.

**The cards are `<a>` elements with no `href`** — mouse-only. All four
destinations (`/mhpro_medic/`, `/mhpro_academy/`, `/mhpro_clinic/`,
`/forhimforher/`) are routes that do not exist here, so they render as plain
cards.

⚠️ **Card 3 describes the wrong product**: the "Mhpro Clinic" card opens "Our
ForHim.ForHer clinic…", and the next card *is* ForHim.ForHer.

⚠️ **Medical claims need review** — "accredited courses" names no accrediting
body, "India's premier online learning platform" and "the world's first
exclusive e-shop" are uncited superlatives, "scientifically formulated" is
used of supplements and anti-ageing products, and telemedicine + e-pharmacy
are licensed activities in India.

The product is spelled four ways (Mhpro / MHPro / MasterHealthPro / MHP),
"MOA" is never expanded, and ForHim.ForHer appears three ways.

A fuller "Services Description and Working Process" block (~450 words, 3 items
+ 6 process steps) is commented out in the source and preserved under
`notRendered` if it was meant to ship.

### Assets

| page | copied | PNG/WebP in → out |
|---|---|---|
| voice-of-law | 5 | 1.52 MB → 0.13 MB |
| health-tech | 4 wordmarks | 73 KB → 46 KB |

`FHS.webp` was **5636×2034** for a slot ~240px wide. The four wordmarks are
different shapes, so `.ls-ht__logo` fixes a 44px height with `contain` to sit
them on one optical baseline.

## MediaX (`/media-tech`) and the footer socials — 2026-10-15

With this, **four of the five Technology menu items have real pages**:
Education, Healthcare, Media, Legal. Only **Finance (`/mxpay`)** still falls
through to `Placeholder`.

### ⚠️ The source page is titled "BSIM"

That is the only above-the-fold heading on the live page, and the string
appears **nowhere else** — not in the rest of the page, not in its SEO data,
not anywhere in the MediaTech source tree. Almost certainly left over from
another project.

This page is titled **"MediaX"**, the product every section is actually about.
"BSIM" is kept in the content module as `title` with `titleIsSuspect: true`.
**The client should confirm what this page is called.**

### Two whitespace artifacts corrected, one real typo kept

The live body reads **"AI- driven"** and **"rollout— delivering"**. Those
spaces are not authored — they are JSX line breaks collapsing into text nodes
mid-word. The intended text ships here; `bodyIntendedText` in the content
module holds it. Reproducing a rendering bug would read as this build's
mistake.

**"Ent-to-End Creative & Production Powerhouse" is left exactly as written.**
That one is a genuine typo in the copy, not an artifact, so it is carried like
every other verbatim string. The distinction is the whole point: fix what the
renderer broke, keep what the author wrote.

### What the source does not have, and was not invented

- The six **"Impact Stories" are not stories** — each card renders a category
  label and nothing else, under an intro promising "measurable business wins".
  Their `title` fields never reach the DOM and are template filler that does
  not match its own category ("Embedding Design Ops Across Teams" filed under
  Live-Action & Virtual Production).
- The **four process steps have no descriptions** — every one is commented-out
  lorem ipsum, so they are bare one-word labels. They take the mono label
  treatment here rather than a heading size that would imply missing copy.
- **Cards 1 and 4 share one image**; "Localization & Accessibility" appears
  twice (impact category and service module) with two different pictures.

### Accessibility fixes carried over from the source

- **No `h1` anywhere**, and section 2 jumps `h2` → `h4` while sections 3–4 use
  `h3` for the same card role.
- **Nothing is a dead link now.** All 7 service tiles and all 4 slider steps
  are `href="#"`; all 6 impact cards point at `/portfolio/portfolio-details/`,
  an unmigrated template demo route.
- **The closing CTA was broken four ways**: a `<div onClick>` with no href,
  role or tabIndex; routing an external `https://wa.me/…` through Next's
  `router.push()`; dispatching an empty Calendly URL; and shipping an empty
  `<p>`. It is a real link to `/contact-us`.
- **12 images carried `alt="Mindlogicx"`** — the company name, not a
  description. Decorative here, with the heading naming each one.

Two files the extraction flagged as *probably blank placeholders* on size
(`GreenScreenStudio.webp` 8.5 KB, `impact_stories/LocalizationAccessibility`
29 KB) were **checked and are real photographs**. The green-screen one is
green-dominant — its extrema cap at R192/G225/B96 — which is why it
compresses so far. Neither was replaced.

Images: 18 copied, **2.42 MB → 0.32 MB**.

### Footer socials

All five marks have URLs now; three (Facebook, X, YouTube) were `null` and
rendering dimmed. They came from the 2025 frontend's `Layouts/Footer.tsx`.
LinkedIn and Instagram were already here and **match that source exactly**,
which confirms the right accounts.

Reachability was checked, not assumed: Facebook, LinkedIn, Instagram and
YouTube all 200.

> ⚠️ **The X account could not be verified.** The source writes
> `twitter.com/MindlogicxLtd`, which redirects to `x.com/MindlogicxLtd`; the
> redirect target is used so the link does not take an extra hop. x.com blocks
> automated requests, so whether that handle is live and still the company's
> needs a human check.

> Note for whoever edits that reference footer: it contains **three copies** of
> the social block and two are commented out. All three carry identical URLs
> today, so nothing turned on it — but editing the wrong copy would be silent.

## MediaX title removed, HealthTech rebuilt — 2026-10-15

### `/media-tech` lost its visible title, not its `h1`

The `h1` is **kept, visually hidden**. On `/about` the same request was met by
promoting an existing visible heading ("Who We Are?") — that was not possible
here: the first band has no heading of its own (the source puts a logo image
where one would go) and the next heading is "MediaX Impact Stories", which
names a *section*, not the page.

Deleting it outright would have left the page with no `h1` at all — no
document outline for a screen reader, nothing for a search result or link
preview. Verified: one `h1`, rendered 1×1 px, text "MediaX".

### `/health-tech` was replaced wholesale

The stub ported from the 2025 frontend — four MasterHealthPro /
ForHim.ForHer cards, product names visible only as pixels inside logos — is
**entirely gone**, from the client's own deck
(`~/Downloads/HealthTech Solutions/HealthTechSolutions.html`).

`content/pages/health-tech.js` still holds the old content unrendered, with
everything that was flagged about it: the "Mhpro Clinic" card that described
ForHim.ForHer, "accredited courses" with no accreditor, the four spellings of
the product. The four old logo files remain in `public/`, now unused.

New content is in `content/pages/health-tech-solutions.js`. Verified in the
browser: no "Mhpro", "MasterHealthPro" or "ForHim" string survives.

#### ⚠️ The hedging in this copy is load-bearing

The deck closes with an instruction from its author:

> "AI capabilities, regulatory certifications, prescription automation and
> platform availability should not be advertised as established facts until
> validated."

and asks that the page position Mindlogicx as a HealthTech SaaS innovator,
**not as a hospital, clinic or medical-treatment provider**.

The copy is written to match — "is developing", "aims to", "is being
designed", "envisioned", "proposed", "subject to medical validation and
professional judgement", and plainly *"Our healthcare SaaS platform is
currently under development."*

**Every one of those qualifiers is doing legal work on a page about medical
care.** Copy-editing them into the present tense would turn a description of
an unbuilt platform into a claim about a live medical service. Five of them
are asserted in the verification sweep so a future edit that flattens them
shows up.

#### ⚠️ The images may not be Mindlogicx's to use

Their alt text in the deck names **other companies' products** — "Helios Med |
AI Health Assistant" and "Tjänster – VIV-IQ" (Swedish) — which suggests they
were lifted from third-party marketing sites. The pictures are generic
clinical stock with nothing Mindlogicx-specific in them. **Licensing needs
confirming before this is public.**

None of that alt text is used; none of it describes the picture it was
attached to. The images illustrate rather than inform, so they are decorative
and the headings carry the meaning. Original alt is recorded per image in the
content module. 320 KB → 201 KB.

#### What was dropped from the deck, and why

- **The deck's last two headed blocks are not on the page.** "Recommended
  webpage presentation" and "SEO recommendations" are instructions to whoever
  builds this, not words for the reader — the same call made for the
  Knowledge Engineering deck's "Visual Design Direction". The layout advice
  was followed where it agreed with this site's pattern; the title and
  description went into `seo`. Asserted absent in the sweep.
- **The section numbers** ("1." … "7.") and the care journey's "Step 1" …
  "Step 5" labels, per the site-wide no-numbering rule from 2026-10-12. Both
  kept in the content module. Asserted absent in the sweep.
- **"Partner With Us"** as the hero's second CTA — removed site-wide on
  2026-10-12. The phrase still appears once as section 7's *subheading*
  ("Partner With Us in Digital Healthcare Innovation"), which is deck copy,
  not a control; verified no element carrying it is a link or button.
- **The two closing CTAs had labels but no destinations.** "Connect With Our
  HealthTech Team" → `/contact-us`; "Explore Mindlogicx Solutions" →
  `/knowledge-engineering`, the closest thing to a solutions overview here.
  Both are this project's choices, not the deck's.

⚠️ The deck suggests the URL `/healthcare-solutions/`. The route stays
`/health-tech` because Technology → Healthcare points there.

## Monospace removed site-wide (2026-10-16)

Every label set in Roboto Mono moved to the body face at the client's request
— 14 rules: stage titles, index marks, category chips, counters, bar values,
breadcrumbs, pillar sub-labels, gallery meta, step labels.

`.ls-eyebrow` was **already** the body face with uppercase + 2px tracking, so
the pattern's signature labels were untouched and the page character holds.

Two consequences worth knowing:

- **`.ls-lb__count` and `.ls-lb__zoom` lost tabular alignment.** Those two
  change while you watch them — "3 / 24" as you page, "150%" as you zoom —
  and monospace was stopping the width jumping. They now carry
  `font-variant-numeric: tabular-nums`, which does the same job in a
  proportional face.
- **Roboto Mono is no longer loaded.** Nothing referenced it afterwards, so it
  was two unused weights on every page view. `--font-mono` is kept as a token
  with a comment saying it is unused *and* unloaded — using it now would
  silently fall back to the system monospace.

Verified: **0 elements computing to a monospace family** across 10 routes.

## Finance (`/mxpay`) — 2026-10-16

All five Technology menu items now resolve to real pages. Built from the
client's deck; route stays `/mxpay` because the menu points there and
`site.js` already redirects `/finance/` to it, though the deck suggests
`/finance`.

### ⚠️ 16 of the deck's 21 images are not used

**Every one of the 21 alt texts is a source-page title rather than a
description** — PAYSTRAX, Cardstream, Citcon, Bemobi, QorePay, SWIFT,
Worldline, Visa, Fidoo, Clearview Federal Credit Union, Grappler, buva.ai,
WKO, IBN360. Seven are payment companies: **direct competitors in the exact
vertical this page sells into.**

Six carry another company's branding **inside the frame** and are withheld on
those grounds — checked by eye, not taken on trust:

| file | what is visible |
|---|---|
| `image21` | a complete **GRAPPLER.IO advertisement** — logo, brand colours, marketing copy, their "90.5%" statistic |
| `image12` | **Clearview Federal Credit Union**, **Mastercard** and **Verifone** marks, all legible |
| `image18` | **BEMOBI** logo on a Portuguese analytics dashboard |
| `image9`  | an apparent **Worldline** product screenshot with real figures |
| `image5`  | the **IMPS** mark |
| `image3`  | a Czech **Fidoo** finance dashboard |

Shipping those would present another company's advertising as Mindlogicx's
own product, and a card-network logo on a payments page implies a
relationship that does not exist. Trademark and reputational exposure, not a
styling preference.

**The five used carry no identifiable branding.** Licensing is still
unconfirmed for all 21 — the deck records no source, licence or photographer
— so they are placeholders until that is settled. All five are decorative;
the deck's alt text describes someone else's product and is never reused.

The five capability cards are **text only**: two of their images are in the
withheld list, a third has an unidentified logo and a fourth has visible
lorem ipsum. A grid where some cards have pictures and others do not reads as
broken, so none do.

### ⚠️ The hedging is load-bearing

Section 5 is titled **"How the Platform Is Envisioned to Work"**. The deck
runs ~18 qualifiers of that kind, plus two explicit disclaimers — settlement
"through appropriately licensed or authorized financial partners", and
"Platform under development". On a payments page those are the difference
between describing an unbuilt product and claiming to already move other
people's money. Seven are asserted in the sweep so a later edit that flattens
them shows up.

There is **no PCI DSS, ISO, RBI or PSD2 claim anywhere** in the deck, which
is correct for a platform in development. Do not add a compliance badge row.

The disclaimers are styled smaller than body copy but **not faint** —
grey-500 on white is 4.73:1. A legal qualifier that is hard to read is worse
than an absent one, because it looks like it is being hidden.

### Author guidance kept off the page

The deck's preamble (which says outright it "is designed for direct use by
the UI/UX designer and website development team"), "8. SEO & Website
Metadata" and "Recommendations for Website Implementation" are instructions
to the builder, not words for the reader — same call as the HealthTech and
Knowledge Engineering decks. All in `authorGuidance`. **Flywire**, named in
the preamble as the model being followed, is a listed US competitor and never
reaches the page. Asserted absent in the sweep.

### Responsive

Measured at real viewport widths, not by shrinking a container — media
queries key off the viewport, so a container probe reports failures that do
not exist and was discarded.

| width | solutions | industries | feature | overflow |
|---|---|---|---|---|
| 1280 | 3-up | 4-up | 2-col | none |
| 768 | 2-up | 2-up | 1-col | none |
| 375 | 1-up | 1-up | 1-col | none |
| 320 | 1-up | 1-up | 1-col | **zero leaf elements overflow** |

## MindGENIE restructured around a landscape lockup (2026-10-16)

The artwork for this section has changed shape three times: the
agent-orchestration diagram, then a square 840×840 character, and now a
**landscape "Powered by MindGENIE" lockup** — character plus wordmark,
**486×240 with transparency**.

The layout had not kept up. A wide mark was still being placed in a square
right-hand column capped at 500px, which is why it looked small: the column
constrained its *width*, and a landscape image needs width.

It now **opens the section at full width**, with the copy running two-up
beneath it. That also suits what the mark says — "Powered by MindGENIE" is an
opening statement, not a side illustration.

`.ls-mg__head` kept its two columns but became copy-only: headline left,
supporting copy and the definition right, aligned to the **top** rather than
centred. With the picture gone from that row there is nothing to centre
against, and a 2-line headline beside a 6-line column looked adrift.

> ⚠️ **560px is a ceiling, not a preference.** The file is 486px wide, so the
> desktop size is already a ~15% upscale, and on a 2× screen it is soft above
> roughly **243 CSS px** whatever the CSS says. It cannot be made meaningfully
> larger without a bigger export — that is a property of the file. The one
> width where it is genuinely sharp is the 320px mobile cap.

No plate behind it: the artwork is transparent and sits on the band.

Measured: 560×277 at 1280px (1.15× upscale), 320×158 at 375px (0.66×, sharp),
head collapses to one column, no overflow at either width.
`.ls-mg__portrait` and its mobile rule are retired; `.ls-mg__visual` is gone.

## The sector cards were cropping 44% off every image (2026-10-16)

The sector artwork is **410×461 portrait** (ratio 0.889). The card's image
frame was `aspect-ratio: 16 / 10` — landscape, 1.6 — with `object-fit:
cover`. Measured across all five cards in the browser: **44% of each picture
was being discarded**, and because the subjects are composed portrait, what
went was the top and bottom of each one.

The frame is now `aspect-ratio: 410 / 461` — the artwork's own ratio — so
nothing is cropped. Measured after: **0% on all five**. The image area grew
from 323×202 to 323×363, and the cards from ~380px to 541px tall, which is
the honest consequence of portrait source art in a full-column-width card.

> ⚠️ **That ratio belongs to the files, not to the design.** Swap in
> landscape artwork and it must change with it, or the new pictures get
> pillarboxed instead of cropped.

Checked at 375px too: 0% cropped, card 495px, no page overflow. The two
elements that report as overflowing inside the band are Swiper's container
and track — a carousel track is *meant* to be wider than its viewport, which
is how it slides. Autoplay gating re-verified afterwards: still idle at the
top of the page for 5s.

## The sector carousel waits for the reader (2026-10-16)

Autoplay used to start the moment the page loaded. On a home page this long
that meant the carousel had usually rewound past all five cards before anyone
scrolled far enough to see it — **the band sits 1935px down**, so the movement
was spent on an empty screen.

Swiper is still *configured* to autoplay, and that autoplay is **stopped
immediately in `onSwiper`**; an `IntersectionObserver` on the section starts
it when the band is genuinely in view, then disconnects.

> Stopping at init rather than omitting the config is the load-bearing part:
> `swiper.autoplay` only exists when the Autoplay module has something to
> configure. Omit the config and there is nothing to `.start()` later.

Threshold is **0.35** — about a third of the band on screen — so it begins
when the cards are actually visible, not as the first pixel crosses the fold.

**It never starts under `prefers-reduced-motion`.** A carousel that advances
on its own is exactly what WCAG 2.2.2 covers; the prev/next controls still
work, so nothing becomes unreachable.

Verified: parked at the top of the page for **9 seconds** — nearly three
3500ms cycles — the active slide stayed at index 0 and the track transform
never changed. Scrolling down to 80% visibility, it advanced 0 → 1 → 2 on
consecutive ticks.

## Why Mindlogicx lost its closing link (2026-10-16)

Removed at the client's request. `whyMindlogicx.ctaText` and `ctaLink` are
still in `site.js`, unrendered. `Link` and `ArrowRight` were dropped from the
component's imports with it — the band now contains **no links at all**,
which is worth knowing before anyone wonders where the section's outbound
route went.

## Legal (`/voice-of-law`) rebuilt from the client's deck — 2026-10-16

The page ported from the 2025 frontend is **entirely replaced**. Verified in
the browser: no "FREE Legal", "VOL platform", "vetted network", "pan India" or
"Immediate resolution" string survives. `voice-of-law.js` still holds the old
content, unrendered.

### The new deck resolves most of what was flagged

| old problem | now |
|---|---|
| no `h1` anywhere | real `h1` |
| "FREE Legal **advise**" — free-of-charge promise + typo | gone; no free-advice promise anywhere |
| SOS: "Immediate resolution … threat to life and property" | "Location-aware **guidance** to relevant emergency contacts … **subject to regional availability**" |
| "carefully vetted network", "pan India" | gone |
| "VOL" never expanded | gone |
| six grammar/spelling errors | the new deck has none |
| orphan block claiming SOC 2, ISO 27001, GDPR, "60 percent" | not carried over |

The SOS rewrite is the single biggest improvement: guidance *toward* help,
hedged by availability, instead of a promise of intervention.

### ⚠️ A disclaimer the deck asks for does not exist

The deck's own notes require that *"Citizen-facing services should
distinguish general legal information from professional legal advice."*
**No sentence doing that was written.** The only statement of its kind is on
the professional side ("…legal interpretation, advice, and decisions remain
under qualified human oversight"), which does not cover citizens.

It was **not drafted** — inventing regulated disclaimer wording would be worse
than leaving the gap visible. `legal.requiredDisclaimer` records it. The
client must supply the text, and the page needs a **Bar Council of India Rule
36** review regardless.

### ⚠️ Harvey must not reach the page

The deck names **Harvey** as a functional benchmark and says in the same
breath that *"It should not be mentioned on the public webpage."* It lives in
`authorGuidance` only. Asserted absent in the sweep.

### ⚠️ Two naming mismatches

The deck suggests the slug `/legal`; the route stays `/voice-of-law` because
Technology → Legal points there. More awkwardly, **"Voice of Law" appears
nowhere in the deck** — it says the platform name "has not been finalised" —
so the route and the menu label name a product the page never mentions.

### A design-system gap this page exposed

`.ls-grid--2` had **no responsive rule at all**. It was added for IntelliTUTE's
"Why" pairs, which collapse via their own `.ls-prod__whygrid` override, so the
gap stayed hidden until this page used the bare class. At 375px two columns
leave ~155px a cell and "Legal Professional Intelligence" overflowed it —
taking the page's horizontal scroll with it.

`--3` and `--4` already collapsed; `--2` now does too, so the next component
to use it does not inherit the same bug. Re-checked IntelliTUTE afterwards:
unaffected.

> Also worth recording: the content module names the hero's two CTAs
> **differently** — the in-page anchor is `target`, the route is `link`.
> Assuming `link` threw `Cannot read properties of undefined (reading
> 'startsWith')` and the error boundary swallowed the whole page. The
> component reads both now.

### Images

**The deck references none.** The three on the page are reused from the old
build, matched by what they actually show. The citizen band has a picture
only because one legacy photograph happens to show a citizen rather than a
lawyer — a vertical built around citizen rights deserves artwork of its own.

## The Careers form is a disclosure

Hidden until "Apply Now", as in the original — but built as a real
disclosure rather than a CSS toggle:

- the button carries `aria-expanded` and `aria-controls`;
- the form is **unmounted** while closed, so its nine fields stay out of the
  tab order and out of the accessibility tree;
- **focus moves to the form's heading** when it opens (`tabIndex={-1}` so it
  is focusable programmatically without joining the tab order).

That last point is the one worth keeping. Without it the button is pressed,
the page grows *below* the keyboard user's focus position, nothing is
announced, and the form is effectively unreachable without hunting for it.

## Placeholders that must not ship as-is

Three things on this build are structurally finished and factually empty. All
three are marked in the UI so the gap is visible rather than quietly wrong.

| What | Where | What is missing |
|---|---|---|
| Newsroom content | `footer.newsroom` in `site.js` | Awards, MOU signings, the Indonesia event, the SMC signup and ten years of news — still none of it supplied. **No longer rendered**: the footer now carries a single "Newsroom" link. These belong on `/news-room` when it is built; the `todo`/TBC convention is documented on the export for whatever renders them. |
| Three social URLs | `company.social` | Facebook, X and YouTube have **no address**. Guessing `facebook.com/mindlogicx` risks pointing the footer at a page the company does not control, so a `null` href renders the mark dimmed and inert instead. Set `href` and it becomes a link. LinkedIn and Instagram are live. |
| ~~IntelliEXAMS diagram~~ | — | **No longer on the page** (reverted to the photograph 2026-10-13). The watermark problem stands if the animated diagrams are ever restored: all three supplied GIFs carry an **"infogiph.com" watermark** burned into the bottom-right corner, and a third party's mark should not ship on a corporate site. |
| Eight affiliation logos | `affiliations.items` | Each tile renders an **abstract geometric mark** from `icons.jsx` (`MarkRing`, `MarkHex`, …). None resembles the real logo of eAA, Don Bosco, IIBA or any trade body — drawing something *close* would ship looking finished. Set `logo` to a real file and `mark` is ignored. |
| Memberships strip | `affiliations` in `site.js` | Logo files for eAA, Don Bosco Group, IIBA and five trade bodies. Each tile sets the organisation's **name in type** — nothing here draws or approximates anyone's mark. Drop a file in `public/assets/images/affiliations/` and set `logo`; the tile swaps with no other change. |
| IntelliMINDS | `educationPage.products` | Approved positioning copy and artwork. Carries the source project's own "not approved yet" wording. |

Several of these are claims about, or property of, real third parties —
awards the company has won, organisations it belongs to, other companies'
logos and other countries' flags. **They were left empty on purpose.** The
trade bodies are also still listed by *country* rather than by organisation,
because only the countries were given; each needs its actual body named.

## The countries strip is one baked image

Supplied 2026-10-12 as a **single pre-composed PNG**, not as separate flag
files: the flags *and* the country names are drawn into the artwork
(`logos/flags_logo/MLX_Branch_Flag_White-A.png`, 8665×1260, re-encoded to a
1600px WebP). The white variant is used — the footer band is ink.

**It supersedes the six-country list that preceded it.** The artwork shows
**seven**: India, UK, USA, Ireland, UAE, Malaysia, Singapore — Singapore is
new and the order differs. `company.countries` exists only to caption the
image and must be kept in step with it; editing it changes nothing visible.

**It sits on its own row, not in the brand column.** At the brand column's
~250px the baked-in lettering rendered about **7px tall**. On its own row at
720px it is roughly 20px, which is what the artwork was drawn for.

> **The one cost of the baked-in approach:** on a 375px phone the strip is
> 334px wide and the lettering lands at about **10px**. It cannot be made
> larger without overflowing, because the names are pixels rather than text —
> they cannot reflow, be resized by the reader, or be translated. If that
> matters, ask for the flags as separate files and the previous per-country
> markup (flag + name as real text, wrapping to two rows) can come back.

## The footer's columns (2026-10-12)

`brand · Company · Domains · Products`.

- **Newsroom is a single link in the Company list.** It went from its own
  column, to a sub-group with its four categories under it, to one entry
  among About Company and Careers. `footer.newsroom` — the Awards / MOUs /
  Events / In the News breakdown with its TBC markers — is **no longer
  rendered anywhere**; it is still in `site.js`, and those categories belong
  on the `/news-room` page once that exists.
- **"Our Leadership" removed.** It pointed at `/about`, the same page as
  "About Company" directly above it.
- **Products is new** and holds the two platforms with public sites of their
  own. These are the only **external** links in the footer, so they are real
  anchors with `target="_blank"` and `rel="noreferrer noopener"`, not router
  `Link`s, and they carry an outward arrow.

> ⚠️ `themediax.ai` was supplied as a bare name rather than a URL and is taken
> at face value as its own domain. That is the obvious reading but it is
> **unconfirmed** — the one address here nobody gave in full.

## The footer lost its contact block (2026-10-12)

Removed by request: the newsletter field, the phone number, both email
addresses, and the postal address from the bottom bar. `company.phone`,
`company.email`, `company.salesEmail` and `company.address` are **all still in
`site.js`** — nothing was deleted from the content layer, so a contact page
can use them.

`.ls-footer__contact`, `.ls-footer__news` and `.ls-subscribe` are now
orphaned CSS, kept and labelled as such for the same reason.

The newsletter form had no backend; it handed the typed address to the
visitor's own mail client rather than transmitting anything. That is worth
knowing if it is ever asked for again — it will need somewhere to post to.

## "Why Mindlogicx" — the credibility band

The second port from the 2025 frontend, and the same deal as MindGENIE above:
reproduced from `components/sections/Metrics.tsx` (which renders
`homeSections.credibility`), structure for structure. The copy, the four
figures and the four trust pillars are **verbatim** from that project's
`content/home.ts` and `content/operations.ts`.

A two-up head with the body right-aligned beside the headline; four counters
each riding a 335px rule with a 60px circular glyph on it, alternate columns
dropping to the foot of the band for a zigzag; a ring-and-dot marker beside
each figure; four translucent pillar cards; the closing link.

**The figures are claims about the company** — twenty years, ten million
users, six regional operations, five service verticals. They should be
re-confirmed with the client before this goes live, not edited to taste.

The last two labels were **changed by the client on 2026-10-12** and no longer
match the source project, which reads "Regional Operating Centres" and
"Proprietary Products". `site.js` is the authority for these now, not the
port — do not "correct" them back when diffing against the 2025 frontend.

### The photograph carries the band, and there is no scrim

`why-mindlogicx.jpg` is the source's own
`PerspectivesOnKnowledgeGovernanceAndAppliedIntelligence.jpg`, laid in
full-bleed bare — which is the source's choice and is safe here only because
the picture is genuinely dark. Measured: its **brightest pixel is 0.035
relative luminance** in the rendered crop, so white type holds **14:1 at the
worst point in the frame**. Every element was then checked against the
brightest pixel actually under it: 5.83:1 (the cyan link) to 14.95:1.

**A lighter photograph would break that** and would need a scrim, like the
sector cards have. `--ink` sits behind the image so a failed or slow load
leaves white type on near-black rather than on white.

### The counter

`components/common/Counter.jsx`, ported from the source's framer-motion
version with a `requestAnimationFrame` loop and an expo-out ease.

**The true value is in the DOM from the first paint, as the `aria-label`** —
the counting digits are `aria-hidden`, so assistive technology and crawlers
never read a mid-animation "3" where the page claims twenty years. Whether it
animates at all is decided at mount, not in an effect: reduced motion or a
missing `IntersectionObserver` both start it settled, because an unobserved
counter sitting on screen reading zero would be a lie.

### Markup and breakpoints

The metrics are a `dl`. `dt` precedes `dd` because the content model requires
it and the grid rows put the figure on top regardless; the rule and the marker
live **inside the `dd`** rather than as extra children of the item wrapper,
since `dl > div` may only contain `dt` and `dd`.

The rule, its glyph and the marker are **dropped below 992px**, not scaled —
holding a 335px band around a two-line figure just reserves dead space once
the columns halve. That is the source's reasoning too. Columns go 4 → 2, and
the pillars 4 → 2 → 1.

## The hero carousel (read before editing it)

Five product slides built to a supplied comp: full-bleed artwork with the copy
overlaid into the empty left third of each photograph. Arrows, dots and 6s
autoplay.

**The hero, the header above it and the wordmark marquee below it are the only
parts of the site that leave the 1152px measure.** The hero and header use
`ls-container--fluid` — edge to edge, inline padding `clamp(24px, 4.5vw, 96px)`
— and the marquee is full-bleed with no container at all. The artwork behind
the hero reaches the screen edges, so a centred 1152px column left the copy
floating in the middle of it with a widening empty margin on every monitor
bigger than the measure; the header had to follow, or the logo and nav sat
visibly inset from the hero directly beneath them. Everything below still uses
the measure.

**It still obeys the pattern.** Headings are weight 400 at -0.03em, the pill is
40px radius with no shadow, the counter is the same mono index as every card,
and the measure is 1152px. The comp sets its headlines bold; this does not.
Weight 400 at large sizes is the one thing holding the resemblance to the
reference, and the brief was to follow the existing pattern.

**Per-slide colour is the only thing the comp adds.** Each slide sets two inline
custom properties from `site.js`:

- `--slide-accent` — wherever colour carries text: the `<em>` run in the
  heading, the "Learn More" pill behind white type. All five clear **4.5:1 on
  white** (measured 5.08–6.64), so they are AA at body size, not just display.
- `--slide-tint` — the comp's brighter colour, used only where nothing is read
  against it: the rule under the counter, the active dot. Gold and green are
  why the split exists; their bright versions sit near 3:1 and are fine for a
  3px rule and not fine for a button label.

**Four things that are decisions, not accidents:**

1. **The slides show the official coloured lockup, not the product name as
   type.** Every file in `public/logos/products/*-colour.webp` carries its own
   strapline inside the artwork ("Assessment Intelligence"), which is why
   `heroSlides[].tagline` — the comp's longer line, e.g. "The Digital
   Assessment Infrastructure" — is **no longer printed underneath**. Rendering
   both would stack two different taglines for one product. The field is kept
   in `site.js` because it is approved copy; restoring it is one line in
   `Hero.jsx` if the lockups are ever re-cut without the strapline.

   The marks are sized **by height, not width** (`height: 62px; width: auto`).
   The five files are not the same aspect ratio — 1100×234 through 1100×298 —
   so matching widths would make the taller marks visibly smaller than the
   rest as the carousel advances. A consequence worth knowing: because each
   file has different internal padding, the wordmarks are not perfectly
   optically matched either way. Height is the closer approximation.

   The logo carries `alt={slide.title}` rather than being decorative: with the
   tagline line gone, nothing else on the slide names the product.
2. **Only the visible slide's headline is an `<h1>`; the other four are `<p>`.**
   `inert` hides the idle slides from assistive technology but does nothing for
   a crawler reading the markup, and five `<h1>`s is five competing top-level
   headings in the document outline.
3. **Idle slides are `inert`** — written `inert={!active || undefined}`, because
   React 19 reads `inert=""` as *false* and would leave four invisible "Learn
   More" links in the tab order. Verified: focus is refused on an idle slide's
   link.
4. **The copy column width and the heading size are a pair.** The comp breaks
   every headline into exactly two lines and the `<br>` in the content is meant
   to be the only break, so `padding-right` on `.ls-heroslide__inner` is set by
   the longest second line of the five — "Build High-Performing Teams." —
   holding that break. Currently 40% on desktop against a 55px heading, and 20%
   at 992px against 40px.

   **Raising the heading size without widening the column puts a third line
   back**, and vice versa. Every past change here has had to move both: the
   heading has been 42px/48%, then 55px/40%; the 992px band has been
   38px/30%, then 40px/20%. If a slide ever wraps to three lines, this is the
   pair to look at.

**Autoplay never stops.** Arrows and dots jump between slides without switching
it off, so someone who wants a particular product can go there and the carousel
carries on afterwards. There is no play/pause button.

It *holds* while the pointer or the keyboard is inside the hero, so it will not
move a slide out from under someone reading or tabbing through it. That is read
off the DOM with `:hover, :focus-within` **at each tick**, not tracked in a
`paused` flag. The flag version could wedge: focus a slide's "Learn More", let
the carousel advance past it, and that element goes `inert` under the focused
node — the blur that should clear the flag never arrives and the carousel stops
for good. With the pause button gone there would now be no way back from that.
Reading the DOM at decision time has no state to leave stale.

> **Accessibility note, recorded rather than resolved.** WCAG 2.2.2 wants an
> explicit pause mechanism for anything that moves for more than five seconds.
> The hold-on-hover/focus covers pointer and keyboard users; it does **not**
> cover a touchscreen reader, who has no way to stop the rotation. The pause
> button was removed by request. If this needs to meet AA strictly, that
> control is what comes back.

There is **no live region**. With autoplay that never stops, one would announce
a slide change every six seconds and talk over whatever a screen reader user is
reading anywhere on the page. State is carried instead by each slide's
`aria-label` ("3 of 5: IntelliWORK™") and `aria-current` on the dots — read on
demand rather than pushed.

**Below 768px the overlay stops being an overlay.** There is no empty left
third at 375px — the crop is all subject — so the artwork drops to the bottom
of the frame, the scrim goes **fully opaque** white down to 64% of the slide,
and the copy sits on flat white above it. Two earlier values were wrong and are
worth not repeating: at 96–98% the labels inside the artwork's UI card
("Better Engagement", "Data-Driven Decisions") stayed legible enough to read as
stray text behind the paragraph; and with the fade starting at 54% it began
level with the "Learn More" pill, so fragments of that card surfaced beside the
button and read as a rendering glitch rather than as a photograph.

**Artwork was re-encoded.** The supplied PNGs are 1672×941 and 7.6MB for five
frames. Converted to WebP at quality 82 they are **256KB** — a 30× reduction
with no visible difference. The PNGs are kept alongside as the masters;
`site.js` points at the `.webp`.

## The header hides on the way down

Added 2026-10-12. The bar slides out on a downward scroll and returns on an
upward one, giving the page back its 88px while reading.

It is `position: sticky`, so a `translateY(-100%)` moves it without reflowing
anything beneath — the page does not jump as it comes and goes. Verified: the
bar sits at `top: -88` hidden and `top: 0` shown, with no layout shift.

Three details that are load-bearing:

- **`HIDE_BELOW = 160`.** Above this the bar is always shown. Hiding it in the
  first screen makes it flicker on the small scrolls people make while
  reading the top of a page.
- **`DIRECTION_THRESHOLD = 6`.** Trackpads and momentum scrolling emit a lot
  of 1–2px jitter; without a floor the bar flips state several times on one
  gesture. `lastY` only advances once a movement clears the threshold —
  updating it on *every* event instead makes each frame's delta ~1px, which
  never clears the floor, and the bar then never responds at all.
- **It never hides with a dropdown or the drawer open.** Sliding the bar away
  with its own menu hanging off it would take the panel with it, and the
  drawer's close button lives in the bar. Verified: opening the drawer while
  the bar is hidden brings it straight back.

Direction is tracked in a ref, not state — it changes on every scroll event
and nothing renders from it, so state would re-render the header dozens of
times a second for nothing.

Under `prefers-reduced-motion` the bar still hides, it just does not animate.
A header that reclaims reading space is a layout preference, not a motion
effect.

> **Testing this through the browser pane needs care.** The pane does not
> composite, so `getComputedStyle(...).transform` reports mid-transition or
> stale values — it read `-88` even in the shown state. Inject
> `.ls-header{transition:none}` and assert on `getBoundingClientRect().top`
> instead. Also make sure each step actually moves in the intended
> *direction* relative to the last: a sequence that only ever decreases `y`
> will never produce a hide, which looks like a broken feature.

## Hero backdrops, and the scrim that has to keep up with them

Replaced 2026-10-12 with photography shot for the five capability slides. They
supersede five product backdrops left over from when the hero was a product
carousel — those were artwork for IntelliEXAMS, IntelliTUTE and so on, sitting
behind slides they had nothing to do with. The old files are still in
`hero_background/`, unreferenced.

**Keyed by slide `id`, not by array index.** The previous `BACKDROPS` was
positional, so the slides and their backdrops were two lists kept in the same
order by hand; reordering either silently mismatched every slide. A missing id
now yields `undefined` and no image — the right failure, and loud.

Supplied as 1672×941 PNGs at ~1.8MB each. Re-encoded to WebP: **8.65MB →
0.40MB, a 95% saving.** Originals kept in `hero_background/new_bg/`.

> **Every frame must keep its subject on the right.** The hero's copy is
> left-aligned under a left-to-right white scrim; a frame with its subject on
> the left would put the copy on top of it. Check this before swapping any one
> of them.

### The scrim had to be re-derived for the new photography

The old stops (86% → 72% at 28% → 0% at 62%) were tuned against backdrops
whose middle was bright and empty. The new frames have real subject matter
there — monitors, dark clothing — and **four of the five slides failed**:
measured against actual glyph boxes, headings ran to between 51% and 57%
across and bottomed out at **2.62, 2.42 and 1.17:1**, with one body paragraph
at 3.12:1.

The new stops are derived, not eyeballed. Ink text (`#121217`, relative
luminance 0.0062) over a **pure black** pixel needs the white wash at:

- **38%** for the 55px heading to clear 3:1
- **49%** for body copy to clear 4.5:1

Glyphs reach 57.3% at the furthest, so the wash holds 60% out to 58% before
falling away, and is gone by 80% — where every frame's subject sits, so the
person in shot stays unwashed. After: headings 7.03–12.9:1, body 6.75:1,
eyebrows 7.26–8.66:1.

> **Measure glyph boxes, not the column box.** The copy column is 68% wide and
> mostly empty; sampling it reports failures that are not there *and* hides
> the ones that are. Walk the text nodes with a `Range` and use
> `getClientRects()` — those are tight to the line.

> **A CTA will read ~1:1 and it is meaningless.** The buttons are opaque
> pills, so comparing their label against the photograph *behind* them is not
> a real measurement. Check the label against its own fill: white on purple is
> 8.89:1, ink on cyan 7.38:1.

**Mobile uses a different scrim entirely** — a *vertical* gradient, solid
white to 64% then fading. Contrast there is trivial as long as the copy stays
in the solid zone; the deepest slide's copy ends at 50.7%.

## The navigation

Two levels: `Technology → the five sectors`. Education is a plain link to
`/ed-tech`.

**The desktop panel is a horizontal row** — one tile per sector, glyph over
label, centred on the trigger rather than left-aligned to it (five across is
far wider than the word "Technology", and hanging it off the left edge pushed
it into the nav items to its right). The glyphs are the same marks the "Where
We Apply It" cards use, so a sector looks the same wherever it appears.

This is the panel's **third** shape, and each change fixed something:

1. Two columns, in which "Education" appeared twice — once as a link, once as
   the heading of the column holding its children.
2. One column with the six platforms indented under Education. Readable, but
   eleven links deep for a top-level menu.
3. The row it is now. The third level was dropped on 2026-10-12 and the
   platforms moved to `/ed-tech`, which makes all five sectors peers — and a
   row is the honest shape for five peers.

The mobile drawer needed no change for this: its sector branch already fell
through to a plain link when an item had no children. The nested-accordion
branch is still there, unreferenced, because nothing about it was
Education-specific.

> **The 8px that broke it.** The first version was a two-column panel
> positioned `top: calc(100% + 8px)`. Those 8px were *outside* the hover
> target, so moving the pointer down from "Technology" left the nav item and
> closed the panel before it could be reached — the menu was effectively
> unusable with a mouse. The panel now starts flush at `top: 100%` and makes
> the visual gap out of its own transparent `padding-top`, keeping the hover
> path continuous. **Do not turn that padding back into a `top` offset.**
> Verified: the dead gap measures 0px, and the panel survives a pointer
> moving from the trigger into the panel and on to a platform link.

**What is deliberately absent:**

- **No "Home".** The logo is the home link.
- **No "Global Compliance".** Dropped from the menu; `/global-compliance`
  still resolves to the placeholder for anyone holding the URL.
- **No "Partner With Us" pill.** Removed 2026-10-12 with every other instance
  of that call to action. The `Partner` nav item itself stays.
- **No product logos anywhere they would be incomplete.** The five platforms
  have marks in `public/logos/products/`; **IntelliMINDS does not**. Five
  logos and one gap reads as a broken image, and inventing a sixth mark is
  not an option. This is why the Education page gives IntelliMINDS a bare
  band rather than a lockup. Sourcing an IntelliMINDS mark is the unblocker.

## The Education page (`/ed-tech`)

Built 2026-10-12, when the platform list came out of the Technology menu and
needed somewhere to live. One full band per platform rather than a card grid:
a grid would squeeze six descriptions down to two lines each and make the
portfolio read as a feature list, when the point is that these are six
separate pieces of infrastructure.

Bands alternate **starting on smoke**, because the page hero above the first
one is white; the photograph flips side on the same parity. Six products puts
the last band on white, which the dark footer then follows cleanly — **add or
remove a product and this needs re-deriving.** The flip is done with `order`
so the copy stays first in the DOM on every band, and `order` is reset below
992px so a stacked band never puts the picture above the name that introduces
it.

Copy (`proposition`, `description`) is **verbatim** from the 2025 frontend's
`content/products.ts`; the photographs came from its `public/photography/`.
Nothing on this page was written for this build.

**IntelliMINDS renders deliberately bare** — no photograph, no lockup, an "In
development" marker and the source project's own placeholder wording, which
says in as many words that the positioning is not approved. The marker is
dashed grey rather than the brand colour on purpose: in accent it would read
as a feature badge rather than as a warning that the text is provisional.
Do not write copy for it.

Every `link` points at `/products/*`, which still renders `Placeholder`. They
are real routes that will start working, not dead `href="#"`s.

### ~~Three products carry animated diagrams~~ — REVERTED 2026-10-13

> **The client asked for the photographs back on 2026-10-13.** IntelliEXAMS,
> IntelliTUTE and IntelliWORK are now `/assets/images/products/<slug>.webp`
> again, like the other three products — no `imageAnim`, no `imageStill`, no
> `diagram`. `/ed-tech` renders all five photographs identically: 4:3,
> `object-fit: cover`, plain `<img>`.
>
> **The alt text was rewritten with them.** It described the diagrams'
> labelled stages ("IntelliEXAMS at the centre of seven connected
> capabilities: Authoring, Generation, …"), which the photographs do not show.
> Leaving it would have described a picture that is not on the page.
>
> Nothing was deleted: the GIFs, animated WebPs and still frames are all still
> in `public/assets/images/aboutus/`, and `Education.jsx` still has its
> `<picture>` branch — it switches over whenever `imageStill` is present on a
> product. Restoring is putting four fields back.
>
> The section below is kept because it documents how that branch works, and
> the watermark problem below still applies to the artwork if it returns.

### How the animated diagrams worked (inactive)

IntelliEXAMS (2026-10-12), then IntelliTUTE and IntelliWORK (2026-10-13),
each replacing a stock photograph. `diagram: true` on the product switches
the band from the photographic treatment to an artwork one:

| | photograph | diagram |
|---|---|---|
| ratio | forced to 4:3 | its own |
| fit | `cover` (cropping is free) | `contain` (nothing may be lost) |
| size | full column width | capped at 560px tall, centred |
| radius | `--radius-media` | none |

**Cropping IntelliEXAMS to 4:3 cut about 40% of its height** — it is
1080×1350, and the 4:3 frame took "Authoring" off the top and "OMR"/"Scanning"
off the bottom. These are capability maps, so losing nodes loses meaning.

Each keeps its own ratio: IntelliEXAMS and IntelliTUTE are 1080×1350 (0.80),
**IntelliWORK is square** (1080²) and renders 560×560. Nothing needed changing
for it — `--diagram` reads whatever ratio the file has. IntelliOSM and
IntelliTHESIS are still photographs on `cover` and were not touched.

**Every `alt` was rewritten.** The old ones described the photographs they
replaced ("an examiner reviewing assessment analytics", "a learner working
through a guided course"); these diagrams carry information the surrounding
copy does not, so each now names its nodes — seven for IntelliEXAMS, the
four-stage journey for IntelliTUTE, five for IntelliWORK.

**They all loop infinitely** — 33, 120 and 27 frames — which is what WCAG
2.2.2 asks for an escape from, and neither a GIF nor an animated WebP can be
paused. Frame 0 of each is extracted to `*-still.webp`.

The `<picture>` has **three sources and the order is the logic** — the browser
takes the first match, so they cannot be reordered:

1. `media="(prefers-reduced-motion: reduce)"` → the still. First, so it beats
   the animation for anyone who asked for less motion. No JavaScript, and no
   flash of movement before the swap.
2. `type="image/webp"` → the animated WebP.
3. the `<img>` → the supplied GIF, for anything supporting neither.

Verified by forcing source 1's media to `all` and confirming the browser
resolves to the still.

> A visible pause control would satisfy 2.2.2 more fully — this is the
> no-JavaScript half of it. Worth adding if more animated artwork arrives.

> ⚠️ **All three supplied GIFs carry an "infogiph.com" watermark** burned in,
> from whatever tool produced them — bottom-right on IntelliEXAMS and
> IntelliWORK, bottom-left as rendered on IntelliTUTE. Visible at full size on
> the page. These need clean exports before the site ships: it is a third
> party's mark on a corporate page.

**Weight.** The GIFs total 3.9MB; the animated WebPs serve the same artwork in
1.6MB with every frame kept.

| | GIF | WebP | frames |
|---|---|---|---|
| IntelliEXAMS | 208KB | 181KB | 33 |
| **IntelliTUTE** | **3434KB** | **1272KB** | **120** |
| IntelliWORK | 216KB | 107KB | 27 |

IntelliTUTE is the outlier by an order of magnitude — 120 frames over 8
seconds, four times the length of the others. Dropping it to every second
frame would halve the WebP again to ~665KB, but that is the client's call:
it is their artwork and 7.5fps may judder on a slow orbit. Encoder quality is
*not* the lever — q70→q50 only moves it 1323KB→1153KB.

**IntelliMINDS has no product record at all** — it is not in `products`, so it
has no tagline, no artwork and no page. It appears as a label and a
placeholder route. It is also the reason the hero carousel and the platforms
sections still show five products, not six: those read from `products`, and
adding a sixth entry there would mean inventing a tagline and artwork for it.

**Sector links reuse the routes the footer already points at** — `/ed-tech`,
`/health-tech`, `/voice-of-law`, `/mxpay` — so the two menus cannot drift.
Media is the exception: there has never been a MediaTech route, so
`/media-tech` is new. Of the twelve routes the header and footer now point at,
only `/about` is a real page; the rest render `Placeholder`, verified with no
dead ends.

**The header still carries a "Partner With Us" pill** alongside the new
"Partner" menu item, which is the same destination twice. Left in place
because removing the primary call to action is a bigger decision than a menu
change — but it is duplication, and dropping one of the two is a one-line
edit.

## The wordmark marquee

Full-bleed, no container, scrolling right to left on a continuous loop.

**The loop is two copies and a -50% translate.** The list renders twice and the
track animates from `0` to `-50%` of its own width — exactly one copy — so at
the moment it restarts, copy two sits where copy one began and the seam is
invisible. This is the one thing that will break if the markup is edited:
**the duplicate must stay an exact copy in the same order.** Drop, add or
reorder one item in either set and the belt visibly jumps once per cycle.
Verified at every breakpoint by asserting one set's width equals half the
track's.

**Spacing is per-slot, not per-gap.** Each item is
`flex: 0 0 var(--logo-slot)`, a viewport fraction, so the wordmarks divide the
screen evenly instead of being spaced by a gap that drifts with each logo's
own width. `--logo-slot` is the only value the breakpoints change: `20vw`
(five across) → `33.333vw` (three) → `50vw` (two). At 20vw a wordmark would be
75px wide on a phone.

The duplicate set is `aria-hidden`, so the five products are announced once
rather than ten times. The belt pauses on hover and `prefers-reduced-motion`
stops it outright — at which point the first copy is a static, evenly-spaced
row, exactly what this strip was before it moved. Nothing here is a control,
so there is nothing to pause for WCAG 2.2.2: the content is identical whether
it is moving or not.

## The hero carousel

Five **capability** slides, one screen tall. They replaced a
product-per-slide carousel, and that change took three things with it:

- **No product lockups.** The mark above each headline was the product's own;
  none of these slides is a product. Slides a–d carry an eyebrow in that slot
  and slide e carries nothing, as supplied.
- **No per-slide link.** Each slide used to open its product's page; there is
  no equivalent for "Security by Design". The button is kept on every slide by
  request and **has no destination** — it is a real `<button>` (focusable and
  announced, not the hrefless `<a>` the reference ships), but pressing it does
  nothing. Give a slide a `link` and swap the element for a router `Link`.
- **No `products` lookup.** Nothing in `heroSlides` is keyed to a slug.

**Height.** `calc(100dvh - var(--header-h))`, so the hero fills the viewport
and its bottom edge lands on the fold rather than 88px past it. `dvh` not
`vh` — on mobile browsers `vh` is measured with the address bar hidden, so a
`100vh` hero is taller than what you can see; a `vh` line precedes it as a
fallback. `min-height: 560px` stops a short desktop window crushing the
heading into the button. On mobile the slide drives the height instead, since
the slider is `height: auto` there.

**Copy is transcribed exactly.** Four of the five repeat their eyebrow in the
opening words of the headline ("SECURITY BY DESIGN" above "Security by
Design. Built from…"). That is how it was written and is not trimmed here.

**`id`, not `key`.** The React list key field is called `id` because `key` is
a reserved prop — a data field named `key` becomes a real bug the day someone
spreads the slide object onto an element.

**The backdrop files are still named after products** (`intelliexams.webp` and
so on) because the artwork itself is generic — an office, a desk, a screen,
nothing that names a product. The names are now the only tie to the old
carousel; renaming is safe whenever new artwork arrives.

## The alternative platforms section (`PlatformsAlt.jsx`) — off the page

**No longer rendered.** Kept because it was built to a supplied comp and is
the more finished of the two platforms designs; restoring it is one import and
one line in `SECTIONS`, plus flipping the bands below it. Everything below
describes it as built.

A second design for the same five products, originally offered beside the card
grid rather than replacing it. See the note under **Section mapping**.

Named for its *role*, not its layout. This slot has now held three designs —
a full-bleed dark ledger of rows, a tinted bento, and the split layout
currently in it. A name tied to any one of them stops being true the moment
it changes again.

**This version: the comp's product row under a standard section heading.**
Built to the supplied comp (option 04) with one change made by request — the
heading does *not* sit in a left-hand column the way the comp draws it. It
uses `SectionIntro` at the top of the band, identical to every other section
(verified: same 56px `.ls-h2`, same 14px/2px eyebrow, same 760px intro
measure, same 64px gap below), and the five products run full-bleed beneath.

That is worth knowing because the left-hand heading was most of what made
this structurally different from `Platforms.jsx`. What still separates them:
five narrow columns running the full width — each a screenshot over an index,
a name, a tagline and a round accent button — against three wide media cards
inside the 1152px measure. The heading treatment is now identical in both,
which makes the comparison between the two sections a narrower one than it
was.

### Two departures from the comp, both forced by content

1. **Five columns, not four.** The comp draws four products; IntelliTHESIS
   exists too. Moving the heading out of the left column gave each one about
   70px back — 172px → 243px at 1440 — which is what lets the name sit at
   19px. All five hold one line at every breakpoint; that is the assertion to
   re-run if the type grows. The row is 5-up to 992px, then 3-up, 2-up and
   1-up.

2. **No paragraph under the heading.** The comp has one, but there is no such
   string in `site.js` and writing one would be inventing marketing copy.
   `SectionIntro` already takes a `lead` prop — add `description` to the
   `projects` export and pass it through.

### The screenshots are placeholders

`common/ProductMockup.jsx` draws a stylised app window per product — five
variants (dashboard, course list, people board, marking view, submission
timeline) so the row does not read as the same picture five times, each
tinted by that product's own accent.

They are **SVG, not generated bitmaps**, for three reasons: nothing can be
mistaken for a real screenshot of software that does not look like that
(the same call `TintPanel.jsx` records); one colour from the content layer
tints the whole drawing, so five products need no five image files; and they
cost nothing to load.

**Swapping in the real images:** replace the `<ProductMockup>` element with an
`<img>`. `.ls-palt__art` already supplies the frame, the 11:8 ratio and the
tinted backdrop, and `object-fit: cover` is already set — nothing else needs
to change.

### Colour

Each item sets `--p-accent` from the hero carousel, tinting its mockup
backdrop (8% into white) and its round button, and nothing else. Measured on
the smoke band: the index and tagline run 4.73:1, the button 4.75–6.20:1
against the band, and the white arrow 5.08–6.64:1 on the button.

The index is `--grey-500`, not the lighter grey the comp draws: at 13px it is
text and needs 4.5:1, which `--grey-300` does not reach on smoke (2.4:1).

The product name is weight **500**, which is the one place this section steps
off the pattern's display-400 rule. At 19px in a 243px column it is a UI label
rather than a display heading — the same weight the nav links and pills use.
The rule governs the oversized headings.

## The info-tabs section (read before editing it)

Three decisions that are not obvious from the markup:

1. **Panels are never unmounted.** They stay in the DOM, collapsed with
   `grid-template-rows: 0fr`, so all ten sets of operating rules are in the
   HTML source and in the accessibility tree whether or not anyone opens them.
   Rendering only the open panel would keep nine of them from crawlers. The
   collapse is a visual affordance, not a content gate — which is why the
   collapsed panels are not `aria-hidden`.
2. **One item is always open.** The side panel has nothing to show otherwise,
   and a blank half-width panel is worse than a redundant click doing nothing.
3. **The visual is rendered twice** — once in the sticky aside for desktop,
   once inside each panel for mobile, with `ls-responsive.css` choosing which
   displays. Below 992px the grid is one column, so a sticky panel has nothing
   to stick beside; dropping it would lose the artwork on phones entirely.

4. **The panel takes its height from the accordion beside it**, not from a
   fixed aspect ratio, and the *figure* is the sticky element rather than the
   aside around it. That split is what lets one rule serve both uses:

   - Home / "Our Focus" has three items, so the aside stretches to a short
     column, the figure fills it, and the picture ends level with the copy
     (measured: list 382px, figure 382px, 0 overhang). It previously carried
     `aspect-ratio: 4/5`, which at this column width made it far taller than
     the three items beside it and left the section bottom-heavy.
   - About / "Ethics & Values" has ten items, so the figure hits its
     `max-height` well short of the column (measured: aside 1037px, figure
     600px) and has room to stick and travel as the list scrolls past.

   This depends on `.ls-infotab { align-items: stretch }`. Setting it back to
   `start` collapses the aside to its content and breaks the Focus case.

## Verification

Both pages were checked in the browser by importing the content modules at
runtime and asserting every copy string appears in the rendered DOM. Asset
paths, routes, URLs and `slug` identifiers are excluded; comparison strips
markup, decodes entities and is case-insensitive (the content module itself
renders some strings through `.toUpperCase()`).

- `site.js` — 107 copy strings across the exports Home actually renders,
  **1 missing**: `footer.callout.title`, which is word for word the CTA band
  already above the footer (it differs only by a trailing period, which is why
  it reads as a miss rather than a duplicate). The exports Home no longer
  renders are not counted — a large share of the content module, and the
  measurable cost of the sections dropped by request:

  | Export | Why unrendered |
  |---|---|
  | `process` | Domains section removed |
  | `blog` | Newsroom section removed |
  | `team` | Leadership removed; still on `/about` |
  | `about` | About section removed; still on `/about` |
  | `services` | Our Focus removed |
  | `projects` / `products` | Both platforms sections removed |
  | `brands` | Wordmark marquee removed |
  | `hero` | Retired company-level hero |
  | `heroSlides[].tagline` | Superseded by the current slide copy |
- `about.js` — 132 copy strings, **0 missing**. `advisoryBoard` and `cta` are
  dropped by request (below) and not counted.
- The Technology submenu's eleven entries — the six Intelli platforms and the
  five sectors — are **conditionally rendered**, so they are absent from the
  DOM until the menu opens and a coverage pass will report them missing. They
  are a disclosure, not hidden content: the trigger is a real `<button>`
  carrying `aria-expanded`, and opening it mounts all eleven as tabbable links.
  Verified by opening the menu from the keyboard.

Four traps in the checker itself, every one of which produced a false failure
before being accounted for:

- `<br>` contributes nothing to `textContent`, so "A.\<br\>B" collapses to
  "A.B" while the rendered `innerText` has a break between them — replace
  `<br>` with a space before stripping tags.
- The comparison must be **case-insensitive**. Beyond the content module's own
  `.toUpperCase()` calls, `innerText` reports *rendered* text, so anything
  under `text-transform: uppercase` comes back uppercased — this is what made
  all eleven leadership role titles ("Founder, Chairman & CEO" …) look absent
  when the DOM held them verbatim.
- **Decode `&amp;` rather than stripping entities to a space**, or every string
  containing "&" fails — "Products & Solutions" became "Products Solutions".
- Exclude asset and URL fields by key (`image`, `bg`, `bgImage`, `coreImage`,
  `logo`, `link`, `linkedin`, `tel:`/`https:` values). They are never rendered
  as text and otherwise dominate the failure list.
- **Collapse whitespace before punctuation.** Replacing tags with a space
  turns `…decision-making</strong>.` into `…decision-making .`, which never
  matches the rendered text. Add `.replace(/\s+([.,;:!?])/g, '$1')` after the
  whitespace collapse. This produced the only "missing" string on the About
  page after the Who We Are rebuild, and it was not missing.

**The band-clash check has a blind spot: it reads `background-color` only.**
A section whose band comes from a full-bleed *image* reports as whatever is
underneath it — Who We Are reports `rgb(255,255,255)` and so appears to clash
with the white hero above and the white How We Operate below. It does not.
Measured off the artwork, the backdrop sits **19 units from white at its top
edge and 50 at its bottom**; the smoke band is 8. It is a stronger separation
than a normal band, not a missing one. The same blind spot applies to Why
Mindlogicx on the home page. Check those two by sampling pixels, not
`getComputedStyle`.
- 0 console errors, 0 broken images, 0 `ErrorBoundary` catches on either route.
- Interaction: the 10-item ethics accordion and the 3-item focus accordion both
  keep exactly one panel open and the aside figure tracks it; the Products
  dropdown opens, closes on Escape and closes on an outside click; the mobile
  drawer locks body scroll, expands its Products group and releases the lock on
  Escape.
- Responsive at 375 / 768 / 1440: h1 steps 80 → 52 → 36px, the desktop nav
  swaps for the burger at 992px, the info-tab aside hands off to its in-panel
  copy, the sector carousel steps 3 → 2 → 1.15 cards with its buttons still
  reachable, the MindGENIE agents step 3 → 2 → 1 columns and its diagram drops
  out below 768px, and no breakpoint scrolls horizontally.
- The sector carousel's rail was walked sequentially rather than sampled:
  forward `0 → 1 → 2 → 0 → 1`, backward `1 → 0 → 2`, and autoplay observed
  advancing off the last card. Three cards visible at rest. See the `rewind`
  note above for why that sequence is the thing worth asserting.
- Contrast on the ink MindGENIE band measured element by element — eyebrow,
  headline, body, definition, CTA, agent role/name/body, principle and its
  body — all **7.17:1 or better** against `#121217`.
- `oxlint` clean; `npm run build` succeeds; `npm audit` reports 0
  vulnerabilities.

**Two more measurement traps, both of which produced false readings here:**

- **`scrollWidth` clamps to `clientWidth`.** On a `nowrap` element whose text
  fits, `scrollWidth === clientWidth` exactly, so "headroom: 0" means *at
  most* zero overflow, not zero slack. To get the real figure, measure the
  string in a hidden absolutely-positioned span copying the element's `font`
  and `letter-spacing`.
- **`scroll-behavior: smooth` is set on the root**, so reading `window.scrollY`
  straight after a programmatic `scrollTo` — or even 300ms later — returns an
  in-flight value. A scroll loop that re-reads and re-targets will look stuck
  while actually working. Wait out the animation, or set
  `scroll-behavior: auto` before measuring.

**This also wrecks screenshots, not just `getComputedStyle`.** A captured
frame can show `Reveal`-animated blocks as blank — the entrance keyframe
starts at `opacity: 0` and the raster catches it frozen there — while
`getComputedStyle` on the very same elements correctly reports `opacity: 1`.
It looks exactly like a section that failed to render. Trust the computed
values, and before capturing anything with entrance animations inject:

```
*,*::before,*::after{animation:none!important;transition:none!important;
  opacity:1!important;transform:none!important}
```

**Known measurement trap:** when the browser pane is not displayed the page
stops compositing, so CSS transitions freeze at their *start* value and
`getComputedStyle` reports the pre-transition state — an open accordion arrow
reads as un-rotated, the header hairline as transparent, the back-to-top button
as `opacity: 0`. Programmatic `window.scrollTo` also stops emitting `scroll`
events. Inject `*{transition:none!important}` and dispatch `new Event('scroll')`
before asserting on either, or the results will look like bugs that are not
there.

## Known: not carried over

- **Advisory Board** and the closing **"What Are You Looking For?" CTA** were
  dropped by request on the previous builds and stay dropped. Content is still
  in `about.js` (`advisoryBoard`, `cta`) and the three advisor portraits are
  still in `public/assets/images/mlx/advisors/`, so restoring either means
  writing the component and adding one line to `SECTIONS` in `pages/About.jsx`.
- **The sliding-text marquee.** A Zefxa fixture with no equivalent here. The
  terms it scrolled were pulled from other sections' headings rather than
  written for it, so no content left with it.
- **The company-level hero.** `hero` in `site.js` ("Engineering Knowledge Into
  Outcomes") was replaced by the product carousel by request. It is kept in the
  content layer rather than deleted: the message is not lost from the page —
  the "Value Innovation for a Future-Ready World" band directly below carries
  it — and restoring a corporate slide at the front of the carousel is a
  content decision someone may want back.
- Only `/` and `/about` are built. Every other nav route renders `Placeholder`.
- `IntelliWORK`, `IntelliOSM` and `IntelliTHESIS` still have no descriptive
  content anywhere — their cards carry the logo tagline only.
