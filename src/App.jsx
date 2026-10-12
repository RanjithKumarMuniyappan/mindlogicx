import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Placeholder from './pages/Placeholder';

/** Routed navigation should land at the top of the next page, not mid-scroll. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* The Technology menu's first sector. The other four still land on
              `Placeholder`, as do the six `/products/*` routes this page
              links out to. */}
          <Route path="/ed-tech" element={<Education />} />
          {/* Remaining routes are stubbed until each page is built out on the
              same pattern, so navigation never dead-ends during review. */}
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
