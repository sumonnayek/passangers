import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function PassengerTableRow(props) {
  const {
    name,
    gender,
    phone,
    email,
    departure,
    onScreenChange: onScreenChangeInProps,
    setSelectedPassenger,
    deletePassenger
  } = props;
  const toViewScreen = () => {
    setSelectedPassenger(props._id);
    onScreenChangeInProps("view");
  };

  const toEditScreen = () => {
    setSelectedPassenger(props._id);
    onScreenChangeInProps("edit");
    // console.log(props);
  };

  const delPassenger = () => {
    deletePassenger(props._id);
    console.log(props);
  };

  return (
    // <tr>
    //   <td>{name}</td>
    //   <td>{gender}</td>
    //   <td>{phone}</td>
    //   <td>{email}</td>
    //   <td>{departure}</td>
    //   <td>
    //     <abbr title="View Passenger">
    //       <FontAwesomeIcon icon={faEye} onClick={toViewScreen} />
    //     </abbr>
    //     <abbr title="Edit Passenger">
    //       <FontAwesomeIcon icon={faEdit} onClick={toEditScreen} />
    //     </abbr>
    //     <abbr title="Delete Passenger">
    //       <FontAwesomeIcon icon={faTrash} onClick={delPassenger} />
    //     </abbr>
    //   </td>
    // </tr>
    <>
      <div className="grid-cell">{name}</div>
      <div className="grid-cell">{gender}</div>
      <div className="grid-cell">{phone}</div>
      <div className="grid-cell">{email}</div>
      <div className="grid-cell">{departure}</div>
      <div className="grid-cell icons">
        <abbr title="View Passenger">
          <FontAwesomeIcon icon={faEye} onClick={toViewScreen} />
        </abbr>
        <abbr title="Edit Passenger">
          <FontAwesomeIcon icon={faEdit} onClick={toEditScreen} />
        </abbr>
        <abbr title="Delete Passenger">
          <FontAwesomeIcon icon={faTrash} onClick={delPassenger} />
        </abbr>
      </div>
    </>
  );
}

export default PassengerTableRow;
