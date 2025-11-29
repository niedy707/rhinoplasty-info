import React from 'react';

export default function InfoSection({ data, isEditing, tabId, onAddSubsection }) {
    return (
        <section className="info-section">
            {data.title && <h2 className="section-title">{data.title}</h2>}

            {data.text && <p className="section-text">{data.text}</p>}

            {data.items && (
                <ul className="info-list">
                    {data.items.map((item, index) => (
                        <li key={index} className="info-item">
                            <span className="bullet">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            {data.subsections && (
                <div className="subsections">
                    {data.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="subsection">
                            <h3 className="subsection-title">{sub.title}</h3>

                            {sub.text && <p className="section-text">{sub.text}</p>}

                            {sub.items && (
                                <ul className="info-list">
                                    {sub.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="info-item">
                                            <span className="bullet">•</span>
                                            <span>{item}</span>
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
