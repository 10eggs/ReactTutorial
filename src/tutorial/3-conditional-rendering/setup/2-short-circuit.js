import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Uncle not null");
  const [isError, setIsError] = useState(false);
  //if false return 'hello world'
  const firstValue = text || "hello world";

  //if text - truthy then return 'hw'
  const secondValue = text && "hello world";

  const func = () => {
    return 10 + 10;
  };
  //forbidden
  // return <h2>{if(){console.log('something')}</h2>;
  return (
    <>
      <h1>{text || "Uncle Sam"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError ? (
        <h1>Error...</h1>
      ) : (
        <div>
          <h1>This is not an error</h1>
          <span>{func()}</span>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
