import parse from 'html-react-parser';

/**
 * Renders a content string that carries markup.
 *
 * A handful of strings in `src/content/` are authored with HTML — `<br>` to
 * place a line break in a display heading, `<strong>` for emphasis inside a
 * paragraph, `&amp;` where the copy has an ampersand. Those strings are
 * transcribed from the previous Mindlogicx site and are reproduced exactly, so
 * the markup travels with them rather than being stripped out here.
 *
 * `html-react-parser` builds real React elements instead of handing the string
 * to `dangerouslySetInnerHTML`. The content modules are checked into this repo
 * and are not user input, but the parser costs nothing extra and keeps the
 * escape hatch closed.
 */
export default function Html({ value }) {
  if (!value) return null;
  return <>{parse(String(value))}</>;
}
