import React from 'react';
import Trending from './TrendingPage/Trending';
import Heading from '../../RepeatedCode/tags/Heading';
import Courses from './Courses/Courses';
import Internship from './Internship/Internship';

const WelcomePage = () => {
  return (
    <div className='mx-8'>
      <div className='flex justify-center'>
        <Trending />
      </div>
      <Heading heading={"Welcome to Job Portals Of Simply 2 Cloud"} />
      
<Internship />
     <Courses />
    </div>
  )
}

export default WelcomePage
