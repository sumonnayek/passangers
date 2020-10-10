import React, { useEffect } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";
import { useSelector, useDispatch } from "react-redux";
import { fetchPassengers } from "../actions";
import Counter from "./Counter";

const PassengerMain = () => {
  const dispatch = useDispatch();
  const fetchPassenger = () => {
    dispatch(fetchPassengers());
  };
  const screen = useSelector((state) => state.screen);
  const passengerList = useSelector((state) => state.passengers.passengerList);
  const loading = useSelector((state) => state.passengers.loading);

  useEffect(() => {
    fetchPassenger();
  }, []);

  useEffect(() => {
    fetchPassenger();
  }, [screen]);

  const deletePassenger = (id) => {
    fetch(`http://localhost:5000/passengers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(fetchPassenger());
  };

  let presentScreen;
  if (screen === "list") {
    presentScreen = (
      <PassengerList
        passengerList={passengerList}
        deletePassenger={deletePassenger}
        loading={loading}
      />
    );
  } else if (screen === "view") {
    presentScreen = <ViewPassenger />;
  } else if (screen === "edit") {
    presentScreen = <UpdatePassenger />;
  } else if (screen === "create") {
    presentScreen = <AddPassenger />;
  }

  return (
    <div>
      {presentScreen}
      {/* <Counter /> */}
    </div>
  );
};

export default PassengerMain;
