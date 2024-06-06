import React, { useState } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

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
    },
    {
        img: project4,
        title: 'Project 4',
        description: 'This is a project 4',
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
            

        </div>
    </div>
  )
}

export default Portfolio;