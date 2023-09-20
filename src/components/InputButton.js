import React from 'react';
import PropTypes from 'prop-types';

function InputButton(props) {
  const { value, className } = props; // Destructure 'value' directly from props
  return (
    <input className={className} type="button" value={value} />
  );
}

InputButton.propTypes = {
  value: PropTypes.string.isRequired, // Validate the 'value' prop
  className: PropTypes.string.isRequired,
};

export default InputButton;
