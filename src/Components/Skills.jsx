import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const Skills = () => {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]

    })
    const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.1, 0.2,0.5,0.7,0.8], [0.3, 1,1,1,0])
    const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.4])
    const scale2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
    const translatey= useTransform(scrollYProgress, [0.2, 0.3], [0, 0])
    const translatey2 = useTransform(scrollYProgress, [0.7, 0.9], [0, -1500])
    const dash = useTransform(scrollYProgress, [0.2, 0.4], [0, 5000])

    const opacity4 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
    const opacity5 = useTransform(scrollYProgress, [0.2, 0.4], [0, 2])
    const translatex= useTransform(scrollYProgress, [0.5, 0.7], ['0vh','66vh'])






    return (
        <div className="bg-[#050a18] relative">

            <div ref={targetRef} className="relative h-[500vh] ">
                <motion.div style={{ opacity, scale }} className=" sticky text-center top-[50%] text-[7vh] border-b-2 border-[rgb(255,255,255,0.1)]">
                    My Skills
                </motion.div>

                <motion.div style={{ opacity: opacity2, scale: scale2,translateY:translatey, }} className=" mt-[100vh] sticky top-[0%]  ">
                    <div className="text-center text-[7vh]">
                        Front End
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-2">
                        <div className="border-b-2 border-t-2 border-l-2 border-[rgb(255,255,255,0.1)] text-center">
                            <img className="h-[200px] w-[200px] mx-auto p-4" src="html.png" alt="" />
                                <p className="text-[5vh]">HTML</p>
                                <p className="text-[3vh]">Level : Expert</p>
                              

                        </div>
                        <div className="border-b-2 border-t-2 border-l-2 border-[rgb(255,255,255,0.1)] text-center">
                            <img className="h-[200px] w-[200px] mx-auto p-4" src="css.png" alt="" />
                        <p className="text-[5vh]">CSS</p>
                                <p className="text-[3vh]">Level : Expert</p>
                        </div>
                        <div className="border-b-2 border-t-2 border-l-2 border-[rgb(255,255,255,0.1)] text-center">
                            <img className="h-[200px] w-[200px] mx-auto p-4" src="javascript.png" alt="" />
                        <p className="text-[5vh]">Javascript</p>
                                <p className="text-[3vh]">Level : Expert</p>
                        </div>
                        <div className=" lg:hidden border-b-2 border-t-2 border-l-2 border-[rgb(255,255,255,0.1)] text-center">
                            <img className=" h-[200px] w-[200px] mx-auto p-4" src="tailwind.png" alt="" />
                        <p className="text-[5vh] ">Tailwind</p>
                                <p className="text-[3vh]">Level : Expert</p>
                        </div>
                    </div>
                </motion.div>


                <motion.div style={{translateY:translatey2}} className="text-center border-2 border-[rgb(255,255,255,0.1)] lg:mt-[150vh] mt-[100vh] sticky lg:top-[60%] top-[80%] text-[4vh]">
                    <p className="p-6">
                    As an expert in HTML, CSS, and JavaScript, I possess a strong command over the fundamental building blocks of web development. With proficiency in HTML, I create well-structured and accessible web pages. My CSS skills enable me to design visually appealing and responsive layouts. Additionally, my expertise in JavaScript empowers me to implement interactivity and dynamic functionality, delivering seamless user experiences.
                    </p>
                </motion.div>

                {/* <motion.div style={{opacity:opacity4}} className="text-center p-4 sticky top-0 border-2 border-[rgb(255,255,255,0.1)} w-[33%] mt-[50vh]">
                    <img className="w-[200px] h-[200px] mx-auto" src="html.png" alt="" />
                    <p className="lg:text-[5vh] text-[3vh]">HTML</p>
                    <p className="lg:text-[3vh] text-[2vh]">Level : Expert</p>
                    <p className="lg:text-[3vh] text-[2vh]">I'm an HTML expert with extensive knowledge in creating structured and interactive web content.</p>
                </motion.div>

                <motion.div style={{opacity:opacity5,translateX:translatex}} className="text-center p-4 sticky top-0 border-2 border-[rgb(255,255,255,0.1)} w-[33%] ml-[66vh] mt-[100vh]">
                    <img className="w-[200px] h-[200px] mx-auto" src="css.png" alt="" />
                    <p className="lg:text-[5vh] text-[3vh]">CSS</p>
                    <p className="lg:text-[3vh] text-[2vh]">Level : Expert</p>
                    <p className="lg:text-[3vh] text-[2vh]">I'm a CSS expert with a keen eye for design and aesthetics. Proficient in CSS3 and its latest features, I specialize in creating stylish and responsive layouts, enhancing user experiences, and bringing life to web pages through visual styling and animations.</p>
                </motion.div>


                <motion.div style={{opacity:opacity4,}} className="text-center p-4 sticky top-0 right-0 border-2 border-[rgb(255,255,255,0.1)} w-[33%] ml-[66vh] mt-[100vh]">
                    <img className="w-[200px] h-[200px] mx-auto" src="javascript.png" alt="" />
                    <p className="lg:text-[5vh] text-[3vh]">Javascript</p>
                    <p className="lg:text-[3vh] text-[2vh]">Level : Expert</p>
                    <p className="lg:text-[3vh] text-[2vh]">I'm a CSS expert with a keen eye for design and aesthetics. Proficient in CSS3 and its latest features, I specialize in creating stylish and responsive layouts, enhancing user experiences, and bringing life to web pages through visual styling and animations.</p>
                </motion.div>
                 */}

                <div className="text-center lg:mt-[80vh] mt-[50vh]">
                <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Keep Scrolling',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'There is More!',
                            1000,
                    
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '7vh', display: 'inline-block',}}
                        repeat={Infinity}
                    />
                </div>



            </div>






        </div>
    );
};

export default Skills;