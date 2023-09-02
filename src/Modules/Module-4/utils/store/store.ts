import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

import postPrescoring from './Reducer/prescoringSlice';


export const rootReducer = combineReducers({
  postPrescoring,
});
export const setupStore = configureStore({
  reducer: { rootReducer },
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
