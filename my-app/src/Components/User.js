import React, { useState, useContext, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import  { UserContext } from './UserContext.js';
function User() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { username } = useParams();
    const [usernameState, setUsernameState] = useState(user);

    console.log(user);
    console.log(username);
    useEffect(() => {
        if (!user || user !== username) {
            navigate("/login");
        }
    }, [user, username]);  

    const Logout = () => {
        setUser("");
        navigate("/login");
    };
    
    return (

        <div>
            <div style={{ paddingTop: '56px'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                    <h1>Welcome {username}</h1>
                    <div>
                        <Button className='green-btn text-dark' style={{ margin: "3px" }} variant='success' onClick={() => navigate('')}>Home</Button>
                        <Button className='green-btn text-dark' style={{ margin: "3px" }} variant='success' onClick={() => navigate('settings')}>Settings</Button>
                        <Button className='text-white' style={{ margin: "3px" }} variant='danger' onClick={Logout}>Logout</Button>
                    </div>
                    
                </div>
            </div>
            <div className='custom-container'>
                <Outlet />
            </div>
        </div>
    );
}

export default User;