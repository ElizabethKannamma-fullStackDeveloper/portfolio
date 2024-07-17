import React from 'react'
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import { Link } from "react-scroll"

function Header() {

  return (
    <>
      <header className='header'>
        <a className='logo' href="">Portfolio</a>
        <nav className='navbar'>
          <Link to="/" activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >Home</Link>
          <Link to="about" activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >About</Link>
          <Link activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >Skills</Link>
          <Link activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >Projects</Link>
          <a target='_blank' href="https://drive.google.com/file/d/1vlVDzHhl0vPcHrIag_P4JsYzSIAjXTky/view?usp=drive_link">Resume</a>
          <a href="">Contact</a>

        </nav>
      </header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>



    </>
  )
}

export default Header