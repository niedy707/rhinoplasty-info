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
  color: ${props => props.$color || 'inherit'};
`;

// ... (skipping unchanged code)

// Helper to render icons based on string name
const renderCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'info':
      return <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'surgery':
      return <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    case 'recovery':
      return <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
    case 'risk':
      return <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
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
    }, 350); // Wait for closing animation (300ms) to finish for accurate position
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
