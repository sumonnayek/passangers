import React from "react";
import PassengerTableRow from "./PassengerTableRow";
import "../assets/css/table.css";
function PassengerTable(props) {
  return (
    <div className="table-container">
      <div className="grid-cell header">Name</div>
      <div className="grid-cell header">Gender</div>
      <div className="grid-cell header">Contact</div>
      <div className="grid-cell header">Email</div>
      <div className="grid-cell header">From</div>
      <div className="grid-cell header">Action</div>
      {props.passengerList.map(passenger => (
        <PassengerTableRow
          key={passenger._id}
          {...passenger}
          deletePassenger={props.deletePassenger}
        />
      ))}
    </div>
  );
}

export default PassengerTable;
