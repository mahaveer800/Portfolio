import React from 'react';
import './Skill.css';
import LogoR from "../../assets/react-logo.jpg";
import LogoJs from "../../assets/js.jpg";
import LogoT from "../../assets/Tailwind.jpg";
import LogoCss from "../../assets/Css.jpg";
import LogoHTML from "../../assets/HTML.jpg";
import LogoC from "../../assets/One.jpg";

const Skill = () => {
  return (
    <>
    <div className="skill-Heading" name="section3">Skills</div>
    <div className="skill-text">I have a lot of experience in web development and I have worked with these technologies:</div>
    <section className="skill-sec1">
        <div className="skill1 transform transition-transform duration-500 hover:scale-110 ">
        <img src={LogoR} alt='Image' className='react-img' />
        </div>
        <div className="skill2 transform transition-transform duration-500 hover:scale-110">
        <img src={LogoJs} alt='Image' className='react-img' />

        </div>
        <div className="skill3 transform transition-transform duration-500 hover:scale-110">
        <img src={LogoT} alt='Image' className='react-img' />
        </div>
    </section>
    <section className="skill-sec2">
    <div className="skill4 transform transition-transform duration-500 hover:scale-110">
    <img src={LogoCss} alt='Image' className='react-img' />
    </div>
    <div className="skill5 transform transition-transform duration-500 hover:scale-110">
    <img src={LogoHTML} alt='Image' className='react-img' />
    </div>
    <div className="skill6 transform transition-transform duration-500 hover:scale-110">
    <img src={LogoC} alt='Image' className='react-img' />
    </div>
    </section>
    </>
  )
}

export default Skill
    