import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from './FetchMissions';

// Helper function to get joined missions from local storage
function getJoinMissions() {
  const joinedMissions = localStorage.getItem('joinedMissions');
  return joinedMissions ? JSON.parse(joinedMissions) : [];
}

// Helper function to save joined missions to local storage
function saveJoinMissions(joinedMissions) {
  localStorage.setItem('joinedMissions', JSON.stringify(joinedMissions));
}

const initialState = {
  missions: getJoinMissions(),
  loading: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinedMissions: (state, action) => {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.id === missionId) {
          return { ...mission, joined: !mission.joined }; // Toggle the `joined` property
        }
        return mission;
      });
      saveJoinMissions(updatedMissions); // Save updated joined missions to local storage
      return { ...state, missions: updatedMissions };
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

export const { joinedMissions } = missionSlice.actions;
export default missionSlice.reducer;
