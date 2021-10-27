import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  console.log(windowSize);

  const checkSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Use effect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log("render");
  return (
    <>
      <h2>useEffect cleanup</h2>;<h2>{windowSize} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
