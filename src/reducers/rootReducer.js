import { combineReducers } from "redux";
import passengerReducer from "./passengerReducer";

const rootReducer = combineReducers({
  passengers: passengerReducer
});

export default rootReducer;

//{
//     loading: false,
//     PassengerList: [],
//     error: '',
//     selectedPassengerId: '',
//     selectedPassenger: '',
//     screen: ''
// }