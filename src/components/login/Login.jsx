import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from "yup";
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss";
import { Button } from 'react-bootstrap';



const loginSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string(),
})

const Login = () => (
    <div className="login">
        <h1>Log in</h1>
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
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="Enter your email, please"
                        type="email"
                    />
                    <label class="form-control" htmlFor="password">Password</label>
                    <Field id="password" name="password" type="password" placeholder="Enter your password" />
                    <Button class="btn btn-primary" type="submit">Submit</Button>
                </Form>
            </Formik>
        </div>

        <div>
            <span>New user? Sign up now!</span>
        </div>
    </div>
)


export default Login;

