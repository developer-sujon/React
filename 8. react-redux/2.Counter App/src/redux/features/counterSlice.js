import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value) {
        state.value -= 1;
      } else {
        alert("something rong");
      }
    },
    reset: (state) => {
      state.value = 0;
    },
    custom: (state, action) => {
      state.value = Number(action.payload);
    },
  },
});

export const { increment, decrement, reset, custom } = counterSlice.actions;

export default counterSlice.reducer;
