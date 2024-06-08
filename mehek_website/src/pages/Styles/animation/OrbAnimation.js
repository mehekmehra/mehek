import { Canvas } from "@react-three/fiber";
import { Particles } from "./Orb";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

const BigCanvas = styled(Canvas)`
    width: 100vw;
    height: 100vh;
`;
export default function OrbAnimation () {
    return (
        <BigCanvas camera={{position: [0.75, 0.75, 0.95], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <Particles />
            <OrbitControls autoRotate autoRotateSpeed={0.5}/>
        </BigCanvas>
    )
}