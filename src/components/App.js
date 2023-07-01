import React, { useEffect, useState } from 'react';
import Filters from './Filters/Filters';


function App() {
  const [characters, setCharacters] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = () => {
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
        .catch((error) => console.error(error));
    };

    fetchCharacters();
  }, []);

  const handleFilterChange = (event) => {
    const inputValue = event.target.value;
    setFilterValue(inputValue);

    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <Filters filterValue={filterValue} handleFilterChange={handleFilterChange} />
      <div>
        {(filterValue !== '' ? filteredCharacters : characters).map((character) => (
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



