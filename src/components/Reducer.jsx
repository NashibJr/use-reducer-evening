import React from "react";
import Counter from "./Counter";
import counterReducer from "../helpers/counter.reducer.fn";

/**
 * the useReducer hook is used to manage a more complex state than useState.
 *
 * => const [state, dispatch] = React.useReducer(reducerFn, initialState)
 * - state => stores the state value
 * - dispatch => A function that dispatches off an action
 * - reducerFn => the function that has the logic to update the state
 * - initialState => it is the initial state of a component.
 * @returns JSX
 */

const Reducer = () => {
  const [state, dispatch] = React.useReducer(counterReducer, {
    count: 0,
  });

  const increment = () => dispatch({ type: "increment" });

  const decrement = () => dispatch({ type: "decrement" });

  return (
    <Counter
      count={state.count}
      handleIncrement={increment}
      handleDecrement={decrement}
    />
  );
};

export default Reducer;
