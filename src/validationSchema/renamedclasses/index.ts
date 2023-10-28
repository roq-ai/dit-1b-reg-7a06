import * as yup from 'yup';

export const renamedclassValidationSchema = yup.object().shape({
  name: yup.string().required(),
  class_subject: yup.string().required(),
  grade: yup.number().integer().required(),
  room_number: yup.number().integer().required(),
  school_id: yup.string().nullable().required(),
  teacher_id: yup.string().nullable().required(),
});
