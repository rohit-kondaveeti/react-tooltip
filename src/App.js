import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
function App() {
  const [position, setPosition] = useState("top");

  const changeHandler = (position) => {
    setPosition(position);
  };

  return (
    <div className="tooltip_section">
      <h1>Select The Position of Hover</h1>
      <div className="position_btn">
        <button
          className={position === "top" ? "active" : ""}
          onClick={() => changeHandler("top")}
        >
          Top
        </button>
        <button
          className={position === "right" ? "active" : ""}
          onClick={() => changeHandler("right")}
        >
          Right
        </button>
        <button
          className={position === "bottom" ? "active" : ""}
          onClick={() => changeHandler("bottom")}
        >
          Bottom
        </button>
        <button
          className={position === "left" ? "active" : ""}
          onClick={() => changeHandler("left")}
        >
          Left
        </button>
      </div>
      <Tooltip
        title={`Thanks for hovering on ${position} position`}
        placement={position}
        componentsProps={{
          tooltip: {
            sx: {
              color: "#1976d2",
              backgroundColor: "aliceblue",
              fontSize: "20px",
              textAlign: "center",
            },
          },
        }}
        arrow
      >
        <Button>Hover Over Me</Button>
      </Tooltip>
    </div>
  );
}

export default App;
