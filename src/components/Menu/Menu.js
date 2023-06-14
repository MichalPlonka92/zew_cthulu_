import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menu.scss';

const Menu = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(prevState => !prevState);
    };

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/create-traveler', label: 'Create traveler' },
        { to: '/traveler/123', label: 'Traveler card' },
        { to: '/traveler-list', label: 'Traveler list' }
    ];

    return (
        <Navbar bg="dark" expand="lg" className={`menu ${isExpanded && 'expanded'}`}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Zew Cthulhu
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" onClick={() => setIsExpanded(false)}>
                        {navItems.map(item => (
                            <Nav.Link as={Link} to={item.to} key={item.to}>
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
