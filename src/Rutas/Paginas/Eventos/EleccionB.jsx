import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DesingItemCard.css'; // Importa el CSS

function ItemCard() {
  const [ticketCounts, setTicketCounts] = useState({
    vip: 0,
    preferente: 0,
    general: 0
  });
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [prices, setPrices] = useState({});
  const { eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulación de precios obtenidos desde Stripe
    const priceMapping = {
      general: 'test_8wMbM47RYbVs4Bq9AF',
      VIP: 'test_00geYgb4a4t00la6os',
      preferente: 'test_14k8zS7RY7Fc8RG6or',
    };

    setPrices(priceMapping);
  }, [eventId]);

  const handleToggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  const handleTicketCountChange = (type, increment) => {
    setTicketCounts(prevCounts => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] + increment, 0)
    }));
  };

  const handleBuyTicket = (ticketType) => {
    if (ticketCounts[ticketType] === 0) {
      alert(`Por favor selecciona al menos un boleto de tipo ${ticketType}.`);
      return;
    }

    const stripeLink = prices[ticketType];
    if (stripeLink) {
      window.location.href = `https://buy.stripe.com/${stripeLink}`;
    } else {
      alert('Opción de boleto no válida.');
    }
  };

  const totalTickets = Object.values(ticketCounts).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="ItemCardContainer">
      <div className="ItemCardWrapper">
        <div className="ItemCard">
          <img
            src="https://scontent.fyum1-1.fna.fbcdn.net/v/t39.30808-6/447777838_993000279492293_8287995765407737509_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFRKkor0ounm-KULazWbYDLlRz-wfocFtqVHP7B-hwW2iL26DgUDEArYSmHsCsc7XjIYnDQfIeRbLhG_7BdIe_y&_nc_ohc=KzYaqNKIYDYQ7kNvgH0FuMM&_nc_ht=scontent.fyum1-1.fna&oh=00_AYAWJAPFKGQJL5QqfwTbz637Adhm3pk8mBG__WUE4SB3UQ&oe=66680C6F"
            alt="Event"
            className="ItemCardImage"
          />
          <div className="ItemCardDetails">
            <h2>Evento de Lucha Libre</h2>
            <p>Lugar: Arena Ciudad</p>
            <p>Fecha: 25 de Diciembre</p>
            <p>Hora: 8:00 PM</p>
            <div className="TicketOptions">
              {['vip', 'preferente', 'general'].map(type => (
                <div className="TicketOption" key={type}>
                  <label>
                    <input 
                      type="checkbox" 
                      checked={ticketCounts[type] > 0} 
                      onChange={() => handleTicketCountChange(type, ticketCounts[type] > 0 ? -1 : 1)} 
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                  {ticketCounts[type] > 0 && (
                    <div className="CountControl">
                      <button className="CountButton" onClick={() => handleTicketCountChange(type, -1)}>-</button>
                      <input type="text" value={ticketCounts[type]} readOnly className="CountInput" />
                      <button className="CountButton" onClick={() => handleTicketCountChange(type, 1)}>+</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="TotalTickets">
              <p>Cantidad: {totalTickets}</p>
              <button className="DetailButton" onClick={handleToggleDetails}>
                {detailsVisible ? 'Ocultar detalles' : 'Ver detalles'}
              </button>
              {detailsVisible && (
                <div className="Details">
                  <p>Detalles de los boletos:</p>
                  {Object.entries(ticketCounts).map(([type, count]) => (
                    <p key={type}>{type.charAt(0).toUpperCase() + type.slice(1)}: {count}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="ItemCardButtons">
              {['vip', 'preferente', 'general'].map(type => (
                <button key={type} className="ActionButton" onClick={() => handleBuyTicket(type)}>
                  Comprar {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
