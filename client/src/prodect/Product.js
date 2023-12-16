import React from 'react'
import "./Prodect.css" 
import {BrowserRouter ,Link, Route , Routes} from 'react-router-dom'




function Product({resolt}) {
  return (
    <div>
      

      <section className='card-container'>
      {resolt}
      </section>
      
       
    
      
    </div>
  )
}

export default Product