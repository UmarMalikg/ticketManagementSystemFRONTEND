import React from "react";

const OneCompanyStat = ({ amount, name }) => {
  return (
    <div className="one-company-stat">
      <h2 className="o-c-s-amount">{amount}</h2>
      <p className="o-c-s-name">{name}</p>
    </div>
  );
};

export default OneCompanyStat;
