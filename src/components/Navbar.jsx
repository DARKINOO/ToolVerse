import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex justify-between text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>ToolVerse</span>
        </div>
        <ul className="flex gap-8 mx-9">
          <Link className='cursor-pointer hover:font-bold transition-all' to='/'><li>Home</li></Link>
          <Link className='cursor-pointer hover:font-bold transition-all' to='/TodoList'><li>TodoList</li></Link>
          <Link className='cursor-pointer hover:font-bold transition-all' to='/Calculator'><li>Calculator</li></Link>
          {/* <Link className='cursor-pointer hover:font-bold transition-all' to='/Weather'><li>SkySpy</li></Link> */}
          <Link className='cursor-pointer hover:font-bold transition-all' to='/dictionary'><li>Dictionary</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar