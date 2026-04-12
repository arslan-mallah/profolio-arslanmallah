import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/About/Route/BackButton.scss';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
        setTimeout(() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <button className="back-btn" onClick={handleBack} aria-label="Go back to About section">
            <span className="back-btn__arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
            <span className="back-btn__label">Back to About</span>
        </button>
    );
};

export default BackButton;
