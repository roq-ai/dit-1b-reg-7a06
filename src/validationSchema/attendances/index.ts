import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  status: yup.string().required(),
  reason: yup.string().nullable(),
  student_id: yup.string().nullable().required(),
  class_id: yup.string().nullable().required(),
});
