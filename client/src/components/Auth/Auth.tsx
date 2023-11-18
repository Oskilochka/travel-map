import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {authInitialValues} from "./initialValues";
import {validationSchema} from "./validationSchema";


const AuthComponent: React.FC = () => {
    const handleSubmit = (values: any) => {
    };

    return (
        <div>
            <h2>Увійти / Зареєструватись</h2>
            <Formik
                initialValues={authInitialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <Field type="email" name="email" placeholder="Електронна пошта"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Пароль"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <button type="submit">Увійти / Зареєструватись</button>
                </Form>
            </Formik>
        </div>
    );
};
