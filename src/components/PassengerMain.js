import React, { Component } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";
import Login from "./Login";
import { ProtectedRoute } from "./protectedRoute";
import {
  // BrowserRouter as Redirect,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Charts from "./Charts";

class PassengerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  logoutOnClick = () => {
    this.setState({ loggedIn: false });
  };

  loginOnClick = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    console.log(this.state.loggedIn);
    // if(this.state.loggedIn === false) {
    // return <Redirect to='/login' />
    // }

    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Route path="/login" render = {() => (
            <Login loginOnClick={this.loginOnClick}/>
          )} /> */}
            <Route path="/" exact component={Login} />
            <ProtectedRoute path="/passenger" component={PassengerList} />
            <ProtectedRoute path="/view/:id" component={ViewPassenger} />
            <ProtectedRoute path="/update/:id" component={UpdatePassenger} />
            <ProtectedRoute path="/add" component={AddPassenger} />
            <ProtectedRoute path="/charts" component={Charts} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default PassengerMain;
