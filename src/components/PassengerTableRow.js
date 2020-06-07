import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
    <>
      <div className="grid-cell">{name}</div>
      <div className="grid-cell">{gender}</div>
      <div className="grid-cell">{phone}</div>
      <div className="grid-cell">{email}</div>
      <div className="grid-cell">{departure}</div>
      <div className="grid-cell icons">
        <Link to={`/view/${props._id}`}>
          <abbr title="View Passenger">
            <FontAwesomeIcon icon={faEye} />
          </abbr>
        </Link>

        <Link to={`/update/${props._id}`}>
          <abbr title="Edit Passenger">
            <FontAwesomeIcon icon={faEdit} />
          </abbr>
        </Link>
        <abbr title="Delete Passenger">
          <FontAwesomeIcon icon={faTrash} onClick={delPassenger} />
        </abbr>
      </div>
    </>
  );
}

export default PassengerTableRow;
