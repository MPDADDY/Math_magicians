import React from 'react';
import Home from '../components/Home';

test('renders the Home component with content', () => {
  const result = Home();
  expect(result).toEqual(
    <div className="home">
      <h1>Welcome on board</h1>
      <p>This is a React web App  for arithmetic and scientific calculations.</p>
      <p>Navigate to calculator whenever you want to do some atithmetic calculations</p>
    </div>
  )
});