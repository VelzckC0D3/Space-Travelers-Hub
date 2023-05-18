import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../redux/Missions/FetchMissions';
import '../../style/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.Missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <table className="missionsCont">
      <thead>
        <tr className="mission">
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
              <button className="memberBtn missionBtn" type="button">NOT A MEMBER</button>
            </td>
            <td align="center" className="btnCont">
              <button className="joinBtn missionBtn" type="button">Join Mission</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
