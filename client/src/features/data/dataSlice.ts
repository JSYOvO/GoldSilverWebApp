import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// createSlice()
// accepts an object of reducer functions, a slice name,
// and an initial state value, and automatically generates
// a slice reducer with corresponding action creators and action types.
interface IData {
  x: Date;
  y: string;
}
const DEFAULT_CHART = `gold`;

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    chartSymbol: 'GOLD',
    chartTimeLine: '5D',
    nowPrice: 0,
    nowChange: 0,
    chartData: [] as IData[],
  },
  reducers: {
    setData: (state, action) => {
      state.chartSymbol = action.payload.chartSymbol || state.chartSymbol;
      state.chartTimeLine = action.payload.chartTimeLine || state.chartTimeLine;

      console.log(state.chartSymbol, state.chartTimeLine);

      axios
        .get(`http://localhost:4000/${state.chartSymbol || DEFAULT_CHART}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async (res) => {
          // state.nowPrice = res.data.price.regularMarketPrice.raw;
          // state.nowChange = res.data.price.regularMarketChangePercent.fmt;
        });

      axios
        .get(
          `http://localhost:4000/chart/${state.chartTimeLine}/${state.chartSymbol}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(async (res) => {
          const timestamp: any = res.data.chart.result[0].timestamp;
          const openPrice: any =
            res.data.chart.result[0].indicators.quote[0].open;

          const tmp = [];
          for (let i = 0; i < timestamp.length; i++) {
            tmp.push({
              x: new Date(timestamp[i] * 1000),
              y: openPrice[i],
            });
          }
          // state.chartData = action.payload.length > 0 ? tmp : state.chartData;
        });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
