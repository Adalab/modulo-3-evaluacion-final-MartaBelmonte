import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import Dead from '../../Images/dead.png';

function CharacterDetail({ characters }) {
  const { id } = useParams();   // Obtiene el parámetro 'id' de la URL actual
  const navigate = useNavigate();  // Obtiene la función 'navigate' para navegar a diferentes rutas
  const location = useLocation();  // Obtiene información sobre la ubicación actual de la aplicación

  // Busca el personaje seleccionado en el array de 'characters'
  useEffect(() => {
    const selectedCharacter = characters.find((character) => character.id === parseInt(id));
    if (!selectedCharacter) {  // Si no encuentra el personaje, navega a la ruta principal
      navigate('/');
    }
  }, [characters, id, navigate]);

  useEffect(() => {
    // Maneja la navegación hacia la ruta principal cuando se presiona la tecla de flecha izquierda
    const handleBackNavigation = (event) => {
      if (event.persist) {
        event.persist();
      }
      if (event.keyCode === 37 && location.pathname.includes('character')) {
        navigate('/');
      }
    };

    // Agrega un event listener para escuchar los eventos 'keydown' (tecla presionada)
    window.addEventListener('keydown', handleBackNavigation);

    // Elimina el event listener anterior cuando no hace eso
    return () => {
      window.removeEventListener('keydown', handleBackNavigation);
    };
  }, [navigate, location]);

  // Busca el objeto de 'selectedCharacter' cuyo 'id' coincide con el 'id' proporcionado en la URL
  const selectedCharacter = characters.find((character) => character.id === parseInt(id));

  // Si no se encontró el personaje seleccionado, no se renderiza nada
  if (!selectedCharacter) {
    return null;
  }

  // Renderiza la información del personaje y los elementos HTML correspondientes
  return (
    <div className="character-detail">
      <h2 className="character-detail-name">{selectedCharacter.name}</h2>
      <p>Species: {selectedCharacter.species}</p>
      <p>Status: {selectedCharacter.status}</p>
      <p>Gender: {selectedCharacter.gender}</p>
      <p>Location: {selectedCharacter.location.name}</p>
      <div className="image-container">
        {selectedCharacter.status === 'Dead' && (
          <div className="dead-icon-container">
            <img src={Dead} alt="Dead Icon" className="dead-icon blink" />
          </div>
        )}
        <img src={selectedCharacter.image} alt={selectedCharacter.name} className="img-detail" />
        <Link to="/" className="back-link">Back to Character List</Link>
      </div>
    </div>
  );
}

export default CharacterDetail;











