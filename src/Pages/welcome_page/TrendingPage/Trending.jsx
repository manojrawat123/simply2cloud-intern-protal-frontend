import React from 'react'
import trending from './trendingarr'
import Heading from '../../../RepeatedCode/tags/Heading'

const Trending = () => {
    return (

        <div className='flex justify-center'>
        <div className=''>
             <Heading heading={"Trending at Simply 2 Cloud"} />
            
            <div className='grid xl:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-10 '>
                {trending.map((element, index) => {
                    return <div key={index}>
                        <img src={element.image} alt="" class />
                    </div>
                })}
            </div>
        </div>
        </div>
    )
}

export default Trending
