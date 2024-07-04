// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, incident }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden w-3/4 p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Detalles de la Incidencia [Ref.: {incident.codigo}]</h2>
          <button onClick={onClose} className="text-gray-700 hover:text-gray-900">&times;</button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">General</h3>
          <p><strong>Estado:</strong> {incident.estado}</p>
          <p><strong>Creado:</strong> {incident.creado}</p>
          <p><strong>Modificado:</strong> {incident.modificado}</p>
          <p><strong>Demora:</strong> {incident.demora}</p>
          <p><strong>Abonado:</strong> {incident.abonado}</p>
          <p><strong>Lugar:</strong> {incident.lugar}</p>
          <p><strong>Detalle/Motivo:</strong> {incident.motivo}</p>
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
