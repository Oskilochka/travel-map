import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { authInitialValues } from "./initialValues";
import { validationSchema } from "./validationSchema";
import { Button, TextField, Typography } from "@mui/material";


export interface AuthValues {
  email: string;
  password: string;
}

export const AuthComponent: React.FC = () => {
  const onSubmit = (values: AuthValues) => {
    // Handle form submission logic here
  };
  
  const validate = (values: AuthValues) => {
    // Implement form validation logic
  };
  
  const formik = useFormik<AuthValues>({
    initialValues: authInitialValues,
    onSubmit,
    validate,
  });
  
  return (
    <div>
      <React.Fragment>
        <form autoComplete="off" onSubmit={ formik.handleSubmit }>
          <Typography variant="h5" fontWeight={ 600 } mb={ 2 }>Login Form</Typography>
          <TextField
            label="Full Name"
            variant="outlined"
            color="primary"
            type="text"
            name="password"
            placeholder="John Doe"
            sx={ { mb: 3 } }
            fullWidth
            value={ formik.values.password }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            error={ formik.touched.password && Boolean(formik.errors.password) }
            helperText={ formik.touched.password && formik.errors.password }
          />
          <TextField
            label="Email Address"
            variant="outlined"
            color="primary"
            type="email"
            name="email"
            placeholder="john@johndoe.com"
            value={ formik.values.email }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            error={
              formik.touched.email && Boolean(formik.errors.email)
            }
            helperText={
              formik.touched.email && formik.errors.email
            }
            fullWidth
            sx={ { mb: 3 } }
          />
          <Button variant="contained" color="primary" type="submit" fullWidth size="medium"
                  disabled={ !formik.isValid }>
            Register
          </Button>
        </form>
      </React.Fragment>
      {/*<h2>Увійти / Зареєструватись</h2>*/ }
      {/*<Formik*/ }
      {/*  initialValues={ authInitialValues }*/ }
      {/*  validationSchema={ validationSchema }*/ }
      {/*  onSubmit={ handleSubmit }*/ }
      {/*>*/ }
      {/*  <Form>*/ }
      {/*    <div>*/ }
      {/*      <Field type="email" name="email" placeholder="Електронна пошта"/>*/ }
      {/*      <ErrorMessage name="email" component="div"/>*/ }
      {/*    </div>*/ }
      {/*    <div>*/ }
      {/*      <Field type="password" name="password" placeholder="Пароль"/>*/ }
      {/*      <ErrorMessage name="password" component="div"/>*/ }
      {/*    </div>*/ }
      {/*    <button type="submit">Увійти / Зареєструватись</button>*/ }
      {/*  </Form>*/ }
      {/*</Formik>*/ }
    </div>
  );
};
