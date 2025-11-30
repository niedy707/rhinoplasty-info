import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
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
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
  color: #34495e;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f3f5;
  }

  span {
    flex: 1;
    padding-right: 1rem;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    min-width: 20px;
  }
`;

const AccordionContent = styled.div`
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  background: white;
`;

const AnswerText = styled.p`
  padding: 1.2rem;
  margin: 0;
  color: #576574;
  line-height: 1.6;
`;

const ChevronIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7.5L10 12.5L15 7.5" stroke="#34495e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FAQSection = ({ lang, data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    if (!data || !data.content) return null;

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const parseFAQ = (text, lang) => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const qaPairs = [];
        let currentQ = null;
        let currentA = null;

        // Define prefixes based on language
        const prefixes = {
            tr: { q: 'S:', a: 'C:' },
            en: { q: 'Q:', a: 'A:' },
            de: { q: 'F:', a: 'A:' },
            es: { q: 'P:', a: 'R:' },
            ru: { q: 'В:', a: 'О:' },
            fr: { q: 'Q :', a: 'R :' },
            it: { q: 'D:', a: 'R:' },
            ro: { q: 'Î:', a: 'R:' }
        };

        const currentPrefixes = prefixes[lang] || prefixes['en'];

        lines.forEach(line => {
            const trimmedLine = line.trim();

            // Check for Question
            if (trimmedLine.startsWith(currentPrefixes.q)) {
                if (currentQ && currentA) {
                    qaPairs.push({ question: currentQ, answer: currentA });
                    currentA = null;
                }
                currentQ = trimmedLine.substring(currentPrefixes.q.length).trim();
            }
            // Check for Answer
            else if (trimmedLine.startsWith(currentPrefixes.a)) {
                currentA = trimmedLine.substring(currentPrefixes.a.length).trim();
            }
            // Handle multi-line answers or questions if needed (basic implementation assumes single line or strict prefix)
            else if (currentA) {
                currentA += ' ' + trimmedLine;
            }
        });

        // Push the last pair
        if (currentQ && currentA) {
            qaPairs.push({ question: currentQ, answer: currentA });
        }

        return qaPairs;
    };

    const faqs = data.content.flatMap(item => parseFAQ(item.text, lang));

    return (
        <FAQContainer>
            <SectionTitle>{data.title}</SectionTitle>
            {faqs.map((faq, index) => (
                <AccordionItem key={index}>
                    <AccordionHeader
                        onClick={() => toggleAccordion(index)}
                        $isOpen={openIndex === index}
                    >
                        <span>{faq.question}</span>
                        <ChevronIcon />
                    </AccordionHeader>
                    <AccordionContent $isOpen={openIndex === index}>
                        <AnswerText>{faq.answer}</AnswerText>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </FAQContainer>
    );
};

export default FAQSection;
