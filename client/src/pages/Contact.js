import React from 'react'
import './Contact.css'
import contact from '../image/contact.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className="contact" id="contact">
        <div className="card  card0 border-0">
            <div className="row">
                <div className="col-md-6-lg-6 col-xl-6 col-sm-12">
                    <div className="card1">
                        <div className="row border-line">
                            <img src={contact} alt="contact  me" className="image"></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card border-0 px-4 py-5">
                    <div className="row">
                   
                        <div className="row">
                        <h6>Contact me
                        <a href="https://www.linkedin.com/in/anushree1414/"><FaLinkedin color="blue" size={30} className="ms-2" /></a>
                        <a href="https://github.com/anushree104120"><FaGithub color="black" size={30} className="ms-2"></FaGithub></a>
                        <a href="https://www.instagram.com/anu_shree_20?igsh=MWloejdnMzM2eDBsOA=="><FaInstagram color="pink" size={30} className="ms-2"></FaInstagram></a>

                        </h6>
                        

                        </div>
                        
                    
                    <div className="row px-3 mb-4">
                        <div className="line"/>
                            <small className="or text-center">OR</small>
                            <div className="line"/> 
                    </div>
                    <div className="row px-3">
                        <input type="text" placeholder="Enter your name" name="name" className="mb-3"/>
                       
                        
                    </div>
                    <div className="row px-3">
                        <input type="email" placeholder="Enter your email" name="email" className="mb-3"/>
                       
                        
                    </div>
                    <div className="row px-3">
                       <textarea type="text" placeholder="Write your message" name="message" className="mb-3"></textarea>
                       
                        
                    </div>
                    <div className="row px-3">
                        <button className="button" type="submit">SEND MESSAGE</button>
                    </div>

                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
      
    </>
  )
}

export default Contact
