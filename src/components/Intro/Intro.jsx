import React from 'react'
import './Intro.css';
import Image from "../../assets/second.png"

const Intro = () => {
  return (
    <>
    <div className="intro " name="section1">
        <section className='Intro-Text'>
            <div>
              <h1 id='text'>Hello, I Am <span id='name'>Mahaveer Singh</span></h1>
              <h1 id='heading-Text'>Frontend Developer</h1>
              <p id='Intro-para'>I am a passionate and skilled Frontend Developer with extensive experience in designing<br/>
             <span id='introPara'>and building dynamic, user-friendly, and visually appealing websites</span> </p>
            </div>

            <section id='btn'>
    <button className="hire">Hire me</button>
     <button className="resume">Resume
     <i class="fa-solid fa-arrow-down"></i>
     </button>
     </section>
        </section>
        <section className='Intro-Image transform transition-transform duration-800 hover:scale-115 w-2.5 h-60'>
         <img src={Image} alt="" className='  mix-blend-normal rounded-md  img' />
        </section>
    </div>
   

    </>
  )
}

export default Intro