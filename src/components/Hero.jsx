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

        <div className="md:col-span-5 p-4 md:p-8 glass grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">

            <div className="flex justify-center md:justify-start">
                <img className="w-full max-w-[300px] md:max-w-[400px] h-auto object-cover rounded-lg" src={profilepic} alt='profilepic' />
            </div>

            <div className="my-auto md:ml-8 flex flex-col text-gray-200 text-center md:text-left">
                <p className="text-lg md:text-xl lg:text-4xl font-bold mb-2"> Hello, I'm James<br/>
                    <TypeAnimation
                        sequence={[
                            "DevOps Engineer",
                            1000,
                            "Backend Developer",
                            1000,
                            "Cloud Architect",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />

                </p>
                <p className='text-base md:text-xl lg:text-3xl font-semibold text-gray-400 mb-4'>With a 2+ years experience</p>
                <button className='mt-4 px-6 py-3 text-sm md:text-lg font-bold text-white bg-primary-color rounded-xl hover:bg-opacity-80 transition-all duration-300 self-center md:self-start w-fit'>Download CV</button>
            </div>
        </div>
        <div className='grid md:col-span-3 gap-6'>
            <div className='text-5xl p-6 md:p-12 glass'>
                <p className='text-gray-200 text-lg md:text-xl font-bold mb-4 text-center'>My Tech Stack</p>
                <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 justify-items-center'>
                    <DiHtml5 size={40} className='text-red-500 md:w-[50px] md:h-[50px]' />
                    <DiCss3 size={40} className='text-blue-500 md:w-[50px] md:h-[50px]' />
                    <DiJavascript1 size={40} className='text-yellow-500 md:w-[50px] md:h-[50px]' />
                    <DiReact size={40} className='text-blue-300 md:w-[50px] md:h-[50px]' />
                    <DiNodejsSmall size={40} className='text-green-500 md:w-[50px] md:h-[50px]' />
                    <DiSass size={40} className='text-pink-500 md:w-[50px] md:h-[50px]' />
                    <DiBootstrap size={40} className='text-purple-500 md:w-[50px] md:h-[50px]' />

                </div>
            </div>
            <div className='text-4xl md:text-6xl gap-4 flex justify-center items-center glass text-gray-600 p-6 md:p-4'>
                <a href="https://github.com/njange" className="hover:scale-110 transition-transform duration-300"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/james-njange-72845b258/" className="hover:scale-110 transition-transform duration-300"><AiFillLinkedin/></a>
                <a href="https://x.com/Njange2" className="hover:scale-110 transition-transform duration-300"><AiFillTwitterSquare/></a>

            </div>

        </div>

    </div>
  )
}

export default Hero;