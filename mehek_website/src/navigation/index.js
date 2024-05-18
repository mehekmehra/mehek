import React from "react";
import { Nav, NavLink, NavMenu, NavLogo } from "./navigationElements";

const Navigation = ({ isScrolled, showLogo}) => {
    return (
        <Nav isScrolled={isScrolled}>
            
            <NavLogo to="/" style={{ opacity: isScrolled || showLogo? 1 : 0 }}>
                Mehek Mehra
            </NavLogo>
            <NavMenu>
                <NavLink to="/software" activeClassName="active">
                    CS
                </NavLink>
                <NavLink to="/art" activeClassName="active">
                    Art
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
    );
};
 
export default Navigation;