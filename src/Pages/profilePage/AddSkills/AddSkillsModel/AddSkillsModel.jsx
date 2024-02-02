import Modal from "react-modal";
import React from 'react'
import { Close } from "@mui/icons-material";
import AddSkillsForm from "./AddSkillsForm/AddSkillsForm";




const AddSkillsModel = (props) => {
    return (
        <>
            <Modal
                isOpen={
                    props?.isModalOpen
                }
                onRequestClose={() =>
                    props.setIsModalOpen(false)
                }
                style={{ border: "2px solid blue", borderRadius: "1rem" }}
            >

                <div style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    cursor: 'pointer',
                    
                }} onClick={()=>{
                    props.setIsModalOpen(false);
                }}
                className="hover:bg-red-500 hover:text-white text-red p-4">
                    <Close />
                </div>

                <AddSkillsForm setIsModalOpen={props.setIsModalOpen}/>

            </Modal>

        </>
    )
}

export default AddSkillsModel
