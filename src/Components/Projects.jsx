import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Projects = () => {

    const [active,setActive]=useState(1)

    const handleActiveRight=()=>{

        setActive(active+1)

        if (active>2){
            setActive(1)
        }


        console.log(active)

    }


    const handleActiveLeft=()=>{

        setActive(active-1)

        if (active<2){
            setActive(3)
        }


        console.log(active)

    }




    return (
        <div data-aos="fade-right"  data-aos-duration="1500" id='1' className="font-josef overflow-hidden">
            
            <div  className=" text-center text-[6vh] p-4 border-b-2 border-l-2 border-r-2 border-[rgb(255,255,255,0.1)]">My Projects</div>
                <div className="text-center"><progress className="progress progress-primary w-56" value={active==1?'33':active==2?'66':active==3?'100':'0'} max="100"></progress></div>
            <div  className={`bg-[#050a18] h-[100%] w-[100%] grid lg:grid-cols-[2fr,1fr] lg:grid-rows-[2fr,1fr] grid-cols-1 grid-rows-[0.7fr,1fr,0.5fr,0.5fr] ${active==1?'block':'hidden'}`}>
                <a  href="https://melodic-adventures.web.app/" target="_blank"><div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] bg-[url('/Capture.PNG')] lg:bg-cover bg-contain bg-no-repeat h-[100%] w-[100%] cursor-pointer ">
                  
                </div></a>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] ">
                    <p className="text-[9vh] p-6 text-white">Features:</p>
                    <ul className="p-6 list-disc text-[3vh]">
                        <li>Full Stack website</li>
                        <li>Different dashboards for users,admins and instructors</li>
                        <li>different functionalities for individual users</li>
                        <li>Fully responsive</li>
                        <li>Dark Mode,Light Mode</li>
                        <li>Payment Methods</li>
                        <li>login functionality</li>
                    </ul>
                </div>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)]">
                    <p className="text-white lg:text-[5vh] text-[3vh] text-white p-6">MELODIC_ADVENTURES</p>
                  <div className="pl-6">
                  <a className="text-[3vh] text-blue-600" href="https://melodic-adventures.web.app/">Live Link|</a>
                    <a className="text-[3vh] text-blue-600 ml-6" href="https://github.com/Ali-Ashraf-Abir/melodic-adventures">Client Side Code|</a>
                    <a className="text-[3vh] text-blue-600 ml-6" href="https://github.com/Ali-Ashraf-Abir/melodic-adventures-server">Server Side Code</a>
                  </div>
                  <div className="pl-6 pt-4 pb-4 text-[3vh]">
                        <p>Tools Used:React , MongoDB , Firebase , Node , Express , Tailwind , Daisyui</p>
                  </div>
                </div>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] flex justify-around items-center text-[5vh]">
                    <div className="basis-1/2 text-center">
                    <a href={`#1`}>   <button onClick={handleActiveLeft}>
                            <FaArrowLeft></FaArrowLeft>
                        </button></a>
                    </div>
                    <div className=" grow text-center h-[100%] flex justify-center items-center border-l-2 border-[rgb(255,255,255,0.1)]">
                     <a href={`#1`}>
                     <button onClick={handleActiveRight}>
                            <FaArrowRight></FaArrowRight>
                        </button>
                     </a>
                    </div>
                </div>


            </div>

            {/* 2nd project */}
            <div className={`bg-[#050a18] h-[100%] w-[100%] grid lg:grid-cols-[2fr,1fr] lg:grid-rows-[2fr,1fr] grid-cols-1 grid-rows-[0.7fr,1fr,0.5fr,0.5fr] ${active==2?'block translate-x-0':'hidden -translate-x-11'}`}>
                <a  href="https://gaming-galaxy-e5eb6.web.app/" target="_blank"><div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] bg-[url('/Capture2.PNG')] lg:bg-cover bg-contain bg-no-repeat h-[100%] w-[100%] cursor-pointer ">
                  
                </div></a>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] ">
                    <p className="text-[9vh] p-6 text-white">Features:</p>
                    <ul className="p-6 list-disc text-[3vh]">
                        <li>Full Stack website</li>
                        <li>Add edit and remove toys</li>
                        <li>different functionalities for individual users</li>
                        <li>Fully responsive</li>
                        <li>Products categorization</li>
                        <li>Login logout functionality</li>
                    </ul>
                </div>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)]">
                    <p className="text-white lg:text-[5vh] text-[3vh] text-white p-6">Game_Galaxy</p>
                  <div className="pl-6">
                  <a className="text-[3vh] text-blue-600" href="https://gaming-galaxy-e5eb6.web.app/">Live Link|</a>
                    <a className="text-[3vh] text-blue-600 ml-6" href="https://github.com/Ali-Ashraf-Abir/Game-Galaxy-Client">Client Side Code|</a>
                    <a className="text-[3vh] text-blue-600 ml-6" href="https://github.com/Ali-Ashraf-Abir/Game-Galaxy-Server">Server Side Code</a>
                  </div>
                  <div className="pl-6 pt-4 pb-4 text-[3vh]">
                        <p>Tools Used:React , MongoDB , Firebase , Node , Express , Tailwind , DaisyUi</p>
                  </div>
                </div>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] flex justify-around items-center text-[5vh]">
                <div className="basis-1/2 text-center">
                    <a href={`#1`}>   <button onClick={handleActiveLeft}>
                            <FaArrowLeft></FaArrowLeft>
                        </button></a>
                    </div>
                    <div className=" grow text-center h-[100%] flex justify-center items-center border-l-2 border-[rgb(255,255,255,0.1)]">
                     <a href={`#1`}>
                     <button onClick={handleActiveRight}>
                            <FaArrowRight></FaArrowRight>
                        </button>
                     </a>
                    </div>
                </div>


            </div>

            {/* 3rd project */}
            <div className={`bg-[#050a18] h-[100%] w-[100%] grid lg:grid-cols-[2fr,1fr] lg:grid-rows-[2fr,1fr] grid-cols-1 grid-rows-[0.7fr,1fr,0.5fr,0.5fr] ${active==3?'block':'hidden'}`}>
                <a  href="https://italian-foodies.web.app/" target="_blank"><div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] bg-[url('/Capture3.PNG')] lg:bg-cover bg-contain bg-no-repeat h-[100%] w-[100%] cursor-pointer ">
                  
                </div></a>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] ">
                    <p className="text-[9vh] p-6 text-white">Features:</p>
                    <ul className="p-6 list-disc text-[3vh]">
                        <li>Full Stack website</li>
                        <li>Use Of Rest Api</li>
                        <li>Protective Routes</li>
                        <li>Fully responsive</li>
                        <li>Login Functionalities</li>
                    </ul>
                </div>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)]">
                    <p className="text-white lg:text-[5vh] text-[3vh] text-white p-6">Italian_Foodies</p>
                  <div className="pl-6">
                  <a className="text-[3vh] text-blue-600" href="https://italian-foodies.web.app/">Live Link|</a>
                    <a className="text-[3vh] text-blue-600 ml-6" href="https://github.com/Ali-Ashraf-Abir/Italian-Foodies-Client">Client Side Code|</a>
                    <a className="text-[3vh] text-blue-600 ml-6" href="https://github.com/Ali-Ashraf-Abir/Italian-Foodies-Server">Server Side Code</a>
                  </div>
                  <div className="pl-6 pt-4 pb-4 text-[3vh]">
                        <p>Tools Used:React , MongoDB , Firebase,tailwind,DaisyUi</p>
                  </div>
                </div>
                <div className="border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] flex justify-around items-center text-[5vh]">
                <div className="basis-1/2 text-center">
                    <a href={`#1`}>   <button onClick={handleActiveLeft}>
                            <FaArrowLeft></FaArrowLeft>
                        </button></a>
                    </div>
                    <div className=" grow text-center h-[100%] flex justify-center items-center border-l-2 border-[rgb(255,255,255,0.1)]">
                     <a href={`#1`}>
                     <button onClick={handleActiveRight}>
                            <FaArrowRight></FaArrowRight>
                        </button>
                     </a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;