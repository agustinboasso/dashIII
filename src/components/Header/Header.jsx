// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Ventas</h1>
      <div className="flex items-center">
        <Link to="/" className="mr-4">Inicio</Link>
        <Link to="/casos" className="mr-4">Casos</Link>
        <span className="mr-4">Modo agente</span>
        <button className="bg-green-500 px-4 py-2 rounded">Cambiar</button>
      </div>
    </div>
  );
};

export default Header;
