import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Ms. <span className='footer-heading'>portfolio</span></h2>

        <div className="footer-socials">
            <a href="https://wa.me/+91"><i   class="fa-brands fa-whatsapp" id="wh"></i></a>
            <a href="https://www.instagram.com/lozer_bravo" > <i class="fa-brands fa-instagram" id="in"></i></a>
            <a href="https://www.snapchat.com/add/manohar_8552" ><i class="fa-brands fa-snapchat" id="sn"></i></a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Mahaveer Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
