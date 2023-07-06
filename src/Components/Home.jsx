import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Skills1 from "./Skills1";


const Home = () => {
    return (
        <div className="bg-[#050a18] h-[100%] w-[100%]">
            <Navbar></Navbar>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Skills1></Skills1>
            <Contact></Contact>
        </div>
    );
};

export default Home;