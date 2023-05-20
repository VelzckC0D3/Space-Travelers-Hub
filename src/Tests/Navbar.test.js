import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar';

test('renders Navbar component', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );

  // Assert the presence of the logo
  const logo = screen.getByAltText('Logo');
  expect(logo).toBeInTheDocument();

  // Assert the presence of the title
  const title = screen.getByText("Space Travelers' Hub");
  expect(title).toBeInTheDocument();

  // Assert the presence of the nav links
  const rocketsLink = screen.getByText('Rockets');
  expect(rocketsLink).toBeInTheDocument();

  const missionsLink = screen.getByText('Missions');
  expect(missionsLink).toBeInTheDocument();

  const profileLink = screen.getByText('My Profile');
  expect(profileLink).toBeInTheDocument();
});
