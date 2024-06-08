import { useState } from "react";
import styled from "styled-components";
import { ScrollableContent } from "./TextContainers";
import { BigContent, Skills, SubTitle, DescriptionTitle } from "./TextStyles";
import { useMediaQuery } from "react-responsive";

const Description = styled.div`
    left: ${({ isBigScreen }) => (isBigScreen ? "35vw" : "auto")};
    top: ${({ isBigScreen }) => (isBigScreen ? "25vh" : "auto")};
    position: ${({ isBigScreen }) => (isBigScreen ? "absolute" : "relative")};
`

export default function DisplayDescription({title, children}) {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

    const titles = [
        { title: 'Analyzing Query Logs', description: 'Description 1', subtitle: '2023 | Python, Cloud Development, SQL, AWS, Docker, Git' },
        { title: 'Synthesizing Training Data', description: 'Description 2', subtitle: '2023-24 | Python, Machine Learning, PyTorch, AWS, Qt, Git' },
        { title: 'Finding Automorphisms', description: 'Description 3', subtitle: '2022 | Python, Abstract Algebra Research' },
        { title: 'Variational Autoencoders', description: 'Description 2', subtitle: '2023 | Python, Machine Learning, PyTorch' },
        { title: 'Meal Scheduling App', description: 'Description 3', subtitle: '2024 | Python, SQL, Google Cloud API, Flask, JS, HTML, CSS' },
        { title: 'Analyzing Gaze Locations', description: 'Description 2', subtitle: '2023 | Python' },
        { title: 'Analyzing My Spotify', description: 'Description 3', subtitle: '2023 | Python, Spotify API' },
        { title: 'This Website', description: 'Description 2', subtitle: '2024 | React' },
    ];

    const MakeDescription = ({isBigScreen}) => {
        return (
            <Description isBigScreen={isBigScreen}>
                {isBigScreen && (
                    <DescriptionTitle>
                        {titles.find(item => item.title === selectedTitle).title}
                    </DescriptionTitle>
                )}
                <SubTitle>
                    {titles.find(item => item.title === selectedTitle).description}
                </SubTitle>
            </Description>
        )
    }

    return (
        <div>
        <ScrollableContent isSmallScreen={isSmallScreen}>
            {titles.map((item, index) => (
            <div key={index} onClick={() => setSelectedTitle(item.title)}>
                <BigContent isSmallScreen={isSmallScreen}>
                    {item.title}
                </BigContent>
                <Skills isSmallScreen={isSmallScreen}>
                    {item.subtitle}
                </Skills>
                {isSmallScreen && selectedTitle === item.title && (
                    <MakeDescription isBigScreen={!isSmallScreen}/>
                )}
            </div>
            ))}
        </ScrollableContent>
        
        {selectedTitle && !isSmallScreen && (
            <MakeDescription isBigScreen={!isSmallScreen}/>
        )}
        </div>
    );
    }

  