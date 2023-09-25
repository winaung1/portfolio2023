import { createContext, useEffect, useState } from "react";
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {BsPerson, BsNewspaper, BsEnvelopeAt, BsBriefcase, BsEnvelope} from 'react-icons/bs'
import {PiSuitcaseBold} from 'react-icons/pi'
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioDetails from "./components/Portfolio/PortfolioDetails";

export const AppContext = createContext()
function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [getId, setGetId] = useState('')
  const [close, setClose] = useState(false);
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

  
  const values = {setShowSideBar, showSideBar, handleClickScroll, sideBarData, currentIndex, getId, setGetId, close, setClose}

  return (
    <div>
      <AppContext.Provider value={values}>
        <Main/>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Main />}>
            <Route path="PortfolioDetails" element={<PortfolioDetails />} />
          </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
