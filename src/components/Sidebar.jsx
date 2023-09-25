import React, { useContext } from 'react'
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {BsPerson, BsNewspaper, BsEnvelopeAt, BsBriefcase, BsEnvelope} from 'react-icons/bs'
import {PiSuitcaseBold} from 'react-icons/pi'
import { AppContext } from '../App'
function Sidebar() {
  const {handleClickScroll,showSideBar, sideBarData, currentIndex} = useContext(AppContext)

  
  return (
    <div className={showSideBar ? 'overflow-y-scroll z-[6000] transition-all duration-300 ease-linear fixed md:flex flex-col  gap-4 bg-[#17181B] h-screen w-[200px] md:left-0 top-0 text-gray-600' : ' -left-60 z-[6000] transition-all duration-300 ease-linear fixed md:flex flex-col gap-4 bg-[#17181B] h-screen w-[200px] md:left-0 top-0 text-gray-600 overflow-y-scroll'}>
    <div className='relative'>
      <img className=' object-cover h-40 w-full' src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308458-stock-illustration-unknown-person-silhouette-profile-picture.jpg" alt="" />
      <div className='bg-[#00A3E1]/80 w-full absolute bottom-0 h-10'>
        <p className='uppercase text-2xl text-center flex justify-center items-center h-full w-full text-white'>Win Aung</p>
      </div>
    </div>
      <div className={'w-fit mx-auto flex py-6 flex-col h-screen justify-between gap-4 pt-4'}>
        <div className='w-fit mx-auto flex py-6 flex-col h-screen gap-4'>

        {sideBarData.map((data, index) => (
          <div onClick={() => handleClickScroll(index + 1)} className={currentIndex == data.id ? 'text-white cursor-pointer hover:text-white flex items-center space-x-3 uppercase' : 'cursor-pointer hover:text-white flex items-center space-x-3 uppercase'}>
            <div>{data.icon}</div>
            <p>{data.title}</p>
          </div>
      ))}
      </div>
   
    <div className='flex text-2xl justify-center items-center space-x-4'>
      <FaYoutube className='hover:white'/>
      <FaLinkedin className='hover:white'/>
      <FaGithub className='hover:white'/>
    </div>
    </div>
    </div>
  )
}

export default Sidebar