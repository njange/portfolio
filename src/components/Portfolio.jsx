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

    const [current, setCurrent] = useState(0)
  return (
    <div>

    </div>
  )
}

export default Portfolio;