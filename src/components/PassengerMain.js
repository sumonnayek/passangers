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
      // passengerList: [],
      // loading: false
    };
    // this.fetchPassenger = this.fetchPassenger.bind(this);
  }

  // fetchPassenger() {
  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     fetch("http://localhost:5000/passengers")
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setState({ passengerList: data, loading: false });
  //       })
  //       .catch(console.log);
  //   }, 1500);
  // }

  // componentDidMount() {
  //   this.fetchPassenger();
  //   console.log('in did mount');
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('in did update');
  // }

  // deletePassenger = id => {
  //   fetch(`http://localhost:5000/passengers/${id}`, {
  //     method: "DELETE"
  //   })
  //     .then(response => response.json())
  //     .then(this.fetchPassenger);
  // };

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
