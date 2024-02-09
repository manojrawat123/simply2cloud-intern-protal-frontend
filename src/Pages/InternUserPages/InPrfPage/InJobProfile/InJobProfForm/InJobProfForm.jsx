import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CircularProgress, Rating } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import InternJobProfilieInputArr from "./InJobProfInpArr";
import generateValidationSchema from "../../../../../Component/GenrateValidationSchema/genrateValidationSchema";
import genrateInitalValues from "../../../../../Component/genrateInitialValues/InitialValues";
import { DataContext } from "../../../../../context";
import API_BASE_URL from "../../../../../config";


const InternJobProfileForm = () => {

  const validationSchema = generateValidationSchema(InternJobProfilieInputArr);
  const initialValues = genrateInitalValues(InternJobProfilieInputArr);
  const [addButton, setAddButton] = useState();
  const { userDetails, profileFunc } = useContext(DataContext);
  
  useEffect(()=>{
    if(!userDetails){
      profileFunc();
    }
  },[])

  const myCompleateJobProfileFunc = (values, { resetForm, setFieldValue }) => {
    setAddButton(true);
   let data = values;
    Object.entries(data).map(([key, item]) => {
      if (Array.isArray(item)) {
        if (key == "desc") {
          data[key] = item.map((element) => element.value).join("\n");
        }
        else {
          data[key] = item.map(element => element.value);
        }
      }
    });
    data["intern"] = Cookies.get("user");
    data["expected_salary"] = `${data.expected_salary}.00`
    data["job_categoery"] = data["job_categoery"].value

    
    const token = Cookies.get("token");
    axios
      .post(`${API_BASE_URL}/compleate-intern-job-profile/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        
        toast.success("Skill Added Sucessfully!", {
          position: "top-center",
        });
        profileFunc();
        resetForm();
      })
      .catch((err) => {
        toast.error("Internal Server Error", {
          position: "top-center",
        });
        console.log(err);
      })
      .finally(() => {
        setAddButton(false);
        setFieldValue("desc", []);
      });
    console.log(data);
  }


  return (
    <div>
      <div className="w-[100%] py-10 bg-blue-50">
        <div className="sm:w-[80%] w-[90%]  mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-blue-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">
           Compleate Profile
          </h2>
          <Formik
            initialValues={initialValues}
            onSubmit={myCompleateJobProfileFunc}
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
                <div className="mb-4 grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                  {InternJobProfilieInputArr.map((element, index) => {
                    if(element.type == "array"){
                      return (
                        <div className="" key={index}>
                        <h4 className="text-blue-600 mb-2">
                          {element.placeholder}
                          <span className="text-red-500">*</span>
                        </h4>
                        <CreatableSelect
                          isMulti
                          value={values[element.name]}
                          placeholder={element.placeholder}
                          options={values[element.name]}
                          onChange={(selectedOptions) => {
                            setFieldValue(element.name, selectedOptions);
                          }}
                          getOptionLabel={(option) => option.label}
                          getOptionValue={(option) => option.value}
                          formatCreateLabel={(inputValue) =>
                            `Add ${element.placeholder} : ${inputValue}`
                          }
                          isValidNewOption={(
                            inputValue,
                            selectValue,
                            selectOptions
                          ) =>
                            inputValue.trim() !== "" &&
                            !selectOptions.some(
                              (option) => option.label === inputValue
                            )
                          }
                        />
                        <ErrorMessage
                          name={element.name}
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      )
                    }

                    if(element.type == "dynamic"){
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
                                 noOptionsMessage={"Press Enter"}
                                 value={values[element.name]}
                                 options={userDetails?.available_categoery?.map(
                                   (skillElement, index) => {
                                     return {
                                       value: skillElement.id,
                                       label: skillElement.job_category,
                                     };
                                   }
                                 )}
                                 onChange={(selectedOptions) => {
                                  console.log(selectedOptions);
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
                            placeholder={element.name == 'title' ? element.helpingtext : element.placeholder}
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
  )
}

export default InternJobProfileForm
