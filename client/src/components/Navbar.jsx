import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full py-4 px-6 transition-all duration-300 ease-in-out ${isScrolled ? (isDarkMode ? 'bg-gray-800' : 'bg-gray-200') : 'bg-transparent'} ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ zIndex: 1000 }}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span className="text-xl font-bold">FUSION</span>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ${isDarkMode ? 'bg-indigo-600 text-gray-100 hover:bg-indigo-700' : 'bg-indigo-400 text-gray-800 hover:bg-indigo-500'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
