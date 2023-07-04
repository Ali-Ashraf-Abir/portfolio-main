import Banner from "./Banner";
import Navbar from "./Navbar";
import Projects from "./Projects";


const Home = () => {
    return (
        <div className="bg-[#050a18] h-[100%] w-[100%]">
            <Navbar></Navbar>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;