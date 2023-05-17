import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../redux/Rockets/FetchRockets';
import '../../style/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <ul className="rockets-container">
        {rockets.map((rocket) => (
          <>
            <li key={rocket.id} className="rocket-list">
              <div>
                <img src={rocket.images[0]} alt="RocketImage" className="rocket-img" />
              </div>
              <div className="rocket-inf">
                <h2 className="rocket-name">{rocket.name}</h2>
                <p className="rocket-des">{rocket.description}</p>
                <button type="button" className="rocket-btn">Reserve Rocket</button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
