import React from 'react'
import './Project.css'
import img1 from '../image/img1.png';
import Swing from 'react-reveal/Swing'
import appoint from '../image/image2.png'

const Project = () => {
  return (
    <>
    <div className="container project" id="projects">
    <h1 className="col-12 mt-3 mb text-center text-uppercase">Projects </h1> <hr></hr>
        <p className="pb-3  text-center ">
            ➡️ Top 3 projects with source code and live link
            
        </p>
        <div className="row" id="ads">
            <Swing>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">
                            Full Stack

                        </span>
                        <img src="https://media.licdn.com/dms/image/D5612AQGplp7JKG6Iiw/article-cover_image-shrink_720_1280/0/1673950361361?e=2147483647&v=beta&t=NxzErCoXqQ-xwkHJZZkKGKYNA21hJh3oNMUJzNKQr9M" alt="project1"/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Reactjs</span>
                        <span className="card-detail-badge">ContextAPI</span>
                        {/* <span className="card-detail-badge">Reactjs</span>
                        <span className="card-detail-badge">Reactjs</span> */}
                    </div>
                    <div className="card-body">
                        <div className="ad-title">
                            <h5 className="text-uppercase text-center">Expense Tracker</h5>
                        </div>
                        <a href="https://github.com/anushree104120/Expense-Tracker" className="ad-btn ">↗️Live Link</a>
                        {/* <a href="" className="ad-btn">Source Code</a> */}
                    </div>
                </div>
                
            </div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">
                            Full Stack

                        </span>
                        <img src="https://marketplace.canva.com/EAFkR-CN5yE/1/0/1600w/canva-teal-and-white-modern-client-testimonial-instagram-post-BeW8z1snumQ.jpg" alt="project1"/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Reactjs</span>
                        <span className="card-detail-badge">Carousels</span>
                        {/* <span className="card-detail-badge">Reactjs</span>
                        <span className="card-detail-badge">Reactjs</span> */}
                    </div>
                    <div className="card-body">
                        <div className="ad-title">
                            <h5 className="text-uppercase text-center">Testimonials</h5>
                        </div>
                        <a href="https://github.com/anushree104120/Testimonials" className="ad-btn ">↗️Live Link</a>
                        {/* <a href="" className="ad-btn">Source Code</a> */}
                    </div>
                </div>
                
            </div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">
                            Full Stack

                        </span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZWc_gFw0fsX4dWLpgUJorDbzt9JOR-JCyA&usqp=CAU" alt="project1"/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Reactjs</span>
                       
                        {/* <span className="card-detail-badge">Reactjs</span>
                        <span className="card-detail-badge">Reactjs</span> */}
                    </div>
                    <div className="card-body">
                        <div className="ad-title">
                            <h5 className="text-uppercase text-center">Meet Up</h5>
                        </div>
                        <a href="https://github.com/anushree104120/AppointmentFrontend" className="ad-btn ">↗️Live Link</a>
                        {/* <a href="" className="ad-btn">Source Code</a> */}
                    </div>
                    
                </div>
                
            </div>
            </Swing>
        </div>
        
        
    </div>
      
    </>
  )
}

export default Project
