import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'shared/ui/api/baseApi';

export const store = configureStore({
  reducer: {
    api: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});