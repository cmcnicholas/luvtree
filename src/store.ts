import {configureStore} from '@reduxjs/toolkit';
import {reducer as mapReducer} from './reducers/mapReducer';

export const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
