import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/baseApiSetup";
import { setupListeners } from "@reduxjs/toolkit/query";
import filterSlice from "./Slices/filterSlice";
import authSlice from "./Slices/auth/authSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    FilterState: filterSlice,
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
