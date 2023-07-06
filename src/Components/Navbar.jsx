import { useState } from "react";
import { FaFacebook, FaLinkedinIn, FaMailchimp, FaHamburger } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {

    const [menu,setMenu]=useState(false)


    const handleMenu=()=>{


        setMenu(!menu)

        console.log(menu)


    }


    const handleAbout=()=>{
        window.location.href='/aboutme'
    }



    return (
        <div>
            <div id='nav' className="flex w-[100%]  border-b-2 border-[rgb(255,255,255,0.1)] text-[2.5vh] font-nunito">
                <div className="lg:basis-1/3 basis-2/3 border-l-2 border-[rgb(255,255,255,0.1)] text-center p-6 cursor-pointer text-[3vh]">
                    Portfolio
                </div>
                <div className="hidden lg:text-[3vh] lg:basis-1/3 border-l-2 border-[rgb(255,255,255,0.1)] justify-center p-6 lg:flex">
                <p onClick={handleAbout} className="cursor-pointer">About me</p>
                    <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className="ml-[5vh] cursor-pointer">Contact me</Link>
                </div>
                <div className="hidden lg:text-[3vh] flex grow border-l-2 border-[rgb(255,255,255,0.1)] justify-center p-6 lg:flex">
                    <a href="https://www.facebook.com/ashraf.abir.520/" target='_blank'><FaFacebook className="cursor-pointer"></FaFacebook></a> <a href="https://www.linkedin.com/in/ali-ashraf-722612278/" target='_blank'><FaLinkedinIn className="ml-[3vh] cursor-pointer"></FaLinkedinIn></a> <div className="tooltip tooltip-open tooltip-bottom text-[4vh]" data-tip="Email:aliashrafabir19@gmail.com"><FaMailchimp className="ml-[3vh] cursor-pointer"></FaMailchimp></div> 
                </div>
                <div className="lg:text-[3vh] grow border-l-2 border-[rgb(255,255,255,0.1)] text-center p-6 hidden lg:block">
                <a href='/resume.pdf'><p className="cursor-pointer">Download CV</p></a>
                </div>
                <div onClick={handleMenu} className=" text-[3vh] grow border-l-2 border-[rgb(255,255,255,0.1)] text-center p-6 flex justify-center items-center lg:hidden">
                    <FaHamburger></FaHamburger>
                    <p className="cursor-pointer ml-[3vh] ">Menu</p>
                </div>





            </div>
            <div className={`sidemenu flex flex-col justiy-center ${menu?'block':'hidden'}`}>
                    <div className=" flex lg:basis-1/3 border-b-2 border-[rgb(255,255,255,0.1)] justify-center p-6 ">
                    <p onClick={handleAbout} className="cursor-pointer">About me</p>
                        <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className="ml-[5vh] cursor-pointer">Contact me</Link>
                    </div>
                    <div className=" flex grow border-b-2 border-[rgb(255,255,255,0.1)] justify-center p-6">
                        <FaFacebook className="cursor-pointer"></FaFacebook> <FaLinkedinIn className="ml-[3vh] cursor-pointer"></FaLinkedinIn> <FaMailchimp className="ml-[3vh] cursor-pointer"></FaMailchimp>
                    </div>
                    <div className=" grow border-b-2 border-[rgb(255,255,255,0.1)] text-center p-6 block">
                        <a href='/resume.pdf'><p className="cursor-pointer">Download CV</p></a>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;