import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../../redux/Rockets/FetchRockets';
import { reservedRocket } from '../../redux/Rockets/RocketSlices';
import '../../style/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);

  useEffect(() => {
    // Fetch rockets only if the rockets data is empty
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  const handleReserveRocket = (rocketId) => {
    dispatch(reservedRocket(rocketId));
  };

  return (
    <>
      <ul className="rocketsCont">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket">
            <div
              className="rocketImg"
              style={{ backgroundImage: `url(${rocket.images[0]})` }}
              alt="Rocket_Image"
            />
            <div className="rocketInf">
              <h2 className="rocketName">{rocket.name}</h2>
              <p className="rocketDesc">
                {rocket.reserved && <span className="reservedSpan">Reserved</span>}
                {rocket.description}
              </p>
              <button
                type="button"
                className={`rocketBtn ${rocket.reserved ? 'reserved' : ''}`}
                onClick={() => handleReserveRocket(rocket.id)}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Rockets;
