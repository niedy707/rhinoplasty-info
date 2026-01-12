import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import EditableContentSection from './EditableContentSection';
import { content } from '../data/content';

const PrintStyles = createGlobalStyle`
  @media print {
    @page {
      margin: 5mm; /* Minimum margin for maximum information */
      size: auto; /* Fix blank page by allowing auto size */
    }
    html, body {
      width: 100%;
      height: auto !important; /* Fix blank page */
      margin: 0 !important;
      padding: 0 !important;
      background: white !important;
      overflow: visible !important;
    }
    .app-container {
       width: 100% !important;
       max-width: none !important;
       min-height: auto !important;
       background: white !important;
       box-shadow: none !important;
       margin: 0 !important;
       padding: 0 !important;
       position: static !important;
    }
    .main-content {
      padding: 0 !important;
      margin: 0 !important;
      max-width: none !important;
      width: 100% !important;
    }
    /* Hide UI elements */
    .app-header, 
    .tab-navigation, 
    .language-bar, 
    .sticky-bottom-bar, 
    .sticky-top-section,
    .app-footer,
    .edit-button,
    .admin-controls,
    .nav-arrow-btn {
      display: none !important;
    }
    
    .tab-content {
      padding: 0 !important;
    }

    /* Compaction Styles */
    * {
      box-shadow: none !important;
      text-shadow: none !important;
      line-height: 1.15 !important; /* Tighter line height */
    }
    p, li {
      margin-bottom: 2px !important;
      color: black !important;
      font-size: 11px !important;
    }
    h1, h2, h3 {
      margin-top: 5px !important;
      margin-bottom: 2px !important;
      color: black !important;
      line-height: 1.1 !important;
    }
    
    /* Green Box Print Override */
    .modern-green-box {
      margin: 8px 0 !important;
      padding: 10px !important;
      border-left-width: 3px !important;
      page-break-inside: avoid !important;
    }
    
    /* Specific overrides for EditableContentSection */
    div[class*="SectionContainer"], 
    div[class*="subsection"] {
      padding: 0 !important;
      margin-bottom: 2px !important;
      border: none !important;
      box-shadow: none !important;
    }
    blockquote {
      margin: 2px 0 2px 10px !important;
      padding: 0 !important;
    }
    ul, ol {
      margin-bottom: 2px !important;
      padding-left: 15px !important;
    }

    /* Force page break for the second page */
    .page-break {
      break-before: always;
      page-break-before: always;
      display: block;
      height: 0;
    }
  }
`;

const DocumentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  @media print {
    max-width: none;
    padding: 0;
    overflow: visible; /* Ensure nothing is clipped */
  }
`;

const PrintButton = styled.button`
  background: #34495e;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #2c3e50;
    transform: translateY(-1px);
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 10;
  
  @media print {
    display: none;
  }
`;

const QRCodeContainer = styled.div`
  display: none;
  
  @media print {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 140px; /* Increased slightly for safety */
    text-align: center;
    z-index: 100;
  }
`;

const QRCodeImage = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 4px;
  border: 1px solid #000;
  padding: 2px;
  background: white;
`;

const QRCodeText = styled.div`
  font-size: 10px !important;
  line-height: 1.2 !important;
  color: #000 !important;
  font-weight: 600 !important;
  margin: 0 !important;
  white-space: nowrap; /* Prevent link wrapping if possible */
`;

const PrintMetaInfo = styled.div`
  display: none;
  
  @media print {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px; /* Reduced from 15px */
    font-size: 11px;
    color: #444;
    border-bottom: 1px solid #ddd;
    padding-bottom: 4px; /* Reduced from 8px */
    width: 70%; /* Don't overlap with QR */
  }
`;

