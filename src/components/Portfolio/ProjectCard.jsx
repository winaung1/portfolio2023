import React from 'react'
import { motion } from "framer-motion"
function ProjectCard({project}) {
  return (
    <motion.div className={`${project.cn}`} layout transition={{ duration: .5 }} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} >
        <img className={`h-40 w-full object-cover rounded-xl`} src={project.img} alt="" />
    </motion.div>
  )
}

export default ProjectCard