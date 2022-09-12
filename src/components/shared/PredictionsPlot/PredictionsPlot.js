import React from "react";
import PredictionsPlotStyled from "./PredictionsPlot.styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-plugin-zoom";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Actual vs Predictions Plot",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const testData = {
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

function formatChartData(data = [], results) {
  let label1Dates = [];
  let label1Values = [];
  let label1Name = "Please select a series first";

  let label2Dates = [];
  let label2Values = [];
  let label2Name = "Please select a series first";

  const { predictions } = results;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const [date, yValue] = Object.keys(item);

    const predictionItem = predictions.find((predItem) => {
      const [date2, yValue2] = Object.keys(predItem);
      return predItem[date2] === item[date];
    });

    const [date2, yValue2] = Object.keys(predictionItem);

    if (i === 0) {
      label1Name = `Actual Data (${yValue})`;
      label2Name = `Prediction Data (${yValue2})`;
    }

    label1Dates.push(item[date]);
    label1Values.push(item[yValue]);

    label2Dates.push(predictionItem[date2]);
    label2Values.push(predictionItem[yValue2]);
  }

  return {
    labels: label1Dates,
    datasets: [
      {
        label: label1Name,
        data: label1Values,
        borderColor: "#BB86FC",
        backgroundColor: "rgba(187, 134, 252, 0.5)",
      },
      {
        label: label2Name,
        data: label2Values,
        borderColor: "rgba(0, 218, 196, 0.5)",
        backgroundColor: "rgba(0, 218, 196, 0.5)",
      },
    ],
  };
}

function PredictionsPlot({ data: { data, results } }) {
  return (
    <PredictionsPlotStyled>
      <Line options={options} data={formatChartData(data, results)} />
    </PredictionsPlotStyled>
  );
}

export default PredictionsPlot;
