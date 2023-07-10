import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  room_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
