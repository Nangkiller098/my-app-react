import React, { useReducer } from "react";

const initiaState = {
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
      return initiaState;
    default:
      return state;
  }
};
function ReducerTwo() {
  const [count, dispatch] = useReducer(reducer, initiaState);
  return (
    <>
      <div>{count.fristCount}</div>
      <div>{count.secondCount}</div>
      <button onClick={() => dispatch({ type: "increase", value: 1 })}>
        Increasement
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
        Decerement
      </button>

      <button onClick={() => dispatch({ type: "increase2", value: 1 })}>
        Increasement2
      </button>
      <button onClick={() => dispatch({ type: "decrease2", value: 1 })}>
        Decerement2
      </button>

      <button onClick={() => dispatch({ type: "increase", value: 5 })}>
        Increasement 5
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 5 })}>
        Decerement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default ReducerTwo;
