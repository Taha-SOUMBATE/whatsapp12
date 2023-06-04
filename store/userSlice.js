import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    storedUsers: {},
  },
  reducers: {
    setStoredUsers: (state, action) => {
      const newUsers = action.payload.newUsers;
      const existingUsers = state.storedUsers || {};

      const usersArray = Object.values(newUsers);
      for (let i = 0; i < usersArray.length; i++) {
        const userData = usersArray[i];
        if (userData && userData.userId) {
          // Add null check here
          existingUsers[userData.userId] = userData;
        }
      }

      state.storedUsers = existingUsers;
    },
  },
});

export const { setStoredUsers } = userSlice.actions;
export default userSlice.reducer;
