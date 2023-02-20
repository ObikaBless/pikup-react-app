import React from 'react';
import './header.css';
import image2 from '../../assets/image2.png'
const Header = () => {
  return (
    <div className='pikup__header section__padding' id='home'>
      <div className='pikup__header-content'>
        <h1 className='gradient__text'>
          Let's Meet your Satisfaction with a top class Beautiful Drive
          with Pikup!
        </h1>
        <p>
            Drive around at your Comfort at all locations with our private 
            cars and Taxis,
            we offer you the best and self comfort rides. 
            With Pikup! Our Customer Satisfaction is our Priority...
          </p>
        <div className='pikup__header-content__input'>
          <input type="text" placeholder='Enter Your Lacation' />
          <button type='button'>PIKUP NOW</button>
        </div>
      </div>
      <div className='pikup__header-image'>
          <img src={image2} alt="Ubber" />
        </div>
    </div>
  )
}

export default Header
