import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Esg from './pages/Esg';
import GlobalCompliance from './pages/GlobalCompliance';
import AiFirst from './pages/AiFirst';
import KnowledgeEngineering from './pages/KnowledgeEngineering';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import Newsroom from './pages/Newsroom';
import MindlogicxianClub from './pages/MindlogicxianClub';
import IntelliTute from './pages/IntelliTute';
import IntelliWork from './pages/IntelliWork';
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
      {/*
        A boundary around the whole route tree.

        Without it, a render error in any page escapes to the React root and
        **unmounts the entire application** — header, footer and all — leaving
        a blank white document with nothing in the console. That is exactly
        what happened when `GlobalCompliance` hit a regulation card with no
        `tags` array: a one-line TypeError blanked the site.

        `ErrorBoundary` already wraps the individual sections inside Home,
        About and Education, which keeps one bad section from taking out its
        page. This is the outer net for everything else — most of all the
        ported pages, whose content shapes come from another codebase and are
        not uniform.
      */}
      <main>
        <ErrorBoundary name="Page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* The Technology menu's first sector. The other four still land on
                `Placeholder`, as do the six `/products/*` routes this page
                links out to. */}
            <Route path="/ed-tech" element={<Education />} />
            {/* Ported from the 2025 frontend 2026-10-13. Both were already
                linked from the footer and resolved to `Placeholder`. */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/esg-sustainability" element={<Esg />} />
            <Route path="/global-compliance" element={<GlobalCompliance />} />
            <Route path="/ai-first" element={<AiFirst />} />
            <Route path="/knowledge-engineering" element={<KnowledgeEngineering />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news-room" element={<Newsroom />} />
          <Route path="/mindlogicxian-club" element={<MindlogicxianClub />} />
          <Route path="/intellitute" element={<IntelliTute />} />
          <Route path="/intelliwork" element={<IntelliWork />} />
            {/* Remaining routes are stubbed until each page is built out on the
                same pattern, so navigation never dead-ends during review. */}
            <Route path="*" element={<Placeholder />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
