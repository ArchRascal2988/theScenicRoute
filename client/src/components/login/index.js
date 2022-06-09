import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./login.css"
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
            variables:{
              username: formState.username,
              password: formState.password
            }
          });
          console.log(data);
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    

        setFormState({
          email: '',
          password: '',
        });

      };

    return (
    <div className="logSign-container">
    <div className="logSign">
    <div className="logSign-items">
        <h1>Login</h1>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>

                <Form.Control className="usernInput" type="username" name='username' placeholder="Enter username" value={formState.username}

                  onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control className="passInput" type="password" name='password' placeholder="*****" value={formState.password}
                  onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <div className="links">
        <a href='/signup'>Dont have an account?</a>
        <a href='/'>Back to home</a>
        </div>
        {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            </div>
    </div>
    </div>
  )
}

export default Login;