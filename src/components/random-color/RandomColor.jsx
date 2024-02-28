import React, { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#123");

  function handleCreateRandomColor() {}

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "grid",
        justifyItems: "center",
      }}
    >
      <div>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      </div>
    </div>
  );
  //generic comments
}

// one more genric
// one more genric-27
// one more genric-28
