import React, { useState, useEffect } from 'react';
import './index.css';
import { content } from './data/content';
import LanguageSelector, { QuickFlags, LanguageDropdown } from './components/LanguageSelector';
import FAQSection from './components/FAQSection';
import DischargeDocument from './components/DischargeDocument';
import PrescriptionGenerator from './components/PrescriptionGenerator';
import EditableContentSection from './components/EditableContentSection';
import { AdminProvider } from './context/AdminContext';
import EditButton from './components/EditButton';

const MobileNavigation = ({ handlePrevTab, handleNextTab, currentContent, activeTabId, setActiveTabId }) => (
  <div className="mobile-tab-select">
    <button
      className="nav-arrow-btn"
      onClick={handlePrevTab}
      disabled={currentContent.tabs?.findIndex(t => t.id === activeTabId) === 0}
    >
      &#8592;
    </button>
    <select
      value={activeTabId || ''}
      onChange={(e) => setActiveTabId(e.target.value)}
      className="tab-select"
    >
      {currentContent.tabs?.map(tab => (
        <option key={tab.id} value={tab.id}>
          {tab.title}
        </option>
      ))}
    </select>
    <button
      className="nav-arrow-btn"
      onClick={handleNextTab}
      disabled={currentContent.tabs?.findIndex(t => t.id === activeTabId) === currentContent.tabs?.length - 1}
    >
      &#8594;
    </button>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, color: 'red' }}>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

