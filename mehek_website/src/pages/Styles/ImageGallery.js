import styled from "styled-components";
import Torso from "../Resources/torso.jpeg";
import Tree2 from "../Resources/tree2.jpeg";
import Fish from "../Resources/fish.jpg";
import Tree from "../Resources/tree1.jpg";
import Bottle from "../Resources/bottle.jpg";
import Collage from "../Resources/collage.jpg";
import { useMediaQuery } from "react-responsive";


const ImageGallery = styled.div `
    position: absolute;
    padding: 0px;
    height: 75vh;
    overflow-x: scroll;
    white-space: nowrap;
    width: ${({ isSmallScreen }) => (isSmallScreen ? "100vw" : "65vw")};
    top: ${({ isSmallScreen }) => (isSmallScreen ? "32vh" : "auto")};
    bottom: ${({ isSmallScreen }) => (isSmallScreen ? "auto" : "8vh")};
    left: ${({ isSmallScreen }) => (isSmallScreen ? "5vw" : "30vw")};
`

const GalleryImage = styled.img`
    vertical-align: top;
    margin: ${({ isSmallScreen }) => (isSmallScreen ? "1vh 0" : "0 1vh")};
    display: ${({ isSmallScreen }) => (isSmallScreen ? "flex" : "inline-block")};
    height: ${({ isSmallScreen }) => (isSmallScreen ? "auto" : "75vh")};
    width: ${({ isSmallScreen }) => (isSmallScreen ? "90vw" : "auto")};
    flex-wrap: ${({ isSmallScreen }) => (isSmallScreen ? "wrap" : "auto")};
    flex-direction: ${({ isSmallScreen }) => (isSmallScreen ? "column" : "auto")};
`;

export const DisplayImages = () => {
    const images = [
        { title: Tree },
        { title: Torso },
        { title: Fish },
        { title: Bottle },
        { title: Collage },
        { title: Tree2 },
    ];

    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <ImageGallery isSmallScreen={isSmallScreen}>
            {images.map((item, index) => (
                <GalleryImage key={index} src={item.title} isSmallScreen={isSmallScreen}/>
            ))}
        </ImageGallery>
    )

}