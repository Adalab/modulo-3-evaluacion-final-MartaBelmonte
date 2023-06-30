import React, { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = () => {
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
        .catch((error) => console.error(error));
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>Name: {character.name}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


