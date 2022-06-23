import React from 'react';
import "./header.css"
import Typed from 'react-typed';

function Header() {
  return (
    <div className='main-info'>
        <h1>Hello, I'm Jameson</h1>
        <Typed
        strings={[
            'Software Engineer',
            'JavaScript',
            'React',
            'Python',
            'Full-Stack Developer',
        ]}
            typeSpeed={40}
            backSpeed={50}
            loop
        />
    </div>
  )
}

export default Header