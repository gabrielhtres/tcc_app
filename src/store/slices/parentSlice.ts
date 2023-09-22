import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parents: {
    analysis: {
      id: undefined,
      name: '',
    },
    plot: {
      id: undefined,
      name: '',
    },
    phase: {
      id: undefined,
      name: '',
    },
    disease: {
      id: undefined,
      name: '',
    },
  },
};

const parentSlice = createSlice({
  name: 'parent',
  initialState,
  reducers: {
    setParent: (state, action) => {
      state.parents = action.payload;
    },
  },
});

export const { setParent } = parentSlice.actions;
export default parentSlice.reducer;
