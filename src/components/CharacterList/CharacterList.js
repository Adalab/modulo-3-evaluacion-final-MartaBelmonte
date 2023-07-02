// CharacterList.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

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

  const sortedCharacters = [...filteredCharacters].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="character-list">
      {sortedCharacters.length === 0 ? (
        <div>No hay ningún personaje disponible.</div>
      ) : (
        sortedCharacters.map((character) => (
          <div
            key={character.id}
            onClick={() => handleCharacterClick(character)}
            className="character-item"
          >
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>{character.species}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CharacterList;













