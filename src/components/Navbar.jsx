import React,{ useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='max-w-[1200px] bg-red-200 h-24 mx-auto flex justify-between items-center text-lg'>
        Navbar
    </div>
  )
}

export default Navbar