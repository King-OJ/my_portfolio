import React from 'react'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader text="My Skills" />

      <div className="mt-10">
        <div className="p-2 border border-blue text-center max-w-md mx-auto">HTML / CSS / JAVASCRIPT </div>
        <div className="mx-auto w-1 bg-blue h-16 my-1"></div>

        <div className="p-2 border border-blue text-center max-w-md mx-auto">REACT JS / REACT-REDUX / REDUX TOOLKIT</div>
        <div className="mx-auto w-1 bg-blue h-16 my-1"></div>

        <div className="p-2 border border-blue text-center max-w-md mx-auto">NODE JS / EXPRESS / MONGO DB</div>
        <div className="mx-auto w-1 bg-blue h-16 my-1"></div>
        
        <div className="p-2 border border-blue text-center max-w-md mx-auto"> POSTMAN / MONGOOSE</div>
        <div className="mx-auto w-1 bg-blue h-16 my-1"></div>

        <div className="p-2 border border-blue text-center max-w-md mx-auto"> TAILWINDCSS / STYLED COMPONENTS / SCSS / AXIOS / CONTEXT API </div>
        <div className="mx-auto w-1 bg-blue h-16 my-1"></div>

        <div className="p-2 border border-blue text-center max-w-md mx-auto"> GITHUB</div>
        

      </div>
    </section>
  )
}
