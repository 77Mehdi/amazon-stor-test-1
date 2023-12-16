import {FiHeart} from "react-icons/fi"
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

import React from 'react'
import "./Nav.css"

function Navigation({handelInputChange,query}) {
  return (
    <div>

      <nav>
          <div className='nav-container'>
            <input 
            onChange={handelInputChange}
            value={query}
            type='text' 
            className='serch-input'
            placeholder='Enter your search shoes'
            />

          </div>
          <div className="profil-container">
                 <a href="#"> <FiHeart className="nav-icons"/></a>
                 <a href="#"> <AiOutlineShoppingCart className="nav-icons"/></a>
                 <a href="#"> <AiOutlineUserAdd className="nav-icons"/></a>
          </div>
      </nav>
     
    </div>
  )
}

export default Navigation