import {About, Contact, Hero, Navbar, Works, Skills} from "./components";
import { BsArrowUpSquare } from "react-icons/bs";
import MobileNavbar from "./components/MobileNavbar";
import { useState } from "react";

export default function App() {

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <div className="relative h-full">
    <Navbar mobileNav={mobileNav} setMobileNav={setMobileNav}/>
    
    <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
   
    <Hero />
    <About />
    <Skills />
    <Works />
    <Contact />
    <a href="#hero" className="hidden md:block">
      <BsArrowUpSquare className="z-index-1 fixed bottom-2 right-6 text-5xl"/>
    </a>
    </div>
  )
}

