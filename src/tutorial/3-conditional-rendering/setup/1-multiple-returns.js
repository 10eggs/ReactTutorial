import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) return resp.json();
        else {
          setLoading(false);
          setIsError(true);
          throw new Error("Cannot fetch data from the service", resp.status);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
        console.log(user);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Is loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
