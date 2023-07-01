// CharacterList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CharacterList({ characters }) {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search by name"
      />

      {filteredCharacters.length === 0 ? (
        <div>No hay ningún personaje que coincida con la palabra buscada.</div>
      ) : (
        filteredCharacters.map((character) => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </Link>
        ))
      )}
    </div>
  );
}

export default CharacterList;












