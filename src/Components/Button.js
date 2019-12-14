import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, handleClick } = props;
  return (
    <button className={`buttons-${name}`} type="button" aria-label={name} onClick={handleClick} />
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
