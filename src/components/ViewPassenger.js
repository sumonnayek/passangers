import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewPassenger extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onScreenChange() {
    this.props.history.push("./passenger");
  }

  componentDidMount() {
    this.getPassengerById(this.props.match.params.id);
    console.dir(this.props.match);
  }

  getPassengerById = (id) => {
    setTimeout(() => {
      fetch(`http://localhost:5000/passenger/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ ...data[0] });
        })
        .catch(console.log);
    }, 1500);
  };

  render() {
    console.log(this.props.location);
    // console.log(this.props)
    // const {name, contact, gender, email, departure} = this.props.presentPassenger
    return (
      <div>
        <h3>Passenger Details</h3>
        <div>{JSON.stringify(this.state, null, 4)}</div>
        <button>
          <Link to="/passenger">Back</Link>
        </button>
      </div>
    );
  }
}

export default ViewPassenger;
