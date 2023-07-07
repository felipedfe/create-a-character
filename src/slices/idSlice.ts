import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  eyes: 1,
  nose: 1,
  mouth: 1,
}

const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    updateEyes: (state, action: PayloadAction<number>) => {
      state.eyes = action.payload;
    },
    updateNose: (state, action: PayloadAction<number>) => {
      state.nose = action.payload;
    },
    updateMouth: (state, action: PayloadAction<number>) => {
      state.mouth = action.payload;
    },
  }
});

export const {updateEyes, updateNose, updateMouth} = idSlice.actions;

export default idSlice.reducer;
