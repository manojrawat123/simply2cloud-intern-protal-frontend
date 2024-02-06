import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../../context';
import SkeletonLoader from '../../../Component/Loaders/SkeletonLoader';
import InternBasicDetail from './InternBasicDetail/InternBasicDetails';
import InternSkills from './InternSkills/InternSkills';

const InternProfilePage = () => {

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

    <InternBasicDetail user_detail={userDetails?.user_details}/>
   </div>
    <InternSkills skills={userDetails.skills_detail}/>
   </> 
  )
}

export default InternProfilePage
