import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logOut } from "../Slices/auth/authSlice";
import { RootState } from "../store";

const API_URL = import.meta.env.VITE_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { auth } = getState() as RootState;
    if (auth.token) {
      headers.set("Authorization", `Bearer ${auth.token}`);
      headers.set("srcuserid", auth.user);
      headers.set("authenticate", "true");
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    // logout
    sessionStorage.setItem("auth-token", "");
    api.dispatch(logOut());
    window.location.href = "/login";
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "/rest/1.0/aws/config/authenticate",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
  reducerPath: "baseApi",
});

export const { useLoginMutation } = api;
