import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PassengerMain from "./components/PassengerMain";
import { Provider } from "react-redux";
import store from './store';

function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <div className="App">
        <PassengerMain />
      </div>
    </Provider>
  );
}

export default App;
