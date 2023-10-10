import React from 'react'
import { FaReact } from 'react-icons/fa'
import {BsPerson} from 'react-icons/bs'
import {SiTailwindcss, SiFirebase, SiRedux} from 'react-icons/si'
function About() {
    
  return (
    <div id='section-2' className={' overflow-y-scroll w-full mx-auto h-screen bg-[#2e2d2d] text-[#e1e1e1] pb-4'}>
        <div className='pt-20 px-4 md:pl-60 md:pt-10 max-w-6xl mx-auto'>
            <div className=''>
                <div className='text-4xl text-[#00A3E1] pb-4 flex justify-between items-center'>
                    <h1 className=''>About Me</h1>
                    <BsPerson/>
                </div>
                <hr className=''/> 
                <h1 className='pt-10 pb-4 text-3xl'>Frontend Web Developer</h1>
                <p className='py-4'>I'm a frontend web developer with a focus on React and Tailwind CSS. 
                    I bring ideas to life by crafting engaging user interfaces. I've also dabbled in backend work,
                    using Firebase for
                    authentication and data management. Let's build something amazing together.
                </p>
                <p>I thrive on the challenges of transforming ideas into interactive digital experiences, 
                    ensuring that every pixel aligns with the vision. With a sprinkle of backend experience under my belt, 
                    I bring a holistic approach to web development, 
                    understanding how the frontend and backend intricately harmonize.
                </p>
                </div>
            <div>

            <h1 className='mx-auto text-lg text-center my-10 uppercase border-[#00A3E1] border-b rounded-xl w-fit px-2'>Quote of the day</h1>
            <p className='text-4xl italic text-gray-400'>"Champions keep playing until they get it right. Then they play more." – Billie Jean King</p>
            <h1 className='mx-auto text-2xl text-center my-10 uppercase border-[#00A3E1] rounded-xl border-b  w-fit px-2'>Skills</h1>
            <div className='flex flex-wrap justify-center gap-6'>
                <div className='text-center w-40 flex flex-col items-center justify-center'>
                    <FaReact className='text-5xl text-[#00A3E1]'/>
                    <p className='py-2 text-lg'>React Js</p>
                    <p className='text-xs'>React js is a framework. It makes things easier for tasks. The resuseable component saves a lot of time.</p>
                </div>
                <div className='text-center w-40 flex flex-col items-center justify-center'>
                    <SiTailwindcss className='text-5xl text-blue-500'/>
                    <p className='py-2 text-lg'>Tailwind Css</p>
                    <p className='text-xs'>Tailwind css is a framework. It makes things easier for tasks. The never to leave HTML makes coding so much smooth.</p>
                </div>
                <div className='text-center w-40 flex flex-col items-center justify-center'>
                    <SiFirebase className='text-5xl text-orange-500'/>
                    <p className='py-2 text-lg'>Firebase</p>
                    <p className='text-xs'>Easy to use and setup. Such as database, storage and auth all in one place to manage data securely.</p>
                </div>
                <div className='text-center w-40 flex flex-col items-center justify-center'>
                    <SiRedux className='text-5xl text-yellow-500'/>
                    <p className='py-2 text-lg'>Redux</p>
                    <p className='text-xs'>This tool has allow me to pass data and retrieve props in a much clear space and effiencey.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About