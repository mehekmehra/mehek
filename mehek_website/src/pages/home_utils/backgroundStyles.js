import React from 'react';
import styled from 'styled-components';

export const Rectangle = styled.div`
    width: 80vw;           
    height: 90vh;         
    background-color: #EEEAD0;
    border-radius: 5vw 5vw 0vw 0vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5; 
    position: relative;
`;

export const RoundedRectangle = () => {
    return (
        <Rectangle>
        </Rectangle>
    );
};

export const RectangleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 1000px;
    left: 0;
`;

export const Container = styled.div`
    width: 100%;
    margin: auto auto
`;