import { INCREMENT, DECREMENT } from "../actions/passengerTypes";

// const initialState = 0;

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };

export const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      //   throw new Error();
      return state;
  }
}

export default counterReducer;
