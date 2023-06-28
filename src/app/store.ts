import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
//reducers
import globalReducer from "./slices/globalSlices"



export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
