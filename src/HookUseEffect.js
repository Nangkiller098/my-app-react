import React, { useState, useEffect } from "react";

const HookUseEffect = () => {
  const [counts, setCount] = useState(0);
  useEffect(() => {
    document.title = `your have click ${counts} times`;
  });
  return (
    <>
      <div>
        <button onClick={() => setCount(counts + 1)}>Click me {counts}</button>
        <div>hellow</div>
      </div>
    </>
  );
};

export default HookUseEffect;
