import React from 'react';
import { render } from '@testing-library/react';
import AppBase from './AppBase';

test('renders learn react link', () => {
  const { getByText } = render(<AppBase />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
