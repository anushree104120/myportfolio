import React from 'react'
import './Experience.css'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Experience = () => {
  return (
    <>
    <div className=" exper" id="exp">
      <div className=" container work-exp">
      <h1 className="col-12 mt-3 mb text-center text-uppercase ed">Experience </h1> <hr></hr>
      <Timeline>
      <TimelineItem
    key="001"
    dateText="05/2023 – 07/2023"
    style={{ color: '#e86971' }}
  >
    <h3>Kravingo</h3>
    <h5>Frontend Developer Intern</h5>
    <p>
    • Develop and maintain responsive web pages using HTML, CSS, and JavaScript.<br></br>
• Implemented a cross-functional approach, working closely with designers and
back-end developers to provide better user experience
• Innovation in the development of functionality for web services
    </p>
   
  </TimelineItem>
  <TimelineItem
    key="001"
    dateText="05/2023 – 07/2023"
    style={{ color: '#e86971' }}
  >
    <h3>Ecell-IITH</h3>
    <h5>Campus Ambassdor</h5>
    <p>
    • Communication, interpersonal skills and time management<br></br>
• Teamwork, Leadership and Networkin
    </p>
   
  </TimelineItem>
      </Timeline>
        
      </div>

    </div>
      
    </>
  )
}

export default Experience
