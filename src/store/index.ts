import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tabReducer from './slices/tabSlice';
import headerReducer from './slices/headerSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tab: tabReducer,
    header: headerReducer,
  },
});

export default store;
