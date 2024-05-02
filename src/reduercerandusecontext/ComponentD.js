import React, { useContext } from "react";
import { CountContext } from "../App";

export default function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <>
      <h1>ComponentD - {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch("increase")}>
        increase
      </button>
      <button onClick={() => countContext.countDispatch("decrease")}>
        decrease
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>reset</button>
    </>
  );
}
