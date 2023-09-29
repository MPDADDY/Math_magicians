import operate from '../logic/operate';

test('should perform addition correctly', () => {
  const addition = operate('5', '3', '+');
  const subtraction = operate('5', '3', '-');
  expect(addition).toEqual('8');
  expect(subtraction).toEqual('2');
});
