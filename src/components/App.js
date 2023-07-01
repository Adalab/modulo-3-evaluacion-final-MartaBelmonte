import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filters from './Filters/Filters';
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
    <Router>
      <div>
        <h1>Rick and Morty Characters</h1>
        <Filters filterValue={filterValue} handleFilterChange={handleFilterChange} />
        <Routes>
          <Route
            path="/"
            element={
              <CharacterDetail character={selectedCharacter} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;








