import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tabReducer from './slices/tabSlice';
import headerReducer from './slices/headerSlice';
import parentReducer from './slices/parentSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tab: tabReducer,
    header: headerReducer,
    parent: parentReducer,
  },
});

export default store;
