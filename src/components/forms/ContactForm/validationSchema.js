import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is Required!'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is Required!'),
  email: Yup.string()
    .email('Enter a Valid Email!')
    .required('Email is Required!'),
  message: Yup.string()
    .required('Message is Required!'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
})

export default validationSchema
