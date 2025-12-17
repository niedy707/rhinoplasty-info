import React from 'react';

const StickyFooter = ({ lang }) => {
    const isTr = lang === 'tr';

    const content = {
        tr: {
            info: "Bilgi için: +(90)551-199-9963",
            planning: "Tüm sorularınız ve planlamalar için: +1 (970) 695‑9087"
        },
        other: {
            info: "For medical questions only: +(90)555-551-1578",
            planning: "For all inquiries and planning: +1 (970) 695‑9087"
        }
    };

    const text = isTr ? content.tr : content.other;
    const infoPhone = isTr ? "+905511999963" : "+905555511578";
    const planningPhone = "+19706959087";

    return (
        <div className="sticky-footer">
            <div className="sticky-footer-content">
                <div className="sticky-footer-item">
                    <span className="sticky-label">{text.info.split(':')[0]}:</span>
                    <a href={`tel:${infoPhone}`} className="sticky-link">
                        {text.info.split(':')[1]}
                    </a>
                </div>
                <div className="sticky-footer-item">
                    <span className="sticky-label">{text.planning.split(':')[0]}:</span>
                    <a href={`tel:${planningPhone}`} className="sticky-link">
                        {text.planning.split(':')[1]}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StickyFooter;
