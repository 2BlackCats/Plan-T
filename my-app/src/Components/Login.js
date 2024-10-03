import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext.js';
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // ... rest of submit logic ...
        if (username === 'admin' && password === 'admin') {
            alert('Login Successful!');
            setUser(username);
            navigate(`/user/${username}`);
        }
        else {
            alert('Invalid Credentials!');
        }
    };

    return (
        <div className='custom-container' style={{ flexDirection: "row" }}>
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
            <div style={{ borderLeft: '1px solid #000', height: '25vw', alignSelf: 'center', margin: '0 15px' }}></div>
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