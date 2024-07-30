import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
      setNav(!nav);
  };

  const closeNav = () => {
      setNav(false);
  };
  
  const menuVariants = {
    open: {
        x: 0,
        transition: {
            stiffness: 20,
            damping: 15
        }
    },
    closed: {
        x: '-100%',
        transition: {
            stiffness: 20,
            damping: 15
        }
    }
  };
  return (
    <nav className='flex justify-between text-white py-8 md:py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>ToolVerse</span>
        </div>
        <ul className="hidden md:flex gap-8 mx-9">
          <Link className='cursor-pointer hover:font-bold transition-all' to='/'><li>Home</li></Link>
          <Link className='cursor-pointer hover:font-bold transition-all' to='/TodoList'><li>TodoList</li></Link>
          <Link className='cursor-pointer hover:font-bold transition-all' to='/Calculator'><li>Calculator</li></Link>
          <Link className='cursor-pointer hover:font-bold transition-all' to='/dictionary'><li>Dictionary</li></Link>
        </ul>

        <div onClick={toggleNav} className='md:hidden z-50 text-gray-200 pr-5'>
                        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </div>
                    <motion.div
                        initial={false}
                        animate={nav ? 'open' : 'closed'}
                        variants={menuVariants}
                        className='fixed left-0 top-0 w-full min-h-screen backdrop-blur-md z-40'
                    >
                        <ul className='font-semibold text-gray-100 text-4xl space-y-8 mt-24 text-center cursor-pointer'>
                        <li className='nav-item'><Link to='/' onClick={closeNav} smooth={true} offset={50} duration={500}>Home</Link></li>
                            <li className='nav-item'><Link to='/TodoList' onClick={closeNav} smooth={true} offset={50} duration={500}>ToDo List</Link></li>
                            <li className='nav-item'><Link to='/Calculator' onClick={closeNav} smooth={true} offset={50} duration={500}>Calculator</Link></li>
                            <li className='nav-item'><Link to='/dictionary' onClick={closeNav} smooth={true} offset={50} duration={500}>Dictionary</Link></li>
                        </ul>
                    </motion.div>
    </nav>
  )
}

export default Navbar