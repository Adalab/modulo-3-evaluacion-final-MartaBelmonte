// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filters from './Filters/Filters';
import CharacterList from './CharacterList/CharacterList';
import CharacterDetail from './CharacterDetail/CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterValue, setFilterValue] = useState('');

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
  };

  return (
    <Router>
      <div>
        <h1>Rick and Morty Characters</h1>
        <Filters filterValue={filterValue} handleFilterChange={handleFilterChange} />
        <Routes>
          <Route
            path="/"
            element={<CharacterList characters={characters} filterValue={filterValue} />}
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail characters={characters} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
























