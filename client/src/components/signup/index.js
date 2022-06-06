import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

const Signup= ()=>{
    return (
        <div>
        <h1>Signup</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="emailInput" type="username" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control className="usernInput" type="password" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="passInput" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <a href='/login'>Already have an account?</a>
        <a href='/'>Back to home</a>
    </div>
  )
}

export default Signup;