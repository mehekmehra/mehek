import {useLocation} from 'react-router-dom'
import { StyledLink } from './NavBarStyles'

export const HighlightLink = ({ linkText, linkAddress }) => {
    const location = useLocation();
    let navName = "";
    if (location.pathname === linkAddress) {
        navName = "★";
    } else {
        navName = linkText;
    };
        
    return (
      <StyledLink to={linkAddress}>
        {navName}
      </StyledLink>
    )
}