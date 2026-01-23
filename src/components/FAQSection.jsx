import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useAdmin } from '../context/AdminContext';

const FAQContainer = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  padding-bottom: ${props => props.$isEditMode ? '80px' : '0.5rem'};
  max-width: 500px; /* Force mobile-like width */
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const CategoryCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
  /* overflow: hidden; Removed to support sticky headers properly */
  border: 2px solid ${props => props.$borderColor || '#f3f4f6'};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background-color: ${props => props.$bgColor || '#f3f4f6'};
  color: ${props => props.$textColor || '#1f2937'};
  position: sticky;
  top: 56px; /* Exact height of flag bar to remove gap */
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const CategoryIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  padding: 6px;
`;

const CategoryTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.01em;
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
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.$bgColor || 'white'};
  border: none;
  cursor: ${props => props.$isEditMode ? 'default' : 'pointer'};
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
  color: #34495e;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }

  .header-content {
    flex: 1;
    padding-right: 1rem;
  }

  svg.chevron {
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
  padding: 1.25rem;
  margin: 0;
  color: #576574;
  line-height: 1.6;
  background-color: #fcfcfc;
  border-top: 1px solid #f3f4f6;
  
  p { margin-bottom: 1rem; }
  ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; }
  strong { font-weight: 600; color: #2c3e50; }
  blockquote {
    border-left: 4px solid #3498db;
    padding: 1rem;
    background: #ecf0f1;
    border-radius: 0 8px 8px 0;
    margin: 1rem 0;
    color: #2c3e50;
    font-style: italic;
  }
`;

const ChevronIcon = () => (
  <svg className="chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  
  &:hover { background: #2ecc71; }
`;

const ResetButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  
  &:hover { background: #c0392b; }
`;

const PDFButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0.8rem 1.5rem;
  background: #fef2f2; /* Light red background */
  border-radius: 12px;
  border: 1px solid #fecaca;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
  color: #991b1b; /* Dark red text */
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background: #fee2e2;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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


const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 24px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.9rem;
  color: #374151;
  background-color: white;
  transition: all 0.2s;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 15px center;
  background-size: 20px;
  padding-left: 45px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

// Helper to render icons based on string name
const renderCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'info':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'surgery':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    case 'recovery':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
    case 'risk':
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
    default:
      return null;
  }
};

// Helper for colors based on className string
// Returning RGBA for transparent question backgrounds as requested
const getColorFromClass = (cls) => {
  if (cls.includes('bg-blue-100')) return { bg: '#dbeafe', text: '#1e40af', questionBg: 'rgba(219, 234, 254, 0.8)' };
  if (cls.includes('bg-green-100')) return { bg: '#dcfce7', text: '#166534', questionBg: 'rgba(220, 252, 231, 0.8)' };
  if (cls.includes('bg-purple-100')) return { bg: '#f3e8ff', text: '#6b21a8', questionBg: 'rgba(243, 232, 255, 0.8)' };
  if (cls.includes('bg-orange-100')) return { bg: '#ffedd5', text: '#9a3412', questionBg: 'rgba(255, 237, 213, 0.8)' };
  return { bg: '#f3f4f6', text: '#1f2937', questionBg: 'rgba(243, 244, 246, 0.8)' };
};


