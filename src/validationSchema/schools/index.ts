import * as yup from 'yup';

export const schoolValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  number_of_students: yup.number().integer().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
