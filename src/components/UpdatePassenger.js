import React, { Component } from "react";
import { setScreen, setSelectedPassenger } from "../actions";
import { connect } from "react-redux";

export class UpdatePassenger extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    // const { name, gender, phone, email, departure } = this.props.passenger;
    this.state = {
      name: "",
      gender: "",
      phone: "",
      email: "",
      departure: ""
    };
    this.onScreenChange = this.onScreenChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.updatePassenger = this.updatePassenger.bind(this);
    this.setThePassenger = this.setThePassenger.bind(this);
    // console.log(this.props.passenger)
  }
  inputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value //we need the different values coming inside name instead of name(ie, [name])
    });
  }

  onScreenChange() {
    this.props.setScreen("list");
  }

  updatePassenger(id) {
    return fetch(`http://localhost:5000/passengers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  }

  onUpdate(e) {
    this.updatePassenger(this.props.passenger._id).then(this.onScreenChange);
    e.preventDefault();
  }

  async setThePassenger() {
    await this.props.setPassenger();
    const { name, gender, phone, email, departure } = this.props.passenger;
    this.setState({
      name,
      gender,
      phone,
      email,
      departure
    });
  }

  componentDidMount() {
    this.inputRef.current.focus();
    this.setThePassenger();
  }

  componentDidUpdate(prevProps) {
    console.log(
      `in didupdate props: ${JSON.stringify(this.props.passenger, null, 4)}`
    );
    if (prevProps.passenger) {
      if (
        prevProps.passenger.name !== this.props.passenger.name ||
        prevProps.passenger.gender !== this.props.passenger.gender ||
        prevProps.passenger.phone !== this.props.passenger.phone ||
        prevProps.passenger.email !== this.props.passenger.email ||
        Object.keys(prevProps.passenger).length !==
          Object.keys(this.props.passenger).length
      ) {
        this.setState({
          ...this.props.passenger
        });
      }
    }
  }

  render() {
    console.log(
      `in render props: ${JSON.stringify(this.props.passenger, null, 4)}`
    );
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
          <input value="Update" type="submit" />
          <button onClick={() => this.props.setScreen("list")}>Back</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.passengerId,
  passengerList: state.passengers.passengerList,
  passenger: state.passenger
});

const mapDispatchToProps = dispatch => ({
  setScreen: screen => dispatch(setScreen(screen)),
  setPassenger: () => dispatch(setSelectedPassenger())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassenger);
