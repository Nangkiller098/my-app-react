import React, { useReducer } from "react";

const inistailState = {
  fristCount: 0,
  secondCount: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, fristCount: state.fristCount + action.value };
    case "decrease":
      return { ...state, fristCount: state.fristCount - action.value };
    case "increase2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrease2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return inistailState;
    default:
      return state;
  }
};

function ReducerOne() {
  const [count, dispatch] = useReducer(reducer, inistailState);
  return (
    <>
      <div>{count.fristCount}</div>
      <div>{count.secondCount}</div>
      <button onClick={() => dispatch({ type: "increase", value: 1 })}>
        increase 1
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
        decrease1
      </button>
      <button onClick={() => dispatch({ type: "increase2", value: 1 })}>
        increase2
      </button>
      <button onClick={() => dispatch({ type: "decrease2", value: 1 })}>
        decrease2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default ReducerOne;
