import {About, Contact, Hero, Navbar, Works, Skills} from "./components";
import { BsArrowUpSquare } from "react-icons/bs";
import MobileNavbar from "./components/MobileNavbar";
import { useState } from "react";

export default function App() {

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
    <Navbar mobileNav={mobileNav} setMobileNav={setMobileNav}/>
    <div className="relative">
      <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <Hero />

    </div>
    <About />
    <Skills />
    <Works />
    <Contact />
    <a href="#header">
      <BsArrowUpSquare className="z-index-1 fixed bottom-2 right-6 text-5xl"/>
    </a>
    </>
  )
}

