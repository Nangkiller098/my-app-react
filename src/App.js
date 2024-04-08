import { useState } from "react";
import "./App.css";
import Stateobject from "./Stateobject";
import Todolist from "./Todolist";
import UseEffect from "./HookUseEffect";

function App() {
  const inistailState = 0;
  const [count, setCount] = useState(inistailState);
  const incrementfive = () => {
    for (let i = 0; i <= 5; i++) {
      setCount((pre) => pre + 1);
    }
  };
  return (
    <div className="App">
      {/* <div>Count:{count}</div>
      <button onClick={() => setCount(inistailState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increasement</button>
      <button onClick={() => setCount(count - 1)}>Decreement</button>
      <button onClick={incrementfive}>Increasement 5</button> */}
      {/* <Stateobject /> */}
      {/* <Todolist /> */}
      <UseEffect />
    </div>
  );
}

export default App;
