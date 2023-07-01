// CharacterList.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function CharacterList({ characters, filterValue }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  if (selectedCharacter) {
    return <Navigate to={`/character/${selectedCharacter.id}`} />;
  }

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      {filteredCharacters.length === 0 ? (
        <div>No hay ningún personaje disponible.</div>
      ) : (
        filteredCharacters.map((character) => (
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













