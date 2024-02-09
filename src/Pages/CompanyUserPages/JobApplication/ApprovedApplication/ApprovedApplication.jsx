import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../../context';
import LoadingPage from '../../../Component/LoadingPage/LodingPage';
import NoDataPage from '../../../Component/NoDataPage/NoDataPage';
import InternJobAppliedCard from '../../BothUserPages/JobAppliedCard/JobAppliedCard';

const ApprovedApplication = () => {

    const { getJobApplicationFunc,approvedApplication } = useContext(DataContext);
    useEffect(()=>{
        getJobApplicationFunc("Accepted")
    },[])

    if(!approvedApplication){
        return <LoadingPage />
    }
  return (
    

    approvedApplication.length == 0 ? <div className='h-[75vh] flex items-center justify-center'> <NoDataPage domain={"Sorry No Canditate Applied"} /> </div>:
    approvedApplication.map((element, index)=>{
        return <div className='mx-[2rem] my-[2rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10'>
        <InternJobAppliedCard jobApplication={element} />
        </div>
    })
   
  )
}

export default ApprovedApplication
