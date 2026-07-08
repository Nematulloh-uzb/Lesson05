import { createSlice } from '@reduxjs/toolkit';

const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

const usersSlice = createSlice({
  name: "users",

  initialState: savedUsers,

  reducers: {
    userName: (state, action) => {
      state.push(action.payload);

      localStorage.setItem(
        "users",
        JSON.stringify(state)
      );
    },

    removeUsers: (state, action) => {
      state.splice(action.payload, 1);

      localStorage.setItem(
        "users",
        JSON.stringify(state)
      );
    }
  }
});

export const { userName, removeUsers } = usersSlice.actions;

export default usersSlice.reducer;