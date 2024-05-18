import styled, { css } from "styled-components";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import Mandala from "../pages/resources/mandala.otf"
import Navigation from "./index";
import { useLocation } from 'react-router-dom';

const mandala = css`
    @font-face {
        font-family: 'Mandala';
        src: url(${Mandala}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

export const Title = styled(motion.h1)`
    ${mandala}
    text-align: center;
    font-size: 150pt;
    font-family: 'Mandala';
    color: #16191D;
    position: fixed;
    top: -12.2vw;
    // word-spacing: 100px;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0;
    z-index: 20; 
    overflow: hidden;
`;

export const ScrollFade = ({ text }) => {
    const textRef = useRef(null);
    const [textHeight, setTextHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHomePage, setIsHomePage] = useState(true); // Initialize as true
    const location = useLocation();

    useEffect(() => {
        if (textRef.current) {
            setTextHeight(textRef.current.clientHeight);
        }
    }, [textRef]);

    const offsetHeight = 50;
    const { scrollY } = useScroll();

    const yRange = useTransform(scrollY, [textHeight - offsetHeight, 0], [0, 1]);
    const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > textHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [textHeight]);

    useEffect(() => {
        console.log("Location change:", location.pathname);
        // Update isHomePage based on current location path
        setIsHomePage(location.pathname === "/");
    }, [location]);

    useEffect(() => {
        console.log("isHomePage:", isHomePage);
    }, [isHomePage]);

    return (
        <div>
            <Navigation isScrolled={isScrolled} showLogo={!isHomePage}/>
            {isHomePage && (
                <TitleContainer>
                    <Title ref={textRef} style={{ opacity }}>
                        {text}
                    </Title>
                </TitleContainer>
            )}
        </div>
    );
};