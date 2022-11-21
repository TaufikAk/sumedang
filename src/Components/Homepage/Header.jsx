import aboutimage from '../../images/about.png';
import aboutimage1 from '../../images/download.png';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from './About';
import Contact from './Contact';
import Feature from './Feature';
import Presentation from './Presentation';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div id='main'>
        {/* <Navbar/> */}
        <div className='name'>
            <h1><span>Scoffee</span> Aplikasi Learning Coffee Pilihan</h1>
            <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, perferendis laborum voluptates rem
             quisquam minima .</p>
             <Link to={''} className='cv-btn'>Download</Link>
        </div>

    </div>
    <Feature/>
      <About image={aboutimage} title='Lengkap Dengan Fitur Forum Pecinta Kopi' button='Get The App' />
      <Presentation/>
      <About image={aboutimage1} title='Download Sekarang dan Dapatkan Semuanya' button='Download' />
      <Contact/>
    </>
  )
}

export default Header;