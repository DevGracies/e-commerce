import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Traffic = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Desktop", "Tablet", "Phone"],
    datasets: [
      {
        label: "# of Votes",
        data: [19, 6, 3],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 206, 86)",
          "rgb(255, 159, 64)",
        ],
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data} />;
    </div>
  );
};

export default Traffic;
