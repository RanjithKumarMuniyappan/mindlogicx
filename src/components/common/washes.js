/**
 * The card washes, in the order they alternate across a grid.
 *
 * **Two, not the six pastels this used to hold.** The palette is now the two
 * brand colours only, so a grid alternates purple and cyan rather than
 * cycling through a spectrum. That still does the job the rotation exists
 * for — stopping a grid of flat, shadowless, borderless boxes from reading as
 * a spreadsheet — just with a two-beat rhythm instead of a six-beat one.
 *
 * `wash(i)` cycles, so a three-, five- or nine-card grid all work without any
 * section naming a colour. An odd-length grid means the first and last card
 * share a tint; with two colours that is unavoidable and reads as a pattern.
 *
 * Kept out of `Card.jsx` so that file only exports a component — a module
 * that mixes components and helpers breaks Vite's fast refresh for everything
 * importing it.
 *
 * `TintPanel.jsx` keys its own background/foreground pairs off these names.
 */
export const WASHES = ['purple', 'cyan'];

export function wash(i) {
  return WASHES[i % WASHES.length];
}
