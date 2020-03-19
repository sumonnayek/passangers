import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function PassangerTableRow(props) {
    const {name, gender, phone, email, departure, onScreenChange: onScreenChangeInProps, setSelectedPassanger, deletePassanger} = props;
    const toViewScreen = () => {
        onScreenChangeInProps('view');
        // console.log(props);
        setSelectedPassanger(props.id); 
    }
    const toEditScreen = () => {
        onScreenChangeInProps('edit');
        console.log(props);
        setSelectedPassanger(props.id); 
    }
    const delPassanger = () => {
       props.deletePassanger(props.id);
    }
    return (
            <tr>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{departure}</td>
                <td>
                    <FontAwesomeIcon icon={faCoffee} onClick={toViewScreen}/>
                    <FontAwesomeIcon icon={faCoffee} onClick={toEditScreen}/>
                    <FontAwesomeIcon icon={faCoffee} onClick={delPassanger}/>
                </td>
            </tr>
    )
}

export default PassangerTableRow
