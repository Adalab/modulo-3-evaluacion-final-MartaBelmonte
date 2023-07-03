import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
      <div className="character-detail-info">
        <p>{selectedCharacter.species}</p>
        <p>{selectedCharacter.status}</p>
        <p>{selectedCharacter.gender}</p>
        <p>{selectedCharacter.location.name}</p>
      </div>
      <div className="image-container">
        {selectedCharacter.status === 'Dead' && (
          <div className="character-detail-dead">
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













