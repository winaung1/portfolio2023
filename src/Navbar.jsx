import React, { useContext, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AppContext } from './App'
function Navbar() {
  const {setShowSideBar, showSideBar} = useContext(AppContext)
  return (
    <div className='md:hidden fixed top-0 left-0 w-full h-14 z-[5000] bg-[#17181B] flex text-white items-center justify-between px-6 py-2'>
        <p></p>
        <p className='text-white text-center text-3xl items-center justify-center flex h-full'></p>
        <GiHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} className='text-2xl cursor-pointer hover:text-[#00A3E1]'/>
    </div>
  )
}

export default Navbar