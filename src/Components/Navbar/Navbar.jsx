import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoscoffee.png';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setnav(true);
        } else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
        <Link to={'/'} className='logo'>
            <img src={logo}/>
        </Link>
        <input type="checkbox" className='menu-btn' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/coffee'}>Coffee</Link></li>
            <li><Link to={'/edukasi'}>Edukasi</Link></li>
            <li><Link to={'/event'}>Event</Link></li>
            <li><Link to={'/'}>Download</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;
