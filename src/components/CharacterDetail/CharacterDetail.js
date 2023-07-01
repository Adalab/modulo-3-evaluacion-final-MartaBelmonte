// CharacterDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const character = characters.find((character) => character.id === parseInt(id));

  if (!character) {
    return <div>Character not found.</div>;
  }

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




