import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("Hello"));
  // const accessFirstArrayElem = useState("Hello")[0];
  // const accessSecondArrayElem = useState("World")[1];
  // console.log(accessFirstArrayElem);
  // console.log(accessSecondArrayElem);

  //by convention we calling handler with 'set' prefix
  const [myStateValue, setMyStateValue] = useState("rrandom ttitle");

  const handleClick = () => {
    if (myStateValue === "rrandom ttitle") setMyStateValue("Value changed");
    else setMyStateValue("rrandom ttitle");
  };

  return (
    <React.Fragment>
      <h1>{myStateValue}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
