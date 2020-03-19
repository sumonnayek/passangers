import React, { Component } from 'react'
import PassangerTable from './PassangerTable';

class PassangerList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // passangerList : [
            //     {
            //         id: 123,
            //         name: "Sumon",
            //         gender: "male",
            //         phone: 8383838838,
            //         email: "sumon@gmail.com",
            //         departure: "Bangalore",
            //     },
            //     {
            //         id: 343,
            //         name: "Jai",
            //         gender: "male",
            //         phone: 2984928349,
            //         email: "jai@sds.com",
            //         departure: "pune",
            //     },
            //     {
            //         id: 657,
            //         name: "Radha",
            //         gender: "female",
            //         phone: 873248762,
            //         email: "radha@sfs.com",
            //         departure: "kolkata",
            //     },
            // ]
        }
    }
    addPassangerScreen= () => {
        this.props.onScreenChange('create');
      }
    render() {
        return (
            <div>
                <PassangerTable onScreenChange={this.props.onScreenChange} setSelectedPassanger={this.props.setSelectedPassanger} passangerList={this.props.passangerList} deletePassanger={this.props.deletePassanger}/>
                <button onClick={this.addPassangerScreen}>Add Passanger</button>
            </div>
        )
    }
}

export default PassangerList
