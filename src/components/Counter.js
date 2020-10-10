import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import counterReducer, { initialState } from "../reducers/counterReducer";

function Counter() {
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.count);
  // return (
  //   <div>
  //     <button onClick={() => dispatch(increment())}>+</button>
  //     {count}
  //     <button onClick={() => dispatch(decrement())}>-</button>
  //   </div>
  // );

  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export default Counter;
