import React from 'react';
import PropTypes from 'prop-types';

function InputButton(props) {
  InputButton.propTypes = {
    value: PropTypes.string.isRequired, // Validate the 'value' prop
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  const { value, className, onClick } = props; // Destructure 'value' directly from props

  return (
    <input className={className} type="button" value={value} onClick={onClick} />
  );
}

export default InputButton;
