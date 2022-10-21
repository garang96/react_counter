import React, { Component, useState } from "react";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const styleButtons = {
    margin: 10,
  };

  return (
    <div className="col text-center">
      <p style={styleButtons}>
        Hey, increase or decrease the value using the buttons below
      </p>
      <h1>{counter}</h1>
      <button
        style={styleButtons}
        className="btn btn-primary btn-bg"
        onClick={increment}
      >
        +
      </button>
      <button
        style={styleButtons}
        className="btn btn-danger btn-bg"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};

export default App;
