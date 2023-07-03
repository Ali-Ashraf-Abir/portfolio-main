import { useState } from "react";
import { FaFacebook, FaLinkedinIn, FaMailchimp, FaHamburger } from "react-icons/fa";

const Navbar = () => {

    const [menu,setMenu]=useState(false)


    const handleMenu=()=>{


        setMenu(!menu)

        console.log(menu)


    }



    return (
        <div>
            <div className="flex w-[100%]  border-b-2 border-[rgb(255,255,255,0.1)] text-[2.5vh] font-nunito">
                <div className="lg:basis-1/3 basis-2/3 text-center p-6 cursor-pointer text-3xl">
                    Portfolio
                </div>
                <div className="hidden lg:text-xl lg:basis-1/3 border-l-2 border-[rgb(255,255,255,0.1)] justify-center p-6 lg:flex">
                    <p className="cursor-pointer">About me</p>
                    <p className="ml-[5vh] cursor-pointer">Contact me</p>
                </div>
                <div className="hidden lg:text-xl flex grow border-l-2 border-[rgb(255,255,255,0.1)] justify-center p-6 lg:flex">
                    <FaFacebook className="cursor-pointer"></FaFacebook> <FaLinkedinIn className="ml-[3vh] cursor-pointer"></FaLinkedinIn> <FaMailchimp className="ml-[3vh] cursor-pointer"></FaMailchimp>
                </div>
                <div className="lg:text-xl grow border-l-2 border-[rgb(255,255,255,0.1)] text-center p-6 hidden lg:block">
                    <p className="cursor-pointer">Download CV</p>
                </div>
                <div onClick={handleMenu} className=" text-3xl grow border-l-2 border-[rgb(255,255,255,0.1)] text-center p-6 flex justify-center items-center lg:hidden">
                    <FaHamburger></FaHamburger>
                    <p className="cursor-pointer ml-[3vh] ">Menu</p>
                </div>





            </div>
            <div className={`sidemenu flex flex-col justiy-center ${menu?'block':'hidden'}`}>
                    <div className=" flex lg:basis-1/3 border-b-2 border-[rgb(255,255,255,0.1)] justify-center p-6 ">
                        <p className="cursor-pointer">About me</p>
                        <p className="ml-[5vh] cursor-pointer">Contact me</p>
                    </div>
                    <div className=" flex grow border-b-2 border-[rgb(255,255,255,0.1)] justify-center p-6">
                        <FaFacebook className="cursor-pointer"></FaFacebook> <FaLinkedinIn className="ml-[3vh] cursor-pointer"></FaLinkedinIn> <FaMailchimp className="ml-[3vh] cursor-pointer"></FaMailchimp>
                    </div>
                    <div className=" grow border-b-2 border-[rgb(255,255,255,0.1)] text-center p-6 block">
                        <p className="cursor-pointer">Download CV</p>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;