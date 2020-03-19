import React from 'react'
import PassangerTableRow from './PassangerTableRow'
import '../assets/css/table.css';
function PassangerTable(props) {
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
                    {props.passangerList.map( passanger => <PassangerTableRow key={passanger.id} {...passanger} onScreenChange={props.onScreenChange} setSelectedPassanger={props.setSelectedPassanger} deletePassanger={props.deletePassanger}/>)} 
                </tbody>
            </table>
        </div>
    )
}

export default PassangerTable
