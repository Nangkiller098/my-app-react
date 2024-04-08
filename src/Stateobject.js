import React, { useState } from "react";

const Stateobject = () => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
  });
  return (
    <>
      <form action="">
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
        <select
          name="gender"
          id="gender"
          onChange={(e) => setName({ ...name, gender: e.target.value })}
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
      </form>
      <div>firstname {name.firstname}</div>
      <div>lastname {name.lastname}</div>
      <div>{name.gender}</div>
      <div>{JSON.stringify(name)}</div>
    </>
  );
};

export default Stateobject;
