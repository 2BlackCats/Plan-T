import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '660px', padding: '15px' }}>
            <div style={{ width: '100%', maxWidth: '330px', padding: '15px' }}>
                <h2>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>
                    <Button className="green-btn" variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div style={{ borderLeft: '1px solid #000', alignSelf: 'stretch', margin: '0 15px' }}></div>
            <div style={{ width: '100%', maxWidth: '330px', padding: '15px' , textAlign: 'center' , alignContent: 'center' }}>
                <h2>Create Account</h2>
                <Link to="/create-account">
                    <Button className="green-btn" variant="success">
                        Create Account
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Login;