import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useAdmin } from '../context/AdminContext';

const FAQContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding-bottom: ${props => props.$isEditMode ? '80px' : '2rem'}; // Space for sticky button
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #e9ecef;
  &:last-child {
    border-bottom: none;
  }
  margin-bottom: ${props => props.$isEditMode ? '2rem' : '0'};
`;

const AccordionHeader = styled.div`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.$bgColor || '#e8f5e9'};
  border: none;
  cursor: ${props => props.$isEditMode ? 'default' : 'pointer'};
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
  color: #34495e;
  transition: background-color 0.2s ease;

  &:hover {
    filter: brightness(0.95);
  }

  .header-content {
    flex: 1;
    padding-right: 1rem;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    min-width: 20px;
    display: ${props => props.$isEditMode ? 'none' : 'block'};
  }
`;

const AccordionContent = styled.div`
  max-height: ${props => (props.$isOpen || props.$isEditMode) ? '2000px' : '0'};
  overflow: hidden;
  overflow: ${props => props.$isEditMode ? 'visible' : 'hidden'};
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${props => (props.$isOpen || props.$isEditMode) ? '1' : '0'};
  background: white;
  padding: ${props => props.$isEditMode ? '1rem' : '0'};
`;

const AnswerText = styled.div`
  padding: 1.2rem;
  margin: 0;
  color: #576574;
  line-height: 1.6;
  
  /* Quill Content Styles */
  p { margin-bottom: 1rem; }
  ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; }
  strong { font-weight: 600; color: #2c3e50; }
  em { font-style: italic; }
  u { text-decoration: underline; }
  h1, h2, h3 { color: #2c3e50; margin-top: 1rem; margin-bottom: 0.5rem; }
  
  blockquote {
    border-left: 4px solid #3498db;
    padding: 1rem;
    background: #ecf0f1;
    border-radius: 0 8px 8px 0;
    margin: 1rem 0;
    color: #2c3e50;
    font-style: italic;
    position: relative;
    
    &::before {
      content: '"';
      font-size: 3rem;
      color: #bdc3c7;
      position: absolute;
      top: -10px;
      right: 10px;
      opacity: 0.5;
    }
  }
`;

const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="#34495e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EditLabel = styled.label`
  display: block;
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const StickyControls = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  display: flex;
  gap: 1rem;
  z-index: 999;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from { transform: translate(-50%, 100%); opacity: 0; }
    to { transform: translate(-50%, 0); opacity: 1; }
  }
`;

const SaveButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 10px rgba(39, 174, 96, 0.3);
  transition: all 0.2s;
  
  &:hover { 
    background: #2ecc71; 
    transform: translateY(-2px);
  }
`;

const ResetButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  
  &:hover { background: #c0392b; }
`;

const PDFButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  gap: 12px;
  flex-wrap: wrap;
`;

const PDFLabel = styled.span`
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 500;
`;

const PDFLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #fdf2f2;
  color: #c0392b;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid #f8d7da;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #f8d7da;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  svg {
    color: #e74c3c;
  }
`;

const PDFIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const FAQSection = ({ lang, data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef([]);

  const loadFaqs = React.useCallback(() => {
    if (!data || !data.content) return [];

    const storageKey = `faq_overrides_v5_${lang}`;
    const savedFaqs = localStorage.getItem(storageKey);

    if (savedFaqs) {
      return JSON.parse(savedFaqs);
    } else {
      return data.content.flatMap(item => {
        if (item.subsections) {
          return item.subsections.map(sub => ({
            question: sub.title,
            answer: sub.text,
            bgColor: item.bgColor // Preserve bgColor
          }));
        }
        return [];
      });
    }
  }, [data, lang]);

  const [faqs, setFaqs] = useState(loadFaqs);
  const { isEditMode } = useAdmin();
  const prevEditModeRef = useRef(isEditMode);

  const saveChanges = React.useCallback(async (silent = false) => {
    const storageKey = `faq_overrides_v5_${lang}`;
    localStorage.setItem(storageKey, JSON.stringify(faqs));

    try {
      const { content } = await import('../data/content');
      const fullContent = { ...content };

      const tabIndex = fullContent[lang].tabs.findIndex(t => t.id === 'tab8');

      if (tabIndex !== -1) {
        const newContentStructure = [];
        let currentGroup = null;

        faqs.forEach(faq => {
          // Check if we need to start a new group
          // We start a new group if:
          // 1. There is no current group
          // 2. The current group's bgColor is different from the current faq's bgColor
          if (!currentGroup || currentGroup.bgColor !== faq.bgColor) {
            currentGroup = {
              bgColor: faq.bgColor,
              subsections: []
            };
            newContentStructure.push(currentGroup);
          }

          currentGroup.subsections.push({
            title: faq.question,
            text: faq.answer
          });
        });

        fullContent[lang].tabs[tabIndex].content = newContentStructure;

        const response = await fetch('/api/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: fullContent }),
        });

        if (response.ok) {
          if (!silent) alert('Changes saved to server!');
        } else {
          console.error('Failed to save to server');
          if (!silent) alert('Failed to save to server (local storage updated)');
        }
      }

    } catch (error) {
      console.error('Error saving to server:', error);
      if (!silent) alert('Error saving to server (local storage updated)');
    }

    if (!silent && !window.confirm) {
      // alert('Changes saved locally!'); // Already handled above
    }
  }, [faqs, lang]);

  // Load data when lang or data changes
  useEffect(() => {
    setFaqs(loadFaqs());
  }, [loadFaqs]);

  // Auto-save when exiting edit mode
  useEffect(() => {
    if (prevEditModeRef.current && !isEditMode) {
      // User just exited edit mode
      saveChanges(true); // Silent save
    }
    prevEditModeRef.current = isEditMode;
  }, [isEditMode, faqs, saveChanges]);

  // Scroll active item into view
  useEffect(() => {
    if (openIndex !== null && itemRefs.current[openIndex]) {
      // Small delay to allow for state update and potential layout shift
      setTimeout(() => {
        itemRefs.current[openIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }, 350);
    }
  }, [openIndex]);

  const toggleAccordion = (index) => {
    if (!isEditMode) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const handleUpdate = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index] = { ...newFaqs[index], [field]: value };
    setFaqs(newFaqs);
  };

  const resetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all changes for this language?')) {
      const storageKey = `faq_overrides_v5_${lang}`;
      localStorage.removeItem(storageKey);
      const initialFaqs = data.content.flatMap(item => {
        if (item.subsections) {
          return item.subsections.map(sub => ({
            question: sub.title,
            answer: sub.text
          }));
        }
        return [];
      });
      setFaqs(initialFaqs);
    }
  };

  // Helper to determine if content is HTML (from Quill) or plain text
  const renderContent = (content) => {
    if (!content) return null;
    const isHtml = /<[a-z][\s\S]*>/i.test(content);

    if (isHtml) {
      return <AnswerText dangerouslySetInnerHTML={{ __html: content }} />;
    } else {
      return <AnswerText dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />;
    }
  };

  if (!faqs.length) return null;

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean'],
      [{ 'color': [] }, { 'background': [] }]
    ],
  };

  const pdfLabels = {
    tr: "Hasta bilgilendirme broşürü (Türkçe) için :",
    en: "For patient information brochure (Turkish):",
    de: "Für die Patienteninformationsbroschüre (Türkisch):",
    es: "Para el folleto de información al paciente (Turco):",
    ru: "Для брошюры с информацией для пациентов (Турецкий):",
    fr: "Pour la brochure d'information des patients (Turc) :",
    it: "Per l'opuscolo informativo per il paziente (Turco):",
    ro: "Pentru broșura de informare a pacientului (Turcă):",
    hu: "A páciens tájékoztató füzethez (Török):",
    pl: "W celu uzyskania broszury informacyjnej dla pacjenta (Język turecki):",
    md: "Pentru broșura de informare a pacientului (Turcă):"
  };

  const pdfUrl = "https://www.ibrahimyagci.com/_files/ugd/bc99bb_d1ac4338b4f74882bb5a73997dd2a957.pdf";

  return (
    <FAQContainer $isEditMode={isEditMode}>
      <PDFButtonContainer>
        <PDFLabel>{pdfLabels[lang] || pdfLabels.en}</PDFLabel>
        <PDFLink href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <PDFIcon />
          PDF
        </PDFLink>
      </PDFButtonContainer>

      <SectionTitle>{data.title}</SectionTitle>

      {isEditMode && (
        <StickyControls>
          <SaveButton onClick={() => saveChanges(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            Save Changes
          </SaveButton>
          <ResetButton onClick={resetToDefault}>Reset</ResetButton>
        </StickyControls>
      )}

      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          $isEditMode={isEditMode}
          ref={el => itemRefs.current[index] = el}
        >
          <AccordionHeader
            onClick={() => toggleAccordion(index)}
            $isOpen={openIndex === index}
            $isEditMode={isEditMode}
            $bgColor={faq.bgColor}
          >
            <div className="header-content">
              {isEditMode ? (
                <div>
                  <EditLabel>Question</EditLabel>
                  <ReactQuill
                    theme="snow"
                    value={faq.question}
                    onChange={(val) => handleUpdate(index, 'question', val)}
                    modules={{ toolbar: false }}
                    style={{ marginBottom: '1rem' }}
                  />
                </div>
              ) : (
                <span dangerouslySetInnerHTML={{ __html: faq.question }} />
              )}
            </div>
            <ChevronIcon />
          </AccordionHeader>

          <AccordionContent $isOpen={openIndex === index} $isEditMode={isEditMode}>
            {isEditMode ? (
              <div>
                <EditLabel>Answer</EditLabel>
                <ReactQuill
                  theme="snow"
                  value={faq.answer}
                  onChange={(val) => handleUpdate(index, 'answer', val)}
                  modules={modules}
                />
              </div>
            ) : (
              renderContent(faq.answer)
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </FAQContainer>
  );
};

export default FAQSection;
