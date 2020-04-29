import React from "react";
import PassengerTableRow from "./PassengerTableRow";
import "../assets/css/table.css";
function PassengerTable(props) {
  return (
    <div className="table-container">
      <div className="grid-cell">Name</div>
      <div className="grid-cell">Gender</div>
      <div className="grid-cell">Contact</div>
      <div className="grid-cell">Email</div>
      <div className="grid-cell">From</div>
      <div className="grid-cell">Action</div>
      {props.passengerList.map(passenger => (
        <PassengerTableRow
          key={passenger._id}
          {...passenger}
          onScreenChange={props.onScreenChange}
          setSelectedPassenger={props.setSelectedPassenger}
          deletePassenger={props.deletePassenger}
        />
      ))}
    </div>
  );
}

export default PassengerTable;
