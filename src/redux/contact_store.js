import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contact_slice';

import { persistStore } from 'redux-persist';

import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
