
// This is Left Hero Section goes inside Hero Section
import EmailBTN from "../../Reusables/EmailBTN";
import { AiFillLinkedin, AiFillGift, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import song from '../../assets/sounds/rickroll.mp3'

let played = false;
let audio = new Audio(song);
function playAudio() {
    played = !played;
    if (played) audio.play();
    else audio.pause();
}

const Contents = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div className="w-full h-full md:h-2/3 relative flex flex-col justify-center items-center">
            <div className="absolute top-0 left-0 font-black font-with text-2xl md:text-3xl xl:text-4xl text-white animate-bounce"> {'(⌐■_■)'} </div>
            <div className="text-white text-md">
                <div className="flex xl:hidden w-full justify-end animate-bounce">
                    <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center items-end">
                        <div className="w-3 h-3 bg-white rounded-full animate-bounce">
                        </div>
                    </div>
                </div>
                <h1 className=" pb-1">Namaste🙏</h1>
                <h1 className=" pb-1">Myself <b>Hiten Vats</b>.</h1>
                <p className=" pb-1">
                    A <b>student</b>, a self-taught <b>developer</b>, passionate about building usable applications, and looking to contribute in good work wherever possible.
                </p>
                <p className=" pb-1">
                    I have worked with many popular technologies such as NodeJS, React-Native, Django, ReactJS etc.
                </p>
                <p className=" pb-1">
                    I believe in continuous learning to keep me up to date and thus try to explore and learn every possibility.
                </p>
            </div>
            <div className="absolute sm:items-center -bottom-5 sm:bottom-0 left-0 sm:right-0 flex flex-col sm:flex-row sm:justify-between justify-start w-full">
                <div className="flex py-4 sm:py-0 justify-evenly sm:justify-start">
                    <a href={'https://www.linkedin.com/in/hiten-vats-452a76207/'} target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center sm:mx-2 p-4 overflow-hidden font-mono font-medium tracking-tighter text-white hover:text-black bg-[#3b82f6] rounded-2xl shadow-lg group">
                        <span className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56`}></span>
                        <span className="relative"><AiFillLinkedin size={15} className=' text-inherit ' /></span>
                    </a>
                    <a href={'https://instagram.com/this_is_hiten'} target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center sm:mx-2 p-4 overflow-hidden font-mono font-medium tracking-tighter text-white hover:text-black bg-[#ea580c] rounded-2xl shadow-lg group">
                        <span className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56`}></span>
                        <span className="relative"><AiFillInstagram size={15} className=' text-inherit ' /></span>
                    </a>
                    <a href={'https://github.com/hitenvats16'} target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center sm:mx-2 p-4  overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#0c4a6e] rounded-2xl shadow-lg group hover:text-black">
                        <span className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56`}></span>
                        <span className="relative"><AiFillGithub size={15} className=' text-inherit ' /></span>
                    </a>
                    <button onClick={playAudio} className=" animate-wiggle relative inline-flex items-center justify-center sm:mx-2 p-4  overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#c026d3] rounded-2xl shadow-lg group hover:text-black">
                        <span className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56`}></span>
                        <span className="relative"><AiFillGift size={15} className=' text-inherit ' /></span>
                    </button>
                </div>
                <EmailBTN email="hitenvats16@gmail.com" />
            </div>
        </div>
    )
}

const LeftHeroSection = () => {
    return (
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="w-full col-span-3 bg-primary h-screen p-10 flex justify-center items-center shadow-2xl">
            <Contents />
        </div>
    )
}

export default LeftHeroSection;