import styled from "styled-components";
import { fontFaces } from "./Fonts";

export const Title = styled.h1 `
    ${fontFaces}
    font-family: 'Montserrat';
    font-size: 30pt;
    color: #1D1E1E;
    line-height: 40%;
    padding: 0px;
    font-weight: 400;
`

export const SubTitle = styled.h1 `
    ${fontFaces}
    font-family: 'Montserrat';
    font-size: 10pt;
    color: #1D1E1E;
    line-height: 150%;
    padding: 0px;
    font-weight: 350;
    max-width: ${({ isSmallScreen }) => (isSmallScreen ? "90vw" : "240px")};
`

export const Skills = styled.h1 `
    ${fontFaces}
    font-family: 'Montserrat';
    font-size: 10pt;
    color: #1D1E1E;
    line-height: 150%;
    padding: 0px;
    font-weight: 350;
    text-align: ${({ isSmallScreen }) => (isSmallScreen ? "left" : "right")};
`

export const DescriptionTitle = styled.h1 `
    ${fontFaces}
    font-family: 'Montserrat';
    font-size: 15pt;
    color: #1D1E1E;
    line-height: 150%;
    padding: 0px;
    font-weight: 400;
`

export const ExternalLink = styled.a `
    text-decoration: underline;
    color: #395662;
`

export const BigContent = styled.h1 `
    font-family: 'Montserrat';
    font-size: 24pt;
    color: #1D1E1E;
    padding: 0px;
    font-weight: 300;
    text-align: ${({ isSmallScreen }) => (isSmallScreen ? "left" : "right")};
    transition: font-weight 0.5s ease, color 0.5s ease, font-family 0.5s ease;
    &:hover {
        font-weight: 500;
        color: #4A6D7C;
        font-family: 'MontserratItalic';
    }
`