import React from "react";
import "./App.css";
import ViewPassenger from "./components/ViewPassenger";
import UpdatePassenger from "./components/UpdatePassenger";
import AddPassenger from "./components/AddPassenger";
import PassengerMain from "./components/PassengerMain";
import { HashRouter as Router,  Route} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <Router>
      {/* <Route path="/login"  component={Login} />  */}
      <div className="App">
        <PassengerMain />
      </div>
    </Router>
  );
}

export default App;
