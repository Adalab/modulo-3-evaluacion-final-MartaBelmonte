// Filters.js
import React from 'react';

function Filters({ handleFilterChange }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}></form>
  );
}

export default Filters;



