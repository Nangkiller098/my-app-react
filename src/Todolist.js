import React, { useState, createElement, useEffect } from "react";

function handleElement(props) {
  return <li>{props.lists}</li>;
}

const Todolist = () => {
  const [lists, setList] = useState();

  useEffect(() => {});
  return (
    <>
      <div>To Do List</div>
      <form action="post">
        <input type="text" placeholder="To Do List" value={lists} />

        <button onClick={() => handleElement}>Add List</button>
      </form>
      <li>{lists}</li>
    </>
  );
};

export default Todolist;
