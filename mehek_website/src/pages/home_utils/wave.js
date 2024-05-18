import React from 'react';
import styled from 'styled-components';

const WaveSVG = styled.svg`
    width: 50vw
    height: 0vh;
    position: relative;
    transform: translateY(-98vh);
    left: 0;
`;

const WavePath = styled.path`
    fill: ${props => props.fillColor};

`;

const WaveContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 144vh;
    left: 0;
    z-index: 27;
`;


export const SinusoidalWave = ({fillColor}) => {
    const amplitude = 20; 
    const wavelength = 4; 
    const frequency = 0.015; 
   
    let pathData = `M 0,160`;

    for (let i = 0; i <= 1440; i += 20) {
        const x = i;
        const y = amplitude * Math.sin((x / wavelength) * 2 * Math.PI * frequency) + 160;
        pathData += ` L ${x},${y}`; 
    }
    pathData += ` L 1440,320 L 0,320 Z`; 
    return (
        <WaveContainer>
            <WaveSVG viewBox="0 0 1440 320">
                <WavePath d={pathData} fillColor={fillColor}/>
            </WaveSVG>
        </WaveContainer>
    );
};

