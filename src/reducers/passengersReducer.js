import {
  FETCH_PASSENGER_REQUEST,
  FETCH_PASSENGER_SUCCESS,
  FETCH_PASSENGER_FAILURE
} from "../actions/passengerTypes";

const initialState = {
  loading: false,
  passengerList: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PASSENGER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PASSENGER_SUCCESS:
      return {
        loading: false,
        passengerList: action.payload.passengerList,
        error: ""
      };
    case FETCH_PASSENGER_FAILURE:
      return {
        loading: false,
        passengerList: [],
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default reducer;
