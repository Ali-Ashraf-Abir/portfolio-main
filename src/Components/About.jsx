import { useScroll, useTransform,motion } from 'framer-motion';
import React, { useRef } from 'react';

const About = () => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]

    })
    const scale = useTransform(scrollYProgress, [0.1,0.2], [1,2])
    const fixed = useTransform(scrollYProgress, [0.2], ['fixed'])
    const opacity2 = useTransform(scrollYProgress, [0.2,0.3,0.5], [0, 1,0])
    const translatey = useTransform(scrollYProgress, [0.55,0.65,0.85,0.95], ['0%', "-30%","-40%","-200%"])
    const translatex = useTransform(scrollYProgress, [0.55,0.65,0.85,0.95], ['0%', "-30%","-40%","200%"])
    const opacity3 = useTransform(scrollYProgress, [0.55,0.65,0.85], [0, 1,0])
    const opacity4 = useTransform(scrollYProgress, [0.75,0.85], [0, 1])




    return (
        <div>
            <div ref={targetRef} className="bg-[#000506] h-[700vh] font-josef">
                <div className="text-center text-white text-[5vh] p-6 border-2 lg:w-[50%] mx-auto w-[100%] font-sans border-[rgb(255,255,255,0.1)]">
                    <p>You only live once,but if you do it right,once is enough</p>
                </div>
                <motion.img style={{scale:scale,position:fixed,translateY:translatey,translateX:translatex}} className='top-0 mt-[10vh] w-[200vh]' src="astronaut-8061095.svg" alt="" />
                <motion.p style={{opacity:opacity2}} className='lg:w-[30%] lg:bg-[none] bg-[#000506] w-[50%] border-2 border-[rgb(255,255,255,0.1)] fixed top-[30%] lg:text-[3vh] text-[2vh] text-white p-4'>My name is Ali Ashraf Abir , I am learning web dev for about 6 months now and I am now a MERN devoloper </motion.p>
                <motion.p style={{opacity:opacity3}} className='lg:w-[30%] lg:bg-[none] bg-[#000506] w-[50%] border-2 border-[rgb(255,255,255,0.1)] fixed top-[40%] lg:left-[60%] left-[40%] lg:text-[3vh] text-[2vh] text-white p-4'>Doing web development has always been fun for me,although I always lacked in designing and
                other factors but development is something i always enjoyed,Seeing what you coded coming to life gives me another level of satisfaction in my life </motion.p>

                <motion.p style={{opacity:opacity4}} className='w-[100%] lg:bg-[none] bg-[#000506] border-2 border-[rgb(255,255,255,0.1)] fixed lg:top-[70%] top-[70%]  lg:text-[3vh] text-[2vh] text-white p-4'>And I want to thank you for taking your time and visitng my website 
                this means a lot to me,do provite any kind of feedback you have and make sure to let me know if you want to work together,am always willing to learning new stuffs and gather experience throughout working in various projects
                and being an asset to you<br></br>
                <span className='text-red-500'><a href="/"><p>Click Here To Go TO Home</p></a></span>
                 </motion.p>
            </div>

     
        </div>
    );
};

export default About;