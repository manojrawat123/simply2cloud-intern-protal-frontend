import React from 'react';
import Trending from './TrendingPage/Trending';
import Courses from './Courses/Courses';
import Internship from './Internship/Internship';
import ProductSlider from '../../Component/Slider/Slider';
import StudentProfile from './StudentDetails/StudentProfile';

const WelcomePage = () => {
  return (
    <div className='mx-8'>
      
        <Trending />
      <Internship />
     <Courses />
      {/* <ProductSlider /> */}
      <StudentProfile />
      
    </div>
  )
}

export default WelcomePage
