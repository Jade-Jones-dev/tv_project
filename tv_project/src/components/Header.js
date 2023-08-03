import React from 'react'
import { PiTelevisionLight } from "react-icons/pi";
import FooterLinks from './FooterLinks';

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <PiTelevisionLight fontSize={'50px'}/>
        <h3>WatchItOnTVNow</h3>
        <FooterLinks/>
        </div>
        
  )
}

export default Header