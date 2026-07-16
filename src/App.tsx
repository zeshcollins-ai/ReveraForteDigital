import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import AboutFooter from './components/footer/AboutFooter';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import CaseStudies from './pages/CaseStudies';
import SeoServices from './pages/services/SeoServices';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import AdsMarketing from './pages/services/AdsMarketing';
import B2BOutreach from './pages/services/B2BOutreach';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import WebDevelopment from './pages/services/WebDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import { NavbarProvider } from './contexts/NavbarContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Footer selector component
const FooterSelector = () => {
  const location = useLocation();
  
  // Use AboutFooter for the About page, regular Footer for other pages
  return location.pathname === '/about' ? <AboutFooter /> : <Footer />;
};

function App() {
  return (
    <Router>
      <NavbarProvider>
        <AppContent />
      </NavbarProvider>
    </Router>
  );
}

// Separate component to use hooks inside Router
function AppContent() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo-services" element={<SeoServices />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/services/ads-marketing" element={<AdsMarketing />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/b2b-outreach" element={<B2BOutreach />} />
        </Routes>
      </main>
      <FooterSelector />
    </div>
  );
}

export default App;