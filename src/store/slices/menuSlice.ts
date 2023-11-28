import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuVisible: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setMenuVisible } = menuSlice.actions;
export default menuSlice.reducer;
