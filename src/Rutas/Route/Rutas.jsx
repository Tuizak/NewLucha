// src/Rutas/Rutas.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Perfil, Home, Eventos } from '../Paginas';
import Register from '../../Componentes/Register/Register';
import MisBoletos from '../Paginas/Perfil/MisBoletos';
import DetallesPerfil from '../Paginas/Perfil/DetallesPerfil';
import Login from '../../Componentes/Login/Login';
import NavBar from '../../Componentes/NavBar/NavBar';
import EleccionB from '../Paginas/Eventos/EleccionB';

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MisBoletos" element={<MisBoletos />} />
        <Route path="/DetallesPerfil" element={<DetallesPerfil />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EleccionB" element={<EleccionB />} />
        <Route path="/eleccionb/:eventId" element={<EleccionB />} />
      </Route>
    </Routes>
  );
};

export default Rutas;
