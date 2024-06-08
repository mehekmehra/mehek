import React from "react";
import { Title, SubTitle, ExternalLink } from "./Styles/TextStyles";
import { PageContainer } from "./Styles/PageContainer";
import { MainInfo, Menu, SecondaryInfo, Animation } from "./Styles/TextContainers";
import { Navigation } from "./NavBar.js";
import OrbAnimation from "./Styles/animation/OrbAnimation.js";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
return (
  <PageContainer>
    <Menu>
      <Navigation/>
    </Menu>
    <MainInfo isSmallScreen={isSmallScreen}>
      <Title> Mehek Mehra </Title>
      <SubTitle  isSmallScreen={isSmallScreen}> 
        Software Engineer | Artist 
      </SubTitle>
      <SubTitle  isSmallScreen={isSmallScreen}> 
        I am a Software Engineer specialized in backend development. 
        I have experience in Machine Learning, Data Analysis and Algorithms. 
        But I also make art and love design, so I dabble in Web Development (like this website).
      </SubTitle>
    </MainInfo>
    <SecondaryInfo>
    <SubTitle  isSmallScreen={isSmallScreen}>
        <ExternalLink href="www.linkedin.com/in/mehek-mehra" target="_blank">LinkedIn</ExternalLink> | <ExternalLink href="https://github.com/mehekmehra" target="_blank">GitHub</ExternalLink>
      </SubTitle>
    </SecondaryInfo>
    <Animation isSmallScreen={isSmallScreen}>
      <OrbAnimation />
    </Animation>
  </PageContainer>

);
}