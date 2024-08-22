import React, { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Load dark mode preference from local storage
        const storedMode = localStorage.getItem('darkMode');
        if (storedMode) {
            setIsDarkMode(JSON.parse(storedMode));
        }
    }, []);

    useEffect(() => {
        // Save dark mode preference to local storage
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeProvider, DarkModeContext };
