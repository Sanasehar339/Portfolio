import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(25)
    .required("Please fill the required fields"),
  lastName: Yup.string()
    .min(3)
    .max(25)
    .required("Please fill the required fields"),
  email: Yup.string().email().required("Please fill your email"),
  message: Yup.string().required("Please write your concern"),
});
