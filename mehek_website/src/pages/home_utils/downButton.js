import React from 'react';
import styled, { css } from "styled-components";
import OstrichBold from "../resources/OstrichSans-Black.otf"

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
    font-size: 25pt;
    color: #843C12;

`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 40vh;
    z-index: 35;
`;