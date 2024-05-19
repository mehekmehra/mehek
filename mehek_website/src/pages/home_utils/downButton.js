import React, { useRef, Component } from 'react';
import styled, { css } from "styled-components";
import OstrichBold from "../resources/OstrichSans-Black.otf"
import { StyledText } from './textStyles';
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';

const ostrichBold = css`
    @font-face {
        font-family: 'OstrichBold';
        src: url(${OstrichBold}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

export const DownButton = styled.button`
    ${ostrichBold}
    font-family: 'OstrichBold';
    text-align: center;
    position: relative;
    cursor: pointer;
    border: none;
    background-color: transparent;
    height: 30px;
    font-size: 20pt;
    color: #843C12;
    &:hover {
        color: #B9571F;
    }
  
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 87vh;
    z-index: 35;
`;

export const ScrollDown = () => {
    const pageRef = useRef(null);
    const offsetAdjustment = 100;

    return (
        <>  
            {/* <motion.div
            initial={{y: 0}}
            animate={{y: [0, -5, 5, 0]}} 
            transition={{
                duration: 3, 
                repeat: Infinity, 
                repeatType: "loop",
            }}
            > */}
                <ButtonContainer>
                    <DownButton onClick={() =>
                        window.scrollTo({
                            top: pageRef.current.offsetTop - offsetAdjustment,
                            behavior: "smooth"
                        })}>
                        Learn More ▼
                    </DownButton>
                </ButtonContainer>
            {/* </motion.div> */}
            <StyledText ref={pageRef}> filler text </StyledText>
        </>
    )
};

const AnimatedButtonContainer = animated(ButtonContainer);

export const Bounce = () => {
    const pageRef = useRef(null);
    const offsetAdjustment = 100;

    const props = useSpring({
        from: { transform: 'translateY(0px)' },
        to: [
            { transform: 'translateY(-3px)' },
            { transform: 'translateY(3px)' },
            { transform: 'translateY(0px)' }
        ],
        config: { duration: 700 },
        loop: { reverse: true },
    });

    return (
        <>
            <AnimatedButtonContainer style={props}>
                <DownButton onClick={() =>
                    window.scrollTo({
                        top: pageRef.current.offsetTop - offsetAdjustment,
                        behavior: "smooth"
                    })}>
                    Learn More ▼
                </DownButton>
            </AnimatedButtonContainer>
            <StyledText ref={pageRef}>Hey!</StyledText>
        </>
    );
};