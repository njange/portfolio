import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>James Njange</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a 
            href="https://github.com/njange" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-gray-200 transition-all duration-300"
          >
            <AiFillGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/james-njange-72845b258/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-blue-400 transition-all duration-300"
          >
            <AiFillLinkedin />
          </a>
          <a 
            href="https://x.com/Njange2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-blue-300 transition-all duration-300"
          >
            <AiFillTwitterSquare />
          </a>
        </div>
      </div>
      <p className='text-gray-400'>©2025 James Njange</p>
    </div>
  )
}

export default Footer