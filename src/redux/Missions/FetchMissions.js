import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk('mission/fetchMissions', async () => {
  const response = await fetch(url);
  const data = await response.json();

  // Extracting mission_id, mission_name, and description from the API response
  const missions = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    joined: false,
  }));

  return missions;
});

export default fetchMissions;
