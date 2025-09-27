import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" nav ">
        {/* Logo */}
     <div className="text-6xl font-bold">
  p<span className="align-sub text-blue-800 text-3xl">ortfolio</span>
</div>
        <div className="navbar hidden md:flex gap-6 font-medium">
          <Link to="section1" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Home</Link>
          <Link to="section2" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">About</Link>
          <Link to="section3" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Skill</Link>
          <Link to="section4" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Project</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Contact Image */}
          

          {/* Hamburger menu - mobile */}
          <div className="md:hidden flex items-center mr-4 pr-4 ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 text-2xl focus:outline-none"
            >
                         {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-gray-100 shadow-md flex flex-col items-center gap-4 py-4 animate-fadeIn">
          <Link to="section1" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="section2" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="section3" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600" onClick={() => setIsOpen(false)}>Skill</Link>
          <Link to="section4" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600" onClick={() => setIsOpen(false)}>Project</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