const FAQSection = ({ lang, data }) => {
  const [openId, setOpenId] = useState(null); // String "groupIndex-questionIndex"
  const itemRefs = useRef({});

  // Scroll to element function
  const scrollToQuestion = (id) => {
    setTimeout(() => {
      const element = document.getElementById(`question-${id}`);
      if (element) {
        const headerOffset = 140; // Approx height of flags (56) + sticky header (60) + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100); // Small delay to allow state update/closing animation start
  };

  const toggleAccordion = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
      scrollToQuestion(id);
    }
  };

  const loadFaqs = React.useCallback(() => {
    if (!data || !data.content) return [];

    // Check for NEW hierarchical override
    const storageKey = `faq_groups_v6_${lang}`;
    const savedGroups = localStorage.getItem(storageKey);

    if (savedGroups) {
      return JSON.parse(savedGroups);
    }

    // Fallback to data content (should be grouped now)
    return data.content;
  }, [data, lang]);

  const [groups, setGroups] = useState(loadFaqs);
  const { isEditMode } = useAdmin();
  const prevEditModeRef = useRef(isEditMode);

  // State for search
  const [searchQuery, setSearchQuery] = useState('');

  // Update groups when data changes
  useEffect(() => {
    setGroups(loadFaqs());
  }, [loadFaqs]);

  // Strip HTML helper
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  // Filter groups based on search query
  const filteredGroups = React.useMemo(() => {
    if (searchQuery.length < 3) return groups;

    const lowerQuery = searchQuery.toLowerCase();

    return groups.map(group => {
      const matchingSubsections = (group.subsections || []).filter(sub => {
        const title = stripHtml(sub.title).toLowerCase();
        const text = stripHtml(sub.text).toLowerCase();
        return title.includes(lowerQuery) || text.includes(lowerQuery);
      });

      return { ...group, subsections: matchingSubsections };
    }).filter(group => group.subsections.length > 0);
  }, [groups, searchQuery]);

  const saveChanges = React.useCallback(async (silent = false) => {
    const storageKey = `faq_groups_v6_${lang}`;
    localStorage.setItem(storageKey, JSON.stringify(groups));

    // Also try to save to server
    try {
      const { content } = await import('../data/content');
      const fullContent = { ...content };
      const tabIndex = fullContent[lang].tabs.findIndex(t => t.id === 'tab8');

      if (tabIndex !== -1) {
        fullContent[lang].tabs[tabIndex].content = groups;

        await fetch('/api/save', {
          method: 'POST',
          body: JSON.stringify({ content: fullContent }),
          headers: { 'Content-Type': 'application/json' }
        });
        if (!silent) alert('Changes saved to server!');
      }
    } catch (e) {
      console.error(e);
      if (!silent) alert('Saved locally only.');
    }
  }, [groups, lang]);

  useEffect(() => {
    if (prevEditModeRef.current && !isEditMode) {
      saveChanges(true);
    }
    prevEditModeRef.current = isEditMode;
  }, [isEditMode, saveChanges]);



  const handleUpdate = (gIndex, qIndex, field, value) => {
    const newGroups = [...groups];
    if (newGroups[gIndex] && newGroups[gIndex].subsections && newGroups[gIndex].subsections[qIndex]) {
      // Map 'question' -> 'title', 'answer' -> 'text' if needed, or stick to title/text
      // The data uses title/text. The existing code might use question/answer.
      // Let's stick to title/text which is consistent with content.js
      if (field === 'question') newGroups[gIndex].subsections[qIndex].title = value;
      if (field === 'answer') newGroups[gIndex].subsections[qIndex].text = value;
      setGroups(newGroups);
    }
  };

  const resetToDefault = () => {
    if (window.confirm('Reset all FAQ changes?')) {
      localStorage.removeItem(`faq_groups_v6_${lang}`);
      setGroups(data.content);
    }
  };

  const renderContent = (content) => {
    if (!content) return null;
    const isHtml = /<[a-z][\s\S]*>/i.test(content);
    return <AnswerText dangerouslySetInnerHTML={{ __html: isHtml ? content : content.replace(/\n/g, '<br/>') }} />;
  };

  if (!groups || !groups.length) return null;

  const pdfUrl = "https://www.ibrahimyagci.com/_files/ugd/bc99bb_d1ac4338b4f74882bb5a73997dd2a957.pdf";
  const pdfLabels = {
    tr: "Hasta bilgilendirme broşürü (Türkçe) için :",
    en: "For patient information brochure (Turkish):"
  };

  return (
    <FAQContainer $isEditMode={isEditMode}>
      <PDFButton href={pdfUrl} target="_blank">
        <span>{pdfLabels[lang] || pdfLabels.en}</span>
        <CategoryIconWrapper style={{ width: 28, height: 28 }}> <PDFIcon /> </CategoryIconWrapper>
      </PDFButton>

      <SearchInput
        type="text"
        placeholder="Soru ya da cevaptaki bir kelime ile arama yapınız..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {isEditMode && (
        <StickyControls>
          <SaveButton onClick={() => saveChanges(false)}>Save Changes</SaveButton>
          <ResetButton onClick={resetToDefault}>Reset</ResetButton>
        </StickyControls>
      )}

      {filteredGroups.map((group, gIndex) => {
        const colors = getColorFromClass(group.headerColor || '');
        return (
          <CategoryCard key={gIndex}>
            {/* Category Header */}
            <CategoryHeader $bgColor={colors.bg} $textColor={colors.text}>
              <CategoryIconWrapper>
                {renderCategoryIcon(group.icon)}
              </CategoryIconWrapper>
              <CategoryTitle>{group.title}</CategoryTitle>
            </CategoryHeader>

            {/* Subsections (Questions) */}
            {group.subsections && group.subsections.map((item, qIndex) => {
              const uniqueId = `${gIndex}-${qIndex}`;
              return (
                <AccordionItem key={qIndex} $isEditMode={isEditMode}>
                  <AccordionHeader
                    id={`question-${uniqueId}`}
                    onClick={() => toggleAccordion(uniqueId)}
                    $isOpen={openId === uniqueId}
                    $isEditMode={isEditMode}
                    $bgColor={colors.questionBg}
                  >
                    <div className="header-content">
                      {isEditMode ? (
                        <ReactQuill
                          theme="snow"
                          value={item.title}
                          onChange={(val) => handleUpdate(gIndex, qIndex, 'question', val)}
                          modules={{ toolbar: false }}
                        />
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: item.title }} />
                      )}
                    </div>
                    <ChevronIcon />
                  </AccordionHeader>

                  <AccordionContent $isOpen={openId === uniqueId} $isEditMode={isEditMode}>
                    {isEditMode ? (
                      <ReactQuill
                        theme="snow"
                        value={item.text}
                        onChange={(val) => handleUpdate(gIndex, qIndex, 'answer', val)}
                      />
                    ) : (
                      renderContent(item.text)
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </CategoryCard>
        );
      })}
    </FAQContainer>
  );
};

export default FAQSection;
