import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../../context';
import SkeletonLoader from '../../../Component/Loaders/SkeletonLoader';
import InternBasicDetail from './InBasicDetail/InBasicDetails';
import InternJobProfileDisplay from './InJobProfile/InJobProfileDis/InJobProfDis';
import InternSkills from './InSkills/InSkills';

const InternProfilePage = () => {

  const { profileFunc, userDetails } = useContext(DataContext);
  useEffect(() => {
    profileFunc();
  }, [])

  if (!userDetails) {
    return <SkeletonLoader />
  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 m-8'>
        <InternBasicDetail user_detail={userDetails?.user_details} />
        <InternJobProfileDisplay internJobProfileObj={userDetails?.intern_job_profile} />
      </div>
      <InternSkills skills={userDetails.skills_detail} />
    </>
  )
}

export default InternProfilePage
