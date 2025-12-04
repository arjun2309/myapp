import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increase") {
    return state + 1;
  }
  if (action.type === "decrease") {
    return state - 1;
  }
  if (action.type === "reset") {
    return 0;
  }
  return state;
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
