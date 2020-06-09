import React, { Component } from "react";
import PassengerTable from "./PassengerTable";
import {Redirect, Link} from 'react-router-dom';

class PassengerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passengerList: [],
      loading: false
    };
    this.fetchPassenger = this.fetchPassenger.bind(this);
  }

  fetchPassenger() {
    this.setState({ loading: true });
    setTimeout(() => {
      fetch("http://localhost:5000/passengers")
        .then(response => response.json())
        .then(data => {
          this.setState({ passengerList: data, loading: false });
        })
        .catch(console.log);
    }, 1500);
  }

  componentDidMount() {
    this.fetchPassenger();
    console.log('in did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('in did update');
  }

  deletePassenger = id => {
    fetch(`http://localhost:5000/passengers/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(this.fetchPassenger);
  };

  addPassengerScreen = () => {
    // this.props.onScreenChange("create");
    console.log(this.props);
    return <this to="/add" />
  };

  render() {
    return (
      <>
        <PassengerTable
          passengerList={this.state.passengerList}
          deletePassenger={this.deletePassenger}
        />
        {this.state.loading && <div>Loading...</div>}
        <button><Link  to='/add'>Add Passenger</Link></button>        
      </>
    );
  }
}

export default PassengerList;
