import React, { Component } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";
import PassengerTableRow from "./PassengerTableRow";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class PassengerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <Switch>
          <Route path="/" exact component={PassengerList} />
          <Route path="/view/:id" component={ViewPassenger} />
          <Route path="/update/:id" component={UpdatePassenger} />
          <Route path="/add" component={AddPassenger} />
        </Switch>
      </div>
    );
  }
}

export default PassengerMain;
