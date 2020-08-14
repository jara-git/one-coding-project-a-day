import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";

const SignUp = () => {
    return (
        <div>Sign Up</div>
    )

}
export default SignUp;

// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//         errors.firstName = 'Must be 15 characters or less';
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//         errors.lastName = 'Must be 20 characters or less';
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
//     const passwordRegex = /(?=.*[0-9])/;
//     if (!values.password) {
//         errors.password = 'Required';
//     } else if (values.password.length < 8) {
//         errors.password = 'Must be 8 characters long';
//     } else if (!passwordRegex.test(values.password)) {
//         errors.password = "Invalid password. Must contain one number";
//     }

//     return errors;
// };