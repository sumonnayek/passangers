import React, { Component } from "react";
import PassengerTable from "./PassengerTable";
import {Redirect, Link} from 'react-router-dom';

class PassengerList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addPassengerScreen = () => {
    // this.props.onScreenChange("create");
    console.log(this.props);
    return <this to="/add" />
  };

  render() {
    // const onScreenChange = this.props.onScreenChange;
    // const screen = (
    //   <Link href={user.permalink}>
    //     <Avatar user={user} size={props.avatarSize} />
    //   </Link>
    // );
    return (
      <>
        <PassengerTable
          onScreenChange={this.props.onScreenChange}
          setSelectedPassenger={this.props.setSelectedPassenger}
          passengerList={this.props.passengerList}
          deletePassenger={this.props.deletePassenger}
        />
        {this.props.loading && <div>Loading...</div>}
        <button><Link  to='/add'>Add Passenger</Link></button>        
      </>
    );
  }
}

export default PassengerList;
