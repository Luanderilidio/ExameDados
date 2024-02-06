import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Nulos', 'Brancos', 'Válidos', 'Inválidos'],
  datasets: [
    {
      label: '# Quantidade Votos',
      data: [faker.datatype.number({ min: 10, max: 100 }), faker.datatype.number({ min: 10, max: 100 }), faker.datatype.number({ min: 10, max: 100 }), faker.datatype.number({ min: 10, max: 100 })],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
    scales: {
        y: {
          grid: {
            display: false, // Desativa a grade no eixo Y
          },
          
        },
        x: {
          grid: {
            display: false, // Desativa a grade no eixo X
          },
          
        },
        
      },
}

export function RadarChart() {
  return <Radar data={data}  />;
}
