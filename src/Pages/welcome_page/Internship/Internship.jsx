import React from 'react'
import Card from '../../../Component/Card/Card'
import internships from './dummyinterndata'
import Heading from '../../../RepeatedCode/tags/Heading'

const Internship = () => {
  return (
    <>
    <Heading heading={"Welcome to Job Portals Of Simply 2 Cloud"} />
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
          internships.map((element, index) => {
            return (
              <Card internship={element} key={index} />
              )
            })
          }
      </div>
          </>
  )
}

export default Internship
