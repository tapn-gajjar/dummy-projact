import React from 'react'
import "./Product.scss"
import image6 from "../../img/SiteSS/image2.png"
export default function Product() {
  return (
    <div className='p'>
        <div className="p-browser">
            <div className="p-circel"></div>
            <div className="p-circel"></div>
            <div className="p-circel"></div>
        </div>
        <a href="http://lama.dev" target="_black" rel='noreferrel'>
            <img src={image6} alt="" className='p-img'/>
        </a>
    </div>
  )
}
