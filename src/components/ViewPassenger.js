import React, { Component } from "react";

class ViewPassenger extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onScreenChange() {
    this.props.history.goBack();
  }

  componentDidMount() {
    this.getPassengerById(this.props.match.params.id);
  }

  getPassengerById = id => {
    // this.setState({ loading: true });
    setTimeout(() => {
      fetch(`http://localhost:5000/passenger/${id}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ ...data[0], loading:false });
        })
        .catch(console.log);
    }, 1500);
  };

  render() {
    console.log(this.props.history);
    // console.log(this.props)
    // const {name, contact, gender, email, departure} = this.props.presentPassenger
    return (
      <div>
        <h3>Passenger Details</h3>
        <div>{JSON.stringify(this.state, null, 4)}</div>
        <button onClick={this.onScreenChange}>Back</button>
      </div>
    );
  }
}

export default ViewPassenger;
