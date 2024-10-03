import React from 'react';
import { Form, Button } from 'react-bootstrap';
function Contact() {
    return (
        <div className='custom-container'>
            <h1 style={{ margin: "15px" }} >Contact Page</h1>
            <Form style={{ minWidth: "50vw" }}>
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