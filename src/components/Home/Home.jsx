import React, { useContext } from 'react'
import { AppContext } from '../../App'
function Home() {
  const {setShowSideBar, showSideBar} = useContext(AppContext)
  return (
    <div id='section-1' className={showSideBar ? 'transition-all ease-linear duration-300 ml-40 relative text-white h-screen' : 'transition-all ease-linear duration-300 ml-0 md:ml-40 relative text-white h-screen'}>
        {/* <img className='w-full h-full object-cover' src="/images/ocean.jpeg" width={500} height={500} alt="" /> */}
        <video autoPlay loop muted width="320" height="240" className='w-full h-full object-cover z-[90000]'>
          <source src="/images/beach.mp4" type="video/mp4"/>
        </video>
        <div className='w-full h-full absolute inset-0 bg-black/60'>
          <div className='text-6xl lg:text-7xl flex flex-col space-x-4 justify-center items-center h-full'>
            <p className='uppercase'>Win  <span className='text-[#00A3E1] px-4'>Aung</span></p>
            <p className='text-3xl lg:text-4xl py-4'>I am a <span className='font-bold lg:text-4xl'>Frontend Developer</span></p>
          </div>
        </div>
    </div>
  )
}

export default Home