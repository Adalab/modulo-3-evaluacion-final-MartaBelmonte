import React, { useEffect, useState } from 'react';
import Filters from './Filters/Filters';
import CharacterList from './CharacterList/CharacterList';
import CharacterDetail from './CharacterDetail/CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

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

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <Filters filterValue={filterValue} handleFilterChange={handleFilterChange} />
      <CharacterList
        characters={characters}
        filteredCharacters={filteredCharacters}
        handleCharacterClick={handleCharacterClick}
      />
      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
    </div>
  );
}

export default App;




