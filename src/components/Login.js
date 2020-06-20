import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  inputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.email === 'sumon@gmail.com' && this.state.password === '1234') {
      this.props.loginOnClick();
    } else {
      alert('Entered email & password is Incorrect');
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputChange}
            />
          </label>
          <br />
          <br />
          <input value="Login" type="submit" />
          {/* <button>
            <Link to="/">Login</Link>
          </button> */}
        </form>
      </div>
    );
  }
}

export default Login;
