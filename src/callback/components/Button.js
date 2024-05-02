import React from "react";

function Button({ handleclick, text }) {
  console.log(`registerButton ${text}`);
  return (
    <>
      <button onClick={() => handleclick()}>{text}</button>
    </>
  );
}

export default React.memo(Button);
