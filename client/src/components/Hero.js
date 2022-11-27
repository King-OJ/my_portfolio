import React from 'react'
import heroImg from '../assets/hero_img.svg'
import { HiArrowDown, HiDownload } from "react-icons/hi"
import myresume from '../assets/myresume.pdf'


export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col md:flex-row w-full items-center">
        <div className="md:w-[50%] md:mr-8">
          <img src={heroImg} alt="web developer" className='p-3 md:p-1' />
        </div>

        <div className="md:ml-8 mt-12 text-center md:text-left md:w-[50%]">
          <h1 className='text-3xl md:text-4xl'>Hi, I'm a Fullstack Web Developer</h1>
          <div className='mt-6 text-xl max-w-md mx-auto md:mx-0 md:max-w-none'>I build functional web applications with MERN stack. Download my CV/Resume below <HiArrowDown className='inline-block ml-2 animate-bounce text-2xl'/></div>
          <div className='my-8 '>
            <a href={myresume} download className="bg-blue py-2 px-4 rounded hover:bg-opacity-75 transition-all duration-200 animate-pulse">Download Resume <HiDownload className="inline-block"/></a>
          </div>
        </div>
      </div>
    </section>
  )
}
