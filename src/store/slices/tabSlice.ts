import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTabTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setTabTitle } = tabSlice.actions;
export default tabSlice.reducer;
