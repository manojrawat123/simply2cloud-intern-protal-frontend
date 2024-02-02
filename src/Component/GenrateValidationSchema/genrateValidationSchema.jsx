import * as Yup from 'yup';

const generateValidationSchema = (inputFields) => {
  let validationObject = {};

  inputFields.forEach((field) => {
    validationObject[field.name] = field.required
      ? Yup.string().required(`This Field is required`)
      : Yup.string();
    
    if (field.type === 'email') {
      validationObject[field.name] = validationObject[field.name].email('Invalid email');
    }

    if (field.type === 'checkbox') {
      validationObject[field.name] = Yup.boolean().oneOf([true], `You must be ${field.label || field.name}`);
    }

    if (field.name == "password2"){
      validationObject[field.name] = Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required(`${field.placeholder} is required`);
    }
    if (field.type == "url"){
     validationObject[field.name] = Yup.string().url('Please enter a valid URL').required('URL is required')
    }
  });

  return Yup.object().shape(validationObject);
};


export default generateValidationSchema;