import React from "react";

const Chart = ({ name, amount, chart }) => {
  return (
    <div className="chart">
      <div className="about-chart">
        <p className="chart-name">{name}</p>
        <h1 className="chart-amount">{amount}</h1>
      </div>
      <div className="my-chart">{chart}</div>
    </div>
  );
};

export default Chart;
