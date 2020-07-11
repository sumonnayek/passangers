import { SET_SCREEN } from "../actions/passengerTypes";

const initialState = "list"

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN:
      return action.payload.screen
    default:
      return state;
  }
};

export default reducer;
