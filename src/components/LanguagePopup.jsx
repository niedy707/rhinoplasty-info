import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100vh; /* Cover the screen area below the header to catch clicks */
  z-index: 1100;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  background-color: transparent;
  cursor: default;
`;

const PopupBox = styled.div`
  background: linear-gradient(135deg, #3498db, #2c3e50);
  padding: 1rem 2rem 1rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  max-width: 90%;
  width: auto;
  text-align: center;
  pointer-events: auto;
  height: fit-content;
  animation: slideDown 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-20px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: white;
  padding: 0;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: rotate(90deg);
  }
`;

const Message = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.5;
  margin: 0;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

const LanguagePopup = ({ onClose }) => {
  return (
    <PopupContainer onClick={onClose}>
      <PopupBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close">✕</CloseButton>
        <Message>
          You can select your language by clicking the flags at the top of the page. The site supports 12 languages.
        </Message>
      </PopupBox>
    </PopupContainer>
  );
};

export default LanguagePopup;
