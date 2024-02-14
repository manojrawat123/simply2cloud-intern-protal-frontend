import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CircularProgress, Rating } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import generateValidationSchema from "../../../../../../Component/GenrateValidationSchema/genrateValidationSchema";
import genrateInitalValues from "../../../../../../Component/genrateInitialValues/InitialValues";
import API_BASE_URL from "../../../../../../config";
import { DataContext } from "../../../../../../context";
import internSkillInputArr from "./InSkillInpArr";
import Select from 'react-select';
import LoadingPage from "../../../../../../Component/LoadingPage/LodingPage";

const InternAddSkillsForm = (props) => {
  const validationSchema = generateValidationSchema(internSkillInputArr);
  const initialValues = genrateInitalValues(internSkillInputArr);
  const [addButton, setAddButton] = useState();

  const { profileFunc, userDetails } = useContext(DataContext);

  useEffect(() => {
    if (!userDetails) {
      profileFunc();
    }
  });

  if (!userDetails){
    return <LoadingPage />
  }


  return (
    <div>
      <div className="w-[100%] py-10 bg-blue-50">
        <div className="sm:w-[80%] w-[90%]  mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-blue-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">
            Add Skills
          </h2>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {

              setAddButton(true);
              values["intern"] = userDetails?.user_details.id;
              const token = Cookies.get("token");
              if (!isNaN(Cookies.get("profile_id"))) {
                values["profile_id"] = Cookies.get("profile_id");
              }
              const id = values["skill_name"].value;
              const skill_name = values["skill_name"].label;
              values["skill_name"] = skill_name;
              values["skill_id"] = id;
              axios
                .post(`${API_BASE_URL}/skills/`, values, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then(() => {
                  toast.success("Skill Added Sucessfully!", {
                    position: "top-center",
                  });
                  if(isNaN(Cookies.get("profile_id"))){
                    
                  }
                  profileFunc();
                  resetForm();
                  props.setIsModalOpen(false);
                })
                .catch((err) => {
                  toast.error("Internal Server Error", {
                    position: "top-center",
                  });
                  console.log(err);
                })
                .finally(() => {
                  setAddButton(false);
                });
              console.log(values);
            }}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleSubmit,
              resetForm,
              setFieldValue,
              handleBlur,
            }) => (
              <Form>
                <div className="mb-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
                  {internSkillInputArr?.map((element, index) => {

                    if (element.type == "dynamic") {
                      return (
                        <div className="" key={index}>
                          <h4 className="text-blue-600 mb-2">
                            {element.placeholder}
                            <span className="text-red-500">*</span>
                          </h4>
                          <div className={"w-full relative col-span-1 "}>
                            {element.icon}
                            <Select
                              name={element.name}
                              value={values[element.name]}
                              options={userDetails?.avaiable_skill?.map((av_skl, index) => {
                                return {
                                  value: av_skl.id,
                                  label: av_skl.name,
                                }
                              })}
                              onChange={(selectedOptions) => {
                                setFieldValue(element.name, selectedOptions);
                              }}
                              placeholder={element.placeholder}
                              required
                              className=""
                            />

                          </div>
                          <ErrorMessage
                            name={element.name}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      )
                    }
                    if (element.type == "select") {
                      return (
                        <div className="" key={index}>
                          <h4 className="text-blue-600 mb-2">
                            {element.placeholder}
                            <span className="text-red-500">*</span>
                          </h4>
                          <div className={"w-full relative col-span-1 "}>
                            {element.icon}
                            <Field
                              as="select"
                              name={element.name}
                              placeholder={element.placeholder}
                              required
                              className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            >
                              <option value="">Select Level </option>
                              {element.options?.map((elementOpt, index) => (
                                <option value={elementOpt} key={index}>
                                  {elementOpt}
                                </option>
                              ))}
                            </Field>
                          </div>
                          <ErrorMessage
                            name={element.name}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      );
                    }
                    return (
                      <div className="" key={index}>
                        <h4 className="text-blue-600 mb-2">
                          {element.placeholder}{" "}
                          <span className="text-red-500">*</span>
                        </h4>
                        <div className={"w-full relative col-span-1 "}>
                          {element.icon}
                          <Field
                            type={element.type}
                            name={element.name}
                            placeholder={element.placeholder}
                            required
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                        <ErrorMessage
                          name={element.name}
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mb-4 mx-5">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    {addButton ? (
                      <CircularProgress size={19} color="inherit" />
                    ) : (
                      "Add Skill"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default InternAddSkillsForm;
