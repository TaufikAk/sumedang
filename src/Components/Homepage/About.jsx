import React from 'react'
import { useNavigate } from 'react-router-dom';

function About(props) {
  const navigate = useNavigate();
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt="" />
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
                <p>{props.content}</p>
                    <button onClick={()=>navigate("/download")}> {props.button} </button>
        </div>
    </div>
  )
}

export default About