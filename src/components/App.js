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
  const handleFilterChange = (nameValue, speciesValue) => {
    setNameFilter(nameValue);
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
          <Route
            path="/*" // Ruta para cualquier URL no definida anteriormente
            element={<NotFoundPage />} // Componente para mostrar el mensaje de error
          />
        </Routes>
      </div>
    </Router>
  );
}

function NotFoundPage() {
  return <h2>El personaje que buscas no existe</h2>;
}

export default App;




























