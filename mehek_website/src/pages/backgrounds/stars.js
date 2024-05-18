import React, { useEffect, useRef, useState } from 'react';

export default function Starfield(props) {
    const { speedFactor = 0.05, backgroundColor = 'black', starColor = [255, 255, 255], starCount = 5000 } = props;
    const canvasRef = useRef(null);
    const [animationFrameId, setAnimationFrameId] = useState(null);
    const prevTimeRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        let stars = [];

        const makeStars = (numStars) => {
        for (let i = 0; i < numStars; i++) {
            stars.push({
            x: Math.random() * 1600 - 800,
            y: Math.random() * 900 - 450,
            z: Math.random() * 1000
            });
        }
        };

        const blankCanvas = () => {
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
        };

        const drawStar = (x, y) => {
        context.fillStyle = `rgba(255, 255, 255, 255)`;
        context.fillRect(x, y, 1, 1);
        };

        const moveStars = (distance) => {
            const count = stars.length;
            for (var i = 0; i < count; i++) {
                const s = stars[i];
                s.z -= distance;
                while (s.z <= 1) {
                    s.z += 1000;
                }
            }
        };

        const animate = (timestamp) => {
            const elapsedTime = timestamp - (prevTimeRef.current || timestamp);
            prevTimeRef.current = timestamp;

            moveStars(elapsedTime * speedFactor);
            blankCanvas();

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach((star) => {
                const x = cx + star.x / (star.z * 0.001);
                const y = cy + star.y / (star.z * 0.001);

                if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
                    const brightness = 1 - star.z / 1000;
                    drawStar(x, y);
                }
            });

            const newAnimationFrameId = requestAnimationFrame(animate);
            setAnimationFrameId(newAnimationFrameId);
        };

        makeStars(starCount);

        const initialAnimationFrameId = requestAnimationFrame(animate);
        setAnimationFrameId(initialAnimationFrameId);


        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            blankCanvas();
            makeStars(starCount);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        };
    }, [backgroundColor, starColor, speedFactor, starCount]);

    return (
        <canvas
        ref={canvasRef}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            mixBlendMode: 'screen'
        }}
        />
    );
    };
