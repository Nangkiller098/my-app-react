import React, { useState } from "react";
import Title from "./components/Title";
import Count from "./components/Count";
import Button from "./components/Button";

function ParentsComponents() {
  const [ages, setAges] = useState(25);
  const [salary, setSalary] = useState(300);

  const incrementAge = () => {
    setAges(ages + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 100);
  };
  return (
    <>
      <Title />
      <Count text={"Age"} count={ages} />
      <Button text={"IncrementAge"} handleclick={incrementAge} />
      <Count text={"Salery"} count={salary} />
      <Button text={"IncrementSalary"} handleclick={incrementSalary} />
      somnang
    </>
  );
}

export default ParentsComponents;
