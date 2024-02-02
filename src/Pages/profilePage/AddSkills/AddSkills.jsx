// AddSkill.js
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LHeading from '../../../RepeatedCode/tags/LHeading';
import { Rating } from '@mui/material';
import NormalH from '../../../RepeatedCode/tags/NormalH';
import { NavLink } from 'react-router-dom';
// import AddSkillModel from './AddSkillsModel/AddSkillsModel';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddSkillsModel from './AddSkillsModel/AddSkillsModel';
import DeleteSkill from './DeleteSkill/DeleteSkill';
import { ToastContainer } from 'react-toastify';

const AddSkill = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteSkillObj, setDeleteSkillObj] = useState();

  const skills = props.skills;

  return (
    <div className=" col-span-2">
      {/* Modal of Add Skills Form Modal */}
      <ToastContainer />
      <AddSkillsModel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* End Add Skill Form Modal */}

      <div className="text-blue-500 p-8 rounded-lg shadow-md text-left">
        <div className="mb-6  ">
          <NormalH heading={"Skill Info"} />
          { skills?.length == 0 ? <><div className="flex items-center justify-center h-[10rem]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2 text-gray-600">No Skills added !</h2>
                    <p className="text-gray-500">Sorry, there is no data to display.</p>
                </div>
            </div></> :   skills.map((element, index) => {
            return (
              <div key={index} className="flex items-center justify-between mb-2 border border-solid mt-4 p-4">
                <span className="text-blue-500 font-bold">{element.skill_name}</span>&nbsp;&nbsp;


                <span className="text-blue-500 font-bold">
                  <Rating name="size-medium" defaultValue={element.experience_level / 2} precision={0.5} readOnly />

                  {element.experience_level / 2}</span>&nbsp;&nbsp;
                <span className="text-blue-500 font-bold">{element.years_of_experience}++  Year Experience </span>&nbsp;&nbsp;
                <a target='_blank' href={`https://${element.portfolio_link}`} className="text-blue-500 font-bold underline">Portfolio</a>&nbsp;&nbsp;

                <span className="flex items-center">
                  <button className="mr-2">
                    &nbsp;&nbsp;&nbsp;&nbsp;  <EditIcon className="text-green-500" onClick={() => {
                      console.log("Edit Button");
                    }} />
                  </button>
                  <button
                    onClick={() => {
                      setDeleteSkillObj(element);
                      setShowConfirmDelete(true)
                    }}
                  >
                    <DeleteIcon className="text-red-500" />
                  </button>
                </span>
              </div>
            )
          })}

          <div className="flex justify-center items-center py-4">
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
              Add Skills
            </button>
          </div>
        </div>
      </div>


      {/* delete Modal  */}
      {showConfirmDelete && (
        <DeleteSkill setShowConfirmDelete={setShowConfirmDelete} selectedSkillObj={deleteSkillObj} />
      )}
      {/* End Delete */}

    </div>
  );
};

export default AddSkill;