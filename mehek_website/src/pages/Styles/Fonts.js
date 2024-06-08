import { css } from "styled-components";
import Montserrat from "./fonts/Montserrat-VariableFont_wght.ttf";
import MontserratItalic from "./fonts/Montserrat-Italic-VariableFont_wght.ttf";
import Kyiv from "./fonts/KyivTypeSerif-Heavy3.otf";
import KyivHeavy from "./fonts/KyivTypeSerif-Heavy.otf";

export const fontFaces = css`
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'MontserratItalic';
        src: url(${MontserratItalic}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Kyiv';
        src: url(${Kyiv}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'KyivHeavy';
        src: url(${KyivHeavy}) format('truetype');
        font-display: swap;
    }
`;
