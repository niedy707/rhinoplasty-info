import React, { useState } from 'react';
import styled from 'styled-components';
import { useAdmin } from '../context/AdminContext';
import LoginModal from './LoginModal';

const StyledEditButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.$active ? '#e74c3c' : '#3498db'};
  color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  display: none; /* Hidden as per request */

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const EditButton = () => {
    const { isLoggedIn, isEditMode, toggleEditMode } = useAdmin();
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        if (isLoggedIn) {
            toggleEditMode();
        } else {
            setShowModal(true);
        }
    };

    return (
        <>
            <StyledEditButton onClick={handleClick} $active={isEditMode} title={isEditMode ? "Exit Edit Mode" : "Edit Content"}>
                {isEditMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                )}
            </StyledEditButton>
            {showModal && <LoginModal onClose={() => setShowModal(false)} />}
        </>
    );
};

export default EditButton;
