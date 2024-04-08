import React, { useState, createElement } from "react";

function handleElement(props) {
  return <li>{props.lists}</li>;
}

const Todolist = () => {
  const [lists, setList] = useState();
  const handleaddlist = (e) => {
    e.preventDefault();
    setList(e.target.value);
  };
  return (
    <>
      <div>To Do List</div>
      <form action="post">
        <input
          type="text"
          placeholder="To Do List"
          value={lists}
          onChange={handleaddlist}
        />
        <button onClick={() => handleElement}>Add List</button>
      </form>
      <li>{lists}</li>
      {/* {lists && createElement("li", { lists })} */}
    </>
  );
};

export default Todolist;
