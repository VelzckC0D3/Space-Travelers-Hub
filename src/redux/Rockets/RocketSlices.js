import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './FetchRockets';

// Helper function to get reserved rockets from local storage
function getReservedRockets() {
  const reservedRockets = localStorage.getItem('reservedRockets');
  return reservedRockets ? JSON.parse(reservedRockets) : [];
}

// Helper function to save reserved rockets to local storage
function saveReservedRockets(reservedRockets) {
  localStorage.setItem('reservedRockets', JSON.stringify(reservedRockets));
}

const initialState = {
  rockets: getReservedRockets(),
  loading: false,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reservedRocket: (state, action) => {
      const rocketId = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return { ...rocket, reserved: !rocket.reserved }; // Toggle the `reserved` property
        }
        return rocket;
      });
      saveReservedRockets(updatedRockets); // Save updated reserved rockets to local storage
      return { ...state, rockets: updatedRockets };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        rockets: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state) => ({
        ...state,
        loading: false,
      }));
  },
});

export const { reservedRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
