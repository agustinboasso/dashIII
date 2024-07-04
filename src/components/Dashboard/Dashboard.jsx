// src/components/Dashboard.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Registrar los componentes y escalas
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Dashboard = () => {
  // Datos de ejemplo para los gráficos
  const lineData = {
    labels: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01'],
    datasets: [
      {
        label: 'Cantidad de consultas',
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['Ascensor sin funcionamiento', 'Programar servicio técnico', 'Reprogramar visita técnica', 'Turno particular'],
    datasets: [
      {
        label: 'Cantidad de consultas',
        data: [18, 5, 3, 2],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <p>Chats en espera</p>
          <h3 className="text-2xl font-bold">1</h3>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <p>Chats en atención</p>
          <h3 className="text-2xl font-bold">4</h3>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <p>Chats finalizados</p>
          <h3 className="text-2xl font-bold">195</h3>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <p>Tiempo de espera prom.</p>
          <h3 className="text-2xl font-bold">10 min 18 seg</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Cantidad de consultas por tema</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Cantidad de consultas por día</h2>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
