import React, { Component } from "react";

export class UpdatePassanger extends Component {
  constructor(props) {
    super(props);
    const {
      name,
      gender,
      phone,
      email,
      departure
    } = this.props.selectedPassanger;
    this.state = {
      name: name,
      gender: gender,
      phone: phone,
      email: email,
      departure: departure
    };
    console.log(props);
    this.onScreenChange = this.onScreenChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
}
  inputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // let value = (name === )
    this.setState({
        [name]:value //we need the different values coming inside name instead of name(ie, [name])
    })
  }

  onScreenChange() {
    this.props.onScreenChange("list");
  }

  onUpdate(e) {
    this.props.updatePassanger(this.props.selectedPassanger.id, this.state)
    // console.log(JSON.stringify(this.state, null, 4));
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onUpdate}>
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
          <input value='Update' type='submit'/>
          <button onClick={this.onScreenChange}>Back</button>
        </form>
      </div>
    );
  }
}

export default UpdatePassanger;
