import React, { useState } from 'react';

function Filters({ handleFilterChange }) {
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilterChange(nameFilter, speciesFilter);
  };

  const handleNameInputChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleSpeciesInputChange = (event) => {
    setSpeciesFilter(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="filters">
      <input
        type="text"
        placeholder="Search by name"
        className="input-filters"
        value={nameFilter}
        onChange={handleNameInputChange}
      />
      <input
        type="text"
        placeholder="Search by species"
        className="input-filters"
        value={speciesFilter}
        onChange={handleSpeciesInputChange}
      />
      <button type="submit" className="input-button">
        Search
      </button>
    </form>
  );
}

export default Filters;





