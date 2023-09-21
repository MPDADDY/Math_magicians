import React from 'react';
import PropTypes from 'prop-types';

function InputButton(props) {
  const { value, className, onClick } = props;

  return (
    <input
      className={className}
      type="button"
      value={value}
      onClick={() => onClick(value)} // Pass the button value to the click handler
    />
  );
}

InputButton.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default InputButton;
