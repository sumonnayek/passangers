import React, { Component } from "react";

export class UpdatePassenger extends Component {
  constructor(props) {
    super(props);
    const {
      name,
      gender,
      phone,
      email,
      departure
    } = this.props.selectedPassenger;
    this.state = {
      name: name,
      gender: gender,
      phone: phone,
      email: email,
      departure: departure
    };
    this.onScreenChange = this.onScreenChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.updatePassenger = this.updatePassenger.bind(this);
    // console.log(this.props.selectedPassenger)
}
  inputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]:value //we need the different values coming inside name instead of name(ie, [name])
    })
  }

  onScreenChange() {
    this.props.onScreenChange("list");
  }

  updatePassenger(id) {
    return fetch(`http://localhost:5000/passengers/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  }

  onUpdate(e) {
        this.updatePassenger(this.props.selectedPassenger._id)
        .then(this.onScreenChange)
    e.preventDefault();

  }

  componentDidMount() {
    console.log(`in didmount props: ${JSON.stringify(this.props.selectedPassenger, null, 4)}`);
  }

  componentDidUpdate(prevProps) {
    console.log(`in didupdate props: ${JSON.stringify(this.props.selectedPassenger, null, 4)}`);
    if(prevProps.selectedPassenger.name !== this.props.selectedPassenger.name 
      || prevProps.selectedPassenger.gender !== this.props.selectedPassenger.gender 
      || prevProps.selectedPassenger.phone !== this.props.selectedPassenger.phone 
      || prevProps.selectedPassenger.email !== this.props.selectedPassenger.email
      || Object.keys(prevProps.selectedPassenger).length !== Object.keys(this.props.selectedPassenger).length) {
      this.setState({
        ...this.props.selectedPassenger
      });
    }
   
  }

  render() {
    console.log(`in render props: ${JSON.stringify(this.props.selectedPassenger, null, 4)}`);
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

export default UpdatePassenger;
