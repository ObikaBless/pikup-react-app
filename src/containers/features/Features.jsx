import React from 'react';
import { Feature } from '../../components'
import './features.css';

const featuresData = [
  {
    title: 'Become a VIP',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam, eius cum ab quas illo, numquam iste iure. temporibus Commodi necessitatibus quis provident impedit, explicabo suscipit officiis nihil inventore libero architecto'

  },
  {
    title: 'Be an active Member',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam, eius cum ab quas illo, numquam iste iure. temporibus Commodi necessitatibus quis provident impedit, explicabo suscipit officiis nihil inventore libero architecto'

  },
  {
    title: 'Give us a 5 Star',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam, eius cum ab quas illo, numquam iste iure. temporibus Commodi necessitatibus quis provident impedit, explicabo suscipit officiis nihil inventore libero architecto'

  },
  {
    title: 'Testimonials',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam, eius cum ab quas illo, numquam iste iure. temporibus Commodi necessitatibus quis provident impedit, explicabo suscipit officiis nihil inventore libero architecto'

  },
]

const  Features = () => {
  return (
    <div className='pikup__features section__padding' id='features'>
      <div className='pikup__features-heading'>
         <h1 className='gradient__text'>
          The world is in your hands just make that call and get a Pikup at your service today! Make it Happen.
         </h1>
         <p>Very Easy to Get Started, Request a call NOW</p>
      </div>
      <div className='pikup__features-container'>
        {featuresData.map((item, index) =>(
          <Feature  title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
