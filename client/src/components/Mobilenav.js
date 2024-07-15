import React from 'react'
import './Mobilenav.css'
import { BiMenu } from "react-icons/bi";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from 'react-scroll';
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useState } from 'react';

const Mobilenav = () => {
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!open);
    };

const handlemenuclicks=()=>{
    setOpen(false);
}


  return (
    <>
    <div className="mobile-nav">
        <div className="mobile-nav-header">
            {open?(
                <RiMenuUnfoldLine size={30} onClick={handleOpen} className="mob-nav-icon" />

            ):(
                <BiMenu  size={30} className="mob-nav-icon" onClick={handleOpen}/>
            )
            }
        
        <span className="mob-nav-title">My Portfolio</span>

        </div>
        {open && (
            <div className="mob-nav-menu">
            <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                  <Link to="home" spy={true} smooth offset={-100} duration={100} onClick={handlemenuclicks}>
                  <FcHome />Home
                  </Link>
                  </div>
                
                
                
                
    
                <div className="nav-link">
                <Link to="about" spy={true} smooth offset={-100} duration={100} onClick={handlemenuclicks}>
                <FcAbout />About
                </Link></div>
                <div className="nav-link">
                <Link to="education" spy={true} smooth offset={-100} duration={100} onClick={handlemenuclicks}>
                <FcReadingEbook />Education
                </Link></div>
                <div className="nav-link">
                <Link to="tech" spy={true} smooth offset={-100} duration={100} onClick={handlemenuclicks}>
                <FcBiotech />Tech Stack
                </Link></div>
                <div className="nav-link">
                <Link to="projects" spy={true} smooth offset={-100} duration={100} onClick={handlemenuclicks}>
                <FcVideoProjector />Projects
                </Link></div>
                <div className="nav-link">
                <Link to="exp" spy={true} smooth offset={-100} duration={100} onClick={handlemenuclicks}>
                <FcPortraitMode />Experience
                </Link></div>
                
                
                
                <div className="nav-link">
                <Link to="contact" spy={true} smooth offset={-100} duration={100} onClick={handlemenuclicks}>
                <FcBusinessContact />Contact
                </Link></div>
            </div>
           </div>
            </div>

        )}
        
    </div>
      
    </>
  )
}

export default Mobilenav
