import React from "react";

import "./App.css";

const handleClick = (event) => {
  console.log("Clicked:", event.target.textContent);
};

const App = () => {
  return (
    <div className="calculator">
      <div className="calculator-container">
        <div>
          <h1>React Calculator</h1>
        </div>

        <div className="input-display">
          <input type="text" />
        </div>

        <div className="output-display"></div>

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
          <button onClick={handleClick} className="btn">
            C
          </button>
          <button onClick={handleClick} className="btn">
            0
          </button>
          <button onClick={handleClick} className="btn">
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
