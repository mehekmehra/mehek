import React from "react";
import { StyledText } from "./home_utils/textStyles";
import { CurvedSubTitle } from "./home_utils/subTitle";
import { ScrollFade } from "../navigation/initialize.js";
import { RoundedRectangle, RectangleContainer, Container } from "./home_utils/backgroundStyles"
import { SinusoidalWave } from "./home_utils/wave";
import { CreateImage } from "./home_utils/coverImage";

import { ScrollDown, Bounce } from "./home_utils/downButton.js";

const Home = () => {
    document.body.style.backgroundColor = "#EEEAD0";
    
    return (
        <Container>
            {/* <ScrollDown></ScrollDown> */}
            <Bounce></Bounce>
            <CreateImage />
            
            
            {/* <CurvedSubTitle text={'filler text blah blah blah \n blah blah blah blah blah blah booo'} /> */}
            
            <SinusoidalWave fillColor='#EEEAD0'/>

            <StyledText>
                I make things.

                I am a software engineer, mathematician and artist who makes things. 
                Websites, machine learning models, data analysis tools, art and clothing. 
                
                I make them. 

            </StyledText>

            <RectangleContainer>
                <RoundedRectangle/>
            </RectangleContainer> 
            
            

        
      
           
        </Container>
    );
};
 
export default Home;