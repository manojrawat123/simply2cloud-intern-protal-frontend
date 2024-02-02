import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../../context';
import LHeading from '../../../RepeatedCode/tags/LHeading';

const UserGreeting = (props) => {
    
  return (
    <div className='text-center text-gray-700 '>
      <LHeading heading={`👋 Hi ${props.user_detail?.name}`}/>
      <p className='font-semibold text-base'>Join Us And Build Your Carier</p>
    </div>
  )
}

export default UserGreeting