const DischargeDocument = ({ data, lang }) => {
  const handlePrint = () => {
    window.print();
  };

  const printTranslations = {
    tr: "Yazdır",
    en: "Print",
    de: "Drucken",
    es: "Imprimir",
    ru: "Печать",
    fr: "Imprimer",
    it: "Stampa",
    ro: "Imprimă",
    hu: "Nyomtatás",
    pl: "Drukuj",
    md: "Imprimă"
  };

  const flags = {
    tr: "🇹🇷", en: "🇬🇧", de: "🇩🇪", es: "🇪🇸",
    ru: "🇷🇺", fr: "🇫🇷", it: "🇮🇹", ro: "🇷🇴",
    hu: "🇭🇺", pl: "🇵🇱", md: "🇲🇩"
  };

  const qrLink = "https://r.ibrahimyagci.com/?tab=tab9";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrLink)}`;

  const isDualPage = !['tr', 'en'].includes(lang);
  const englishContent = content['en'].tabs.find(t => t.id === 'tab9').content;

  return (
    <DocumentContainer>
      <PrintStyles />
      <PrintMetaInfo>
        <span>{flags[lang]} Selected Language: <strong>{lang.toUpperCase()}</strong></span>
        <span style={{ marginLeft: '10px' }}>({Object.values(flags).join(' ')})</span>
      </PrintMetaInfo>

      <ButtonContainer>
        <PrintButton onClick={handlePrint}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          {printTranslations[lang] || printTranslations.en}
        </PrintButton>
      </ButtonContainer>

      <QRCodeContainer>
        <QRCodeImage src={qrCodeUrl} alt="QR Code" />
        <QRCodeText>
          <strong>r.ibrahimyagci.com</strong>
        </QRCodeText>
      </QRCodeContainer>

      {/* Page 1: Selected Language */}
      <EditableContentSection
        lang={lang}
        activeTabId="tab9"
        initialData={data.content}
      />

      <PrintFooter>
        <div className="footer-line primary">
          <strong>Op. Dr. Ibrahim YAGCI</strong> | Rinoplasti , Istanbul / Türkiye
        </div>
        <div className="footer-line secondary">
          <span>Tüm Tıbbi sorularınız için: <strong>+90 555 551 1578</strong></span>
          <span className="divider">•</span>
          <span>Randevu ve planlamalar için: <strong>+90 551 199 9963</strong></span>
        </div>
        <div className="footer-line links">
          r.ibrahimyagci.com <span className="divider">|</span> instagram/dribrahimyagci
        </div>
      </PrintFooter>

      {/* Page 2: English (Conditional) */}
      {isDualPage && (
        <EnglishPageContainer>
          <div className="page-break"></div>

          {/* Repeat Header for Page 2 */}
          <PrintMetaInfo style={{ display: 'flex' }}>
            <span>🇬🇧 Reference Language: <strong>EN</strong></span>
          </PrintMetaInfo>

          <QRCodeContainer style={{ display: 'flex' }}>
            <QRCodeImage src={qrCodeUrl} alt="QR Code" />
            <QRCodeText><strong>r.ibrahimyagci.com</strong></QRCodeText>
          </QRCodeContainer>

          <EditableContentSection
            lang="en"
            activeTabId="tab9"
            initialData={englishContent}
          />

          <PrintFooter>
            <div className="footer-line primary">
              <strong>Op. Dr. Ibrahim YAGCI</strong> | Rhinoplasty , Istanbul / Turkey
            </div>
            <div className="footer-line secondary">
              <span>For medical questions: <strong>+90 555 551 1578</strong></span>
              <span className="divider">•</span>
              <span>For appointments: <strong>+90 551 199 9963</strong></span>
            </div>
            <div className="footer-line links">
              r.ibrahimyagci.com <span className="divider">|</span> instagram/dribrahimyagci
            </div>
          </PrintFooter>
        </EnglishPageContainer>
      )}
    </DocumentContainer>
  );
};

const PrintFooter = styled.div`
  display: none;
  
  @media print {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid #eee;
    width: 100%;
    
    .footer-line {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 4px;
      color: #444;
      font-size: 9pt;
    }
    
    .footer-line.primary {
      font-size: 10pt;
      color: #000;
    }
    
    .divider {
      color: #ccc;
      margin: 0 5px;
    }
  }
`;

const EnglishPageContainer = styled.div`
  display: none;
  
  @media print {
    display: block;
  }
`;

export default DischargeDocument;