function AppContent() {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname.includes('rinoplasti.ibrahimyagci.com')) return 'tr';
      if (hostname.includes('rhinoplasty.ibrahimyagci.com')) return 'en';
      if (hostname.includes('rinoplasti.info') || hostname.includes('burunestetigi.info')) return 'tr';
      if (hostname.includes('rhinoplasty.info')) return 'en';
      if (hostname.includes('nasenkorrektur.info')) return 'de';
      if (hostname.includes('rinoplastia.info')) return 'es';
      if (hostname.includes('rinoplastika.info')) return 'ru';
      if (hostname.includes('rhinoplastie.info')) return 'fr';
      if (hostname.includes('rinoplastica.info')) return 'it';
      if (hostname.includes('rinoplastie.info')) return 'ro';
      if (hostname.includes('rinoplasztika.info')) return 'hu';
      if (hostname.includes('rynoplastyka.info')) return 'pl';
      if (hostname.includes('rinoplastie.md')) return 'md'; // Assuming potential domain
    }
    return 'tr'; // Default to Turkish
  });

  const [activeTabId, setActiveTabId] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      // If we are on the prescription page, we might want to ignore this or handle it differently
      // But for now, just check for 'tab' param for the main app
      if (tabParam) return tabParam;
    }
    return 'tab8';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTabId]);



  const currentContent = content[lang];
  const activeTab = currentContent.tabs.find(tab => tab.id === activeTabId);

  const handleLanguageChange = (value) => {
    setLang(value);
  };

  // Handle internal tab links
  useEffect(() => {
    const handleTabClick = (e) => {
      if (e.target.classList.contains('tab-link')) {
        const tabId = e.target.getAttribute('data-tab');
        if (tabId) {
          setActiveTabId(tabId);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleTabClick);
    return () => {
      document.removeEventListener('click', handleTabClick);
    };
  }, []);

  // Footer text translations
  const footerTranslations = {
    tr: {
      title: "Rinoplasti",
      country: "Türkiye",
      appointment: "Bilgi için",
      agencyLabel: "Tüm sorularınız ve planlamalar için",
      note: <i>Cerrah, <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Medproper Sağlık Turizm Acentesi</span> ile işbirliği içindedir.</i>
    },
    en: {
      title: "Rhinoplasty",
      country: "Türkiye",
      appointment: "For medical questions only",
      agencyLabel: "For all inquiries and planning",
      note: <i>The surgeon is in cooperation with <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Medproper Health Tourism Agency.</span></i>
    },
    de: {
      title: "Rhinoplastik",
      country: "Türkiye",
      appointment: "Nur für medizinische Fragen",
      agencyLabel: "Für alle Anfragen und Planungen",
      note: <i>Der Chirurg arbeitet mit der <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Medproper Gesundheitstourismusagentur</span> zusammen.</i>
    },
    es: {
      title: "Rinoplastia",
      country: "Türkiye",
      appointment: "Solo para preguntas médicas",
      agencyLabel: "Para todas las consultas y planificación",
      note: <i>El cirujano colabora con la <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Agencia de Turismo de Salud Medproper.</span></i>
    },
    ru: {
      title: "Ринопластика",
      country: "Türkiye",
      appointment: "Только по медицинским вопросам",
      agencyLabel: "По всем вопросам и планированию",
      note: <i>Хирург сотрудничает с <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>агентством медицинского туризма Medproper.</span></i>
    },
    fr: {
      title: "Rhinoplastie",
      country: "Türkiye",
      appointment: "Uniquement pour les questions médicales",
      agencyLabel: "Pour toutes demandes et planification",
      note: <i>Le chirurgien collabore avec l'<span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>agence de tourisme de santé Medproper.</span></i>
    },
    it: {
      title: "Rinoplastica",
      country: "Türkiye",
      appointment: "Solo per domande mediche",
      agencyLabel: "Per tutte le richieste e la pianificazione",
      note: <i>Il chirurgo collabora con l'<span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Agenzia di Turismo Sanitario Medproper.</span></i>
    },
    ro: {
      title: "Rinoplastie",
      country: "Türkiye",
      appointment: "Doar pentru întrebări medicale",
      agencyLabel: "Pentru toate întrebările și planificarea",
      note: <i>Chirurgul colaborează cu <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Agenția de Turism de Sănătate Medproper.</span></i>
    },
    hu: {
      title: "Rinoplasztika",
      country: "Türkiye",
      appointment: "Csak orvosi kérdések esetén",
      agencyLabel: "Minden kérdés és tervezés esetén",
      note: <i>A sebész együttműködik a <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Medproper Egészségturisztikai Ügynökséggel.</span></i>
    },
    pl: {
      title: "Rynoplastyka",
      country: "Türkiye",
      appointment: "Tylko w sprawach medycznych",
      agencyLabel: "W przypadku wszystkich zapytań i planowania",
      note: <i>Chirurg współpracuje z <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Agencją Turystyki Zdrowotnej Medproper.</span></i>
    },
    md: {
      title: "Rinoplastie",
      country: "Türkiye",
      appointment: "Doar pentru întrebări medicale",
      agencyLabel: "Pentru toate întrebările și planificarea",
      note: <i>Chirurgul colaborează cu <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Agenția de Turism de Sănătate Medproper.</span></i>
    }
  };

  const footerText = footerTranslations[lang] || footerTranslations.en;

  return (
    <div className={`app-container ${activeTabId === 'tab10' ? 'full-width-container' : ''}`}>
      <div className="sticky-top-section">
        {/* Row 1: Flags */}
        <div className="language-row">
          <QuickFlags currentLang={lang} onSelect={handleLanguageChange} />
        </div>

        {/* Row 2: Tabs + Language Dropdown */}
        <div className="controls-row">
          <nav className="tab-navigation compact-nav">
            <MobileNavigation
              handlePrevTab={() => {
                const currentIndex = currentContent.tabs.findIndex(t => t.id === activeTabId);
                if (currentIndex > 0) setActiveTabId(currentContent.tabs[currentIndex - 1].id);
              }}
              handleNextTab={() => {
                const currentIndex = currentContent.tabs.findIndex(t => t.id === activeTabId);
                if (currentIndex < currentContent.tabs.length - 1) setActiveTabId(currentContent.tabs[currentIndex + 1].id);
              }}
              currentContent={currentContent}
              activeTabId={activeTabId}
              setActiveTabId={setActiveTabId}
            />
          </nav>

          <div className="lang-dropdown-container">
            <LanguageDropdown currentLang={lang} onSelect={handleLanguageChange} />
          </div>
        </div>
      </div>

      <header className="app-header">
        <div className="header-content">
          <div className="header-text">
            <h1>{currentContent.title}</h1>
            {currentContent.subtitle && <p className="app-subtitle"><i>{currentContent.subtitle}</i></p>}
          </div>
        </div>
      </header>

      <main className="tab-content">
        {activeTabId === 'tab8' ? (
          <FAQSection data={activeTab} lang={lang} />
        ) : activeTabId === 'tab9' ? (
          <DischargeDocument data={activeTab} lang={lang} />
        ) : activeTabId === 'tab10' ? (
          <PrescriptionGenerator />
        ) : (
          <EditableContentSection
            key={`${lang}-${activeTabId}`} // Force re-render on tab/lang change
            lang={lang}
            activeTabId={activeTabId}
            initialData={activeTab.content}
          />
        )}
      </main>

      <footer className="app-footer">
        <p className="footer-title">Op. Dr. Ibrahim YAGCI | {footerText.title} , Istanbul / {footerText.country}</p>
        <div className="sticky-bottom-bar">
          <div className="footer-contact">
            <span>{footerText.appointment}: </span>
            <a
              href={lang === 'tr' ? 'tel:+905511999963' : 'https://wa.me/905555511578'}
              target={lang === 'tr' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="phone-link"
            >
              {lang === 'tr' ? '+(90)551-199-9963' : '+(90)555-551-1578'}
            </a>
            <a href={`https://wa.me/${lang === 'tr' ? '905511999963' : '905555511578'}`} target="_blank" rel="noopener noreferrer" className="whatsapp-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a href="https://instagram.com/dribrahimyagci" target="_blank" rel="noopener noreferrer" className="instagram-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <p className="footer-note" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', marginTop: '5px', opacity: 0.7, margin: '5px auto 0', whiteSpace: 'nowrap' }}>
            {footerText.note}
            <br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '5px' }}>
              <span>{footerText.agencyLabel}: </span>
              <a href="tel:+19706959087" style={{ color: 'inherit', textDecoration: 'none' }}>+1 (970) 695‑9087</a>
              <a href="http://wa.me/+19706959087" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', display: 'flex' }} aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/medproperhealthtourism/" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', display: 'flex' }} aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </p>
        </div>
      </footer>

      {/* Timestamp Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '1rem',
        paddingBottom: '1rem',
        paddingRight: '1rem',
        opacity: 0.5,
        transition: 'opacity 0.3s',
        marginBottom: '60px' // Space for mobile nav/sticky bars if any
      }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
      >
        <span style={{
          fontFamily: 'monospace',
          fontSize: '10px',
          color: '#9ca3af',
          userSelect: 'none'
        }}>
          {/* eslint-disable-next-line no-undef */}
          {typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : ''}
        </span>
      </div>

      <EditButton />
    </div >
  );
}

import PrescriptionApp from './PrescriptionApp';

function App() {
  const [isPrescriptionPage, setIsPrescriptionPage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const search = window.location.search;
      if (hostname.includes('recete') || search.includes('page=recete')) {
        setIsPrescriptionPage(true);
      }
    }
  }, []);

  if (isPrescriptionPage) {
    return <PrescriptionApp />;
  }

  return (
    <ErrorBoundary>
      <AdminProvider>
        <AppContent />
      </AdminProvider>
    </ErrorBoundary>
  );
}

export default App;
