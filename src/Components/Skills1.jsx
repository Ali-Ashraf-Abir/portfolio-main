
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const Skills1 = () => {
    const targetRef=useRef(null)
    const {scrollYProgress}=useScroll({
        target:targetRef,
        offset:["start end","end start"]

    })
    return (
        <div>
            
        </div>
    );
};

export default Skills1;