import React, { Component } from 'react'

class ViewPassenger extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.onScreenChange = this.onScreenChange.bind(this);
        console.log('view');
    }
    
    onScreenChange() {
        this.props.onScreenChange('list');
    }
    render() {
        console.log(this.props.selectedPassenger);
        // console.log(this.props)
        // const {name, contact, gender, email, departure} = this.props.presentPassenger
        return (
            <div>
                <h3>Passenger Details</h3>
                <div>
                    {JSON.stringify(this.props.selectedPassenger, null, 4)}
                </div>
                <button onClick={this.onScreenChange}>Back</button>
            </div>
        )
    }
}

export default ViewPassenger
