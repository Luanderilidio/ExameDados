import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      grid: {
        display: false, // Desativa a grade no eixo Y
      },
      ticks: {
        font: {
          size: 14, // Tamanho da fonte no eixo Y
          family: 'Sora', // Nome da fonte no eixo Y
        },
      },
    },
    x: {
      grid: {
        display: false, // Desativa a grade no eixo X
      },
      ticks: {
        font: {
          size: 14, // Tamanho da fonte no eixo Y
          family: 'Sora', // Nome da fonte no eixo Y
        },
      },
    },
    
  },
};

const labels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Positivo",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(41, 247, 0)",
      backgroundColor: "rgba(41, 247, 0, 0.5)",
    },
    {
      fill: true,
      label: "Neutro",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(0, 57, 257)",
      backgroundColor: "rgba(0, 57, 257, 0.5)",
    },
    {
      fill: true,
      label: "Negativo",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(247, 0, 0)",
      backgroundColor: "rgba(247, 0, 0, 0.5)",
    },
  ],
};

export function LineArea() {


  return <Line options={options} data={data} />;
}
