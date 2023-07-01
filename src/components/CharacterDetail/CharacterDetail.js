// CharacterDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const character = characters.find((character) => character.id === parseInt(id));

  if (!character) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos del personaje
  }

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Episode count: {character.episode.length}</p>
      <p>Status: {character.status}</p>
    </div>
  );
}

export default CharacterDetail;





