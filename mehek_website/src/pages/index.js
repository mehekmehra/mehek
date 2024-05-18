import React from "react";
import { StyledText } from "./home_utils/textStyles";
import { CurvedSubTitle } from "./home_utils/subTitle";
import { ScrollFade } from "../navigation/initialize.js";
import { RoundedRectangle, RectangleContainer, Container } from "./home_utils/backgroundStyles"
import { SinusoidalWave } from "./home_utils/wave";
import { CreateImage } from "./home_utils/coverImage";

const Home = () => {
    document.body.style.backgroundColor = "#EEEAD0";
    return (
        <Container>
            {/* <ScrollFade text={'Mehek Mehra'} /> */}
            <CreateImage />
            
            
            {/* <CurvedSubTitle text={'filler text blah blah blah blah blah blah blah blah blah booo'} /> */}
            
            <SinusoidalWave />

            <RectangleContainer>
                <RoundedRectangle/>
            </RectangleContainer> 
            
        
      
           
        </Container>
    );
};
 
export default Home;