import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Quote from '../components/Quote';

describe('components renders correctly', () => {

  it('renders the Home component with content', () => {
    const result = Home();
    expect(result).toEqual(
      <div className="home">
        <h1>Welcome on board</h1>
        <p>This is a React web App  for arithmetic and scientific calculations.</p>
        <p>Navigate to calculator whenever you want to do some atithmetic calculations</p>
      </div>,
    );
  });

  it('home components renders correctly', () => {
    const tree = renderer
    .create(<Home page="/">Home</Home>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calculator components renders correctly', () => {
    const tree = renderer
    .create(<Calculator page="/Calculator">Calculator</Calculator>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('quote components renders correctly', () => {
    const tree = renderer
    .create(<Quote page="/Quote">Quotes</Quote>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
