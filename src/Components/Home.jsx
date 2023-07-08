import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Skills1 from "./Skills1";


const Home = () => {

    const [mousePosition,setMousePositon]=useState({
        x:0,
        y:0
    })

    useEffect(()=>{

        const mouseMove=(e)=>{
            console.log(e)
            setMousePositon({
                x:e.clientX,
                y:e.clientY
            })
        }

        window.addEventListener('mousemove',mouseMove)

        return ()=>{
            window.removeEventListener('mousemove',mouseMove)
        }


    },[])


    const [mouseVariants,setMouseVariants]=useState('default')

    const textEnter=()=>{
        setMouseVariants('text')
    }
    
    const textLeave=()=>{
        setMouseVariants('default')
    }


    const variants={
        default:{
            x:mousePosition.x-15,
            y:mousePosition.y-15
        },
        text:{
            height:150,
            width:150,
            x:mousePosition.x-75,
            y:mousePosition.y-75,
            backgroundColor:'white',
            mixBlendMode:'difference'
        }

    }

    return (
        <div className=" bg-[#050a18] h-[100%] w-[100%] ">
            <motion.div className="rounded-[50%] bg-white h-[30px] w-[30px] fixed z-[100] pointer-events-none" variants={variants} animate={mouseVariants}>

            </motion.div>
            <Navbar></Navbar>
            <Banner
            textEnter={textEnter}
            textLeave={textLeave}
            ></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Skills1></Skills1>
            <Contact></Contact>
        </div>
    );
};

export default Home;