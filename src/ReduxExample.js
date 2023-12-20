import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/index";
import { decrement } from "./actions/index";

function ReduxExample() {
  const myState = useSelector((state) => state.UpDown);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux - Example</h1>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(increment())}>Incerement</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default ReduxExample;
