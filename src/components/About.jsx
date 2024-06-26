import React from 'react'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiCss3,
  DiHtml5,
  DiSass,
  DiBootstrap,
  DiGit,
  DiNpm,
} from 'react-icons/di'

const About = () => {
  return (
    <div className='max-w-[1000px] mt-24 mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>
      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
        <p className='text-gray-300 mb-4'>
          I am a full stack developer with experience in the following technologies:
        </p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiJavascript1 className='text-yellow-400' />
          <DiReact className='text-blue-400' />
          <DiNodejsSmall className='text-green-400' />
          <DiMongodb className='text-green-500' />
          <DiSass className='text-pink-400' />
          <DiBootstrap className='text-purple-600' />
          <DiGit className='text-red-400' />
          <DiNpm className='text-red-600' />
        </div>
        </div>
        <div className='relative group order-2 md:order-1max-w-[600px]'>
          <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
                            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
          <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
            <img src={project2} alt='project 2' className='rounded-lg md:max-w-[360px]'/>
          </div>

        </div>
        <div className='relative group order-2 md:order-1'>
          <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
                          blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
          <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
            <img src={project3} alt='project 3' className='rounded-lg md:max-w-[360px]'/>
          </div>

        </div>

        <div className='p-6'>
          <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Experience</h2>
          <p className='text-gray-300 mb-4'>
            I have experience in building responsive websites using HTML, CSS, JavaScript, React, and
            SASS.

          </p>
        </div>

      
    </div>
  )
}

export default About