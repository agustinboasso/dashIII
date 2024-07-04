// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Ventas</h1>
      <div className="flex items-center">
        <span className="mr-4">Modo agente</span>
        <button className="bg-green-500 px-4 py-2 rounded">Cambiar</button>
      </div>
    </div>
  );
};

export default Header;
