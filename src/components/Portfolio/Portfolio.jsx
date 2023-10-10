import React, { useContext, useEffect, useState } from "react";
import { BsBriefcase } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiYoutube,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiReact,
} from "react-icons/si";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AppContext } from "../../App";
function Portfolio() {
  const [toggleBg, setToggleBg] = useState(false);
  const [item, setItem] = useState("");
  const [projectId, setProjectId] = useState(1);
  const [hideit, setHideit] = useState("scale-0");

  const {getId, setClose, close} = useContext(AppContext)


  const portfolioData = [
    {
      id: 1,
      name: 'Audiophile',
      description:
        "E-commerce Side Project I created by using a Figma Design from frontendMentor.io. The site uses localstorage and crud operations.",
      logoOne: <FaReact />,
      logoFour: <SiTailwindcss />,
      logoThree: <FaHtml5 />,
      cn: "w-fit h-80 object-contain drop-shadow-2xl",
      colorOne: "text-[#EBB943]",
      colorThree: "text-orange-500",
      colorFour: "text-green-200",
      img: "/audiophile.png",
      link: "https://audiophile-wine.vercel.app/",
    },
    {
      id: 2,
      name: 'Win Gallery',
      description:
        "I use fetch api from RapidApi and Pexels api to search for images, you can also remove background images all in one place. You can also download any image.",
      logoOne: <SiJavascript />,
      logoTwo: <FaCss3 />,
      logoFour: <SiTailwindcss />,
      logoThree: <FaHtml5 />,
      cn: "w-fit h-80 object-contain  drop-shadow-2xl",
      colorOne: "text-[#EBB943]",
      colorTwo: "text-blue-500",
      colorThree: "text-orange-500",
      colorFour: "text-green-200",
      img: "/pic2.png",
      link: "https://removebackground.netlify.app/",
    },
    {
      id: 3,
      name: 'Win Realtor',
      description:
        "I built this Real Estate website that lets you search for location and will render the properties, you can also filter by any options you see there.",
      logoOne: <SiNextdotjs />,
      logoTwo: <FaCss3 />,
      logoFour: <SiTailwindcss />,
      logoThree: <FaHtml5 />,
      cn: "w-fit h-80 object-contain  drop-shadow-2xl",
      colorOne: "text-white",
      colorTwo: "text-blue-500",
      colorThree: "text-orange-500",
      colorFour: "text-green-200",
      img: "/realestate1.png",
      link: "https://winrealtor.netlify.app/",
    },
    {
      id: 3,
      name: 'Travel Site',
      description:
        "This is a Travel fun personal project that I did to prepare to teach on youtube. It fetches api from pexels and has some cool 3D effect.",
      logoOne: <FaReact />,
      logoTwo: <FaCss3 />,
      logoFour: <SiTailwindcss />,
      logoThree: <FaHtml5 />,
      cn: "w-fit h-80 object-contain  drop-shadow-2xl",
      colorOne: "text-[#EBB943]",
      colorTwo: "text-blue-500",
      colorThree: "text-orange-500",
      colorFour: "text-green-200",
      img: "/diamond.png",
      link: "https://diamondxplore.netlify.app/",
    },
    {
      id: 4,
      name: 'Music Player App',
      description:
        "Music app using Youtube Api to query all and any artists or videos to listen free ads.",
      logoOne: <FaReact />,
      logoTwo: <FaCss3 />,
      logoFour: <SiTailwindcss />,
      logoThree: <FaHtml5 />,
      cn: "w-fit h-80 object-contain  drop-shadow-2xl",
      colorOne: "text-[#EBB943]",
      colorTwo: "text-blue-500",
      colorThree: "text-orange-500",
      colorFour: "text-green-200",
      img: "/musicapp.png",
      link: "https://musicappwin.vercel.app/",
    },
    {
      id: 5,
      name: 'Agency Website',
      description:
        "Agency Website for agency a company located in Utah started by a friend of mine.",
      logoOne: <FaReact />,
      logoTwo: <FaCss3 />,
      logoFour: <SiTailwindcss />,
      logoThree: <FaHtml5 />,
      cn: "w-fit h-80 object-contain  drop-shadow-2xl",
      colorOne: "text-[#EBB943]",
      colorTwo: "text-blue-500",
      colorThree: "text-orange-500",
      colorFour: "text-green-200",
      img: "/agency.png",
      link: "https://businessone.vercel.app/",
    },
  ];

  const tabs = [
    {
      id: 1,
      keys: "All",
    },
    {
      id: 2,
      keys: "Real Estate",
    },
    {
      id: 3,
      keys: "Music",
    },
    {
      id: 4,
      keys: "E-commerce",
    },
    {
      id: 5,
      keys: "Travel",
    },
    {
      id: 6,
      keys: "Agency",
    },
  ];

  const handleShowProject = (tab, id) => {
    if (tab == "All") {
      setItem("");
      setProjectId(id + 1);
    } else {
      setItem(tab);
      setProjectId(id + 1);
    }
  };
  return (
    <div
      id="section-4"
      className="overflow-y-scroll w-full mx-auto h-screen bg-[#2e2d2d] text-[#e1e1e1] pb-4"
    >
      <div className="pt-20 px-4 md:pl-60 md:pt-10 max-w-6xl mx-auto">
        <div className="">
          <div className="text-4xl text-[#00A3E1] pb-4 flex justify-between items-center">
            <h1 className="">My Portfolio</h1>
            <BsBriefcase />
          </div>
          <hr className="" />
          <div className="flex flex-wrap gap-4 w-fit mx-auto my-10 px-4">
            {tabs.map((tab, index) => {
              return (
                <div
                  className={
                    tab.id == projectId
                      ? "bg-[#00A3E1] rounded-full w-fit px-4"
                      : ""
                  }
                >
                  <button onClick={() => handleShowProject(tab.keys, index)}>
                    {tab.keys}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <AnimatePresence>
              {portfolioData
                .filter((data) => data.description.includes(item))
                .map((project, index) => {
                  if (project.description.includes(item)) {
                    return <ProjectCard project={project} />;
                  }
                })}


              <div className={close ? "z-[960000] fixed top-0 left-0 bg-[#2e2d2d] text-[#e1e1e1] w-full h-screen overflow-y-scroll transition-all duration-300 ease-linear opacity-1" : "opacity-0 z-[960000] fixed top-0 -right-[6000px] bg-[#2e2d2d] text-[#e1e1e1] w-full h-screen overflow-y-scroll transition-all duration-300 ease-linear"}>
                <div className="max-w-6xl mx-auto">

                <button onClick={() => setClose(false)} className="fixed top-4 right-10">X</button>
                </div>
                <div className="flex flex-col items-center justify-center">
                 {portfolioData.map(portfolioItem => {
                  if(portfolioItem.name == getId){
                    
                   return <div className="px-10 py-4 leading-normal flex flex-col gap-4 justify-center items-center">
                <h1 className="text-3xl font-bold text-center pt-4">
                  {portfolioItem.name}
                  </h1>
                     <img
                       className="w-[90%] h-full object-cover mx-auto mt-20 rounded-xl"
                       src={portfolioItem.img}
                       alt=""
                       />
                  <a  href={portfolioItem.link} className="border px-3 rounded-xl w-fit hover:border-none hover:bg-[#00A3E1] hover:text-white">Visit Site</a>
                    <h3 className="pt-4 italic tracking-widest font-bold text-[#00A3E1]">Skills:</h3>
                <div className="flex items-center space-x-4 text-4xl pb-4">
                  <p className={portfolioItem.colorOne}>{portfolioItem.logoOne}</p>
                  <p className={portfolioItem.colorTwo}>{portfolioItem.logoTwo}</p>
                  <p className={portfolioItem.colorThree}>{portfolioItem.logoThree}</p>
                  <p className={portfolioItem.colorFour}>{portfolioItem.logoFour}</p>
                  <p className={portfolioItem.colorFive}>{portfolioItem.logoFive}</p>
                </div>
                <p className="max-w-3xl lg:text-xl">
                  {portfolioItem.description}
                </p>
              </div>
                      }
                  })}
                  </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
