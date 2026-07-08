import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Features/CounterSlice';
import usersReducer from "./Features/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
})