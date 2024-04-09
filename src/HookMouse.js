import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Mouse Event");
    window.addEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div>
      <h1>
        x: {x} y: {y}
      </h1>
    </div>
  );
};

export default HookMouse;
