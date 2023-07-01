import React from 'react';
import CharacterCard from './CharacterCard/CharacterCard';

function CharacterList({ characters, filteredCharacters, handleCharacterClick }) {
  const charactersToDisplay = filteredCharacters.length > 0 ? filteredCharacters : characters;

  return (
    <div>
      {charactersToDisplay.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          handleCharacterClick={handleCharacterClick}
        />
      ))}
    </div>
  );
}

export default CharacterList;



