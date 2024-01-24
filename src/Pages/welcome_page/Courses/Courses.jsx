import React from 'react'
import course from './CoursesArr'
import CardImage from '../../../Component/CardWtihImage/CardImage'
import Heading from '../../../RepeatedCode/tags/Heading'

const Courses = () => {
  return (
    <>
    <Heading heading={"Placement Garuntee Course"} />
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
    {course.map((element, index)=>{
        return (
            <CardImage product={element} />
            )
        })}
  </div>
        </>
  )
}

export default Courses
