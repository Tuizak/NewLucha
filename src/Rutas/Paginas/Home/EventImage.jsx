import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'; 
import './EventImage.css';

const EventImage = ({ imageURL }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate('/EleccionB'); 
    } else {
      navigate('/Login'); 
    }
  };

  return (
    <div className="event-image-container">
      <img className="event-image" src={imageURL} alt="Event" />
      <div className="button-container">
        <button className="reserve-button" onClick={handleClick}>
          Reservar Boletos
        </button>
      </div>
    </div>
  );
};

export default EventImage;
