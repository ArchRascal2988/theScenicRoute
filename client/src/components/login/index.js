import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import { useMutation } from '@apollo/client';
import {LOGIN_USER} from '../../utils/mutations';
import Auth from '../../utils/auth';


const Login= (props)=>{
    ////LOGIN FUNCTION
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };



    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    
        // clear form values
        setFormState({
          email: '',
          password: '',
        });
      };

    return (
    <div>
        <h1>Login</h1>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control className="usernInput" type="username" placeholder="Enter username" value={formState.username}
                  onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="passInput" type="password" placeholder="Password" value={formState.password}
                  onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <a href='/signup'>Dont have an account?</a>
        <a href='/'>Back to home</a>
    </div>
  )
}

export default Login;