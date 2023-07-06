import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attribute: "",
};

export const chooseAttrSlice = createSlice({
  name: "chooseAttr",
  initialState,
  reducers: {
    select: (state, action) => {
      state.attribute = action.payload;
    },
    reset: (state) => {
      state.attribute = "";
    },
  },
});

export const { select, reset } = chooseAttrSlice.actions;

export default chooseAttrSlice.reducer;
