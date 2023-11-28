import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tabReducer from './slices/tabSlice';
import headerReducer from './slices/headerSlice';
import parentReducer from './slices/parentSlice';
import menuReducer from './slices/menuSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tab: tabReducer,
    header: headerReducer,
    parent: parentReducer,
    menu: menuReducer,
  },
});

export default store;
