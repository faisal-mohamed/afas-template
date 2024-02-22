import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  commonFilter: {
    accountId: [],
    severity: [],
    resourceType: [],
    configRules: [],
    packageName: [],
    packageManager: [],
    status: [],
    type: [],
    conformancePack: "",
    principalName: [],
    principalType: [],
    permissionSetName: [],
  },
  selectedDate: {
    fromDate: 0,
    toDate: 0,
  },
};

const filterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    setFilterData: {
      reducer: (
        state,
        action: PayloadAction<FilterSliceState["commonFilter"]>
      ) => {
        state.commonFilter = action.payload;
      },
      prepare(filterData: any, changedData: any) {
        return { payload: { ...filterData, ...changedData } };
      },
    },
    setDateFilter: (
      state,
      action: PayloadAction<FilterSliceState["selectedDate"]>
    ) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setFilterData, setDateFilter } = filterSlice.actions;

export default filterSlice.reducer;
