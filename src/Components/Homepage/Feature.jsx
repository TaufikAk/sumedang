import React from 'react';
import FeatureBox from './FeatureBox';
import Coffeebean from '../../images/coffeebeans.png';
import Edukasii from '../../images/edukasii.jpg';
import Eventi from '../../images/eventi.png';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
          <FeatureBox image={Coffeebean} title='Coffee' content='Aplikasi Scoffee menyediakan berbagai macam informasi mengenai kopi 
              yang menjadi potensi berharga milik bangsa' />
          <FeatureBox image={Edukasii} title='Edukasi' content='Aplikasi Scoffee menjadi wadah berbagi dan edukasi yang informatif 
              antara pecinta kopi dan masyarakat luas' />
          <FeatureBox image={Eventi} title='Events' content='Aplikasi Scoffee menjadi tempat berbagi informasi kegiatan yang menarik 
              dan eksklusif mengenai kopi di daerah Sumedang' />
        </div>
    </div>
  )
}

export default Feature;