import calculate from '../logic/calculate';

{ /* import {render, screen, fireEvent} from '@testing-library/react'; */ }

test('should reset the calculator when AC button is pressed', () => {
  const initialState = {
    total: '123',
    next: '456',
    operation: '+',
  };

  const result = calculate(initialState, 'AC');

  expect(result).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});
