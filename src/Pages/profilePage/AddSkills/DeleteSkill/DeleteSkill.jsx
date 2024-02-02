import { CircularProgress } from '@mui/material'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import API_BASE_URL from '../../../../config';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { DataContext } from '../../../../context';

const DeleteSkill = (props) => {
  const [deleteButton, setDeleteButton] = useState(false);
  const token = Cookies.get("token")
  const { profileFunc } = useContext(DataContext);
  const deleteSkillFunc = ()=>{
    setDeleteButton(true);
    axios.delete(`${API_BASE_URL}/skills/${props.selectedSkillObj.id}/`, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    }).then(()=>{
      profileFunc();
      toast.success("Skill Removed Sucessfully", {
        position : "top-center"
      })
      props.setShowConfirmDelete(false)
    }).catch((err)=>{
      toast.error("Internal Server Error", {
        position : "top-center"
      })
    }).finally(()=>{
      setDeleteButton(false);
    })
  }


  return (
   
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900  bg-opacity-75">
          <div className="bg-white p-4 rounded-lg">
            <p>{`Are you sure you want to delete the skill '${props.selectedSkillObj.skill_name}'?`}</p>
            <div className="text-center mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mx-2"
                onClick={deleteSkillFunc}
              >
                 {
                //  loadingButton ?
                //  <CircularProgress color="inherit" size={19}/>
                //  :
                 <>{deleteButton ? <>&nbsp;&nbsp; <CircularProgress size={19} color='inherit'/> &nbsp;&nbsp;</> : "Delete"} </>
                 } 
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mx-2"
                onClick={()=>{
                   props.setShowConfirmDelete(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div> 
        
  )
}

export default DeleteSkill