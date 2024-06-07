import React, { useState } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

import arrow from '../assets/arrow.png'
import { AiFillGithub } from 'react-icons/ai'

const projects = [
    // TODO: Add your projects here
    {
        img: project1,
        title: 'Project 1',
        description: 'This is a project 1',
        link: {
            site:'',
            github:''
        }
    },
    {
        img: project2,
        title: 'Project 2',
        description: 'This is a project 2',
        link: {
            site:'',
            github:''
        }
    },
    {
        img: project3,
        title: 'Project 3',
        description: 'This is a project 3',
        link: {
            site:'',
            github:''
        }
    
    }

]
const Portfolio = () => {

    const [currentProject, setCurrentProject] = useState(0)
  return (
    <div className='h-[90vh] my-6 max-6 max-w-[1200px] mx-auto grid grid-cols-8 gap-6' id='portfolio'>
        <div className='relative z-10 col-span-3 grid place-items-center grid-cols-1'>
            <p className='text-gray-200 font-bold text-4xl skew-y-6'>Select Project</p>
            <img src={arrow} className='absolute w-[50px] top-10 right-12'></img>

            <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl'>

                {projects.map((project, index) => (
                    <li key={index} onClick={() => setCurrentProject(index)} 
                    className={`cursor-pointer text-gray-300 ${currentProject ===index ? 'active-project' : ''}`}>
                        {project.title}
                        </li>
                ))}

            </ul>

        </div>
        <div className='z-10 glass w-full col-span-5'>
            <div className='w-full h-80'>
                <img src={projects[currentProject].img} alt={projects[currentProject].title}
                    className='w-full h-full object-cover rounded-lg mb-4' />
            </div>
            <div className='p-6'>
                <p className='text-gray-200 my-4'>{projects[currentProject].description}</p>
                <div className='flex space-x-4'>
                    <a href={projects[currentProject].link.site}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate transition duration-300'></a>
                    <a href={projects[currentProject].link.github}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'></a>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Portfolio;