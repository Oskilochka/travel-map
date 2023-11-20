import React from "react";
import { useFormik } from "formik";
import { Box, Button, Checkbox, InputLabel, TextField, Typography } from "@mui/material";
import * as Yup from "yup";

const MAXIMUM_PASSWORD_LENGTH = 30;
const MINIMUM_PASSWORD_LENGTH = 6;

export interface AuthValues {
  email: string;
  password: string;
}


interface ILoginValues {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

const loginValidationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .max(
        MAXIMUM_PASSWORD_LENGTH,
        `Maximum password length is ${ MAXIMUM_PASSWORD_LENGTH } characters`
      )
      .min(
        MINIMUM_PASSWORD_LENGTH,
        `Minimum password length is ${ MINIMUM_PASSWORD_LENGTH } characters`
      )
  });
};


export const AuthComponent: React.FC = () => {
  // const onSubmit = (values: AuthValues) => {
  //   // Handle form submission logic here
  // };
  //
  // const validate = (values: AuthValues) => {
  //   // Implement form validation logic
  // };
  //
  // const formik = useFormik<AuthValues>({
  //   initialValues: authInitialValues,
  //   onSubmit,
  //   validate,
  // });
  
  const handleSubmitForm = (loginFormikForm: any) => {
    const { email, password, keepLoggedIn } = loginFormikForm.values;
    alert(
      `email: ${ email }\npassword: ${ password }\nkeepLoggedIn: ${ keepLoggedIn }`
    );
  };
  
  // @ts-ignore
  const loginFormikForm = useFormik<ILoginValues>({
    initialValues: {
      email: "",
      password: "",
      keepLoggedIn: false
    },
    validationSchema: loginValidationSchema,
    onSubmit: () => handleSubmitForm(loginFormikForm)
  });
  
  return (
    // <Box display="flex" flexDirection="column">
    <form onSubmit={ loginFormikForm.handleSubmit }>
      <Box
        sx={ { display: "flex", flexDirection: "column" } }
      >
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="Email Address"
          value={ loginFormikForm.values.email }
          onChange={ loginFormikForm.handleChange }
          error={
            loginFormikForm.touched.email &&
            Boolean(loginFormikForm.errors.email)
          }
          helperText={
            loginFormikForm.touched.email && loginFormikForm.errors.email
          }
          margin="dense"
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={ loginFormikForm.values.password }
          onChange={ loginFormikForm.handleChange }
          error={
            loginFormikForm.touched.password &&
            Boolean(loginFormikForm.errors.password)
          }
          helperText={
            loginFormikForm.touched.password &&
            loginFormikForm.errors.password
          }
          margin="dense"
        />
      </Box>
      <Box display="flex">
        <InputLabel
          sx={ { fontSize: ".8rem", marginTop: "2vh", cursor: "pointer" } }
        >
          Keep me logged in
        </InputLabel>
        <Checkbox
          id="keepLoggedIn"
          name="keepLoggedIn"
          checked={ loginFormikForm.values.keepLoggedIn }
          onChange={ loginFormikForm.handleChange }
        />
      </Box>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
    // </Box>
  );
};
