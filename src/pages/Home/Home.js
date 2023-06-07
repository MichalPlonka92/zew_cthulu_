import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Example from "../../components/Example/Example";
import Container from "react-bootstrap/Container";

const Home = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm>1 of 3</Col>
                <Col sm xs={6}>
                    It's home page with example component
                    <Example/>
                </Col>
                <Col sm>3 of 3</Col>
            </Row>
        </Container>
    );
};

export default Home;