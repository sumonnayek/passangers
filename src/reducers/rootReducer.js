import { combineReducers } from "redux";
import passengersReducer from "./passengersReducer";
import passengerIdReducer from "./passengerIdReducer";
import screenReducer from "./screenReducer";
import passengerReducer from './passengerReducer'

const rootReducer = combineReducers({
  passengers: passengersReducer,
  passengerId: passengerIdReducer,
  screen: screenReducer,
  passenger: passengerReducer
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
