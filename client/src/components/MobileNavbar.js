import React from 'react'

export default function MobileNavbar({mobileNav, setMobileNav}) {

  

  return (
    <aside className={mobileNav ? "mobile-nav w-screen" : "mobile-nav -ml-[400px]"} id="navbar">
      <nav className="mt-20 flex justify-center h-full">
        <ul className="space-y-16 font-bold tracking-widest text-2xl text-center">
          <li onClick={()=>setMobileNav(false)}><a href="#about">About</a></li>
          <li onClick={()=>setMobileNav(false)}><a href="#works">Works</a></li>
          <li onClick={()=>setMobileNav(false)}><a href="#skills">Skills</a></li>
          <li onClick={()=>setMobileNav(false)}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  )
}
