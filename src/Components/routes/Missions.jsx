import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../../redux/Missions/FetchMissions';
import '../../style/Missions.css';
import { joinedMissions } from '../../redux/Missions/MissionsSlices';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.Missions.missions);

  useEffect(() => {
    // Fetch missions only if the missions data is empty
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  const handleJoinMission = (missionId) => {
    dispatch(joinedMissions(missionId));
  };

  return (
    <table className="missionsCont">
      <thead>
        <tr>
          <th className="tableTop">Mission</th>
          <th className="tableTop">Description</th>
          <th className="tableTop">Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id} className="mission">
            <td valign="top" className="missionName">{mission.name}</td>
            <td className="missionDesc">{mission.description}</td>
            <td align="center" className="btnCont">
              <button
                className={`memberBtn missionBtn ${mission.joined ? 'member' : ''}`}
                type="button"
              >
                {mission.joined ? 'Active Member' : 'Not a Member'}
              </button>
            </td>
            <td align="center" className="btnCont">
              <button
                className={`joinBtn missionBtn ${mission.joined ? 'joined' : ''}`}
                type="button"
                onClick={() => {
                  handleJoinMission(mission.id);
                }}
              >
                {mission.joined ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
