import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Addtodo } from "../../redux/features/todoSlice";

function CreateTodo() {
  const todoInput = useRef();
  const dispatch = useDispatch();
  return (
    <Container fluid>
      <Row>
        <Col md={10}>
          <input
            ref={todoInput}
            type="text"
            placeholder="Enter Your Todo"
            className="form-control"
          />
        </Col>
        <Col md={2}>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() =>
              dispatch(
                Addtodo({ title: todoInput.current.value, status: false }),
              )
            }
          >
            Add Todo
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateTodo;
