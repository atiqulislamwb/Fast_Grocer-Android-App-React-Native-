import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {fastGrocerApi} from './services/fastGrocerApi';

export const store = configureStore({
  reducer: {
    [fastGrocerApi.reducerPath]: fastGrocerApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fastGrocerApi.middleware),
});
setupListeners(store.dispatch);
