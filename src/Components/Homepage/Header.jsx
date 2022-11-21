import React from 'react';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Scoffee</span> Aplikasi Learning Coffee Pilihan</h1>
            <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, perferendis laborum voluptates rem
             quisquam minima .</p>
             <a href='#' className='cv-btn'>Download</a>
        </div>

    </div>
  )
}

export default Header;