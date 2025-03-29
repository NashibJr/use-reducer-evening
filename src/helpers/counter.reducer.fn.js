/**
 * - takes in 2 parameters ie -> state, action
 * - it's gonna update the state depending on the action type => action.type
 */

const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

export default counterReducer;
