import React, { useState } from 'react';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">MyLogo</div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>

        {/* Menu */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-6 text-white">
              <Link to="section1"  smooth={true} duration={500}>Home</Link>
                  <Link to="section2" smooth={true} duration={500}>About</Link>
                  <Link to="section3" smooth={true} duration={500}>Skill</Link>
                  <Link to="section4" smooth={true} duration={500}>Project</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
