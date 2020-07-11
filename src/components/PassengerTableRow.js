import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { setPassengerById, setScreen } from "../actions";
import { connect } from "react-redux";

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
        <abbr title="View Passenger">
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => {
              props.setPassengerById(props._id);
              props.setScreen('view');
            }}
          />
        </abbr>
        <abbr title="Edit Passenger">
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => {
              props.setPassengerById(props._id);
              props.setScreen('edit');
            }}
          />
        </abbr>
        <abbr title="Delete Passenger">
          <FontAwesomeIcon icon={faTrash} onClick={delPassenger} />
        </abbr>
      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  setPassengerById: id => dispatch(setPassengerById(id)),
  setScreen : screen => dispatch(setScreen(screen))
});

export default connect(null, mapDispatchToProps)(PassengerTableRow);
