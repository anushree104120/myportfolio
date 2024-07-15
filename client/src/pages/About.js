import React from 'react'
import './About.css'
import profile from '../image/AnuShree.jpg'
import Jump from 'react-reveal/Jump'

const About = () => {
  return (
    <>
    <Jump>
    <div className="about" id="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img"> 
            <img src={profile} alt="pic"></img>
            </div>
            <div className="col-md-6  about-content">
                <h1>About me</h1>
                <p>
                Hello Everyone!!!!
                <br></br>
I am <b>Anu Shree Gupta</b>, an undergraduate computer science student from RRIMT. I am proficient in Data Structure and Algorithms. 
With a strong background in programming languages such as Core Java, Python, C, and C++, I have experience in Web development. 
With a growth mindset and a deep commitment to continuous learning, I am always seeking out new challenges and opportunities to expand my skills and knowledge.



                </p>
            </div>
        </div>
    </div>
    </Jump>
     
    </>
  )
}

export default About
