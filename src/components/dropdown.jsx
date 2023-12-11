import React, { useState } from "react";
import statesData from "../data/states.json";

function Dropdown({ onStateChange }) {
  const [selectedState, setSelectedState] = useState("");

  const handleSelect = (event) => {
    setSelectedState(event.target.value);
    onStateChange(event.target.value);
  };

  return (
    <div>
      <select
        value={selectedState}
        onChange={handleSelect}
        name="state"
        id="state"
      >
        <option value="">Select a state</option>
        {statesData.map((state) => (
          <option key={state.abbreviation} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
