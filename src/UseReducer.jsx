import React, { useReducer, useState } from "react";

// init State
const initState = 0;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("invalid action");
  }
};

export default function UseReducer() {
  const [count, setCount] = useReducer(reducer, initState)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>down</button>
      <button onClick={() => setCount(count + 1)}>up</button>
    </div>
  );
}
