import React from 'react';
import image2 from '../../assets/image2.png'
import './posibility.css';


const Posibility = () => {
  return (
    <div className='pikup__possibility section__padding' id='possibility'>
      <div className='pikup__possibility-image'>
        <img src={image2} alt="Possibility" />
      </div>
      <div className='pikup__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'> The Possibilities are Beyond your Imaginations</h1>
        <p>    Lorem ipsum dolor
     sit amet consectetur adipisicing elit. Commodi necessitatibus quis
      provident impedit, explicabo suscipit officiis nihil inventore libero architecto
       quibusdam, eius cum ab quas illo, temporibus 
    numquam iste iure.</p>
    <h4>Request for Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Posibility
