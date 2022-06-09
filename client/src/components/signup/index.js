import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import "../login/login.css"

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Signup(){
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, {error}] = useMutation(ADD_USER);
    
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try{
          const  {data}  = await addUser({
            variables: {
              username: formState.username,
              email: formState.email,
              password: formState.password,
            }
         });
          console.log(data)
          Auth.login(data.addUser.token); 
        }catch(e){

        }
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
    return (
  <div className="logSign-container">
      <div className="logSign">
        <div className="logSign-items">
        <h1>Signup</h1>
        <Form onSubmit ={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="emailInput" type="username" name='email' placeholder="Enter email" value={formState.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control className="usernameInput" type="username" name='username' placeholder="Enter username" value={formState.username} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="passInput" type="password" name='password' placeholder="Password" value={formState.password} onChange={handleChange} />
            </Form.Group>
            <Button className='submitBtn' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <a href='/login'>Already have an account?</a>
        <a href='/'>Back to home</a>

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

export default Signup;