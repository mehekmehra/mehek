import styled from "styled-components";

export const MainInfo = styled.div `
    position: absolute;
    left: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "3vw" : "2vw")};
    top: ${({ isSmallScreen, isShortScreen }) => (isSmallScreen || isShortScreen ? "9vh" : "2vh")};
`
export const Menu = styled.div `
    position: absolute;
    bottom: 2vh;
    left: 2vw;
`
export const SecondaryInfo = styled.div `
    position: absolute;
    bottom: 2vh;
    right: 2vw;
    z-index: 10;
`

export const ScrollableContent = styled.div `
    position: absolute;
    bottom: 2vh;
    overflow-y: scroll;
    height: 61vh;
    padding: 0px;
    width: ${({ isSmallScreen }) => (isSmallScreen ? "100vw" : "450px")};
    right: ${({ isSmallScreen }) => (isSmallScreen ? "auto" : "2vw")};
    left: ${({ isSmallScreen }) => (isSmallScreen ? "3vw" : "auto")};
`

export const Animation = styled.div `
    position: absolute;
    height: ${({ isSmallScreen }) => (isSmallScreen ? "55vh" : "84vh")};
    width: ${({ isSmallScreen }) => (isSmallScreen ? "100vw" : "65vw")};
    right: ${({ isSmallScreen }) => (isSmallScreen ? "auto" : "2vw")};
    left: ${({ isSmallScreen }) => (isSmallScreen ? "3vw" : "auto")};
    bottom: ${({ isSmallScreen }) => (isSmallScreen ? "6vh" : "3vh")};
`