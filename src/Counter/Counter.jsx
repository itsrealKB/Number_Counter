import React from "react";
import "./counter.css";

export default function Testing() {
  const [count, setCount] = React.useState(0);

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <div className="circle">
        {count}
        <button className="subtract btn" onClick={subtract}>
          -
        </button>
        <button className="add btn" onClick={add}>
          +
        </button>
        <button className="reset btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
