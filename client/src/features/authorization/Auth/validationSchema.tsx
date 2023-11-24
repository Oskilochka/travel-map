import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .strict(true)
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .strict(true)
    .min(6, "Password should contains more than 6 symbols.")
    .required("Password is required"),
});
