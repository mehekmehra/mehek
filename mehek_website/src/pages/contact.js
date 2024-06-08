import React from "react";
import { PageContainer } from "./Styles/PageContainer";
import { Navigation } from "./NavBar";
import { Menu, MainInfo } from "./Styles/TextContainers";
import { Title, SubTitle, ExternalLink } from "./Styles/TextStyles";
import OrbAnimation from "./Styles/animation/OrbAnimation";

export default function Contact() {
return (
  <div style={{ width: '100vw', height: '100vh' }}>
  <OrbAnimation/>
  </div>
  // <PageContainer>
  //   <Menu>
  //     <Navigation />
  //   </Menu>
  //   <MainInfo>
  //     <Title>
  //       Let's Connect
  //     </Title>
  //     <SubTitle>
  //       <ExternalLink href="www.linkedin.com/in/mehek-mehra" target="_blank">LinkedIn</ExternalLink>
  //     </SubTitle>
  //     <SubTitle>
  //       <ExternalLink href="https://github.com/mehekmehra" target="_blank">GitHub</ExternalLink>
  //     </SubTitle>
  //   </MainInfo>

  // </PageContainer>
);
}