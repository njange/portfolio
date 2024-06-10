import React from 'react'
import profilepic from '../assets/profilepic.png'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap
} from 'react-icons/di'

const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0' id="home">

        <div className="md:cols-span-5 p-8 glass grid grid-cols-2 ">

            <img className="w-[800px]" src={profilepic} alt='profilepic' />

            <div className="my-auto ml-8 flex-col text-gray-200">
                <p className="text-xl md:text-4xl font-bold"> Hello, I'm James<br/>
                    <TypeAnimation
                        sequence={[
                            "Frontend Developer",
                            1000,
                            "Backend Developer",
                            1000,
                            "Fullstack Developer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />

                </p>
                <p className='text-xl md:text-3xl font-semibold text-gray-400'>With a 2+ years experience</p>
                <button className='mt-4 px-4 py-2 text-lg font-bold text-white bg-primary-color rounded-xl'>Download CV</button>
            </div>
        </div>
        <div className='grid md:col-span-3 gap-6'>
            <div className='text-5xl p-12 glass'>
                <p className='text-gray-200 text-xl font-bold mb-4 text-center'>My Tech Stack</p>
                <div className='grid grid-cols-4 gap-4'>
                    <DiHtml5 size={50} className='text-red-500' />
                    <DiCss3 size={50} className='text-blue-500' />
                    <DiJavascript1 size={50} className='text-yellow-500' />
                    <DiReact size={50} className='text-blue-300' />
                    <DiNodejsSmall size={50} className='text-green-500' />
                    <DiSass size={50} className='text-pink-500' />
                    <DiBootstrap size={50} className='text-purple-500' />

                </div>
            </div>
            <div className='text-6xl gap-4 flex justify-center items-center glass text-gray-600'>
                <a href="https://github.com/njange" className="hover:scale-110 transition-transform duration-300"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/james-njange-72845b258/" className="hover:scale-110 transition-transform duration-300"><AiFillLinkedin/></a>
                <a href="https://x.com/Njange2" className="hover:scale-110 transition-transform duration-300"><AiFillTwitterSquare/></a>

            </div>

        </div>

    </div>
  )
}

export default Hero;