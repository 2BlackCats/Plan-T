import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleConfirmEmailChange = (event) => {
        setConfirmEmail(event.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email !== confirmEmail) {
            alert('Emails do not match!');
            return;
        }

        // ... rest of submit logic ...

        alert('Account has been created!');
        navigate('/login');
    };

    return (
        <div className="custom-container">
            <h2>Create Account</h2>
            <Form style={{ minWidth: "50vw" }} onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group controlId="formConfirmEmail">
                    <Form.Label>Re-enter Email</Form.Label>
                    <Form.Control type="password" value={confirmEmail} onChange={handleConfirmEmailChange} />
                </Form.Group>

                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={handleUsernameChange} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                </Form.Group>

                <Button className="green-btn" variant="success" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default CreateAccount;