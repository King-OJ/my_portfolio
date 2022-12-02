import React from 'react'
import logo from '../assets/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar({mobileNav, setMobileNav}) {


  return (
    <header id="header" className="h-20 overflow-hidden bg-darkblue sticky z-30 top-0 flex items-center justify-between">
      <img src={logo} alt="Clem OJ" className="w-64" />
      <nav className='font-semibold mr-6'>
        <button className='z-20' onClick={()=> {setMobileNav(!mobileNav)}}>
          {mobileNav ? <VscChromeClose className="text-4xl font-bold md:hidden"/> : <HiMenuAlt3 className="text-4xl md:hidden" /> }
        </button>
        <ul className='hidden md:flex items-center space-x-8'>
          <li className='hover:border-b-2 border-purple transition-all duration-200'><a href="#about">About</a></li>
          <li className='hover:border-b-2 border-purple transition-all duration-200'><a href="#works">Works</a></li>
          <li className='hover:border-b-2 border-purple transition-all duration-200'><a href="#skills">Skills</a></li>
          <li className='bg-purple p-2 rounded-md hover:bg-opacity-75 transition-all duration-200'><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  )
}
