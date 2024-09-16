import React from 'react';
import { Form, Button } from 'react-bootstrap';
function Contact() {
    return (
        <div style={{ width: '100%', maxWidth: '550px', padding: '15px' }}>
            <h1>Contact Page</h1>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>

                <Button className='green-btn' variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;