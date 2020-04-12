import React from 'react'
import PassengerTableRow from './PassengerTableRow'
import '../assets/css/table.css';
function PassengerTable(props) {
    return (
        <div >
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>From</th>
                    </tr>
                </thead>
                <tbody>
                    {props.passengerList.map( passenger => <PassengerTableRow key={passenger._id} {...passenger} onScreenChange={props.onScreenChange} setSelectedPassenger={props.setSelectedPassenger} deletePassenger={props.deletePassenger}/>)} 
                </tbody>
            </table>
        </div>
    )
}

export default PassengerTable
