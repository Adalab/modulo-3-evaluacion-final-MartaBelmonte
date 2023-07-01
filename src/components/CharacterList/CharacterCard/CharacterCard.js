import React from 'react';

function CharacterCard({ character, handleCharacterClick }) {
  const handleClick = () => {
    handleCharacterClick(character);
  };

  return (
    <div onClick={handleClick}>
      <img src={character.image} alt={character.name} />
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}

export default CharacterCard;

