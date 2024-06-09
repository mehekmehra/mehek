import { useState } from "react";
import styled from "styled-components";
import { ScrollableContent } from "./TextContainers";
import { BigContent, Skills, SubTitle, ExternalLink } from "./TextStyles";
import { useMediaQuery } from "react-responsive";
import projects from "../Resources/projects.json";

const Description = styled.div`
    left: ${({ isBigScreen }) => (isBigScreen ? "35vw" : "auto")};
    top: ${({ isBigScreen }) => (isBigScreen ? "25vh" : "auto")};
    position: ${({ isBigScreen }) => (isBigScreen ? "absolute" : "relative")};
`

export default function DisplayDescription({title, children}) {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div>
        <ScrollableContent isSmallScreen={isSmallScreen}>
            {projects.map((item, index) => (
            <div key={index} onClick={() => setSelectedTitle(item.title)}>
                <BigContent isSmallScreen={isSmallScreen}>
                    {item.title}
                </BigContent>
                <Skills isSmallScreen={isSmallScreen}>
                    {item.subtitle}
                </Skills>
                {selectedTitle === item.title && (
                    <Description >
                        <SubTitle isSmallScreen={isSmallScreen} isProject={true}>
                            {projects.find(item => item.title === selectedTitle).description}
                        </SubTitle>
                        {projects.find(item => item.title === selectedTitle).repoExists &&
                            <SubTitle isSmallScreen={isSmallScreen} isProject={true}>
                                The code repository is available <ExternalLink 
                                    href={projects.find(item => item.title === selectedTitle).repoUrl}
                                    target="_blank">
                                    here
                                </ExternalLink>.
                            </SubTitle>
                        }
                    </Description>
                )}
            </div>
            ))}
        </ScrollableContent>
        </div>
    );
    }

  