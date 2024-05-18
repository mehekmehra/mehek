import styled, { css } from "styled-components";
import Fjalla from "../resources/FjallaOne-Regular.ttf"
import OstrichBold from "../resources/OstrichSans-Black.otf"
import Mandala from "../resources/mandala.otf"
import Karla from "../resources/karla.ttf"

const fjalla = css`
    @font-face {
        font-family: 'Fjalla';
        src: url(${Fjalla}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

const ostrichBold = css`
    @font-face {
        font-family: 'OstrichBold';
        src: url(${OstrichBold}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

const karla = css`
    @font-face {
        font-family: 'Karla';
        src: url(${Karla}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;


// export const SubTitle = styled.h2`
//     ${ostrichBold}
//     text-align: center;
//     font-size: 3vw;
//     color: #833B25;
//     z-index: 20;
//     position: relative;
//     transform: translateY(-21vh);
//     font-family: 'OstrichBold';
// `;


export const StyledText = styled.p`
    ${ostrichBold}
    text-align: left;
    font-size: 1vw;
    font-family: 'OstrichBold', bold;
    color: #B9571F;
    word-break: break-word;
    overflow-wrap: anywhere;
    max-width: 25vw;
    z-index: 10; 
    position: relative;
`;
