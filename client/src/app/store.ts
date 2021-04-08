import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';
import userReducer from '../features/user/userSlice';
import logger from 'redux-logger';

// configureStore()
// wraps createStore to provide simplified
// configuration options and good defaults.
// It can automatically combine your slice reducers,
// adds whatever Redux middleware you supply,
// includes redux-thunk by default,
// and enables use of the Redux DevTools Extension.

export default configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENF !== 'production',
});
