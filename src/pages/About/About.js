import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const About = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm>1 of 3</Col>
                <Col sm xs={6}>
                    It's about page with example content
                </Col>
                <Col sm>3 of 3</Col>
            </Row>
        </Container>
    );
};

export default About;