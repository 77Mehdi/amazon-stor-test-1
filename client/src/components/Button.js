import React from 'react'

function Button({ handelButton, value, title }) {
  return (
    <button 
      onClick={handelButton} 
      value={value} 
      className="btns">
      {title}
    </button> 

  )
}

export default Button