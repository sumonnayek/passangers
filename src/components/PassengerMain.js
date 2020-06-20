import React, { Component } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";
import Login from "./Login";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";

class PassengerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  logoutOnClick = () => {
    this.setState({ loggedIn: false });
  };

  loginOnClick = () => {
    this.setState({ loggedIn: true });
  }

  render() {
    console.log(this.state.loggedIn);
    // if(this.state.loggedIn === false) {
    // return <Redirect to='/login' />
    // }

    return (
      <div>
        {this.state.loggedIn && (
          <button onClick={this.logoutOnClick}>Logout</button>
        )}

        <Switch>
          {/* <Route path="/login" render = {() => (
            <Login loginOnClick={this.loginOnClick}/>
          )} /> */}
          <Route path="/" exact>
            {this.state.loggedIn ? <PassengerList /> : <Login loginOnClick={this.loginOnClick}/> }
          </Route>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/view/:id" component={ViewPassenger} />
          <Route path="/update/:id" component={UpdatePassenger} />
          <Route path="/add" component={AddPassenger} />
        </Switch>
      </div>
    );
  }
}

export default PassengerMain;
