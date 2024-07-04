// src/components/IncidentList.js
import React from 'react';

const incidents = [
  {
    tecnico: 'BG',
    codigo: '24-00942',
    creado: '03/07/2024 22:00',
    modificado: '03/07/2024 22:01',
    lugar: 'CLINICA DE ZIMET COD.6778',
    abonado: 'CLINICA DE ZIMET COD.6778',
    demora: 'un minuto',
    motivo: 'INFORMA CAMBIO DE GUARD...',
    estado: 'Solucionado'
  },
  {
    tecnico: 'BG',
    codigo: '24-00941',
    creado: '03/07/2024 12:23',
    modificado: '03/07/2024 12:24',
    lugar: 'TRONIC S.A. COD.4120',
    abonado: 'TRONIC S.A. COD.4120',
    demora: 'un día',
    motivo: 'PIDE SE LE ENVIE NRO DE C...',
    estado: 'Abierto'
  },
  // Agrega más incidencias aquí
];

const Incidents = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="mb-4">
        <input type="date" className="mr-2 p-2 border rounded" />
        <input type="date" className="mr-2 p-2 border rounded" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Filtrar</button>
      </div>
      <div className="overflow-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Técnico</th>
              <th className="py-2 px-4 border-b">Código</th>
              <th className="py-2 px-4 border-b">Creado</th>
              <th className="py-2 px-4 border-b">Modificado</th>
              <th className="py-2 px-4 border-b">Lugar/Equipo</th>
              <th className="py-2 px-4 border-b">Abonado</th>
              <th className="py-2 px-4 border-b">Demora</th>
              <th className="py-2 px-4 border-b">Motivo</th>
              <th className="py-2 px-4 border-b">Estado</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{incident.tecnico}</td>
                <td className="py-2 px-4 border-b">{incident.codigo}</td>
                <td className="py-2 px-4 border-b">{incident.creado}</td>
                <td className="py-2 px-4 border-b">{incident.modificado}</td>
                <td className="py-2 px-4 border-b">{incident.lugar}</td>
                <td className="py-2 px-4 border-b">{incident.abonado}</td>
                <td className="py-2 px-4 border-b">{incident.demora}</td>
                <td className="py-2 px-4 border-b">{incident.motivo}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`px-2 py-1 rounded ${incident.estado === 'Solucionado' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                    {incident.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incidents;
