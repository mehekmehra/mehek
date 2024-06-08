import styled from "styled-components";

export const MainInfo = styled.div `
    position: absolute;
    left: ${({ isSmallScreen }) => (isSmallScreen ? "3vw" : "2vw")};
    top: ${({ isSmallScreen }) => (isSmallScreen ? "10vh" : "2vh")};
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
`

export const ScrollableContent = styled.div `
    position: absolute;
    bottom: 2vh;
    padding: 0px;
    overflow-y: scroll;
    height: 65vh;
    width: ${({ isSmallScreen }) => (isSmallScreen ? "100vw" : "65vw")};
    right: ${({ isSmallScreen }) => (isSmallScreen ? "auto" : "2vw")};
    left: ${({ isSmallScreen }) => (isSmallScreen ? "3vw" : "auto")};
`

export const Animation = styled.div `
    position: absolute;
    height: ${({ isSmallScreen }) => (isSmallScreen ? "60vh" : "84vh")};
    width: ${({ isSmallScreen }) => (isSmallScreen ? "100vw" : "65vw")};
    right: ${({ isSmallScreen }) => (isSmallScreen ? "auto" : "2vw")};
    left: ${({ isSmallScreen }) => (isSmallScreen ? "3vw" : "auto")};
    bottom: ${({ isSmallScreen }) => (isSmallScreen ? "6vh" : "3vh")};
`