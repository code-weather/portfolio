import React from 'react';
import './aboutMe.css';
// import Profile from "../../images/profile.jpeg";

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div className="profile-pic">
        {/* <img src={Profile} alt="person icon" /> */}
      </div>
      <div className="about_text">
        <h1>ABOUT ME</h1>
        <p>
          I aim to leverage my technical expertise and creativity to develop
          innovative software solutions that make everyday life easier. One of
          my objectives is to continuously learn new developing technologies and
          programming languages, while also improving my problem-solving skills.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
