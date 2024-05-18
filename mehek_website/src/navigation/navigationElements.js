import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Fjalla from "../pages/resources/FjallaOne-Regular.ttf"
import OstrichBold from "../pages/resources/OstrichSans-Black.otf"
import Mandala from "../pages/resources/mandala.otf"

 
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

const mandala = css`
    @font-face {
        font-family: 'Mandala';
        src: url(${Mandala}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

export const Nav = styled.nav`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    z-index: 50;
    position: fixed;
    top: 0;
    background: ${({ isScrolled }) => (isScrolled ? '#EEEAD0' : 'transparent')};
    transition: background 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
 
export const NavLink = styled(Link)`
    ${ostrichBold}
    font-family: 'OstrichBold';
    font-size: 25pt;
    color: #16191D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: #B9571F;
    }
`;

export const NavLogo = styled(Link)`
    ${mandala}
    color: #16191D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Mandala';
    position: relative;
    font-size: 25pt;
    transition: opacity 0.3s ease-in-out;
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    //margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
    margin-left: auto
`;
