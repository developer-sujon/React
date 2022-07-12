import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "../components/Counter";

const CounterPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Counter />
        </Col>
      </Row>
    </Container>
  );
};

export default CounterPage;
