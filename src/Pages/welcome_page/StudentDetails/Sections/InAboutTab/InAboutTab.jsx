import React from 'react'
import API_BASE_URL from '../../../../../config'

const InAboutTab = ({internProfileFullDetails}) => {
  return (
    <div className="flex space-x-4 ">
    <div id="imageDiv">
      <img
        src={
          internProfileFullDetails?.profile_details.user_image != null
            ? `${API_BASE_URL}/${internProfileFullDetails?.profile_details.user_image}`
            : noUsr
        }
        alt={"loading..."}
        className="rounded-full md:h-[8rem] md:w-[8rem] w-[4rem] h-[4rem] object-contain border-4 border-solid border-white"
      />
    </div>
    <div>
      <div className="font-bold text-lg text-gray-700">
        {internProfileFullDetails?.profile_details?.intern?.name}
      </div>
      <div className="text-gray-600">
        <span>
          {
            internProfileFullDetails?.profile_details?.job_categoery
              ?.job_category
          }
        </span>{" "}
        <span>
          {
            internProfileFullDetails?.profile_details?.sub_categoery
              ?.sub_category_name
          }
        </span>
      </div>

{/*  */}
      <div>

      </div>
{/* Location */}
      <div>

      </div>
    </div>
  </div>
  )
}

export default InAboutTab