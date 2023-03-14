import React from 'react';
import './aboutMe.css';
import Profile from '../../images/profile.jpeg';

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div className="profile-pic">
        <img src={Profile} alt="person icon" />
      </div>
      <div className="about_text">
        <h1>ABOUT ME</h1>
        <p>
          Hello there! I'm passionate about leveraging my technical expertise
          and creativity to develop innovative software solutions that make
          everyday life easier. One of my top goals is to continually learn new
          technologies and programming languages, while also honing my
          problem-solving skills. When I'm not working on software projects, I
          enjoy practicing archery and meeting random strangers on the street in
          my city to socialize!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
