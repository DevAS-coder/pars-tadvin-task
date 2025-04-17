import * as yup from 'yup'

export const studentSchema = yup.object({
  image: yup.string().notRequired().defined(),
  first_name: yup.string().required('Enter FirstName'),
  last_name: yup.string().required('Enter LastName'),
  national_code: yup
    .string()
    .matches(/^\d{10}$/, 'National Code Must Be 10 Digit')
    .required('Enter NAtional Code'),
  phone: yup
    .string().length(11)
    .matches(/^\d{11}$/, 'Phone Number Must Be 11 Number')
    .required('Enter Phone Number'),
  score: yup
    .number()
    .min(0, 'Score Cant Be less than 0')
    .max(20, 'Score Cant Be More than 20')
    .required('Enter Score'),
})
