import React from 'react';
import { Link } from 'react-router-dom';

function CharacterList({ characters, filteredCharacters }) {
  const charactersToDisplay = filteredCharacters.length > 0 ? filteredCharacters : characters;

  return (
    <div>
      {charactersToDisplay.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <div>
            <img src={character.image} alt={character.name} />
            <p>Name: {character.name}</p>
            <p>Species: {character.species}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CharacterList;

