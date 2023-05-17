import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../redux/Rockets/FetchRockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {rockets.map((rocket) => (
          <>
            <li key={rocket.id}>
              <div>
                <img src={rocket.images[0]} alt="RocketImage" />
              </div>
              <div>
                <h2>{rocket.name}</h2>
                <p>{rocket.description}</p>
                <button type="button">Reserve Rocket</button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
