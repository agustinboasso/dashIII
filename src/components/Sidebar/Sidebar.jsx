// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4 text-white">
      <div className="mb-8">
        <h2 className="text-xl font-bold">KineoIABot</h2>
        <p className="text-sm">Agente 1</p>
      </div>
      <ul>
        <li className="mb-4"><Link to="/casos" className="block py-2 px-4 hover:bg-gray-700">Casos</Link></li>
        <li className="mb-4"><Link to="/" className="block py-2 px-4 hover:bg-gray-700">Canales</Link></li>
        <li className="mb-4"><Link to="/" className="block py-2 px-4 hover:bg-gray-700">Agentes</Link></li>
        <li className="mb-4"><Link to="/" className="block py-2 px-4 hover:bg-gray-700">Bots</Link></li>
        <li className="mb-4"><Link to="http://localhost:3000/" className="block py-2 px-4 hover:bg-gray-700">Mensajería</Link></li>
        <li className="mb-4"><Link to="/" className="block py-2 px-4 hover:bg-gray-700">Reportes</Link></li>
        <li className="mb-4"><Link to="/" className="block py-2 px-4 hover:bg-gray-700">Productos</Link></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;