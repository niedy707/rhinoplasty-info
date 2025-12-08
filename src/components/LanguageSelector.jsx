import React from 'react';

const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
];

export default function LanguageSelector({ currentLang, onSelect }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="language-selector">
            <div className="quick-flags">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        className={`quick-flag-btn ${currentLang === lang.code ? 'active' : ''}`}
                        onClick={() => onSelect(lang.code)}
                        title={lang.name}
                        aria-label={`Switch to ${lang.name}`}
                    >
                        {lang.flag}
                    </button>
                ))}
            </div>

            <button
                className="lang-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
            >
                <span className="current-flag">{languages.find(l => l.code === currentLang)?.flag}</span>
                <span className="current-name">{languages.find(l => l.code === currentLang)?.name}</span>
                <svg className={`arrow ${isOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {isOpen && (
                <>
                    <div className="backdrop" onClick={() => setIsOpen(false)} />
                    <div className="lang-menu">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
                                onClick={() => {
                                    onSelect(lang.code);
                                    setIsOpen(false);
                                }}
                            >
                                <span className="flag">{lang.flag}</span>
                                <span className="name">{lang.name}</span>
                                {currentLang === lang.code && <span className="check">✓</span>}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
