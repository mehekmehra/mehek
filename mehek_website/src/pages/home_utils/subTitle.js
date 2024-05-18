import styled, { css } from "styled-components";
import OstrichBold from "../resources/OstrichSans-Black.otf"
import ReactCurvedText from "react-curved-text";
import Fjalla from "../resources/FjallaOne-Regular.ttf"

const ostrichBold = css`
    @font-face {
        font-family: 'OstrichBold';
        src: url(${OstrichBold}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

const fjalla = css`
    @font-face {
        font-family: 'Fjalla';
        src: url(${Fjalla}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

const SubTitle = styled.div`
    ${fjalla}
    font-size: 42pt;
    fill: #843C12;
    position: relative;
    font-family: 'Fjalla';
`;

const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 8vh;
    z-index: 30; 
    overflow: hidden;
`;

export const CurvedSubTitle = ({ text }) => {
    return (
        <SubTitleContainer>
            <SubTitle>
                <ReactCurvedText
                    width={1000}
                    height={1000}
                    cx={540}
                    cy={550}
                    rx={400}
                    ry={470}
                    startOffset={0}
                    reversed={true}
                    text={text}
                />
            </SubTitle> 
        </SubTitleContainer>
    )
}
