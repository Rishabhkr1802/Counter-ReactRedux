import { createStore } from "redux";

const DEFAULT_VALUES = {
  counter: 0,
  privacy: false,
};

function CounterReducer(state = DEFAULT_VALUES, action) {
  if (action.type === "INCREAMENT") {
    return { counter: state.counter + 1, privacy: state.privacy };
  } else if (action.type === "DECREAMENT") {
    return { counter: state.counter - 1, privacy: state.privacy };
  } else if (action.type === "ADDNUMBER") {
    return {
      counter: state.counter + Number(action.payload.num),
      privacy: state.privacy,
    };
  } else if (action.type === "SUBNUMBER") {
    return {
      counter: state.counter - Number(action.payload.num),
      privacy: state.privacy,
    };
  } else if (action.type === "PRIVACY") {
    return { counter: state.counter, privacy: !state.privacy };
  }
  return state;
}

const CounterStore = createStore(CounterReducer);

export default CounterStore;
