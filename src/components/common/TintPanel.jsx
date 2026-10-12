/**
 * Fills a panel slot that has no photograph to put in it.
 *
 * The reference pairs each of its accordion sections with a product
 * screenshot. Mindlogicx has photography — leadership portraits, the
 * Whitefield building, the platform artwork — but no product UI and no
 * illustration set, and the About page's ethics accordion has ten items that
 * no photograph covers. Rather than drop the panel (which takes the pattern's
 * rhythm with it) or fake a screenshot of software that would not be shown
 * accurately, the slot gets a drawing: a flat geometric mark on the same
 * pastel wash the cards use.
 *
 * These are deliberately abstract. Nothing here is meant to be read as a
 * depiction of a Mindlogicx product.
 *
 * Six marks, cycled by `variant`, each drawn in `currentColor` at two
 * opacities so it carries whatever tint the panel is given.
 */

const MARKS = [
  /* 0 — concentric rings */
  (
    <g key="rings">
      <circle cx="160" cy="160" r="132" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <circle cx="160" cy="160" r="100" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="160" cy="160" r="68" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="160" cy="160" r="34" fill="currentColor" opacity="0.9" />
    </g>
  ),

  /* 1 — ascending bars */
  (
    <g key="bars">
      <rect x="38" y="208" width="42" height="80" rx="21" fill="currentColor" opacity="0.25" />
      <rect x="98" y="168" width="42" height="120" rx="21" fill="currentColor" opacity="0.4" />
      <rect x="158" y="112" width="42" height="176" rx="21" fill="currentColor" opacity="0.6" />
      <rect x="218" y="48" width="42" height="240" rx="21" fill="currentColor" opacity="0.9" />
    </g>
  ),

  /* 2 — dot field, denser towards the centre */
  (
    <g key="dots" fill="currentColor">
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) => {
          // Radius and opacity fall off with distance from the middle of the
          // grid, which gives the field a centre without drawing one.
          const dx = col - 2.5;
          const dy = row - 2.5;
          const dist = Math.sqrt(dx * dx + dy * dy) / 3.54;
          return (
            <circle
              key={`${row}-${col}`}
              cx={52 + col * 43}
              cy={52 + row * 43}
              r={14 - dist * 8}
              opacity={0.95 - dist * 0.7}
            />
          );
        })
      )}
    </g>
  ),

  /* 3 — nested rotated squares */
  (
    <g key="squares" transform="rotate(14 160 160)">
      <rect x="40" y="40" width="240" height="240" rx="28" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <rect x="76" y="76" width="168" height="168" rx="22" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <rect x="112" y="112" width="96" height="96" rx="16" stroke="currentColor" strokeWidth="2" opacity="0.65" />
      <rect x="142" y="142" width="36" height="36" rx="8" fill="currentColor" opacity="0.9" />
    </g>
  ),

  /* 4 — stacked waves */
  (
    <g key="waves" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round">
      <path d="M24 108c34-44 68-44 102 0s68 44 102 0 34-44 68 0" opacity="0.25" />
      <path d="M24 152c34-44 68-44 102 0s68 44 102 0 34-44 68 0" opacity="0.45" />
      <path d="M24 196c34-44 68-44 102 0s68 44 102 0 34-44 68 0" opacity="0.65" />
      <path d="M24 240c34-44 68-44 102 0s68 44 102 0 34-44 68 0" opacity="0.9" />
    </g>
  ),

  /* 5 — orbit */
  (
    <g key="orbit">
      <ellipse cx="160" cy="160" rx="134" ry="60" stroke="currentColor" strokeWidth="1.5" opacity="0.3" fill="none" />
      <ellipse
        cx="160"
        cy="160"
        rx="134"
        ry="60"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
        fill="none"
        transform="rotate(60 160 160)"
      />
      <ellipse
        cx="160"
        cy="160"
        rx="134"
        ry="60"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
        fill="none"
        transform="rotate(120 160 160)"
      />
      <circle cx="160" cy="160" r="30" fill="currentColor" opacity="0.9" />
      <circle cx="294" cy="160" r="11" fill="currentColor" opacity="0.7" />
      <circle cx="93" cy="44" r="9" fill="currentColor" opacity="0.55" />
      <circle cx="93" cy="276" r="9" fill="currentColor" opacity="0.55" />
    </g>
  ),
];

/**
 * The wash background and the mark colour, paired. Mirrors `Card`'s washes,
 * which are now two rather than six — see `common/washes.js`.
 *
 * Both marks are drawn in purple, including the one on the cyan wash. The
 * marks are line art at low opacity, so cyan-on-cyan-tint would disappear;
 * purple holds against either background.
 */
const TINTS = {
  purple: ['var(--wash-purple)', 'var(--wash-purple-ink)'],
  cyan: ['var(--wash-cyan)', 'var(--wash-cyan-ink)'],
};

export default function TintPanel({ variant = 0, tint = 'purple', className = '' }) {
  const [background, color] = TINTS[tint] || TINTS.purple;

  return (
    <div
      className={['ls-tintpanel', className].filter(Boolean).join(' ')}
      style={{ background, color }}
    >
      {/* Decorative: the accordion heading beside it already names the item. */}
      <svg viewBox="0 0 320 320" fill="none" role="presentation" aria-hidden="true">
        {MARKS[variant % MARKS.length]}
      </svg>
    </div>
  );
}
