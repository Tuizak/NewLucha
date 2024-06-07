// src/Rutas/Paginas/Perfil/Perfil.jsx
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTicketAlt, FaUser } from 'react-icons/fa';
import './DesingPerfil.css'; 
import { AuthContext } from '../../../contexts/AuthContext';

const Perfil = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/Login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Retorna null para no renderizar nada mientras redirige
  }

  return (
    <div className="PerfilContainer">
      <div className="Perfil">
        <h1>Bienvenido</h1>
        <h1>{user.name}!!</h1> {/* Asumiendo que el nombre del usuario está en user.name */}
        
        <div>
          <FaTicketAlt /> Boletos
          <Link to="/MisBoletos">Mis Boletos</Link>
        </div>
        
        <div className="separator" /> {/* Línea de separación */}
        
        <div>
          <FaUser /> Perfil
          <Link to="/DetallesPerfil">Detalles de Perfil</Link>
        </div>
      </div>
      <button className="cerrarSesionButton">Cerrar Sesión</button>
    </div>
  );
};

export default Perfil;
