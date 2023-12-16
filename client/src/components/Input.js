import React from 'react'


function Inputs({handleChange, value,title,name,color}) {
 
  return (
    <div>
      <label className='sidebar-label-container'>
        <input 
        onChange={handleChange} 
        type="radio" 
        name={name} 
        value={value}
         />
        <span className='checkmark' style={{backgroundColor:color}}></span>{title}
       
       </label>
    </div>
  )
}

export default Inputs