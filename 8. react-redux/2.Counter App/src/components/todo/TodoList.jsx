import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { EditTodoItem, RemoveTodoItem } from "../../helper/todo/TodoMessage";
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{todo.title}</td>
                    <td>{todo.status ? "active" : "pending"}</td>
                    <td>
                      <Button
                        variant="dark"
                        className="m-0 me-2"
                        onClick={() =>
                          EditTodoItem(index, todo.title, todo.status)
                        }
                      >
                        Edit Todo
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        className="m-0 me-2"
                        onClick={() => RemoveTodoItem(index)}
                      >
                        Remove Todo
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
