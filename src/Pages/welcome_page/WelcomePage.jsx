import React, { useContext, useEffect } from 'react';
import Trending from './TrendingPage/Trending';
import Courses from './Courses/Courses';
import Internship from './Internship/Internship';
import { DataContext } from '../../context';
import SkeletonLoader from '../../Component/Loaders/SkeletonLoader';
import UserGreeting from './greeting_user/UserGreeting'

const WelcomePage = () => {
  const { profileFunc, userDetails } = useContext(DataContext);
    useEffect(()=>{
        profileFunc();
    },[])

    if (!userDetails){
      return <SkeletonLoader />
    }
  return (
    <div className='mx-8'>
    <UserGreeting user_detail={userDetails?.user_details}/>
    <Trending />
    <Internship />
    <Courses />    
    </div>
    
  )
}

export default WelcomePage
