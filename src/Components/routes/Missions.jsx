import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchMissions from '../redux/Missions/FetchMissions';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
};

export default Missions;
