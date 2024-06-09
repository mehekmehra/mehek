import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'


const Frame = styled.div `
    width: 96vw;
    height: 93vh;
    border: 1.5px solid #181D20;
    padding: 2vh 2vw;
    box-sizing: border-box;
    position: relative;
`

const FrameContainer = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
`

export const PageContainer = ({ children }) => {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
    const isShortScreen = useMediaQuery({ query: "(max-height: 450px)" });
  
    return (
      <FrameContainer>
        {isSmallScreen || isShortScreen ? children : <Frame>{children}</Frame>}
      </FrameContainer>
    );
};