import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { commonSliceState } from "./types";

const initialState: commonSliceState = {
  canvasFields: {
    isOffcanvasOpen: false,
    data: [],
    title: "",
    mainId:'',
    fields: [],
  },
};
const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setIsOffcanvasOpen: (
      state,
      action: PayloadAction<commonSliceState["canvasFields"]>
    ) => {
      state.canvasFields = action.payload;
    },
  },
});

export const { setIsOffcanvasOpen } = commonSlice.actions;

export default commonSlice.reducer;
