import { configureStore } from '@reduxjs/toolkit';
import userSlice, { rootSlice } from './slices/user-slice';
import clientSlice from './slices/client-slice';

const store = configureStore({
  reducer: {
    client: clientSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
