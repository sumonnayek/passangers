import React, { useEffect, useState } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";

function PassengerMain() {
  const [passengerList, setPassengerList] = useState([]);
  const [selectedPassengerId, setSelectedPassengerId] = useState("");
  const [selectedPassenger, setSelectedPassenger] = useState("");
  const [screen, setScreen] = useState("list");

  useEffect(() => {
    fetchPassenger();
    changeScreen();
  }, []);

  useEffect(() => {
    fetchPassenger();
    console.log("didupdate");
  }, [screen]);

  useEffect(() => {
    setSelectedPassenger(
      passengerList.find(({ _id }) => _id === selectedPassengerId)
    );
  }, [selectedPassengerId]);

  const fetchPassenger = () => {
    fetch("http://localhost:5000/passengers")
      .then(response => response.json())
      .then(data => {
        setPassengerList(data);
      })
      .then(() => console.log(passengerList))
      .catch(console.log);
  };

  const onScreenChange = screen => {
    setScreen(screen);
  };

  const settingSelectedPassenger = selectedPassengerId => {
    setSelectedPassengerId(selectedPassengerId);
  };

  const deletePassenger = id => {
    fetch(`http://localhost:5000/passengers/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        response.json();
        if (response) {
          fetchPassenger();
        }
      })
      .then(console.log);
  };

  const changeScreen = () => {
    switch (screen) {
      case "view":
        return (
          <ViewPassenger
            selectedPassenger={selectedPassenger}
            onScreenChange={onScreenChange}
          />
        );
      case "edit":
        return (
          <UpdatePassenger
            selectedPassenger={selectedPassenger}
            onScreenChange={onScreenChange}
            fetchPassenger={fetchPassenger}
          />
        );
      case "create":
        return <AddPassenger onScreenChange={onScreenChange} />;
      default:
        return (
          <PassengerList
            onScreenChange={onScreenChange}
            setSelectedPassenger={settingSelectedPassenger}
            passengerList={passengerList}
            deletePassenger={deletePassenger}
          />
        );
    }
  };

  return <div>{changeScreen()}</div>;
}

export default PassengerMain;
