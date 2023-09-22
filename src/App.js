import { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./components/Home/Home";
import Sidebar from './components/Sidebar'
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {BsPerson, BsNewspaper, BsEnvelopeAt, BsBriefcase, BsEnvelope} from 'react-icons/bs'
import {PiSuitcaseBold} from 'react-icons/pi'

export const AppContext = createContext()
function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(1)
  const sideBarData = [
    {
      id: 1,
      icon: <FaHome className='text-xl'/>,
      title: 'Home',
    },
    {
      id: 2,
      icon: <BsPerson className='text-xl'/>,
      title: 'About Me',
    },
    {
      id: 3,
      icon: <BsNewspaper className='text-xl'/>,
      title: 'Resume',
    },
    {
      id: 4,
      icon: <BsBriefcase className='text-xl'/>,
      title: 'Portfolio',
    },
    {
      id: 5,
      icon: <BsEnvelope className='text-xl'/>,
      title: 'Contact',
    },
  ];
  const handleClickScroll = (index) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setCurrentIndex(index)

  };

  
  const values = {setShowSideBar, showSideBar, handleClickScroll, sideBarData, currentIndex}

  return (
    <div>
      <AppContext.Provider value={values}>
      <Navbar/>
      <Sidebar/>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
