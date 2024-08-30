import React from "react";

function DashboardStat({ name, amount, status }) {
  // Determine the class based on the status
  const statusClass =
    status >= 0 ? "dashboard-stat-status-p" : "dashboard-stat-status-n";
  // Determine the sign based on the status
  const sign = status >= 0 ? "+" : "-";
  // Construct the mystat string using template literals
  const mystat = `${sign}${Math.abs(status)}%`;

  return (
    <div className="dashboard-stat">
      <p className="dashboard-stat-name">Total {name}</p>
      <h1 className="dashboard-stat-amount">{amount}</h1>
      <p className={`dashboard-stat-status ${statusClass}`}>{mystat}</p>
    </div>
  );
}

export default DashboardStat;
