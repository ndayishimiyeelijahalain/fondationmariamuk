import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import DonatePage from './pages/DonatePage';
import SponsorPage from './pages/SponsorPage';
import ImpactPage from './pages/ImpactPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import VolunteerPage from './pages/VolunteerPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/sponsor" element={<SponsorPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
