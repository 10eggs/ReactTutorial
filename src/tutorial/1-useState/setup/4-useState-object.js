import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Tom",
    age: 24,
    message: "message from tom",
  });

  const changeMessage = () => {
    //it changes only message property of this object
    setPerson({ ...person, message: "my mess" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}></button>
    </>
  );
};

export default UseStateObject;
