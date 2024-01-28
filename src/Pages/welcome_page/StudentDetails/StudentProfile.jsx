import React from 'react'
import StudentCard from '../../../Component/StudentCard/StudentCard'
import students from './StudentArr'
import Heading from '../../../RepeatedCode/tags/Heading'

const StudentProfile = () => {
    return (
        <>
            <Heading heading={"Top Students"} />
            <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                {
                    students.map((element, index) => {
                        return (
                            <StudentCard student={element} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default StudentProfile
