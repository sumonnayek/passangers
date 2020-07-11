import { SET_PASSENGER } from "../actions/passengerTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSENGER:
      return  action.payload.passenger;
    default:
      return state;
  }
};

export default reducer;
