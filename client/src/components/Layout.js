import React,{useState} from 'react'
import Home from '../pages/Home'
// import { AiOutlineLeftCircle,AiOutlineRightCircle } from "react-icons/ai";
import { AiOutlineVerticalLeft,AiOutlineVerticalRight  } from "react-icons/ai";
import './Layout.css';
import Menu from './Menu';
// import About from '../pages/About';


function Layout() {
    const [toggle,setToggle ]= useState(true);

    const handtoggle = ()=>{
        setToggle(!toggle);
    }
  return (
   <>
       <div className="sidebar-section">
          <div className= {toggle ? "sidebar-toogle sidebar" :"sidebar"}>
            <div className="sidebar-toogle-icons">
                <p onClick={handtoggle}>
                    {
                        toggle? <AiOutlineVerticalRight size={30} /> : <AiOutlineVerticalLeft  size={30} />
                    }
                
                </p>
              </div>
              <Menu toggle={toggle}></Menu>
            </div>
        
          <div className="container">
            <Home/>

    
           </div>
        </div>



   </>
  )





}

export default Layout
