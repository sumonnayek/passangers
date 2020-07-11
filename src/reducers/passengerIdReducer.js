import { SET_PASSENGER_ID } from "../actions/passengerTypes";

const initialState =  "";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSENGER_ID:
      return  action.payload.id;
    default:
      return state;
  }
};

export default reducer;
