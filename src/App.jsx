import React, { useState } from "react";

import "./App.css";

const App = () => {
  // ---All hooks ---
  const [displayValue, setDisplayValue] = useState("");
  const [displayOutput, setDisplayOutput] = useState("");

  // ---All funct below---
  const handleClick = (event) => {
    // console.log("Clicked:", event.target.textContent);
    const value = event.target.textContent;
    setDisplayValue((prev) => prev + value);
  };

  const handleClear = (event) => {
    setDisplayValue("");
    setDisplayOutput("");
  };
  const handleCalculate = (event) => {
    // console.log(displayValue);
    let result = eval(displayValue);
    // setDisplayValue("");
    setDisplayOutput(result);
  };
  return (
    <div className="calculator">
      <div className="calculator-container">
        <div>
          <h1>React Calculator</h1>
        </div>

        <div className="input-display">
          <input type="text" value={displayValue} readOnly />
        </div>

        <div className="output-display">
          <input type="text" value={displayOutput} readOnly />
        </div>

        <div className="buttons-container">
          <button onClick={handleClick} className="btn">
            7
          </button>
          <button onClick={handleClick} className="btn">
            8
          </button>
          <button onClick={handleClick} className="btn">
            9
          </button>
          <button onClick={handleClick} className="btn">
            +
          </button>
          <button onClick={handleClick} className="btn">
            4
          </button>
          <button onClick={handleClick} className="btn">
            5
          </button>
          <button onClick={handleClick} className="btn">
            6
          </button>
          <button onClick={handleClick} className="btn">
            -
          </button>
          <button onClick={handleClick} className="btn">
            1
          </button>
          <button onClick={handleClick} className="btn">
            2
          </button>
          <button onClick={handleClick} className="btn">
            3
          </button>
          <button onClick={handleClick} className="btn">
            *
          </button>
          <button onClick={handleClear} className="btn">
            C
          </button>
          <button onClick={handleClick} className="btn">
            0
          </button>
          <button onClick={handleCalculate} className="btn">
            =
          </button>
          <button onClick={handleClick} className="btn">
            /
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default App;
