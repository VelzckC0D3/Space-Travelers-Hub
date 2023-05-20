import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../Components/routes/Rockets';

const mockStore = configureStore([]);

test('renders Rockets component', () => {
  const store = mockStore({
    Rockets: {
      rockets: [
        {
          id: 1,
          name: 'Rocket 1',
          description: 'Description 1',
          images: ['rocket1.jpg'],
          reserved: true,
        },
        {
          id: 2,
          name: 'Rocket 2',
          description: 'Description 2',
          images: ['rocket2.jpg'],
          reserved: false,
        },
      ],
    },
  });

  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  // Assert the presence of rocket data
  const rocket1Name = screen.getByText('Rocket 1');
  expect(rocket1Name).toBeInTheDocument();

  const rocket1Desc = screen.getByText('Description 1');
  expect(rocket1Desc).toBeInTheDocument();

  const rocket2Name = screen.getByText('Rocket 2');
  expect(rocket2Name).toBeInTheDocument();

  const rocket2Desc = screen.getByText('Description 2');
  expect(rocket2Desc).toBeInTheDocument();

  // Assert the presence of buttons and handle click
  const reservedRocketBtn = screen.getByText('Cancel Reservation');
  expect(reservedRocketBtn).toBeInTheDocument();

  const reserveRocketBtn = screen.getByText('Reserve Rocket');
  expect(reserveRocketBtn).toBeInTheDocument();

  fireEvent.click(reserveRocketBtn);

  // Assert the change in button text after click
  const cancelReservationBtn = screen.getByText('Cancel Reservation');
  expect(cancelReservationBtn).toBeInTheDocument();

  // Add more assertions if needed
});
