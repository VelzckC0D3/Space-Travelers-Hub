import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/Profile.css';

const Profile = () => {
  const joinedMissions = useSelector(
    (state) => state.Missions.missions.filter((mission) => mission.reserved),
  );

  return (
    <div>
      <h1 className="missionsH1">Missions</h1>
      <h2>Joined Missions:</h2>
      <ul>
        {joinedMissions.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
