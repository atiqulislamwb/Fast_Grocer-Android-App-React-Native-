import {configureStore} from '@reduxjs/toolkit';

import {fastGrocerApi} from './services/fastGrocerApi';

export const store = configureStore({
  reducer: {
    [fastGrocerApi.reducerPath]: fastGrocerApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fastGrocerApi.middleware),
});
