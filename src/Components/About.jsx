import React from 'react';
import '../Styles/about.scss'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>ABOUT</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             In officiis cumque quidem porro, laboriosam, eum omnis, rerum dicta odit veritatis ab beatae quia.
              Quasi maxime architecto, iure aliquid deleniti corporis deserunt similique ipsum? Optio, nemo enim.
               Animi laboriosam aperiam eaque! Officia reprehenderit cum accusamus saepe voluptatum,
             repellendus ratione delectus odit.
          </p>
        </div>
        <div className="footer__section">
          <h3>CATEGORIES</h3>
          <ul>
            <li>Mern</li>
            <li>Android</li>
            <li>Full Stack Devloper</li>
            
          </ul>
        </div>
        <div className="footer__section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Contribute</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright © 2024 All Rights Reserved by Gauransh Kumar.</p>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaXTwitter/></a>
          <a href="#"><FaGithub/></a>
          <a href="#"><FaLinkedin/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
