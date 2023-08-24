import React from 'react'
import "./Contect.scss"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"

export default function Contect() {
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="phone" className='c-icon'/>
                        +91 9997776661
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="email" className='c-icon'/>
                        tapan.gajjar1@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="address" className='c-icon'/>
                        406 Sachet 4 Opp Balaji Garden Restaurant, Prenatirth Derasar, Main Road, Anand Nagar, Ahmedabad, Gujarat 380015
                    </div>
                </div>
            </div>
            <div className="c-right"> 
            <p className="c-desc">
                <b>What's your story?</b>
                Get in touch. Always available for freelancing if the right project comes along me.
            </p>  
            <form>
                <input type="text" placeholder='Name' name='user_name'></input>
                <input type="text" placeholder='Subject' name='user_subject'></input>
                <input type="text" placeholder='Email' name='user_email'></input>
                <textarea rows="5" placeholder='Message' name='message'></textarea>
                <button>Submit</button>
                
            </form>

            </div>
        </div>
    </div>
  )
}
