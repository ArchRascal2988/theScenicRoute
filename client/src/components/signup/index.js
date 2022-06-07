import {React, useState }from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup= ()=>{
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
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
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
    
    return (
        <div>
        <h1>Signup</h1>
        <Form onSubmit ={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="emailInput" type="username" placeholder="Enter email" value={formState.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control className="usernInput" type="username" placeholder="Enter username" value={formState.username} onchange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="passInput" type="password" placeholder="Password" value={formState.password} onChange={handleChange} />
            </Form.Group>
            <Button className='submitBtn' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <a href='/login'>Already have an account?</a>
        <a href='/'>Back to home</a>
    </div>
  )
}

export default Signup;