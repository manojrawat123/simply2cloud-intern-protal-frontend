import React from 'react'
import registerInputArr from './registerdata'
import generateValidationSchema from './registerValidationSchema'
import genrateInitalValues from '../../genrateInitialValues/InitialValues';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Register = () => {

    const validationSchema = generateValidationSchema(registerInputArr);
    const initialValues = genrateInitalValues(registerInputArr);
    return (
        <div>

            <div className="w-[100%] py-10 bg-blue-50">

                <div className="sm:w-[80%] w-[90%]  mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
                    <h2 className="bg-gray-100 text-blue-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Registeration Details</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={() => {
                            console.log("Student Registered");
                        }}
                        validationSchema={validationSchema}
                    >
                        {({ values, handleSubmit, resetForm, setFieldValue, handleBlur }) => (
                            <Form>

                                <div className="mb-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 p-4">

                                    {registerInputArr.map((element, index) => {

                                        if (element.type == "checkbox") {
                                            return (
                                                <div className='lg:col-span-3 sm:col-span-2 col-span-1'>
                                                    <Field
                                                        type={element.type}
                                                        name={element.name}
                                                        placeholder={element.placeholder}
                                                        required
                                                        className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                                    />
                                                    &nbsp;&nbsp;  <h4 className="text-blue-600 mb-2 inline-block mt-4">{element.placeholder} </h4>
                                                    <ErrorMessage name={element.name} component="div" className="text-red-500" />
                                                </div>
                                            )
                                        }
                                        return (
                                            <div className=''>
                                                <h4 className="text-blue-600 mb-2">{element.placeholder} <span className="text-red-500">*</span></h4>
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
                                                <ErrorMessage name={element.name} component="div" className="text-red-500" />
                                            </div>
                                        )
                                    })}

                                </div>
                                    <div className="mb-4 mx-5">
                                        <button
                                            type="submit"

                                            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                                        >
                                            Register
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

export default Register
