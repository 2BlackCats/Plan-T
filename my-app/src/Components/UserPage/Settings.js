import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Settings = () => {
    return (
        <Container className="custom-container">
            <h1 style={{ margin: "15px"}} >Settings</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className="green-btn" variant="success" type="submit">
                    Save
                </Button>
            </Form>
        </Container>
    );
};

export default Settings;