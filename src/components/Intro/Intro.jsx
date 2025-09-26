import React from 'react'
import './Intro.css';
import Image from "../../assets/my-pick.png"

const Intro = () => {
  return (
    <>
    <div className="intro " name="section1">
        <section className='Intro-Text'>
            <div>
            <section className='Intro-Image '>
            <img src={Image} alt="" className='  mix-blend-normal rounded-md  img  transform transition-transform duration-800 hover:scale-110 w-2.5 h-60' />
        </section>

              <h1 id='text'>Hello, I Am <span id='name'>Mahaveer Singh</span></h1>
              <h1 id='heading-Text'>Frontend Developer</h1>
              <p id='Intro-para'>I am a passionate and skilled Frontend Developer with extensive experience in designing</p>
             <p id='introPara'>and building dynamic, user-friendly, and visually appealing websites</p> 
            </div>

            <section id='btn'>
    <button className="hire">Hire me</button>
    <a
  href="resume.pdf"
  download="Mahaveer_Singh_Resume.pdf"  
>
  <button className="resume">
    Resume
    <i className="fa-solid fa-arrow-down"></i>
  </button>
</a>


     </section>
        </section>
    </div>
   

    </>
  )
}

export default Intro