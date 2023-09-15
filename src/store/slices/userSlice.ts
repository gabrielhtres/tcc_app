import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    name: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
