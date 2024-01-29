import React from 'react';

const Letter = ({ value, isDisabled, onSelect, isVisible, isSolution }) => {
  const handleClick = () => {
    if (!isDisabled && !isSolution) {
      onSelect(value);
    }
  };

  return (
    <span
      onClick={handleClick}
      className={`letter ${isDisabled ? 'disabled' : ''} ${
        isVisible ? 'visible' : 'hidden'
      } ${isSolution ? 'solution' : ''}`}
    >
      {isSolution ? (isVisible ? value : '_') : value}
    </span>
  );
};

export default Letter;
