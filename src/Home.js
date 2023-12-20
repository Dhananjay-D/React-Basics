// useReducer implementation - for more refer to react documentation :

import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "incre") {
    return state + 1;
  } else if (action.type === "decre") {
    return state - 1;
  }
};

const initialState = 0;

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "incre" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decre" });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleIncrement}>Incerement</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
