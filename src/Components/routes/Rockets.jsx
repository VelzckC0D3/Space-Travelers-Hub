import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../redux/Rockets/FetchRockets';
import '../../style/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <ul className="rocketsCont">
        {rockets.map((rocket) => (
          <>
            <li key={rocket.id} className="rocket">
              <div
                className="rocketImg"
                style={{ backgroundImage: `url(${rocket.images[0]})` }}
                alt="Rocket_Image"
              />
              <div className="rocketInf">
                <h2 className="rocketName">{rocket.name}</h2>
                <p className="rocketDes">{rocket.description}</p>
                <button type="button" className="rocketBtn">Reserve Rocket</button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Rockets;
