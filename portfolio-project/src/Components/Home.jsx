import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
function Home() {

    return (
        <>
            <section className='home'>
                <div className='home-content'>
                    <h3>Hello,I'm </h3>
                    <h1>Elizabeth Kannamma  </h1>
                    <h3 style={{ color: "#0ef" }} className='text'>
                        <TypewriterComponent
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: ["Full stack Developer", "MERN stack Developer", "Engineer"]
                            }}
                        />
                    </h3>
                    <div className='home-link'>
                        <a target="_blank" href="https://www.linkedin.com/in/elizabeth-kannamma-100139292/"><LinkedInIcon /></a>
                        <a target="_blank" href="https://github.com/thisiskannamma"><GitHubIcon /></a>
                        <a target="_blank" href="elizabethkannamma@gmail.com"><MailIcon /></a>
                    </div>
                    <a target='_blank' href="https://drive.google.com/file/d/1fJkWvH2O8Ye3qrC9uo_OP6vTItIZJMCm/view?usp=sharing" className='btn-box'>Download CV</a>
                    <a href="#about" className='btn-box'>More About Me</a>
                </div>
            </section>

        </>
    )
}

export default Home