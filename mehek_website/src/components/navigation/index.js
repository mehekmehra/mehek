import React from "react";
import { Nav, NavLink, NavMenu } from "./navigationElements";
 
const navigation = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/art" activeStyle>
                        Art
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default navigation;