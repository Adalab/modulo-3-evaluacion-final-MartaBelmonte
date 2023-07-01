import React from 'react';

function Filters({ filterValue, handleFilterChange }) {
  return (
    <input
      type="text"
      value={filterValue}
      onChange={handleFilterChange}
      placeholder="Search by name"
    />
  );
}

export default Filters;
