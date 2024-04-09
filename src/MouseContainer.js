import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [displays, SetDisplays] = useState(true);
  return (
    <>
      <button onClick={() => SetDisplays(!displays)}>Toogle Display</button>
      {displays && <HookMouse />}
    </>
  );
};

export default MouseContainer;
