
import React from 'react'

import './Techstack.css'
import { Techstacklist } from '../utils/Teckstacklist'
import Fade from 'react-reveal'

const Techstack = () => {
  return (
    <>
        <div className="container techstack" id="tech">
           
        <h1 className="col-12 mt-3 mb text-center">Teck Stack </h1> <hr></hr>
        <p className="pb-3  text-center">
            ➡️ Programming Languages , Frameworks , Databases , front-end and back-end , APIs
        </p>
        <div className="row">
            {Techstacklist.map((tech)=>(
                <Fade right>
                <div className="col-md-3">
                    <div className="card m-2">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex justify-content-center">
                                    <div className="align-self-center">
                                        <tech.icon className="tech-icon"/>
                                    </div>
                                    <div className="media-body">
                                        <h5>{tech.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            ))}
        </div>

        </div>
        
      
    </>
  )
}

export default Techstack

