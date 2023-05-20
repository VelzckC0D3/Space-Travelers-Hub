import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../Components/routes/Profile';

const mockStore = configureStore([]);

test('renders Profile component', () => {
  const store = mockStore({
    Missions: {
      missions: [
        {
          id: 1,
          name: 'Mission 1',
          joined: true,
        },
        {
          id: 2,
          name: 'Mission 2',
          joined: false,
        },
      ],
    },
    Rockets: {
      rockets: [
        {
          id: 1,
          name: 'Rocket 1',
          reserved: true,
        },
        {
          id: 2,
          name: 'Rocket 2',
          reserved: false,
        },
      ],
    },
  });

  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  // Assert the presence of joined missions
  const joinedMission1 = screen.getByText('Mission 1');
  expect(joinedMission1).toBeInTheDocument();

  const joinedMission2 = screen.queryByText('Mission 2');
  expect(joinedMission2).not.toBeInTheDocument();

  // Assert the presence of reserved rockets
  const reservedRocket1 = screen.getByText('Rocket 1');
  expect(reservedRocket1).toBeInTheDocument();

  const reservedRocket2 = screen.queryByText('Rocket 2');
  expect(reservedRocket2).not.toBeInTheDocument();

  // Add more assertions if needed
});
