import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function CharacterList({ characters, nameFilter, speciesFilter }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  if (selectedCharacter) {
    return <Navigate to={`/character/${selectedCharacter.id}`} />;
  }

  const filteredCharacters = characters.filter((character) => {
    const nameMatch =
      character.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      nameFilter.trim() === '';
    const speciesMatch =
      character.species.toLowerCase().includes(speciesFilter.toLowerCase()) ||
      speciesFilter.trim() === '';

    return nameMatch && speciesMatch;
  });

  return (
    <div className="character-list">
      {filteredCharacters.length === 0 ? (
        <div>No hay ningún personaje disponible.</div>
      ) : (
        filteredCharacters.map((character) => (
          <div
            key={character.id}
            onClick={() => handleCharacterClick(character)}
            className="character-item"
          >
            <img src={character.image} alt={character.name} />
            <p className='bold-name'>{character.name}</p>
            <p>{character.species}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CharacterList;















