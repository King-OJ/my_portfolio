import React from 'react'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about">
      <SectionHeader text="About Me" />

      <div className="text-center mt-2">
        <p className="leading-10">I'm Clement Ojiguo. I'm a MERN fullstack web developer who is passionate
        about technology. I write clean, industry standard and
        readable react and javascript codes to improve
        functionality and I always follow the docs. Having learnt
        from Top Professionals like John Smilga ( from Coding
        Addict), Javascript Mastery and Traversy media, I've
        stacked up hands-on experience with modern React
        Practices, TailwindCSS, SASS, Axios, Data Fetching,
        Database Query, SEO, React-Redux, and ES6 modern
        javascript practices</p>
      </div>
    </section>
  )
}
