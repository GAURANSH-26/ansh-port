import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Profile from '../assets/profile.jpg';
import '../Styles/profilecard.scss';
import Arrow from "../assets/arrow.png";

const Profilecard = () => {
    return (
      <>
        <div>
          <div className='profile-card'>
            <div className="profile-img">
              <img src={Profile} alt="Profile" />
            </div>
            <h3>Ansh Singh</h3>
            <p>Developer</p>
            <img src={Arrow} alt="Arrow" />
            <p className='bio'>
              Hi, I'm Ansh, a passionate software developer with expertise in both mobile and web development.
              My experience spans a range of technologies and tools that empower me to build dynamic,
              high-quality applications.
            </p>
          </div>
          
          <Link to="/#contact" className="button">
            Get In Touch
            <span></span>
          </Link>
        </div>
      </>
    );
}

export default Profilecard;
