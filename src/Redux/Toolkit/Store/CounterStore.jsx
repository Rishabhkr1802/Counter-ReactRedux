import { configureStore, createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },
  reducers: {
    increament: (state) => {
      state.value++;
    },
    decreament: (state) => {
      state.value--;
    },
    addUserNumber: (state, action) => {
      state.value = state.value + Number(action.payload.num);
    },
    subtractUserNumber: (state, action) => {
      state.value = state.value - Number(action.payload.num);
    },
  },
});

const PrivacySlice = createSlice({
  name: "Privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return state = !state;
    },
  },
});

const CounterStore = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    privacy: PrivacySlice.reducer,
  },
});

export const CounterAction = CounterSlice.actions;
export const PrivacyAction = PrivacySlice.actions;
export default CounterStore;
