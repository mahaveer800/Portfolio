import React from 'react'
import './Project.css';
import Image from "../../assets/restuarent.png";
import Wather from "../../assets/weather.png";
import Calculater from "../../assets/gym.png";

const Project = () => {
  return (
    <>
    <div className="Project-heading" name="section4"> My Project</div>
    <div className="project-text">Welcome to my web development portfolio! Explore a collection of my recent projects below.<br></br> </div>
    <p id='project-text'>Click on the project to learn more about the technologies used.</p>
    <section className="project-img">
      <div className="project-img1 transform transition-transform duration-500 hover:scale-110">
        <img src={Image} alt='Image'/>
        <h2 className='Project-text'>E.Restuarent Create by Using HTML , CSS JAVA Script 😺
        </h2>
      </div>
      <div className="project-img2 transform transition-transform duration-500 hover:scale-110">
      <img src={Wather} alt='Image' className='pro2-img '/>
    
           </div>
      <div className="project-img3 transform transition-transform duration-500 hover:scale-110">
      <img src={Calculater} alt='Image' />
      <h2 className='Project-text'> Gym web project Create by Using reactjs,tailwindCSS 😺 </h2>
      
            </div>

    </section>
    </>
  )
}

export default Project