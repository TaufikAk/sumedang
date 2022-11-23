import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

    const NavStyles = ({ isActive }) => {
        return {
            color: isActive ? '#FFFFFF' : '#BF8E2C',
            backgroundColor: isActive ? '#BF8E2C' : 'transparent'
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
        <Link to={'/home'} className='logo'>
            <img src={logo}/>
        </Link>
        <input type="checkbox" className='menu-btn' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><NavLink style={NavStyles} to={'/home'} >Home</NavLink></li>
            <li><NavLink style={NavStyles} to={'/coffee'}>Coffee</NavLink></li>
            <li><NavLink style={NavStyles} to={'/edukasi'}>Edukasi</NavLink></li>
            <li><NavLink style={NavStyles} to={'/event'}>Event</NavLink></li>
            <li><NavLink style={NavStyles} to={'/download'}>Download</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar;
