import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
// empty array is sign that we are using useEffect only once
// we can pass some value to the array - it allow us to invoke useEffect when passed value will be changed
// we call it 'dependency'
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEfect");
    if (value >= 1) document.title = `Changed by useEffect ${value}`;
  }, [value]);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button class="btn" onClick={() => setValue(value + 1)}>
        click
      </button>
    </>
  );
};

export default UseEffectBasics;
