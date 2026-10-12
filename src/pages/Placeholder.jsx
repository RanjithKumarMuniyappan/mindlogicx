import { useLocation } from 'react-router-dom';
import Pill from '../components/common/Pill';

/**
 * Stands in for every route that has not been built yet, so a link in the
 * header, a domain card or the footer never dead-ends during review. Only `/`
 * and `/about` are real pages at this stage.
 *
 * It names the path it is standing in for, which is what makes it useful while
 * the rest of the site is being built — you can see *which* link you followed.
 */
export default function Placeholder() {
  const { pathname } = useLocation();

  return (
    <section className="ls-section ls-section--white">
      <div className="ls-container ls-placeholder">
        <span className="ls-index">{pathname}</span>
        <h1 className="ls-h2">This page is not built yet</h1>
        <p className="ls-lead">
          Only the home and about pages exist on this design pattern so far. Every other
          route in the navigation lands here rather than on a dead link.
        </p>
        <Pill variant="solid" to="/" arrow>
          Back to home
        </Pill>
      </div>
    </section>
  );
}
