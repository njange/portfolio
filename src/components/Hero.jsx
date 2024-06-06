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

        <div className="grid grid-cols-2 md:cols-span-5 p-8 glass">

            <img className="w-[800px]" src={profilepic} alt='profilepic' />

            <div className="my-auto ml-8 flex-col text-gray-200">
                <p className="text-2xl md:text-4xl font-bold"> Hello, I'm James<br/>
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
                        repeat={infinity}
                    />

                </p>
                <p className='text-xl md:text-3xl font-semibold text-gray-400'>With a 5+ years experience</p>
                <button className='mt-4 px-4 py-2 text-lg font-bold text-white bg-primary-color rounded-xl'>Download CV</button>
            </div>
        </div>

    </div>
  )
}

export default Hero;