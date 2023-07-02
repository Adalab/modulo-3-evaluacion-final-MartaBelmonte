import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Dead from '../../Images/dead.png';

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedCharacter = characters.find((character) => character.id === parseInt(id));
    if (!selectedCharacter) {
      navigate('/');
    }
  }, [characters, id, navigate]);

  const selectedCharacter = characters.find((character) => character.id === parseInt(id));
  if (!selectedCharacter) {
    return null;
  }

  const handleBackClick = () => {
    navigate('/');
  };

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
        <button className="back-link" onClick={handleBackClick}>Back to Character List</button>
      </div>
    </div>
  );
}

export default CharacterDetail;












