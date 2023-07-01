// CharacterList.js
import React from 'react';
import { Link } from 'react-router-dom';

function CharacterList({ characters }) {
  return (
    <div>
      {characters.map((character) => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default CharacterList;






