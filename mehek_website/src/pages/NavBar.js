import React from "react";
import { StyledList, StyledElement, ExternalStyledLink } from "./Styles/NavBarStyles";
import { HighlightLink } from "./Styles/ConditionalButton";
import Resume from "./Resources/MayResume.pdf";
import { useMediaQuery } from "react-responsive";

export const Navigation = () => {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <nav>
            <StyledList isSmallScreen={isSmallScreen}>
                <StyledElement  isSmallScreen={isSmallScreen}>
                    <HighlightLink linkText={"Home"} linkAddress={"/mehek"} />
                </StyledElement>
                <StyledElement  isSmallScreen={isSmallScreen}>
                    <HighlightLink linkText={"Software"} linkAddress={"/software"}/>
                </StyledElement>
                <StyledElement  isSmallScreen={isSmallScreen}>
                    <HighlightLink linkText={"Art"} linkAddress={"/art"}/>
                </StyledElement>
                <StyledElement  isSmallScreen={isSmallScreen}>
                    <ExternalStyledLink href={Resume} target={"_blank"}> Resume </ExternalStyledLink>
                </StyledElement>
                {/* <StyledElement>
                    <HighlightLink linkText={"Contact"} linkAddress={"/contact"}/>
                </StyledElement> */}
            </StyledList>
        </nav>
    );
};
 