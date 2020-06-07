import React from "react";
import "./App.css";
import ViewPassenger from "./components/ViewPassenger";
import UpdatePassenger from "./components/UpdatePassenger";
import AddPassenger from "./components/AddPassenger";
import PassengerMain from "./components/PassengerMain";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <PassengerMain />
      </div>
    </Router>
  );
}

export default App;
