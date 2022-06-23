import React from 'react';
import "./aboutMe.css";
import Profile from "../../images/profile.png";

function AboutMe() {
  return (
    <div className='about_container' id='about-me'>
        <div className='profile-pic'>
            <img src={Profile} alt="person icon" />
        </div>
        <div className='about_text'>
            <h1>ABOUT ME</h1>
            <p>A software engineer with a legal and criminal justice education. I enjoy working with others to solve day-to-day problems through the art of coding and efficiency of technology.</p>
        </div>
    </div>
  )
}

export default AboutMe