import React from "react";
import PassengerTable from "./PassengerTable";
import { useDispatch } from "react-redux";
import { setScreen } from "../actions";

const PassengerList = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <PassengerTable
        passengerList={props.passengerList}
        deletePassenger={props.deletePassenger}
      />
      {props.loading && <div>Loading...</div>}
      <button
        onClick={() => {
          dispatch(setScreen("create"));
        }}
      >
        Add Passenger
      </button>
    </>
  );
};

export default PassengerList;
