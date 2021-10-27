import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  console.log(useParams());
  const { id } = useParams();
  const [name, setName] = useState("default name");
  console.log(id);

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
};

export default Person;
