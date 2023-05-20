import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Components/routes/Missions';

const mockStore = configureStore([]);

test('renders Missions component', () => {
  const store = mockStore({
    Missions: {
      missions: [
        {
          id: 1,
          name: 'Mission 1',
          description: 'Description 1',
          joined: true,
        },
        {
          id: 2,
          name: 'Mission 2',
          description: 'Description 2',
          joined: false,
        },
      ],
    },
  });

  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  // Assert the presence of mission data
  const mission1Name = screen.getByText('Mission 1');
  expect(mission1Name).toBeInTheDocument();

  const mission1Desc = screen.getByText('Description 1');
  expect(mission1Desc).toBeInTheDocument();

  const mission2Name = screen.getByText('Mission 2');
  expect(mission2Name).toBeInTheDocument();

  const mission2Desc = screen.getByText('Description 2');
  expect(mission2Desc).toBeInTheDocument();

  // Assert the presence of buttons and handle click
  const activeMemberBtn = screen.getByText('Active Member');
  expect(activeMemberBtn).toBeInTheDocument();

  const notMemberBtn = screen.getByText('Not a Member');
  expect(notMemberBtn).toBeInTheDocument();

  const joinMissionBtn = screen.getByText('Join Mission');
  expect(joinMissionBtn).toBeInTheDocument();

  fireEvent.click(joinMissionBtn);

  // Assert the change in button text after click
  const leaveMissionBtn = screen.getByText('Leave Mission');
  expect(leaveMissionBtn).toBeInTheDocument();
});
