import React, { useRef, useEffect, useState } from 'react';
import styles from '../assets/css/Animation.module.css'; // Import the CSS module

const AnimatedText = ({ text, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(textRef.current);
                }
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div ref={textRef} className={`grid-cols-1 ${isVisible ? styles['fade-in-left'] : ''} ${isVisible ? styles['fadeInAnimation'] : ''} ${isVisible ? styles[delay] : ''}`}>
            <h1 className={`text-white lg:text-[40px] tracking-[2px] 2xl:text-[50px] text-7xl font-light`}>{text}</h1>
        </div>
    );
};

export default AnimatedText;