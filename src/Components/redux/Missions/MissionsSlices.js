import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from './FetchMissions';

const initialState = {
  missions: [],
  loading: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinigMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        missions: action.payload,
      }))
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
        loading: false,
      }));
  },
});

export const { joinigMission } = missionSlice.actions;
export default missionSlice.reducer;
