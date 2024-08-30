import React from "react";
import { Link } from "react-router-dom";

const OneCompanyRevenue = ({ serviceName, revenue, link }) => {
  return (
    <div className="one-company-revenue">
      <div className="o-c-r-view-detail">
        <div>
          <img src="../../../assets/bus.png" />
        </div>
        <div>
          <h5>{serviceName}</h5>
          <p>{revenue}</p>
        </div>
      </div>
      <div className="o-c-r-open-detail">
        <Link to={link}>
          <button className="btn">View details</button>
        </Link>
      </div>
    </div>
  );
};

export default OneCompanyRevenue;
