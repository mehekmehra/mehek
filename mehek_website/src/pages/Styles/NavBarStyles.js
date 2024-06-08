import styled from "styled-components";
import { Link } from "react-router-dom"
import { fontFaces } from "./Fonts";

export const StyledLink = styled(Link) `
    ${fontFaces}
    font-family: 'Montserrat';
    font-size: 12pt;
    text-decoration: none;
    color: #1D1E1E;
    line-height: 200%;
    font-weight: 350;
    transition: font-weight 0.5s ease, color 0.5s ease, font-family 0.5s ease;
    &:hover {
        font-weight: 500;
        color: #4A6D7C;
        font-family: 'MontserratItalic';
    }
`

export const ExternalStyledLink = styled.a `
    ${fontFaces}
    font-family: 'Montserrat';
    font-size: 12pt;
    text-decoration: none;
    color: #1D1E1E;
    line-height: 200%;
    font-weight: 350;
    transition: font-weight 0.5s ease, color 0.5s ease, font-family 0.5s ease;
    &:hover {
        font-weight: 500;
        color: #4A6D7C;
        font-family: 'MontserratItalic';
    }
`

export const StyledElement = styled.li `
    text-align: left;
    list-style-type: none;
    padding: ${({ isSmallScreen }) => (isSmallScreen ? "0px 5px" : "0px")};
    float: ${({ isSmallScreen }) => (isSmallScreen ? "left" : "auto")};
`
export const StyledList = styled.ul `
    padding: ${({ isSmallScreen }) => (isSmallScreen ? "0px 10px" : "0px")};
    background-color: ${({ isSmallScreen }) => (isSmallScreen ? "#E1E0D8" : "none")};
    position: ${({ isSmallScreen }) => (isSmallScreen ? "fixed" : "auto")};
    top: ${({ isSmallScreen }) => (isSmallScreen ? "0" : "auto")};
    left: ${({ isSmallScreen }) => (isSmallScreen ? "0" : "auto")};
    z-index: ${({ isSmallScreen }) => (isSmallScreen ? "50" : "1")};
    width: ${({ isSmallScreen }) => (isSmallScreen ? "100vw" : "auto")};
`