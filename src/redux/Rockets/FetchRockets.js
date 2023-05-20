import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk('mission/fetchRockets', async () => {
  const response = await fetch(url);
  const data = await response.json();

  // Extracting mission_id, mission_name, and description from the API response
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
    reserved: false,
  }));

  return rockets;
});

export default fetchRockets;
