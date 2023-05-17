import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './FetchRockets';

const initialState = {
  rockets: [],
  loading: false,
};

const rocketSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
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

export default rocketSlice.reducer;
