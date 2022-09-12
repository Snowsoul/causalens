import React from "react";
import FeatureImportancesChartStyled from "./FeatureImportancesChart.styled";
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
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Feature Importances",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#BB86FC",
      backgroundColor: "rgba(187, 134, 252, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#00DAC6",
      backgroundColor: "rgba(0, 218, 196, 0.5)",
    },
  ],
};
function FeatureImportancesChart() {
  return (
    <FeatureImportancesChartStyled>
      <Bar options={options} data={data} />
    </FeatureImportancesChartStyled>
  );
}

export default FeatureImportancesChart;
