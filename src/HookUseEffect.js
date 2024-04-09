import React, { useState, useEffect } from "react";

const HookUseEffect = () => {
  const [counts, setCount] = useState(0);
  const [names, setNames] = useState("");
  useEffect(() => {
    document.title = `your have click ${counts} times`;
  }, [counts]);
  return (
    <>
      <div>
        <input
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <button onClick={() => setCount(counts + 1)}>Click me {counts}</button>
        <div>{names}</div>
      </div>
    </>
  );
};

export default HookUseEffect;
