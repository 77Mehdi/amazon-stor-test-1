import React from 'react'
import "./pric.css"
import Inputs from '../../components/Input'

function Pric({handleChange}) {

  return (
    <div className='ml'>
       <h2 className=' sidebar-title price-title'>Price</h2>
       <label className='sidebar-label-container '>
        <input
        onChange={handleChange} 
        type="radio" 
        name="test2" 
        value=""
         />
        <span className='checkmark'></span>All
       </label>
       <Inputs
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Inputs
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Inputs
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Inputs
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
       
    </div>
  )
}

export default Pric