import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk('mission/fetchRockets', async () => {
  const response = await fetch(url);
  const data = await response.json();

  // Extracting mission_id, mission_name, and description from the API response
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    rocket_type: rocket.rocket_type,
    flickr_images: rocket.flickr_images,
  }));

  return rockets;
});

export default fetchRockets;
