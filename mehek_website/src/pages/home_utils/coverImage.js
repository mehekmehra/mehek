import React from 'react';
import styled from 'styled-components';
import me from "../resources/me.jpg";
import me2 from "../resources/me2.jpg";

const StyledImage = styled.img`
    position: relative;
    // width: 1092.8x;
    // height: 543.2px;
    width: 1366px;
    height: 679px;
    z-index: 15;
    object-fit: cover;
    padding: 20px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 20px;
    left: 0;
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    width: 94.5vw;
    position: absolute;
    overflow: hidden;
    border-radius: 27vw 27vw 1vw 1vw;
   
`;
export const CreateImage = () => {
    return (
        <ImageContainer>
            <SubContainer>
                <StyledImage src={me} alt={'me'} />
            </SubContainer>
        </ImageContainer>
    )
};