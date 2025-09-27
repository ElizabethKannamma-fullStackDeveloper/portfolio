import React from 'react'
import "../App.css"
function About() {
  return (
    <>
      <section className='about' id='about'>
        <div className='about-img'>
          <img src="./image/portfolio.jpg" alt="loading...." />
        </div>
        <div className='about-text'>
          <h2>About <span>Me</span></h2>
          <h4>Civil Engineer!</h4>
          <p>Hello! I'm Elizabeth Kannamma, a Civil Engineer passionate about building design, structural planning, and construction management. Skilled in AutoCAD, Revit, and STAAD.Pro, I create precise building plans and structural designs. I’m eager to contribute to projects that combine innovation, quality, and safety.</p>
          <a href="" className='btn-box'>More About me</a>
        </div>

      </section>
    </>
  )
}

export default About