import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { email: null, places: [] },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
      state.value.code_creche = action.payload.code_creche;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.email = null;
      state.value.password = null;
      state.value.code_creche = null;
    },
  },
});

export const { login, logout} = userSlice.actions;
export default userSlice.reducer;