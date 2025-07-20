import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from 'react-scroll'
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  const handleNavigation = (section) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If on home page, just scroll
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    closeMenu();
  };

  return (
    <div className="text-gray-200 max-w-[1200px] h-24 mx-auto flex justify-between items-center text-lg px-4 md:px-0 fixed top-0 left-0 right-0 z-50 bg-[#151515]/90 backdrop-blur-sm">
      <RouterLink to="/" className="text-3xl font-bold m-4">JAMES</RouterLink>

      <ul className="hidden md:flex">
        <li className="p-5">
          <button onClick={() => handleNavigation('portfolio')} className="hover:text-primary-color transition-colors">
            Portfolio
          </button>
        </li>
        <li className="p-5">
          <button onClick={() => handleNavigation('about')} className="hover:text-primary-color transition-colors">
            Experience
          </button>
        </li>
        <li className="p-5">
          <RouterLink to="/blog" className="hover:text-primary-color transition-colors">
            Blog
          </RouterLink>
        </li>
        <li className="p-5">
          <button onClick={() => handleNavigation('contact')} className="px-4 py-2 rounded-xl bg-primary-color hover:bg-opacity-80 transition-all">
            Contact
          </button>
        </li>
      </ul>

        <div onClick={handleNav} className='block md:hidden z-40'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'z-40 text-gray-300 fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#171717] ease-in-out duration-500'
            : 'fixed left-[-100%]'}>
                <RouterLink to="/" className="text-3xl font-bold m-4 block">JAMES</RouterLink>
        <ul className="p-8 text-2xl">
        <li className="p-5">
          <button onClick={() => handleNavigation('portfolio')} className="hover:text-primary-color transition-colors">
            Portfolio
          </button>
        </li>
        <li className="p-5">
          <button onClick={() => handleNavigation('about')} className="hover:text-primary-color transition-colors">
            Experience
          </button>
        </li>
        <li className="p-5">
          <RouterLink to="/blog" onClick={closeMenu} className="hover:text-primary-color transition-colors">
            Blog
          </RouterLink>
        </li>
        <li className="p-5">
          <button onClick={() => handleNavigation('contact')} className="px-4 py-2 rounded-xl bg-primary-color hover:bg-opacity-80 transition-all">
            Contact
          </button>
        </li>
      </ul>
        </div>
    </div>
  );
};

export default Navbar;