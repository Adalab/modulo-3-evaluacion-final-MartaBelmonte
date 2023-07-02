import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filters from './Filters/Filters';
import CharacterList from './CharacterList/CharacterList';
import CharacterDetail from './CharacterDetail/CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');

  useEffect(() => {
    const fetchCharacters = () => {
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
        .catch((error) => console.error(error));
    };

    fetchCharacters();
  }, []);

  // Función para actualizar estados de filtros de especie y nombre
  const handleFilterChange = (nameValue, speciesValue) => {  //2 parámetros
    setNameFilter(nameValue);  //actualiza el estado y es un nuevo filtro generado
    setSpeciesFilter(speciesValue);  
  };

  return (
    <Router>
      <div className="container">
        <h1 className="title">Rick and Morty Characters</h1>
        <Filters handleFilterChange={handleFilterChange} />
        <Routes>
          <Route
            path="/"
            element={
              <CharacterList
                characters={characters}
                nameFilter={nameFilter}
                speciesFilter={speciesFilter}
              />
            }
          />
          <Route path="/character/:id" element={<CharacterDetail characters={characters} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


























