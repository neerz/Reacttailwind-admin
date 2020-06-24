import React from "react";
import { Bar } from "react-chartjs-2";
import colors from "../../constants/colors";

export default props => {
  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const chartData = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, "#ef9a9a");
    gradient.addColorStop(1, "white");
    const data = Array(6)
      .fill(0)
      .map(v => random(1, 5));
    return {
      labels: Array(6).fill(0),
      datasets: [
        {
          label: "# of Votes",
          data,
          backgroundColor: [
            colors["red-500"],
            colors["orange-500"],
            colors["yellow-500"],
            colors["green-500"],
            colors["teal-500"],
            colors["blue-500"],
            colors["indigo-500"],
            colors["purple-500"],
            colors["pink-500"]
          ],
          borderColor: [colors["red-500"]],
          borderWidth: 3
        }
      ]
    };
  };
  const chartOptionClean = {
    legend: {
      display: false
    },
    // title: {
    //   display: false
    // },
    layout: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    },
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMin: 0
          }
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  return <Bar data={chartData} options={chartOptionClean} />;
};
