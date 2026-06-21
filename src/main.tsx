import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// main.tsx or App.tsx
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from './i18n';

// In your root component:
<BrowserRouter>
  <I18nProvider>
    <App />
  </I18nProvider>
</BrowserRouter>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
