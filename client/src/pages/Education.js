import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";


const Education = () => {
  return (
    <>
    <div className="container education" id="education">
    <h1 className="col-12 mt-3 mb text-center text-uppercase ed">Education Details </h1>

    
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background:"#d3e8f4", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #d3e8f4' }}
    date="2020 - present"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h4 className="vertical-timeline-element-title">Bachelor of Technology</h4>
    <h5 className="vertical-timeline-element-subtitle">RRIMT , Lucknow</h5>
    <p>
      CGPA: 8.65
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:"#d3e8f4", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #d3e8f4' }}
    date="2018 - 2019"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h4 className="vertical-timeline-element-title">Intermediate</h4>
    <h5 className="vertical-timeline-element-subtitle">R.K. Mission School, Ballia</h5>
    <p>
      Percentage: 94.2%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:"#d3e8f4", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #d3e8f4' }}
    date="2016 - 2017"
    iconStyle={{  color: '#fff',background: 'black', }}
    icon={<MdSchool />}
  >
    <h4 className="vertical-timeline-element-title">High School</h4>
    <h5 className="vertical-timeline-element-subtitle">Gyan Kunj Academy , Ballia</h5>
    <p>
      CGPA: 10
    </p>
  </VerticalTimelineElement>
    </VerticalTimeline></div>
      
    </>
  )
}

export default Education
