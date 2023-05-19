import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/Profile.css';

const Profile = () => {
  const joinedMissions = useSelector(
    (state) => state.Missions.missions.filter((mission) => mission.reserved),
  );

  return (
    <div>
      <h2 className="missionsH2">My Missions</h2>
      <ul>
        {joinedMissions.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
