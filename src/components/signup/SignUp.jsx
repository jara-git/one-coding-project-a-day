import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import "./Signup.scss";

const signupSchema = Yup.object().shape({
    firstName: Yup.string().max(15, "must be maximun 15 characters")
        .required("Required"),
    lastName: Yup.string().max(15, "must be maximun 15 characters")
        .required("Required"),
    email: Yup.string().email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .required("Required")
        .min(8, 'at least 8 characters')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
})

const SignUp = () => {
    return (
        <div className="signup container">
            <h1 className="text-center pt-5 title">Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
            <div className="form-group">
                <Formik
                    initialValues={
                        {
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            repeatPassword: "",
                            checkbox: false,
                        }
                    }
                    validationSchema={signupSchema}
                    onSubmit={
                        async values => {
                            await new Promise(response => setTimeout(response, 500));
                            alert(JSON.stringify(values, null, 2))
                        }
                    }
                >
                    {
                        ({ errors, values, touched }) => (
                            <Form>
                                <label className="form-control-plaintext firstname" htmlfFor="firstName"><b>First Name</b></label>
                                <Field
                                    id="first name"
                                    name="firstName"
                                    placeholder="Enter your first name, please"
                                    type="text"
                                />
                                {
                                    errors.firstName ? (
                                        <div>
                                            {errors.firstName}
                                        </div>
                                    ) : null
                                }
                                <label className="form-control-plaintext lastname" htmlfFor="lastName"><b>Last Name</b></label>
                                <Field
                                    id="last name"
                                    name="lastName"
                                    placeholder="Enter your last name, please"
                                    type="text"
                                    required
                                />
                                {
                                    errors.lastName ? (
                                        <div>
                                            {errors.lastName}
                                        </div>
                                    ) : null
                                }
                                <label className="form-control-plaintext email" htmlfFor="email"><b>Email</b></label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email, please"
                                    type="email"
                                    required
                                />
                                {
                                    errors.email ? (
                                        <div>
                                            {errors.email}
                                        </div>
                                    ) : null
                                }
                                <label className="form-control-plaintext psw" htmlFor="password"><b>Password</b></label>
                                <Field
                                    name="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    required
                                />
                                {
                                    errors.password ? (
                                        <div>
                                            {errors.password}
                                        </div>
                                    ) : null
                                }
                                <label className="form-control-plaintext rpsw" htmlFor="repeatPassword"><b>Repeat Password</b></label>
                                <Field
                                    type="password"
                                    placeholder="Repeat Password"
                                    name="repeatPassword"
                                    required
                                />
                                {
                                    values.repeatPassword !== values.password && touched.repeatPassword ? (
                                        <div>
                                            must be the same value as password
                                        </div>
                                    ) : null
                                }
                                <label className="form-control-plaintext check">
                                    <Field
                                        type="checkbox"
                                        checked={values.checkbox}
                                        name="checkbox"
                                        value="false"
                                    />
                        Remember me
                        </label>
                                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                                <div class="clearfix">
                                    <button type="button" class="cancelbtn">Cancel</button>
                                    <button type="submit" class="signupbtn">Sign Up</button>
                                </div>

                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )

}
export default SignUp;
