import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import EditableContentSection from './EditableContentSection';

const PrintStyles = createGlobalStyle`
  @media print {
    @page {
      margin: 0.5cm;
    }
    body {
      background: white !important;
      padding: 0 !important;
      margin: 0 !important;
      color: black !important;
      font-size: 11px !important; /* Slightly smaller base font */
    }
    .app-header, 
    .tab-navigation, 
    .language-bar, 
    .sticky-bottom-bar, 
    .app-footer,
    .edit-button,
    .admin-controls,
    .nav-arrow-btn {
      display: none !important;
    }
    .main-content {
      padding: 0 !important;
      margin: 0 !important;
      max-width: none !important;
    }
    .tab-content {
      padding: 0 !important;
    }
    .app-container {
       min-height: auto !important;
       background: white !important;
    }
    /* Compaction Styles */
    * {
      box-shadow: none !important;
      text-shadow: none !important;
      line-height: 1.25 !important; /* Tighter line height */
    }
    p, li {
      margin-bottom: 4px !important; /* Minimal gap between paragraphs/items */
      color: black !important;
    }
    h1, h2, h3 {
      margin-top: 8px !important;
      margin-bottom: 6px !important;
      color: black !important;
      line-height: 1.2 !important;
    }
    /* Specific overrides for EditableContentSection containers */
    div[class*="SectionContainer"], 
    div[class*="subsection"] {
      padding: 0 !important;
      margin-bottom: 10px !important;
      border: none !important;
      box-shadow: none !important;
    }
    blockquote {
      margin: 4px 0 4px 15px !important;
      padding: 0 !important;
    }
    ul, ol {
      margin-bottom: 6px !important;
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

const PrintHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eee;

  @media print {
    display: none; 
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

const LogoPlaceholder = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #2c3e50;
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
    margin-bottom: 15px;
    font-size: 12px;
    color: #666;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
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

  return (
    <DocumentContainer>
      <PrintStyles />
      <PrintHeader>
        <LogoPlaceholder>Op. Dr. Ibrahim YAĞCI</LogoPlaceholder>
        <PrintButton onClick={handlePrint}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          {printTranslations[lang] || printTranslations.en}
        </PrintButton>
      </PrintHeader>

      <PrintMetaInfo>
        <span>{flags[lang]} Selected Language: <strong>{lang.toUpperCase()}</strong></span>
        <span style={{ marginLeft: '10px' }}>({Object.values(flags).join(' ')})</span>
      </PrintMetaInfo>

      <QRCodeContainer>
        <QRCodeImage src={qrCodeUrl} alt="QR Code" />
        <QRCodeText>
          <strong>r.ibrahimyagci.com</strong>
        </QRCodeText>
      </QRCodeContainer>

      <EditableContentSection
        lang={lang}
        activeTabId="tab9"
        initialData={data.content}
      />
    </DocumentContainer>
  );
};

export default DischargeDocument;
