import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const name = `user`;

export const userSlice = createSlice({
  name: name,
  initialState: {
    userId: '',
    goldInfo: {
      ticker: 'GOLD',
      volumn: 100,
      change: 20,
      price: 28312,
    },
    silverInfo: {
      ticker: 'SILVER',
      volumn: 23832,
      change: 213,
      price: 23125342,
    },
  },
  reducers: {
    login: (state) => {},
    logout: (state) => {},
    // Use the PayloadAction type to declare the contents of `action.payload`
    setGoldAmount: (state, action: PayloadAction<number>) => {
      state.goldInfo.volumn = action.payload;
    },
    setSilverAmount: (state, action: PayloadAction<number>) => {
      state.silverInfo.volumn = action.payload;
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export default userSlice.reducer;
