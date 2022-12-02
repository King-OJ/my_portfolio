import React from 'react'
import { SectionHeader, Work} from '../components'
import works from '../assets/data'


export default function Works() {
  return (
    <section id="works">
      <SectionHeader text="My Works" />

      <div className="mt-2 grid gap-6 grid-col md:grid-cols-2 lg:grid-cols-3">
      {works.map((work,i)=>{
        const {img, title, desc, live_link, code_link} = work
        return <Work 
        key={i} 
        img={img} 
        title={title} 
        desc={desc}
        live_link={live_link}
        code_link={code_link}
         />
      })}
      
      
      </div>
    </section>
  )
}
