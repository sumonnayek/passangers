import React, { Component, createRef } from "react";
import { Link } from 'react-router-dom';

class AddPassenger extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
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

  componentDidMount() {
    this.inputRef.current.focus();
  }
  
  inputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value //we need the different values coming inside name instead of name(ie, [name])
    });
  };

  onScreenChange = () => {
    // this.props.onScreenChange("list");
    this.props.history.goBack();
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

  async onSubmit(e) {
    e.preventDefault();
    await this.addPassenger(this.state);
    console.dir(this.props.history);
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
              ref={this.inputRef}
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
          <button> <Link to='/'>Back</Link></button>
        </form>
      </div>
    );
  }
}

export default AddPassenger;
