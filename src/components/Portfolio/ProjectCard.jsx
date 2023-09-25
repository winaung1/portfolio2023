import React, { useContext } from 'react'
import { motion } from "framer-motion"
import {FaArrowRight} from 'react-icons/fa'
import { AppContext } from '../../App'
function ProjectCard({project}) {
  const {setGetId, setClose} = useContext(AppContext)

  const handleId = (id) => {
    setGetId(id)
  }
  return (
    <motion.div className='group relative' layout transition={{ duration: .5 }} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} >
        <img className={`h-60 w-full object-contain rounded-xl`} src={project.img} alt="" />
        <div className='hidden group-hover:block bg-black/40 w-full h-full absolute inset-0'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex items-center space-x-4 rounded border hover:border-none hover:text-white hover:bg-[#00A3E1] text-[#00A3E1] border-[#00A3E1] px-2 w-fit m-2'>
          <button onClick={() => {

            handleId(project.name)
            setClose(true)
          }
            }>More</button>
          <FaArrowRight/>
        </div>
    </motion.div>
  )
}

export default ProjectCard