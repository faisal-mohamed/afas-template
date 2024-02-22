import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ConfigurationInitialState } from "./types";

const initialState: ConfigurationInitialState = {
  accountMapping: {
    filteredAccounts: [],
    isFilterOpen: false,
    isAddAccountPanel: false,
    loadPage: false,
    selectedGroup: {
      groupName: "",
      id: 0,
      accountIds: [],
    },
  },
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setAccountMappingData: {
      reducer: (
        state,
        action: PayloadAction<ConfigurationInitialState["accountMapping"]>
      ) => {
        state.accountMapping = action.payload;
      },
      prepare(filterData: any, changedData: any) {
        return { payload: { ...filterData, ...changedData } };
      },
    },
    setIsAddAccountPanel: {
      reducer: (
        state,
        action: PayloadAction<
          ConfigurationInitialState["accountMapping"]["isAddAccountPanel"]
        >
      ) => {
        state.accountMapping.isAddAccountPanel = action.payload;
      },
      prepare(changedData: any) {
        return { payload: changedData };
      },
    },
    setConfigPageLoad: {
      reducer: (
        state,
        action: PayloadAction<
          ConfigurationInitialState["accountMapping"]["loadPage"]
        >
      ) => {
        state.accountMapping.loadPage = action.payload;
      },
      prepare(changedData: any) {
        return { payload: changedData };
      },
    },
    setSelectedGroup: {
      reducer: (
        state,
        action: PayloadAction<
          ConfigurationInitialState["accountMapping"]["selectedGroup"]
        >
      ) => {
        state.accountMapping.selectedGroup = action.payload;
      },
      prepare(filterData: any, changedData: any) {
        return { payload: { ...filterData, ...changedData } };
      },
    },
  },
});

export const { setAccountMappingData, setSelectedGroup,setIsAddAccountPanel,setConfigPageLoad } =
  configurationSlice.actions;

export default configurationSlice.reducer;
