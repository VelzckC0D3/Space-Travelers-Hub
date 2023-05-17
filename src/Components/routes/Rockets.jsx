import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchRockets from '../redux/Rockets/FetchRockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
    </div>
  );
};

export default Rockets;
