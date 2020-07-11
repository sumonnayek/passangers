import {
  FETCH_PASSENGER_FAILURE,
  FETCH_PASSENGER_SUCCESS,
  FETCH_PASSENGER_REQUEST,
  SET_PASSENGER,
  SET_PASSENGER_ID,
  SET_SCREEN
} from "./passengerTypes";
import store from "../store";

export const fetchPassengersRequest = () => ({
  type: FETCH_PASSENGER_REQUEST
});
export const fetchPassengersSuccess = passengerList => ({
  type: FETCH_PASSENGER_SUCCESS,
  payload: { passengerList }
});
export const fetchPassengersFailure = error => ({
  type: FETCH_PASSENGER_FAILURE,
  payload: { error }
});

export const setPassenger = passenger => ({
  type: SET_PASSENGER,
  payload: { passenger }
});

export const setPassengerById = id => ({
  type: SET_PASSENGER_ID,
  payload: { id }
});

export const setScreen = screen => ({
  type: SET_SCREEN,
  payload: { screen }
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

export const setSelectedPassenger = () => {
  const state = store.getState();
  const id = state.passengerId;
  const passengerList = state.passengers.passengerList;
  const passenger = passengerList.find(({ _id }) => _id === id);
  let action = {
    type: SET_PASSENGER,
    payload: { passenger } 
  };
  return action;
  console.log(state);
};
