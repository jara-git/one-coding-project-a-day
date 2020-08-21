import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss";



const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .required("Required")
        .min(8, 'at least 8 characters')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
})


const Login = () => (
    <div className="login">
        <div className="container">
           
        <h1 className="text-center pt-5 title">Login</h1>
        <div className="form-group">
            <Formik
                initialValues={
                    {
                        email: "",
                        password: "",
                    }
                }
                validationSchema={loginSchema}
                onSubmit={
                    async values => {
                        await new Promise(response => setTimeout(response, 500));
                        alert(JSON.stringify(values, null, 2))
                    }
                }
            >
                <Form>
                    <label className="form-control-plaintext email" htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="Enter your email, please"
                        type="email"
                    />
                    <label className="form-control-plaintext password" htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password" />
                    <div>
                        <button className="button" type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
        <div class="newuser">
            <span class="text-info">
                New user?
                <Router>
                <Link to="/signup">Sign up now!</Link>
                </Router>
            </span>
        </div> 
        </div>
    </div>
)


export default Login;

