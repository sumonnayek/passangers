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
        // console.log(this.props.selectedPassanger);
        // console.log(this.props)
        // const {name, contact, gender, email, departure} = this.props.presentPassanger
        return (
            <div>
                <h3>Passanger Details</h3>
                <div>
                    {JSON.stringify(this.props.selectedPassanger, null, 4)}
                </div>
                <button onClick={this.onScreenChange}>Back</button>
            </div>
        )
    }
}

export default ViewPassenger
