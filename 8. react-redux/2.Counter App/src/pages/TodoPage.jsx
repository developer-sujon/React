import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";
function TodoPage() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h2>Todo List</h2>
            </Card.Header>
            <Card.Body>
              <CreateTodo />
              <TodoList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoPage;
