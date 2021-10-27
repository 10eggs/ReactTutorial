import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    // let newPeople = people.filter((p) => p.id !== id);
    // setPeople(newPeople);
    setPeople(people.filter((p) => p.id !== id));
  };
  //React fragment shortcut<></>
  return (
    <>
      {people.map((p) => {
        const { id, name } = p;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeItem(id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear list
      </button>
    </>
  );
};

export default UseStateArray;
