import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="max-w-[1200px] bg-red-200 h-24 mx-auto flex justify-between items-center text-lg">
      <h1 className="text-3xl font-bold">J. DOE</h1>

      <ul className="hidden md:flex">
        <li className="p-5">
          <Link to="/about">About</Link>
        </li>
        <li className="p-5">
          <Link to="/about">Experience</Link>
        </li>
        <li className="p-5">
          <Link to="/about" className="px-4 py-2 rounded-xl bg-green-300">
            Contact
          </Link>
        </li>
      </ul>

        <div onClick={handleNav} className='block md:hidden z-40'>
            {nav ? <AiOutlineMenu size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'z-40 text-gray-300 fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#171717] ease-in-out duration-500'
            : 'fixed left-[-100%]'}>
        <ul className="p-8 text-2xl">
        <li className="p-5">
          <Link to="/about">About</Link>
        </li>
        <li className="p-5">
          <Link to="/about">Experience</Link>
        </li>
        <li className="p-5">
          <Link to="/about" className="px-4 py-2 rounded-xl bg-green-300">
            Contact
          </Link>
        </li>
      </ul>
        </div>
    </div>
  );
};

export default Navbar;