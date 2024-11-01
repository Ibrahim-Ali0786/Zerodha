import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 10, // Font size for legend labels
        },
      },
    },
    title: {
      display: true,
      text: "Holdings Chart",
      font: {
        size: 30, // Font size for chart title
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10, // Font size for x-axis labels
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 10, // Font size for y-axis labels
        },
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}