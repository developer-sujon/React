import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  custom,
  decrement,
  increment,
  reset,
} from "../redux/features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const nyNumber = useRef();

  return (
    <Card>
      <Card.Header className="bg-dark">
        <h3 className="text-light">Counter Applicaion</h3>
      </Card.Header>
      <Card.Body>
        <h2>{count}</h2>
        <Button onClick={() => dispatch(increment())}>+increment</Button>
        <Button
          onClick={() => dispatch(decrement())}
          variant="danger"
          className="mx-2"
          disabled={!count}
        >
          -decrement
        </Button>
        <Button onClick={() => dispatch(reset())} variant="warning">
          Reset
        </Button>

        <div className="my-3">
          <input ref={nyNumber} type="number" className="form-control mb-3" />
          <Button onClick={() => dispatch(custom(nyNumber.current.value))}>
            Set Custom
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Counter;
