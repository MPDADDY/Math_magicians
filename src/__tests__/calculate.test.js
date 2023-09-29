import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should reset the calculator data when buttonName is "AC"', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle numeric button clicks and update "next"', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, '5');
    expect(result).toEqual({ total: '123', next: '4565', operation: '+' });
  });

  it('should handle numeric button "0" with existing next value', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, '0');
    expect(result).toEqual({ total: '123', next: '4560', operation: '+' });
  });

  it('should handle numeric button "0" when next is "0"', () => {
    const result = calculate({ total: '123', next: '0', operation: '+' }, '0');
    expect(result).toEqual({});
  });

  it('should handle decimal point button "."', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, '.');
    expect(result).toEqual({ total: '123', next: '456.', operation: '+' });
  });

  it('should handle decimal point when it already exists in next', () => {
    const result = calculate({ total: '123', next: '456.78', operation: '+' }, '.');
    expect(result).toEqual({ total: '123', next: '456.78', operation: '+' });
  });

  it('should handle "=" button when there is a calculation to perform', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, '=');
    expect(result).toEqual({ total: '579', next: null, operation: null });
  });

  it('should do nothing when "=" is pressed without a calculation', () => {
    const result = calculate({ total: '123', next: '456', operation: null }, '=');
    expect(result).toEqual({});
  });

  it('should handle "+/-" button when next exists', () => {
    const result = calculate({ total: null, next: '456', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-456', operation: null });
  });

  it('should handle "+/-" button when total exists', () => {
    const result = calculate({ total: '123', next: null, operation: null }, '+/-');
    expect(result).toEqual({ total: '-123', next: null, operation: null });
  });

  it('should handle operator button press with no existing data', () => {
    const result = calculate({}, '+');
    expect(result).toEqual({ operation: '+' });
  });

  it('should handle operator button press after "="', () => {
    const result = calculate({ total: '123', next: null, operation: null }, '+');
    expect(result).toEqual({ total: '123', next: null, operation: '+' });
  });

  it('should handle operator button press with an existing operation', () => {
    const result = calculate({ total: '123', next: '456', operation: '-' }, '+');
    expect(result).toEqual({ total: '-333', next: null, operation: '+' });
  });
});
