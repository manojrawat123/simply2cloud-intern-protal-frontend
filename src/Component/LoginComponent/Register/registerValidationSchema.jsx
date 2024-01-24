import * as Yup from 'yup';

const generateValidationSchema = (inputFields) => {
  let validationObject = {};

  inputFields.forEach((field) => {
    validationObject[field.name] = field.required
      ? Yup.string().required(`${field.name} is required`)
      : Yup.string();
    
    if (field.type === 'email') {
      validationObject[field.name] = validationObject[field.name].email('Invalid email');
    }

    if (field.type === 'checkbox') {
      validationObject[field.name] = Yup.boolean().oneOf([true], `You must be ${field.label || field.name}`);
    }
  });

  return Yup.object().shape(validationObject);
};


export default generateValidationSchema;