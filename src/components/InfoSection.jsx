import React from 'react';

export default function InfoSection({ data, isEditing, tabId, onAddSubsection }) {
    // Helper to bold text before the first colon
    const formatText = (text) => {
        if (!text || typeof text !== 'string') return text;

        const firstColonIndex = text.indexOf(':');
        if (firstColonIndex !== -1 && firstColonIndex < 50) { // Limit length to avoid false positives in long sentences
            const title = text.substring(0, firstColonIndex);
            const content = text.substring(firstColonIndex + 1);
            return (
                <span>
                    <strong className="highlight-key">{title}:</strong>{content}
                </span>
            );
        }
        return text;
    };

    return (
        <section className="info-section">
            {data.title && <h2 className="section-title">{data.title}</h2>}

            {data.text && <p className="section-text">{formatText(data.text)}</p>}

            {data.items && (
                <ul className="info-list">
                    {data.items.map((item, index) => (
                        <li key={index} className="info-item">
                            <span className="bullet">•</span>
                            <span>{formatText(item)}</span>
                        </li>
                    ))}
                </ul>
            )}

            {data.subsections && (
                <div className="subsections">
                    {data.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="subsection">
                            <h3 className="subsection-title">{sub.title}</h3>

                            {sub.text && <p className="section-text">{formatText(sub.text)}</p>}

                            {sub.items && (
                                <ul className="info-list">
                                    {sub.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="info-item">
                                            <span className="bullet">•</span>
                                            <span>{formatText(item)}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {isEditing && tabId === 'faq' && (
                <button className="add-btn" onClick={onAddSubsection}>
                    + YENİ SORU EKLE
                </button>
            )}
        </section>
    );
}
