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
        <p>© 2024 Rhinoplasty Info. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
