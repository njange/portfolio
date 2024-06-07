import React from 'react'

const Contact = () => {
  return (
    <div className='px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 place-items-center' id='contact'>
        <div>
            <div className='text-gray-300 my-3 p-2'>
                <h3 className='text-4xl font-semibold mb-5'>Let's <span>Connect</span></h3>
                <p className='text-justify leading-7'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Voluptas maxime numquam velit explicabo et fuga inventore 
                     modi doloribus, quo autem eos animi alias in asperiores nam voluptates.
                      Accusantium, assumenda veniam?
                </p>

            </div>
            <div className='flex mt-10 items-center gap-7'>
                <div className='bg-[#171717]/40 p-5 rounded-lg '>
                    <h3 className='2xl md:text-4xl font-semibold text-gray-200'>11 <span>+</span></h3>
                    <p className='text-xs md:text-base text-gray-200'>Projects</p>
                </div>
                <div className='bg-[#171717]/40 p-5 rounded-lg '>
                    <h3 className='2xl md:text-4xl font-semibold text-gray-200'>11 <span>+</span></h3>
                    <p className='text-xs md:text-base text-gray-200'></p>
                </div>
                


            </div>
        </div>
    </div>
  )
}

export default Contact
