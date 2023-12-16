import React from 'react'
import "./recomended.css"
import Button from '../components/Button'

function Recomended({handelButton}) {
  return (
    <div>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          <Button handelButton={handelButton} className='btns' value="" title="All Prodect"/>
          <Button  handelButton={handelButton} className='btns' value="Nike" title="Nike"/>
          <Button handelButton={handelButton} className='btns' value="Adidas" title="Adidas"/>
          <Button handelButton={handelButton} className='btns' value="Puma" title="Puma"/>
          <Button handelButton={handelButton} className='btns' value="Vans" title="Vans"/>
         
        </div>
      </div>

    </div>
  )
}

export default Recomended