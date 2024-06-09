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
    padding: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "0px 5px" : "0px")};
    float: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "left" : "auto")};
`
export const StyledList = styled.ul `
    padding: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "0px 10px" : "0px")};
    background-color: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "#E1E0D8" : "none")};
    position: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "fixed" : "auto")};
    top: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ?"0" : "auto")};
    left: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "0" : "auto")};
    z-index: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "50" : "1")};
    width: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "100vw" : "auto")};
`