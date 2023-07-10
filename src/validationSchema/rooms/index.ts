import * as yup from 'yup';

export const roomValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  business_id: yup.string().nullable(),
});
