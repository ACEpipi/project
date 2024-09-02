// src/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import file CSS cho trang Landing Page

const LandingPage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/products');
    };

    return (
        <div className="landing-page">
            <h1>Tên Công Ty</h1>
            <p>
                Chào mừng đến với [Tên Công Ty]! Chúng tôi cung cấp các loại cây cảnh chất lượng cao,
                giúp không gian sống và làm việc của bạn trở nên xanh tươi và thoải mái hơn.
            </p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
};

export default LandingPage;
