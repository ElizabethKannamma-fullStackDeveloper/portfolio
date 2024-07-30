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
          <h4>Full Stack Developer!</h4>
          <p>Hello! I'm Elizabeth Kannamma, a passionate Full stack developer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Civil Engineering from Magna College of Engineering at chennai,India.Recently I switched my career in IT with GUVI.I am available for any kind of job opportunity that suits my interests.</p>
          <a href="" className='btn-box'>More About me</a>
        </div>

      </section>
    </>
  )
}

export default About