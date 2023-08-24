import React from 'react'
import Product from '../Product/Product.jsx'
import "./ProductList.scss"

export default function ProductList() {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className='p-title'>Create & inspire. It's lama</h1>
            <p className='p-desc'>
                Lama is a creative portfolio that your work  has been waiting for. 
                Beautiful homes, stunning portfolio styles & a whole lot more awaits inside. 
            </p>
        </div>
        <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        
        
        </div>
    </div>
  )
}
