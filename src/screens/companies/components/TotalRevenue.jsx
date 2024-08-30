import React from "react";

const TotalRevenue = ({ amount, percentage }) => {
  return (
    <div className="total-revenue">
      <div className="total-revenue-box">
        <p className="t-r-p-a">{amount}</p>
        <h3 className="t-r-h-a">{amount}</h3>
        <p className="t-r-per">+{percentage}%</p>
      </div>
    </div>
  );
};

export default TotalRevenue;
