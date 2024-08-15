import React from 'react'
import Box from '../assets/cube.png'
import { IoIosArrowRoundForward } from "react-icons/io";

import Idea from '../assets/idea.png';


const Homecard = () => {
  return (
    <div className='home-card'>
       <div className="intro">
       <h1>SOFTWARE</h1>
      <h1>DEVELOPER</h1>
      <div className="peragraph">
      <p>"Crafting seamless experiences through code and creativity." <img src={Idea} alt="" srcset="" /></p>
      
       </div>
      </div>
      <div className="home-cards">
        <div className="flex-card">
        <div className="card1">
          <img src={Box} alt="" srcset="" />
          <p>Android Development,<br /> Kotlin+Java, <br />Flutter</p>
          <button><IoIosArrowRoundForward/></button>
        </div>
        <div className="card2">
          <img src={Box} alt="" srcset="" />
              <p>Web Devlopment <br />Frontend <br />Backend</p>
          <button><IoIosArrowRoundForward/></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Homecard;
