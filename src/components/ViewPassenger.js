import React from "react";

function ViewPassenger(props) {
  const onScreenChange = () => {
    props.onScreenChange("list");
  };
  return (
    <div>
      <h3>Passenger Details</h3>
      <div>{JSON.stringify(props.selectedPassenger, null, 4)}</div>
      <button onClick={onScreenChange}>Back</button>
    </div>
  );
}

export default ViewPassenger;
