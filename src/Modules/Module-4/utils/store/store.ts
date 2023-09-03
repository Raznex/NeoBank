import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import prescoringSlice from './Reducer/prescoringSlice';


export const setupStore = configureStore({
  reducer: { prescoringSlice },
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
