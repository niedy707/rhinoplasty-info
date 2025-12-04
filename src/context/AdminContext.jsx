import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isAdminLoggedIn') === 'true';
    });
    const [isEditMode, setIsEditMode] = useState(false);

    const login = (password) => {
        if (password === 'asd.123') {
            setIsLoggedIn(true);
            localStorage.setItem('isAdminLoggedIn', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsEditMode(false);
        localStorage.removeItem('isAdminLoggedIn');
    };

    const toggleEditMode = () => {
        if (isLoggedIn) {
            setIsEditMode(!isEditMode);
        }
    };

    return (
        <AdminContext.Provider value={{ isLoggedIn, isEditMode, login, logout, toggleEditMode }}>
            {children}
        </AdminContext.Provider>
    );
};
