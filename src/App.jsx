import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Reducer from "./components/Reducer";
import Events from "./components/Events";
import Lists from "./components/Lists";

/**
 * state management:
 *  - state -> an object that has information about a component.
 *      -> useState hook
 *      -> useReducer hook
 *      -> useContext hook
 *      -> External libraries like redux.
 *
 * => useState hook
 *  const [state, setState] = React.useState(initialState)
 *  -> setState => A function that is used to update state
 * -> initialState => A values that the state holds initial
 */

// function App() {
//   const [count, setCount] = React.useState(0);

//   const increment = () => setCount((prevState) => prevState + 1); //0 => 1

//   const decrement = () => setCount((prevState) => prevState - 1);

//   return (
//     <>
//       <Counter
//         count={count}
//         handleIncrement={increment}
//         handleDecrement={decrement}
//       />
//     </>
//   );
// }

class App extends React.Component {
  render() {
    return <Lists />;
  }
}

export default App;
