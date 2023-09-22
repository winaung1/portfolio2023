import React, { useEffect, useState } from 'react'
import { BsBriefcase } from 'react-icons/bs'
import ProjectCard from './ProjectCard'
import { motion, AnimatePresence } from "framer-motion"
function Portfolio() {
  const [toggleBg, setToggleBg] = useState(false)
  const [item, setItem] = useState('')
  const [projectId, setProjectId] = useState(1)
  const [hideit, setHideit] = useState('scale-0')

  const portfolioData = [
    {
      name: 'Audio',
      description: 'This is a work of hard, it includes everything you need. Real Estate',
      img: 'https://images.pexels.com/photos/6634662/pexels-photo-6634662.jpeg',
      skills: ['React', 'Tailwind', 'HTML', 'CSS', 'Firebase', 'Redux', 'Next Js'],
    },
    {
      name: 'Audio',
      description: 'This is a work of hard, it includes everything you need. Music',
      img: 'https://images.pexels.com/photos/8903270/pexels-photo-8903270.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['React', 'Tailwind', 'HTML', 'CSS', 'Firebase', 'Redux', 'Next Js'],
    },
    {
      name: 'Audio',
      description: 'This is a work of hard, it includes everything you need. Music',
      img: 'https://images.pexels.com/photos/6461324/pexels-photo-6461324.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['React', 'Tailwind', 'HTML', 'CSS', 'Firebase', 'Redux', 'Next Js'],
    },
    {
      name: 'Audio',
      description: 'This is a work of hard, it includes everything you need.',
      img: 'https://images.pexels.com/photos/6694722/pexels-photo-6694722.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['React', 'Tailwind', 'HTML', 'CSS', 'Firebase', 'Redux', 'Next Js'],
    },
    {
      name: 'Audio',
      description: 'This is a work of hard, it includes everything you need. E-commerce',
      img: 'https://images.pexels.com/photos/8293677/pexels-photo-8293677.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['React', 'Tailwind', 'HTML', 'CSS', 'Firebase', 'Redux', 'Next Js'],
    },
  
    {
      name: 'Audio',
      description: 'This is a work of hard, it includes everything you need. Real Estate',
      img: 'https://images.pexels.com/photos/8293677/pexels-photo-8293677.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['React', 'Tailwind', 'HTML', 'CSS', 'Firebase', 'Redux', 'Next Js'],
    },
    
  ]
  const tabs = [
    {
    id: 1,
    keys: 'All'
  },
    {
      id: 2,
    keys: 'Real Estate'
  },
    {
      id: 3,
    keys: 'Music'
  },
    {
      id: 4,
    keys: 'E-commerce'
  },

  ]


  const handleShowProject = (tab, id) => {
    if(tab == 'All'){
      setItem('')
      setProjectId(id + 1)
    }else{
      setItem(tab)
      setProjectId(id + 1)
    }

  }
  return (
    <div id='section-4' className='overflow-y-scroll w-full mx-auto h-screen bg-[#2e2d2d] text-[#e1e1e1] pb-4'>
    <div className='pt-20 px-4 md:pl-60 md:pt-10 max-w-6xl mx-auto'>
        <div className=''>
            <div className='text-4xl text-[#00A3E1] pb-4 flex justify-between items-center'>
                <h1 className=''>My Portfolio</h1>
                <BsBriefcase/>
            </div>
            <hr className=''/> 
            <div className='flex flex-wrap gap-4 w-fit mx-auto my-10 px-4'>
             {tabs.map((tab, index) => {
              return <div className={tab.id == projectId ? 'bg-[#00A3E1] rounded-full w-fit px-4' : ''}>
                <button onClick={() => handleShowProject(tab.keys, index)}>{tab.keys}</button>
              </div>
             })

             }
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
              <AnimatePresence>
              {portfolioData.filter(data => data.description.includes(item)).map((project, index) => {
                if(project.description.includes(item)){
                return <ProjectCard project={project}/>
              }
              
            })
            
          }
          </AnimatePresence>
          </div>
      </div>
    </div>
</div>
  )
}

export default Portfolio