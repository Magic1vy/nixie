import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop}>
                    <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.9" d="M23.1887 11.9015C22.7981 11.5109 22.165 11.5109 21.7745 11.9015L15.4105 18.2654C15.02 18.656 15.02 19.2891 15.4105 19.6796C15.801 20.0702 16.4342 20.0702 16.8247 19.6796L22.4816 14.0228L28.1384 19.6796C28.5289 20.0702 29.1621 20.0702 29.5526 19.6796C29.9432 19.2891 29.9432 18.656 29.5526 18.2654L23.1887 11.9015ZM23.4816 34.3838V12.6086L21.4816 12.6086V34.3838L23.4816 34.3838Z" fill="url(#paint0_linear_719_10)"/>
                        <rect x="1" y="1" width="43" height="44.2857" stroke="url(#paint1_linear_719_10)" stroke-width="2"/>
                        <defs>
                        <linearGradient id="paint0_linear_719_10" x1="22.4816" y1="12.6086" x2="22.4815" y2="33.5242" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.78"/>
                        <stop offset="1" stop-color="#946E4A" stop-opacity="0.5"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_719_10" x1="22.4835" y1="-1.17045e-07" x2="22.4864" y2="46.2857" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.78"/>
                        <stop offset="1" stop-color="#946E4A" stop-opacity="0.5"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </button>
            )}
        </section>
    );
}

export default ScrollToTopButton;
