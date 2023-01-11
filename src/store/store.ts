import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './features/modal/modalSlice';
import errorReducer from './features/error/errorSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
