import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
function Contact() {
    return (
        <section className='contact' id='contact'>
            <div className='contact-text'>
                <h2>Contact <span>Me</span></h2>
                <h4>Let's work Together</h4>
                <p></p>
                <div className='contact-list'>
                    <li><i><SendIcon/></i>elizabethkannamma@gmail.com</li>
                    <li><i><PhoneInTalkIcon/></i>8667646051</li>
                </div>
                <div className='contact-icons'>
                    <a href="https://www.linkedin.com/in/elizabeth-kannamma-100139292/"><LinkedInIcon /></a>
                    <a href="https://github.com/thisiskannamma"><GitHubIcon /></a>
                    <a href="elizabethkannamma@gmail.com"><MailIcon /></a>
                </div>
            </div>

<div className='contact-form'>
<form action="">
<input type="text" placeholder='Enter Your Name' required />
<input type="email" placeholder='Enter Your Email' required/>
<input type="text" placeholder='Enter Your Subject' />
<textarea name="" id="" cols={40} rows={10} placeholder='Enter Your Message'required></textarea>
<input type="submit"  className='send' />
</form>

</div>
        </section>
    )
}

export default Contact