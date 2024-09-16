import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Layout() {

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (!event.target.closest('.navbar-toggler')) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);


    return (
        <div>
            <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} style={{ position: 'fixed' , backgroundColor: '#45f248' , width: '100%', top: 0, zIndex: 1}}  expand="lg">
                <Navbar.Brand className='text-success' as={Link} to="/">Plan-T</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                    <Nav.Link className="text-black" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="text-black" as={Link} to="/about">About</Nav.Link>
                    <Nav.Link className="text-black" as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link className="text-black" as={Link} to="/login">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' , paddingTop: '80px' }}>
            <Outlet />
            </div>
        </div>
    );
}

export default Layout;