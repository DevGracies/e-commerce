import React from "react";
import { AiOutlineSync } from "react-icons/ai";
import Chart from "react-google-charts";

const Profit = () => {
  const data = [
    ["Month", "Sales", "Expenses"],
    ["Jan", 18000, 11000],
    ["Feb", 15000, 10500],
    ["Mar", 5000, 4500],
    ["Apr", 8000, 6000],
    ["May", 1500, 1000],
    ["Jun", 13000, 8000],
    ["Jul", 13000, 8000],
    ["Aug", 16000, 10000],
    ["Sep", 18000, 11000],
    ["Oct", 18500, 11000],
    ["Nov", 18000, 11000],
    ["Dec", 20000, 18000],
  ];

  const options = {
    colors: ["rgb(54, 162, 235)", "#D9C7FF"],
    backgroudColor: "none",
    marginLeft: [100, 300],
    chartArea: {
      margin: [100, 300],
    },
  };

  return (
    <div className=" rounded shadow-lg m-8">
      <div className="flex items-center justify-between">
        <h2>Sales</h2>
        <div className="flex items-center">
          <AiOutlineSync />
          <h6 className=" ml-2">sync</h6>
        </div>
      </div>
      <div className="w-full ml-68 flex ">
        <Chart
          chartType="Bar"
          width="80%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Profit;
