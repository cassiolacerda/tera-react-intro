import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import IconButton from "@mui/material/IconButton";
import Bolt from "@mui/icons-material/Bolt";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [energy, setEnergy] = React.useState(false);
  const [velocity, setVelocity] = React.useState("slow");

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          data-energy={energy}
          data-velocity={velocity}
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <IconButton
          aria-label="Energy"
          size="large"
          onClick={() => setEnergy(!energy)}
          color={energy ? "secondary" : "default"}
        >
          <Bolt />
        </IconButton>

        <ToggleButtonGroup
          value={velocity}
          exclusive
          color="secondary"
          onChange={(event, newVelocity) => setVelocity(newVelocity)}
        >
          <ToggleButton value="slow">Slow</ToggleButton>
          <ToggleButton value="medium">Medium</ToggleButton>
          <ToggleButton value="fast">Fast</ToggleButton>
        </ToggleButtonGroup>
      </header>
    </div>
  );
}

export default App;
