import React from "react";
import "./App.css";
import CountUp from "react-countup";

function App() {
  return (
    <h1>
      <div className="App">
        <CountUp end={200} />
        <br />
        <CountUp end={200} duration={10} />
        <br />
        <CountUp start={700} end={1200} duration={5} />
      </div>
    </h1>
  );
}

export default App;
