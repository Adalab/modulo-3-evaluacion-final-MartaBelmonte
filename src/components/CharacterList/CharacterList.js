// CharacterList.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function CharacterList({ characters }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  if (selectedCharacter) {
    return <Navigate to={`/character/${selectedCharacter.id}`} />;
  }

  return (
    <div>
      <input type="text" placeholder="Search by name" />

      {characters.length === 0 ? (
        <div>No hay ningún personaje disponible.</div>
      ) : (
        characters.map((character) => (
          <div key={character.id} onClick={() => handleCharacterClick(character)}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CharacterList;













