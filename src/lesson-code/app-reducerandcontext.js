import React, { useReducer } from "react";
import "./App.css";
import ComponentA from "./reduercerandusecontext/ComponentA";
import ComponentB from "./reduercerandusecontext/ComponentB";
import ComponentC from "./reduercerandusecontext/ComponentC";

export const CountContext = React.createContext();
const iniialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return iniialstate;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, iniialstate);
  return (
    <div className="App">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count ={count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
