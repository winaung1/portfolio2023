import React from 'react'
import Navbar from './Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume/Resume'

function Main() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Main