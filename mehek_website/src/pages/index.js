import React from "react";
import { StyledText } from "./home_utils/textStyles";
import { CurvedSubTitle } from "./home_utils/subTitle";
import { ScrollFade } from "../navigation/initialize.js";
import { RoundedRectangle, RectangleContainer, Container } from "./home_utils/backgroundStyles"
import { SinusoidalWave } from "./home_utils/wave";
import { CreateImage } from "./home_utils/coverImage";
import { useRef } from "react";
import { DownButton, ButtonContainer } from "./home_utils/downButton.js";

const Home = () => {
    document.body.style.backgroundColor = "#EEEAD0";
    const pageRef = useRef(null);
    const offsetAdjustment = 100;
    return (
        <Container>
            <CreateImage />
            
            
            {/* <CurvedSubTitle text={'filler text blah blah blah \n blah blah blah blah blah blah booo'} /> */}
            
            <SinusoidalWave fillColor='#EEEAD0'/>

            <ButtonContainer>
                <DownButton onClick={() =>
                    window.scrollTo({
                        top: pageRef.current.offsetTop - offsetAdjustment,
                        behavior: "smooth"
                    })}>
                    Learn More ▼
                </DownButton>
            </ButtonContainer>

            <RectangleContainer>
                <RoundedRectangle/>
            </RectangleContainer> 
            <StyledText ref={pageRef}> filler text </StyledText>
            

        
      
           
        </Container>
    );
};
 
export default Home;