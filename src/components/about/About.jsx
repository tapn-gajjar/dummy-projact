
import React from 'react'
import "./about.scss"
import photographer from "../../img/photographer.jpg"
import Award from "../../img/award.png"
export default function About() {
  return (
    <div className="a">
        <div className="a-left">
          {/* <div className="a-card bg"></div> */}
            
            <div className="a-card">
                <img src={photographer} alt="" className='a-img'/>
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
           It is a long established fact that reader will be distracted by the readable content.
          </p>
          <p className='a-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi fugit consequuntur est iste ipsum repellendus, iure esse, modi sunt nulla accusamus hic cum possimus ex dignissimos natus beatae expedita nihil necessitatibus excepturi obcaecati ullam at? Recusandae praesentium sit assumenda laboriosam!</p>
          <div className="a-award">
            <img src={Award} alt="" className='a-award-img' />
            <div className="a-award-texts">
              <h4 className='a-award-title'>
                International Design Awarads 2021</h4>
              <p className='a-award-desc'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, saepe?  
              </p>

            </div>
            </div>        
        </div>
    </div>
  )
}
