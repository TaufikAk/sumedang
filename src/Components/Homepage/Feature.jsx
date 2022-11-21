import React from 'react';
import FeatureBox from './FeatureBox';
import Coffeebean from '../../images/coffeebeans.png';
import Edukasii from '../../images/edukasii.jpg';
import Eventi from '../../images/eventi.png';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
          <FeatureBox image={Coffeebean} title='Coffee' />
          <FeatureBox image={Edukasii} title='Edukasi' />
          <FeatureBox image={Eventi} title='Events' />
        </div>
    </div>
  )
}

export default Feature;