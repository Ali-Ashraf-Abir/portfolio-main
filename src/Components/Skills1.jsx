
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const Skills1 = () => {
    const targetRef=useRef(null)
    const {scrollYProgress}=useScroll({
        target:targetRef,
        offset:["start end","end start"]

    })

    const scale2 = useTransform(scrollYProgress, [0.1, 0.15,0.8,1], [0, 2,2,0])
    const opacity= useTransform(scrollYProgress, [0.8,0.9], [1,0])
    const position = useTransform(scrollYProgress, [0.15], ['fixed'])
    const translatex = useTransform(scrollYProgress, [0.2, 0.3,0.4,0.5,0.6,0.7,0.8,0.9,1], [0, 800,200,-100,-300,200,400,600,800])
    const opacity2= useTransform(scrollYProgress, [0.2,0.25,0.3], [0, 1,0])
    const opacity3= useTransform(scrollYProgress, [0.3, 0.35,0.4], [0, 1,0])
    const opacity4= useTransform(scrollYProgress, [0.4, 0.45,0.5], [0, 1,0])
    const opacity5= useTransform(scrollYProgress, [0.5,0.55,0.6], [0, 1,0])
    const z= useTransform(scrollYProgress, [0.1,0.3], [-100,1000])

    return (
        <div>
            <div className="bg-[#050a18] text-center">
                <p className="lg:text-[8vh] text-white text-[5vh] p-6 font-josef">MERN STACK</p>
            </div>
            <div  ref={targetRef}  className="bg-[#050a18] h-[1300vh] mt-[20vh] overflow-hidden font-josef">
                <motion.img style={{scale:scale2,position:position,translateX:translatex,opacity:opacity}} className="sticky h-[60vh] w-[200vh] top-[10%]" src="MERN.svg" alt="" />

                <motion.p style={{opacity:opacity2,zIndex:z}} className="fixed z-[-1000] bg-[#050a18] rounded-lg top-[35%] left-[10%] lg:text-[4vh] text-[2vh] lg:w-[20%] w-[50%] lg:ml-[10%] p-6 opacity-0"><span className="text-green-700">MongoDB</span> My Experience in mongodb is not that much
                but I can pretty much make almost any simple database and use it</motion.p>
                <motion.p style={{opacity:opacity3,zIndex:z}} className="fixed z-[-1000] bg-[#050a18] rounded-lg top-[35%] left-[60%] lg:text-[4vh] text-[2vh] lg:w-[20%] w-[50%] lg:ml-[10%] p-6 opacity-0"><span className="text-red-500">Express JS</span> I can work in backend servers with express js and cors with node in working with Node</motion.p>

                <motion.p style={{opacity:opacity4,zIndex:z}} className="fixed z-[-1000] bg-[#050a18] rounded-lg top-[35%] left-[60%] lg:text-[4vh]  text-[2vh] lg:w-[20%] w-[50%] lg:ml-[10%] p-6 opacity-0"><span className="text-blue-500">React JS</span> Am pretty much expert in react and all of its components and other stuffs</motion.p>

                <motion.p style={{opacity:opacity5,zIndex:z}} className="fixed z-[-1000] bg-[#050a18] rounded-lg top-[35%] left-[60%] lg:text-[4vh] text-[2vh] lg:w-[20%] w-[50%] lg:ml-[10%] p-6 opacity-0"><span className="text-green-500">Node JS</span> I am comfortable in working with Node Js for back end server side works</motion.p>

               

              


            </div>
            
        </div>
    );
};

export default Skills1;