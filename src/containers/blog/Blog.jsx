import React from 'react';
import  {Article}  from '../../components';
import {blog1, blog2, blog3, blog4, blog5} from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='pikup__blog section__padding' id='blog'>
      <div className='pikup__blog-heading'>
        <h1 className='gradient__text'>Join Our Blog & Newsletters </h1>
      </div>
      <div className='pikup__blog-container'>
        <div className='pikup__blog-container_groupA'>
          <Article imgUrl={blog1} date='Jan 26, 2022' title='The Blue RainForest is a Boy'/>
        </div>
        <div className='pikup__blog-container_groupB'>
      <Article imgUrl={blog2} date='Jan 26, 2022' title='The Blue RainForest is a Boy'/>
      <Article imgUrl={blog3} date='Jan 26, 2022' title='The Blue RainForest is a Boy'/>
      <Article imgUrl={blog4} date='Jan 26, 2022' title='The Blue RainForest is a Boy'/>
      < Article imgUrl={blog5} date='Jan 26, 2022'title='The Blue RainForest is a Boy'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
