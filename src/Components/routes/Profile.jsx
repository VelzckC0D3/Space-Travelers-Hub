import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservedRocket } from '../../redux/Rockets/RocketSlices';
import '../../style/Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.Missions.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);
  // eslint-disable-next-line max-len
  const reservedRockets = useSelector((state) => state.Rockets.rockets.filter((rocket) => rocket.reserved));

  useEffect(() => {
    dispatch(reservedRocket());
  }, [missions, dispatch]);

  return (
    <div className="profileCont">
      <div className="missions">
        <h2 className="profileTitle">My Missions</h2>
        <table className="joinedTable">
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.id}>
                <td className="joinedTd">{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rockets">
        <h2 className="profileTitle">My Rockets</h2>
        <table className="reservedTable">
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td className="reservedTd">{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
