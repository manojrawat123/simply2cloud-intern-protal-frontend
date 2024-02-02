import React, { useContext, useEffect } from 'react'
import BasicDetail from './BasicDetail/BasicDetail'
import { DataContext } from '../../context';
import SkeletonLoader from '../../Component/Loaders/SkeletonLoader';
import AddSkill from './AddSkills/AddSkills';

const ProfilePage = () => {

    const { profileFunc, userDetails } = useContext(DataContext);
    useEffect(()=>{
        profileFunc();
    },[])

    if (!userDetails){
      return <SkeletonLoader />
    }
    
  return (
   <>
   <div className='grid grid-cols-1 md:grid-cols-2'>

    <BasicDetail user_detail={userDetails?.user_details}/>
   </div>
    <AddSkill skills={userDetails.skills_detail}/>
   </>
  )
}

export default ProfilePage
