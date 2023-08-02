import React from 'react';

import FooterLinks from './FooterLinks';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <FooterLinks/>
        <h3>Created using the tvMaze API</h3>
    </div>
  )
}

export default Footer