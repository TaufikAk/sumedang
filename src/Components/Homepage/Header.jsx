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
            <h1><span>Scoffee</span> - Sumedang Coffee</h1>
            <p className='details'>"Membumikan kopi dengan Scoffee - Aplikasi edukasi karya anak negeri"</p>
             <Link to={''} className='cv-btn'>Download</Link>
        </div>

    </div>
    <Feature/>
      <About image={aboutimage} title='Aplikasi lengkap para pecinta kopi!' button='Get The App' content='Scoffee, aplikasi tentang berbagi 
      dan edukasi kopi. Aplikasi lengkap yang mewadahi para pecinta kopi, penikmat kopi, dan para expertise di bidang kopi untuk saling 
      berbagi informasi yang menarik, membuka ruang dialog, berbagi pengalaman, cerita, dan membumikan kopi sebagai potensi besar milik 
      negeri.' />
      <Presentation/>
      <About image={aboutimage1} title='Download Sekarang dan Dapatkan Semuanya' button='Download' content='Informasi lengkap mengenai kopi, 
      edukasi dari para ekspertise di bidang kopi, dan informasi kegiatan bertemakan kopi. Semuanya dapat Anda dapatkan dan akses secara 
      mudah melalui Scoffee. Aplikasi edukasi karya anak negeri!' />
      {/* <Contact/> */}
    </>
  )
}

export default Header;