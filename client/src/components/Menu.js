import React from 'react'
import './Menu.css'
import profile from '../image/AnuShree.jpg'
// import { ImHome } from "react-icons/im";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from 'react-scroll';
import { Fade, Zoom } from 'react-reveal';

const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <Zoom>
        <div className="profile-pic">
        <img src={profile} alt="profile"></img>
       </div>

        </Zoom>
       <Fade left>
       <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
              <Link to="home" spy={true} smooth offset={-100} duration={100}>
              <FcHome />Home
              </Link>
              </div>
            
            
            
            

            <div className="nav-link">
            <Link to="about" spy={true} smooth offset={-100} duration={100}>
            <FcAbout />About
            </Link></div>
            <div className="nav-link">
            <Link to="education" spy={true} smooth offset={-100} duration={100}>
            <FcReadingEbook />Education
            </Link></div>
            <div className="nav-link">
            <Link to="tech" spy={true} smooth offset={-100} duration={100}>
            <FcBiotech />Tech Stack
            </Link></div>
            <div className="nav-link">
            <Link to="projects" spy={true} smooth offset={-100} duration={100}>
            <FcVideoProjector />Projects
            </Link></div>
            <div className="nav-link">
            <Link to="exp" spy={true} smooth offset={-100} duration={100}>
            <FcPortraitMode />Experience
            </Link></div>
            
            
            
            <div className="nav-link">
            <Link to="contact" spy={true} smooth offset={-100} duration={100}>
            <FcBusinessContact />Contact
            </Link></div>
        </div>
       </div>
       </Fade>
      

        </>

    ): (
       <>
        <div className="nav-items">
        <div className="nav-item">
       <div className="nav-link">
      
       <Link to="home" spy={true} smooth offset={-100} duration={100} size={30}>
              <FcHome />
              </Link></div>

            <div className="nav-link">
            <Link to="about" spy={true} smooth offset={-100} duration={100} size={60}>
            <FcAbout />
            </Link></div>
            <div className="nav-link">
            <Link to="education" spy={true} smooth offset={-100} duration={100}>
            <FcReadingEbook />
            </Link></div>
           
            <div className="nav-link">
            <Link to="tech" spy={true} smooth offset={-100} duration={100}>
            <FcBiotech />
            </Link></div>
            
            <div className="nav-link">
            <Link to="projects" spy={true} smooth offset={-100} duration={100}>
            <FcVideoProjector />
            </Link></div>
            <div className="nav-link">
            <Link to="exp" spy={true} smooth offset={-100} duration={100}>
            <FcPortraitMode />
            </Link></div>
            <div className="nav-link">
            <Link to="contact" spy={true} smooth offset={-100} duration={100}>
            <FcBusinessContact />
            </Link></div>
            </div>
            </div>
       </>

    )
    }
      
    </>
  );
};

export default Menu;
