import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InventoryReduxState } from "./types";

const initialState: InventoryReduxState = {
  inventoryState: {
    page: 0,
    limit: 10,
    nextToken: [],
    isPageReachedEnd: false,
  },
};
const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventoryState: {
      reducer: (
        state,
        action: PayloadAction<InventoryReduxState["inventoryState"]>
      ) => {
        state.inventoryState = action.payload;
      },
      prepare(filterData, changedData) {
        const payload = { ...filterData, ...changedData };

      
        return { payload };
      },
    },
  },
});

export const { setInventoryState } = inventorySlice.actions;

export default inventorySlice.reducer;
