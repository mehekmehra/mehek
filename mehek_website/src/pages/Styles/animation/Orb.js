import { useRef, useMemo } from "react";
import * as THREE from "three";
import { createPointTexture } from "./PointTexture";


export const Particles = () => {
    const points = useRef();
    const count = 5000;

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
    
        for (let i = 0; i < count; i++) {
            const distance = 1;
            const theta = THREE.MathUtils.randFloatSpread(360); 
            const phi = THREE.MathUtils.randFloatSpread(360); 

            let x = Math.sin(theta) * Math.cos(phi)
            let y = Math.sin(theta) * Math.sin(phi);
            let z = Math.cos(theta);

    
        positions.set([x, y, z], i * 3);
        }
    
        return positions;
    }, [count]);

    const pointTexture = useMemo(() => createPointTexture(), []);

    return (
            <points ref={points}>
                <bufferGeometry>
                    <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial map={pointTexture}
                    alphaTest={0.5}
                    transparent={true}
                    color="#1D1E1E"
                    size={0.01}
                    sizeAttenuation />
                </points>
          );
};
