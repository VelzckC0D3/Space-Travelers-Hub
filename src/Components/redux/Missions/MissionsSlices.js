import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from './FetchMissions';

const initialState = {
  missions: [],
  loading: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
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

export default missionSlice.reducer;
