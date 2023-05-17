import { configureStore } from '@reduxjs/toolkit';
import MissionsReducer from './Missions/MissionsSlices';

const store = configureStore({
  reducer: {
    Missions: MissionsReducer,
  },
});

export default store;
