import React from "react";
import { PageContainer } from "./Styles/PageContainer";
import { Menu, MainInfo } from "./Styles/TextContainers";
import { Title, SubTitle } from "./Styles/TextStyles";
import { Navigation } from "./NavBar";
import { DisplayImages } from "./Styles/ImageGallery";
import { useMediaQuery } from "react-responsive";

export default function Art() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isShortScreen = useMediaQuery({ query: "(max-height: 450px)" });

return (
  <PageContainer>
   <Menu>
      <Navigation/>
    </Menu>
    <MainInfo isSmallScreen={isSmallScreen} isShortScreen={isShortScreen}>
      <Title> Art </Title>
      <SubTitle  isSmallScreen={isSmallScreen}> 
        Outside of developing software, I spend most of my time making art of various.
        I love exploring media, concepts and techniques, so I am constantly learning. 
        Most of my personal growth in creativity, problem-solving, confidence and determination has stemmed from my pursuit of the arts.
      </SubTitle>
    </MainInfo>  
    <DisplayImages isSmallScreen={isSmallScreen}/>
  </PageContainer>
);
}