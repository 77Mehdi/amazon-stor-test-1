import React from 'react'
import "./sadbar.css"
import { SiShopify } from "react-icons/si";
import Catigory from './category/Catigory';
import Pric from './prics/Pric';
import Colors from './colors/Color';

function Saidbar({handelRadio}) {
  
  return (
    <div>
      <section className="sidebar">
        <div className='logo-container'>
          <h1 className='shping'><SiShopify /></h1>
        </div>
        <Catigory handleChange={handelRadio}/>
        <Pric handleChange={handelRadio}/>
        <Colors handleChange={handelRadio}/>
      </section>
     
    </div>
  )
}
export default Saidbar