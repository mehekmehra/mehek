import React from "react";
import { Navigation } from "./NavBar";
import { PageContainer } from "./Styles/PageContainer";
import { Menu, MainInfo } from "./Styles/TextContainers";
import { Title, SubTitle, ExternalLink } from "./Styles/TextStyles";
import DisplayDescription from "./Styles/ConditionalDescription";
import { useMediaQuery } from "react-responsive";

export default function Software() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
return (
  <PageContainer>
    <Menu>
      <Navigation/>
    </Menu>
    <MainInfo isSmallScreen={isSmallScreen}>
      <Title> Software </Title>
      <SubTitle  isSmallScreen={isSmallScreen}> 
        This is a collection of a few software projects I have worked on. 
        They range from internship projects to research code to personal projects. 
        They showcase a variety of my skills and the development of my code over the years. 
      </SubTitle>
      <SubTitle  isSmallScreen={isSmallScreen}>
        For more, you can check out my <ExternalLink href="https://github.com/mehekmehra" target="_blank">GitHub</ExternalLink>.
      </SubTitle>
    </MainInfo>  
    <DisplayDescription />
    
  </PageContainer>
);
}