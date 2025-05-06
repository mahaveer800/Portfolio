import React from 'react'
import './About.css';
const About = () => {
  return (
    <>
     <div className="heading" name="section2">About Me</div>
     <div className="About-Text">
      <p>I am a Frontend Web Developer. I build projects using HTML, CSS, JavaScript, React, and TailwindCSS.<br></br> <span id='textPara' >I am always eager to learn new technologies and improve my skills
      </span>
      </p>
     </div>
     <section className='about-img'>
      <div className="language transform transition-transform duration-500 hover:scale-110">
        <h1>Languages</h1>
        <h3>React , Java Script ,Tailwind Css ,Css, HTML</h3>
      </div>
      <div className="Education transform transition-transform duration-500 hover:scale-110">
        <h1>Education</h1>
         <h3>BCA - Bachelor of <br/>Computer Applications</h3>
      </div>
      <div className="Project transform transition-transform duration-500 hover:scale-110">
        <h1>Projects</h1>
        <h3>Built more than 5 Projects</h3>
      </div>
     </section>

    </>
  )
}

export default About