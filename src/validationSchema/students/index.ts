import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  date_of_birth: yup.date().required(),
  gender: yup.string().required(),
  class_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
