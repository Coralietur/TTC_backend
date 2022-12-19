import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // value: { email: null,  infoUser: "" },
  value: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    addIduser: (state,action)=>{
      state.value.infoUser = action.payload
    }
    ,
    collectData : (state,action )=>{

      state.value=action.payload


    },
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.email = action.payload.email;
      state.value.nom = action.payload.nom;
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

export const { login, logout , addIduser,collectData} = userSlice.actions;
export default userSlice.reducer;