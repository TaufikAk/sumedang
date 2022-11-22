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

    // const NavStyles = ({ isActive }) => {
    //     return {
    //         color: isActive ? '#FFFFFF' : '#BF8E2C',
    //         backgroundColor: isActive ? '#BF8E2C' : '#FFFFFF'
    //     }
    // }

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
<<<<<<< HEAD
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/coffee'}>Coffee</Link></li>
            <li><Link to={'/edukasi'}>Edukasi</Link></li>
            <li><Link to={'/event'}>Event</Link></li>
            <li><Link to={'/'}>Download</Link></li>
=======
            <li><Link to={'/'}  className="nav-link active">Home</Link></li>
            <li><Link to={'/'} className="nav-link">Coffee</Link></li>
            <li><Link to={'/'} className="nav-link">Edukasi</Link></li>
            <li><Link to={'/event'} className="nav-link">Event</Link></li>
            <li><Link to={'/'} className="nav-link">Download</Link></li>
>>>>>>> 403a736f8ff269619c055809add1bec8f08ceada
        </ul>
    </nav>
  )
}

export default Navbar;
