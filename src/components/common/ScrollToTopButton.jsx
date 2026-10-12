import { useEffect, useState } from 'react';
import { ArrowUp } from './icons';

/**
 * Back-to-top control. Same 100px threshold the previous build used, but it
 * fades out rather than switching to `display: none`, so the exit is animated
 * and the button keeps its place in the layout.
 */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className="ls-totop"
      data-visible={visible}
      aria-label="Scroll to top"
      // Taken out of the tab order while invisible — a control nobody can see
      // should not be the next thing the keyboard lands on.
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp />
    </button>
  );
}
