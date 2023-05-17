import { configureStore } from '@reduxjs/toolkit';
import MissionsReducer from './Missions/MissionsSlices';
import RocketReducers from './Rockets/RocketSlices';

const store = configureStore({
  reducer: {
    Missions: MissionsReducer,
    Rockets: RocketReducers,
  },
});

export default store;
