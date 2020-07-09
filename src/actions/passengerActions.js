import {
  FETCH_PASSENGER_FAILURE,
  FETCH_PASSENGER_SUCCESS,
  FETCH_PASSENGER_REQUEST,
  FETCH_PASSENGER_BYID_FAILURE,
  FETCH_PASSENGER_BYID_SUCCESS,
  FETCH_PASSENGER_BYID_REQUEST
} from "./passengerTypes";

export const fetchPassengersRequest = () => ({
  type: FETCH_PASSENGER_REQUEST
});
export const fetchPassengersSuccess = passengers => ({
  type: FETCH_PASSENGER_SUCCESS,
  payload: passengers
});
export const fetchPassengersFailure = error => ({
  type: FETCH_PASSENGER_FAILURE,
  error: error
});

export const fetchPassengerByIdRequest = () => ({
  type: FETCH_PASSENGER_BYID_REQUEST
});
export const fetchPassengerByIdSuccess = passenger => ({
  type: FETCH_PASSENGER_BYID_SUCCESS,
  payload: passenger
});
export const fetchPassengerByIdFailure = error => ({
  type: FETCH_PASSENGER_BYID_FAILURE,
  error: error
});

export const fetchPassengers = () => {
  return dispatch => {
    dispatch(fetchPassengersRequest());
    fetch("http://localhost:5000/passengers")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(fetchPassengersSuccess(data));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchPassengersFailure(errorMsg));
      });
  };
};

export const fetchPassengerById = id => {
  return dispatch => {
    dispatch(fetchPassengerByIdRequest());
    fetch(`http://localhost:5000/passengers/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(fetchPassengerByIdSuccess(data));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchPassengerByIdFailure(errorMsg));
      });
  };
};
