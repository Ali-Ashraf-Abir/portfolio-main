import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banner = ({textEnter,textLeave}) => {

    return (
        <div >
            <div data-aos="zoom-in" data-aos-duration="3000" className="cursor-none bg-[#050a18] h-[100%] w-[100%] flex lg:flex-row flex-col font-josef">

                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className=" basis-2/3 border-b-2 border-l-2 border-[rgb(255,255,255,0.1)]  ">
                    <div className="text-center font-josef lg:text-[10vh] text-[9vh] mt-6 text-white">
                        <p>ALI ASHRAF ABIR</p>
                    </div>
                    <div className="p-6">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'MERN DEVELOPER',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'FRONTEND DEVELOPER',
                            1000,
                    
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '7vh', display: 'inline-block',}}
                        repeat={Infinity}
                    />
                    </div>
                    
                    <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-white font-nunito text-[3vh] lg:text-[4vh] mt-6 p-6">
                        <p>
                        Hello! I'm Ali Ashraf Abir, a passionate and skilled MERN stack front-end developer. With a strong focus on creating captivating user experiences, I bring ideas to life by combining my expertise in modern web development technologies. Proficient in React, I enjoy crafting intuitive and responsive user interfaces that enhance usability and engagement. Alongside my solid foundation in HTML, CSS, and JavaScript, I have a keen eye for design and strive to deliver visually stunning websites. As a detail-oriented problem solver, I am constantly seeking innovative solutions and staying up-to-date with the latest industry trends. With a dedication to clean code and best practices, I am committed to delivering high-quality, efficient, and scalable applications. Collaborative by nature, I thrive in team environments and value open communication and continuous learning. Explore my portfolio to discover the projects I've worked on and witness my passion for building exceptional web experiences. Let's create something amazing together!
                        </p>
                    </div>
                </div>

                <div className="basis-1/3 border-b-2 border-l-2 border-[rgb(255,255,255,0.1)] bg-[url(/pic.jpg)] bg-cover bg-contain no-repeat bg-center">

                        {/* <img className='w-[100%] mt-auto' src="pic.jpg" alt="" /> */}


                </div>

            </div>

        </div>
    );
};

export default Banner;