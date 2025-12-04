import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useAdmin } from '../context/AdminContext';
import { content } from '../data/content';

const SectionContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  position: relative;
  border: ${props => props.$isEditMode ? '2px dashed #3498db' : 'none'};
`;

const EditLabel = styled.label`
  display: block;
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 1rem;
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

const EditableContentSection = ({ lang, activeTabId, initialData }) => {
    const { isEditMode } = useAdmin();
    const [localContent, setLocalContent] = useState(initialData);

    // Sync with props when they change
    useEffect(() => {
        setLocalContent(initialData);
    }, [initialData]);

    const handleUpdate = (sectionIndex, field, value, subIndex = null, subField = null) => {
        const newContent = [...localContent];
        if (subIndex !== null) {
            // Update subsection
            newContent[sectionIndex].subsections[subIndex][subField] = value;
        } else {
            // Update main section
            newContent[sectionIndex][field] = value;
        }
        setLocalContent(newContent);
    };

    const handleListUpdate = (sectionIndex, itemIndex, value, subIndex = null) => {
        const newContent = [...localContent];
        if (subIndex !== null) {
            newContent[sectionIndex].subsections[subIndex].items[itemIndex] = value;
        } else {
            newContent[sectionIndex].items[itemIndex] = value;
        }
        setLocalContent(newContent);
    }

    const saveChanges = async () => {
        try {
            // 1. Get the full content object
            const fullContent = { ...content };

            // 2. Update the specific part we modified
            // We need to find the correct tab in the full content object and update its content
            const tabIndex = fullContent[lang].tabs.findIndex(t => t.id === activeTabId);
            if (tabIndex !== -1) {
                fullContent[lang].tabs[tabIndex].content = localContent;
            }

            // 3. Send to server
            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: fullContent }),
            });

            if (response.ok) {
                alert('Changes saved successfully!');
                // Ideally, we should reload the page or update the global context to reflect changes
                // For now, a reload might be safest to ensure content.js is re-read if we were using dynamic imports,
                // but since we are bundling, the bundle won't update until rebuild. 
                // HOWEVER, in dev mode with Vite, HMR might handle it if the file changes.
                // But since we are modifying the source file, Vite should trigger a HMR update.
            } else {
                alert('Failed to save changes.');
            }
        } catch (error) {
            console.error('Error saving:', error);
            alert('Error saving changes.');
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean'],
            [{ 'color': [] }, { 'background': [] }]
        ],
    };

    const renderText = (text) => {
        if (!text) return null;
        // Check if text looks like HTML (contains tags)
        const isHtml = /<[a-z][\s\S]*>/i.test(text);

        if (isHtml) {
            return <div dangerouslySetInnerHTML={{ __html: text }} />;
        }

        // Fallback for plain text with newlines
        return text.split('\n').map((line, i) => <p key={i}>{line}</p>);
    }

    return (
        <>
            {localContent.map((section, index) => (
                <SectionContainer key={index} $isEditMode={isEditMode}>
                    {/* Main Section Title */}
                    {isEditMode ? (
                        <div>
                            <EditLabel>Section Title</EditLabel>
                            <ReactQuill
                                theme="snow"
                                value={section.title || ''}
                                onChange={(val) => handleUpdate(index, 'title', val)}
                                modules={{ toolbar: false }}
                            />
                        </div>
                    ) : (
                        section.title && <h2 dangerouslySetInnerHTML={{ __html: section.title }} />
                    )}

                    {/* Main Section Text */}
                    {isEditMode ? (
                        <div>
                            <EditLabel>Section Text</EditLabel>
                            <ReactQuill
                                theme="snow"
                                value={section.text || ''}
                                onChange={(val) => handleUpdate(index, 'text', val)}
                                modules={modules}
                            />
                        </div>
                    ) : (
                        section.text && <div className="text-content">{renderText(section.text)}</div>
                    )}

                    {/* Main Section Items (List) */}
                    {section.items && (
                        isEditMode ? (
                            <div>
                                <EditLabel>List Items</EditLabel>
                                {section.items.map((item, i) => (
                                    <ReactQuill
                                        key={i}
                                        theme="snow"
                                        value={item}
                                        onChange={(val) => handleListUpdate(index, i, val)}
                                        modules={{ toolbar: false }}
                                        style={{ marginBottom: '0.5rem' }}
                                    />
                                ))}
                            </div>
                        ) : (
                            <ul className="content-list">
                                {section.items.map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        )
                    )}

                    {/* Subsections */}
                    {section.subsections && section.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="subsection" style={{ marginTop: '2rem', paddingLeft: '1rem', borderLeft: isEditMode ? '2px solid #eee' : 'none' }}>
                            {isEditMode ? (
                                <div>
                                    <EditLabel>Subsection Title</EditLabel>
                                    <ReactQuill
                                        theme="snow"
                                        value={sub.title || ''}
                                        onChange={(val) => handleUpdate(index, 'title', val, subIndex, 'title')}
                                        modules={{ toolbar: false }}
                                    />
                                    <EditLabel>Subsection Text</EditLabel>
                                    <ReactQuill
                                        theme="snow"
                                        value={sub.text || ''}
                                        onChange={(val) => handleUpdate(index, 'text', val, subIndex, 'text')}
                                        modules={modules}
                                    />
                                    {sub.items && (
                                        <div>
                                            <EditLabel>Subsection List Items</EditLabel>
                                            {sub.items.map((item, i) => (
                                                <ReactQuill
                                                    key={i}
                                                    theme="snow"
                                                    value={item}
                                                    onChange={(val) => handleListUpdate(index, i, val, subIndex)}
                                                    modules={{ toolbar: false }}
                                                    style={{ marginBottom: '0.5rem' }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {sub.subtext && (
                                        <div>
                                            <EditLabel>Subtext</EditLabel>
                                            <ReactQuill
                                                theme="snow"
                                                value={sub.subtext || ''}
                                                onChange={(val) => handleUpdate(index, 'subtext', val, subIndex, 'subtext')}
                                                modules={modules}
                                            />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    {sub.title && <h3 dangerouslySetInnerHTML={{ __html: sub.title }} />}
                                    {sub.text && <div className="text-content">{renderText(sub.text)}</div>}
                                    {sub.items && (
                                        <ul className="content-list">
                                            {sub.items.map((item, j) => (
                                                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ul>
                                    )}
                                    {sub.subtext && <div className="text-content subtext">{renderText(sub.subtext)}</div>}
                                </>
                            )}
                        </div>
                    ))}
                </SectionContainer>
            ))}

            {isEditMode && (
                <StickyControls>
                    <SaveButton onClick={saveChanges}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                        </svg>
                        Save Changes
                    </SaveButton>
                </StickyControls>
            )}
        </>
    );
};

export default EditableContentSection;
