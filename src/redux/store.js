import { configureStore } from '@reduxjs/toolkit';
import { API } from 'services/API';
import { filterSlice } from './slice';

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    API.middleware,
  ],
});


