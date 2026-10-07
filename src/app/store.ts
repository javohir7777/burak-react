import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "./screens/homePage/slice";
import productsPageReducer from "./screens/productsPage/slice";
import reduxLogger from "redux-logger";
import ordersPageReducer from "./screens/ordersPage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: homePageReducer,
    productsPage: productsPageReducer,
    ordersPage: ordersPageReducer,
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
