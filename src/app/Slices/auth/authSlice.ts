import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface AuthInitialState {
  user: string;
  token: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    token: "",
  },
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthInitialState>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      sessionStorage.removeItem("auth-token");
      sessionStorage.removeItem("currentSessionUser");
      state.user = "";
      state.token = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
