import React, { useState } from 'react';
import './index.css';
import { content } from './data/content';
import LanguageSelector from './components/LanguageSelector';
import InfoSection from './components/InfoSection';

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
        <div className="mobile-tab-select">
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
        </div>
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

      <footer className="app-footer">
        <p className="footer-title">Op. Dr. Ibrahim YAGCI | Rinoplasti , Istanbul/TURKEY</p>
        <div className="footer-contact">
          <span>Randevu için: </span>
          <a href="tel:+905511999963" className="phone-link">+(90)551-199-9963</a>
          <a href="https://wa.me/905511999963" target="_blank" rel="noopener noreferrer" className="whatsapp-link" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
