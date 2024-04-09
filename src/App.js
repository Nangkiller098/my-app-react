import React, { useState, useEffect } from "react";
import "./App.css";
// import Stateobject from "./Stateobject";
// import Todolist from "./Todolist";
// import UseEffect from "./HookUseEffect";
// import HookMouse from "./HookMouse";
// import MouseContainer from "./MouseContainer";
// import FetchData from "./FetchData";
import ComponentC from "./components/ComponentC";
import axios from "axios";
import FetchDataPage from "./contextApi/FetchDataPage";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const DateContext = React.createContext();
function App() {
  // const inistailState = 0;
  // const [count, setCount] = useState(inistailState);
  // const incrementfive = () => {
  //   for (let i = 0; i <= 5; i++) {
  //     setCount((pre) => pre + 1);
  //   }
  // };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      {/* <div>Count:{count}</div>
      <button onClick={() => setCount(inistailState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increasement</button>
      <button onClick={() => setCount(count - 1)}>Decreement</button>
      <button onClick={incrementfive}>Increasement 5</button> */}
      {/* <Stateobject /> */}
      {/* <Todolist /> */}
      {/* <UseEffect /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <FetchData /> */}
      {/* <UserContext.Provider value={"Heng"}>
        <ChannelContext.Provider value={"Somnang"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <DateContext.Provider value={data}>
        <FetchDataPage />
      </DateContext.Provider>
    </div>
  );
}

export default App;
