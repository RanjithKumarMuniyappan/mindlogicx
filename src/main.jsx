import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// The whole design pattern lives in these two sheets and nothing else — there
// are no vendor stylesheets to load first and no cascade order to protect.
// ls.css holds the tokens and primitives; ls-responsive.css holds every
// breakpoint, and must come second because it only ever overrides.
import './styles/ls.css';
import './styles/ls-responsive.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
