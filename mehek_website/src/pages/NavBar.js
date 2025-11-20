import React from "react";
import { StyledList, StyledElement, ExternalStyledLink } from "./Styles/NavBarStyles";
import { HighlightLink } from "./Styles/ConditionalButton";
import Resume from "./Resources/resume.pdf";
import { useMediaQuery } from "react-responsive";

export const Navigation = () => {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
    const isShortScreen = useMediaQuery({ query: "(max-height: 450px)" });
    
    return (
        <nav>
            <StyledList isSmallScreen={isSmallScreen} isShortScreen={isShortScreen}>
                <StyledElement  isSmallScreen={isSmallScreen}  isShortScreen={isShortScreen}>
                    <HighlightLink linkText={"Home"} linkAddress={"/mehek/"} />
                </StyledElement>
                <StyledElement  isSmallScreen={isSmallScreen}  isShortScreen={isShortScreen}>
                    <HighlightLink linkText={"Software"} linkAddress={"/software"}/>
                </StyledElement>
                <StyledElement  isSmallScreen={isSmallScreen}  isShortScreen={isShortScreen}>
                    <HighlightLink linkText={"Art"} linkAddress={"/art"}/>
                </StyledElement>
                <StyledElement  isSmallScreen={isSmallScreen}  isShortScreen={isShortScreen}>
                    <ExternalStyledLink href={Resume} target={"_blank"}> Resume </ExternalStyledLink>
                </StyledElement>
                {/* <StyledElement>
                    <HighlightLink linkText={"Contact"} linkAddress={"/contact"}/>
                </StyledElement> */}
            </StyledList>
        </nav>
    );
};
 