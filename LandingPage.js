import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Tên Công Ty</h1>
            <p>
                Chào mừng đến với công ty của chúng tôi! Chúng tôi cung cấp các loại cây cảnh chất lượng cao để làm đẹp không gian sống của bạn.
            </p>
            <button className="get-started-button" onClick={() => window.location.href='/products'}>
                Get Started
            </button>
        </div>
    );
}

export default LandingPage;
