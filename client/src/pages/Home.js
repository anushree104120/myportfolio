import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <>
    <div className="container-fluid home-container" id="home">
      <div className="container home-content">
        <h1>Hi👋 , I'm </h1>
        <h2><Typewriter
  options={{
    strings: ["Anu Shree Gupta","MERN STACK DEVELOPER !!"],
    autoStart: true,
    loop: true,
  }}
/></h2>
      </div>
      <div className="btn-group">
        <button className="btn btn-hire">Hire me</button>
        <a href="https://drive.google.com/file/d/19dUgesf6HOfsBONBwvX4yDMM78cShIcR/view?usp=sharing"className="btn btn-cv">My Resume</a>
      </div>
    </div>
      
    </>
  )
}

export default Home
