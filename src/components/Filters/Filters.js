// Filters.js
import React from 'react';

function Filters({ handleFilterChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    handleFilterChange(value);
  };

  return (
    <form onSubmit={handleSubmit} className="filters">
      <input type="text" placeholder="Search by name" onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Filters;



