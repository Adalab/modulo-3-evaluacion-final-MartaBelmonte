import React from 'react';

function CharacterDetail({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
      {/* Agrega más detalles del personaje aquí */}
    </div>
  );
}

export default CharacterDetail;

