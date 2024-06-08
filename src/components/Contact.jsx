import React from "react";

const Contact = () => {
  return (
    <div
      className="mt-24 px-6 max-w-[1000px] mx-auto grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <div>
        <div className="text-gray-300 my-3 p-2">
          <h3 className="text-4xl font-semibold mb-5">
            Let's <span>Connect</span>
          </h3>
          <p className="text-justify leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            maxime numquam velit explicabo et fuga inventore modi doloribus, quo
            autem eos animi alias in asperiores nam voluptates. Accusantium,
            assumenda veniam?
          </p>
        </div>
        <div className="flex mt-10 items-center gap-7">
          <div className="bg-[#171717]/40 p-5 rounded-lg ">
            <h3 className="2xl md:text-4xl font-semibold text-gray-200">
              11 <span>+</span>
            </h3>
            <p className="text-xs md:text-base text-gray-200">Projects</p>
          </div>
          <div className="bg-[#171717]/40 p-5 rounded-lg ">
            <h3 className="2xl md:text-4xl font-semibold text-gray-200">
              2 <span>+</span>
            </h3>
            <p className="text-xs md:text-base text-gray-200">Years Experience</p>
          </div>
          <div className="bg-[#171717]/40 p-5 rounded-lg ">
            <h3 className="2xl md:text-4xl font-semibold text-gray-200">
              20 <span>+</span>
            </h3>
            <p className="text-xs md:text-base text-gray-200">Happy Clients</p>
          </div>
        </div>
      </div>
      <form action='https://getform.io/f/panvdzja' method='POST' className='max-w-6xl p5 md:p-12' id='form'>
        <input
            type='text'
            id='name'
            placeholder='Your name ...'
            name='name'
            className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
        />
        <input
            type='email'
            id='email'
            placeholder='Your email ...'
            name='email'
            className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
        />
        <input
            type='textarea'
            id='textarea'
            cols='30'
            rows='4'
            placeholder='Your message ...'
            className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
        />
        <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
            Send Message
        </button>

      </form>
    </div>
  );
};

export default Contact;
