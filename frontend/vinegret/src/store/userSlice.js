import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", phone: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    clearUserInfo(state) {
      state.name = "";
      state.phone = "";
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
