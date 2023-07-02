import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const selectedCharacter = characters.find((character) => character.id === parseInt(id));
    if (!selectedCharacter) {
      navigate('/');
    }
  }, [characters, id, navigate]);

  useEffect(() => {
    const handleBackNavigation = (event) => {
      if (event.persist) {
        event.persist();
      }
      if (event.keyCode === 37 && location.pathname.includes('character')) {
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleBackNavigation);

    return () => {
      window.removeEventListener('keydown', handleBackNavigation);
    };
  }, [navigate, location]);

  const selectedCharacter = characters.find((character) => character.id === parseInt(id));
  if (!selectedCharacter) {
    return null;
  }

  return (
    <div className="character-detail">
      <h2>{selectedCharacter.name}</h2>
      <p>Species: {selectedCharacter.species}</p>
      <p>Status: {selectedCharacter.status}</p>
      <p>Gender: {selectedCharacter.gender}</p>
      <p>Location: {selectedCharacter.location.name}</p>
      <div className="image-container">
        <img src={selectedCharacter.image} alt={selectedCharacter.name} />
        <Link to="/" className="back-link">Back to Character List</Link>
      </div>
    </div>
  );
}

export default CharacterDetail;








