import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// createSlice()
// accepts an object of reducer functions, a slice name,
// and an initial state value, and automatically generates
// a slice reducer with corresponding action creators and action types.
interface IData {
  x: Date;
  y: string;
}
interface IFETCH_DATA {
  chartTimeLine: string | null;
  chartSymbol: string | null;
}
const name = `data`;
const DEFAULT_CHART = `gold`;

// redux-thunk는 리덕스에서 비동기 작업을 처리 할 때 가장 많이 사용하는 미들웨어
// 액션 객체가 아닌 함수를 디스패치 할 수 있습니다.

export const fetchData = createAsyncThunk(
  `FETCH_DATA`,
  async ({ chartSymbol }: IFETCH_DATA) => {
    return axios
      .get(`http://localhost:4000/${chartSymbol || DEFAULT_CHART}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return {
          chartSymbol: chartSymbol!,
          nowPrice: res.data.price.regularMarketPrice.raw,
          nowChange: res.data.price.regularMarketChangePercent.fmt,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },
);

export const fetchChartData = createAsyncThunk(
  `FETCH_CHART_DATA`,
  async ({ chartTimeLine, chartSymbol }: IFETCH_DATA) => {
    return axios
      .get(`http://localhost:4000/chart/${chartTimeLine}/${chartSymbol}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(async (res) => {
        const timestamp: any = res.data.chart.result[0].timestamp;
        const openPrice: any =
          res.data.chart.result[0].indicators.quote[0].open;

        const chartData = [];
        for (let i = 0; i < timestamp.length; i++) {
          chartData.push({
            x: new Date(timestamp[i] * 1000),
            y: openPrice[i],
          });
        }

        return {
          chartData: chartData!,
          chartTimeLine: chartTimeLine,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },
);

export const dataSlice = createSlice({
  name: name,
  initialState: {
    chartSymbol: '',
    chartTimeLine: '',
    nowPrice: 0,
    nowChange: 0,
    chartData: [] as IData[],
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending.type]: (state, action) => {
      // console.log('fetchDefaultData Pending ...');
    },
    [fetchData.fulfilled.type]: (state, action) => {
      state.chartSymbol = action?.payload?.chartSymbol!;
      state.nowPrice = action?.payload?.nowPrice!;
      state.nowChange = action?.payload?.nowChange!;
    },
    [fetchData.rejected.type]: (state, action) => {
      // console.error('fetchDefaultData Error');
    },
    [fetchChartData.pending.type]: (state, action) => {
      // console.log('fetchDefaultData Pending ...');
    },
    [fetchChartData.fulfilled.type]: (state, action) => {
      state.chartData = action?.payload?.chartData!;
      state.chartTimeLine = action?.payload?.chartTimeLine!;
    },
    [fetchChartData.rejected.type]: (state, action) => {
      // console.error('fetchDefaultData Error');
    },
  },
});

// Action creators are generated for each case reducer function
export default dataSlice.reducer;
