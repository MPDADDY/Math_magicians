import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Button from '../components/InputButton';

test('renders a button with children', () => {
  render(<InputButton value="4" onClick={() => handleButtonClick('4')} />);
  const buttonElement = screen.getByText('4');
  expect(buttonElement).toBeInTheDocument();
});





