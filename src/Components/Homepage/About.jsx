import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt="" />
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum error, dolore maxime culpa magnam eius.
                    Provident, laboriosam ab hic magni veritatis voluptates labore suscipit laudantium architecto aliquam reprehenderit
                    sed optio.</p>
                    <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About