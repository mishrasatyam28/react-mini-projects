import { useState } from "react";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";

function App() {
  return (
    <div>
      {/* Accordian component */}
      <Accordian />

      {/* Random Color Component */}
      <RandomColor />
    </div>
  );
}

export default App;
