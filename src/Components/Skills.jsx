import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const Skills = () => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]

    })
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.1, 0.2], [0.3, 1])
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.4])
    const scale2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
    const translatey= useTransform(scrollYProgress, [0.2, 0.3], [0, -300])


    return (
        <div className="bg-[#050a18] relative">

            <div ref={targetRef} className="relative h-[1000vh] ">
                <motion.div style={{ opacity, scale }} className=" sticky text-center top-[50%] text-[7vh] ">
                    My Skills
                </motion.div>

                <motion.div style={{ opacity: opacity2, scale: scale2,translateY:translatey }} className=" mt-[100vh] sticky top-[50%]  ">
                    <div className="text-center text-[7vh]">
                        Front End
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="border-b-2 border-t-2 border-l-2 border-[rgb(255,255,255,0.1)]">
asdasd
                        </div>
                        <div className="border-b-2 border-t-2 border-l-2 border-[rgb(255,255,255,0.1)]">
asdasd
                        </div>
                        <div className="border-b-2 border-t-2 border-l-2 border-[rgb(255,255,255,0.1)]">
asdasd
                        </div>
                    </div>
                </motion.div>



            </div>






        </div>
    );
};

export default Skills;