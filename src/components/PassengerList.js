import React, { Component } from 'react'
import PassengerTable from './PassengerTable';

class PassengerList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
        }
    }
    addPassengerScreen= () => {
        this.props.onScreenChange('create');
      }
    render() {
        return (
            <div>
                <PassengerTable onScreenChange={this.props.onScreenChange} setSelectedPassenger={this.props.setSelectedPassenger} passengerList={this.props.passengerList} deletePassenger={this.props.deletePassenger}/>
                <button onClick={this.addPassengerScreen}>Add Passenger</button>
            </div>
        )
    }
}

export default PassengerList
