import React, { useState } from 'react';
import styled from 'styled-components';
import { useAdmin } from '../context/AdminContext';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
  color: #2c3e50;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &.primary {
    background: #3498db;
    color: white;
    &:hover { background: #2980b9; }
  }

  &.secondary {
    background: #e0e0e0;
    color: #333;
    &:hover { background: #d0d0d0; }
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const LoginModal = ({ onClose }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, toggleEditMode } = useAdmin();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(password)) {
            toggleEditMode();
            onClose();
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <Title>Admin Access</Title>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <ButtonGroup>
                        <Button type="button" className="secondary" onClick={onClose}>Cancel</Button>
                        <Button type="submit" className="primary">Login</Button>
                    </ButtonGroup>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

export default LoginModal;
