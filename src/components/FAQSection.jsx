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
  background: #e8f5e9;
  border: none;
  cursor: ${props => props.$isEditMode ? 'default' : 'pointer'};
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
  color: #34495e;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.$isEditMode ? 'white' : '#dcedc8'};
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

const FAQSection = ({ lang, data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const loadFaqs = React.useCallback(() => {
    if (!data || !data.content) return [];

    const storageKey = `faq_overrides_${lang}`;
    const savedFaqs = localStorage.getItem(storageKey);

    if (savedFaqs) {
      return JSON.parse(savedFaqs);
    } else {
      return data.content.flatMap(item => {
        if (item.subsections) {
          return item.subsections.map(sub => ({
            question: sub.title,
            answer: sub.text
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
    const storageKey = `faq_overrides_${lang}`;
    localStorage.setItem(storageKey, JSON.stringify(faqs));

    try {
      // Also save to server
      // 1. Get the full content object (we need to import it or get it from props if available, 
      // but here we can't easily import 'content' if it's not passed. 
      // Ideally FAQSection should receive the full content or a save callback.
      // However, since we are in a rush, let's try to fetch the current content from the server or just use what we have if we can import it.
      // Actually, we can just import 'content' from data/content.js like we did in EditableContentSection.

      // Dynamic import to avoid circular dependency issues if any (though unlikely here)
      const { content } = await import('../data/content');
      const fullContent = { ...content };

      // Update the FAQ section
      // We need to find the FAQ tab. It's usually the last one or has id 'tab8'.
      const tabIndex = fullContent[lang].tabs.findIndex(t => t.id === 'tab8');

      if (tabIndex !== -1) {
        // We need to convert the flat faqs array back to the structure expected by content.js
        // The structure is: content: [ { subsections: [ { title: q, text: a } ] } ]
        // But wait, the loadFaqs function flattens it. We need to reconstruct it.

        const newContentStructure = [
          {
            text: "",
            subsections: faqs.map(f => ({
              title: f.question,
              text: f.answer
            }))
          }
        ];

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
  }, [isEditMode, faqs, saveChanges]); // Depend on faqs to ensure we save latest

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
      const storageKey = `faq_overrides_${lang}`;
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
    // Simple check: if it contains HTML tags, treat as HTML. 
    // Quill usually wraps in <p>.
    const isHtml = /<[a-z][\s\S]*>/i.test(content);

    if (isHtml) {
      return <AnswerText dangerouslySetInnerHTML={{ __html: content }} />;
    } else {
      // Legacy plain text: replace \n with <br/>
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

  return (
    <FAQContainer $isEditMode={isEditMode}>
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
        <AccordionItem key={index} $isEditMode={isEditMode}>
          <AccordionHeader
            onClick={() => toggleAccordion(index)}
            $isOpen={openIndex === index}
            $isEditMode={isEditMode}
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
