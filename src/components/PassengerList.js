import React from "react";
import PassengerTable from "./PassengerTable";

function PassengerList(props) {

  const addPassengerScreen = () => {
    props.onScreenChange("create");
  };

  return (
    <div>
      <PassengerTable
        onScreenChange={props.onScreenChange}
        setSelectedPassenger={props.setSelectedPassenger}
        passengerList={props.passengerList}
        deletePassenger={props.deletePassenger}
      />
      <button onClick={addPassengerScreen}>Add Passenger</button>
    </div>
  );
}

export default PassengerList;
