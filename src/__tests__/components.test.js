import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Quote from '../components/Quote';
import InputButton from '../components/InputButton';
import InputText from '../components/InputText';

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

describe('InputButton Component', () => {
  it('renders without crashing', () => {
    const component = renderer.create(
      <InputButton
        value="Click Me"
        className="test-button"
        onClick={() => {}}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const component = renderer.create(
      <InputButton
        value="Click Me"
        className="test-button"
        onClick={onClickMock}
      />,
    );

    const buttonInstance = component.root.findByType('input');
    buttonInstance.props.onClick();

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

describe('InputText Component', () => {
  it('renders without crashing', () => {
    const component = renderer.create(
      <InputText
        value="Test Input"
        className="test-input"
        onClick={() => {}}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onClick function with the button value when clicked', () => {
    const onClickMock = jest.fn();
    const component = renderer.create(
      <InputText
        value="Test Input"
        className="test-input"
        onClick={onClickMock}
      />,
    );

    const buttonInstance = component.root.findByType('input');
    buttonInstance.props.onClick();

    expect(onClickMock).toHaveBeenCalledWith('Test Input');
  });
});
