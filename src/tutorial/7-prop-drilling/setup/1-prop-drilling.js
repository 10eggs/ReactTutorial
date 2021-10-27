import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((p) => p.id !== id);
    });
  };
  return (
    <>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson}></List>
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((p) => {
        return <SinglePerson key={p.id} {...p} removePerson={removePerson} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div id={id} className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default PropDrilling;
