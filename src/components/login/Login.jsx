import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss";



const loginSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string(),
})

const Login = () => (
    <div className="login container">
        <h1 class="text-center pt-5">Login</h1>
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
                    <label class="form-control-plaintext email" htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="Enter your email, please"
                        type="email"
                    />
                    <label class="form-control-plaintext password" htmlFor="password">Password</label>
                    <Field id="password" name="password" type="password" placeholder="Enter your password" />
                    <div>
                        <button class="button" type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
        <div class="newuser">
            <span class="text-info">
                New user?
                <a href="#/">Sign up now!</a>
            </span>
        </div>
    </div>
)


export default Login;

