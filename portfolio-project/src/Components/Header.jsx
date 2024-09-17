import React from 'react'
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import { Link } from "react-scroll"
import Contact from './Contact';

function Header() {

  return (
    <>
      <header className='header'>
        <a className='logo' href="">Portfolio</a>
        <nav className='navbar'>
          <Link to="home" activeClass="active"
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
          <Link activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500} >Contact</Link>


          <a target='_blank' href="https://drive.google.com/file/d/13JC_BTTgk12yB-OBhjAu6zRD6v87QiOw/view?usp=sharings">Resume</a>

        </nav>
      </header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>



    </>
  )
}

export default Header