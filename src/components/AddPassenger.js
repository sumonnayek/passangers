import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
// import MomentDatepicker from "react-moment-datepicker";

class AddPassenger extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      name: "",
      gender: "",
      phone: "",
      email: "",
      departure: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.addPassenger = this.addPassenger.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value, //we need the different values coming inside name instead of name(ie, [name])
    });
  };

  onScreenChange = () => {
    // this.props.onScreenChange("list");
    this.props.history.push("/passenger");
  };

  async addPassenger(newPassenger) {
    let response = await fetch(`http://localhost:5000/passengers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPassenger),
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    await this.addPassenger(this.state);
    console.dir(this.props.history);
    this.onScreenChange();
  }

  render() {
    //  DefaultDatePicker = ({ date, timezone, onSelect }) => (
    //    <DatePicker
    //      timezone={timezone}
    //      date={date}
    //      defaultDate={moment().startOf("day")}
    //      DayComponent={Day}
    //      headerFormat={"MMMM YYYY"}
    //      footerFormat={"LL"}
    //      onSelect={onSelect}
    //    />
    //  );
    return (
      <div>
        {/* <form onSubmit={this.onSubmit}>
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
          <button>
            <Link to="/passenger">Back</Link>
          </button>
        </form> */}
        <Form onSubmit={this.onSubmit} className="add-form">
          <FormGroup row>
            <Label sm={2}>Name</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.inputChange}
                ref={this.inputRef}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Contact</Label>
            <Col sm={10}>
              <Input
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.inputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Gender</Label>
            <Col sm={10}>
              <Input
                type="select"
                name="gender"
                value={this.state.gender}
                onChange={this.inputChange}
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Email:</Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.inputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>From</Label>
            <Col sm={10}>
              <Input
                type="select"
                name="departure"
                value={this.state.departure}
                onChange={this.inputChange}
              >
                <option value="">Select...</option>
                <option value="Bangalore">Bangalore</option>
                <option value="pune">pune</option>
                <option value="kolkata">kolkata</option>
              </Input>
            </Col>
          </FormGroup>

          <br />
          <Button color="primary" value="Add Passenger" type="submit">
            Add
          </Button>
          <Button color="warning" className="back-button">
            <Link to="/passenger">Back</Link>
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddPassenger;
