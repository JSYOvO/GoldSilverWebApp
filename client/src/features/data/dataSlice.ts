import { createSlice } from '@reduxjs/toolkit';

// createSlice()
// accepts an object of reducer functions, a slice name,
// and an initial state value, and automatically generates
// a slice reducer with corresponding action creators and action types.

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    chartSymbol: 'GOLD',
  },
  reducers: {
    setData: (state, action) => {
      state.chartSymbol = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
