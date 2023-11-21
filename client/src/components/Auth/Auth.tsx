import React from "react";
import { FormikFormProps, FormikHelpers, useFormik } from "formik";
import { Box, Button, Checkbox, InputLabel, TextField } from "@mui/material";
import { validationSchema } from "./validationSchema";

export interface AuthValues {
  email: string;
  password: string;
  keepLoggedIn?: boolean;
}

export const AuthComponent: React.FC = () => {
  const handleSubmitForm = (loginFormikForm: any ) => {
    const { email, password, keepLoggedIn } = loginFormikForm.values;
    alert(
      `email: ${ email }\npassword: ${ password }\nkeepLoggedIn: ${ keepLoggedIn }`
    );
  };
  
  const loginFormikForm: any = useFormik<AuthValues>({
    initialValues: {
      email: "",
      password: "",
      keepLoggedIn: false
    },
    validationSchema: validationSchema,
    onSubmit: () => handleSubmitForm(loginFormikForm)
  });
  
  return (
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
  );
};
