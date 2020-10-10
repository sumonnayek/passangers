import { combineReducers } from "redux";
import passengersReducer from "./passengersReducer";
import passengerIdReducer from "./passengerIdReducer";
import screenReducer from "./screenReducer";
import passengerReducer from "./passengerReducer";
import countReducer from "./counterReducer";

const rootReducer = combineReducers({
  passengers: passengersReducer,
  passengerId: passengerIdReducer,
  screen: screenReducer,
  passenger: passengerReducer,
  count: countReducer,
});

export default rootReducer;

//{
//     passengers: {
//         loading: false,
//         PassengerList: [],
//         error: ''
//      },
//     passengerId: '',
//     passenger: null,
//     screen: ''
// }
