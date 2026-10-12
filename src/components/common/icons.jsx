/**
 * Every glyph on the site, as inline SVG.
 *
 * The previous build pulled its icons from FontAwesome plus a bespoke
 * `zefxa-icons` webfont — roughly 1.2MB of vendor payload for a few dozen
 * marks. This pattern needs eight pieces of chrome and ten content glyphs, so
 * they are drawn here instead: no webfont request, no FOIT on first paint, and
 * every mark inherits `currentColor` so a card's tint carries its icon with it.
 *
 * Chrome marks are the reference's own geometry where it was worth copying —
 * `ArrowRight` is its exact 12x12 path. Content glyphs are drawn to one
 * specification so they read as a set: 24x24 box, 1.5px stroke, round caps and
 * joins, no fill.
 */

/* ---------------------------------------------------------------- chrome */

/** The reference's arrow, path for path. Used on pills and arrow links. */
export function ArrowRight({ size = 12, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M6.39205 11.2102L5.36932 10.1988L8.92045 6.64768H0V5.17041H8.92045L5.36932 1.62496L6.39205 0.60791L11.6932 5.90905L6.39205 11.2102Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** The same arrow mirrored, for the hero carousel's "previous" control. */
export function ArrowLeft({ size = 12, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      style={{ transform: 'scaleX(-1)' }}
      {...rest}
    >
      <path
        d="M6.39205 11.2102L5.36932 10.1988L8.92045 6.64768H0V5.17041H8.92045L5.36932 1.62496L6.39205 0.60791L11.6932 5.90905L6.39205 11.2102Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Outbound arrow, for links that open a sector or a solution. */
export function ArrowUpRight({ size = 14, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M4 10 10 4M4.6 4H10v5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The accordion control. A plus that CSS rotates 45 degrees into a cross when
 * its item opens, so one glyph covers both states and the rotation animates.
 */
export function Plus({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M8 1v14M1 8h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronDown({ size = 14, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M3 5.5 7 9.5l4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUp({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M9 15V3m0 0L4 8m5-5 5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Menu({ size = 26, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M3 7h20M3 13h20M3 19h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Close({ size = 26, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" aria-hidden="true" {...rest}>
      <path d="M6 6l14 14M20 6L6 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/*
 * Redrawn 2026-10-12. The previous path was a bare "in" whose stem and arch
 * sat on different baselines and whose dot was oversized — at 18px it read as
 * a smudge rather than a mark. This is the standard lockup: a rounded square
 * with the glyph knocked out of it, so it holds its shape at any size and
 * sits with the other four, which are all solid.
 */
export function LinkedIn({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6 2h16.8A1.6 1.6 0 0 1 22 3.6v16.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 20.4V3.6A1.6 1.6 0 0 1 3.6 2Zm2.33 7.48H8.6v8.04H5.93V9.48Zm1.34-1.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm3.1 1.1h2.56v1.1a2.8 2.8 0 0 1 2.52-1.29c1.87 0 3.25 1.15 3.25 3.62v4.61h-2.67v-4.1c0-1.1-.4-1.85-1.38-1.85-.75 0-1.2.5-1.4 1a1.9 1.9 0 0 0-.09.67v4.28h-2.67s.04-7.28 0-8.04Z"
      />
    </svg>
  );
}

/* The three marks added 2026-10-12 to complete the footer's social row.
   Drawn solid to sit with `LinkedIn`, which is the other filled mark. */

export function Facebook({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

/** X, formerly Twitter. */
export function X({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M17.53 3h3.07l-6.7 7.66L21.75 21h-5.98l-4.7-6.13L5.7 21H2.63l7.17-8.2L2.25 3h6.13l4.25 5.6L17.53 3Zm-1.08 16.14h1.7L7.63 4.77H5.8l10.65 14.37Z" />
    </svg>
  );
}

export function YouTube({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z" />
    </svg>
  );
}

export function Instagram({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

/* --------------------------------------------------------------- content */

/**
 * Content glyphs, keyed by the content they illustrate. Looked up by key from
 * the section components (`ICONS[key]`) so a content module can gain an item
 * without a component learning a new import.
 */
const box = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

/** AI First — a processor die with signal traces. */
function AiFirst(props) {
  return (
    <svg {...box} {...props}>
      <rect x="8" y="8" width="8" height="8" rx="1.5" />
      <path d="M10.5 3v5M13.5 3v5M10.5 16v5M13.5 16v5M3 10.5h5M3 13.5h5M16 10.5h5M16 13.5h5" />
    </svg>
  );
}

/** ESG & Sustainability — a leaf. */
function Sustainability(props) {
  return (
    <svg {...box} {...props}>
      <path d="M4 20c0-8 5-14 16-16 0 11-5.5 16-12 16H4Z" />
      <path d="M4 20c3.5-5 7.5-8.5 12-10.5" />
    </svg>
  );
}

/** Global Compliance — a globe with a meridian. */
function Globe(props) {
  return (
    <svg {...box} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 4 5.5 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.5-4-9s1.4-6.6 4-9Z" />
    </svg>
  );
}

/** EdTech — a mortarboard. */
function EdTech(props) {
  return (
    <svg {...box} {...props}>
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
      <path d="M6 10.8V16c0 1.9 2.7 3.4 6 3.4s6-1.5 6-3.4v-5.2" />
      <path d="M21.5 8.5V14" />
    </svg>
  );
}

/** FinTech — a card with a stripe. */
function FinTech(props) {
  return (
    <svg {...box} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6.5 14.5h4" />
    </svg>
  );
}

/** HealthTech — a trace crossing a shield. */
function HealthTech(props) {
  return (
    <svg {...box} {...props}>
      <path d="M12 21s7.5-4 7.5-9.5V5.5L12 3 4.5 5.5v6c0 5.5 7.5 9.5 7.5 9.5Z" />
      <path d="M7.5 12h2l1.5-3 2 6 1.5-3h2" />
    </svg>
  );
}

/** Media — a broadcast frame. */
function Media(props) {
  return (
    <svg {...box} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M10 9.5l4.5 2.5-4.5 2.5V9.5Z" />
      <path d="M7 22h10" />
    </svg>
  );
}

/** LegalTech — a balance scale. */
function LegalTech(props) {
  return (
    <svg {...box} {...props}>
      <path d="M12 3v18M7 21h10" />
      <path d="M4 7h16" />
      <path d="M4 7l-2.5 5.5a3.2 3.2 0 0 0 5 0L4 7Z" />
      <path d="M20 7l-2.5 5.5a3.2 3.2 0 0 0 5 0L20 7Z" />
    </svg>
  );
}

/** Value Innovation — a filament. */
function Innovation(props) {
  return (
    <svg {...box} {...props}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.4.3.5.7.5 1.1v1h6v-1c0-.4.1-.8.5-1.1A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

/** Creative Marketing — concentric broadcast arcs. */
function Brand(props) {
  return (
    <svg {...box} {...props}>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M7.4 7.4a6.5 6.5 0 0 0 0 9.2M16.6 16.6a6.5 6.5 0 0 0 0-9.2" />
      <path d="M4.2 4.2a11 11 0 0 0 0 15.6M19.8 19.8a11 11 0 0 0 0-15.6" />
    </svg>
  );
}

/** Futuristic — a launch vehicle. */
function Future(props) {
  return (
    <svg {...box} {...props}>
      <path d="M12 2.5c3 2.6 4.5 6 4.5 10L12 16l-4.5-3.5c0-4 1.5-7.4 4.5-10Z" />
      <circle cx="12" cy="9.5" r="1.8" />
      <path d="M7.5 12.5 5 15v3l3-1.5M16.5 12.5 19 15v3l-3-1.5" />
      <path d="M10.5 19.5c.6 1.2 1.1 1.9 1.5 2 .4-.1.9-.8 1.5-2" />
    </svg>
  );
}

/*
 * The "What We Do" pillar marks.
 *
 * These three break the shared `box` spec above in one way: each carries a
 * small filled dot in the second brand colour, which is how the comp draws
 * them. The dot is `--brand-cyan` directly rather than `currentColor`, so it
 * stays cyan while the outline takes whatever colour the card gives it.
 * Decorative — nothing is read against it, so its contrast does not matter.
 */

/** Structured — a 2x2 grid with one cell marked. */
function Structured(props) {
  return (
    <svg {...box} {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="2" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" />
      <circle cx="17.25" cy="17.25" r="1.9" fill="var(--brand-cyan)" stroke="none" />
    </svg>
  );
}

/** Governed — a padlock, its keyhole the marked point. */
function Governed(props) {
  return (
    <svg {...box} {...props}>
      <rect x="4" y="10.5" width="16" height="10.5" rx="2.5" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
      <circle cx="12" cy="15.75" r="1.9" fill="var(--brand-cyan)" stroke="none" />
    </svg>
  );
}

/** Monetizable — value in circulation. */
function Monetizable(props) {
  return (
    <svg {...box} {...props}>
      <circle cx="11.5" cy="12.5" r="8.5" />
      <path d="M11.5 8.2v8.6" />
      <path d="M13.8 10.1a2.4 2.4 0 0 0-2.3-1.3c-1.3 0-2.3.8-2.3 1.9s.9 1.6 2.3 1.9 2.3.8 2.3 1.9-1 1.9-2.3 1.9a2.4 2.4 0 0 1-2.3-1.3" />
      <circle cx="20.6" cy="4.4" r="1.9" fill="var(--brand-cyan)" stroke="none" />
    </svg>
  );
}

/* ------------------------------------------------- MindGENIE agent glyphs */

/*
 * The six agent marks, ported path-for-path from the Mindlogicx 2025
 * frontend's glyph registry (`components/visuals/Glyph.tsx`).
 *
 * They are a 48x48 set, not the 24x24 one above, so they keep their own box.
 * Strokes inherit `currentColor`; the accent node in each is `--brand-cyan`
 * directly, because these only ever sit on the dark MindGENIE band where
 * cyan is the colour that reads (7.38:1) and purple is not (2.10:1).
 */
const agentBox = {
  width: 48,
  height: 48,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

/** The accent node — "the point of intelligence in each mark", per the source. */
function Node({ cx, cy, r = 2.6 }) {
  return <circle cx={cx} cy={cy} r={r} fill="var(--brand-cyan)" stroke="none" />;
}

function AgentKnowledge(props) {
  return (
    <svg {...agentBox} {...props}>
      <path d="M24 10L11 17v14l13 7 13-7V17z" strokeWidth="1.5" />
      <path d="M24 10v28M11 17l13 7 13-7" strokeWidth="1.2" opacity="0.5" />
      <Node cx={24} cy={24} r={2.8} />
      <Node cx={24} cy={10} r={1.9} />
    </svg>
  );
}

function AgentWorkflow(props) {
  return (
    <svg {...agentBox} {...props}>
      <rect x="6" y="20" width="9" height="9" rx="2.5" strokeWidth="1.5" />
      <rect x="33" y="9" width="9" height="9" rx="2.5" strokeWidth="1.5" />
      <rect x="33" y="31" width="9" height="9" rx="2.5" strokeWidth="1.5" />
      <path d="M15 24.5h8.5v-11H33M23.5 24.5v11H33" strokeWidth="1.5" />
      <Node cx={23.5} cy={24.5} r={2.4} />
    </svg>
  );
}

function AgentAssessment(props) {
  return (
    <svg {...agentBox} {...props}>
      <rect x="7" y="7" width="34" height="34" rx="5" strokeWidth="1.6" />
      <path d="M7 18.5h34M7 29.5h34M18.5 7v34M29.5 7v34" strokeWidth="1.1" opacity="0.45" />
      <path d="M21 24.6l2.6 2.8 5-6.2" strokeWidth="2" />
      <Node cx={35} cy={13} r={2.4} />
    </svg>
  );
}

function AgentAdvisory(props) {
  return (
    <svg {...agentBox} {...props}>
      <circle cx="24" cy="24" r="5.5" strokeWidth="1.7" />
      <path
        d="M24 8v6M24 34v6M8 24h6M34 24h6M13 13l4.2 4.2M30.8 30.8L35 35M35 13l-4.2 4.2M17.2 30.8L13 35"
        strokeWidth="1.4"
        opacity="0.65"
      />
      <Node cx={24} cy={24} r={2.2} />
    </svg>
  );
}

function AgentAnalytics(props) {
  return (
    <svg {...agentBox} {...props}>
      <rect x="7" y="9" width="34" height="30" rx="5" strokeWidth="1.5" />
      <path d="M13 32V22M21 32V15M29 32v-7M37 32V19" strokeWidth="2" />
      <path d="M7 32h34" strokeWidth="1.1" opacity="0.4" />
      <Node cx={21} cy={15} r={2.4} />
    </svg>
  );
}

function AgentGovernance(props) {
  return (
    <svg {...agentBox} {...props}>
      <path d="M24 7l14 5v11c0 9-6 15.5-14 18-8-2.5-14-9-14-18V12z" strokeWidth="1.5" />
      <path d="M18.5 24.5l3.8 3.8 7.6-8" strokeWidth="2.1" />
      <Node cx={24} cy={7} r={1.9} />
    </svg>
  );
}

/* ---- About / "Who We Are" ------------------------------------------------
   Three marks added 2026-10-12 for the About intro, matching the supplied
   comp: a rising bar chart for scale, a group for people, and a cog for the
   engineering discipline. `Innovation` (a bulb) and `Globe` already existed
   and cover the comp's other two slots. */

/** Highly scalable — a rising series. */
function Scalable(props) {
  return (
    <svg {...box} {...props}>
      <path d="M3 20h18" />
      <path d="M6 20v-5M10.5 20v-9M15 20v-6M19.5 20v-11" />
    </svg>
  );
}

/** Trusted by millions / least human intervention — a group. */
function People(props) {
  return (
    <svg {...box} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 19.5a6 6 0 0 1 12 0" />
      <path d="M16.5 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M17.2 14.2a6 6 0 0 1 3.8 5.3" />
    </svg>
  );
}

/** Knowledge Engineering — a cog. */
function Cog(props) {
  return (
    <svg {...box} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
    </svg>
  );
}

/* ---- placeholder logo marks ----------------------------------------------
 *
 * ⚠️ **These are deliberately generic and must stay that way.**
 *
 * The memberships band needs a logo per organisation and none were supplied.
 * Each of these is an abstract geometric mark on a shared 120x40 lockup box —
 * none of them references, resembles or approximates the real mark of eAA,
 * Don Bosco, IIBA or any trade body. Drawing something *close* to a real
 * third-party logo would be worse than an obvious stand-in, because it would
 * ship looking finished.
 *
 * They vary only so eight tiles do not read as one repeated shape. Replace
 * them with real files — see `affiliations` in `site.js`. */

const markBox = {
  width: 120,
  height: 40,
  viewBox: '0 0 120 40',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

/** A wordmark-shaped bar pair, the commonest logotype silhouette. */
function MarkBars(props) {
  return (
    <svg {...markBox} {...props}>
      <circle cx="18" cy="20" r="11" />
      <path d="M40 14h54M40 26h38" />
    </svg>
  );
}

function MarkHex(props) {
  return (
    <svg {...markBox} {...props}>
      <path d="M18 8l10 6v12l-10 6-10-6V14z" />
      <path d="M40 15h50M40 25h32" />
    </svg>
  );
}

function MarkArc(props) {
  return (
    <svg {...markBox} {...props}>
      <path d="M8 27a12 12 0 0 1 22 0" />
      <circle cx="19" cy="27" r="2.5" fill="currentColor" stroke="none" />
      <path d="M42 15h48M42 25h30" />
    </svg>
  );
}

function MarkSquare(props) {
  return (
    <svg {...markBox} {...props}>
      <rect x="8" y="10" width="20" height="20" rx="5" />
      <path d="M14 20h8M18 16v8" />
      <path d="M40 15h46M40 25h34" />
    </svg>
  );
}

function MarkChevron(props) {
  return (
    <svg {...markBox} {...props}>
      <path d="M9 12l9 8-9 8M22 12l9 8-9 8" />
      <path d="M42 15h44M42 25h28" />
    </svg>
  );
}

function MarkRing(props) {
  return (
    <svg {...markBox} {...props}>
      <circle cx="19" cy="20" r="11" />
      <circle cx="19" cy="20" r="4.5" />
      <path d="M40 15h52M40 25h36" />
    </svg>
  );
}

function MarkTriangle(props) {
  return (
    <svg {...markBox} {...props}>
      <path d="M19 9l11 21H8z" />
      <path d="M42 15h46M42 25h30" />
    </svg>
  );
}

function MarkGrid(props) {
  return (
    <svg {...markBox} {...props}>
      <rect x="8" y="10" width="8.5" height="8.5" rx="2" />
      <rect x="20.5" y="10" width="8.5" height="8.5" rx="2" />
      <rect x="8" y="21.5" width="8.5" height="8.5" rx="2" />
      <rect x="20.5" y="21.5" width="8.5" height="8.5" rx="2" />
      <path d="M40 15h48M40 25h32" />
    </svg>
  );
}

/**
 * The source's `structured` glyph, on the 48 box.
 *
 * `Structured` below is the same idea drawn for the 24 box and is what the
 * "What We Do" pillars use. This one exists because the Why Mindlogicx
 * counters sit beside three 48-box agent marks, and mixing the two boxes there
 * would put two different stroke weights in one row.
 */
function AgentStructured(props) {
  return (
    <svg {...agentBox} {...props}>
      <rect x="8" y="8" width="13" height="13" rx="3" strokeWidth="1.6" />
      <rect x="27" y="8" width="13" height="13" rx="3" strokeWidth="1.6" />
      <rect x="8" y="27" width="13" height="13" rx="3" strokeWidth="1.6" />
      <rect x="27" y="27" width="13" height="13" rx="3" strokeWidth="1.6" opacity="0.45" />
      <path d="M21 14.5h6M14.5 21v6" strokeWidth="1.3" opacity="0.6" />
      <Node cx={33.5} cy={33.5} r={2.6} />
    </svg>
  );
}

/**
 * Keys match the content, not the drawing — `Domains.jsx` and `Strengths.jsx`
 * pass a content item's own title straight through.
 *
 * Not exported: `ContentIcon` below is the only way in, which keeps this file
 * exporting components alone and so leaves fast refresh working for every
 * module that imports a glyph.
 */
const ICONS = {
  'AI First': AiFirst,
  'ESG & Sustainability': Sustainability,
  'Global Compliance': Globe,
  EdTech,
  FinTech,
  HealthTech,
  LegalTech,
  Media,
  AgentKnowledge,
  AgentWorkflow,
  AgentAssessment,
  AgentAdvisory,
  AgentAnalytics,
  AgentGovernance,
  AgentStructured,
  Scalable,
  People,
  Cog,
  MarkBars,
  MarkHex,
  MarkArc,
  MarkSquare,
  MarkChevron,
  MarkRing,
  MarkTriangle,
  MarkGrid,
  // Also keyed as 'Global Compliance' below, for the nav item of that name.
  Globe,
  'Value Innovation': Innovation,
  Innovation,
  'Creative Marketing': Brand,
  Futuristic: Future,
  Structured,
  Governed,
  Monetizable,
};

/**
 * Renders the glyph for a content title, or nothing at all if that title has
 * no glyph. Returning null rather than a fallback mark is deliberate: a
 * content item that gains a title nobody has drawn for should come through
 * with no icon, not with a wrong one.
 */
export function ContentIcon({ name, ...rest }) {
  const Glyph = ICONS[name];
  return Glyph ? <Glyph {...rest} /> : null;
}
