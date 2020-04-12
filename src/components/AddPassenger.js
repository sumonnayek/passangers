import React, { Component } from "react";

class AddPassenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      phone: "",
      email: "",
      departure: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.addPassenger = this.addPassenger.bind(this);
  }

  inputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value //we need the different values coming inside name instead of name(ie, [name])
    });
  };

  onScreenChange = () => {
    this.props.onScreenChange("list");
  };

  async addPassenger(newPassenger) {
    let response = await fetch(`http://localhost:5000/passengers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPassenger)
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.addPassenger(this.state);
    this.onScreenChange();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.inputChange}
            />
          </label>
          <br />
          <label>
            Contact:
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.inputChange}
            />
          </label>
          <br />
          <label>
            Gender
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.inputChange}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.inputChange}
            />
          </label>
          <br />
          <label>
            From
            <select
              name="departure"
              value={this.state.departure}
              onChange={this.inputChange}
            >
              <option value="">Select...</option>
              <option value="Bangalore">Bangalore</option>
              <option value="pune">pune</option>
              <option value="kolkata">kolkata</option>
            </select>
          </label>
          <br />
          <br />
          <input value="Add Passenger" type="submit" />
          <button onClick={this.onScreenChange}>Back</button>
        </form>
      </div>
    );
  }
}

export default AddPassenger;
