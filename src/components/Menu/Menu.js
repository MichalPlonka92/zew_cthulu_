import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.scss';

const Menu = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleNavItemClick = () => {
        setIsExpanded(false);
    };

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Navbar bg="light" expand="lg" className={`menu ${isExpanded ? 'expanded' : ''}`}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Zew Cthulhu
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" onClick={handleNavItemClick}>
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/create-traveler">
                            Create traveler
                        </Nav.Link>
                        <Nav.Link as={Link} to="/traveler/123">
                            Traveler card
                        </Nav.Link>
                        <Nav.Link as={Link} to="/description">
                            Description
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
