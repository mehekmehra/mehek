import React from "react";
import { motion } from "framer-motion";
import cloud from "../resources/cloud.png";
import Image from "./backgroundStyles";

const Clouds = () => {
    const clouds = [
        { y: '-22vh', delay: 0 },
        { y: '0vh', delay: 5 },
        { y: '-10vh', delay: 10 },
        { y: '-22vh', delay: 15 },
        { y: '0vh', delay: 20 },
        { y: '-10vh', delay: 25 },
    ];
    return (
        <>
            {clouds.map((cloudData, index) => (
                <motion.div
                    key={index}
                    initial={{x: '-80%'}}
                    animate={{x: '100vw'}} 
                    transition={{
                        duration: 30, 
                        repeat: Infinity, 
                        repeatType: "loop",
                        delay: cloudData.delay
                    }}
                    >
                    <Image src={cloud} alt={"Cloud"} style={{ top: cloudData.y }}/>
                </motion.div>
            ))}
        </>
        // <motion.div initial={{x: '-80%'}} animate={{x: '100vw'}} transition={{duration: 15, repeat: Infinity, repeatType: "loop"}}>
        //     <Image src={cloud} alt={"Cloud"} />
        // </motion.div>
    )
}

export default Clouds