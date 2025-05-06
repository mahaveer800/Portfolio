import React from 'react'
 import './Navbar.css';
 import { Link } from 'react-scroll';
 import Image from "../../assets/image1.png";

 const Navbar = () => {
  return (
     <>
     <div className="nav pt-4 ">
      <div className="img">Ms.
         <span className='logo-heading'>Portfolio</span>
       </div>
       <div className="navbar">
       <Link to="section1"  smooth={true} duration={500}>Home</Link>
       <Link to="section2" smooth={true} duration={500}>About</Link>
       <Link to="section3" smooth={true} duration={500}>Skill</Link>
       <Link to="section4" smooth={true} duration={500}>Project</Link>
      </div>
      <div className="contect">
       <button className="contact-button">
         <img src={Image} className='rounded-full h-16'/>
       </button>
       </div>
     </div>
    
     </>
   )
}

 export default Navbar


 
