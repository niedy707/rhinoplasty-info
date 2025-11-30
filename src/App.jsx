import React, { useState } from 'react';
import './index.css';
import { content } from './data/content';
import LanguageSelector from './components/LanguageSelector';
import InfoSection from './components/InfoSection';

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

function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname.startsWith('rhinoplasty')) return 'en';
    }
    return 'tr';
  });

  // Initialize activeTabId based on the initial language
  const [activeTabId, setActiveTabId] = useState(() => {
    const initialLang = typeof window !== 'undefined' && window.location.hostname.startsWith('rhinoplasty') ? 'en' : 'tr';
    return content[initialLang]?.tabs?.[0]?.id || null;
  });

  const handleLangChange = (newLang) => {
    setLang(newLang);
    const newTabs = content[newLang]?.tabs;
    if (newTabs?.length > 0) {
      const tabExists = newTabs.some(t => t.id === activeTabId);
      if (!tabExists) {
        setActiveTabId(newTabs[0].id);
      }
    } else {
      setActiveTabId(null);
    }
  };

  const currentContent = content[lang];

  if (!currentContent) return <div className="loading">Loading...</div>;

  const activeTab = currentContent.tabs?.find(t => t.id === activeTabId) || currentContent.tabs?.[0];

  const footerTranslations = {
    tr: { title: "Rinoplasti", appointment: "Randevu için" },
    en: { title: "Rhinoplasty", appointment: "For Appointment" },
    de: { title: "Rhinoplastik", appointment: "Terminvereinbarung" },
    es: { title: "Rinoplastia", appointment: "Para Cita" },
    ru: { title: "Ринопластика", appointment: "Для записи" },
    fr: { title: "Rhinoplastie", appointment: "Pour Rendez-vous" },
    it: { title: "Rinoplastica", appointment: "Per Appuntamento" },
    ro: { title: "Rinoplastie", appointment: "Pentru Programare" },
  };

  const footerText = footerTranslations[lang] || footerTranslations['en'];

  const handlePrevTab = () => {
    if (!currentContent.tabs) return;
    const currentIndex = currentContent.tabs.findIndex(t => t.id === activeTabId);
    if (currentIndex > 0) {
      setActiveTabId(currentContent.tabs[currentIndex - 1].id);
    }
  };

  const handleNextTab = () => {
    if (!currentContent.tabs) return;
    const currentIndex = currentContent.tabs.findIndex(t => t.id === activeTabId);
    if (currentIndex < currentContent.tabs.length - 1) {
      setActiveTabId(currentContent.tabs[currentIndex + 1].id);
    }
  };



  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>{currentContent.title}</h1>
          <div className="header-controls">
            <LanguageSelector currentLang={lang} onSelect={handleLangChange} />
          </div>
        </div>
      </header>

      <nav className="tab-navigation">
        <MobileNavigation
          handlePrevTab={handlePrevTab}
          handleNextTab={handleNextTab}
          currentContent={currentContent}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
        <div className="desktop-tabs">
          {currentContent.tabs?.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTabId === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {activeTab ? (
          <div className="tab-content">
            {activeTab.content.map((section, index) => (
              <InfoSection
                key={index}
                data={section}
              />
            ))}
          </div>
        ) : (
          // Fallback for languages not yet fully converted (if any)
          <div className="legacy-content">
            {currentContent.sections?.map((section, index) => (
              <InfoSection key={section.id || index} data={section} />
            ))}
          </div>
        )}
      </main>

      <div className="bottom-navigation">
        <MobileNavigation
          handlePrevTab={handlePrevTab}
          handleNextTab={handleNextTab}
          currentContent={currentContent}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
      </div>

      <footer className="app-footer">
        <p className="footer-title">Op. Dr. Ibrahim YAGCI | {footerText.title} , Istanbul/TURKEY</p>
        <div className="footer-contact">
          <span>{footerText.appointment}: </span>
          <a href="tel:+905511999963" className="phone-link">+(90)551-199-9963</a>
          <a href="https://wa.me/905511999963" target="_blank" rel="noopener noreferrer" className="whatsapp-link" aria-label="WhatsApp">
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
      </footer>
    </div>
  );
}

export default App;
