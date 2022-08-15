// This is Right Hero Section goes inside Hero Section

import { useState,useEffect } from "react";
import Experiences from "../Right Hero Section Contents/Experiences";
import Projects from "../Right Hero Section Contents/Projects";
import Skills from "../Right Hero Section Contents/Skills";
import Aos from "aos";
import 'aos/dist/aos.css';

const Content = () => {

    const [toggle, setToggle] = useState("projects");

    const toggleHandler = (state) => {
        setToggle(state);
    }

    const contentDecider = () => {
        if (toggle === "experiences") return <Experiences />;
        if (toggle === "skills") return <Skills />
        if (toggle === "projects") return <Projects />
    }

    return (
        <div className="w-full backdrop-blur-sm h-full xl:max-w-[875px] xl:max-h-[800px] bg-secondry/[.7] rounded-lg shadow-2xl">
            <nav className="w-full flex">

                <div >
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-non-active">
                        <li className="mr-2">
                            <button onClick={() => { toggleHandler("projects") }} className={["ease-in duration-100 inline-flex p-4 rounded-t-lg hover:border-gray-300 dark:hover:text-active group", toggle === "projects" ? "border-active text-active border-b-2 font-bold" : ""]}>
                                Projects
                            </button>
                        </li>
                        <li className="mr-2">
                            <button onClick={() => { toggleHandler("skills") }} className={["ease-in duration-100 inline-flex p-4 rounded-t-lg group", toggle === "skills" ? "border-active text-active border-b-2 font-bold" : ""]}>
                                Skills
                            </button>
                        </li>
                        <li className="mr-2">
                            <button onClick={() => { toggleHandler("experiences") }} className={["ease-in duration-100 inline-flex p-4 rounded-t-lg hover:text-active hover:border-gray-300 dark:hover:text-gray-300 group", toggle === "experiences" ? "border-active text-active border-b-2 font-bold" : ""]}>
                                Experiences
                            </button>
                        </li>
                    </ul>
                </div>

            </nav>
            {
                contentDecider()
            }
        </div>
    )
};

const RightHeroSection = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className=" w-full col-span-6 h-screen xl:flex xl:justify-center xl:items-center xl:px-10 xl:py-16">
            <Content />
        </div>
    );
}

export default RightHeroSection;